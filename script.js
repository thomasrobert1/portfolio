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
    edu1Desc:   "Programme Grande École (PGE) en 3 ans, spécialisation en mécanique et systèmes complexes.",
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
    heroTagline:     "Passionate about technology and innovation. My curiosity drives me to explore the latest technological advances and apply them in concrete projects.",
    heroCTA:         "View my projects and commitments",
    heroContact:     "Contact me",

    aboutTag:        "Who am I?",
    aboutTitle:      "About me",
    aboutP1:         "As a <strong>first-year</strong> student at <strong>Arts et Métiers</strong>, I am passionate about mechanics and complex systems. The fields of aerospace and aeronautics are especially appealing to me. Curious and rigorous, I enjoy turning ideas into concrete solutions, both to improve what already exists and to help protect the planet.",
    interestsTag:    "What drives me",
    interestsTitle:  "Interests & passions",
    interestsSubtitle:"Areas that fuel my curiosity and inspire my projects every day.",
    interest1Title:  "Aeronautics, space and naval engineering",
    interest1Desc:   "I am fascinated by embedded systems, precision mechanics and innovations that push technical boundaries further.",
    interest2Title:  "Nature and its richness",
    interest2Desc:   "The richness and diversity of nature fascinate me and push me to think differently in order to preserve our planet. I am passionate about responsible gastronomy as well as oenology, both of which combine pleasure with respect for the environment.",
    interest3Title:  "Commitment & collective challenges",
    interest3Desc:   "I enjoy team projects, student life and experiences that combine responsibility, organization and self-improvement.",
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
    skillLeadership: "Management",
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
    edu1Desc:   "Three-year Grande École (PGE) program, specializing in mechanics and complex systems.",
    edu2Title:  "MPSI/PSI Preparatory Classes",
    edu4Title:  "French High School of Berlin",
    edu4Org:    "Berlin, Germany",
    edu4Desc:   "Full immersion in Germany, rapid acquisition of the German language and culture. A strong foundation in science and mathematics, with an emphasis on modern languages.",
    edu2Desc:   "Intensive training in mathematics, physics and engineering sciences. Admitted to engineering school through a national competitive exam.",
    edu3Title:  "Scientific Baccalaureate",
    edu3Desc:   "Highest honors, with a specialization in Mathematics and Physics-Chemistry, plus the Advanced Mathematics option.",

    exp1Date:   "Summer 2023 · 2 months",
    exp4Date:   "2026 - Present",
    exp4Title:  "Head of the AMJE Quality Division",
    exp4Org:    "Student association",
    exp4Desc:   "Head of the Quality Division within Arts-et-Métiers Junior Entreprise (AMJE). Responsible for coordinating the division's 8 members, reviewing deliverables and continuously improving internal processes and performance.",
    exp1Title:  "Summer job — Farm worker",
    exp1Desc:   "Summer job as a farm worker on a market gardening farm. A rewarding experience in manual work, team management and compliance with safety standards.",
    exp2Date:   "2023 — 2024 · Volunteering",
    exp2Title:  "President of the Strass Fermière association",
    exp2Org:    "Strass Fermière association",
    exp2Desc:   "Coordination of volunteer activities, event organization, communication and management of agricultural and social projects.",
    exp3Date:   "Summer 2023 · 2 months",
    exp3Title:  "Observation Internship",
    exp3Desc:   "Discovery of the startup world, with participation in the development of an internal data visualization tool.",
    exp5Date:   "2026 - Present",
    exp5Title:  "President of the ENSAM farm association",
    exp5Org:    "Student association",
    exp5Desc:   "Management of the ENSAM farm association. Distribution of products from local and committed agriculture, with supervision of a 5-person team.",

    projectsTag:      "Achievements",
    projectsTitle:    "My Projects",
    projectsSubtitle: "A few projects that reflect who I am — academic, personal or associative.",
    filterAll:  "All",
    filterPerso:"Personal",
    filterAcad: "Academic",
    filterAsso: "Associative",
    typePers:   "Personal",
    typeAcad:   "Academic",
    typeAsso:   "Associative",
    proj1Title: "TIPE: Yaw system for wind turbines",
    proj1Desc:  "Design, development and testing of a yaw orientation control system for domestic wind turbines. Promising real-condition results, with improved system control.",
    proj2Title: "Industrial gearbox",
    proj2Desc:  "Design, modeling and optimization of an industrial gearbox. Study of a complex set of specifications, selection of the architecture, preliminary sizing and parametric optimization.",
    proj3Title: "Grand Défi",
    proj3Desc:  "Participation in the \"Grand Défi\": group work with my class within a mental health facility in order to brighten the premises and the main courtyard with artistic murals.",
    proj4Title: "Brandstorm x L'Oréal 2026",
    proj4Desc:  "Participation in L'Oréal's international marketing and innovation competition. Development of an innovative brand strategy for a new range of sustainable perfumery products, with a focus on inclusivity and ecology.",
    proj5Title: "FAB/IMP Project",
    proj5Desc:  "Study of material-process interactions as part of a project involving manufacturing, machining and metrology.",
    proj6Title: "Monaco Energy Boat Challenge (MEBC) 2027",
    proj6Desc:  "Participation in the Monaco Energy Boat Challenge (MEBC) 2027, an international competition for renewable-energy boats. Design and construction of an electric catamaran prototype, with innovations in energy efficiency and hydrodynamic design.",
    linkGithub: "MatLab",
    linkDemo:   "Demo and tests",
    linkReport: "Presentation (PDF)",

    contactTag:   "Let's stay in touch",
    contactTitle: "Contact me",
    contactDesc:  "Open to internship opportunities. Feel free to contact me to discuss projects or opportunities.",
    formName:     "Name",
    formEmail:    "Email",
    formSubject:  "Subject",
    formMessage:  "Message",
    formSend:     "Send message",
    formSuccess:  "Message sent! I will reply soon.",
    formError:    "Please fill in all fields.",

    projectPageTitle: "Project — Details",
    projectDetailTag: "Project in detail",
    projectProblemTitle: "Problem statement",
    projectMethodTitle: "Methodology",
    projectResultsTitle: "Results",
    projectMediaTitle: "Photos / Videos",
    projectResourcesTitle: "Resources",
    projectBackCTA: "Back to projects",
    projectNotFound: "Project not found. Return to the projects page.",

    footerCopy: "© 2025 Thomas ROBERT — All rights reserved",
    footerMade: "Engineering Student - Arts et Métiers (ENSAM)",
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
      ["Immersion", "Club d'échecs", "Cours intensifs d'allemand", "Voyage et découverte du pays"],
      ["Mention TB", "Internat"],
      ["Travail manuel", "Gestion d'équipe", "Sécurité"],
      ["Leadership", "Organisation", "Communication"],
      ["Mathématiques", "Physique-Chimie", "Sciences de l'ingénieur", "Anglais/Allemand"],
      ["Mécanique des solides", "Mécanique des fluides", "Maths appli.", "Procédés industriels", "Matériaux"]
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
    aboutTags: ["🎓 Engineering School", "💻 Ambitious", "🔬 Solution-oriented"],
    skillTagGroups: {
      1: ["Mechanics", "Electronics", "Data analysis", "Simulation", "Industrial know-how"],
      2: ["Autonomy", "Responsibility", "Open-mindedness", "Project mindset"]
    },
    timelineTags: [
      ["Immersion", "Chess club", "Intensive German lessons", "Travel and discovery of the country"],
      ["Highest honours", "Boarding school"],
      ["Manual work", "Team management", "Safety"],
      ["Leadership", "Organization", "Communication"],
      ["Mathematics", "Physics-Chemistry", "Engineering sciences", "English/German"],
      ["Solid mechanics", "Fluid mechanics", "Applied maths", "Industrial processes", "Materials"]
    ],
    projectTech: [
      ["Prototype", "Arduino", "Control systems", "MatLab"],
      ["CAD", "Fusion360", "Gears", "Optimization"],
      ["Association", "UMB", "Murals", "Teamwork"],
      ["L'Oréal", "Marketing", "Innovation", "CAD"],
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
      title: "TIPE: Yaw system for wind turbines",
      subtitle: "Automatic orientation system for domestic wind turbines",
      problem: "Improve the energy performance of a domestic wind turbine by ensuring automatic wind tracking (yaw).",
      method: "Implementation of PID control, Arduino prototype with wind simulation, and a sensor (wind vane).",
      results: "Trade-offs had to be made between precision, speed and stability. The experiments show that the system can improve the wind turbine's energy efficiency while maintaining a rapid response to changes in wind direction.",
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
      title: "Industrial gearbox",
      subtitle: "Design and optimization of the parameters of an industrial gearbox",
      problem: "Design a high-performance and reliable industrial gearbox that meets the requirements of a complex set of specifications.",
      method: "Design, modeling and optimization of an industrial gearbox. Study of a complex set of specifications, selection of the architecture, preliminary sizing and parametric optimization.",
      results: "CAD model of the industrial gearbox.",
      media: [
        { type: "image", src: "assets/logos/photo-red.png", alt: "Prototype of the industrial gearbox" }
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
      subtitle: "Group work within a mental health facility",
      problem: "Improve the environment and experience of patients within the facility by brightening the premises and the main courtyard with artistic murals.",
      method: "A 24-hour immersion within the UMB facility in Châlons-en-Champagne, during which our class created artistic murals to make patients' daily lives more pleasant.",
      results: "A TV report is available on request. Patients expressed their satisfaction and enthusiasm for the murals, contributing to a more pleasant and stimulating environment.",
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
      title: "L'Oréal x Brandstorm 2026",
      subtitle: "Participation in the Brandstorm 2026 challenge organized by L'Oréal",
      problem: "How can the perfumery of tomorrow be shaped by integrating new technologies while addressing inclusivity and sustainability?",
      method: "Starting from an innovative idea, we explored different approaches to integrate new technologies into perfumery while taking inclusivity and sustainability into account. L'Oréal provided a complex brief that we followed to develop our solution. We produced a marketing video, an elevator pitch and a final presentation, and the project continued with CAD work.",
      results: "Although we were not selected for the final stage, the project allowed us to develop our skills in innovation, presentation and teamwork.",
      media: [
        { type: "image", src: "assets/logos/gadzlab.png", alt: "L'Oréal project photo" }
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
      subtitle: "Study of material-process interactions",
      problem: "Understand the impact of manufacturing and machining parameters on material properties and the final quality of the component.",
      method: "Literature review, additive and subtractive manufacturing tests, metrology measurements, and comparison of CAD/CAM toolpaths.",
      results: "Recommendations for operating parameters were made to reduce defects, with an 18% improvement in dimensional accuracy thanks to a new inspection protocol.",
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
      subtitle: "Renewable-energy electric catamaran prototype",
      problem: "Design a lightweight and high-performance boat for a demanding international competition focused on energy efficiency.",
      method: "Hydrodynamic CAD design, structural calculations, CFD simulations and tank tests, as well as the selection of an electric powertrain and a lightweight battery.",
      results: "The prototype was selected for the final, with measured performance of 17 kWh/100 km and a 15% safety margin relative to the consumption specifications.",
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



