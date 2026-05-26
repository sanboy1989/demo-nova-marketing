/* =====================
   Project Data
   ===================== */
const PROJECTS = [
  {
    id: 'w1',
    category: 'Wedding',
    type: 'Photo',
    title: 'Sarah & Tom',
    location: 'Repulse Bay, Hong Kong',
    date: 'March 2024',
    services: 'Drone Photography · Ground Photography',
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/w1a/1200/800',
      'https://picsum.photos/seed/w1b/900/1200',
      'https://picsum.photos/seed/w1c/1200/800',
      'https://picsum.photos/seed/w1d/1200/900',
      'https://picsum.photos/seed/w1e/800/1200',
      'https://picsum.photos/seed/w1f/1200/800',
      'https://picsum.photos/seed/w1g/1200/800',
      'https://picsum.photos/seed/w1h/1200/900',
    ]
  },
  {
    id: 'w2',
    category: 'Wedding',
    type: 'Photo + Video',
    title: 'Emma & James',
    location: 'The Peak, Hong Kong',
    date: 'November 2023',
    services: 'Drone Videography · Drone Photography · Post-Production',
    cover: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/w2a/1200/800',
      'https://picsum.photos/seed/w2b/1200/900',
      'https://picsum.photos/seed/w2c/900/1200',
      'https://picsum.photos/seed/w2d/1200/800',
      'https://picsum.photos/seed/w2e/1200/800',
      'https://picsum.photos/seed/w2f/1200/900',
    ]
  },
  {
    id: 'w3',
    category: 'Wedding',
    type: 'Photo',
    title: 'Clara & David',
    location: 'Discovery Bay, Lantau',
    date: 'June 2024',
    services: 'Drone Photography · Ground Photography',
    cover: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/w3a/1200/800',
      'https://picsum.photos/seed/w3b/1200/800',
      'https://picsum.photos/seed/w3c/900/1200',
      'https://picsum.photos/seed/w3d/1200/900',
      'https://picsum.photos/seed/w3e/1200/800',
      'https://picsum.photos/seed/w3f/1200/800',
      'https://picsum.photos/seed/w3g/1200/800',
    ]
  },
  {
    id: 're1',
    category: 'Real Estate',
    type: 'Photo + Video',
    title: '23/F The Centrium',
    location: 'Central, Hong Kong',
    date: 'April 2024',
    services: 'Drone Photography · Ground Photography · Post-Production',
    cover: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/re1a/1200/800',
      'https://picsum.photos/seed/re1b/1200/900',
      'https://picsum.photos/seed/re1c/1200/800',
      'https://picsum.photos/seed/re1d/1200/800',
      'https://picsum.photos/seed/re1e/900/1200',
      'https://picsum.photos/seed/re1f/1200/800',
      'https://picsum.photos/seed/re1g/1200/900',
      'https://picsum.photos/seed/re1h/1200/800',
      'https://picsum.photos/seed/re1i/1200/800',
    ]
  },
  {
    id: 're2',
    category: 'Real Estate',
    type: 'Photo',
    title: 'Clearwater Bay Villa',
    location: 'Sai Kung, Hong Kong',
    date: 'January 2024',
    services: 'Drone Photography · Ground Photography',
    cover: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/re2a/1200/800',
      'https://picsum.photos/seed/re2b/1200/800',
      'https://picsum.photos/seed/re2c/1200/900',
      'https://picsum.photos/seed/re2d/1200/800',
      'https://picsum.photos/seed/re2e/1200/800',
      'https://picsum.photos/seed/re2f/900/1200',
    ]
  },
  {
    id: 'co1',
    category: 'Corporate',
    type: 'Photo + Video',
    title: 'HSBC Annual Gala 2024',
    location: 'Wan Chai, Hong Kong',
    date: 'February 2024',
    services: 'Drone Videography · Ground Photography · Post-Production',
    cover: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/co1a/1200/800',
      'https://picsum.photos/seed/co1b/1200/800',
      'https://picsum.photos/seed/co1c/1200/900',
      'https://picsum.photos/seed/co1d/1200/800',
      'https://picsum.photos/seed/co1e/1200/800',
      'https://picsum.photos/seed/co1f/1200/800',
    ]
  },
  {
    id: 'co2',
    category: 'Corporate',
    type: 'Video',
    title: 'Nike HK Product Launch',
    location: 'Causeway Bay, Hong Kong',
    date: 'May 2024',
    services: 'Drone Videography · Post-Production',
    cover: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/co2a/1200/800',
      'https://picsum.photos/seed/co2b/1200/900',
      'https://picsum.photos/seed/co2c/1200/800',
      'https://picsum.photos/seed/co2d/1200/800',
      'https://picsum.photos/seed/co2e/900/1200',
    ]
  },
  {
    id: 'cn1',
    category: 'Construction',
    type: 'Photo',
    title: 'Kowloon Bay Development',
    location: 'Kowloon Bay, Hong Kong',
    date: 'Ongoing (2023–2024)',
    services: 'Regular Aerial Surveys · Progress Documentation',
    cover: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/cn1a/1200/800',
      'https://picsum.photos/seed/cn1b/1200/800',
      'https://picsum.photos/seed/cn1c/1200/900',
      'https://picsum.photos/seed/cn1d/1200/800',
      'https://picsum.photos/seed/cn1e/1200/800',
      'https://picsum.photos/seed/cn1f/1200/800',
      'https://picsum.photos/seed/cn1g/1200/900',
      'https://picsum.photos/seed/cn1h/1200/800',
    ]
  },
  {
    id: 'fe1',
    category: 'Festival',
    type: 'Photo + Video',
    title: 'Clockenflap 2023',
    location: 'West Kowloon, Hong Kong',
    date: 'November 2023',
    services: 'Drone Videography · Ground Photography · Post-Production',
    cover: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/fe1a/1200/800',
      'https://picsum.photos/seed/fe1b/1200/800',
      'https://picsum.photos/seed/fe1c/900/1200',
      'https://picsum.photos/seed/fe1d/1200/900',
      'https://picsum.photos/seed/fe1e/1200/800',
      'https://picsum.photos/seed/fe1f/1200/800',
    ]
  },
  {
    id: 'po1',
    category: 'Portrait',
    type: 'Photo',
    title: 'Urban Landscapes Series',
    location: 'Various, Hong Kong',
    date: 'April 2024',
    services: 'Ground Photography · Drone Photography',
    cover: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=70',
    photos: [
      'https://picsum.photos/seed/po1a/800/1200',
      'https://picsum.photos/seed/po1b/1200/800',
      'https://picsum.photos/seed/po1c/800/1200',
      'https://picsum.photos/seed/po1d/1200/800',
      'https://picsum.photos/seed/po1e/800/1200',
      'https://picsum.photos/seed/po1f/1200/800',
    ]
  },
];

/* =====================
   Navigation
   ===================== */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

function openMenu() { mobileMenu.classList.add('open'); navToggle.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { mobileMenu.classList.remove('open'); navToggle.classList.remove('open'); document.body.style.overflow = ''; }

navToggle.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
mobileClose.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));

/* =====================
   Scroll Reveal
   ===================== */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* =====================
   Counter Animation
   ===================== */
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.target, 10);
    const start = performance.now();
    const dur = 1600;
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObs.observe(el));

/* =====================
   Projects Grid
   ===================== */
const projectsGrid = document.getElementById('projectsGrid');
let activeFilter = 'all';

function renderProjects(filter) {
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  projectsGrid.innerHTML = filtered.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-cover">
        <img src="${p.cover}" alt="${p.title}" loading="lazy">
        <span class="project-cat-badge">${p.category}</span>
        <span class="project-type-badge">${p.type}</span>
        <div class="project-view">
          <span class="project-view-label">View Gallery</span>
        </div>
      </div>
      <div class="project-info">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-meta">${p.location}<br>${p.date}</p>
        <div class="project-footer">
          <span class="project-count">${p.photos.length} photos</span>
          <span class="project-arrow">→</span>
        </div>
      </div>
    </div>
  `).join('');

  projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.id));
  });
}

/* Portfolio filter */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderProjects(activeFilter);
  });
});

renderProjects('all');

/* =====================
   Project Modal
   ===================== */
const projectModal = document.getElementById('projectModal');
const modalBack = document.getElementById('modalBack');
const modalClose = document.getElementById('modalClose');
const modalBreadcrumb = document.getElementById('modalBreadcrumb');
const projectModalInfo = document.getElementById('projectModalInfo');
const projectPhotoGrid = document.getElementById('projectPhotoGrid');

let currentProjectPhotos = [];

function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  currentProjectPhotos = p.photos;

  modalBreadcrumb.innerHTML = `${p.category} &rsaquo; <strong>${p.title}</strong>`;

  projectModalInfo.innerHTML = `
    <h2 class="modal-project-title">${p.title}</h2>
    <div class="modal-project-meta">
      <span>📍 ${p.location}</span>
      <span>📅 ${p.date}</span>
      <span>🎬 ${p.services}</span>
    </div>
  `;

  projectPhotoGrid.innerHTML = p.photos.map((src, i) => `
    <div class="project-photo-item" data-index="${i}">
      <img src="${src}" alt="Photo ${i + 1}" loading="lazy">
      <div class="photo-hover">⤢</div>
    </div>
  `).join('');

  projectPhotoGrid.querySelectorAll('.project-photo-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
  });

  projectModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('open');
  document.body.style.overflow = '';
}

modalBack.addEventListener('click', closeProjectModal);
modalClose.addEventListener('click', closeProjectModal);

/* =====================
   Lightbox (within project)
   ===================== */
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let currentLightboxIdx = 0;

function openLightbox(idx) {
  currentLightboxIdx = idx;
  lightboxContent.innerHTML = `<img src="${currentProjectPhotos[idx]}" alt="">`;
  lightbox.classList.add('open');
}
function closeLightbox() {
  lightbox.classList.remove('open');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
lightboxNext.addEventListener('click', () => {
  currentLightboxIdx = (currentLightboxIdx + 1) % currentProjectPhotos.length;
  lightboxContent.innerHTML = `<img src="${currentProjectPhotos[currentLightboxIdx]}" alt="">`;
});
lightboxPrev.addEventListener('click', () => {
  currentLightboxIdx = (currentLightboxIdx - 1 + currentProjectPhotos.length) % currentProjectPhotos.length;
  lightboxContent.innerHTML = `<img src="${currentProjectPhotos[currentLightboxIdx]}" alt="">`;
});
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('open')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNext.click();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    return;
  }
  if (projectModal.classList.contains('open') && e.key === 'Escape') closeProjectModal();
});

/* =====================
   Multi-step Booking
   ===================== */
const bookingStepEls = document.querySelectorAll('.step');
const formSteps = document.querySelectorAll('.form-step');

function goToStep(n) {
  formSteps.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(n === 'success' ? 'stepSuccess' : `step${n}`);
  if (target) target.classList.add('active');
  bookingStepEls.forEach(s => {
    const sn = parseInt(s.dataset.step, 10);
    s.classList.remove('active', 'completed');
    if (typeof n === 'number') {
      if (sn < n) s.classList.add('completed');
      if (sn === n) s.classList.add('active');
    } else {
      s.classList.add('completed');
    }
  });
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('.next-step').forEach(btn => {
  btn.addEventListener('click', () => {
    const next = parseInt(btn.dataset.next, 10);
    if (next === 2) {
      const chosen = document.querySelector('input[name="eventType"]:checked');
      const err = document.getElementById('step1Error');
      if (!chosen) { err.textContent = 'Please select an event type.'; return; }
      err.textContent = '';
    }
    goToStep(next);
  });
});
document.querySelectorAll('.prev-step').forEach(btn => {
  btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.prev, 10)));
});
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.querySelector('[name="name"]').value.trim();
  const email = e.target.querySelector('[name="email"]').value.trim();
  if (!name || !email) return;
  goToStep('success');
});

/* =====================
   Email Signup
   ===================== */
document.getElementById('signupForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.querySelector('[name="subEmail"]').value.trim();
  if (!email) return;
  e.target.style.display = 'none';
  document.getElementById('signupSuccess').style.display = 'block';
});
