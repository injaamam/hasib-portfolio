export const routes = [
  { href: "/home", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/honorsawards", label: "Honors/Awards" },
  { href: "/cv", label: "CV" },
  { href: "/eca", label: "ECA" },
  { href: "/professional-experience", label: "Professional Experience" },
  { href: "/my-skills", label: "My Skills" },
  { href: "/research-interest", label: "Research Interest" },
  { href: "/publicationsprojects", label: "Publications/Projects" },
  { href: "/research-areas", label: "Research Areas" },
  { href: "/current-research-projects", label: "Current Research Projects" },
  { href: "/my-supervised-works", label: "My Supervised Works" },
  {
    href: "/future-student-opportunities",
    label: "Future Student Opportunities",
  },
  { href: "/higher-study-guidelines", label: "Higher Study Guidelines" },
  { href: "/miscellaneous", label: "Miscellaneous" },
  { href: "/contact", label: "Contact" },
];

export const home = {
  hero: {
    title: "I'm Sheikh Hasib Cheragee",
    subtitle:
      "Research Assistant | Nano-Fabrication Lab | ECE | University of Delaware | USA",
    portraitImage: "/hasib-portrait.JPG",
  },
  hello: {
    heading: "Hello.",
    paragraphs: [
      "I am Sheikh Hasib Cheragee, currently working as a Research Assistant in the Nano-Fabrication Lab at the Department of Electrical and Computer Engineering, University of Delaware (UD), Newark, Delaware, USA, where I am pursuing my PhD (ongoing) starting January 2026.",
      "My research is focused on GaN RF and FeFET device modeling, design, simulation, and fabrication, with a particular emphasis on materials and device engineering. I completed my MSc in Electrical and Electronic Engineering from Bangladesh University of Engineering and Technology (BUET) in August 2023 (CGPA: 3.81/4.00), and my BSc from the University of Rajshahi in June 2021, where I ranked 1st out of 280 students (CGPA: 3.95/4.00).",
      "Prior to joining UD, I served as a Lecturer at the University of Rajshahi (currently on study leave) and previously at American International University-Bangladesh (AIUB) and State University of Bangladesh. My work spans GaN HEMT, FeFET, perovskite solar cells, semiconductor device modeling, and machine learning applications in electrical engineering.",
    ],
  },
  cv: {
    heading: "Curriculum Vitae (CV)",
    links: [
      {
        label: "View online",
        href: "/hasib-cheragee-cv.pdf",
      },
      {
        label: "Download PDF",
        href: "/hasib-cheragee-cv.pdf",
      },
    ],
  },
  researchInterests: {
    heading: "Research Interests",
    list: [
      "Solar Cell",
      "GaN HEMT",
      "FeFET",
      "Semiconductor Materials and Devices",
      "Microelectronics and Nanotechnology",
      "GaN RF Device",
      "GaN Power Device",
      "TFT",
      "Machine Learning",
    ],
  },
  updates: {
    heading: "Updates",
    years: [
      {
        year: "2026",
        items: [
          {
            date: "January",
            text: "Started PhD (ongoing) in Electrical and Computer Engineering at the University of Delaware (UD), Newark, Delaware, USA. Research domain: GaN RF and FeFET Device Model, Design, Simulation and Fabrication.",
          },
        ],
      },
      {
        year: "2025",
        items: [
          {
            date: "August 12",
            text: "Joined the Department of Electrical and Electronic Engineering, University of Rajshahi as a Lecturer (currently on study leave for PhD at UD).",
          },
          {
            date: "July 31",
            text: "Completed tenure as Lecturer at American International University-Bangladesh (AIUB).",
          },
          {
            date: "2025",
            text: "Published multiple journal articles in Solar Energy, Results in Optics, IET Optoelectronics, and Micro and Nanostructures; and presented papers at IEEE ECCE and QPAIN conferences.",
          },
        ],
      },
      {
        year: "2024",
        items: [
          {
            date: "October 16",
            text: "Joined American International University-Bangladesh (AIUB) as a Lecturer in the Department of Electrical and Electronic Engineering.",
          },
          {
            date: "2024",
            text: "Published and presented multiple works on solar cells, semiconductor devices, and load forecasting in journals (Results in Optics, Thin Solid Films, Cyber Security and Applications) and IEEE conferences (iCACCESS, ICAEEE, PEEIACON, ICECE, ICRPSET).",
          },
        ],
      },
      {
        year: "2023",
        items: [
          {
            date: "August",
            text: "Completed MSc in Electrical and Electronic Engineering from BUET with a CGPA of 3.81 out of 4.00.",
          },
          {
            date: "June 1",
            text: "Joined State University of Bangladesh as a Lecturer in the Department of Computer Science and Engineering.",
          },
        ],
      },
      {
        year: "2021",
        items: [
          {
            date: "October 1",
            text: "Began working as a Research Fellow in the Department of Electrical and Electronic Engineering at BUET.",
          },
          {
            date: "June",
            text: "Graduated 1st out of 280 students from the University of Rajshahi with a CGPA of 3.95 out of 4.00.",
          },
        ],
      },
    ],
  },
  footer: {
    siteHitsLabel: "Site hits",
    siteHitDigits: ["7", "6", "6", "7"],
  },
};

export const education = {
  title: "Education",
  degrees: [
    {
      heading: "PhD (ongoing) in Electrical and Computer Engineering",
      badge: "PhD · ongoing",
      meta: "January 2026 - Present | University of Delaware (UD), Newark, Delaware, USA",
      paragraphs: [
        "Research Domain: GaN RF and FeFET Device Model, Design, Simulation and Fabrication | Focus: Materials and Device",
      ],
    },
    {
      heading:
        "Master of Science (MSc) in Electrical and Electronic Engineering",
      badge: "MSc",
      meta: "August 2023 | Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      paragraphs: [
        "CGPA: 3.81 / 4.00 | Rank: Top 5% in the class | Focus: Electronics and Photonics",
      ],
    },
    {
      heading:
        "Bachelor of Science (BSc) in Electrical and Electronic Engineering",
      badge: "BSc · 1st in Class",
      meta: "June 2021 | University of Rajshahi, Rajshahi, Bangladesh",
      paragraphs: [
        "CGPA: 3.95 / 4.00 | Rank: 1st out of 280 students | Focus: Electronics",
      ],
    },
  ],
  technicalSkills: {
    heading: "Technical Skills",
    categories: [
      {
        label: "Programming Languages",
        items: ["Python", "Matlab", "C", "Arduino"],
      },
      {
        label: "Simulation Software",
        items: [
          "SCAPS 1D",
          "Silvaco TCAD",
          "Sentaurus TCAD Simulation",
          "Cadence",
          "Advance Design System",
          "ICCAP",
          "NeuroSim",
        ],
      },
      {
        label: "Graphics",
        items: ["Adobe Photoshop", "Adobe Illustrator"],
      },
      {
        label: "Computer Skills",
        items: ["Microsoft Office", "LaTeX", "Origin Pro"],
      },
    ],
  },
  standardizedTests: {
    heading: "Standardized Test Scores",
    tests: [
      {
        name: "TOEFL",
        score: "103",
        breakdown: [
          { section: "Listening", score: "28" },
          { section: "Reading", score: "26" },
          { section: "Writing", score: "27" },
          { section: "Speaking", score: "22" },
        ],
      },
    ],
  },
};

// Keep backward-compatible `sections` accessor used by cv/page.js
education.sections = [
  ...education.degrees,
  {
    heading: education.technicalSkills.heading,
    list: education.technicalSkills.categories.flatMap((c) => c.items),
  },
];

export const professionalExperience = {
  title: "Professional Experience",
  sections: [
    {
      heading: "Lecturer, Department of Electrical and Electronic Engineering",
      meta: "12 August 2025 - Present (On Study Leave) | University of Rajshahi, Rajshahi-6205, Bangladesh",
      paragraphs: [
        "Courses Taught: Power System Analysis, Physics, High Voltage Engineering, Project Planning and Management, Power Electronics Laboratory, and Power System Protection & Switchgear Laboratory.",
      ],
    },
    {
      heading: "Lecturer, Department of Electrical and Electronic Engineering",
      meta: "16 October 2024 - 31 July 2025 | American International University-Bangladesh (AIUB), Dhaka, Bangladesh",
      paragraphs: [
        "Courses Taught: Introduction to Electrical Circuits, Electronic Device, Electrical Machine-2, Electrical Machine-1 Laboratory, Electrical Circuit-2 Laboratory, and Electronic Device Laboratory.",
      ],
    },
    {
      heading: "Lecturer, Department of Computer Science and Engineering",
      meta: "01 June 2023 - 15 October 2024 | State University of Bangladesh (SUB), Dhaka, Bangladesh",
      paragraphs: [
        "Courses Taught: Electronic Device and Circuits, Digital Logic Design, Electrical Circuit Analysis, Electronic Device and Circuits Laboratory, Digital Logic Design Laboratory, and Electrical Circuit Analysis Laboratory.",
      ],
    },
    {
      heading:
        "Research Fellow, Department of Electrical and Electronic Engineering",
      meta: "01 October 2021 - 01 April 2023 | Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      list: [
        "Worked on device modeling, numerical simulation, and transport-layer optimization for solar cell research.",
        "Contributed to journal and conference publications in photovoltaics, semiconductor devices, and advanced electronic materials.",
      ],
    },
  ],
};

export const cv = {
  title: "Curriculum Vitae",
  subtitleNote: "PDF document · Opens in a new tab",
  stats: [
    { value: "PhD", label: "Current Study" },
    { value: "24+", label: "Publications" },
    { value: "4+", label: "Years Teaching" },
  ],
  sections: [
    {
      heading: "Download CV",
      links: [
        {
          label: "Download CV in PDF format",
          href: "/hasib-cheragee-cv.pdf",
        },
      ],
    },
  ],
};

export const publicationsProjects = {
  title: "Publications / Projects",
  sections: [
    {
      heading: "Journal Articles",
      list: [
        'Sheikh Hasib Cheragee and Mohammad Jahangir Alam, "Device modeling and numerical study of a double absorber solar cell using a variety of electron transport materials," Heliyon, vol. 9, no. 7, pp. 1–11, 2023. https://doi.org/10.1016/j.heliyon.2023.e18265 (Heliyon, 2023)',
        'Md Earshad Ali, Md Mahfuzul Haque, and Sheikh Hasib Cheragee, "Device modeling and numerical analysis of lead-free MASnI3/Ca3AsI3 based perovskite solar cells with over 38% efficiency," Solar Energy, vol. 288, p. 113309, 2025. (Solar Energy, 2025)',
        'Sheikh Hasib Cheragee, Jannatul Afroj Akhi, Mishion Dev, Md Mahfuzul Haque, Md Alomgir Kabir, Tamim Hossain, Mohammad Tahsin Alam, and Mohammad Jahangir Alam, "Optimized non-toxic double absorber perovskite solar cell with efficiency beyond 33%," Results in Optics, vol. 19, p. 100813, 2025. (Results in Optics, 2025)',
        'Sheikh Hasib Cheragee, Jannatul Afroj Akhi, Muhammad Masud Tarek, Mohammad Tahsin Alam, and Mohammad Jahangir Alam, "Simulation of Lead-Free Double-Absorber Solar Cell Using Cs2TiBr6/La2NiMnO6 Over 33% Efficiency," IET Optoelectronics, vol. 19, no. 1, p. e70013, 2025. (IET Optoelectronics, 2025)',
        'Md Roman Mia, Md Amanullah, Md Mahfuzul Haque, and Sheikh Hasib Cheragee, "Design insights into eco-friendly K2TiI6/MASnI3 perovskite-based tandem solar cell," Micro and Nanostructures, vol. 204, p. 208150, 2025. (Micro and Nanostructures, 2025)',
        'Sheikh Hasib Cheragee and Mohammad Jahangir Alam, "Device modelling and numerical analysis of high-efficiency double absorbers solar cells with diverse transport layer materials," Results in Optics, vol. 15, p. 100647, 2024. https://doi.org/10.1016/j.rio.2024.100647 (Results in Optics, 2024)',
        'Sheikh Hasib Cheragee, Jannatul Afroj Akhi, Mishion Dev, Md Mahfuzul Haque, and Mohammad Jahangir Alam, "Numerical Design of Non-toxic High-Efficiency Tandem solar cell with distinct hole transport Materials," Thin Solid Films, p. 140432, 2024. https://doi.org/10.1016/j.tsf.2024.140432 (Thin Solid Films, 2024)',
        'Md Alamgir Hossain, Tahmid Hasan, Fahad Ahmed, Sheikh Hasib Cheragee, Muntasir Hasan Kanchan, and Md Alimul Haque, "Towards Superior Android Ransomware Detection: An Ensemble Machine Learning Perspective," Cyber Security and Applications, p. 100076, 2024. https://doi.org/10.1016/j.csa.2024.100076 (Cyber Security and Applications, 2024)',
        'Sheikh Hasib Cheragee, Nazmul Hassan, Sakil Ahammed and A. Z. M. T. Islam, "A study of IoT-based real-time solar power remote monitoring system," International Journal of Ambient Systems and Applications, vol. 9, no. 1/2, pp. 27–36, 2021. doi:10.5121/ijasa.2021.9204 (IJASA, 2021)',
        'Sakil Ahammed, Nazmul Hassan, Sheikh Hasib Cheragee, and Abu Zafor Md Touhidul Islam, "An IoT-based real-time remote health monitoring system," International Journal of Recent Engineering Science (IJRES), vol. 8, 2021. (IJRES, 2021)',
      ],
    },
    {
      heading: "IEEE Conference Articles",
      list: [
        'Sheikh Hasib Cheragee and M. J. Alam, "2-T Non-Toxic Tandem solar cell with Distinct HTL Materials," 2022 12th International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh, pp. 152–155. doi:10.1109/ICECE57408.2022.10089070 (ICECE, 2022)',
        'Sheikh Hasib Cheragee, A. Z. M. T. Islam and M. J. Alam, "2-T Non-Toxic Multijunction solar cell with Diverse ETL materials," 2022 International Conference on Recent Progresses in Science, Engineering and Technology (ICRPSET), Rajshahi, Bangladesh, pp. 1–4. doi:10.1109/ICRPSET57982.2022.10188555 (ICRPSET, 2022)',
        'M. M. Haque and Sheikh Hasib Cheragee, "Performance Analysis of n+ Pocket DG-JLFET with SiO2 and High-K Oxide Thin Layer for Biomedical Application," 2022 International Conference on Innovations in Science, Engineering and Technology (ICISET), Chittagong, Bangladesh, pp. 290–294. doi:10.1109/ICISET54810.2022.9775872 (ICISET, 2022)',
        'S. C. Pall, Sheikh Hasib Cheragee et al., "Performance Analysis of Machine Learning and ANN for Load Forecasting in Bangladesh," 2023 International Conference on Next-Generation Computing, IoT and Machine Learning (NCIM), Gazipur, Bangladesh, pp. 1–5. doi:10.1109/NCIM59001.2023.10212451 (NCIM, 2023)',
        'Md Toufiqur Rahman, Shuvo Chandra Pall, Rifat Bin Rashid, Md Shifat Hossen, Sagar Kumar Das, and Sheikh Hasib Cheragee, "SolarNet-An efficient multi-model ensemble approach for Solar Power Forecasting based on Artificial Intelligence," 2023 6th International Conference on Electrical Information and Communication Technology (EICT), pp. 1–6. (EICT, 2023)',
        'Anissuzaman, Nayan Sarker, Sheikh Hasib Cheragee, and Md Niamul Hasan, "Design of Microstrip Patch Antenna with Improved Return Loss and Bandwidth for 5G Wireless Communication," 2023 6th International Conference on Electrical Information and Communication Technology (EICT), pp. 1–4. (EICT, 2023)',
        'Sheikh Hasib Cheragee et al., "Short- and Medium-Term Electrical Load Forecasting in Bangladesh Using Machine Learning Approaches," 2024 International Conference on Advances in Computing, Communication, Electrical, and Smart Systems (iCACCESS), Dhaka, Bangladesh, pp. 1–5. doi:10.1109/iCACCESS61735.2024.10499506 (iCACCESS, 2024)',
        'M. J. Islam, Sheikh Hasib Cheragee, M. M. Tarek and F. Gulshan, "A numerical analysis of a high-efficiency solar cell using a DFT explored nontoxic perovskite material," 2024 3rd International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE), Gazipur, Bangladesh, pp. 1–5. doi:10.1109/ICAEEE62219.2024.10561832 (ICAEEE, 2024)',
        'M. J. Islam, Sheikh Hasib Cheragee et al., "Numerical Study of Higher Efficiency Perovskite Solar Cell Using Density Functional Theory," 2024 iCACCESS, Dhaka, Bangladesh, pp. 1–5. doi:10.1109/iCACCESS61735.2024.10499519 (iCACCESS, 2024)',
        'Sheikh Hasib Cheragee, Jannatul Afroj Akhi, Abu Zafor Md Touhidul Islam, Mohammad Tahsin Alam, Md Jahidul Islam, and Mohammad Jahangir Alam, "Modeling and Performance Investigation of Perovskite/MoTe2 Solar Cell Exceeding 44% Efficiency: A SCAPS-1D Simulation," 2024 ICRPSET, pp. 1–4. (ICRPSET, 2024)',
        'Mohammad Tahsin Alam, Zafrin Jahan Nikita, Sheikh Hasib Cheragee, and Mohammad Jahangir Alam, "Enhancing Lead-Free Perovskite/Kesterite Solar Cells: Boosting Efficiency Through Dual Absorber (Cs2AgBiBr6/CZTSSe) Layers," 2024 13th International Conference on Electrical and Computer Engineering (ICECE), pp. 142–147. (ICECE, 2024)',
        'Selim Molla, Sheikh Hasib Cheragee et al., "Potential Charging Techniques for Electric Vehicles Utilizing Photovoltaic Sources in Bangladesh," 2024 International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON), Rajshahi, Bangladesh, pp. 102–107. doi:10.1109/PEEIACON63629.2024.10800238 (PEEIACON, 2024)',
        'Sheikh Hasib Cheragee, Jannatul Afroj Akhi, Riyal Ahmed Nayan, Md Samiul Islam, and Hasan Mahmud Mishu, "A Review on Stability of Bangladesh Power System Under Large Scale Solar PV Penetration," 2025 International Conference on Electrical, Computer and Communication Engineering (ECCE), pp. 1–6. (ECCE, 2025)',
        'Muhtasim Al Ahsan, Md Modabbir Hossain Mahin, Sheikh Hasib Cheragee, Md Alamgir Hossain, Md Samiul Islam, and Sohel Bashar, "A Deep Space Flexible Blind Convolutional Neural Network for Super Compressed JPEG Artifacts Removal," 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), pp. 1–6. (QPAIN, 2025)',
      ],
    },
  ],
};

export const honorsAwards = {
  title: "Honors / Awards",
  sections: [
    {
      heading: "Awards and Achievements",
      list: [
        'Received the "Bangabandhu Gold Medal Award" for securing the First position in the Faculty of Engineering in the B.Sc. Engineering examination of the year 2019 from the Dept. of EEE, University of Rajshahi.',
        'Nominated for the "Prime Minister Gold Medal Award-2021" for obtaining the Highest CGPA in BSc Engineering among all students of the Faculty of Engineering, University of Rajshahi.',
        'Received the "Post-Graduation Fellowship" at BUET from 01 October 2021 to 01 April 2023 (a total of 1 year and 6 months).',
        'Received the "Dean\'s Award" in the consecutive academic years of 2016–2017, 2017–2018, 2018–2019, and 2019–2020 from the Faculty of Engineering, University of Rajshahi, for Excellent Academic Standing.',
        'Received the "APEE Reunion 2011 Award" two times for outstanding result in BSc Engineering Part-3 and Part-4 examinations.',
        'Received a scholarship for 7 days (18–24 November 2019) to join an invitation program under the framework of the "Sakura Science Exchange Program" administered by the Japan Science and Technology Agency (JST), Tokyo, Japan.',
      ],
    },
  ],
};

export const eca = {
  title: "Extra-curricular Activities",
  sections: [
    {
      heading: "Leadership Roles",
      list: [
        "Vice-President, BUET Post-graduation Research Alliance (PGRA) — February 2022 to March 2023",
        "Founding Member, IEEE Rajshahi University Student Chapter",
        "General Secretary, Rajshahi University EEE Association — June 2019 to May 2020",
      ],
    },
    {
      heading: "Events and Initiatives",
      list: [
        "Organized Research Conclave 2022 (Virtual): Virtual seminar on research methodology for all PGRA members under BUET Post-graduation Research Alliance.",
        "Organized Research and Innovation Conclave 2021 (Virtual): Virtual seminar on implications of silicon and GaN material in semiconductor devices under IEEE Rajshahi University Student Chapter.",
        "Organized a two-day Electronics Workshop for fresher students on basic electronics and practical device applications under Rajshahi University EEE Association.",
      ],
    },
    {
      heading: "Sports & Other Activities",
      list: [
        "Participated in PGRA Shahid Smriti Hall Games 2022 and achieved runner-up position in Badminton.",
        "Participated in the Sakura Science Exchange Program, Tokyo, Japan (November 18–24, 2019).",
        "Actively engaged in academic collaboration, student mentoring, and technical event organization.",
      ],
    },
  ],
};

export const mySkills = {};

export const researchInterest = {};

export const researchAreas = {};

export const currentResearchProjects = {};

export const mySupervisedWorks = {};

export const futureStudentOpportunities = {};

export const higherStudyGuidelines = {
  title: "Higher Study Guidelines",
  subtitle: "Advice and resources for students aspiring to pursue graduate studies abroad",
  subsections: [
    {
      id: "usa",
      label: "Higher Study in USA",
      flag: "🇺🇸",
      intro:
        "The United States hosts some of the world's top research universities and offers excellent opportunities for funded graduate study, especially for students from Bangladesh pursuing MS or PhD programs in engineering and science. Below is a comprehensive guide covering everything you need to know before and during the application process.",
      sections: [
        {
          heading: "Why Study in the USA?",
          items: [
            "Home to world-class research universities (MIT, Caltech, Stanford, Carnegie Mellon, etc.) consistently ranked among the global top.",
            "Strong culture of graduate funding — most PhD programs and many MS programs (thesis-based) are fully funded with tuition waiver + stipend.",
            "Cutting-edge research labs with state-of-the-art facilities and equipment.",
            "Diverse academic environment with faculty and students from all over the world.",
            "Optional Practical Training (OPT) allows up to 3 years of post-graduation work experience in STEM fields.",
            "High quality of life, accessible public services, and a strong alumni network worldwide.",
          ],
        },
        {
          heading: "Types of Graduate Programs",
          items: [
            "PhD (Doctor of Philosophy): 4–6 years; typically fully funded (tuition waiver + monthly stipend via Research Assistantship or Teaching Assistantship); requires a dissertation based on original research.",
            "MS (Master of Science) — Thesis-based: 2–3 years; often partially or fully funded; requires a research thesis.",
            "MS — Non-thesis / Course-based: 1.5–2 years; usually self-funded; focused on coursework; good for industry-oriented careers.",
            "Meng / MEng (Master of Engineering): Professional degree, typically 1–2 years; usually self-funded.",
            "Most Bangladeshi students target funded PhD or thesis-MS programs, especially in EEE, CSE, and related fields.",
          ],
        },
        {
          heading: "Academic Requirements & Eligibility",
          items: [
            "A strong undergraduate GPA is the most important factor. Aim for 3.5/4.0 or above (equivalent to a first-class or near-first-class result).",
            "A relevant bachelor's degree (BSc in EEE, CSE, Physics, etc.) or master's degree is required.",
            "Research experience (publications, conference papers, thesis work) significantly strengthens your profile for PhD admissions.",
            "Letters of Recommendation (LOR) from professors who know your academic ability and research potential are critical.",
            "A compelling Statement of Purpose (SOP) that articulates your research interest and fit with the program.",
          ],
        },
        {
          heading: "English Proficiency Tests",
          items: [
            "TOEFL iBT (Test of English as a Foreign Language — Internet-based Test): The most widely accepted English test at US universities. Aim for 100+ overall. Section minimums vary by university (typically R: 22, L: 22, W: 22, S: 20).",
            "IELTS Academic: Accepted by most universities as an alternative to TOEFL. Aim for 7.0 or above overall.",
            "Duolingo English Test: Now accepted by many universities as a convenient, affordable option. Aim for 120+.",
            "Some universities may waive English requirements if your undergraduate/graduate medium of instruction was English.",
            "Register early — TOEFL/IELTS scores are valid for 2 years and can take 2–4 weeks to be sent to universities.",
          ],
        },
        {
          heading: "GRE (Graduate Record Examination)",
          items: [
            "The GRE General Test has three sections: Verbal Reasoning (130–170), Quantitative Reasoning (130–170), and Analytical Writing (0–6).",
            "Many top universities have made GRE optional or no longer require it (post-COVID trend). Always verify each program's current requirements.",
            "If required, aim for Q: 163+ (especially for engineering programs), V: 153+, AW: 3.5+.",
            "GRE Subject Test (e.g., Physics, Math) may be beneficial for specific programs but is rarely required.",
            "Scores are valid for 5 years. Register via ETS website (ets.org).",
          ],
        },
        {
          heading: "Contacting Professors (Emailing Professors)",
          items: [
            "For PhD admissions, directly emailing potential research supervisors is one of the most effective strategies — especially in EE, ECE, and related fields.",
            "Research the professor's recent publications (Google Scholar, ResearchGate) and identify a specific paper or project that aligns with your interests.",
            "Write a concise, personalized email (not a template). Mention their specific work, your background, and why you want to work with them.",
            "Attach your CV and (optionally) a brief research statement. Avoid attaching a full SOP or long documents.",
            "Keep the email short (4–6 paragraphs max). Subject line: 'Prospective PhD Student — [Your Research Area] — [Your Name]'.",
            "Follow up once after 2–3 weeks if no reply. Avoid sending mass emails to many professors with the same text.",
            "A positive response from a professor greatly increases your chance of admission and funding.",
          ],
        },
        {
          heading: "Statement of Purpose (SOP)",
          items: [
            "The SOP is a 1–2 page essay explaining why you want to pursue graduate study, your research background, and your future goals.",
            "Structure: (1) Opening hook / motivation, (2) Research experience and accomplishments, (3) Why this specific university and program, (4) Future career goals.",
            "Customize each SOP for each university — mention specific faculty, labs, or research themes that match your interests.",
            "Avoid generic statements. Be specific about your research contributions, skills, and what you can bring to the lab.",
            "Proofread carefully — grammatical errors and vague writing can hurt your application.",
          ],
        },
        {
          heading: "Letters of Recommendation (LOR)",
          items: [
            "Most programs require 3 letters of recommendation from academic or research supervisors.",
            "Choose professors who know your work well — ideally those who supervised your thesis, research, or major projects.",
            "Request letters at least 4–6 weeks before the deadline. Provide your recommender with your CV, SOP draft, and the list of universities.",
            "Strong letters discuss specific research contributions, intellectual ability, and potential for graduate-level independent research.",
            "Letters from industry supervisors are acceptable but academic letters carry more weight for research-focused programs.",
          ],
        },
        {
          heading: "Choosing Universities",
          items: [
            "Build a balanced list of 8–15 universities: 3–4 reach schools (top-20), 5–6 match schools (top 50–100), and 2–3 safe schools.",
            "Research the specific department and faculty, not just overall university rankings. Focus on faculty whose research matches yours.",
            "Consider program size, location, cost of living, funding availability, and career outcomes of recent graduates.",
            "Useful resources: US News & World Report rankings, CSRankings (for CS), NRC rankings, and program websites.",
            "Shortlist universities where at least one faculty member is actively working in your research area and appears to be taking students.",
          ],
        },
        {
          heading: "Application Timeline",
          items: [
            "September–October: Finalize university list; request LORs; start drafting SOP.",
            "October–November: Appear for TOEFL/IELTS and GRE if required; finalize SOP.",
            "November–December: Submit applications. Most fall semester (August intake) deadlines are December 1 – January 15.",
            "January–February: Email professors of interest if you have not already done so.",
            "February–April: Receive decisions (interview invitations, offers, or rejections).",
            "April 15: Traditional deadline for US graduate schools to hold offers open (Council of Graduate Schools agreement).",
            "May–June: Accept your offer, apply for visa (F-1 student visa).",
          ],
        },
        {
          heading: "Funding and Scholarships",
          items: [
            "Research Assistantship (RA): Funded by a faculty member's research grant. You work on their project and receive tuition waiver + stipend (~$18,000–$35,000/year depending on university and field).",
            "Teaching Assistantship (TA): Funded by the department for teaching duties. Includes tuition waiver + stipend.",
            "Fellowship: Competitive awards (e.g., NSF GRFP, Fulbright) that provide stipend without obligatory teaching/research duties.",
            "Most PhD programs in STEM at US universities are fully funded through RA or TA. Always ask about funding in your application.",
            "External scholarships for Bangladeshi students: Fulbright (US Government), Commonwealth scholarships, USAID-funded programs.",
          ],
        },
        {
          heading: "F-1 Student Visa Process",
          items: [
            "After accepting an admission offer, you will receive Form I-20 from your university (issued by the Designated School Official — DSO).",
            "Pay the SEVIS fee (I-901 fee) at fmjfee.com before your visa interview.",
            "Apply for F-1 student visa at the nearest US Embassy (Dhaka, Bangladesh). Required documents: I-20, DS-160 form, financial documents, admission letter, SEVIS fee receipt, passport, photos.",
            "Schedule your visa interview as early as possible — slots fill up quickly, especially in summer.",
            "Financial proof: You may need to show you can cover 1 year of tuition + living expenses (even if fully funded, having some bank balance is advisable).",
            "Visa processing typically takes 2–5 business days after the interview if approved.",
          ],
        },
        {
          heading: "Preparing to Leave for the USA",
          items: [
            "Book your flight 4–6 weeks in advance. Arrive at least 1–2 weeks before your program begins.",
            "Arrange temporary housing (on-campus dormitory, university-arranged housing, or off-campus apartment) before departure.",
            "Carry essential documents: passport, I-20, admission letter, health records, vaccination certificates (many universities require specific vaccines).",
            "Open a US bank account as soon as possible after arrival. Most universities partner with local banks for student accounts.",
            "Get a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) once you begin work (RA/TA).",
            "Join Bangladeshi student associations at your university or city for community support and networking.",
          ],
        },
        {
          heading: "Cost of Living in the USA",
          items: [
            "Cost of living varies significantly by location: very high in NYC, San Francisco, Boston; moderate in Newark (Delaware), College Park (Maryland); lower in cities like Tuscaloosa (Alabama) or Lafayette (Louisiana).",
            "Typical monthly expenses (graduate student): Rent $700–$1,800; Groceries $200–$400; Transportation $50–$150; Utilities (included in many rentals or $50–$100); Health insurance (often covered by funding).",
            "On a standard graduate stipend ($18,000–$30,000/year), most students can live comfortably in mid-cost-of-living cities.",
            "Cook at home to significantly reduce food expenses. Many universities have South Asian grocery stores nearby.",
          ],
        },
      ],
    },
    {
      id: "other-countries",
      label: "Higher Study in Other Countries",
      comingSoon: true,
    },
  ],
};

export const miscellaneous = {};

export const contact = {
  title: "Contact",
  getInTouch: {
    heading: "Get in touch",
    connectOnlineHeading: "Connect Online",
    emails: [
      { label: "Institutional Email", address: "hasibc@udel.edu" },
      { label: "Personal Email", address: "hasib.buet.ru.eee@gmail.com" },
    ],
    phone: { label: "Cell No.", number: "+13026108296" },
    address: {
      label: "Office Address",
      text: "Office Room No: 243, Dupont Hall, Dept. of ECE, University of Delaware, Newark, Delaware, USA.",
    },
    links: [
      {
        label: "CV PDF",
        href: "/hasib-cheragee-cv.pdf",
      },
    ],
    socialLinks: [
      {
        label: "Facebook",
        href: "https://web.facebook.com/hasib.charagi/",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sheikh-hasib-cheragee-622539335/",
      },
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Sheikh-Hasib-Cheragee",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=IwCbQUkAAAAJ&hl=en",
      },
    ],
  },
};
