const siteData = {
  profile: {
    name: "Gideon Olasunbo Popoola",
    role: "PhD Candidate in Computer Science",
    institution: "Gianforte School of Computing, Montana State University",
    location: "Bozeman, Montana, USA",
    email: "gideono.popoola@student.montana.edu",
    advisor: "Prof. John Sheppard",
    note:
      "Researching machine learning fairness and interpretability with an emphasis on procedural fairness in high-stakes decision systems.",
    summary:
      "I am a PhD candidate in Computer Science at Montana State University researching fairness and interpretability in machine learning. My work focuses on building rigorous evaluations that expose where models behave unreliably across groups, with particular attention to representational leakage, explanation stability, and procedural fairness.",
    about:
      "My research sits at the intersection of machine learning fairness, interpretability, and evaluation. I study how protected-attribute information leaks through neural representations, how explanation behavior changes across groups, and how to design measurements that are difficult to game and useful for diagnosing confident but systematically unreliable model behavior.",
    heroTags: [
      "Fairness in Machine Learning",
      "Interpretability",
      "Procedural Fairness",
      "Credit Decision Auditing"
    ],
    heroNotes: [
      "Current research asks whether outcome-fair models still reason unfairly across protected and intersectional groups.",
      "My pipeline combines representation analysis, explanation stability, and proxy-discrimination auditing into deployable evaluation methods.",
      "I also build applied ML systems in industry settings, including risk modeling, fraud detection, and large-scale experimentation."
    ],
    interests: [
      "ML Fairness",
      "Interpretability",
      "Procedural Fairness",
      "Explanation Stability",
      "Robust Evaluation"
    ],
    heroStats: [
      { label: "Published Papers", value: "04" },
      { label: "Active Manuscripts", value: "04" },
      { label: "Scholar Citations", value: "21" }
    ],
    links: [
      { label: "Email", href: "mailto:gideono.popoola@student.montana.edu", style: "primary" },
      { label: "CV", href: "./Gideon-Popoola-CV.pdf", style: "secondary" },
      { label: "GitHub", href: "https://github.com/horlahsunbo", style: "secondary" },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=j_7CyfkAAAAJ&hl=en",
        style: "secondary"
      }
    ]
  },
  aboutColumns: [
    {
      title: "Research Agenda",
      body:
        "I build methods for auditing whether machine-learning systems are fair in both outcomes and reasoning. The core theme across my work is that standard fairness metrics often miss hidden procedural failures, especially when explanations, representations, or proxy variables behave differently across groups."
    },
    {
      title: "Technical Toolkit",
      body:
        "My work draws on PyTorch, scikit-learn, XGBoost, SHAP, LIME, integrated gradients, NSGA-II multi-objective optimization, KL-divergence drift monitoring, PySpark, AWS, and evaluation design for high-stakes ML systems."
    }
  ],
  research: [
    {
      title: "Representational Leakage and DCA-Fair",
      description:
        "DCA-Fair formalizes how protected-attribute information leaks through neural-network representations via concept directions in activation space. The framework includes protected concept sensitivity, intersectional ANOVA decomposition, and nullspace-projection debiasing.",
      tags: ["Representation Analysis", "AAAI Pipeline", "Debiasing"]
    },
    {
      title: "Procedural Fairness Through Explanations",
      description:
        "A major line of my work studies how models can satisfy traditional outcome metrics while still relying on systematically different reasoning across demographic groups. I develop metrics and training procedures that detect and reduce these explanation-level disparities.",
      tags: ["Explainability", "Intersectional Fairness", "Optimization"]
    },
    {
      title: "Regulatory-Aligned ML Auditing",
      description:
        "I also work on fairness and proxy-discrimination audits for credit systems, connecting technical evidence to legal and compliance frameworks such as ECOA and CFPB expectations.",
      tags: ["Credit Decisions", "Proxy Audits", "Compliance"]
    }
  ],
  pipeline: {
    title: "Active Manuscript Pipeline",
    copy:
      "These projects reflect the current center of my research pipeline: evaluating reasoning consistency, strengthening procedural fairness metrics, formalizing representational leakage, and auditing proxy discrimination in automated credit systems.",
    items: [
      {
        title:
          "MESD: A Risk-Sensitive Metric for Explanation Fairness Across Intersectional Subgroups",
        description:
          "Introduces a procedural fairness metric that quantifies explanation disparities across intersectional subgroups using shrinkage, outcome-aware aggregation, and CVaR-style risk sensitivity.",
        status: "Working Paper",
        tags: ["AIES Direction", "Intersectionality"]
      },
      {
        title:
          "Do Fair Models Reason Fairly? Counterfactual Explanation Consistency for Procedural Fairness in Credit Decisions",
        description:
          "Develops Counterfactual Explanation Consistency (CEC) to detect hidden procedural bias in credit decisions even when models satisfy standard outcome fairness metrics.",
        status: "Working Paper",
        tags: ["Credit Decisions", "Integrated Gradients"]
      },
      {
        title:
          "Meritocracy or Masquerade? Auditing Algorithmic Fairness and Proxy Discrimination in Automated Credit Decisions",
        description:
          "Builds a seven-method proxy audit framework that separates legitimate creditworthiness signals from prohibited proxy discrimination in lending pipelines.",
        status: "Working Paper",
        tags: ["Proxy Risk", "ECOA / CFPB"]
      }
    ]
  },
  currentWork: [
    {
      title: "Directional Concept Attribution for Fairness",
      meta: "Representational leakage and concept-nullspace debiasing"
    },
    {
      title: "MESD",
      meta: "Intersectional explanation fairness metric"
    },
    {
      title: "CEC for Credit Decisions",
      meta: "Counterfactual explanation consistency"
    },
    {
      title: "Proxy Audit Framework",
      meta: "Proxy discrimination and compliance-aligned analysis"
    }
  ],
  publications: [
    {
      title:
        "Investigating and Mitigating the Performance-Fairness Tradeoff via Protected-Category Sampling",
      authors: "Gideon Popoola and John Sheppard",
      venue: "Electronics 13(15): 3024",
      year: "2024",
      kind: "Journal Article",
      status: "Published",
      group: "published",
      description:
        "Studies bias mitigation as an imbalanced-classification problem over combined protected categories and introduces protected-category sampling strategies that improve fairness without necessarily sacrificing predictive performance.",
      links: [
        {
          label: "Article",
          href: "https://www.mdpi.com/2079-9292/13/15/3024"
        },
        {
          label: "DOI",
          href: "https://doi.org/10.3390/electronics13153024"
        }
      ]
    },
    {
      title:
        "Sentiment Analysis of Financial News Data using TF-IDF and Machine Learning Algorithms",
      authors:
        "Gideon Popoola, Khadijat-Kuburat Abdullah, Gerard Shu Fuhnwi, and Janet Agbaje",
      venue: "IEEE 3rd International Conference on AI in Cybersecurity (ICAIC)",
      year: "2024",
      kind: "Conference Paper",
      status: "Published",
      group: "published",
      description:
        "A conference paper on financial-news sentiment classification using TF-IDF features and machine-learning models, comparing model behavior across standard evaluation metrics.",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1109/ICAIC60265.2024.10433843"
        }
      ]
    },
    {
      title:
        "FACO: A Novel Hybrid Feature Selection Algorithm for High-Dimensional Data Classification",
      authors: "Gideon Popoola and Kayode Oyeniran",
      venue: "IEEE SoutheastCon 2024, pp. 61-68",
      year: "2024",
      kind: "Conference Paper",
      status: "Published",
      group: "published",
      description:
        "Introduces FACO, a hybrid feature-selection approach for high-dimensional classification tasks, extending my earlier work on optimization-driven dimensionality reduction and model performance.",
      links: [
        {
          label: "Article",
          href: "https://ieeexplore.ieee.org/abstract/document/10500125"
        }
      ]
    },
    {
      title:
        "A Modified Ant Colony Optimization with KNN for High-Dimensional Data Classification",
      authors:
        "Gideon Popoola, Gerard Shu Fuhnwi, Janet O. Agbaje, and Kayode Fesomade",
      venue:
        "Intelligent Computing: Proceedings of the 2024 Computing Conference, Volume 3, pp. 262-277",
      year: "2024",
      kind: "Conference Chapter",
      status: "Published",
      group: "published",
      description:
        "Presents a modified ant-colony optimization framework coupled with KNN for high-dimensional classification, continuing my work on metaheuristic feature selection.",
      links: [
        {
          label: "Springer",
          href: "https://link.springer.com/book/10.1007/978-3-031-62269-4"
        },
        {
          label: "DBLP",
          href: "https://dblp.org/rec/conf/sai/PopoolaFAF24"
        }
      ]
    },
    {
      title:
        "Directional Concept Attribution for Fairness: Formalizing Representational Leakage of Protected Attributes",
      authors: "Gideon Popoola and John Sheppard",
      venue: "AAAI-targeted working paper",
      year: "2026",
      kind: "Working Paper",
      status: "In Preparation",
      group: "manuscript",
      description:
        "Formalizes representational leakage through concept directions in activation space and studies how those signals can be measured and attenuated through concept-nullspace projection.",
      links: []
    },
    {
      title:
        "MESD: A Risk-Sensitive Metric for Explanation Fairness Across Intersectional Subgroups",
      authors: "Gideon Popoola and collaborators",
      venue: "Current manuscript draft",
      year: "2026",
      kind: "Working Paper",
      status: "In Preparation",
      group: "manuscript",
      description:
        "Introduces MESD, a risk-sensitive procedural fairness metric that surfaces explanation disparities across intersectional subgroups using empirical-Bayes shrinkage and worst-case subgroup weighting.",
      links: []
    },
    {
      title:
        "Do Fair Models Reason Fairly? Counterfactual Explanation Consistency for Procedural Fairness in Credit Decisions",
      authors: "Gideon Popoola and collaborators",
      venue: "ACM EAAMO",
      year: "2026",
      kind: "Working Paper",
      status: "In Preparation",
      group: "manuscript",
      description:
        "Develops Counterfactual Explanation Consistency (CEC), a framework for detecting hidden procedural bias in credit systems when outcome-level fairness criteria alone are insufficient.",
      links: []
    },
    {
      title:
        "Meritocracy or Masquerade? Auditing Algorithmic Fairness and Proxy Discrimination in Automated Credit Decisions",
      authors: "Gideon Popoola and John Sheppard",
      venue: "Review AI and Society",
      year: "2026",
      kind: "Working Paper",
      status: "In Preparation",
      group: "manuscript",
      description:
        "Builds a seven-method proxy audit framework for automated credit decisions, distinguishing legitimate financial signals from prohibited proxy discrimination under regulatory constraints.",
      links: []
    }
  ],
  teaching: {
    philosophy:
      "My teaching centers on making mathematically grounded machine-learning ideas legible and usable for students. I focus on conceptual clarity, practical debugging, and helping learners connect theory, code, and empirical evaluation.",
    notes: [
      "Current public sources indicate tutoring support for CSCI 246 (Discrete Structures) at Montana State University's Student Success Center during Spring 2026.",
      "Publicly listed academic support work includes grading and lab support in algorithms, data mining, data structures, computer science theory, Java, and Python.",
      "This section can be expanded later with syllabi, office hours, course materials, and formal teaching evaluations."
    ],
    courses: [
      {
        title: "CSCI 246: Discrete Structures",
        term: "Spring 2026",
        role: "Tutor, Student Success Center",
        description:
          "Provides student support in discrete structures, helping learners build confidence with the mathematical foundations that support later computer-science coursework."
      },
      {
        title: "Algorithms, Data Mining, and Data Structures Support",
        term: "2022-Present",
        role: "Graduate Academic Support",
        description:
          "Supports student learning through homework grading, lab sessions, and practical guidance in core computer-science subjects spanning algorithms, data mining, and data structures."
      },
      {
        title: "Programming Support in Java and Python",
        term: "2022-Present",
        role: "Lab and Student Support",
        description:
          "Helps students translate concepts into working code, with emphasis on debugging, implementation discipline, and reproducible problem-solving."
      }
    ]
  },
  experience: [
    {
      title: "Riot Games",
      description:
        "Data Science Intern (May 2025-August 2025). Built a fraud and behavioral-risk model with PySpark, XGBoost, and AWS, reaching 0.82 AUC and projecting prevention of 13 million toxic matches in offline simulation."
    },
    {
      title: "JPMorgan Chase",
      description:
        "AI & Data Science Summer Associate (June 2024-August 2024). Developed credit-card default models, feature engineering workflows, and KL-divergence-based drift monitoring for production model-deterioration analysis."
    },
    {
      title: "Africa4AI",
      description:
        "Data Scientist (September 2019-December 2021). Built KPI dashboards for healthcare workflows, shipped an NLP email-routing system, and developed a churn model that supported sustained sales growth."
    },
    {
      title: "Open-Source Research Systems",
      description:
        "Developed research software including dcafair, MESD/UEF evaluation pipelines, and GCf-IG, with modular experiment harnesses spanning fairness benchmarks such as COMPAS, Adult, Bank Marketing, and German Credit."
    }
  ],
  contact: {
    copy:
      "I am happy to connect about research collaborations in trustworthy machine learning, speaking invitations, teaching opportunities, and applied work on fairness, interpretability, and robust model evaluation.",
    links: [
      { label: "Email", href: "mailto:gideono.popoola@gmail.com" },
      { label: "GitHub", href: "https://github.com/horlahsunbo" },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=j_7CyfkAAAAJ&hl=en"
      },
      { label: "CV PDF", href: "./Gideon-Popoola-CV.pdf" }
    ]
  }
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const createSafeLinkAttributes = (href) =>
  href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";

const renderLinks = (containerId, links, className) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    anchor.className =
      className || (link.style === "primary" ? "button" : "button-secondary");
    if (link.href.startsWith("http")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    container.appendChild(anchor);
  });
};

const renderStats = () => {
  const stats = document.getElementById("hero-stats");
  if (!stats) return;

  stats.innerHTML = siteData.profile.heroStats
    .map(
      (item) => `
        <div>
          <dt>${item.label}</dt>
          <dd>${item.value}</dd>
        </div>
      `
    )
    .join("");
};

const renderHeroTags = () => {
  const container = document.getElementById("hero-tags");
  if (!container) return;

  container.innerHTML = siteData.profile.heroTags
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");
};

const renderHeroNotes = () => {
  const container = document.getElementById("hero-notes");
  if (!container) return;

  container.innerHTML = siteData.profile.heroNotes
    .map(
      (note, index) => `
        <div class="hero-note">
          <span class="hero-note-index">${index + 1}</span>
          <p>${note}</p>
        </div>
      `
    )
    .join("");
};

const renderProfileMeta = () => {
  const profileList = document.getElementById("profile-list");
  if (!profileList) return;

  const rows = [
    { label: "Institution", value: siteData.profile.institution },
    { label: "Advisor", value: siteData.profile.advisor },
    { label: "Location", value: siteData.profile.location },
    { label: "Email", value: siteData.profile.email }
  ];

  profileList.innerHTML = rows
    .map(
      (row) => `
        <div class="meta-line">
          <strong>${row.label}</strong>
          <span>${row.value}</span>
        </div>
      `
    )
    .join("");
};

const renderMiniList = () => {
  const container = document.getElementById("current-work-list");
  if (!container) return;

  container.innerHTML = siteData.currentWork
    .map(
      (item) => `
        <article class="mini-item">
          <strong>${item.title}</strong>
          <div class="mini-item-meta">${item.meta}</div>
        </article>
      `
    )
    .join("");
};

const renderInterestChips = () => {
  const container = document.getElementById("interest-chips");
  if (!container) return;

  container.innerHTML = siteData.profile.interests
    .map((item) => `<span class="chip">${item}</span>`)
    .join("");
};

const renderAboutColumns = () => {
  const container = document.getElementById("about-columns");
  if (!container) return;

  container.innerHTML = siteData.aboutColumns
    .map(
      (item) => `
        <article class="about-block">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
};

const renderCards = (containerId, items, label = "") => {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
        <article class="card">
          ${
            label || item.status
              ? `<div class="card-topline">
                  <span>${item.status || label}</span>
                </div>`
              : ""
          }
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${
            item.tags
              ? `<div class="chip-row">${item.tags
                  .map((tag) => `<span class="chip">${tag}</span>`)
                  .join("")}</div>`
              : ""
          }
        </article>
      `
    )
    .join("");
};

const renderPublicationGroup = (containerId, group) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = siteData.publications.filter((item) => item.group === group);

  container.innerHTML = items
    .map(
      (item) => `
        <article class="publication-item">
          <div class="publication-topline">
            <span class="status-pill${group === "manuscript" ? " warm" : ""}">${item.status}</span>
            <span class="year-pill">${item.kind}</span>
          </div>
          <div class="publication-header">
            <div>
              <h3>${item.title}</h3>
              <p class="publication-meta">${item.authors}</p>
              <p class="publication-meta">${item.venue}</p>
            </div>
            <span class="chip">${item.year}</span>
          </div>
          <p>${item.description}</p>
          ${
            item.links.length
              ? `<div class="publication-links">
                  ${item.links
                    .map(
                      (link) =>
                        `<a class="hero-link" href="${link.href}"${createSafeLinkAttributes(
                          link.href
                        )}>${link.label}</a>`
                    )
                    .join("")}
                </div>`
              : ""
          }
        </article>
      `
    )
    .join("");

  return items.length;
};

const renderCourses = () => {
  const container = document.getElementById("course-list");
  if (!container) return;

  container.innerHTML = siteData.teaching.courses
    .map(
      (course) => `
        <article class="teaching-item">
          <div class="teaching-header">
            <div>
              <h3>${course.title}</h3>
              <p class="publication-meta">${course.role}</p>
            </div>
            <span class="chip">${course.term}</span>
          </div>
          <p>${course.description}</p>
        </article>
      `
    )
    .join("");
};

const renderTeachingNotes = () => {
  const container = document.getElementById("teaching-notes");
  if (!container) return;

  container.innerHTML = siteData.teaching.notes
    .map(
      (note) => `
        <div class="note-item">
          <span>Note</span>
          <p>${note}</p>
        </div>
      `
    )
    .join("");
};

const setBrand = () => {
  const nameParts = siteData.profile.name.split(" ").filter(Boolean);
  const initials =
    nameParts.length >= 2
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : nameParts.map((part) => part[0].toUpperCase()).join("");

  setText("brand-mark", initials || "GP");
  setText("profile-initials", initials || "GP");
  document.title = `${siteData.profile.name} | ${siteData.profile.role}`;
};

const injectStructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteData.profile.name,
    jobTitle: siteData.profile.role,
    affiliation: siteData.profile.institution,
    email: siteData.profile.email,
    description: siteData.profile.summary,
    sameAs: [
      "https://github.com/horlahsunbo",
      "https://scholar.google.com/citations?user=j_7CyfkAAAAJ&hl=en"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};

const initializeSite = () => {
  setBrand();
  setText("nav-name", siteData.profile.name);
  setText("nav-role", siteData.profile.role);
  setText("hero-name", siteData.profile.name);
  setText("hero-title", `${siteData.profile.role} | ${siteData.profile.institution}`);
  setText("hero-summary", siteData.profile.summary);
  setText("profile-role", siteData.profile.role);
  setText("profile-affiliation", siteData.profile.institution);
  setText("profile-note", siteData.profile.note);
  setText("about-lead", siteData.profile.about);
  setText("pipeline-title", siteData.pipeline.title);
  setText("pipeline-copy", siteData.pipeline.copy);
  setText("teaching-philosophy", siteData.teaching.philosophy);
  setText("contact-copy", siteData.contact.copy);
  setText("footer-text", `${siteData.profile.name} | ${siteData.profile.role}`);

  renderLinks("hero-actions", siteData.profile.links);
  renderLinks("contact-links", siteData.contact.links, "contact-link");
  renderStats();
  renderHeroTags();
  renderHeroNotes();
  renderProfileMeta();
  renderMiniList();
  renderInterestChips();
  renderAboutColumns();
  renderCards("research-grid", siteData.research);
  renderCards("pipeline-grid", siteData.pipeline.items);

  const publishedCount = renderPublicationGroup("published-list", "published");
  const manuscriptCount = renderPublicationGroup("manuscript-list", "manuscript");
  setText("published-count", `${publishedCount} papers`);
  setText("manuscript-count", `${manuscriptCount} projects`);

  renderCourses();
  renderTeachingNotes();
  renderCards("experience-grid", siteData.experience, "Experience");
  injectStructuredData();
};

initializeSite();
