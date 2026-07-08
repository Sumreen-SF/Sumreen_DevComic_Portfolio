/* =========================================================
   MY DEVELOPER STORY — interactions
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Chapter progress bar ---------- */
  const progressFill = document.getElementById('progressFill');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressFill.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navTabs = document.getElementById('navTabs');
  navToggle.addEventListener('click', () => {
    const isOpen = navTabs.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navTabs.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navTabs.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Active chapter highlighting ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-tab');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(sec => sectionObserver.observe(sec));

  /* ---------- Scroll-reveal for panels & bubbles ---------- */
  const revealTargets = document.querySelectorAll('.panel, .bubble--float');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------- Begin Reading button ---------- */
  const beginBtn = document.getElementById('beginReading');
  beginBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- Intro speech bubble: small delight on click ---------- */
  const introBubble = document.getElementById('introBubble');
  introBubble.addEventListener('click', () => {
    introBubble.style.transform = 'rotate(3deg) scale(1.08)';
    setTimeout(() => { introBubble.style.transform = ''; }, 220);
  });

  /* ---------- Skill filter tabs ---------- */
  const filterChips = document.querySelectorAll('.filter-chip');
  const skillBadges = document.querySelectorAll('.skill-badge');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      skillBadges.forEach(badge => {
        const cats = badge.dataset.category.split(' ');
        const show = filter === 'all' || cats.includes(filter);
        badge.classList.toggle('hidden', !show);
      });
    });
  });

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const contactSubmit = document.getElementById('contactSubmit');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const actionUrl = contactForm.getAttribute('action');

      if (actionUrl.includes('YOUR_FORM_ID')) {
        formStatus.textContent = "Almost there — connect a Formspree form ID in the code to activate this form.";
        formStatus.classList.add('is-error');
        return;
      }

      contactSubmit.disabled = true;
      formStatus.classList.remove('is-error');
      formStatus.textContent = 'Sending...';

      try {
        const response = await fetch(actionUrl, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          formStatus.textContent = "Message sent! I'll get back to you soon.";
          contactForm.reset();
        } else {
          formStatus.textContent = 'Something went wrong — please try again.';
          formStatus.classList.add('is-error');
        }
      } catch (err) {
        formStatus.textContent = 'Network error — please try again.';
        formStatus.classList.add('is-error');
      } finally {
        contactSubmit.disabled = false;
      }
    });
  }

  /* ---------- Easter egg: secret bonus page (press "C") ---------- */
  const secretPage = document.getElementById('secretPage');
  const closeSecret = document.getElementById('closeSecret');
  document.addEventListener('keydown', (e) => {
    if (e.key && e.key.toLowerCase() === 'c' && !secretPage.classList.contains('open')) {
      secretPage.classList.add('open');
      secretPage.setAttribute('aria-hidden', 'false');
    }
    if (e.key === 'Escape') {
      secretPage.classList.remove('open');
      secretPage.setAttribute('aria-hidden', 'true');
    }
  });
  closeSecret.addEventListener('click', () => {
    secretPage.classList.remove('open');
    secretPage.setAttribute('aria-hidden', 'true');
  });
  secretPage.addEventListener('click', (e) => {
    if (e.target === secretPage) {
      secretPage.classList.remove('open');
      secretPage.setAttribute('aria-hidden', 'true');
    }
  });

});