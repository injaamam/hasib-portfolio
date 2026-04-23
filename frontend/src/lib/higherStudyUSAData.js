// ── Section 1: My Profile & Visa Interview ──────────────────────────────────

export const profileData = {
  visaInfo: {
    type: "F1",
    status: "Issued",
    university: "University of Virginia",
    program: "Ph.D. in Electrical & Computer Engineering",
    session: "Fall 2023",
    funding: "Full financial support (Graduate Research Assistantship (GRA) + Health Insurance)",
  },

  interviewDetails: {
    appointment: "June 18, 2023, 10:15 AM (Rescheduled twice from July 30, 2023, 10:30 AM)",
    priority: "Regular",
    ceacStatus: "Approved on June 19 · Issued on June 21",
    passportCollection: "Email received on June 22 · Collected on June 25",
    documentsChecked: "Interview appointment letter, passports (old and new), I-20",
  },

  documentsCarried: [
    "Interview appointment letter",
    "I-20 (signed)",
    "SEVIS fee confirmation",
    "DS-160 confirmation",
    "Passports (old and new)",
    "Offer letter from UVA",
    "BSc certificates",
    "GRE score card",
    "IELTS score card",
    "Visa payment slip",
    "Covid-19 vaccination card",
    "Passport size photos (2 copies)",
  ],

  securityCheckpoints: [
    { id: "01", location: "Entry Gate", check: "Visa Interview Appointment Letter" },
    { id: "02", location: "Entrance of Embassy Building", check: "Appointment Letter, Passports" },
    { id: "03", location: "Inside Embassy Building", check: "File and Documents + Body Scanned" },
    {
      id: "04",
      location: "Beside Waiting Room",
      check: "Bangladeshi staff checked Appointment Letter and Passport (DS-160 ID Number with Barcode attached to back of new Passport)",
    },
    { id: "05", location: "Counter 12 (Bangladeshi staff)", check: "Scanned Passport + Took Fingerprints" },
  ],

  interviewStory: [
    "I arrived at the embassy one hour earlier than my scheduled appointment. As I joined the queue outside, I patiently waited for my turn. However, I encountered a slight difficulty when the staff at the entrance asked for my passport and appointment confirmation. I rescheduled my visa appointment from July 30th to June 18th, but somehow I failed to notice the date on my printed confirmation and brought the earlier one. Initially, they hesitated to allow me inside even though my name was on their list. Determined not to miss my interview, I made multiple requests, pleading with them to reconsider. Eventually, they advised me to seek permission from an officer stationed outside.",
    "As I approached the officer, I noticed a crowd of 12 to 15 people surrounding him, each with their own concerns, causing delays of 5 to 10 minutes per person. It became clear that waiting for my turn would make it nearly impossible for me to make it to my interview on time.",
    "Taking a chance, I decided to use my wit and returned to the entrance, confidently informing the staff that the officer had granted me permission to attend the interview without any issue. My confident demeanor convinced them, and without double-checking, they allowed me to enter the main building. (So remember the importance of checking, double-checking, and triple-checking your documents.)",
    "At the first counter, a Bangladeshi person examined my passport and asked for the name of the university and program I intended to pursue. Moving on to the next counter, I provided my fingerprints as part of the procedure. Afterward, I had to wait for approximately 5 minutes before my interview.",
    "Overall, my time inside the embassy lasted around 30 to 40 minutes. Despite the initial hiccups, I successfully navigated the process. It was a valuable learning experience that highlighted the importance of preparedness and adaptability when dealing with such situations.",
  ],

  conversation: {
    note: "Counter 8: A young white American lady. The girl before me was fully funded as well and got approval. [~2/3 minutes]",
    exchanges: [
      { speaker: "Me", text: "Hello." },
      { speaker: "VO", text: "Hello, kindly pass me your I-20 and Passports." },
      { speaker: "VO", text: "(While checking them) So, why did you choose this particular university?" },
      { speaker: "Me", text: "Told. (Talked about the available research facilities and how they align with my research interests.)" },
      { speaker: "VO", text: "Have you already selected your research topic?" },
      { speaker: "Me", text: "Yes, I have. (Briefly discussed my intended research topic.)" },
      { speaker: "VO", text: "Have you visited any other country?" },
      { speaker: "Me", text: "Yes, I have. I went to India once before COVID-19." },
      { speaker: "VO", text: "Are you currently married or single?" },
      { speaker: "Me", text: "No, I am not married yet." },
      {
        speaker: "VO",
        text: "(Smiling) Virginia is a very beautiful place — make sure to bring your wife along when you do get married. Your visa is approved. Collect it within two weeks.",
      },
      { speaker: "Me", text: "Thank you very much. I will keep it in mind. I hope you have a great day." },
      { speaker: "VO", text: "You too." },
    ],
  },

  education: {
    program: "B.Sc. in EEE",
    graduated: "May 2022",
    cgpa: "3.60 / 4.00",
    thesis: "Nanophotonics, Nanoplasmonics",
    institution: "BUET",
    publications: "0  (at time of application)",
  },

  testScores: [
    {
      label: "GRE",
      overall: "315 / 340",
      breakdown: [
        { name: "Quantitative", score: "167 / 170" },
        { name: "Verbal", score: "148 / 170" },
        { name: "Analytical Writing", score: "4.0 / 6.0" },
      ],
    },
    {
      label: "IELTS",
      overall: "8.0 / 9.0",
      breakdown: [
        { name: "Listening", score: "9.0" },
        { name: "Reading", score: "8.5" },
        { name: "Speaking", score: "7.0" },
        { name: "Writing", score: "6.5" },
      ],
    },
  ],

  workExperience: [
    "Lecturer (PT): Bangladesh University of Textiles — 5 months",
    "Lecturer: Canadian University of Bangladesh — 5 months",
  ],

  universityList: {
    intro:
      "Applied to a total of 10 universities — 7 in the USA for a Ph.D. program and 3 in Canada for an M.Sc. program. Received acceptance letters from 6 universities and rejections from 4.",
    usa: [
      {
        name: "University of Virginia (UVA)",
        outcome: "Accepted — Ph.D.",
        details: "Fee Waiver (BD) · GRA + Health Insurance",
        accepted: true,
      },
      {
        name: "North Carolina State University (NCSU)",
        outcome: "Accepted — Ph.D.",
        details: "GTA + GMA + Health Insurance (semester fee required)",
        accepted: true,
      },
      {
        name: "University of Houston (UH)",
        outcome: "Accepted — Ph.D.",
        details: "GRA (Health Insurance not covered)",
        accepted: true,
      },
      {
        name: "Mississippi State University",
        outcome: "Accepted — Ph.D.",
        details: "GRA + Health Insurance",
        accepted: true,
      },
      {
        name: "University of Maryland–College Park",
        outcome: "Rejected",
        details: "Centrally Applied · Fee Waiver",
        accepted: false,
      },
      {
        name: "University of Wisconsin–Madison",
        outcome: "Rejected",
        details: "Got Positive Interview",
        accepted: false,
      },
      {
        name: "Boston University (BU)",
        outcome: "Rejected",
        details: "Centrally Applied · Fee Waiver",
        accepted: false,
      },
    ],
    canada: [
      {
        name: "University of British Columbia (UBC)",
        outcome: "Accepted — MS",
        details: "Fee Waiver (BD) · GTA + 50% Tuition Fee Waiver",
        accepted: true,
      },
      {
        name: "McGill University",
        outcome: "Accepted — MS",
        details: "GTA (No Tuition Fee Waiver) · Scholarship: No result",
        accepted: true,
      },
      {
        name: "University of Waterloo",
        outcome: "Rejected",
        details: "Centrally Applied",
        accepted: false,
      },
    ],
    interviewQuestionsNote:
      "You can find possible Interview Questions in the Miscellaneous section.",
    interviewQuestionsLink: "/miscellaneous/interview-questions",
  },
};

// ── Section 2: My Journey ────────────────────────────────────────────────────

export const journeyParagraphs = [
  "In this section, I would like to take a more personal approach and share my experiences and insights from this year-long journey. I understand that it may be lengthy, so feel free to skip ahead if you prefer. Nevertheless, I believe that sharing my perspective can offer valuable insights into the challenges, triumphs, and lessons I've experienced throughout this journey. It is my hope that by gaining a deeper understanding of my experiences, you will feel empowered and equipped to navigate your own path without any sense of inadequacy.",
  "As soon as you finish your undergraduate studies, you often find yourself standing in the middle of confusion. Suddenly there are countless possibilities in front of you. You might feel confident about what you want to do next, or you might feel completely lost. Should I look for a job and settle in Bangladesh? Should I continue my studies here? Or should I take the risk of going abroad? And if I do go abroad, which country should I choose? Trust me, I have been exactly where you are now.",
  "When I graduated in May 2022, I was convinced that higher studies abroad were the right path for me. But making that decision was not easy, especially when it came to my parents. My father strongly wanted me to stay in Bangladesh and prepare for BCS to pursue a government job. I was constantly swimming against the current. Two worries never left my mind: I had no publications and my CGPA was only average. I had to choose between starting a Master's degree at BUET or committing fully to the dream of studying abroad. In the end, I chose the latter.",
  "There is no clear right or wrong choice in such situations. Success and failure exist on both paths. Everything depends on how you shape your journey. But every decision has its cost, and for me that cost was heavy, both mentally and physically.",
  "I booked my GRE for September and moved out of my university hall into a rented apartment with friends. Instead of hunting for a job in an already saturated market, I continued tutoring and started preparing using GregMat+. Looking back, it was one of the best decisions I made.",
  "Then July arrived with a major setback. I became seriously ill and had to be admitted to the ICU. That phase was terrifying and exhausting, but I somehow managed to complete my GRE preparation and sit for the exam. I was satisfied with my score, though I still wonder how much better I could have done if I had been healthy.",
  "After that, I scheduled my IELTS for October. Around the same time, I had to move to a new apartment, which made preparation stressful, but IELTS felt easier than GRE. Finishing GRE first made the whole process less intimidating.",
  "At first, I was planning to study in Canada because the permanent residency pathway seemed simpler. But funding became a serious concern. Canadian universities rarely offer direct funded PhD positions, and funded Master's programs are limited unless your profile is exceptional. Everything felt uncertain.",
  "So I started emailing professors in the U.S. as well. I contacted more than 80 professors, but only managed to secure one interview in October. It was heartbreaking.",
  "Meanwhile, I was collecting Letters of Recommendation from BUET professors. Anyone who has done this knows how challenging it is. It requires constant communication, scheduling meetings, reminding busy professors, and sometimes drafting letters yourself. Their tight schedules added more pressure, but I kept going and ended up collecting more LoRs than required.",
  "After IELTS, I joined CUB as a full-time lecturer. In early November, a professor from Mississippi State University contacted me after seeing my LinkedIn profile and test scores and offered me a lab position. That message lifted my spirits, but the months that followed were emotionally draining. I was working full time, waiting for replies, and watching deadlines pass.",
  "In hindsight, I realize I limited myself too much by focusing mainly on top-ranked universities. I applied to seven schools: McGill and Waterloo in Canada, and UH, UMD, UW, NCSU, and BU in the U.S. I only truly believed in my chances at two of them, which left me anxious and defeated.",
  "January finally brought some hope. I interviewed with a professor at UBC and applied there. I also applied to MSSU and continued contacting professors. Then I got an interview from the University of Wisconsin, one of my dream schools. The professor was impressed, and I left the meeting full of hope. Around the same time, I received acceptance letters from McGill and Houston. I immediately requested my I-20 from Houston and booked my visa appointment, which later turned out to be a lifesaver.",
  "McGill did not initially offer a scholarship, which made my choice between the U.S. and Canada harder. In February, I resigned from my job at CUB because it had become too overwhelming. In March, I started working part time at BUTEX. That month brought both rejections and good news. I was rejected by Boston, UMD, and Waterloo, but accepted at MSSU and NCSU, along with a graduate merit scholarship. Still, the rejection from UW-Madison hurt deeply.",
  "Then came UBC. Not only was I accepted, but I also received a 50 percent tuition waiver. I had to make the hardest decision yet — Canada or the U.S. In the end, I chose the U.S. because I wanted full funding and stronger networking opportunities.",
  "In mid-April, I realized something I had completely overlooked: going where my friends were. One of my friends was heading to UVA, and I learned that a professor there was still searching for students. I reached out, interviewed, and was encouraged to apply even though the deadline had passed. Soon after, I received my offer from UVA. I accepted immediately, secured graduate housing, and was welcomed into the Bangladeshi community there.",
  "Looking back, I am overwhelmed with gratitude. My parents, friends, seniors, teachers, and especially my supervisor never stopped believing in me. The journey was painful, uncertain, and exhausting, but I kept going. And now, I am finally ready to begin the next chapter of my life.",
];

// ── Section 3: Suggestions & Guidelines ─────────────────────────────────────

export const guidelinesData = {
  intro:
    "First and foremost, take a deep breath and don't panic. Every step in this endeavor will indeed be challenging and require extensive research. Trust in the greater plan set forth by a higher power. Rest assured that your path will unfold before you, leading you to where you need to be. Take it as a full-time job.",

  timeline: {
    title: "Suggested Timeline (After Graduation)",
    subtitle: "For Fall Admission — TL;DR",
    items: [
      "Open a bank account (EBL/Brac) and obtain a dual currency card.",
      "Build your CV, LinkedIn, and Portfolio.",
      "Schedule your GRE for August or at least September.",
      "Reach out to your professors for Letters of Recommendation (LoRs) within August.",
      "Collect all your official documents and papers as soon as possible.",
      "Shortlist universities before September.",
      "Take your IELTS/TOEFL exam in September.",
      "Contact Graduate Coordinators in September and October.",
      "Start emailing professors in September or October, right after receiving your GRE scores.",
      "Begin crafting your Statement of Purpose (SoP) by November and complete it by December.",
      "Finalize your university choices in December.",
      "Complete your applications within December/January, aiming to submit early for earlier decisions.",
      "Continue reaching out to professors until April while awaiting results.",
      "Once you receive your desired offer, accept it, get the I-20, and book your visa interview from the CGI portal as early as possible (preferably before June).",
      "Fill up DS-160 and pay SEVIS fees at least a week before your interview date.",
      "Book your flight ticket as soon as possible for the best prices (preferably before or in early May).",
      "Manage Dollars as early as possible.",
      "Manage housing within June/July.",
      "Start purchasing necessary items in July.",
      "Spend quality time with your friends and family as much as possible.",
    ],
  },

  sections: [
    {
      id: "before-graduation",
      title: "I. Before Graduation",
      intro:
        'Keep in mind: "If anyone chases two hares together, they will not be able to catch any of them." Don\'t try to do everything. Focus on just five things during undergrad.',
      points: [
        {
          heading: "Getting your CGPA up as much as possible",
          text: "I cannot stress enough how crucial CGPA is in the entire process. Your university and professors will prioritize and assess this among the first things. However, if your current CGPA is not up to the mark, don't underestimate yourself. It may seem challenging at first, but with enough effort and dedication, you can also achieve your goals.",
        },
        {
          heading: "Try to do fruitful Research & at least 1–2 Publications",
          text: "Having a compelling research topic and a few publications under your belt will significantly elevate your standing among the pool of applicants.",
        },
        {
          heading: "Do something Extracurricular",
          text: "Including a few extracurricular activities in your CV can also make a positive impact.",
        },
        {
          heading: "Learn Matlab, Python, Machine Learning, and Canva",
          text: "I highly recommend exploring opportunities in the field of Machine Learning as it is considered the future of technology.",
        },
        {
          heading: "Curate your CV, LinkedIn, Twitter/X, and Portfolio",
          text: "Start building your Academic CV as early as possible. Utilize LinkedIn to showcase your academic and career achievements. Twitter/X can also be a powerful tool for reaching out to potential professors with lab openings. You may also create a portfolio website — it can help you stand out, though it is not mandatory.",
        },
      ],
      note: "Don't go for GRE or IELTS — not necessary before you finish your undergrad.",
    },

    {
      id: "right-after-graduation",
      title: "II. Right After Graduation",
      intro:
        "First, give yourself some time to reflect on your interests, passions, and long-term goals. Pursuing higher education is a significant commitment of time, effort, and resources.",
      points: [
        {
          heading: "Get your necessary papers sorted",
          items: [
            "NID and Passport",
            "Certificates (S.S.C., H.S.C.)",
            "B.Sc. Certificates and Transcripts",
            "Other necessary certificates from the university",
            "Sealed certificate and transcripts (at least 2 copies)",
          ],
        },
        {
          heading: "Open a bank account and get a dual currency card",
          text: "EBL or Brac Bank is preferred.",
        },
        {
          heading: "Join the NexTop-USA Group",
          text: "Rest assured that you will receive the support and assistance you need. Don't hesitate to seek help whenever necessary.",
        },
        {
          heading: "Book your GRE in August",
          text: "While the importance of the GRE in evaluation metrics may be diminishing over time, a strong GRE score can still significantly enhance an average profile. Note: ETS has recently introduced a shorter version of the GRE.",
        },
        {
          heading: "IELTS/TOEFL in September",
          text: "Unlike the GRE, IELTS/TOEFL is a necessary requirement to assess your English language proficiency. I recommend avoiding job searching before taking the GRE, as multiple rejections can negatively impact your confidence.",
        },
        {
          heading: "Tools that will help you throughout",
          text: "Getting premium accounts for Quillbot and Grammarly will be highly beneficial. The utilization of ChatGPT during this journey cannot be overstated. Also, learn LaTeX — it's necessary for any type of formal document writing and formatting.",
        },
      ],
    },

    {
      id: "preparation",
      title: "III. Preparation for Application",
      intro:
        "During your preparation for the GRE, begin your research on prospective schools and professors. Use US News Ranking and QS Ranking as primary sources. Creating a Google spreadsheet will prove invaluable for organizing all essential data, links, and resources.",
      subsections: [
        {
          id: "listing-schools",
          title: "a. Listing Schools & Professors",
          content: [
            "There is no guaranteed ranking or set of schools that ensure admission. The admissions process can be unpredictable — a person with a moderate profile may secure acceptance at top schools, while someone with an impressive profile may receive no offers.",
            "If you belong to the top-tier group, aim for Ivy League schools but also consider mid-top and mid-range options. Even if you are an average student, targeting schools around the 50th ranking can be a good starting point, but explore higher-ranked institutions as well. If your profile is below average, focus on schools beyond the 50th or 100th ranking but don't completely disregard higher-ranked institutions.",
            "In your spreadsheet, follow subject-wise rankings from US News. In the first tab, list universities with: name, website, city, state, ranking, department website, graduate coordinator email, minimum requirements, application fee, portal link, deadlines, tuition, and alumni information.",
            "On another tab, list weather conditions, living costs, crime rate, living standards, amenities, and industry information for cities you are considering.",
            "On the most important tab, list potential professors with: University, Professor Name, Research Field, Specific Topics, Email, Professor's Website, Lab Openings, Known Seniors in the Lab, Google Scholar Link, LinkedIn Profile, Email Date, Reply, Follow-up Date, and Remarks.",
          ],
          subNote: {
            heading: "Fee Waivers",
            text: "Application fees can range from $50 to $250. Ways to obtain fee waivers: attending graduate open houses, using a waiver code, having the fee waived by a professor, demonstrating financial hardship, qualifying for location-based waivers, applying before an early deadline, or contacting financial aid departments.",
          },
        },
        {
          id: "emailing-professors",
          title: "b. Emailing Professors",
          intro: "Welcome to depression!",
          content: [
            "Start emailing a professor from every university daily. Keep a gap of at least two days between contacting different professors from the same university.",
          ],
          points: [
            {
              heading: "Personalization",
              text: "Tailor each email to the specific professor and university. Mention their research work that interests you.",
            },
            {
              heading: "Conciseness",
              text: "Keep your email concise and to the point. Professors receive numerous emails, so a clear and succinct message is more likely to be read.",
            },
            {
              heading: "Politeness and Respect",
              text: 'Address the professor respectfully. Use "Dr. X / Professor X" and avoid overly casual language.',
            },
            {
              heading: "Introduce Yourself",
              text: "Briefly introduce yourself, mentioning your academic background, major achievements, and research interests.",
            },
            {
              heading: "Explain Your Interest",
              text: "Clearly articulate why you are interested in their research group. Show that you have done your research about their work.",
            },
            {
              heading: "Highlight Your Skills",
              text: "Emphasize your relevant skills, experiences, and publications (if any). Demonstrate how your background aligns with their research goals.",
            },
            {
              heading: "Request for Meeting",
              text: "Politely ask for a meeting or call to discuss potential research opportunities. Be flexible about timing.",
            },
            {
              heading: "Attach Relevant Documents",
              text: "Include your CV, academic transcripts, relevant publications, and any other documents that showcase your qualifications.",
            },
            {
              heading: "Follow-Up Plan",
              text: "Mention that you will follow up on a specific date. Limit follow-ups to a maximum of two times.",
            },
            {
              heading: "Proofreading",
              text: "Carefully proofread your email for grammar and spelling errors. A well-written email reflects your attention to detail.",
            },
            {
              heading: "Scheduling Emails",
              text: "Send emails during professors' early work hours on weekdays. Avoid weekends and holidays. Take time zone differences into account.",
            },
            {
              heading: "Use Gmail Templates",
              text: "Save a properly formatted email as a template in Gmail. Key variables: Degree (M.Sc./Ph.D.), Lab Group, Prof Name, Univ Name, Research Interest, Topics, Signature, Attachments.",
            },
          ],
          note: "Expect a response rate of around 10% or less, with a positive response rate of 2–3%. Don't get disheartened — it only takes one positive response to open doors.",
        },
        {
          id: "professor-interview",
          title: "c. Interview with Professor",
          content: [
            "Congratulations on securing an interview! This is a crucial step in your graduate school journey.",
          ],
          points: [
            {
              heading: "Research the Professor",
              text: "Familiarize yourself with the professor's research, publications, and current projects. Understand their area of expertise.",
            },
            {
              heading: "Understand the Program",
              text: "Be prepared to discuss how the program aligns with your academic and career goals.",
            },
            {
              heading: "Prepare Questions",
              text: "Anticipate questions the professor may ask and practice your responses. Prepare thoughtful questions about their research and expectations.",
            },
            {
              heading: "Be Professional",
              text: "Dress appropriately and be punctual. For virtual interviews, ensure a quiet and well-lit environment.",
            },
            {
              heading: "Showcase Your Achievements",
              text: "Highlight your skills, experiences, and achievements. Discuss relevant publications, projects, and courses. A slide presentation can significantly enhance your presentation.",
            },
            {
              heading: "Demonstrate Compatibility",
              text: "Showcase how your research interests align with the professor's work and how you can contribute to their research group.",
            },
            {
              heading: "Be Enthusiastic and Confident",
              text: "Show genuine enthusiasm for the opportunity. Confidence in your abilities makes a positive impression.",
            },
            {
              heading: "Follow Up",
              text: "After the interview, send a thank-you email expressing your appreciation and reiterating your interest in the program.",
            },
          ],
        },
        {
          id: "lor",
          title: "d. Managing LoRs",
          isLink: true,
          link: "/miscellaneous/letter-of-recommendations",
          note: "Detailed guidance on managing Letters of Recommendation has been covered in the Miscellaneous section.",
        },
        {
          id: "sop",
          title: "e. Writing SoP",
          isLink: true,
          link: "/miscellaneous/statement-of-purpose",
          note: "Detailed guidance on writing your Statement of Purpose has been covered in the Miscellaneous section.",
        },
        {
          id: "cover-letter",
          title: "f. Writing Cover Letters",
          isLink: true,
          link: "/miscellaneous/cover-letter",
          note: "Detailed guidance on writing Cover Letters has been covered in the Miscellaneous section.",
        },
        {
          id: "finalizing-universities",
          title: "g. Finalizing Universities",
          content: [
            "Factors to consider when finalizing your university application list:",
          ],
          points: [
            { text: "Got interviewed and professor was super enthusiastic." },
            { text: "Got interviewed, and although the professor's response was vague, you managed only a few interviews." },
            { text: "Didn't get interviewed, but the professor showed strong interest and encouraged you to apply." },
            { text: "Have seniors in the lab you are applying to, who can provide guidance and support." },
            { text: "Have relatives living in the state or near the university." },
            { text: "Received fee waivers for application — keep in mind these universities may have intense competition." },
            { text: "Leap of Faith: Sometimes taking a leap of faith is necessary when applying to a university that may be a stretch but aligns with your aspirations." },
          ],
        },
      ],
    },

    {
      id: "applying",
      title: "IV. Applying to Universities",
      intro:
        "If you have gathered all the essential documents (CV, LoRs, SoP, transcripts, GRE scores, IELTS/TOEFL scores, passport, and application fees) and chosen your universities, it is time to begin the application process. The first application can take 3–4 days to complete, but the process becomes smoother with each subsequent application.",
      points: [
        {
          heading: "Letters of Recommendation",
          text: "You may need to mention more than three professors' names if the application portal allows it. Even if any three professors submit their LoRs, your application will be considered complete.",
        },
        {
          heading: "Test Scores",
          text: "Send your test scores as soon as possible from each test's individual portal — the processing and delivery can take some time.",
        },
        {
          heading: "Payment",
          text: "For payments, it is essential to have a dual currency card, especially for applicants living in Bangladesh.",
        },
        {
          heading: "Submit Early",
          text: "Do not wait until the application deadline. Submitting ahead of time demonstrates your proactive approach and allows you to address any unforeseen issues.",
        },
      ],
      subsections: [
        {
          id: "department-switch",
          title: "Department / Interest Switch",
          content: [
            "The question of whether you can change your department/field of interest is not straightforward. Unless it is absolutely necessary, I advise against experimenting with a department switch. However, it is not impossible to switch if you can persuade a professor who can advocate for you with the admission committee.",
            "My suggestion: If a professor assures you, you can apply to a different department. If you want to experiment, play it safe — don't limit applications to just one department; keep some safe options open in your own field as well.",
          ],
        },
        {
          id: "central-application",
          title: "My View on Central Application",
          content: [
            "A central application means applying to a university without prior contact or positive feedback from any professor.",
            "If you have a mid or below-average profile, I do not recommend it (unless you have a fee waiver). If you have an outstanding profile, you can apply, but there is no guarantee of acceptance if you cannot secure recommendations from professors before decisions are made.",
          ],
        },
        {
          id: "waiting-results",
          title: "a. Waiting for Results",
          content: [
            "As you patiently wait, resist the urge to compare your progress to others. Focus on maintaining a positive mindset and continue to pursue other opportunities and goals. Use this waiting period as a time for self-reflection and personal growth.",
            "I highly recommend staying clear of Grad Cafe when seeking information about decisions from specific universities. It is nothing more than a brain-draining pressure cooker that can leave you feeling overwhelmed and discouraged.",
          ],
        },
        {
          id: "big-decision",
          title: "b. The Results & Time to Make the Big Decision",
          content: [
            "Take a moment to breathe deeply. You have experienced numerous challenges, breakdowns, reality checks, and sleepless nights. Some of the universities you aspired to may have rejected your application — dealing with rejections can be tough, but they are a natural part of the process.",
          ],
          points: [
            { heading: "Allow Yourself to Feel", text: "It's okay to feel disappointed or sad about a rejection. Give yourself permission to acknowledge and process these emotions." },
            { heading: "Don't Take It Personally", text: "A rejection does not define your worth or abilities. Admissions decisions are often influenced by various factors beyond your control." },
            { heading: "Reflect and Learn", text: "Take the opportunity to reflect on your application and identify areas for improvement. Use feedback constructively to strengthen future applications." },
            { heading: "Keep Things in Perspective", text: "One rejection does not determine your entire academic or professional journey. There are numerous opportunities and paths available." },
            { heading: "Explore Alternatives", text: "If your dream universities have rejected you, explore other options that align with your academic and career aspirations." },
            { heading: "Seek Support", text: "Reach out to friends, family, mentors, or support networks who can provide encouragement and perspective." },
            { heading: "Stay Determined and Persevere", text: "Use setbacks as motivation to work harder, refine your goals, and strive for excellence." },
          ],
          note: 'For schools that accept you, consider: Academic Reputation, Research Opportunities, Faculty and Mentors, Funding and Scholarships, Location and Campus Life, Alumni Network, and Personal Fit. "The lone wolf dies but the pack survives." — If you have multiple offers, recommend your friend to professors whose offers you decline.',
        },
        {
          id: "i20",
          title: "c. Get the I-20 Fast",
          content: [
            "Once you have accepted the offer and sent the signed documents, wait for the I-20. The processing time can vary from 2–3 days up to a month. If delayed, communicate with your graduate coordinator and supervisor to expedite the process.",
            "Pro tip: When the first university sends you their acceptance letter, obtain the I-20 from them and use it to apply for your visa, even if you don't intend to attend that university. Simply book your visa slot, inform the first university before April 15th, and update your university choice in all relevant portals shortly before your visa interview.",
          ],
        },
        {
          id: "physical-documents",
          title: "d. Collecting & Sending Physical Copies",
          content: [
            "After selecting your preferred university, promptly accept the offer and submit the required documents. Here is the process for sending BSc transcripts from BUET:",
          ],
          points: [
            { heading: "Obtain Sealed Certificates and Transcripts", text: "Visit the Comptroller's office at BUET before 4 PM. Bring required photocopies and pay 200 tk per copy (50 tk + 150 tk). Regular processing takes 4–5 working days; same-day processing costs an extra 500 taka." },
            { heading: "Choose a Reliable Courier Service", text: "Select DHL, FedEx, or UPS (all have branches at Katabon). Visit Saturday–Thursday before 7 PM. Typical delivery takes 3–5 days." },
          ],
        },
        {
          id: "health-vaccination",
          title: "e. Necessary Health Reports & Vaccination",
          content: [
            "Before your arrival at any school, fulfill certain vaccination and testing requirements. Tests and immunizations can be acquired at the lowest cost from Bangabandhu Sheikh Mujib Medical University (PG Hospital). Ibn Sina Diagnostic and Imaging Center, Japan Bangladesh Friendship Hospital, and icddr,b also provide these services.",
          ],
        },
        {
          id: "health-checkups",
          title: "f. Necessary Health Checkups",
          content: [
            "It is strongly advised to undergo a comprehensive full-body checkup and necessary medical procedures before departing for the USA. Some medical expenses may not be covered by your health insurance, and healthcare costs in the USA can be prohibitively expensive. Taking these precautions can help you avoid unexpected financial burdens.",
          ],
        },
      ],
    },

    {
      id: "visa",
      title: "V. Visa Processing",
      subsections: [
        {
          id: "ds160",
          title: "a. Fill up DS-160 Form",
          content: [
            "Upon receiving your I-20, promptly begin filling out your DS-160 form for Non-immigrant Visa.",
            "You have a total of 30 days to complete the application form from the moment you first open it. Once you submit the form, you won't be able to make any further edits — starting an entirely new application is required. If you need to start over, retrieve your previous form and select the option to create a new application.",
          ],
          link: { label: "CEAC Portal", href: "https://ceac.state.gov/genniv/" },
        },
        {
          id: "visa-photo",
          title: "b. Visa Photo",
          content: [
            "When applying through DS-160, have a visa photo ready. Obtain both a physical copy from your photographer and a soft copy for online submission. Ensure the photo meets all US visa photo requirements.",
          ],
        },
        {
          id: "fees",
          title: "c. Pay Visa Fee & SEVIS Fee",
          content: [
            "You are required to make two dollar payments: the visa interview booking fee ($185) and the SEVIS fee ($350). Pay the visa slot booking fee as soon as possible to secure your interview slot. The update process may take 2–3 days before available slots are displayed. Only EBL (Eastern Bank Limited) accepts this payment.",
            "For the SEVIS fee, pay at least a week before your visa interview. Due to a Bangladesh Bank limit of $300, you may need to apply for the window to be opened or seek assistance from someone with an international account. You can proceed with booking your interview even without paying the SEVIS fee.",
          ],
          steps: [
            "Endorse your card for dollars by visiting your EBL branch (bring your passport).",
            "Visit ebl.com.bd and navigate to 'Forms and Downloads'. Download and fill out the Online Declaration Form.",
            "Go to the EBL Query and Complain Management Cell. Enter your registered email and follow the steps (an OTP will be sent).",
            "Write a note (within 250 words) clearly stating the purpose of your transaction.",
            "Attach: the I-901 (SEVIS) review form (with your name and transaction amount) and the filled Online Declaration Form.",
            "Submit the form and wait for a response (may take a couple of days).",
            "If approved, you will receive an SMS notification. If additional documents are required, upload them following the same procedure.",
          ],
          links: [
            { label: "Pay SEVIS Fee", href: "https://www.fmjfee.com/i901fee/index.html" },
            { label: "EBL Bank", href: "https://www.ebl.com.bd/" },
          ],
        },
        {
          id: "schedule-interview",
          title: "d. Schedule the Visa Interview",
          content: [
            "Now that you have paid your Visa Interview fee, the window opens. You may feel overwhelmed when you see that all available dates are after your program start date — take a deep breath, everyone eventually gets a visa interview slot.",
            "Join the following Telegram groups to stay updated on slot openings and act swiftly when desired slots open. You are allowed to reschedule twice for regular interview dates. If no regular slot is available, apply for an Emergency Request (ER) — write a well-explained reason and send an email. If accepted, you will be given an emergency slot (which can be rescheduled once).",
          ],
          links: [
            { label: "CGI Portal", href: "https://atlas.my.salesforce-sites.com/?language=English&country-Bangladesh" },
            { label: "US-F1 Slot Updates (Telegram)", href: "https://t.me/+NEcX-i-m1_9jMTU1" },
            { label: "HSD For USA (Telegram)", href: "https://t.me/+hKTnz5q8IRZjYTJl" },
            { label: "Refused Slot Updates (Telegram)", href: "https://t.me/+DoBVbJHY6-tiNzE9" },
            { label: "Emergency Slot Updates (Telegram)", href: "https://t.me/+1xljzi1jOVA5OTQ1" },
          ],
        },
        {
          id: "visa-interview",
          title: "e. Appear in Your Visa Interview",
          content: [],
          points: [
            { heading: "Review your application", text: "Familiarize yourself with the information you provided in your visa application." },
            { heading: "Research the process", text: "Understand the typical procedures and requirements. The NexTop USA group is a goldmine of information. Be punctual." },
            { heading: "Practice common questions", text: "Prepare responses for questions about your purpose of visit, ties to your home country, ability to finance your trip, and plans after your stay." },
            { heading: "Organize your documents", text: "Gather all necessary documents: passport, DS-160 confirmation page, visa fee payment receipt, I-20, and supporting documents." },
            { heading: "Be honest and concise", text: "Provide clear and honest answers. Avoid providing unnecessary information or rambling. Keep your answers concise and to the point." },
            { heading: "Demonstrate strong ties to Bangladesh", text: "Highlight your strong connections and commitments to your home country — family, employment, property, or educational prospects." },
            { heading: "Show proof of financial stability", text: "Provide evidence of your financial capacity to support your trip and stay in the US — bank statements, sponsorship letters, etc." },
            { heading: "Be confident and respectful", text: "Maintain a confident and positive demeanor. Greet the visa officer politely." },
            { heading: "Stay calm and composed", text: "It is natural to feel nervous, but try to remain calm. Preparation and confidence will help you make a good impression." },
          ],
          links: [
            { label: "US Embassy (Map)", href: "https://goo.gl/maps/JCXbGpgFUmz1xHyM8" },
          ],
          note: "In case of a visa refusal or Administrative Processing (AP), seek assistance from the NexTop USA Group.",
        },
        {
          id: "collect-passport",
          title: "f. Collect Your Passport",
          content: [
            "After visa approval, visit VFS Global to collect your visa (unless you opted for home delivery). After 3–4 days of issuance, you will receive an email that your passport is ready for collection. Collect between 10 AM and 4 PM on office days. Bring a photocopy of your passport and the DS-160 confirmation page.",
            "You can also authorize someone to collect the visa on your behalf. Check visa status by emailing your passport number to passportstatus@ustraveldocs.com.",
          ],
          links: [
            { label: "VFS Global (Map)", href: "https://goo.gl/maps/QBijnE3RcxhyfwMC7" },
          ],
          contacts: [
            "Email for extended delays: support-bangladesh@ustraveldocs.com",
            "Phone: +88-09610202040",
          ],
        },
        {
          id: "book-flight",
          title: "g. Book Your Flight",
          content: [
            "Don't wait for your visa to be approved before booking flights. Delayed booking can increase fares three to five times. If your visa is not approved, you can cancel your ticket and receive a refund with a penalty of around 10–15%.",
            "Airlines to consider: Emirates, Qatar Airways, Etihad Airways, Singapore Airlines, Turkish Airlines, EgyptAir, United Airlines, American Airlines, and Saudia. Some airlines offer student discounts (approximately 10,000–12,000 taka savings). Dedicate 2–3 days to thorough research before booking.",
          ],
          points: [
            { heading: "Price Differences", text: "Elite airlines (Etihad, Qatar) may have significantly higher fares compared to others (Turkish)." },
            { heading: "Destination Airport", text: "International airports usually offer more cost-effective options than domestic ones." },
            { heading: "Flexible Dates", text: "Prices can vary significantly based on dates. Be open to exploring different date options." },
            { heading: "Fluctuating Prices", text: "Flight prices can change rapidly, even within a short period." },
            { heading: "Baggage Allowance", text: "Carefully review dimensions and weight restrictions for carry-on and checked baggage." },
            { heading: "Number of Flights & Layovers", text: "Multiple flights may be cheaper but result in longer travel times. Consider layover duration and facilities." },
            { heading: "Travel Buddy", text: "If you are a first-time traveler, consider having a travel buddy for support." },
            { heading: "Payment Options", text: "Airlines have offices in Dhaka where you can pay in cash if online payment poses difficulties." },
          ],
          note: "While Google Flights is a helpful tool, always double-check prices directly on the airline's website or other reliable booking platforms.",
        },
      ],
    },

    {
      id: "shopping",
      title: "VI. Shopping List",
      intro: "Useful resources for preparing your shopping list before leaving for the USA.",
      links: [
        {
          label: "Medicine List (Google Spreadsheet)",
          href: "https://docs.google.com/spreadsheets/d/1PxunNrNb3EL_wk39T3iYhnHG7MaDFSJx/edit?usp=sharing",
        },
        {
          label: "Items to Pack & Carry — For Boys (NexTop USA #1)",
          href: "https://www.facebook.com/groups/nextop.usa/permalink/1658824020883436/",
        },
        {
          label: "Items to Pack & Carry — For Boys (NexTop USA #2)",
          href: "https://www.facebook.com/groups/nextop.usa/permalink/4446467212119089/",
        },
        {
          label: "Items to Pack & Carry — For Girls (NexTop USA #1)",
          href: "https://www.facebook.com/groups/nextop.usa/permalink/2285490834883415/",
        },
        {
          label: "Items to Pack & Carry — For Girls (NexTop USA #2)",
          href: "https://www.facebook.com/groups/nextop.usa/permalink/3960848990680916/",
        },
        {
          label: "Complete Packing List (Google Drive)",
          href: "https://drive.google.com/file/d/1-cZiufcuT9QT7SqJmEZC58WgKoHKS3Jh/view?usp=sharing",
        },
      ],
    },

    {
      id: "monetary",
      title: "VII. Monetary Situation",
      intro: "Here is a breakdown of the potential costs you may encounter throughout the entire process (assuming full funding):",
      costs: [
        { item: "Application Fees (10–12 universities, with some fee waivers)", amount: "$700 – $1,500" },
        { item: "GRE (including score sending)", amount: "৳30,000 + ~$300" },
        { item: "IELTS / TOEFL", amount: "৳30,000 + ~$250" },
        { item: "Visa Interview Fee", amount: "$185" },
        { item: "SEVIS Fee", amount: "$350" },
        { item: "Plane Fare", amount: "৳1,20,000 – ৳3,00,000+" },
        { item: "Vaccines & Medical Tests", amount: "৳15,000" },
        { item: "First Month Rent", amount: "$600 – $1,000" },
        { item: "Pocket Money (First Month)", amount: "$1,000 – $2,000" },
        { item: "Purchases (items to carry)", amount: "৳50,000 – ৳80,000" },
        { item: "Miscellaneous Expenses", amount: "৳50,000" },
      ],
      summary:
        "Total estimated cost: approximately ৳6,00,000 – ৳8,00,000 (fully funded). If you reside in Dhaka throughout this process, expect around ৳10,00,000 – ৳12,00,000. Think of it as an investment for the greater rewards ahead.",
      note: 'Footnote: "It is legal to transport any amount of currency into or out of the United States. However, if you transport more than $10,000 (or its foreign equivalent) at one time, you must file a FinCEN Form 105 with U.S. Customs and Border Protection."',
      buyingDollars:
        "Acquiring US dollars has become quite challenging. Seek advice from your friends and seniors who have experience — they can guide you in determining the best available options for purchasing US dollars, ensuring a smooth and secure process.",
    },
  ],
};

// ── Useful Links ─────────────────────────────────────────────────────────────

export const usefulLinks = [
  {
    label: "FAQ from US Embassy",
    href: "https://www.ustraveldocs.com/bd/bd-gen-faq.asp#qlistfandm",
  },
  {
    label: "Dream USA — Comprehensive Guide (Rangon's Notion)",
    href: "https://rangon.notion.site/Dream-USA-2ac6e5835eca402383675b6ee6839700",
  },
  {
    label: "Mohammad Ali Kazmi — NexTop USA Post",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/6145101025589024/",
  },
  {
    label: "Ataher Shams — NexTop USA Post",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/6166263573472769/",
  },
  {
    label: "Shimanto Bhoumik — GRE Experience",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/5820924071340056/",
  },
  {
    label: "Shimanto Bhoumik — TOEFL Experience",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/5899764033456059/",
  },
  {
    label: "Shimanto Bhoumik — NexTop USA Post",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/6169521463146980/",
  },
  {
    label: "Arnob Das — NexTop USA Post",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/6246530632112729/",
  },
  {
    label: "Satyaki Banik — Higher Study Guide",
    href: "https://www.satyakibanik.com/others/higher-study-guide",
  },
  {
    label: "Eshanee Chowdhury — Higher Study Guide",
    href: "https://sites.google.com/view/eshaneechowdhury/miscellanea_1/grad-school-admission?authuser=0",
  },
  {
    label: "MS/Ph.D. Guide — Ragib Hasan (NexTop USA)",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/5361022797330188/",
  },
  {
    label: "Visa Application Guide — NexTop USA",
    href: "https://nextopusa.com/visa_application/",
  },
  {
    label: "The Timeline of Success — NexTop USA",
    href: "https://nextopusa.com/timeline_of_success/",
  },
  {
    label: "Complete Visa Processing After Getting I-20 (Spreadsheet)",
    href: "https://docs.google.com/spreadsheets/d/1PxunNrNb3EL_wk39T3iYhnHG7MaDFSJx/edit?usp=sharing",
  },
  {
    label: "After Arriving at the USA — NexTop USA Post",
    href: "https://www.facebook.com/groups/nextop.usa/posts/4179213342177812/",
  },
  {
    label: "Emailing Professors — NexTop USA Post",
    href: "https://www.facebook.com/groups/nextop.usa/permalink/5291694650929670/",
  },
  {
    label: "Shabash Fakibaj — YouTube Channel",
    href: "https://youtube.com/@ShabashFakibajLLC",
  },
];
