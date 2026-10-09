/**
 * Desanya Studio — link config (the only place to edit these URLs)
 *
 * TODO: googleReviewUrl
 *   Paste the Google Business Profile “Ask for reviews” link, for example
 *   https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
 *   Leave '' until that link exists. The review button stays hidden, and the
 *   “coming soon” line stays hidden, until a real https link is pasted here.
 *
 * TODO: social
 *   Paste full https profile URLs for Desanya Studio. Leave '' to hide that icon.
 *   Instagram is https://www.instagram.com/desanya_after_dark/ (@desanya_after_dark).
 *   Facebook is https://www.facebook.com/profile.php?id=61594838174588.
 *   TikTok is https://www.tiktok.com/@desanyastudio (@desanyastudio).
 *   X, Threads, and LinkedIn stay hidden until a URL is pasted here.
 *   YouTube is https://www.youtube.com/@DesanyaStudio.
 *   Permanent channel ID, if the handle ever breaks: UCwcgZihQYLXfixWSYFdqEmw.
 *   Do not paste search-result pages or placeholder profiles.
 */
var DESANYA_LINKS = {
  googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=Desanya%27s+Web+Designs+Niota+TN&query_place_id=605467311094588',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61594838174588',
    instagram: 'https://www.instagram.com/desanya_after_dark/',
    linkedin: '',
    threads: '',
    tiktok: 'https://www.tiktok.com/@desanyastudio',
    x: '',
    // Permanent channel ID, if this handle ever breaks: UCwcgZihQYLXfixWSYFdqEmw
    youtube: 'https://www.youtube.com/@DesanyaStudio'
  }
};

/**
 * Desanya Studio — shared site behavior (all pages)
 * Mobile nav · footer year · order prefill · reviews · social · gallery lightbox
 */
(function () {
  'use strict';

  var SOCIAL_ICONS = [
    {
      key: 'facebook',
      label: 'Desanya Studio on Facebook',
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14.2 8.4V6.9c0-.7.2-1.1 1.2-1.1H16.6V3.4h-1.8C12.4 3.4 11.3 4.6 11.3 6.6v1.8H9.5v2.4h1.8V20.6h2.9v-9.8h2l.3-2.4h-2.3z"/></svg>'
    },
    {
      key: 'instagram',
      label: 'Desanya Studio on Instagram',
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor"/></svg>'
    },
    {
      key: 'linkedin',
      label: 'Desanya Studio on LinkedIn',
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.4 9.1H4v10.4h2.4V9.1zM5.2 4.2c-.9 0-1.5.6-1.5 1.4s.6 1.4 1.5 1.4 1.5-.6 1.5-1.4-.6-1.4-1.5-1.4zM20 19.5h-2.4v-5.4c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.7H11.7V9.1h2.3v1.4c.4-.7 1.2-1.7 2.9-1.7 2.1 0 3.1 1.4 3.1 4.1v6.6z"/></svg>'
    },
    {
      key: 'threads',
      label: 'Desanya Studio on Threads',
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.2 3.8c2.8 0 4.7 1.6 5 4l-1.9.3c-.2-1.4-1.4-2.2-3.1-2.2-2 0-3.3 1.3-3.3 3.2 0 .4.1.8.2 1.2-1.3.3-2.1 1.3-2.1 2.6 0 1.6 1.3 2.8 3.2 2.8 1.3 0 2.2-.5 2.7-1.5.3.1.6.1.9.1 1 0 1.8-.6 2-1.6h1.8c-.3 1.9-1.8 3.1-3.8 3.1-.5 0-.9-.1-1.3-.2-.7 1.2-2 1.9-3.6 1.9-2.5 0-4.3-1.7-4.3-4 0-1.7 1-3 2.6-3.5-.1-.4-.2-.8-.2-1.3 0-3 2.3-5.2 5.4-5.2zm.2 9c0 .8-.6 1.3-1.5 1.3s-1.5-.5-1.5-1.3.6-1.3 1.5-1.3 1.5.5 1.5 1.3z"/></svg>'
    },
    {
      key: 'tiktok',
      label: 'Desanya Studio on TikTok',
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14.2 3h2.2a5.2 5.2 0 0 0 3.4 3.2v2.3a7.4 7.4 0 0 1-3.4-1v6.7a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.5a3.2 3.2 0 1 0 2.2 3.1V3z"/></svg>'
    },
    {
      key: 'x',
      label: 'Desanya Studio on X',
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14.6 10.4 21 3.2h-1.5l-5.6 6.2L9.4 3.2H3.8l6.7 9.7-6.7 7.9h1.5l5.9-6.9 4.7 6.9h5.6l-7-10.4zm-2.1 2.3-.7-1L6.4 4.6h2.3l4.4 6.2.7 1 5.8 8.1h-2.3l-4.8-6.2z"/></svg>'
    },
    {
      key: 'youtube',
      label: 'Desanya Studio on YouTube',
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M22.5 12.2s0-3-.4-4.3c-.2-.8-.9-1.5-1.7-1.7C18.9 5.8 12 5.8 12 5.8s-6.9 0-8.4.4c-.8.2-1.5.9-1.7 1.7C1.5 9.2 1.5 12.2 1.5 12.2s0 3 .4 4.3c.2.8.9 1.5 1.7 1.7 1.5.4 8.4.4 8.4.4s6.9 0 8.4-.4c.8-.2 1.5-.9 1.7-1.7.4-1.3.4-4.3.4-4.3zM9.9 15.3V9.1l5.8 3.1-5.8 3.1z"/></svg>'
    }
  ];

  function configuredUrl(value) {
    var url = String(value || '').trim();
    if (!url || url === '#') return '';
    if (!/^https?:\/\//i.test(url)) return '';
    return url;
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('siteNav');
    if (!toggle || !nav) return;

    var scrollY = 0;
    var scrollCaptured = false;
    var mobileQuery = window.matchMedia('(max-width: 820px)');

    function currentScroll() {
      return window.scrollY || window.pageYOffset || 0;
    }

    // Capture before focus. html scroll-padding plus a sticky header makes Safari
    // nudge the page when the toggle receives focus, which would lock the wrong offset.
    toggle.addEventListener('pointerdown', function () {
      if (!document.body.classList.contains('nav-open')) {
        scrollY = currentScroll();
        scrollCaptured = true;
      }
    });

    function setOpen(open) {
      var mobile = mobileQuery.matches;
      if (open && !mobile) open = false;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
      if (mobile && !open) nav.setAttribute('aria-hidden', 'true');
      else nav.removeAttribute('aria-hidden');
      if (open) {
        if (!scrollCaptured) scrollY = currentScroll();
        scrollCaptured = false;
        document.body.style.top = '-' + scrollY + 'px';
        document.body.classList.add('nav-open');
      } else if (document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        document.body.style.top = '';
        // html uses scroll-behavior: smooth; an animated restore flashes the top of the page.
        var root = document.documentElement;
        var previous = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollY);
        root.style.scrollBehavior = previous;
      }
    }

    if (mobileQuery.matches) nav.setAttribute('aria-hidden', 'true');

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus({ preventScroll: true });
      }
    });
    mobileQuery.addEventListener('change', function () {
      setOpen(false);
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ---------- Contact + order forms (FormSubmit) ---------- */
  function initUtm() {
    var params = new URLSearchParams(window.location.search);
    var form = document.getElementById('orderForm');
    if (!form) return;
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (key) {
      var value = String(params.get(key) || '').replace(/[^\w\s-]+/g, ' ').trim().slice(0, 200);
      var input = form.querySelector('input[name="' + key + '"]');
      if (input) input.value = value;
    });
  }

  function initContact() {
    var params = new URLSearchParams(window.location.search);
    var orderForm = document.getElementById('orderForm');
    var orderSelect = document.getElementById('orderService');
    if (!orderForm || !orderSelect) return;

    function orderSubject() {
      var subject = orderForm.querySelector('[data-order-subject]');
      var chosen = orderSelect.value;
      if (subject) subject.value = 'New ORDER: ' + (chosen || 'service') + ' — desanya.tech';
    }

    var slug = params.get('service');
    if (slug) {
      Array.prototype.forEach.call(orderSelect.options, function (opt) {
        if (opt.getAttribute('data-slug') === slug) orderSelect.value = opt.value;
      });
    }
    orderSelect.addEventListener('change', orderSubject);
    orderForm.addEventListener('submit', orderSubject);
    orderSubject();
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

  }

  /* ---------- Google review link ---------- */
  function initReviews() {
    var reviewUrl = configuredUrl(DESANYA_LINKS.googleReviewUrl);
    document.querySelectorAll('[data-google-review]').forEach(function (block) {
      var link = block.querySelector('[data-google-review-link]');
      var pending = block.querySelector('[data-google-review-pending]');
      if (reviewUrl && link) {
        link.href = reviewUrl;
        link.hidden = false;
        if (pending) pending.hidden = true;
      } else if (link) {
        link.hidden = true;
        link.removeAttribute('href');
        if (pending) pending.hidden = true;
      }
    });

  }

  /* ---------- Social icons (only platforms with a real URL) ---------- */
  function initSocial() {
    var items = SOCIAL_ICONS.filter(function (item) {
      return configuredUrl(DESANYA_LINKS.social && DESANYA_LINKS.social[item.key]);
    });

    document.querySelectorAll('[data-social-block]').forEach(function (block) {
      var list = block.querySelector('[data-social-links]');
      if (!list) return;
      list.replaceChildren();
      if (!items.length) {
        block.hidden = true;
        return;
      }
      items.forEach(function (item) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var url = configuredUrl(DESANYA_LINKS.social[item.key]);
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', item.label + ' (opens in a new tab)');
        a.innerHTML = item.svg;
        li.appendChild(a);
        list.appendChild(li);
      });
      block.hidden = false;
    });

    var note = document.querySelector('[data-linkedin-note]');
    var noteLink = note && note.querySelector('[data-linkedin-link]');
    var linkedin = configuredUrl(DESANYA_LINKS.social && DESANYA_LINKS.social.linkedin);
    if (note && noteLink) {
      if (linkedin) {
        noteLink.href = linkedin;
        note.hidden = false;
      } else {
        note.hidden = true;
        noteLink.removeAttribute('href');
      }
    }
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
    var active = links;

    function show(i) {
      index = (i + active.length) % active.length;
      var a = active[index];
      var thumb = a.querySelector('img');
      img.src = a.getAttribute('href');
      img.alt = thumb ? thumb.alt : '';
      cap.textContent = a.getAttribute('data-caption') || '';
    }

    function openSet(a) {
      var set = a.getAttribute('data-lb-set');
      active = set
        ? links.filter(function (el) { return el.getAttribute('data-lb-set') === set; })
        : links.filter(function (el) { return !el.getAttribute('data-lb-set'); });
      if (active.indexOf(a) === -1) active = [a];
      var single = active.length < 2;
      prev.hidden = single;
      next.hidden = single;
      opener = a;
      show(active.indexOf(a));
      dialog.showModal();
      document.body.classList.add('lightbox-open');
    }

    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        openSet(a);
      });
    });

    prev.addEventListener('click', function () { show(index - 1); });
    next.addEventListener('click', function () { show(index + 1); });
    dialog.querySelector('[data-lb-close]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target.classList.contains('lightbox-inner')) dialog.close();
    });
    dialog.addEventListener('keydown', function (e) {
      if (active.length < 2) return;
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
    initUtm();
    initBooking();
    initReviews();
    initSocial();
    initLightbox();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
