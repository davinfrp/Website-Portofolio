/* ============================================================
   PORTFOLIO DATA: edit this file only to update the website.
   To add something new, copy one { ... } block and change it.
   Newest items go on top.
   Images: put files in assets/ and write the path (e.g. "assets/gallery/x.jpg").
   Any missing image falls back to a clean placeholder automatically.
   ============================================================ */
window.PORTFOLIO = {
  name: "Davin Fisabilillah Reynard Putra",
  shortName: "Davin",
  photo: "assets/Photo.jpg",
  roles: ["Data Analyst", "Machine Learning & AI", "Data Scientist", "Data Visualization", "Business Intelligence", "Data Engineer"],
  headline: "I turn data into actionable insights that leads to business decisions.",
  summary:
    "Informatics Engineering graduate from Institut Teknologi Sepuluh Nopember (ITS) with hands-on experience at Telkomsel and Kimia Farma. I analyze transactions, audience behavior, surveys, and market data to find trends, segments, and insights a team can act on, with a strong foundation in statistics, databases, machine learning, and data visualization. I have led teams of 10+ people across several organizations.",
  location: "Jakarta Metropolitan Area",
  available: "Open to Data Analyst and Data Scientist roles",
  contact: {
    email: "davinfreynard@gmail.com",
    phone: "+62 8118078704",
    linkedin: "https://linkedin.com/in/davinfisabilillah/",
    github: "https://github.com/davinfrp",
    cv: "cv.pdf" // e.g. "cv.pdf" after placing the PDF next to index.html
  },

  stats: [
    { value: 670, suffix: "K+", label: "records integrated into BigQuery" },
    { value: 400, suffix: "K+", label: "records cleaned and analyzed at Telkomsel" },
    { value: 45, suffix: "", label: "experiment configurations in my thesis" },
    { value: 91, suffix: "%", label: "precision in credit card fraud detection" }
  ],

  // logo: file in assets/logos/. If the file is missing, a monogram is shown.
  experience: [
    {
      role: "Shared Services (Payroll Services) Intern",
      org: "Pertamina Persero", place: "Jakarta", period: "Nov 2026 – Present",
      logo: "assets/logos/pertamina.webp", mono: "PR",
      points: [
        "Supported the payroll operations team in executing monthly regular and off-cycle payroll cycles for Pertamina Group subsidiaries and external corporate clients.",
        ]
    },
    {
      role: "Big Data Analytics Virtual Intern",
      org: "Kimia Farma x Rakamin Academy", place: "Remote", period: "Aug 2026 – Sep 2026 (2 Months)",
      logo: "assets/logos/kimiafarma.png", mono: "KF",
      points: [
        "Integrated 670K+ records from multiple sources into Google BigQuery and built Looker Studio dashboards showing sales trends, regional performance, and KPIs for executive stakeholders.",
        "Wrote SQL to merge multi-source relational datasets and compute key financial metrics (revenue, net profit, profit margin), keeping performance tracking accurate.",
        "Ran exploratory data analysis to find operational bottlenecks and regional performance gaps, supporting inventory optimization."
      ]
    },
    {
      role: "Data Analyst Intern",
      org: "Telkomsel", place: "Jakarta", period: "Jul 2025 – Oct 2025 (4 Months)" ,
      logo: "assets/logos/telkomsel.png", mono: "T",
      points: [
        "Cleaned, aggregated, and processed 400K+ records of transactions and audience behavior with Python and Excel, then ran temporal trend analysis (daily, weekly, seasonal).",
        "Segmented 300K+ customers by demographics, digital behavior, fintech and e-commerce activity, and interests to generate insights for data-driven marketing.",
        "Evaluated the on-demand services competitive landscape by comparing competitor performance and processing market survey data.",
        "Produced competitive intelligence reports from survey and consumer behavior data covering market penetration, user retention, and competitor movements.",
        "Presented audience distribution and market performance reports to the business team to support tactical marketing decisions."
      ]
    }
  ],

  // kind controls the generated thumbnail: dashboard | scatter | matrix | bars.
  // Add image: "assets/projects/name.png" to use your own screenshot instead.
  projects: [
    {
      title: "Business Performance Analytics Dashboard",
      context: "Internship final task, Kimia Farma", year: "2026", kind: "dashboard", image: "",
      summary: "Interactive dashboards that let executives track sales trends, regional performance, and key business metrics in one place.",
      detail: "Integrated 670K+ records from multiple data sources into Google BigQuery, then built Looker Studio dashboards that surface optimization opportunities and regional disparities.",
      results: ["670K+ records", "Executive KPI view"],
      tags: ["SQL", "BigQuery", "Looker Studio", "Dashboard"],
      link: ""
    },
    {
      title: "Credit Card Fraud Detection",
      context: "Undergraduate thesis, ITS", year: "2026", kind: "scatter", image: "",
      summary: "A machine learning approach for catching fraudulent transactions under severe class imbalance.",
      detail: "Analyzed 284K+ credit card transactions across 31 numerical features. After preprocessing, exploratory analysis, and feature preparation, compared 5 ensemble algorithms with 8 resampling techniques (45 experimental configurations). XGBoost with ENN performed best.",
      results: ["91.11% precision", "83.67% recall", "87.00% F1"],
      tags: ["Python", "Machine Learning", "Scikit-learn", "Imbalanced Data"],
      link: ""
    },
    {
      title: "Credit Score Classification & Telecom Insights",
      context: "Internship project, Telkomsel", year: "2025", kind: "matrix", image: "",
      summary: "Multiclass models that predict credit score tiers from demographic, geographic, and financial attributes.",
      detail: "Profiled 280K+ concert attendee records end to end: target encoding for high-cardinality features, IterativeImputer, Mutual Information feature selection, and 5 classifiers across 3 scenarios (baseline, Optuna tuning, SMOTE). Tuned XGBoost was the top model.",
      results: ["77.45% accuracy", "73% precision", "70% F1"],
      tags: ["Python", "Machine Learning", "Optuna", "Excel"],
      link: ""
    },
    {
      title: "Wine Quality Prediction & Explainable AI",
      context: "Data Mining final project, ITS", year: "2025", kind: "bars", image: "",
      summary: "Wine quality classification with SHAP to explain what actually drives each prediction.",
      detail: "Merged 6,497 red and white wine records (11 physicochemical features, UCI repository), encoded and scaled the data, and compared 5 algorithms using GridSearchCV and SMOTE. SHAP showed alcohol content and volatile acidity as the main quality drivers. Random Forest performed best.",
      results: ["82% accuracy", "88% precision", "SHAP explainability"],
      tags: ["Python", "Machine Learning", "SHAP", "Explainable AI"],
      link: ""
    }
  ],

  education: {
    school: "Institut Teknologi Sepuluh Nopember (ITS)", place: "Surabaya",
    logo: "assets/logos/its.png", mono: "ITS",
    degree: "Bachelor of Computer Science, Informatics Engineering",
    period: "Aug 2022 – Aug 2026", gpa: "3.57 / 4.00",
    courses: ["Data Mining", "Machine Learning", "Artificial Intelligence Concept", "Database System and Management", "Probability and Statistics", "Data Structures and Algorithms", "Knowledge-Based System Engineering", "Applied Technology and Digital Transformation"]
  },

  organizations: [
    { role: "Project Officer", org: "Quadrathlon 2024", period: "Nov 2024", text: "Led an end-to-end event team of 8+ members, defined KPIs, and oversaw planning, marketing campaigns, and logistics, coordinating cross-functional work for the whole program." },
    { role: "Head of Reeva Subdivision Operational", org: "Schematics 2024", period: "Feb – Nov 2024", text: "Led 15+ staff and managed cross-functional workflows and resource allocation, completing 100% of division KPI targets." },
    { role: "Staff, Competition Bureau", org: "HMTC ITS", period: "Mar – Dec 2024", text: "Executed competition programs and coordinated the bureau's operational activities." },
    { role: "Organizing Committee", org: "OK2BK", period: "Aug 2023", text: "Coordinated workshops and orientation sessions for 300+ freshmen on academic tracks, competencies, and career paths in Informatics Engineering." },
    { role: "Staff, Permits and Equipment", org: "Schematics 2023", period: "Feb – Nov 2023", text: "Tracked 10+ pieces of technical equipment and event assets, streamlining venue setup and achieving zero loss during the event." }
  ],

  // Photos with your teams. Put files in assets/gallery/. Add as many as you like.
  gallery: [
    { src: "assets/gallery/schematics-2024.jpg", title: "Schematics 2024", caption: "Leading the Reeva operational team" },
    { src: "assets/gallery/quadrathlon-2024.jpg", title: "Quadrathlon 2024", caption: "Project Officer with the event committee" },
    { src: "assets/gallery/hmtc-2024.jpg", title: "HMTC ITS", caption: "Competition Bureau team" },
    { src: "assets/gallery/ok2bk-2023.jpg", title: "OK2BK 2023", caption: "Orientation for 300+ freshmen" },
    { src: "assets/gallery/schematics-2023.jpg", title: "Schematics 2023", caption: "Permits and Equipment division" }
  ],

  certifications: [
    { title: "Google Looker Studio Course", issuer: "MySkill", date: "Sep 2026" },
    { title: "Basic Data Course", issuer: "MySkill", date: "Sep 2026" },
    { title: "Version Control System Training", issuer: "Software Engineering Laboratory, ITS", date: "Nov 2024" },
    { title: "Bootcamp and Seminar of Technology 2023", issuer: "Schematics 2023", date: "Sep 2023" },
    { title: "Student Management Skills Training", issuer: "BEM FTEIC ITS", date: "Sep 2023" },
    { title: "Entrepreneurial Skills Training for Students", issuer: "BEM FTEIC ITS", date: "Nov 2022" },
    { title: "ITS TOEFL-Like (TEFL), score 577", issuer: "Global Language Center ITS", date: "Aug 2022" }
  ],

  // icon = Simple Icons slug (see assets/icons.js). Unknown icons show a monogram,
  // or drop assets/logos/<icon>.svg to use your own logo.
  skills: [
    { name: "Python", icon: "python" }, { name: "SQL", icon: "sql" },
    { name: "Pandas", icon: "pandas" }, { name: "NumPy", icon: "numpy" },
    { name: "Scikit-learn", icon: "scikitlearn" }, { name: "Jupyter", icon: "jupyter" },
    { name: "Google Colab", icon: "googlecolab" }, { name: "BigQuery", icon: "googlebigquery" },
    { name: "Looker Studio", icon: "looker" }, { name: "Power BI", icon: "powerbi" },
    { name: "Tableau", icon: "tableau" }, { name: "Excel", icon: "excel" },
    { name: "Google Sheets", icon: "googlesheets" }, { name: "GitHub", icon: "github" },
    { name: "Claude", icon: "claude" }, { name: "Gemini", icon: "googlegemini" },
    { name: "ChatGPT", icon: "openai" }, { name: "Canva", icon: "canva" }
  ],
  softSkills: ["Leadership", "Teamwork", "Critical thinking", "Attention to detail", "Adaptability", "Time management", "Data storytelling", "Problem solving", "Decision making"],
  languages: ["Bahasa Indonesia (Native)", "English (Professional Working Proficiency)"]
};