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
    aboutP1:         "Étudiant en <strong>1<sup>ère</sup> année</strong> aux <strong>Arts-et-Métiers</strong>, je me passionne pour la mécanique et les systèmes complexes. Ainsi les domaines de l'aérospatial et de l'aéronautique m'attirent particulièrement. Curieux et rigoureux, j'aime transformer des idées en solutions concrètes pour d'une part améliorer l'existant et d'autre part veiller au respect de la planète.",
    interestsTag:    "Ce qui m'anime",
    interestsTitle:  "Centres d'intérêt & passions",
    interestsSubtitle:"Des domaines qui nourrissent ma curiosité et inspirent mes projets au quotidien.",
    interest1Title:  "Aéronautique, spatial et naval",
    interest1Desc:   "Je suis fasciné par les systèmes embarqués, la mécanique de précision et les innovations qui repoussent les limites techniques.",
    interest2Title:  "La nature et ses richesses",
    interest2Desc:   "La richesse et la diversité de la nature me fascinent et me poussent à penser différemment afin de préserver notre planète. Je me passionne pour la gastronomie responsable ainsi que pour l’œnologie, qui allient plaisir et respect de l’environnement.",
    interest3Title:  "Engagement & défis collectifs",
    interest3Desc:   "J'apprécie les projets d'équipe, la vie associative et les expériences qui mêlent responsabilité, organisation et dépassement de soi.",
    infoLocation:    "Localisation",
    infoStatus:      "Statut",
    infoStatusValue: "Disponible",
    infoEmail:       "Email",
    downloadCV:      "Télécharger CV",

    skillsTag:       "Expertise",
    skillsTitle:     "Compétences",
    skillDevTitle:   "CAO et Programmation",
    skillSysTitle:   "Systèmes & Réseaux",
    skillAITitle:    "IA & Data",
    skillSoftTitle:  "Soft Skills",
    skillTeamwork:   "Travail d'équipe",
    skillLeadership: "Leadership",
    skillAgile:      "Méthodes Agile",
    skillEnglish:    "Anglais C1",
    skillGerman:     "Allemand C1",
    skillVision:      "Vision et curiosité",
    skillHardSkills:     "Compétences techniques",

    timelineTag:     "Chronologie",
    timelineTitle:   "Mon Parcours",
    tabEducation:    "Formation",
    tabExperience:   "Expériences",

    edu1Title:  "Diplôme d'Ingénieur",
    edu1Desc:   "Programme Grandes Écoles (PGE) en 3 ans, spécialisation en mécanique et systèmes complexes.",
    edu2Title:  "Classes Préparatoires MPSI/PSI",
    edu4Title:  "Lycée francais de Berlin",
    edu4Org:    "Berlin, Allemagne",
    edu4Desc:   "Immersion totale en Allemagne, appropriation rapide de la langue et culture allemande. Formation solide en sciences et mathématiques, avec un accent sur les langues vivantes.",
    edu2Desc:   "Formation intensive en mathématiques, physique et sciences de l'ingénieur. Admis en école d'ingénieur via concours national.",
    edu3Title:  "Baccalauréat Scientifique",
    edu3Desc:   "Mention Très Bien, spécialité Mathématiques et Physique-Chimie, option Maths Expertes.",

    exp1Date:   "Été 2023 · 2 mois",
    exp4Date:   "2026 - Present",
    exp4Title:  "Responsable du pôle Qualité de l'AMJE",
    exp4Org:    "Association étudiante",
    exp4Desc:   "Responsable du pôle Qualité au sein de Arts-et-Métiers Junior Entreprise (AMJE). En charge de la coordination des 8 membres du pôle qualité, de la relecture des livrables et de l'amélioration continue des processus internes et de la performance.",
    exp1Title:  "Travail d'été — Ouvrier agricole",
    exp1Desc:   "Travail d'été en tant qu'ouvrier agricole dans une exploitation maraîchère. Expérience enrichissante de travail manuel, gestion d'équipe et respect des normes de sécurité.",
    exp3Date:   "Été 2023 · 2 mois",
    exp3Title:  "Stage d'Observation",
    exp3Desc:   "Découverte du monde startup, participation au développement d'un outil interne de data visualisation.",
    exp5Date:   "2026 - Present",
    exp5Title:  "Pôle qualité AMJE",
    exp5Org:    "Arts-et-Métiers Junior Entreprise (AMJE)",
    exp5Desc:   "Chargé du pôle qualité au sein de l'AMJE. Relecture des livrables et documents internes, mise en place de processus qualité, suivi des performances de la structure et coordination avec les autres pôles pour assurer la satisfaction client et l'amélioration continue des services proposés.",

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
    proj1Desc:  "Conception, réalisation et test d'un système de contrôle de l'orientation (yaw) pour éoliennes domestiques. Résultats prometteurs en conditions réelles, avec une amélioration de l'asservissement du système.",
    proj2Title: "Réducteur industriel",
    proj2Desc:  "Conception, modélisation et optimisation d'un réducteur industriel. Étude d'un cahier des charges complexe, choix de la structure, dimensionnement préliminaire et optimisation paramétrique.",
    proj3Title: "Grand Défi",
    proj3Desc:  "Participation au \"Grand Défi\" : travaux de groupe avec ma promotion au sein d'un établissement de santé mentale dans le but d'égayer les locaux et la cour principale avec des fresques artistiques.",
    proj4Title: "Brandstorm x L'Oréal 2026",
    proj4Desc:  "Participation au concours international de marketing et d'innovation de L'Oréal. Élaboration d'une stratégie de marque innovante pour une nouvelle gamme de produits issus de la parfurmerie durable, avec un focus sur l'inclusivité et l'écologie.",
    proj5Title: "Projet FAB/IMP",
    proj5Desc:  "Étude des interactions matériaux-procédés dans le cadre d'un projet de fabrication, d'usinage et de métrologie.",
    proj6Title: "Monaco Energy Boat Challenge (MEBC) 2027",
    proj6Desc:  "Participation au Monaco Energy Boat Challenge (MEBC) 2027, compétition internationale de bateaux à énergie renouvelable. Conception et construction d'un prototype de catamaran électrique, avec des innovations en matière d'efficacité énergétique et de design hydrodynamique.",
    linkGithub: "MatLab",
    linkDemo:   "Demo et tests",
    linkReport: "Présentation (PDF)",

    contactTag:   "Restons en contact",
    contactTitle: "Me contacter",
    contactDesc:  "Ouvert aux opportunités de stage. N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.",
    formName:     "Nom",
    formEmail:    "Email",
    formSubject:  "Objet",
    formMessage:  "Message",
    formSend:     "Envoyer le message",
    formSuccess:  " Message envoyé ! Je vous répondrai bientôt.",
    formError:    " Veuillez remplir tous les champs.",

    projectPageTitle: "Projet — Détails",
    projectDetailTag: "Projet en détail",
    projectProblemTitle: "Problématique",
    projectMethodTitle: "Méthodologie",
    projectResultsTitle: "Résultats",
    projectMediaTitle: "Photos / Vidéos",
    projectResourcesTitle: "Ressources",
    projectBackCTA: "Retour aux projets",
    projectNotFound: "Projet introuvable. Retour à la page des projets.",

    footerCopy: "© 2025 Thomas ROBERT — Tous droits réservés",
    footerMade: "Étudiant Ingénieur - Arts-et-Métiers (ENSAM)",
  },

  en: {
    pageTitle:       "Portfolio — Engineering Student",
    navAbout:        "About",
    navSkills:       "Skills",
    navTimeline:     "Journey",
    navProjects:     "Projects",
    navContact:      "Contact",

    heroEyebrow:     "Engineering Student at Arts et Métiers",
    heroTagline:     "Passionate about technology and innovation, I enjoy exploring the latest advances and turning them into concrete projects.",
    heroCTA:         "Explore my projects and commitments",
    heroContact:     "Contact me",

    aboutTag:        "Who am I?",
    aboutTitle:      "About me",
    aboutP1:         "As a <strong>first-year</strong> student at <strong>Arts et Métiers</strong>, I am passionate about mechanics and complex systems. I am particularly drawn to aerospace and aeronautics. Curious and rigorous, I enjoy turning ideas into practical solutions — both to improve existing systems and to help protect the planet.",
    interestsTag:    "What drives me",
    interestsTitle:  "Interests & passions",
    interestsSubtitle:"The areas that fuel my curiosity and inspire my projects every day.",
    interest1Title:  "Aeronautics, space and naval engineering",
    interest1Desc:   "I am fascinated by embedded systems, precision mechanics and the innovations that keep pushing technical boundaries.",
    interest2Title:  "Nature and its richness",
    interest2Desc:   "The richness and diversity of nature inspire me to think differently and to help preserve our planet. I am also passionate about responsible gastronomy and oenology, both of which combine enjoyment with environmental awareness.",
    interest3Title:  "Commitment & collective challenges",
    interest3Desc:   "I enjoy team projects, student life and experiences that combine responsibility, organization and a drive to go further.",
    infoLocation:    "Location",
    infoStatus:      "Status",
    infoStatusValue: "Available",
    infoEmail:       "Email",
    downloadCV:      "Download CV",

    skillsTag:       "Expertise",
    skillsTitle:     "Skills",
    skillDevTitle:   "CAD & Programming",
    skillSysTitle:   "Systems & Networks",
    skillAITitle:    "AI & Data",
    skillSoftTitle:  "Soft Skills",
    skillTeamwork:   "Teamwork",
    skillLeadership: "Leadership",
    skillAgile:      "Agile Methods",
    skillEnglish:    "English C1",
    skillGerman:     "German C1",
    skillVision:     "Vision & curiosity",
    skillHardSkills: "Technical skills",

    timelineTag:     "Timeline",
    timelineTitle:   "My Journey",
    tabEducation:    "Education",
    tabExperience:   "Experience",

    edu1Title:  "Engineering Degree",
    edu1Desc:   "Three-year Grandes Écoles engineering program (PGE), with a focus on mechanics and complex systems.",
    edu2Title:  "MPSI/PSI Preparatory Classes",
    edu4Title:  "French High School of Berlin",
    edu4Org:    "Berlin, Germany",
    edu4Desc:   "Full immersion in Germany, with rapid fluency in the language and culture. A strong academic foundation in science and mathematics, with a particular focus on modern languages.",
    edu2Desc:   "Intensive training in mathematics, physics and engineering sciences, leading to admission to engineering school through a national competitive exam.",
    edu3Title:  "General Baccalaureate",
    edu3Desc:   "Graduated with highest honours, specializing in Mathematics and Physics-Chemistry, with the Advanced Mathematics option.",

    exp1Date:   "Summer 2023 · 2 months",
    exp4Date:   "2026 - Present",
    exp4Title:  "Head of Quality — AMJE",
    exp4Org:    "Arts et Métiers Junior Entreprise (AMJE)",
    exp4Desc:   "Responsible for deliverable reviews, continuous improvement and coordination with the other divisions to maintain a high level of quality and client satisfaction.",
    exp1Title:  "Summer job — Farm worker",
    exp1Desc:   "Summer work on a market gardening farm — a valuable experience in manual work, team coordination and compliance with safety standards.",
    exp2Date:   "2023 — 2024 · Volunteering",
    exp2Title:  "President of the Strass Fermière association",
    exp2Org:    "Strass Fermière association",
    exp2Desc:   "Coordinated volunteer activities, organized events and managed communication around agricultural and social projects.",
    exp3Date:   "Summer 2023 · 2 months",
    exp3Title:  "Observation Internship",
    exp3Desc:   "An introduction to the startup world, including participation in the development of an internal data-visualization tool.",
    exp5Date:   "2026 - Present",
    exp5Title:  "Quality Division — AMJE",
    exp5Org:    "Arts et Métiers Junior Entreprise (AMJE)",
    exp5Desc:   "In charge of the Quality Division within AMJE: reviewing deliverables and internal documents, implementing quality procedures, monitoring performance and coordinating with the other divisions to support client satisfaction and continuous improvement.",

    projectsTag:      "Achievements",
    projectsTitle:    "My Projects",
    projectsSubtitle: "A selection of projects that reflect who I am — academic, personal and community-based.",
    filterAll:  "All",
    filterPerso:"Personal",
    filterAcad: "Academic",
    filterAsso: "Community",
    typePers:   "Personal",
    typeAcad:   "Academic",
    typeAsso:   "Community",
    proj1Title: "TIPE: Yaw Control System for Wind Turbines",
    proj1Desc:  "Design, development and testing of a yaw control system for small-scale wind turbines. The project delivered promising real-world results and improved system responsiveness.",
    proj2Title: "Industrial Gear Reducer",
    proj2Desc:  "Design, modeling and optimization of an industrial gear reducer, from architecture selection and preliminary sizing to parametric optimization.",
    proj3Title: "Grand Défi",
    proj3Desc:  "Participation in the \"Grand Défi\": a collaborative project carried out with my class in a mental health facility to brighten the site with artistic murals.",
    proj4Title: "L'Oréal Brandstorm 2026",
    proj4Desc:  "Participation in L'Oréal's international marketing and innovation competition, with the development of an inclusive and sustainable fragrance concept.",
    proj5Title: "FAB/IMP Project",
    proj5Desc:  "Study of material-process interactions as part of a project combining manufacturing, machining and metrology.",
    proj6Title: "Monaco Energy Boat Challenge (MEBC) 2027",
    proj6Desc:  "Participation in the Monaco Energy Boat Challenge (MEBC) 2027, with the design and construction of an electric catamaran prototype focused on energy efficiency and hydrodynamic performance.",
    linkGithub: "MATLAB",
    linkDemo:   "Demo and tests",
    linkReport: "Presentation (PDF)",

    contactTag:   "Let's stay in touch",
    contactTitle: "Contact me",
    contactDesc:  "I am open to internship opportunities. Feel free to reach out to discuss a project, an opportunity or a collaboration.",
    formName:     "Name",
    formEmail:    "Email",
    formSubject:  "Subject",
    formMessage:  "Message",
    formSend:     "Send message",
    formSuccess:  "Message sent! I will get back to you soon.",
    formError:    "Please fill in all fields.",

    projectPageTitle: "Project Details",
    projectDetailTag: "Project details",
    projectProblemTitle: "Problem statement",
    projectMethodTitle: "Methodology",
    projectResultsTitle: "Results",
    projectMediaTitle: "Photos / Videos",
    projectResourcesTitle: "Resources",
    projectBackCTA: "Back to projects",
    projectNotFound: "Project not found. Return to the projects page.",

    footerCopy: "© 2025 Thomas ROBERT — All rights reserved",
    footerMade: "Engineering Student — Arts et Métiers (ENSAM)",
  }
};

const extraLocalizedContent = {
  fr: {
    aboutTags: ["🎓 École d'Ingénieurs", "💻 Ambitieux", "🔬 Orienté solutions"],
    skillTagGroups: {
      1: ["Mécanique", "Électronique", "Analyse de données", "Simulation", "Savoir-faire industriel"],
      2: ["Autonomie", "Responsabilité", "Ouverture d'esprit", "Sens du projet"]
    },
    timelineTags: [
      ["Leadership", "Organisation", "Communication"],
      ["Mécanique des solides", "Mécanique des fluides", "Maths appli.", "Procédés industriels", "Matériaux"],
      ["Mathématiques", "Physique-Chimie", "Sciences de l'ingénieur", "Anglais/Allemand"],
      ["Travail manuel", "Gestion d'équipe", "Sécurité"],
      ["Mention TB", "Internat"],
      ["Immersion", "Club d'échecs", "Cours intensifs d'allemand", "Voyage et découverte du pays"]
    ],
    projectTech: [
      ["Prototype", "Arduino", "Asservissement", "MatLab"],
      ["CAO", "Fusion360", "Engrenages", "Optimisation"],
      ["Association", "UMB", "Fresques", "Travaux d'équipe"],
      ["L'Oréal", "Marketing", "Innovation", "CAO"],
      ["Matériaux", "Fabrication", "Métrologie", "CAO/FAO"],
      ["Monaco", "Catamaran", "Hydrodynamique", "Énergie"]
    ],
    projectCardTitle: "Voir la fiche projet"
  },
  en: {
    aboutTags: ["🎓 Engineering Student", "💻 Tech-driven", "🔬 Solution-oriented"],
    skillTagGroups: {
      1: ["Mechanics", "Electronics", "Data analysis", "Simulation", "Industrial know-how"],
      2: ["Autonomy", "Responsibility", "Open-mindedness", "Project mindset"]
    },
    timelineTags: [
      ["Leadership", "Organization", "Communication"],
      ["Solid mechanics", "Fluid mechanics", "Applied maths", "Industrial processes", "Materials"],
      ["Mathematics", "Physics-Chemistry", "Engineering sciences", "English/German"],
      ["Manual work", "Team coordination", "Safety"],
      ["Highest honours", "Boarding school"],
      ["Immersion", "Chess club", "Intensive German lessons", "Travel and cultural discovery"]
    ],
    projectTech: [
      ["Prototype", "Arduino", "Control Systems", "MATLAB"],
      ["CAD", "Fusion 360", "Gear Design", "Optimization"],
      ["Community Project", "UMB", "Murals", "Teamwork"],
      ["L'Oréal", "Marketing", "Innovation", "Design"],
      ["Materials", "Manufacturing", "Metrology", "CAD/CAM"],
      ["Monaco", "Catamaran", "Hydrodynamics", "Energy"]
    ],
    projectCardTitle: "View project details"
  }
};

function updateTextGroup(elements, values) {
  elements.forEach((element, index) => {
    if (values[index] !== undefined) {
      element.textContent = values[index];
    }
  });
}

function applyStaticLocalizedContent(lang) {
  const data = extraLocalizedContent[lang] || extraLocalizedContent.fr;

  updateTextGroup(Array.from(document.querySelectorAll(".about-tags .tag")), data.aboutTags);

  const skillTagGroups = document.querySelectorAll("#skills .skill-card .skill-tags");
  Object.entries(data.skillTagGroups).forEach(([groupIndex, values]) => {
    const group = skillTagGroups[Number(groupIndex)];
    if (group) {
      updateTextGroup(Array.from(group.querySelectorAll("span")), values);
    }
  });

  document.querySelectorAll("#timeline .timeline-tags").forEach((group, index) => {
    if (data.timelineTags[index]) {
      updateTextGroup(Array.from(group.querySelectorAll("span")), data.timelineTags[index]);
    }
  });

  document.querySelectorAll("#projects .project-tech").forEach((group, index) => {
    if (data.projectTech[index]) {
      updateTextGroup(Array.from(group.querySelectorAll("span")), data.projectTech[index]);
    }
  });

  document.querySelectorAll(".project-card").forEach(card => {
    card.title = data.projectCardTitle;
  });
}

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

  applyStaticLocalizedContent(lang);

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update active lang button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Store
  localStorage.setItem("lang", lang);
  currentLang = lang;

  const shouldRenderProject = document.getElementById("projectDetailPage") || getCurrentProjectId();
  if (shouldRenderProject) {
    setTimeout(() => {
      renderProjectDetailPage();
    }, 0);
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

if (burger && mobileNav) {
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
}

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
      window.location.href = `${projectId}.html`;
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

    document.querySelectorAll(".project-link-wrapper").forEach(wrapper => {
      const match = filter === "all" || wrapper.dataset.cat === filter;
      wrapper.classList.toggle("hidden", !match);
    });
  });
});

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
const form     = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");
const contactRecipient = "trobert.compain@gmail.com";

if (form && feedback) {
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

    const mailBody = `Nom: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoURL = `mailto:${contactRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    const t = translations[currentLang];
    feedback.textContent = t.formSuccess;
    feedback.classList.add("success");
    form.reset();

    // Ouvre le client mail local avec le message pré-rempli.
    window.location.href = mailtoURL;
  });
}

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
  if (document.getElementById("projectDetailPage") || getCurrentProjectId()) {
    renderProjectDetailPage();
  }
});

const projectData = {
  proj1: {
    fr: {
      title: "TIPE: Yaw system pour éoliennes",
      subtitle: "Système d'orientation automatique pour éoliennes domestiques",
      problem: "Améliorer la performance énergétique d'une éolienne domestique en assurant un suivi automatique du vent (yaw).",
      method: "Mise en place d'un asservissement PID, prototype Arduino avec simulation du vent, capteur (girouette).",
      results: "Compromis à faire entre précision, rapidité et stabilité. Les expériences montrent que le système peut améliorer l'efficacité énergétique de l'éolienne tout en maintenant une réponse rapide aux changements de direction du vent.",
      media: [
        { type: "video", src: "assets/videotipe.mov", alt: "Vidéo de démonstration du TIPE" }
      ],
      resources: [
        { text: "Présentation (PDF)", href: "assets/logos/prestipe.pdf" }
      ]
    },
    en: {
      title: "TIPE: Yaw Control System for Wind Turbines",
      subtitle: "An automatic yaw control system for small-scale wind turbines",
      problem: "How can the energy efficiency of a small wind turbine be improved by keeping it automatically aligned with the wind?",
      method: "Development of a PID-based control loop using an Arduino prototype, a wind-vane sensor and a wind simulation setup.",
      results: "The project highlighted the trade-off between accuracy, responsiveness and stability. Tests showed that the system can improve energy capture while still reacting quickly to changes in wind direction.",
      media: [
        { type: "video", src: "assets/videotipe.mov", alt: "TIPE demonstration video" }
      ],
      resources: [
        { text: "Presentation (PDF)", href: "assets/logos/prestipe.pdf" }
      ]
    }
  },
  proj2: {
    fr: {
      title: "Réducteur industriel",
      subtitle: "Conception et optimisation des paramètres d'un réducteur industriel",
      problem: "Concevoir un réducteur industriel performant et fiable, répondant aux exigences d'un cahier des charges complexe.",
      method: "Conception, modélisation et optimisation d'un réducteur industriel. Étude d'un cahier des charges complexe, choix de la structure, dimensionnement préliminaire et optimisation paramétrique.",
      results: "Modèle CAO du réducteur industriel.",
      media: [
        { type: "image", src: "assets/logos/CAO.png", alt: "Modèle CAO du réducteur industriel" },
      ],
      resources: [
        { text: "Rapport PDF", href: "assets/rapport-reducteur.pdf" }
      ]
    },
    en: {
      title: "Industrial Gear Reducer",
      subtitle: "Design and optimization of an industrial gear reducer",
      problem: "How can a reliable, high-performance gear reducer be designed to meet a demanding technical brief?",
      method: "Full design, modeling and optimization of an industrial gear reducer, from architecture selection and preliminary sizing to parametric optimization.",
      results: "CAD model of the industrial gear reducer.",
      media: [
        { type: "image", src: "assets/logos/photo-red.png", alt: "Industrial gear reducer prototype" }
      ],
      resources: [
,
        { text: "PDF report", href: "assets/rapport-reducteur.pdf" }
      ]
    }
  },
  proj3: {
    fr: {
      title: "Grand Défi",
      subtitle: "Travaux de groupe au sein d'un établissement de santé mentale",
      problem: "Améliorer l'environnement et l'expérience des patients au sein de l'établissement en égaillant les locaux et la cour principale avec des fresques artistiques.",
      method: "Plongée 24h au sein de l'établissement de l'UMB de Châlons-en-Champagne, notre promo a réalisé des fresques artistiques pour rendre le quotidien des patients plus agréable.",
      results: "Reportage TV disponible sur demande. Les patients ont exprimé leur satisfaction et leur enthousiasme face aux fresques artistiques, contribuant à un environnement plus agréable et stimulant.",
      media: [
        { type: "image", src: "assets/logos/defi.jpeg", alt: "Photo du Grand Défi" }
      ],
      resources: [
        { text: "Reportage TV", href: "#" }
      ]
    },
    en: {
      title: "Grand Défi",
      subtitle: "A collaborative project in a mental health facility",
      problem: "How can the daily environment for patients be made warmer and more uplifting through large-scale murals?",
      method: "During a 24-hour immersion at the UMB facility in Châlons-en-Champagne, our year group designed and painted murals to make the site more welcoming for patients.",
      results: "A TV report is available on request. Feedback from patients was very positive, and the murals helped create a more cheerful and stimulating environment.",
      media: [
        { type: "image", src: "assets/logos/defi.jpeg", alt: "Grand Défi photo" }
      ],
      resources: [
        { text: "TV report", href: "#" }
      ]
    }
  },
  proj4: {
    fr: {
      title: "L'Oréal x Brandstorm 2026",
      subtitle: "Participation au challenge Brandstorm 2026 organisé par L'Oréal",
      problem: "Comment façonner la parfumerie de demain en intégrant les nouvelles technologies et les questions d'inclusivité et de durabilité ?",
      method: "À partir d'une idée innovante, nous avons exploré différentes approches pour intégrer les nouvelles technologies dans la parfumerie tout en tenant compte de l'inclusivité et de la durabilité. L'Oréal fournit un cahier des charges complexe que nous avons suivi pour développer notre solution. Réalisation d'une vidéo marketing, d'un elevator pitch et d'une présentation finale. Poursuite du projet avec de la CAO.",
      results: "Malgré une non-sélection finale, le projet a permis de développer des compétences en innovation, en présentation et en travail d'équipe.",
      media: [
        { type: "image", src: "assets/logos/gadzlab.png", alt: "Photo du projet L'Oréal" }
      ],
      resources: [
        { text: "Site officiel de Brandstorm", href: "https://www.loreal.com/brandstorm/" },
        { text: "Page dédiée à Brandstorm sur le site de L'Oréal", href: "https://www.loreal.com/innovation/brandstorm/" }
      ]
    },
    en: {
      title: "L'Oréal Brandstorm 2026",
      subtitle: "Entry in L'Oréal's Brandstorm 2026 innovation challenge",
      problem: "How can the perfumery of tomorrow be reinvented through new technologies while remaining inclusive and sustainable?",
      method: "Starting from an original concept, we explored several ways of integrating new technologies into perfumery while keeping inclusivity and sustainability at the core. Guided by L'Oréal's brief, we produced a marketing video, an elevator pitch and a final presentation, and extended the project through CAD development.",
      results: "Although the project did not reach the final stage, it significantly strengthened our skills in innovation, pitching and teamwork.",
      media: [
        { type: "image", src: "assets/logos/gadzlab.png", alt: "L'Oréal Brandstorm project" }
      ],
      resources: [
        { text: "Official Brandstorm website", href: "https://www.loreal.com/brandstorm/" },
        { text: "Brandstorm page on L'Oréal's website", href: "https://www.loreal.com/innovation/brandstorm/" }
      ]
    }
  },
  proj5: {
    fr: {
      title: "Projet FAB/IMP",
      subtitle: "Étude interactions matériaux-procédés",
      problem: "Comprendre l'impact des paramètres de fabrication et d'usinage sur les propriétés du matériau et la qualité finale du composant.",
      method: "Analyse bibliographique, essais de fabrication additive et soustractive, mesures métrologiques, comparaison des trajectoires CAO/FAO.",
      results: "Préconisations de paramètres opératoires pour réduire les défauts, amélioration de 18 % de la précision dimensionnelle avec un nouveau protocole de contrôle.",
      media: [
        { type: "image", src: "assets/logos/fabimp.png", alt: "Visuel du projet FAB/IMP" }
      ],
      resources: [
        { text: "Rapport FAB/IMP (PDF)", href: "assets/rapport-projetfabimp.pdf" }
      ]
    },
    en: {
      title: "FAB/IMP Project",
      subtitle: "Exploring material-process interactions",
      problem: "How do manufacturing and machining parameters affect material properties and the final quality of a component?",
      method: "Literature review, additive and subtractive manufacturing trials, metrology measurements, and comparison of CAD/CAM toolpaths.",
      results: "The study led to process recommendations that reduced defects and improved dimensional accuracy by 18% thanks to a new inspection protocol.",
      media: [
        { type: "image", src: "assets/logos/fabimp.png", alt: "FAB/IMP project visual" }
      ],
      resources: [
        { text: "FAB/IMP report (PDF)", href: "assets/rapport-projetfabimp.pdf" }
      ]
    }
  },
  proj6: {
    fr: {
      title: "Monaco Energy Boat Challenge (MEBC) 2027",
      subtitle: "Prototype catamaran électrique à énergie renouvelable",
      problem: "Concevoir un bateau léger et performant pour une compétition internationale stricte sur l'efficacité énergétique.",
      method: "Conception hydrodynamique en CAO, calculs de structure, simulation CFD et tests sur bassin, choix de motorisation électrique et batterie légère.",
      results: "Prototype retenu pour la finale, performance mesurée à 17 kW·h/100 km avec une marge de sécurité de 15 % sur le cahier des charges de consommation.",
      media: [
        { type: "image", src: "assets/logos/equipe.png", alt: "Équipe MEBC" },
        { type: "image", src: "assets/logos/CAOMebc.png", alt: "CAO du projet MEBC" }
      ],
      resources: [
        { text: "Site de l'équipe", href: "https://regattarts.fr/" }
      ]
    },
    en: {
      title: "Monaco Energy Boat Challenge (MEBC) 2027",
      subtitle: "A renewable-energy electric catamaran prototype",
      problem: "How can a lightweight, high-performance boat be designed for a demanding international competition centered on energy efficiency?",
      method: "Hydrodynamic CAD design, structural calculations, CFD simulations, tank testing, and the selection of an electric drivetrain with a lightweight battery pack.",
      results: "The prototype qualified for the final, achieving measured consumption of 17 kWh/100 km while maintaining a 15% safety margin against the target specifications.",
      media: [
        { type: "image", src: "assets/logos/equipe.png", alt: "MEBC team" },
        { type: "image", src: "assets/logos/CAOMebc.png", alt: "MEBC CAD model" }
      ],
      resources: [
        { text: "Team website", href: "https://regattarts.fr/" }
      ]
    }
  }
};

function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function getCurrentProjectId() {
  const projectFromQuery = getUrlParameter("project");
  if (projectFromQuery) {
    return projectFromQuery;
  }

  const fileName = window.location.pathname.split("/").pop() || "";
  const match = fileName.match(/^(proj\d+)\.html$/i);
  return match ? match[1].toLowerCase() : null;
}

function updateProjectPageStaticLabels(tl) {
  const navKeys = ["navAbout", "navSkills", "navTimeline", "navProjects", "navContact"];
  document.querySelectorAll(".nav-links a").forEach((link, index) => {
    const key = navKeys[index];
    if (key && tl[key]) {
      link.textContent = tl[key];
    }
  });

  const headingKeys = [
    "projectProblemTitle",
    "projectMethodTitle",
    "projectResultsTitle",
    "projectMediaTitle",
    "projectResourcesTitle"
  ];

  document.querySelectorAll("#project-detail .section-heading").forEach((heading, index) => {
    const key = headingKeys[index];
    if (key && tl[key]) {
      heading.textContent = tl[key];
    }
  });

  const contactTag = document.querySelector("#contact .section-tag");
  const contactTitle = document.querySelector("#contact .section-title");
  const contactText = document.querySelector("#contact .contact-left p");

  if (contactTag) contactTag.textContent = tl.contactTag;
  if (contactTitle) contactTitle.textContent = tl.contactTitle;
  if (contactText) contactText.textContent = tl.contactDesc;

  const footerParagraphs = document.querySelectorAll("footer p");
  if (footerParagraphs[0]) footerParagraphs[0].textContent = tl.footerCopy;
  if (footerParagraphs[1]) footerParagraphs[1].textContent = tl.footerMade;
}

function renderProjectDetailPage() {
  const projectId = getCurrentProjectId();
  if (!projectId) {
    return;
  }

  const project = projectData[projectId];
  const locale = currentLang || "fr";
  const tl = translations[locale];

  const root = document.getElementById("projectDetailPage") || document.getElementById("project-detail");
  const titleEl = document.getElementById("projectTitle") || document.querySelector("#project-detail .project-title");
  const subtitleEl = document.getElementById("projectSubtitle") || document.querySelector("#project-detail .project-subtitle");
  const textParagraphs = document.querySelectorAll("#project-detail .project-section p");
  const problemEl = document.getElementById("projectProblem") || textParagraphs[0];
  const methodEl = document.getElementById("projectMethod") || textParagraphs[1];
  const resultsEl = document.getElementById("projectResults") || textParagraphs[2];
  const mediaEl = document.getElementById("projectMedia") || document.querySelector("#project-detail .project-media-grid");
  const resourcesEl = document.getElementById("projectResources") || document.querySelector("#project-detail .project-resources-list") || document.querySelector("#project-detail .project-resources");
  const backBtn = document.getElementById("projectBack") || document.querySelector("#project-detail .project-back-btn");

  updateProjectPageStaticLabels(tl);

  if (!project) {
    if (root) {
      root.innerHTML = `<p>${tl.projectNotFound}</p><a class="btn-primary" href="index.html#projects">${tl.projectBackCTA}</a>`;
    }
    return;
  }

  const content = project[locale] || project.fr;

  document.title = `${content.title} — ${tl.pageTitle ?? "Portfolio"}`;

  if (titleEl) titleEl.textContent = content.title;
  if (subtitleEl) subtitleEl.textContent = content.subtitle;
  if (problemEl) problemEl.textContent = content.problem;
  if (methodEl) methodEl.textContent = content.method;
  if (resultsEl) resultsEl.textContent = content.results;

  if (mediaEl) {
    mediaEl.innerHTML = "";
    (content.media || []).forEach(item => {
      const node = document.createElement(item.type === "video" ? "video" : "img");
      if (item.type === "video") {
        node.src = item.src;
        node.controls = true;
        node.autoplay = true;
        node.muted = true;
        node.loop = true;
        node.playsInline = true;
        node.preload = "metadata";
        node.setAttribute("aria-label", item.alt);
        node.className = "project-media-item";
      } else {
        node.src = item.src;
        node.alt = item.alt;
        node.className = "project-media-item";
      }
      mediaEl.appendChild(node);
    });
  }

  if (resourcesEl) {
    resourcesEl.innerHTML = "";
    (content.resources || []).forEach(res => {
      const link = document.createElement("a");
      const isDocument = /\.pdf($|\?)/i.test(res.href);
      const linkClass = resourcesEl.classList.contains("project-resources-list") ? "resource-link" : "btn-ghost";

      link.href = res.href;
      link.target = "_blank";
      link.rel = "noopener";
      link.className = linkClass;

      if (linkClass === "btn-ghost") {
        link.style.marginRight = "0.8rem";
      }

      link.innerHTML = isDocument
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>${res.text}`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>${res.text}`;

      resourcesEl.appendChild(link);
    });
  }

  if (backBtn) {
    backBtn.textContent = tl.projectBackCTA;
    backBtn.href = "index.html#projects";
  }
}



