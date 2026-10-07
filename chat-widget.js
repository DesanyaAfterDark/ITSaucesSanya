/**
 * Desanya Studio — FAQ chat widget (stub)
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
        'Website package is <strong>$1600</strong> — a clean one-pager or multi-section site that looks sharp, loads fast, and converts visitors into leads.'
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
        'Blog writing is <strong>$200/post</strong> or <strong>$700/mo</strong> (4 posts) — SEO-friendly posts drafted for your site or business; you approve before publish.'
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
      id: 'ai-setup',
      label: 'AI setup',
      keywords: ['ai setup', 'ai managing', 'ai for business', 'artificial intelligence', 'chatbot', 'workflow automation', 'automation setup', 'staff training'],
      answer:
        'AI setup and management is for <strong>your</strong> business tools — not the chat on this site, which is still a canned FAQ. Setup is <strong>$750</strong> (chatbot or FAQ assistant, workflow automation, and staff training notes). Managing is <strong>$550/mo</strong> for ongoing tweaks. You approve before anything goes live. Details on the <a href="/services.html#ai">Services page</a>.'
    },
    {
      id: 'brand-kit',
      label: 'Brand starter kit',
      keywords: ['brand starter', 'brand kit', 'logo refresh', 'color palette', 'social templates'],
      answer:
        'The brand starter kit is <strong>$450</strong> — a logo refresh, a color palette, and social templates. Details on the <a href="/services.html#build">Services page</a>.'
    },
    {
      id: 'landing-page',
      label: 'Ad landing page',
      keywords: ['ad landing', 'landing page', 'campaign page', 'one page offer'],
      answer:
        'An ad landing page is <strong>$600</strong> — one focused page for a campaign or offer. You approve it before it goes live. Details on the <a href="/services.html#build">Services page</a>.'
    },
    {
      id: 'photo-polish',
      label: 'Photo & gallery polish',
      keywords: ['photo polish', 'gallery polish', 'photo cleanup', 'photo & gallery', 'breeder gallery'],
      answer:
        'Photo &amp; gallery polish is <strong>$300</strong> — photo cleanup and a gallery layout for a local shop or breeder site. Details on the <a href="/services.html#care">Services page</a>.'
    },
    {
      id: 'review-kit',
      label: 'Review generation kit',
      keywords: ['review kit', 'review generation', 'google review qr', 'printable card', 'ask templates'],
      answer:
        'The review generation kit is <strong>$200</strong> — a Google review QR code, a printable card, and email or text ask templates that use your review link. It does not invent ratings. See the <a href="/services.html#grow">Services page</a> and the <a href="/index.html#reviews">reviews section</a>.'
    },
    {
      id: 'site-training',
      label: 'Site update training',
      keywords: ['site update training', 'update training', 'teach me to update', 'training session', '1-hour', 'one hour'],
      answer:
        'Site update training is <strong>$125</strong> — a one-hour remote session teaching you to update your own site, with notes afterward. Details on the <a href="/services.html#care">Services page</a>.'
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
        'An example (more on the <a href="/work.html">Work page</a>): <a href="https://shermansshihtzupuppies.com" target="_blank" rel="noopener noreferrer">Sherman’s Shih Tzu Puppies</a> — Desanya Studio’s first build, for a family who raises AKC and CKC Shih Tzus in Niota. Desanya fully manages the website and the verified Google Business Profile, including regular updates about dogs who are ready for their families. That’s a 200% profit increase, from about $500 to about $1,500. Google rating: 4.8★ from 23 reviews, and 2,186 Google Business Profile interactions (calls, messages, directions and website clicks) from May through October 2026.'
    },
    {
      id: 'contact',
      label: 'Book a chat',
      keywords: ['contact', 'book', 'chat', 'email', 'hello', 'schedule', 'call', 'talk'],
      answer:
        'Ready to talk? Use <strong>Get a quote</strong> below, jump to the <a href="/contact.html#order">order form</a>, or email <a href="mailto:desanyaafterdark@gmail.com">desanyaafterdark@gmail.com</a>.'
    },
    {
      id: 'pricing',
      label: 'All pricing',
      keywords: ['price', 'pricing', 'cost', 'how much', 'rates', 'packages', 'services'],
      answer:
        'Clear packages: Website <strong>$1600</strong> · Content <strong>$400</strong> · Blog writing <strong>$200/post</strong> or <strong>$700/mo</strong> (4 posts) · Social setup <strong>$550</strong> · Social managing <strong>$850/mo</strong> · SEO &amp; Google setup <strong>$550</strong> · SEO &amp; Google managing <strong>$450/mo</strong> · AI setup <strong>$750</strong> · AI managing <strong>$550/mo</strong> · Brand starter kit <strong>$450</strong> · Ad landing page <strong>$600</strong> · Photo &amp; gallery polish <strong>$300</strong> · Review generation kit <strong>$200</strong> · Site update training <strong>$125</strong> · Monthly care <strong>$99/mo</strong>. Custom quotes when scope is bigger. Details on the <a href="/services.html">Services page</a>.'
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
    var closeBtn = root.querySelector('[data-chat-close]');
    var quoteBtn = root.querySelector('[data-chat-quote]');
    var liveRegion = root.querySelector('[data-chat-live]');

    var leadShown = false;
    var lastFocus = null;
    var scrollLockY = 0;
    var scrollLocked = false;
    var mobileChatQuery = window.matchMedia('(max-width: 480px)');

    function lockPageScroll(on) {
      if (on) {
        if (scrollLocked || !mobileChatQuery.matches) return;
        scrollLockY = window.scrollY || window.pageYOffset || 0;
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + scrollLockY + 'px';
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        scrollLocked = true;
        return;
      }
      if (!scrollLocked) return;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      scrollLocked = false;
      window.scrollTo(0, scrollLockY);
    }

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
        lockPageScroll(true);
        window.setTimeout(function () {
          (closeBtn || input).focus();
        }, 50);
        announce('Chat panel opened. FAQ stub.');
      } else {
        lockPageScroll(false);
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
          'Ready to talk? Share a few details and Desanya Studio will reply by email. Nothing is stored on this site.'
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
          'This is an FAQ stub (not live AI). Try a topic below, or ask about websites, content, blog writing, social, SEO, AI setup for your business, monthly care, Sherman’s portfolio, or pricing. Or tap <strong>Get a quote</strong>.'
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
      showLeadForm('Fill in the form below and Desanya Studio will reply by email.');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handleQuestion(input.value);
    });

    leadForm.addEventListener('submit', function () {
      var need = leadForm.querySelector('#chatLeadNeed').value;
      var subject = leadForm.querySelector('[name="_subject"]');
      if (subject && need) subject.value = 'New quote: ' + need + ' — desanya.tech';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('is-open')) {
        setOpen(false);
      }
    });

    // Welcome message
    botSay(
      'Hi — this is the <strong>Desanya FAQ</strong> (canned answers, not live AI). Ask about services, pricing, or portfolio work, or tap a topic below.'
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
