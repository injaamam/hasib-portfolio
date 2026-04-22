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

export const higherStudyGuidelines = {};

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
