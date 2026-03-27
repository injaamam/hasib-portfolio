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

export const pageData = {
  home: {
    title: "Hi, I'm Satyaki (SHAT-YUH-KEE)",
    subtitle: "A passionate Power Systems Engineer",
    sections: [
      {
        heading: "Hello.",
        paragraphs: [
          "I am Satyaki Banik, a Graduate Student at the Department of ECE, North Carolina State University, Raleigh, NC, USA (Go Pack!). I also work as a Graduate Research Assistant at the FREEDM Systems Center of North Carolina State University. I obtained my B.Sc. in Electrical and Electronic (EEE) Engineering from Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh in 2021. I joined NC State after serving as an Adjunct Lecturer at the Department of EEE, BUET (alma mater) for one year.",
          "I have been doing my research on planning, operation and control of electrical power systems, especially with high penetration of DERs.  My goal is to establish a research career in power and energy systems diaspore with multidisciplinary collaborations to approach problems related to clean energy and sustainability (focusing on SDGs 7, 11 & 13).",
          "Apart of academics, I often actively volunteer and engage in several extra-curricular activities. Feel free to visit my website to know more.",
        ],
      },
      {
        heading: "Curriculum Vitae (CV)",
        links: [
          {
            label: "View online",
            href: "https://drive.google.com/file/d/18xMvQiFpo6sXHp6dAJmoAOmR93Ce6GPN/view",
          },
          {
            label: "Download PDF",
            href: "https://drive.google.com/uc?export=download&id=18xMvQiFpo6sXHp6dAJmoAOmR93Ce6GPN",
          },
        ],
      },
      {
        heading: "Research Interests",
        list: [
          "Power system operation and control",
          "Dynamic analysis of a power system",
          "Smart grid",
          "Renewable energy",
          "High penetration of DERs in micro/macro grid",
          "Micro-grid control and coordination",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    sections: [
      {
        heading: "Doctor of Philosophy (Ph.D.), Electrical Engineering",
        meta: "August 2022 - Present | North Carolina State University, USA",
      },
      {
        heading: "B.Sc. in Electrical and Electronic Engineering (EEE)",
        meta: "February 2016 - February 2021 | BUET",
        paragraphs: ["CGPA: 3.89 / 4.00 | Rank: 9 / 215 | Top 5% in class"],
      },
      {
        heading: "Major Courses",
        list: [
          "Power System Operation and Control",
          "Power System Protection",
          "Energy Conversion",
          "Control Systems",
          "Linear Algebra",
          "Probability and Statistics",
        ],
      },
      {
        heading: "Software Skills",
        list: [
          "Siemens PSSE, CYME PSAF",
          "AutoCAD + AutoCAD Electrical",
          "Python, C++, MATLAB, Simulink",
          "Arduino, SPICE Circuit Simulation",
        ],
      },
    ],
  },
  professionalExperience: {
    title: "Professional Experience",
    sections: [
      {
        heading: "Graduate Research Assistant",
        meta: "August 2022 - Present | FREEDM Systems Center, NC State University",
        paragraphs: [
          "Contributing to renewable energy delivery and management research across modern power systems and advanced power electronics.",
        ],
      },
      {
        heading: "Graduate Teaching Assistant",
        meta: "August 2022 - Present | Department of ECE, NC State University",
        paragraphs: [
          "Assisted in ECE 200: Introduction to Signals, Circuits and Systems.",
        ],
      },
      {
        heading: "Adjunct Lecturer",
        meta: "March 2021 - May 2022 | BUET",
        list: [
          "EEE 477: Power System Protection",
          "EEE 478: Power System Protection Laboratory",
          "EEE 306: Power System I Laboratory",
          "EEE 484: High Voltage Laboratory",
        ],
      },
    ],
  },
  cv: {
    title: "Curriculum Vitae",
    sections: [
      {
        heading: "Download CV",
        links: [
          {
            label: "Download CV in PDF format",
            href: "https://drive.google.com/uc?export=download&id=18xMvQiFpo6sXHp6dAJmoAOmR93Ce6GPN",
          },
        ],
      },
    ],
  },
  publicationsProjects: {
    title: "Publications / Projects",
    sections: [
      {
        heading: "Publications",
        list: [
          "Inertia Constrained Economic Dispatch in a Renewable Dominated Power System (2021)",
          "Impact of COVID-19 Pandemic on Electricity Generation and Demand Patterns of Bangladesh Power System (2021)",
          "Estimation of Minimum Synchronous Inertia in Renewable Dominated Power System (2019)",
        ],
      },
      {
        heading: "Projects",
        list: [
          "Zonal UFLS Scheme for IEEE Standard 39-bus System (2020)",
          "Low-Cost E-book to Braille Converter (2019)",
          "Voltage Stability Assessment in IEEE Modified 14 Bus System (2018)",
          "Hardware Implementation of a 4-Bit Computer (2018)",
        ],
      },
    ],
  },
  honorsAwards: {
    title: "Honors / Awards",
    sections: [
      {
        heading: "Major Awards",
        list: [
          "Honda Young Engineer and Scientist's (Y-E-S) Award 2019",
          "IEEE Bangladesh Section Best Student Volunteer Award 2019",
          "Gold Award Winner: Home-grown innovations",
          "Winner: IEEE PES Humanitarian Technology Project Design Competition 2021",
          "Winner: Virtual NetHack Contest",
        ],
      },
    ],
  },
  eca: {
    title: "Extra-curricular Activities",
    sections: [
      {
        heading: "University Organizations",
        list: ["Cultural Secretary, Bangladesh Student Association (NC State)"],
      },
      {
        heading: "Social Work",
        list: ["Volunteer, Spordha (April 2016 - Present)"],
      },
      {
        heading: "Hobbies",
        list: [
          "Reading",
          "Travelling",
          "Playing musical instruments: Guitar, Melodica, Keyboard, Harmonica, Ukulele",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    sections: [
      {
        heading: "Get in touch",
        list: [
          "satyaki.banik.bd@gmail.com",
          "sbanik@ncsu.edu",
          "WhatsApp: +8801967403134",
        ],
        links: [
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/satyakibanik/",
          },
        ],
      },
    ],
  },
};
