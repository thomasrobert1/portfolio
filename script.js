/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO — script.js
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const translations = {
  fr: {
    pageTitle:       "Portfolio — Étudiant Ingénieur",
    navAbout:        "À propos",
    navSkills:       "Compétences",
    navTimeline:     "Parcours",
    navProjects:     "Projets",
    navContact:      "Contact",

    heroEyebrow:     "Étudiant Ingénieur aux Arts-et-Métiers",
    heroTagline:     "Passionné de technologie et d'innovation. Ma curiosité me pousse à explorer les dernières avancées technologiques et à les appliquer dans des projets concrets.",
    heroCTA:         "Voir mes projets et engagements",
    heroContact:     "Me contacter",

    aboutTag:        "Qui suis-je ?",
    aboutTitle:      "À propos de moi",
    aboutP1:         "Étudiant en <strong>1<sup>ère</sup> année</strong> aux Arts-et-Métiers, je me passionne pour la mécanique et les systèmes complexes. Ainsi les domaines de l'aérospatial et de l'aéronautique m'attirent particulièrement. Curieux et rigoureux, j'aime transformer des idées en solutions concrètes pour d'une part améliorer l'existant et d'autre part veiller au respect de la planète.",
    infoLocation:    "Localisation",
    infoStatus:      "Statut",
    infoStatusValue: "Disponible",
    infoEmail:       "Email",
    downloadCV:      "Télécharger CV",

    skillsTag:       "Expertise",
    skillsTitle:     "Compétences",
    skillDevTitle:   "Développement",
    skillSysTitle:   "Systèmes & Réseaux",
    skillAITitle:    "IA & Data",
    skillSoftTitle:  "Soft Skills",
    skillTeamwork:   "Travail d'équipe",
    skillLeadership: "Leadership",
    skillAgile:      "Méthodes Agile",
    skillEnglish:    "Anglais C1",

    timelineTag:     "Chronologie",
    timelineTitle:   "Mon Parcours",
    tabEducation:    "Formation",
    tabExperience:   "Expériences",

    edu1Title:  "Diplôme d'Ingénieur",
    edu1Desc:   "Programme Grande École (PGE) en 3 ans, spécialisation en mécanique et systèmes complexes.",
    edu2Title:  "Classes Préparatoires MPSI/PSI",
    edu2Desc:   "Formation intensive en mathématiques, physique et sciences de l'ingénieur. Admis en école d'ingénieur via concours national.",
    edu3Title:  "Baccalauréat Scientifique",
    edu3Desc:   "Mention Très Bien avec les félicitations du jury.",

    exp1Date:   "Été 2024 · 3 mois",
    exp1Title:  "Stage Développeur Full-Stack",
    exp1Desc:   "Développement d'une application web interne. Stack : React, Node.js, PostgreSQL. Travail en méthode Agile/Scrum.",
    exp2Date:   "2023 — 2024 · Bénévolat",
    exp2Title:  "Responsable Informatique",
    exp2Org:    "Association étudiante — École",
    exp2Desc:   "Gestion et développement du site de l'association, organisation d'événements techniques pour les étudiants.",
    exp3Date:   "Été 2023 · 2 mois",
    exp3Title:  "Stage d'Observation",
    exp3Desc:   "Découverte du monde startup, participation au développement d'un outil interne de data visualisation.",

    projectsTag:      "Réalisations",
    projectsTitle:    "Mes Projets",
    projectsSubtitle: "Quelques projets qui me représentent — académiques, personnels ou associatifs.",
    filterAll:  "Tous",
    filterPerso:"Personnel",
    filterAcad: "Académique",
    filterAsso: "Associatif",
    typePers:   "Personnel",
    typeAcad:   "Académique",
    typeAsso:   "Associatif",
    proj1Title: "TIPE: Yaw system pour éoliennes",
    proj1Desc:  "              Conception, réalisation et test d'un système de contrôle de l'orientation (yaw) pour éoliennes domestiques. Résultats prometteurs en conditions réelles, avec une amélioration de l'asservissement du système.",
    proj2Title: "Modèle de classification par IA",
    proj2Desc:  "Développement d'un réseau de neurones convolutif pour la classification d'images médicales. Accuracy de 94% sur le dataset de test.",
    proj3Title: "Site web de l'association",
    proj3Desc:  "Refonte complète du site vitrine de l'association étudiante. Design responsive, système CMS intégré, 1 200 visiteurs/mois.",
    proj4Title: "Outil de visualisation de données",
    proj4Desc:  "Dashboard interactif de visualisation de données financières en temps réel avec recharts et une API REST.",
    linkGithub: "MatLab",
    linkDemo:   "Demo et tests",
    linkReport: "Rapport",

    contactTag:   "Restons en contact",
    contactTitle: "Me contacter",
    contactDesc:  "Ouvert aux opportunités de stage, d'alternance ou de collaboration. N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.",
    formName:     "Nom",
    formEmail:    "Email",
    formSubject:  "Objet",
    formMessage:  "Message",
    formSend:     "Envoyer le message",
    formSuccess:  "✅ Message envoyé ! Je vous répondrai bientôt.",
    formError:    "❌ Veuillez remplir tous les champs.",

    projectPageTitle: "Projet — Détails",
    projectDetailTag: "Projet en détail",
    projectProblemTitle: "Problématique",
    projectMethodTitle: "Méthodologie",
    projectResultsTitle: "Résultats",
    projectMediaTitle: "Photos / Vidéos",
    projectResourcesTitle: "Ressources",
    projectBackCTA: "Retour aux projets",
    projectNotFound: "Projet introuvable. Retour à la page des projets.",

    footerCopy: "© 2025 Prénom NOM — Tous droits réservés",
    footerMade: "Fait avec ❤️ et beaucoup de café ☕",
  },

  en: {
    pageTitle:       "Portfolio — Engineering Student",
    navAbout:        "About",
    navSkills:       "Skills",
    navTimeline:     "Journey",
    navProjects:     "Projects",
    navContact:      "Contact",

    heroEyebrow:     "Engineering Student · Engineering School",
    heroTagline:     "Passionate about technology, code and innovation.<br>Seeking new challenges and opportunities.",
    heroCTA:         "View my projects",
    heroContact:     "Contact me",
    heroScroll:      "Scroll",

    aboutTag:        "Who am I?",
    aboutTitle:      "About me",
    aboutP1:         "Studying in <strong>Year X</strong> at [School Name], I am passionate about [interests]. Curious and detail-oriented, I love turning ideas into concrete solutions.",
    aboutP2:         "Outside of classes, I spend my time on personal projects, tech watch and practising [hobbies / activities].",
    infoLocation:    "Location",
    infoStatus:      "Status",
    infoStatusValue: "Available",
    infoEmail:       "Email",
    downloadCV:      "Download Resume",

    skillsTag:       "Expertise",
    skillsTitle:     "Skills",
    skillDevTitle:   "Development",
    skillSysTitle:   "Systems & Networks",
    skillAITitle:    "AI & Data",
    skillSoftTitle:  "Soft Skills",
    skillTeamwork:   "Teamwork",
    skillLeadership: "Leadership",
    skillAgile:      "Agile Methods",
    skillEnglish:    "French C1",

    timelineTag:     "Timeline",
    timelineTitle:   "My Journey",
    tabEducation:    "Education",
    tabExperience:   "Experience",

    edu1Title:  "Engineering Degree",
    edu1Desc:   "Specialisation in Computer Science and Embedded Systems. Top of class, member of the arts committee.",
    edu2Title:  "Preparatory Classes MPSI/MP",
    edu2Desc:   "Intensive preparation in mathematics, physics and engineering sciences. Admitted to engineering school via national competitive exam.",
    edu3Title:  "Scientific Baccalaureate",
    edu3Desc:   "Highest honours with distinction from the jury.",

    exp1Date:   "Summer 2024 · 3 months",
    exp1Title:  "Full-Stack Developer Intern",
    exp1Desc:   "Development of an internal web application. Stack: React, Node.js, PostgreSQL. Work in Agile/Scrum methodology.",
    exp2Date:   "2023 — 2024 · Volunteering",
    exp2Title:  "IT Manager",
    exp2Org:    "Student association — School",
    exp2Desc:   "Management and development of the association's website, organisation of technical events for students.",
    exp3Date:   "Summer 2023 · 2 months",
    exp3Title:  "Observation Internship",
    exp3Desc:   "Startup world discovery, participation in the development of an internal data visualisation tool.",

    projectsTag:      "Achievements",
    projectsTitle:    "My Projects",
    projectsSubtitle: "A few projects that represent me — academic, personal or associative.",
    filterAll:  "All",
    filterPerso:"Personal",
    filterAcad: "Academic",
    filterAsso: "Associative",
    typePers:   "Personal",
    typeAcad:   "Academic",
    typeAsso:   "Associative",
    proj1Title: "Personal tracking app",
    proj1Desc:  "Full-stack task management and goal tracking web application, with notification system and usage statistics.",
    proj2Title: "AI classification model",
    proj2Desc:  "Development of a convolutional neural network for medical image classification. 94% accuracy on the test dataset.",
    proj3Title: "Association website",
    proj3Desc:  "Complete redesign of the student association's showcase website. Responsive design, integrated CMS, 1,200 visitors/month.",
    proj4Title: "Data visualisation tool",
    proj4Desc:  "Interactive dashboard for real-time financial data visualisation using recharts and a REST API.",
    linkGithub: "GitHub",
    linkDemo:   "Demo",
    linkReport: "Report",

    contactTag:   "Let's keep in touch",
    contactTitle: "Contact me",
    contactDesc:  "Open to internship, work-study or collaboration opportunities. Feel free to get in touch to discuss projects or opportunities.",
    formName:     "Name",
    formEmail:    "Email",
    formSubject:  "Subject",
    formMessage:  "Message",
    formSend:     "Send message",
    formSuccess:  "✅ Message sent! I'll get back to you soon.",
    formError:    "❌ Please fill in all fields.",

    projectPageTitle: "Project — Details",
    projectDetailTag: "Project details",
    projectProblemTitle: "Challenge",
    projectMethodTitle: "Methodology",
    projectResultsTitle: "Results",
    projectMediaTitle: "Photos / Videos",
    projectResourcesTitle: "Resources",
    projectBackCTA: "Back to projects",
    projectNotFound: "Project not found. Back to the projects page.",

    footerCopy: "© 2025 First Last — All rights reserved",
    footerMade: "Made with ❤️ and a lot of coffee ☕",
  }
};

/* ─────────────────────────────────────────────
   LANGUAGE MANAGER
───────────────────────────────────────────── */
let currentLang = localStorage.getItem("lang") || "fr";

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // <title>
  document.title = t.pageTitle;

  // All [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      // Allow inline HTML (for <br>, <strong>, <sup>)
      el.innerHTML = t[key];
    }
  });

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update active lang button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Store
  localStorage.setItem("lang", lang);
  currentLang = lang;

  if (document.getElementById("projectDetailPage")) {
    renderProjectDetailPage();
  }
}

// Click handlers
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.lang !== currentLang) {
      applyTranslations(btn.dataset.lang);
    }
  });
});

// Init
applyTranslations(currentLang);

/* ─────────────────────────────────────────────
   NAVBAR — scroll behaviour
───────────────────────────────────────────── */
const navbar = document.getElementById("navbar");

function updateNavbar() {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
}
window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".nav-links a[href^='#']");

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

/* ─────────────────────────────────────────────
   MOBILE BURGER MENU
───────────────────────────────────────────── */
const burger    = document.getElementById("menuBurger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  burger.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    burger.classList.remove("open");
    document.body.style.overflow = "";
  });
});

/* ─────────────────────────────────────────────
   SCROLL REVEAL — IntersectionObserver
───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Un-observe after first reveal for performance
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal, .fade-in").forEach(el => {
  revealObserver.observe(el);
});

/* ─────────────────────────────────────────────
   TIMELINE TABS
───────────────────────────────────────────── */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    // Update buttons
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Show/hide panels
    document.querySelectorAll(".timeline-panel").forEach(panel => {
      const isActive = panel.id === `tab-${target}`;
      panel.classList.toggle("active", isActive);

      // Re-trigger fade-in animations inside the newly shown panel
      if (isActive) {
        panel.querySelectorAll(".fade-in").forEach(el => {
          el.classList.remove("visible");
          // Micro delay so the browser registers the removed class
          requestAnimationFrame(() => {
            requestAnimationFrame(() => revealObserver.observe(el));
          });
        });
      }
    });
  });
});

/* ─────────────────────────────────────────────
   PROJECT CARDS CLICK → DETAIL PAGE
───────────────────────────────────────────── */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    // Let explicit links inside project card work (GitHub, Rapport, Live, etc.)
    if (e.target.closest(".project-links a")) {
      return;
    }

    const projectId = card.dataset.projectId;
    if (projectId) {
      window.location.href = `project.html?project=${projectId}`;
    }
  });
});

/* ─────────────────────────────────────────────
   PROJECT FILTER
───────────────────────────────────────────── */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".project-card").forEach(card => {
      const match = filter === "all" || card.dataset.cat === filter;
      card.classList.toggle("hidden", !match);
    });
  });
});

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
const form     = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  feedback.className = "form-feedback";

  if (!name || !email || !subject || !message) {
    const t = translations[currentLang];
    feedback.textContent = t.formError;
    feedback.classList.add("error");
    return;
  }

  // ─── Replace this block with your actual backend / EmailJS / Formspree call ───
  // Example with Formspree:
  // fetch("https://formspree.io/f/YOUR_ID", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email, subject, message })
  // }).then(() => showSuccess()).catch(() => showError());

  // Demo success
  const t = translations[currentLang];
  feedback.textContent = t.formSuccess;
  feedback.classList.add("success");
  form.reset();
});

/* ─────────────────────────────────────────────
   SMOOTH ANCHOR SCROLLING (fallback for older Safari)
───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ─────────────────────────────────────────────
   HERO — typing / stagger init on load
───────────────────────────────────────────── */
window.addEventListener("load", () => {
  // Small delay so transitions are visible on first load
  setTimeout(() => {
    document.querySelectorAll("#hero .reveal").forEach(el => {
      revealObserver.observe(el);
    });
  }, 100);

  // Render detail page when present
  if (document.getElementById("projectDetailPage")) {
    renderProjectDetailPage();
  }
});

const projectData = {
  proj1: {
    fr: {
      title: "TIPE: Yaw system pour éoliennes",
      subtitle: "Système d'orientation automatique pour micro-éoliennes",
      problem: "Améliorer la performance énergétique d'une éolienne domestique en assurant un suivi automatique du vent (yaw).",
      method: "Conception mécanique du châssis, modélisation MATLAB/Simulink, prototype Arduino, capteur IMU et asservissement PID en boucle fermée.",
      results: "Gain de production estimé à +12 % en conditions réelles 4~m/s, temps de réponse divisé par 2 en comparaison à un système manuel.",
      media: [
        { type: "image", src: "assets/logos/ensam.svg", alt: "Prototype yaw eolienne" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Vidéo de démonstration" }
      ],
      resources: [
        { text: "Rapport complet (PDF)", href: "assets/rapport-yaw.pdf" }
      ]
    },
    en: {
      title: "TIPE: Yaw System for Wind Turbines",
      subtitle: "Automatic orientation system for small wind turbines",
      problem: "Improve energy performance of a domestic wind turbine by automating yaw tracking with wind direction.",
      method: "Mechanical design, MATLAB/Simulink modeling, Arduino prototype, IMU sensor and closed-loop PID control.",
      results: "Estimated production gain +12% in real conditions (4 m/s), response time cut by 50% compared to manual adjustment.",
      media: [
        { type: "image", src: "assets/logos/ensam.svg", alt: "Yaw wind turbine prototype" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Demo video" }
      ],
      resources: [
        { text: "Full report (PDF)", href: "assets/rapport-yaw.pdf" }
      ]
    }
  },
  proj2: {
    fr: {
      title: "Modèle de classification par IA",
      subtitle: "Réseau de neurones convolutif pour imagerie médicale",
      problem: "Réduire les erreurs de diagnostic en automatisant l’analyse d’images médicales.",
      method: "Prétraitement Python/NumPy, entraînement PyTorch, recherche d’hyperparamètres et validation croisée.",
      results: "94 % de précision sur le jeu de test, matrice de confusion démontrant un taux de faux négatifs < 2 %.",
      media: [
        { type: "image", src: "assets/logos/bac.svg", alt: "Architecture CNN" }
      ],
      resources: [
        { text: "Code GitHub", href: "https://github.com" },
        { text: "Rapport PDF", href: "assets/rapport-ia.pdf" }
      ]
    },
    en: {
      title: "AI Classification Model",
      subtitle: "Convolutional neural network for medical imaging",
      problem: "Reduce diagnostic errors by automating the analysis of medical images.",
      method: "Python/NumPy preprocessing, PyTorch training, hyperparameter tuning and cross-validation.",
      results: "94% accuracy on test set, confusion matrix with false negative rate < 2%.",
      media: [
        { type: "image", src: "assets/logos/bac.svg", alt: "CNN architecture" }
      ],
      resources: [
        { text: "GitHub code", href: "https://github.com" },
        { text: "Report PDF", href: "assets/rapport-ia.pdf" }
      ]
    }
  },
  proj3: {
    fr: {
      title: "Site web de l'association",
      subtitle: "Refonte responsive et CMS" ,
      problem: "Moderniser l’image de l’association et améliorer la gestion de contenu pour les activités étudiantes.",
      method: "Design UX/UI, développement HTML/CSS/JS, intégration CMS et tests sur mobile.",
      results: "+1200 visiteurs/mois, augmentation de 35% du taux d’engagement sur les événements.",
      media: [
        { type: "image", src: "assets/logos/prepa.png", alt: "Capture du site association" }
      ],
      resources: [
        { text: "Site live", href: "#" }
      ]
    },
    en: {
      title: "Association website",
      subtitle: "Responsive redesign with CMS",
      problem: "Modernize the association's image and improve content management for student activities.",
      method: "UX/UI design, HTML/CSS/JS development, CMS integration and mobile testing.",
      results: "+1200 visitors/month, +35% event engagement rate.",
      media: [
        { type: "image", src: "assets/logos/prepa.png", alt: "Association website screenshot" }
      ],
      resources: [
        { text: "Live site", href: "#" }
      ]
    }
  },
  proj4: {
    fr: {
      title: "Outil de visualisation de données",
      subtitle: "Dashboard temps réel pour données financières",
      problem: "Fournir une interface claire pour analyser les flux de données financières en temps réel.",
      method: "Réact, Recharts, API REST, websocket pour rafraîchissement live.",
      results: "Interface fluide, tableau de bord adopté par 4 équipes, réduction de 20 % du temps d’analyse.",
      media: [
        { type: "image", src: "assets/logos/entreprise-xyz.svg", alt: "Dashboard interface" }
      ],
      resources: [
        { text: "Code GitHub", href: "https://github.com" }
      ]
    },
    en: {
      title: "Data Visualization Tool",
      subtitle: "Real-time dashboard for financial data",
      problem: "Provide a clear interface to analyze real-time financial data streams.",
      method: "React, Recharts, REST API, websocket live updates.",
      results: "Smooth UI, adopted by 4 teams, 20% reduction in analysis time.",
      media: [
        { type: "image", src: "assets/logos/entreprise-xyz.svg", alt: "Dashboard interface" }
      ],
      resources: [
        { text: "GitHub code", href: "https://github.com" }
      ]
    }
  }
};

function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderProjectDetailPage() {
  const projectId = getUrlParameter("project");
  const project = projectData[projectId];
  const locale = currentLang || "fr";
  const tl = translations[locale];

  const root = document.getElementById("projectDetailPage");
  const titleEl = document.getElementById("projectTitle");
  const subtitleEl = document.getElementById("projectSubtitle");
  const problemEl = document.getElementById("projectProblem");
  const methodEl = document.getElementById("projectMethod");
  const resultsEl = document.getElementById("projectResults");
  const mediaEl = document.getElementById("projectMedia");
  const resourcesEl = document.getElementById("projectResources");
  const backBtn = document.getElementById("projectBack");

  if (!project) {
    root.innerHTML = `<p>${tl.projectNotFound}</p><a class="btn-primary" href="index.html">${tl.projectBackCTA}</a>`;
    return;
  }

  const content = project[locale] || project.fr;

  document.title = `${content.title} - ${tl.pageTitle ?? "Portfolio"}`;

  titleEl.textContent = content.title;
  subtitleEl.textContent = content.subtitle;
  problemEl.textContent = content.problem;
  methodEl.textContent = content.method;
  resultsEl.textContent = content.results;

  mediaEl.innerHTML = "";
  (content.media || []).forEach(item => {
    const node = document.createElement(item.type === "video" ? "video" : "img");
    if (item.type === "video") {
      node.src = item.src;
      node.controls = true;
      node.setAttribute("aria-label", item.alt);
      node.className = "project-media-item";
    } else {
      node.src = item.src;
      node.alt = item.alt;
      node.className = "project-media-item";
    }
    mediaEl.appendChild(node);
  });

  resourcesEl.innerHTML = "";
  (content.resources || []).forEach(res => {
    const link = document.createElement("a");
    link.href = res.href;
    link.target = "_blank";
    link.rel = "noopener";
    link.className = "btn-ghost";
    link.style.marginRight = "0.8rem";
    link.textContent = res.text;
    resourcesEl.appendChild(link);
  });

  backBtn.textContent = tl.projectBackCTA;
  backBtn.href = "index.html#projects";
}



