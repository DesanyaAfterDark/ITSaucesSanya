/**
 * Desanya Studio — shared site behavior (all pages)
 * Mobile nav · footer year · contact + booking mailto · gallery lightbox
 */
(function () {
  'use strict';

  var MAILTO = 'hello@desanya.tech';

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('siteNav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 821px)').addEventListener('change', function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  /* ---------- Contact form (mailto; no fake server success) ---------- */
  function initContact() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    // Prefill "What you need" from services.html links: contact.html?need=Website
    var need = new URLSearchParams(window.location.search).get('need');
    var select = document.getElementById('need');
    if (need && select) {
      Array.prototype.forEach.call(select.options, function (opt) {
        if (opt.value === need) select.value = need;
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = val('name');
      var subject = encodeURIComponent('Desanya Studio inquiry — ' + val('need') + ' — ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + val('email') + '\n' +
        'What you need: ' + val('need') + '\n' +
        'Budget: ' + (val('budget') || 'Not specified') + '\n' +
        'How did you find Desanya: ' + (val('source') || 'Not specified') + '\n\n' +
        'Message:\n' + val('message') + '\n'
      );
      window.location.href = 'mailto:' + MAILTO + '?subject=' + subject + '&body=' + body;
    });
  }

  /* ---------- Booking ---------- */
  function initBooking() {
    var card = document.querySelector('[data-booking-url]');
    if (!card) return;

    // If a scheduler URL is configured, surface it as the primary option.
    var url = (card.getAttribute('data-booking-url') || '').trim();
    var link = card.querySelector('[data-booking-link]');
    if (url && link) {
      link.href = url;
      link.hidden = false;
    }

    var form = card.querySelector('[data-booking-form]');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var slot = form.querySelector('input[name="slot"]:checked');
      var name = val('bookName');
      var subject = encodeURIComponent('Intro chat request — ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + val('bookEmail') + '\n' +
        'Best time: ' + (slot ? slot.value : 'Not specified') + '\n' +
        'Specific days/times: ' + (val('bookNote') || 'Flexible') + '\n'
      );
      window.location.href = 'mailto:' + MAILTO + '?subject=' + subject + '&body=' + body;
    });
  }

  /* ---------- Gallery lightbox ---------- */
  function initLightbox() {
    var dialog = document.getElementById('lightbox');
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    if (!dialog || !links.length || typeof dialog.showModal !== 'function') return;

    var img = dialog.querySelector('[data-lb-img]');
    var cap = dialog.querySelector('[data-lb-caption]');
    var prev = dialog.querySelector('[data-lb-prev]');
    var next = dialog.querySelector('[data-lb-next]');
    var index = 0;
    var opener = null;

    function show(i) {
      index = (i + links.length) % links.length;
      var a = links[index];
      var thumb = a.querySelector('img');
      img.src = a.getAttribute('href');
      img.alt = thumb ? thumb.alt : '';
      cap.textContent = a.getAttribute('data-caption') || '';
    }

    var single = links.length < 2;
    prev.hidden = single;
    next.hidden = single;

    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        opener = a;
        show(i);
        dialog.showModal();
        document.body.classList.add('lightbox-open');
      });
    });

    prev.addEventListener('click', function () { show(index - 1); });
    next.addEventListener('click', function () { show(index + 1); });
    dialog.querySelector('[data-lb-close]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target.classList.contains('lightbox-inner')) dialog.close();
    });
    dialog.addEventListener('keydown', function (e) {
      if (single) return;
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
    dialog.addEventListener('close', function () {
      document.body.classList.remove('lightbox-open');
      if (opener) opener.focus();
    });
  }

  function init() {
    initNav();
    initYear();
    initContact();
    initBooking();
    initLightbox();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
