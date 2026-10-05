/**
 * Desanya Studio — FAQ chat widget (preview stub)
 * Canned answers + lead capture via mailto / local UI note. Not live AI.
 */
(function () {
  'use strict';

  var FAQ = [
    {
      id: 'website',
      label: 'Website build',
      keywords: ['website', 'site', 'web', 'build', 'page', 'landing', '1600'],
      answer:
        'Website package starts at <strong>$1600</strong> — a clean one-pager or multi-section site that looks sharp, loads fast, and is built to convert visitors into leads.'
    },
    {
      id: 'content',
      label: 'Content / copy',
      keywords: ['content', 'copy', 'writing', 'words', 'headline', '400'],
      answer:
        'Content package is <strong>$400</strong> — headlines, page copy, and CTAs that say what you do, who it’s for, and why it matters — without the fluff.'
    },
    {
      id: 'blog-writing',
      label: 'Blog writing',
      keywords: ['blog', 'blog writing', 'blog post', 'posts', 'article', 'seo-friendly', 'seo friendly', '200', '700/mo', '4 posts'],
      answer:
        'Blog writing is <strong>$200/post</strong> or <strong>$700/mo</strong> (4 posts) — I draft SEO-friendly posts for your site/business; you approve before publish.'
    },
    {
      id: 'social-setup',
      label: 'Social setup',
      keywords: ['social setup', 'setup', 'profile', 'bio', 'highlights', '550'],
      answer:
        'Social setup is <strong>$550</strong> — profiles, bio, highlights, and a starter content map so your social presence matches the brand.'
    },
    {
      id: 'social-managing',
      label: 'Social managing',
      keywords: ['social managing', 'managing', 'posts', 'scheduling', 'engagement', '850'],
      answer:
        'Social managing is <strong>$850/mo</strong> — ongoing posts, scheduling, and light engagement so you stay visible without living in the apps.'
    },
    {
      id: 'seo-setup',
      label: 'SEO & Google setup',
      keywords: ['seo & google setup', 'seo', 'google', 'business profile', 'gbp', 'search', 'listings', 'maps', 'local seo', '550', 'seo setup', 'google setup'],
      answer:
        'SEO &amp; Google setup is <strong>$550</strong> — help getting found on Google: Google Business Profile, search listings, and basic SEO on the site so the right customers can find you.'
    },
    {
      id: 'seo-managing',
      label: 'SEO & Google managing',
      keywords: ['seo & google managing', 'seo managing', 'google managing', 'seo management', 'google management', '450', 'ongoing seo', 'search console'],
      answer:
        'SEO &amp; Google managing is <strong>$450/mo</strong> — ongoing Google and SEO tweaks: listing updates, search visibility checks, and light optimizations so you stay findable.'
    },
    {
      id: 'monthly-care',
      label: 'Monthly care',
      keywords: ['monthly', 'care', 'maintenance', 'updates', 'fixes', '99', 'hosting'],
      answer:
        'Monthly care is <strong>$99/mo</strong> — updates, small fixes, and peace of mind for sites that need a light, reliable caretaker.'
    },
    {
      id: 'portfolio',
      label: 'Portfolio / Sherman’s',
      keywords: ['portfolio', 'work', 'example', 'sherman', 'shih', 'puppy', 'puppies', 'case'],
      answer:
        'A live example (more on the <a href="work.html">Work page</a>): <a href="https://shermansshihtzupuppies.com" target="_blank" rel="noopener noreferrer">Sherman’s Shih Tzu Puppies</a> — family AKC/CKC Shih Tzu site with local SEO, Zoom viewing, deposits, and click-to-call. Still running for years; footer credits Desanya’s Web Designs.'
    },
    {
      id: 'contact',
      label: 'Book a chat',
      keywords: ['contact', 'book', 'chat', 'email', 'hello', 'schedule', 'call', 'talk'],
      answer:
        'Ready to talk? Use <strong>Get a quote</strong> below, jump to the <a href="contact.html">contact form</a>, or email <a href="mailto:hello@desanya.tech">hello@desanya.tech</a>.'
    },
    {
      id: 'pricing',
      label: 'All pricing',
      keywords: ['price', 'pricing', 'cost', 'how much', 'rates', 'packages', 'services'],
      answer:
        'Clear packages: Website <strong>$1600</strong> · Content <strong>$400</strong> · Blog writing <strong>$200/post</strong> or <strong>$700/mo</strong> (4 posts) · Social setup <strong>$550</strong> · Social managing <strong>$850/mo</strong> · SEO &amp; Google setup <strong>$550</strong> · SEO &amp; Google managing <strong>$450/mo</strong> · Monthly care <strong>$99/mo</strong>. Custom quotes when scope is bigger. Details on the <a href="services.html">Services page</a>.'
    }
  ];

  var READY_KEYWORDS = [
    'quote', 'hire', 'ready', 'interested', 'sign me', 'get started',
    'lets talk', "let's talk", 'book me', 'i want', 'i need a', 'buy',
    'purchase', 'start a project', 'work with'
  ];

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var val = attrs[key];
        if (key === 'className') node.className = val;
        else if (key === 'text') node.textContent = val;
        else if (key === 'html') node.innerHTML = val;
        else if (key.indexOf('on') === 0 && typeof val === 'function') {
          node.addEventListener(key.slice(2).toLowerCase(), val);
        } else if (val !== null && val !== undefined && val !== false) {
          node.setAttribute(key, val === true ? '' : String(val));
        }
      });
    }
    (children || []).forEach(function (child) {
      if (child == null) return;
      if (typeof child === 'string') node.appendChild(document.createTextNode(child));
      else node.appendChild(child);
    });
    return node;
  }

  function matchFaq(text) {
    var q = text.toLowerCase().trim();
    if (!q) return null;
    var best = null;
    var bestScore = 0;
    FAQ.forEach(function (item) {
      var score = 0;
      item.keywords.forEach(function (kw) {
        if (q.indexOf(kw) !== -1) score += kw.length;
      });
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });
    return bestScore > 0 ? best : null;
  }

  function seemsReady(text) {
    var q = text.toLowerCase();
    return READY_KEYWORDS.some(function (kw) {
      return q.indexOf(kw) !== -1;
    });
  }

  function init() {
    var root = document.getElementById('desanya-chat');
    if (!root) return;

    var launcher = root.querySelector('[data-chat-launcher]');
    var panel = root.querySelector('[data-chat-panel]');
    var messages = root.querySelector('[data-chat-messages]');
    var chips = root.querySelector('[data-chat-chips]');
    var form = root.querySelector('[data-chat-input-form]');
    var input = root.querySelector('[data-chat-input]');
    var leadWrap = root.querySelector('[data-chat-lead]');
    var leadForm = root.querySelector('[data-chat-lead-form]');
    var leadNote = root.querySelector('[data-chat-lead-note]');
    var closeBtn = root.querySelector('[data-chat-close]');
    var quoteBtn = root.querySelector('[data-chat-quote]');
    var liveRegion = root.querySelector('[data-chat-live]');

    var leadShown = false;
    var lastFocus = null;

    function announce(text) {
      if (liveRegion) liveRegion.textContent = text;
    }

    function setOpen(open) {
      root.classList.toggle('is-open', open);
      launcher.setAttribute('aria-expanded', String(open));
      panel.setAttribute('aria-hidden', String(!open));
      if (open) {
        lastFocus = document.activeElement;
        document.body.classList.add('chat-open');
        window.setTimeout(function () {
          (closeBtn || input).focus();
        }, 50);
        announce('Chat panel opened. Preview FAQ stub.');
      } else {
        document.body.classList.remove('chat-open');
        if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
        else launcher.focus();
        announce('Chat panel closed.');
      }
    }

    function appendBubble(role, htmlOrText, isHtml) {
      var bubble = el('div', {
        className: 'chat-bubble chat-bubble--' + role,
        role: role === 'bot' ? 'status' : undefined
      });
      var inner = el('div', { className: 'chat-bubble-inner' });
      if (isHtml) inner.innerHTML = htmlOrText;
      else inner.textContent = htmlOrText;
      bubble.appendChild(inner);
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
      return bubble;
    }

    function botSay(html) {
      appendBubble('bot', html, true);
    }

    function userSay(text) {
      appendBubble('user', text, false);
    }

    function showLeadForm(reason) {
      if (leadShown) {
        leadWrap.hidden = false;
        leadWrap.querySelector('#chatLeadName').focus();
        return;
      }
      leadShown = true;
      leadWrap.hidden = false;
      botSay(
        reason ||
          'Looks like you might be ready — drop your details and I’ll open a draft email to <strong>hello@desanya.tech</strong>. (Preview stub — nothing is stored on a server.)'
      );
      window.setTimeout(function () {
        var nameField = leadWrap.querySelector('#chatLeadName');
        if (nameField) nameField.focus();
      }, 80);
    }

    function handleQuestion(raw) {
      var text = (raw || '').trim();
      if (!text) return;
      userSay(text);
      input.value = '';

      if (seemsReady(text)) {
        var hit = matchFaq(text);
        if (hit) botSay(hit.answer);
        showLeadForm();
        return;
      }

      var match = matchFaq(text);
      if (match) {
        botSay(match.answer);
        if (match.id === 'contact' || match.id === 'pricing') {
          showLeadForm('Want a custom quote? Share a few details below.');
        }
      } else {
        botSay(
          'I’m a preview FAQ stub (not live AI yet). Try a topic chip below, or ask about websites, content, blog writing, social, SEO, monthly care, Sherman’s portfolio, or pricing. Or tap <strong>Get a quote</strong>.'
        );
      }
    }

    // Quick chips
    FAQ.forEach(function (item) {
      var chip = el(
        'button',
        {
          type: 'button',
          className: 'chat-chip',
          onClick: function () {
            handleQuestion(item.label);
          }
        },
        [item.label]
      );
      chips.appendChild(chip);
    });

    launcher.addEventListener('click', function () {
      setOpen(!root.classList.contains('is-open'));
    });

    closeBtn.addEventListener('click', function () {
      setOpen(false);
    });

    quoteBtn.addEventListener('click', function () {
      showLeadForm('Great — fill this mini form and we’ll draft an email to hello@desanya.tech.');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handleQuestion(input.value);
    });

    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = leadForm.querySelector('#chatLeadName').value.trim();
      var email = leadForm.querySelector('#chatLeadEmail').value.trim();
      var need = leadForm.querySelector('#chatLeadNeed').value;
      if (!name || !email || !need) return;

      var subject = encodeURIComponent('Desanya Studio chat quote — ' + need + ' — ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'What they need: ' + need + '\n' +
        'Source: FAQ chat widget (preview stub)\n'
      );

      leadNote.hidden = false;
      leadNote.innerHTML =
        '<strong>Draft saved in this panel (not on a server):</strong> ' +
        name + ' · ' + email + ' · ' + need +
        '. Opening your email client… If it doesn’t open, email <a href="mailto:hello@desanya.tech">hello@desanya.tech</a> directly.';

      botSay(
        'Thanks, <strong>' + name.replace(/</g, '&lt;') + '</strong>! Opening a mailto draft for <strong>' +
        need.replace(/</g, '&lt;') + '</strong>. This is a preview stub — no backend storage yet.'
      );

      window.location.href = 'mailto:hello@desanya.tech?subject=' + subject + '&body=' + body;
      announce('Lead draft prepared. Mailto opened.');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('is-open')) {
        setOpen(false);
      }
    });

    // Welcome message
    botSay(
      'Hi — I’m the <strong>Desanya FAQ preview</strong> (canned answers, not live AI yet). Ask about services, pricing, or portfolio work, or tap a topic below.'
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
