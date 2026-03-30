export const routes = [
  { href: "/home", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/professional-experience", label: "Professional Experience" },
  { href: "/cv", label: "CV" },
  { href: "/publicationsprojects", label: "Publications/Projects" },
  { href: "/honorsawards", label: "Honors/Awards" },
  { href: "/eca", label: "ECA" },
  { href: "/contact", label: "Contact" },
];

export const home = {
  hero: {
    title: "Hi, I'm Hasib Cheragee",
    subtitle:
      "Lecturer in EEE and Researcher in Electronics, Photonics, and Energy Devices",
    heroImage:
      "https://images.unsplash.com/photo-1589271755419-b813a577ad42?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lkZXxlbnwwfHwwfHx8MA%3D%3D",
    portraitImage: "/hasib-profile-placeholder.svg",
  },
  hello: {
    heading: "Hello.",
    paragraphs: [
      "I am Sheikh Hasib Cheragee, currently serving as a Lecturer in the Department of Electrical and Electronic Engineering at American International University-Bangladesh (AIUB), Dhaka. Alongside teaching, I am pursuing my PhD as a fellow in Electrical and Electronic Engineering at Bangladesh University of Engineering and Technology (BUET).",
      "My academic journey has been centered on electronics, photonics, semiconductor devices, and energy-focused materials. I completed my MSc in Electrical and Electronic Engineering from BUET in August 2023 and earned my BSc in Electrical and Electronic Engineering from the University of Rajshahi in June 2021, graduating first in my class.",
      "I enjoy blending teaching, research, and mentoring. My work spans solar cells, microelectronics, semiconductor device modeling, power electronics, and machine learning applications, and I aim to contribute to impactful research and practical engineering education in Bangladesh.",
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
      "Solar cell and photovoltaic device modeling",
      "Microelectronics and nanotechnology",
      "Semiconductor materials and devices",
      "Wide-bandgap semiconductors",
      "Power electronics",
      "Optoelectronics, photonics, and machine learning",
    ],
  },
  updates: {
    heading: "Updates",
    years: [
      {
        year: "2024",
        items: [
          {
            date: "October 16",
            text: "Joined American International University-Bangladesh (AIUB) as a Lecturer in the Department of Electrical and Electronic Engineering.",
          },
          {
            date: "April",
            text: "Started PhD studies as a fellow in Electrical and Electronic Engineering at BUET.",
          },
          {
            date: "2024",
            text: "Published and presented multiple works on solar cells, semiconductor devices, and load forecasting in journals and IEEE conferences.",
          },
        ],
      },
      {
        year: "2023",
        items: [
          {
            date: "August",
            text: "Completed MSc in Electrical and Electronic Engineering from BUET with a CGPA of 3.71 out of 4.00.",
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
            text: "Graduated first in the class from the University of Rajshahi with a CGPA of 3.95 out of 4.00.",
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
  sections: [
    {
      heading: "PhD Fellow in Electrical and Electronic Engineering",
      meta: "April 2024 - Present | Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
    },
    {
      heading:
        "Master of Science (MSc) in Electrical and Electronic Engineering",
      meta: "August 2023 | Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      paragraphs: [
        "CGPA: 3.71 / 4.00 | Rank: Top 5% in class | Focus: Electronics and Photonics",
      ],
    },
    {
      heading:
        "Bachelor of Science (BSc) in Electrical and Electronic Engineering",
      meta: "June 2021 | University of Rajshahi, Rajshahi, Bangladesh",
      paragraphs: [
        "CGPA: 3.95 / 4.00 | Rank: 1st in a class of 33 students | Focus: Electronics",
      ],
    },
    {
      heading: "Technical Skills",
      list: [
        "Python, MATLAB, C, Arduino",
        "SCAPS-1D, Sentaurus TCAD, Materials Studio, Simulink, Multisim",
        "Microsoft Office and LaTeX",
        "Adobe Photoshop and Adobe Illustrator",
      ],
    },
  ],
};

export const professionalExperience = {
  title: "Professional Experience",
  sections: [
    {
      heading: "Lecturer, Department of Electrical and Electronic Engineering",
      meta: "16 October 2024 - Present | American International University-Bangladesh (AIUB)",
      paragraphs: [
        "Teaching Introduction to Electrical Circuits, Electronic Device, Electrical Machine-2, Electrical Machine-1 Laboratory, Electrical Circuit-2 Laboratory, and Electronic Device Laboratory.",
      ],
    },
    {
      heading: "Lecturer, Department of Computer Science and Engineering",
      meta: "01 June 2023 - 15 October 2024 | State University of Bangladesh (SUB)",
      paragraphs: [
        "Taught Electronic Device and Circuits, Digital Logic Design, Electrical Circuit Analysis, and the corresponding laboratory courses.",
      ],
    },
    {
      heading:
        "Research Fellow, Department of Electrical and Electronic Engineering",
      meta: "01 October 2021 - 01 April 2023 | Bangladesh University of Engineering and Technology (BUET)",
      list: [
        "Worked on device modeling, numerical simulation, and transport-layer optimization for solar cell research.",
        "Contributed to journal and conference publications in photovoltaics, semiconductor devices, and advanced electronic materials.",
      ],
    },
  ],
};

export const cv = {
  title: "Curriculum Vitae",
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
      heading: "Selected Publications",
      list: [
        "Device modeling and numerical study of a double absorber solar cell using a variety of electron transport materials (Heliyon, 2023)",
        "Device modelling and numerical analysis of high-efficiency double absorbers solar cells with diverse transport layer materials (Results in Optics, 2024)",
        "Numerical Design of Non-toxic High-Efficiency Tandem solar cell with distinct hole transport Materials (Thin Solid Films, 2024)",
        "Towards Superior Android Ransomware Detection: An Ensemble Machine Learning Perspective (Cyber Security and Applications, 2024)",
        "A study of IoT-based real-time solar power remote monitoring system (International Journal of Ambient Systems and Applications, 2021)",
      ],
    },
    {
      heading: "Conference Articles and Research Works",
      list: [
        "2-T Non-Toxic Tandem solar cell with Distinct HTL Materials (ICECE, 2022)",
        "2-T Non-Toxic Multijunction solar cell with Diverse ETL materials (ICRPSET, 2022)",
        "Short- and Medium-Term Electrical Load Forecasting in Bangladesh Using Machine Learning Approaches (iCACCESS, 2024)",
        "Modeling and Performance Investigation of Perovskite/MoTe2 solar cell exceeding 44% Efficiency: A SCAPS-1D Simulation (Accepted, 2024)",
        "Potential Charging Techniques for Electric Vehicles Utilizing Photovoltaic Sources in Bangladesh (Accepted, 2024)",
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
        "Bangabandhu Gold Medal Award for securing first position in the Faculty of Engineering, University of Rajshahi",
        "Nominated for the Prime Minister Gold Medal Award 2021 for obtaining the highest CGPA in BSc Engineering in the Faculty of Engineering, University of Rajshahi",
        "Post-Graduation Fellowship at BUET from 01 October 2021 to 01 April 2023",
        "Dean's Award in the academic years 2016-2017, 2017-2018, 2018-2019, and 2019-2020 for excellent academic standing",
        "APEE Reunion 2011 Award received twice for outstanding result in BSc Engineering Part-3 and Part-4 examinations",
        "Scholarship to join the Sakura Science Exchange Program administered by JST, Tokyo, Japan in November 2019",
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
        "Vice-President, BUET Post-graduation Research Alliance (February 2022 - March 2023)",
        "Founding Member, IEEE Rajshahi University Student Chapter",
        "General Secretary, Rajshahi University EEE Association (June 2019 - May 2020)",
      ],
    },
    {
      heading: "Events and Initiatives",
      list: [
        "Organized Research Conclave 2022 (Virtual) on research methodology for BUET Post-graduation Research Alliance members",
        "Organized the Research and Innovation Conclave 2021 (Virtual) under the IEEE Rajshahi University Student Chapter",
        "Organized a two-day electronics workshop for fresher students at Rajshahi University EEE Association",
      ],
    },
    {
      heading: "Additional Activities",
      list: [
        "Participated in PGRA Shahid Smriti Hall Games 2022 and became runner-up in badminton",
        "Joined the Sakura Science Exchange Program in Tokyo, Japan",
        "Actively engaged in academic collaboration, student mentoring, and technical event organization",
      ],
    },
  ],
};

export const contact = {
  title: "Contact",
  getInTouch: {
    heading: "Get in touch",
    list: [
      "sheikh.hasib@aiub.edu",
      "hasib.buet.ru.eee@gmail.com",
      "Room no: DS301-A, Dept. of EEE, American International University-Bangladesh, Dhaka-1229, Bangladesh",
    ],
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
        href: "https://www.researchgate.net/",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=IwCbQUkAAAAJ&hl=en",
      },
    ],
  },
};
