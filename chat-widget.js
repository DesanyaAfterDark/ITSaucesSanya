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
        'Website packages are <strong>$900</strong> (1 page), <strong>$1,600</strong> (up to 5 pages), and <strong>$2,500</strong> (up to 10 pages, blog, and copy). Details on the <a href="/services.html#website">Services page</a>.'
    },
    {
      id: 'content',
      label: 'Content / copy',
      keywords: ['content', 'copy', 'writing', 'words', 'headline', '400'],
      answer:
        'Website copywriting is <strong>$150</strong> for one page or <strong>$400</strong> for up to 3 pages. Details on the <a href="/services.html#copy">Services page</a>.'
    },
    {
      id: 'blog-writing',
      label: 'Blog writing',
      keywords: ['blog', 'blog writing', 'blog post', 'posts', 'article', 'seo-friendly', 'seo friendly', '200', '700/mo', '4 posts'],
      answer:
        'Blog writing is <strong>$120</strong> (about 800 words), <strong>$200</strong> (about 1,000–1,500 words), or <strong>$700/mo</strong> for 4 posts. You approve before publish. Details on the <a href="/services.html#blog">Services page</a>.'
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
        'Social managing is <strong>$350/mo</strong> (12 posts, 1 platform), <strong>$600/mo</strong> (20 posts, 2 platforms), or <strong>$850/mo</strong> (adds Reels and light engagement). You approve posts first. Details on the <a href="/services.html#social">Services page</a>.'
    },
    {
      id: 'seo-setup',
      label: 'SEO & Google setup',
      keywords: ['seo & google setup', 'seo', 'google', 'business profile', 'gbp', 'search', 'listings', 'maps', 'local seo', '550', 'seo setup', 'google setup'],
      answer:
        'On-site SEO setup is <strong>$550</strong>. A Google Business Profile tune-up starts at <strong>$150</strong>. There is no guaranteed ranking. Details on the <a href="/services.html#seo">Services page</a>.'
    },
    {
      id: 'seo-managing',
      label: 'SEO & Google managing',
      keywords: ['seo & google managing', 'seo managing', 'google managing', 'seo management', 'google management', '450', 'ongoing seo', 'search console'],
      answer:
        'SEO &amp; Google managing is <strong>$450/mo</strong> — listing updates, visibility checks, and a short monthly report. Details on the <a href="/services.html#seo">Services page</a>.'
    },
    {
      id: 'ai-setup',
      label: 'AI setup',
      keywords: ['ai setup', 'ai managing', 'ai for business', 'artificial intelligence', 'chatbot', 'workflow automation', 'automation setup', 'staff training'],
      answer:
        'AI setup is <strong>$400</strong>, <strong>$750</strong>, or <strong>$1,200</strong>. Managing is <strong>$150–$250/mo</strong>. This is for your business tools, not the canned FAQ on this site. You approve before anything goes live. Details on the <a href="/services.html#ai">Services page</a>.'
    },
    {
      id: 'brand-kit',
      label: 'Brand refresh kit',
      keywords: ['brand starter', 'brand kit', 'brand refresh', 'logo refresh', 'color palette', 'social templates'],
      answer:
        'The brand refresh kit is <strong>$450</strong> — a logo refresh (PNG and SVG), a color and type sheet, and 5 Canva templates. Details on the <a href="/services.html#brand">Services page</a>.'
    },
    {
      id: 'landing-page',
      label: 'Ad landing page',
      keywords: ['ad landing', 'landing page', 'campaign page', 'one page offer'],
      answer:
        'An ad landing page is <strong>$400</strong>, <strong>$600</strong>, or <strong>$900</strong>. You approve it before it goes live. Details on the <a href="/services.html#ad-landing">Services page</a>.'
    },
    {
      id: 'photo-polish',
      label: 'Photo & gallery polish',
      keywords: ['photo polish', 'gallery polish', 'photo cleanup', 'photo & gallery', 'breeder gallery'],
      answer:
        'Photo &amp; gallery polish is <strong>$150</strong> for up to 15 photos or <strong>$300</strong> for up to 40. Details on the <a href="/services.html#photo">Services page</a>.'
    },
    {
      id: 'review-kit',
      label: 'Review generation kit',
      keywords: ['review kit', 'review generation', 'google review qr', 'printable card', 'ask templates'],
      answer:
        'The review generation kit is <strong>$200</strong> — a Google review QR code, a printable card, and email or text ask templates that use your review link. It does not invent ratings. See the <a href="/services.html#review">Services page</a>.'
    },
    {
      id: 'site-training',
      label: 'Site update training',
      keywords: ['site update training', 'update training', 'teach me to update', 'training session', '1-hour', 'one hour'],
      answer:
        'Site update training is <strong>$125</strong> for one hour or <strong>$225</strong> for two sessions, with notes afterward. Details on the <a href="/services.html#training">Services page</a>.'
    },
    {
      id: 'monthly-care',
      label: 'Monthly care',
      keywords: ['monthly', 'care', 'maintenance', 'updates', 'fixes', '99', 'hosting'],
      answer:
        'Monthly care is <strong>$99/mo</strong> (up to 1 hour, uptime check, backup) or <strong>$179/mo</strong> (up to 2 hours plus a Google Business Profile post). Details on the <a href="/services.html#care">Services page</a>.'
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
        'Packages start at <strong>$60</strong>. Website is <strong>$900 / $1,600 / $2,500</strong>. Social managing is <strong>$350 / $600 / $850 a month</strong>. AI managing is <strong>$150–$250/mo</strong>. The full list, delivery times, and revisions are on the <a href="/services.html">Services page</a>.'
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
