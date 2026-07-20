// ========== APPLY ADMIN DATA ==========
(function applyAdminData() {
  const saved = localStorage.getItem('nb_admin_data');
  if (!saved) return;
  let d;
  try { d = JSON.parse(saved); } catch(e) { return; }
  if (!d || typeof d !== 'object') return;

  // Hero
  if (d.hero) {
    const badgeEl = document.getElementById('heroBadgeText');
    if (badgeEl && d.hero.badge) badgeEl.textContent = d.hero.badge;
    const h1 = document.getElementById('heroTitle');
    if (h1 && d.hero.line1) h1.innerHTML = d.hero.line1 + '<br/>' + (d.hero.line2 || '') + '<br/><span class="text-primary">' + escHtml(d.hero.line3 || '') + '</span>';
    const sub = document.getElementById('heroSubtitle');
    if (sub && d.hero.subtitle) sub.textContent = d.hero.subtitle;
    const bp = document.getElementById('heroBtnPrimary');
    if (bp && d.hero.btnPrimary) bp.firstChild.textContent = d.hero.btnPrimary + ' ';
    const bs = document.getElementById('heroBtnSecondary');
    if (bs && d.hero.btnSecondary) bs.textContent = d.hero.btnSecondary;
  }

  // Services
  const svcGrid = document.getElementById('servicesGrid');
  if (svcGrid && d.services) {
    svcGrid.innerHTML = '';
    d.services.forEach(s => {
      const colorCls = s.colorType === 'accent' ? 'accent' : 'primary';
      const listCls = s.colorType === 'accent' ? ' list-accent' : '';
      const items = s.items.map(it => '<li>' + escHtml(it) + '</li>').join('');
      svcGrid.innerHTML += `
        <div class="service-card fade-in-up visible">
          <div class="service-accent accent-${colorCls}"></div>
          <div class="service-icon icon-${colorCls}">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          </div>
          <h3>${escHtml(s.title)}</h3>
          <p class="service-desc">${escHtml(s.desc)}</p>
          <ul class="service-list${listCls}">${items}</ul>
        </div>`;
    });
  }

  // Tools
  const toolsT = document.getElementById('toolsSectionTitle');
  if (toolsT && d.toolsTitle) toolsT.textContent = d.toolsTitle;
  const toolsD = document.getElementById('toolsSectionDesc');
  if (toolsD && d.toolsDesc) toolsD.textContent = d.toolsDesc;
  const toolsGrid = document.getElementById('toolsGrid');
  if (toolsGrid && d.tools) {
    toolsGrid.innerHTML = d.tools.map(t => '<span class="tool-pill">' + escHtml(t) + '</span>').join('');
  }

  // Why Us
  if (d.whyUs) {
  const wuTitle = document.getElementById('whyUsTitle');
  if (wuTitle && d.whyUs.title) wuTitle.textContent = d.whyUs.title;
  const wuDesc = document.getElementById('whyUsDesc');
  if (wuDesc && d.whyUs.desc) wuDesc.textContent = d.whyUs.desc;
  const featGrid = document.getElementById('featuresGrid');
  if (featGrid && d.whyUs.features) {
    featGrid.innerHTML = d.whyUs.features.map(f => `
      <div class="feature-item">
        <div class="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></div>
        <div><h4>${escHtml(f.title)}</h4><p>${escHtml(f.desc)}</p></div>
      </div>`).join('');
  }
  } // end whyUs

  // Mockup
  if (d.mockup) {
    const mkTitle = document.getElementById('mockupLabel');
    if (mkTitle && d.mockup.title) mkTitle.textContent = d.mockup.title;
    const mkSub = document.getElementById('mockupSubtitle');
    if (mkSub && d.mockup.subtitle) mkSub.textContent = d.mockup.subtitle;
    const mkSub2 = document.getElementById('mockupSubtext');
    if (mkSub2 && d.mockup.subtext) mkSub2.textContent = d.mockup.subtext;
    const mkRows = document.getElementById('mockupRows');
    if (mkRows && d.mockup.rows) {
      mkRows.innerHTML = d.mockup.rows.map(r => `
        <div class="mockup-row">
          <div class="row-left"><div class="row-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg></div><div><div class="row-title">${escHtml(r.category)}</div><div class="row-details"><span class="row-count">${escHtml(r.count)}</span> <span class="row-sep"></span> <span>${escHtml(r.details)}</span></div></div></div>
          <div class="verified-badge"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Verified</div>
        </div>`).join('');
    }
  }

  // Team
  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid && d.team) {
    teamGrid.innerHTML = d.team.map(m => `
      <div class="team-card fade-in-up visible">
        <div class="team-photo"><img src="${escHtml(m.img || '')}" alt="${escHtml(m.name || '')}" style="${escHtml(m.posStyle || '')}" /></div>
        <h3>${escHtml(m.name || '')}</h3>
        <span class="team-role">${escHtml(m.role || '')}</span>
        <p>${escHtml(m.bio || '')}</p>
      </div>`).join('');
  }

  // Contact
  if (d.contact) {
    const ctTitle = document.getElementById('contactSectionTitle');
    if (ctTitle && d.contact.title) ctTitle.textContent = d.contact.title;
    const ctDesc = document.getElementById('contactSectionDesc');
    if (ctDesc && d.contact.desc) ctDesc.textContent = d.contact.desc;
    const ctAddr = document.getElementById('contactAddress');
    if (ctAddr && d.contact.address) ctAddr.innerHTML = d.contact.address.replace(/\n/g, '<br/>');
    const ctWa = document.getElementById('contactWhatsappLink');
    if (ctWa && d.contact.whatsapp) ctWa.href = d.contact.whatsapp;
    const ctPhone = document.getElementById('contactPhoneText');
    if (ctPhone && d.contact.phone) ctPhone.textContent = d.contact.phone;
    const ctEmail = document.getElementById('contactEmailText');
    if (ctEmail && d.contact.email) ctEmail.textContent = d.contact.email;
    const ctFormT = document.getElementById('contactFormTitle');
    if (ctFormT && d.contact.formTitle) ctFormT.textContent = d.contact.formTitle;
    window._contactEmail = d.contact.email;
  }

  // Footer
  if (d.footer) {
    const ftDesc = document.getElementById('footerDesc');
    if (ftDesc && d.footer.desc) ftDesc.textContent = d.footer.desc;
    const ftLi = document.getElementById('footerLinkedin');
    if (ftLi && d.footer.linkedin) ftLi.href = d.footer.linkedin;
    const ftTw = document.getElementById('footerTwitter');
    if (ftTw && d.footer.twitter) ftTw.href = d.footer.twitter;
    const ftPr = document.getElementById('footerPrivacy');
    if (ftPr && d.footer.privacy) ftPr.href = d.footer.privacy;
    const ftTe = document.getElementById('footerTerms');
    if (ftTe && d.footer.terms) ftTe.href = d.footer.terms;
  }
  if (d.contact) {
    const ftWa = document.getElementById('footerWhatsapp');
    if (ftWa && d.contact.whatsapp) { ftWa.href = d.contact.whatsapp; ftWa.textContent = (d.contact.phone || '') + ' (WhatsApp)'; }
    const ftEm = document.getElementById('footerEmail');
    if (ftEm && d.contact.email) ftEm.textContent = d.contact.email;
    const ftAddr = document.getElementById('footerAddress');
    if (ftAddr && d.contact.address) ftAddr.innerHTML = d.contact.address.replace(/\n/g, '<br/>');
  }

  // Store counter values globally for the counter animation
  if (d.counter) {
    window._counterStart = d.counter.start;
    window._counterTarget = d.counter.target;
  }

  function escHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();

// ========== NAVBAR ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href.length < 2) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll animations (Intersection Observer)
const observerOptions = { threshold: 0.1, rootMargin: '-50px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => observer.observe(el));

// ========== LIVE COUNTER ==========
(function() {
  const counterEl = document.getElementById('liveCounter');
  if (!counterEl) return;

  const startVal = window._counterStart || 200000;
  const targetVal = window._counterTarget || 150000;
  let count = startVal;
  let startTime = null;
  let lastTick = 0;
  const duration = 2000;

  function animateCount(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    if (elapsed < duration) {
      const progress = elapsed / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      count = Math.floor(startVal - ((startVal - targetVal) * easeOutQuart));
    } else {
      if (timestamp - lastTick > 40) {
        count += Math.floor(Math.random() * 8) + 2;
        lastTick = timestamp;
      }
    }

    counterEl.textContent = count.toLocaleString() + '+';
    requestAnimationFrame(animateCount);
  }

  setTimeout(() => requestAnimationFrame(animateCount), 500);
})();

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;
    const toEmail = window._contactEmail || 'contact.northbridgesolution@gmail.com';

    const mailtoBody = `Name: ${firstName} ${lastName}%0AEmail: ${email}%0ACompany: ${company}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:${toEmail}?subject=New Inquiry from ${firstName} ${lastName}&body=${mailtoBody}`;

    window.open(mailtoLink, '_blank');

    contactForm.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'flex';
  });
}

function resetForm() {
  if (contactForm) {
    contactForm.reset();
    contactForm.style.display = 'block';
  }
  if (formSuccess) formSuccess.style.display = 'none';
}

// ========== CHATBOT WIDGET LOGIC ==========
(function initChatbot() {
  const trigger = document.getElementById('chatbotTrigger');
  const box = document.getElementById('chatbotBox');
  const closeBtn = document.getElementById('chatbotCloseBtn');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  const messages = document.getElementById('chatbotMessages');

  if (!trigger || !box) return;

  const iconOpen = trigger.querySelector('.chat-icon-open');
  const iconClose = trigger.querySelector('.chat-icon-close');

  function toggleChat() {
    const isHidden = box.style.display === 'none' || box.style.display === '';
    box.style.display = isHidden ? 'flex' : 'none';
    if (iconOpen) iconOpen.style.display = isHidden ? 'none' : 'block';
    if (iconClose) iconClose.style.display = isHidden ? 'block' : 'none';
  }

  trigger.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', toggleChat);

  window.handleChipClick = function(topic) {
    appendUserMsg(topic);
    respondToTopic(topic);
  };

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      appendUserMsg(val);
      input.value = '';
      respondToTopic(val);
    });
  }

  function appendUserMsg(text) {
    const div = document.createElement('div');
    div.className = 'chat-msg user-msg';
    div.innerHTML = `<div class="chat-bubble">${esc(text)}</div>`;
    messages.appendChild(div);
    scrollToBottom();
  }

  function appendBotMsg(html) {
    const div = document.createElement('div');
    div.className = 'chat-msg bot-msg';
    div.innerHTML = `<div class="chat-bubble">${html}</div>`;
    messages.appendChild(div);
    scrollToBottom();
  }

  function respondToTopic(query) {
    const q = query.toLowerCase();
    let reply = "";

    if (q.includes('web') || q.includes('site') || q.includes('store')) {
      reply = "We craft custom, high-converting websites & webstores with responsive UI, fast speeds, and SEO! Would you like to schedule a free consultation?";
    } else if (q.includes('bot') || q.includes('chat') || q.includes('ai')) {
      reply = "Our AI Chatbots automate customer support 24/7 and capture leads instantly on your website, WhatsApp, & Messenger!";
    } else if (q.includes('outreach') || q.includes('linkedin') || q.includes('email')) {
      reply = "Our targeted LinkedIn & Email Outreach campaigns book qualified decision-maker meetings directly into your sales calendar.";
    } else if (q.includes('whatsapp') || q.includes('contact')) {
      reply = "You can chat with our team directly on WhatsApp at <a href='https://wa.me/447460001196' target='_blank' style='color:#2563eb;font-weight:700;text-decoration:underline;'>+44 7460 001196</a>!";
    } else {
      reply = "Thank you for getting in touch! You can chat with our team on WhatsApp at <a href='https://wa.me/447460001196' target='_blank' style='color:#2563eb;font-weight:700;text-decoration:underline;'>+44 7460 001196</a> or book a consultation below.";
    }

    setTimeout(() => {
      appendBotMsg(reply);
    }, 600);
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  function esc(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();
