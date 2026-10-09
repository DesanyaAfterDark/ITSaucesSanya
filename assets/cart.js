/**
 * Desanya Studio — Cart
 * Slide-out cart drawer + localStorage persistence.
 * Exposed as window.DesanyaCart.
 *
 * Usage:
 *   DesanyaCart.add('website');            // add by catalog slug
 *   DesanyaCart.add('website', 2);         // add 2
 *   DesanyaCart.remove('website');
 *   DesanyaCart.setQty('website', 3);
 *   DesanyaCart.clear();
 *   DesanyaCart.getItems();  // [{slug,name,price,qty,recurring}, ...]
 *   DesanyaCart.getTotal();  // number
 *   DesanyaCart.getCount();  // total quantity
 *   DesanyaCart.open(); DesanyaCart.close();
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'desanya_cart_v1';

  /* ------------------------------------------------------------------ */
  /* Service catalog — mirrors the order form on contact.html            */
  /* recurring: true  => billed monthly; arranged after checkout        */
  /* ------------------------------------------------------------------ */
  var CATALOG = {
    'website':              { name: 'Website',                 price: 1600, recurring: false },
    'ad-landing-page':      { name: 'Ad landing page',         price: 600,  recurring: false },
    'ai-setup':             { name: 'AI setup',                price: 750,  recurring: false },
    'ai-managing':          { name: 'AI managing',             price: 550,  recurring: true  },
    'blog-post':            { name: 'Blog post',               price: 200,  recurring: false },
    'blog-monthly':         { name: 'Blog (monthly)',          price: 700,  recurring: true  },
    'brand-starter-kit':    { name: 'Brand starter kit',       price: 450,  recurring: false },
    'content':              { name: 'Content',                 price: 400,  recurring: false },
    'monthly-care':         { name: 'Monthly care',            price: 99,   recurring: true  },
    'photo-gallery-polish': { name: 'Photo & gallery polish',  price: 300,  recurring: false },
    'review-generation-kit':{ name: 'Review generation kit',   price: 200,  recurring: false },
    'seo-setup':            { name: 'SEO & Google setup',      price: 550,  recurring: false },
    'seo-managing':         { name: 'SEO & Google managing',   price: 450,  recurring: true  },
    'site-update-training': { name: 'Site update training',    price: 125,  recurring: false },
    'social-setup':         { name: 'Social setup',            price: 550,  recurring: false },
    'social-managing':      { name: 'Social managing',         price: 850,  recurring: true  }
  };

  /* ------------------------------------------------------------------ */
  /* State                                                               */
  /* ------------------------------------------------------------------ */
  var cart = {}; // slug -> qty

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var data = JSON.parse(raw);
        if (data && typeof data === 'object') {
          Object.keys(data).forEach(function (slug) {
            if (CATALOG[slug] && data[slug] > 0) cart[slug] = Math.min(99, Math.floor(data[slug]));
          });
        }
      }
    } catch (e) { /* private mode etc. — cart just won't persist */ }
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
    catch (e) { /* ignore */ }
  }

  function money(n) {
    return '$' + Number(n).toLocaleString('en-US');
  }

  /* ------------------------------------------------------------------ */
  /* Public API                                                          */
  /* ------------------------------------------------------------------ */
  function add(slug, qty) {
    if (!CATALOG[slug]) return false;
    qty = qty == null ? 1 : Math.max(1, Math.floor(qty));
    cart[slug] = Math.min(99, (cart[slug] || 0) + qty);
    save(); render();
    return true;
  }

  function remove(slug) {
    delete cart[slug];
    save(); render();
  }

  function setQty(slug, qty) {
    if (!CATALOG[slug]) return;
    qty = Math.floor(qty);
    if (qty <= 0) delete cart[slug];
    else cart[slug] = Math.min(99, qty);
    save(); render();
  }

  function clear() {
    cart = {};
    save(); render();
  }

  function getItems() {
    return Object.keys(cart).map(function (slug) {
      var c = CATALOG[slug];
      return { slug: slug, name: c.name, price: c.price, recurring: c.recurring, qty: cart[slug] };
    });
  }

  function getTotal() {
    return getItems().reduce(function (sum, it) { return sum + it.price * it.qty; }, 0);
  }

  function getCount() {
    return Object.keys(cart).reduce(function (sum, slug) { return sum + cart[slug]; }, 0);
  }

  function hasRecurring() {
    return getItems().some(function (it) { return it.recurring; });
  }

  /* ------------------------------------------------------------------ */
  /* Drawer UI                                                           */
  /* ------------------------------------------------------------------ */
  var els = {};

  function buildDrawer() {
    if (document.getElementById('ds-cart-root')) return;

    var root = document.createElement('div');
    root.id = 'ds-cart-root';
    root.innerHTML =
      '<div class="ds-cart-scrim" data-cart-close aria-hidden="true"></div>' +
      '<aside class="ds-cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart" aria-hidden="true">' +
        '<div class="ds-cart-head">' +
          '<h2>Your cart</h2>' +
          '<button type="button" class="ds-cart-close" data-cart-close aria-label="Close cart">&times;</button>' +
        '</div>' +
        '<div class="ds-cart-items" data-cart-items></div>' +
        '<div class="ds-cart-foot" data-cart-foot>' +
          '<div class="ds-cart-total"><span>Subtotal</span><strong data-cart-total>$0</strong></div>' +
          '<p class="ds-cart-note" data-cart-recurring-note hidden>Monthly services are billed separately after checkout — you\u2019ll only pay one-time items today.</p>' +
          '<a class="btn btn-primary ds-cart-checkout" href="checkout.html">Checkout</a>' +
          '<button type="button" class="btn btn-ghost ds-cart-continue" data-cart-close>Continue browsing</button>' +
        '</div>' +
      '</aside>';

    document.body.appendChild(root);

    els.root = root;
    els.drawer = root.querySelector('.ds-cart-drawer');
    els.items = root.querySelector('[data-cart-items]');
    els.foot = root.querySelector('[data-cart-foot]');
    els.total = root.querySelector('[data-cart-total]');
    els.recurringNote = root.querySelector('[data-cart-recurring-note]');

    root.addEventListener('click', function (e) {
      var closeBtn = e.target.closest('[data-cart-close]');
      if (closeBtn) { close(); return; }
      var qtyBtn = e.target.closest('[data-cart-qty]');
      if (qtyBtn) {
        var slug = qtyBtn.getAttribute('data-cart-qty');
        var delta = parseInt(qtyBtn.getAttribute('data-delta'), 10) || 0;
        setQty(slug, (cart[slug] || 0) + delta);
        return;
      }
      var rmBtn = e.target.closest('[data-cart-remove]');
      if (rmBtn) { remove(rmBtn.getAttribute('data-cart-remove')); return; }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function render() {
    if (!els.root) buildDrawer();
    var items = getItems();

    // Header badge
    var badges = document.querySelectorAll('[data-cart-count]');
    badges.forEach(function (b) {
      var n = getCount();
      b.textContent = n;
      b.hidden = n === 0;
    });

    // Drawer items
    if (!items.length) {
      els.items.innerHTML =
        '<div class="ds-cart-empty">' +
          '<p>No services in your cart yet.</p>' +
          '<a class="btn btn-secondary btn-small" href="services.html">Browse services</a>' +
        '</div>';
      els.foot.style.display = 'none';
    } else {
      els.foot.style.display = '';
      els.items.innerHTML = items.map(function (it) {
        return '<div class="ds-cart-item">' +
          '<div class="ds-cart-item-info">' +
            '<strong>' + esc(it.name) + '</strong>' +
            '<span class="ds-cart-item-price">' + money(it.price) + (it.recurring ? ' /mo' : '') + '</span>' +
            (it.recurring ? '<span class="ds-cart-item-tag">billed monthly</span>' : '') +
          '</div>' +
          '<div class="ds-cart-item-qty">' +
            '<button type="button" data-cart-qty="' + esc(it.slug) + '" data-delta="-1" aria-label="Decrease quantity">&minus;</button>' +
            '<span>' + it.qty + '</span>' +
            '<button type="button" data-cart-qty="' + esc(it.slug) + '" data-delta="1" aria-label="Increase quantity">+</button>' +
          '</div>' +
          '<button type="button" class="ds-cart-item-remove" data-cart-remove="' + esc(it.slug) + '" aria-label="Remove ' + esc(it.name) + '">&times;</button>' +
        '</div>';
      }).join('');
      els.total.textContent = money(getTotal());
      els.recurringNote.hidden = !hasRecurring();
    }
  }

  function open() {
    if (!els.root) buildDrawer();
    render();
    els.root.classList.add('open');
    els.drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('ds-cart-lock');
  }

  function close() {
    if (!els.root) return;
    els.root.classList.remove('open');
    els.drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('ds-cart-lock');
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                */
  /* ------------------------------------------------------------------ */
  function init() {
    load();
    buildDrawer();
    render();

    try {
      document.dispatchEvent(new CustomEvent('desanya-cart-ready'));
    } catch (e) {}

    // Open drawer from any [data-cart-open] trigger
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cart-open]')) { open(); return; }
      // Add-to-cart buttons: <button data-add-to-cart="website">
      var addBtn = e.target.closest('[data-add-to-cart]');
      if (addBtn) {
        var slug = addBtn.getAttribute('data-add-to-cart');
        if (add(slug)) {
          open();
          if (window.gtag) {
            try { window.gtag('event', 'add_to_cart', { items: [{ item_id: slug }] }); } catch (err) {}
          }
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.DesanyaCart = {
    catalog: CATALOG,
    add: add,
    remove: remove,
    setQty: setQty,
    clear: clear,
    getItems: getItems,
    getTotal: getTotal,
    getCount: getCount,
    hasRecurring: hasRecurring,
    open: open,
    close: close,
    money: money
  };
})();
