// Database for /higher-study-usa page
// Source: Higher-study-in-USA.txt

export const higherStudyUSA = {
  title: "Higher Study in USA",
  subtitle: "A comprehensive guide based on personal experience — visa interview, journey, and step-by-step guidelines.",

  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1: My Profile & Visa Interview
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "profile",
      title: "My Profile & Visa Interview",
      number: "01",
      subsections: [
        {
          id: "visa-info",
          title: "Visa Details",
          type: "fields",
          fields: [
            { label: "Visa Type", value: "F1" },
            { label: "Visa Status", value: "Issued" },
            { label: "Intended University", value: "University of Virginia" },
            { label: "Program", value: "Ph.D. in Electrical & Computer Engineering" },
            { label: "Session", value: "Fall 2023" },
            { label: "Funding", value: "Full financial support (Graduate Research Assistantship (GRA) + Health Insurance)" },
            { label: "Interview Appointment", value: "June 18, 2023, 10:15 AM (Rescheduled twice from July 30, 2023, 10:30 AM)" },
            { label: "Interview Priority", value: "Regular" },
            { label: "CEAC Status", value: "Approved on June 19, Issued on June 21" },
            { label: "Passport Collection", value: "Email received on June 22, collected on June 25" },
          ],
        },
        {
          id: "documents",
          title: "Documents",
          type: "subsections-list",
          items: [
            {
              subtitle: "Documents Checked at Entry",
              list: ["Interview appointment letter", "Passports (old and new)", "I-20"],
            },
            {
              subtitle: "Documents Carried",
              list: [
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
              note: "Also carried a lot of additional papers just for peace of mind.",
            },
          ],
        },
        {
          id: "security-checks",
          title: "Security Checkpoints",
          type: "numbered-list",
          items: [
            "Checkpoint 01 (Entry Gate): Visa Interview Appointment Letter",
            "Checkpoint 02 (Entrance of Embassy Building): Appointment Letter, Passports",
            "Checkpoint 03 (Inside Embassy Building): File and Documents & Body Scanned",
            "Checkpoint 04 (Beside Waiting Room): A Bangladeshi Guy checked the Appointment Letter and Passport (Attached DS-160 ID Number with a Barcode on the back of the new Passport)",
            "Checkpoint 05 (Counter 12, Bangladeshi Guy): Scanned Passport + Took Fingerprints",
          ],
        },
        {
          id: "embassy-experience",
          title: "Embassy Experience",
          type: "paragraphs",
          paragraphs: [
            "I arrived at the embassy one hour earlier than my scheduled appointment. As I joined the queue outside, I patiently waited for my turn. However, I encountered a slight difficulty when the staff at the entrance asked for my passport and appointment confirmation. I rescheduled my visa appointment from July 30th to June 18th, but somehow I failed to notice the date on my printed confirmation and brought the earlier one. Initially, they hesitated to allow me inside even though my name was on their list. Determined not to miss my interview, I made multiple requests, pleading with them to reconsider. Eventually, they advised me to seek permission from an officer stationed outside. As I approached the officer, I noticed a crowd of 12 to 15 people surrounding him, each with their own concerns, causing delays of 5 to 10 minutes per person. It became clear that waiting for my turn would make it nearly impossible for me to make it to my interview on time.",
            "Taking a chance, I decided to use my wit and returned to the entrance, confidently informing the staff that the officer had granted me permission to attend the interview without any issue. My confident demeanor convinced them, and without double-checking, they allowed me to enter the main building. (So remember the importance of checking, double-checking, and triple-checking your documents.)",
            "At the first counter, a Bangladeshi person examined my passport and asked for the name of the university and program I intended to pursue. Moving on to the next counter, I provided my fingerprints as part of the procedure. Afterward, I had to wait for approximately 5 minutes before my interview.",
            "Overall, my time inside the embassy lasted around 30 to 40 minutes. Despite the initial hiccups, I successfully navigated the process. It was a valuable learning experience that highlighted the importance of preparedness and adaptability when dealing with such situations.",
          ],
        },
        {
          id: "visa-conversation",
          title: "Interview Conversation",
          type: "conversation",
          note: "Counter 8: A young white American lady. The interview lasted 2–3 minutes.",
          exchanges: [
            { speaker: "Me", text: "Hello." },
            { speaker: "VO", text: "Hello, kindly pass me your I-20 and Passports." },
            { speaker: "VO", text: "(While checking them) So, why did you choose this particular university?" },
            { speaker: "Me", text: "Talked about the available research facilities and how they align with my research interests." },
            { speaker: "VO", text: "Have you already selected your research topic?" },
            { speaker: "Me", text: "Yes, I have. (Briefly discussed my intended research topic.)" },
            { speaker: "VO", text: "Have you visited any other country?" },
            { speaker: "Me", text: "Yes, I have. I went to India once before COVID-19." },
            { speaker: "VO", text: "Are you currently married or single?" },
            { speaker: "Me", text: "No, I am not married yet." },
            { speaker: "VO", text: "(Smiling) Virginia is a very beautiful place, make sure to bring your wife along when you do get married. Your visa is approved. Collect it within two weeks." },
            { speaker: "Me", text: "Thank you very much. I will keep it in mind. I hope you have a great day." },
            { speaker: "VO", text: "You too." },
          ],
          outcome: "Returned old passport & I-20 with a blue leaflet.",
        },
        {
          id: "education-profile",
          title: "Education & Test Scores",
          type: "fields",
          fields: [
            { label: "Undergraduate Program", value: "B.Sc. in EEE (Graduated May 2022)" },
            { label: "CGPA", value: "3.60 / 4.00" },
            { label: "Thesis Topic", value: "Nanophotonics, Nanoplasmonics" },
            { label: "Institution", value: "BUET" },
            { label: "Publications", value: "0 (at the time of application)" },
            { label: "GRE", value: "315/340 — Quant: 167/170 | Verbal: 148/170 | Analytical Writing: 4.0/6.0" },
            { label: "IELTS", value: "8/9 — Listening: 9.0 | Reading: 8.5 | Speaking: 7.0 | Writing: 6.5" },
          ],
          workExperience: [
            "Lecturer (Part-Time): Bangladesh University of Textiles — 5 months",
            "Lecturer: Canadian University of Bangladesh — 5 months",
          ],
        },
        {
          id: "university-list",
          title: "University List",
          type: "university-list",
          note: "Applied to 10 universities total: 7 in the USA (Ph.D.) and 3 in Canada (M.Sc.). Received 6 acceptances and 4 rejections.",
          usa: [
            { name: "University of Virginia (UVA)", result: "Accepted", details: "Got Interview (Positive) · Fee Waiver (BD) · Ph.D. · GRA + Health Insurance", status: "accepted" },
            { name: "North Carolina State University (NCSU)", result: "Accepted", details: "Email Conversation (Positive) · Ph.D. · GTA + GMA + Health Insurance (semester fee required)", status: "accepted" },
            { name: "University of Houston (UH)", result: "Accepted", details: "Got Interview (Positive) · Ph.D. · GRA (health insurance not covered)", status: "accepted" },
            { name: "Mississippi State University", result: "Accepted", details: "Got Interview (Positive) · Ph.D. · GRA + Health Insurance", status: "accepted" },
            { name: "University of Maryland-College Park", result: "Rejected", details: "Centrally Applied · Fee Waiver", status: "rejected" },
            { name: "University of Wisconsin-Madison (UW-Madison)", result: "Rejected", details: "Got Interview (Positive) — ultimately rejected", status: "rejected" },
            { name: "Boston University (BU)", result: "Rejected", details: "Centrally Applied · Fee Waiver", status: "rejected" },
          ],
          canada: [
            { name: "University of British Columbia (UBC)", result: "Accepted", details: "Got Interview · Fee Waiver (BD) · MS · GTA + 50% Tuition Fee Waiver", status: "accepted" },
            { name: "McGill University", result: "Accepted", details: "Email Conversation (Positive) · MS · GTA (no tuition waiver; applied for scholarship, no result yet)", status: "accepted" },
            { name: "University of Waterloo (UW)", result: "Rejected", details: "Centrally Applied", status: "rejected" },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2: My Journey
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "journey",
      title: "My Journey",
      number: "02",
      type: "paragraphs",
      intro: "A personal account of this year-long journey — the challenges, triumphs, and lessons learned.",
      paragraphs: [
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
        "Then came UBC. Not only was I accepted, but I also received a 50 percent tuition waiver. I had to make the hardest decision yet. Canada or the U.S. In the end, I chose the U.S. because I wanted full funding and stronger networking opportunities.",
        "In mid-April, I realized something I had completely overlooked: going where my friends were. One of my friends was heading to UVA, and I learned that a professor there was still searching for students. I reached out, interviewed, and was encouraged to apply even though the deadline had passed. Soon after, I received my offer from UVA. I accepted immediately, secured graduate housing, and was welcomed into the Bangladeshi community there.",
        "Looking back, I am overwhelmed with gratitude. My parents, friends, seniors, teachers, and especially my supervisor never stopped believing in me. The journey was painful, uncertain, and exhausting, but I kept going. And now, I am finally ready to begin the next chapter of my life.",
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3: Suggestions & Guidelines
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "suggestions",
      title: "Suggestions & Guidelines",
      number: "03",
      intro: "First and foremost, take a deep breath and don't panic. Every step in this endeavor will indeed be challenging and require extensive research. Trust in the greater plan. Take it as a full-time job.",
      subsections: [
        {
          id: "timeline",
          title: "Suggested Timeline (After Graduation — for Fall Admission)",
          type: "numbered-list",
          items: [
            "Open a bank account (EBL/Brac) and obtain a dual currency card.",
            "Build your CV, LinkedIn, and Portfolio.",
            "Schedule your GRE for August or at least in September.",
            "Reach out to your professors for Letters of Recommendation (LoRs) within August.",
            "Collect all your official documents and papers as soon as possible.",
            "Shortlist universities before September.",
            "Take your IELTS/TOEFL exam in September.",
            "Contact Graduate Coordinators in September and October.",
            "Start emailing professors in September or October, right after receiving your GRE scores.",
            "Begin crafting your Statement of Purpose (SoP) by November and complete it by December.",
            "Finalize your university choices in December.",
            "Complete your applications within December/January, aiming to submit them early for earlier decisions.",
            "Continue reaching out to professors until April, as you await results from your desired universities.",
            "Once you receive your desired offer, accept it, get the I-20, and book your visa interview from the CGI portal as early as possible (preferably before June).",
            "Fill up DS-160 and pay SEVIS fees at least a week before your interview date.",
            "Book your flight ticket as soon as possible for the best prices (preferably before or at least in early May) to ensure you arrive before the program start date.",
            "Manage Dollars as early as possible.",
            "Manage housing within June/July.",
            "Start purchasing necessary items in July.",
            "Spend quality time with your friends and family as much as possible.",
          ],
        },
        {
          id: "before-graduation",
          title: "I. Before Graduation",
          type: "topic-list",
          intro: "Keep in mind: \"If anyone chases two hares together, they will not be able to catch any of them.\" Five things to mainly focus on during undergrad:",
          items: [
            {
              title: "Getting your CGPA up as much as possible",
              description: "Your university and professors will prioritize and assess this among the first things. However, if your current CGPA is not up to the mark, don't underestimate yourself. It may seem challenging at first, but with enough effort and dedication, you can also achieve your goals.",
            },
            {
              title: "Try to do fruitful Research & at least 1–2 Publications",
              description: "Having a compelling research topic and a few publications under your belt will significantly elevate your standing among the pool of applicants.",
            },
            {
              title: "Do something Extracurricular",
              description: "Including a few extracurricular activities in your CV can also make a positive impact.",
            },
            {
              title: "Learn Matlab, Python, Machine Learning, and Canva",
              description: "Explore opportunities in the field of Machine Learning as it is considered the future of technology.",
            },
            {
              title: "Curate your CV, LinkedIn Profile, Twitter, and Portfolio",
              description: "Start building your Academic CV as early as possible. Utilize LinkedIn to showcase your academic and career-related achievements. Twitter can be a powerful tool for reaching out to potential professors with lab openings. Additionally, consider creating a portfolio — it can help you stand out, though it's not mandatory.",
            },
            {
              title: "Don't go for GRE or IELTS before finishing undergrad",
              description: "Not necessary before you finish your undergraduate studies.",
            },
          ],
        },
        {
          id: "right-after-graduation",
          title: "II. Right After Graduation",
          type: "topic-list",
          intro: "Give yourself some time to reflect on your interests, passions, and long-term goals. Then get your necessary papers sorted as soon as possible.",
          items: [
            {
              title: "Get Your Documents in Order",
              list: [
                "NID, Passport",
                "Certificates (S.S.C., H.S.C.)",
                "B.Sc. Certificates and Transcripts",
                "Other necessary certificates from the university",
                "Sealed certificate and transcripts (at least 2 copies)",
              ],
            },
            {
              title: "Open a Bank Account",
              description: "Get a dual currency card (EBL / Brac preferably).",
            },
            {
              title: "Join the NexTop-USA Group",
              description: "You will receive the support and assistance you need along the way.",
            },
            {
              title: "Book your GRE (August)",
              description: "A strong GRE score can still significantly enhance an average profile. ETS has recently introduced a shorter version of the GRE. Stay updated on any developments regarding this change.",
            },
            {
              title: "Book your IELTS/TOEFL (September)",
              description: "IELTS/TOEFL is considered a necessary requirement to assess your English language proficiency. While some schools may waive this requirement if your undergraduate education was conducted in English, it is generally recommended to appear for either IELTS or TOEFL.",
            },
            {
              title: "Avoid job searching before GRE",
              description: "Doing so can lead to multiple rejections which may negatively impact your confidence. Consider starting your job search 2–3 months later (after taking the GRE).",
            },
            {
              title: "Tools & Resources",
              description: "Getting premium accounts for Quillbot and Grammarly will be highly beneficial. ChatGPT can prove to be immensely beneficial throughout. Learn LaTeX — necessary for any type of formal document writing and formatting.",
            },
          ],
        },
        {
          id: "preparation",
          title: "III. Preparation for Application",
          type: "subsections-rich",
          items: [
            {
              id: "listing-schools",
              title: "a. Listing Schools & Professors",
              paragraphs: [
                "It's important to keep in mind that there is no guaranteed ranking or set of schools that ensure admission. The admissions process can be unpredictable, and a person with a moderate profile may secure acceptance at top schools, while someone with an impressive profile may receive no offers.",
                "If you belong to the top-tier group, aim for Ivy League and prestigious universities, but also consider mid-top and mid-range schools. If you are an average student, targeting schools around the 50th ranking can be a good starting point, but don't limit yourself. If your academic profile is below average, you may initially focus on schools beyond the 50th or 100th ranking, but don't completely disregard higher-ranked institutions.",
              ],
              subItems: [
                {
                  subtitle: "Evaluation Metrics",
                  list: [
                    "Undergraduate CGPA",
                    "Publications",
                    "Research experience",
                    "Standardized tests (GRE)",
                    "English language proficiency (IELTS/TOEFL)",
                    "Job experiences",
                    "CV",
                    "Statement of Purpose (SoP)",
                    "Letters of Recommendation (LoRs)",
                    "Professors' recommendation from positive interviews",
                  ],
                },
                {
                  subtitle: "Spreadsheet Tab 1 — University List",
                  list: [
                    "University name & website",
                    "City and state",
                    "US News ranking (subject-wise)",
                    "Department website",
                    "Graduate coordinator email",
                    "Minimum application requirements",
                    "Application fee",
                    "Application portal link",
                    "Application deadlines",
                    "Tuition fees",
                    "Information about alumni currently studying there",
                  ],
                },
                {
                  subtitle: "Spreadsheet Tab 2 — Location Info",
                  list: [
                    "Weather conditions (summer and winter)",
                    "Overall living costs",
                    "Crime rate",
                    "Living standards",
                    "Availability of amenities",
                    "Industries and prominent companies nearby",
                  ],
                },
                {
                  subtitle: "Spreadsheet Tab 3 — Professor List",
                  list: [
                    "University",
                    "Professor Name",
                    "Research Field",
                    "Specific Topics",
                    "Email address",
                    "Professor's Website",
                    "Openings in their Lab",
                    "Known Seniors in their Lab",
                    "Google Scholar Link",
                    "LinkedIn Profile Link",
                    "Email Date",
                    "Reply",
                    "Follow-up Date",
                    "Remarks",
                  ],
                },
                {
                  subtitle: "Fee Waivers — Ways to Obtain",
                  list: [
                    "Attending seminars and graduate open houses",
                    "Utilizing a waiver code, if available",
                    "Having the fee waived directly by a professor",
                    "Gaining approval from the admission committee by submitting documents demonstrating financial hardship",
                    "Qualifying for location-based fee waivers",
                    "Applying before an early deadline",
                    "Contacting the financial aid departments for assistance",
                  ],
                },
              ],
            },
            {
              id: "emailing-professors",
              title: "b. Emailing Professors",
              paragraphs: [
                "Start emailing a professor from every university daily. Keep a gap of at least two days between contacting different professors from the same university.",
                "The response rate is typically around 10% or less, with positive responses around 2–3%. Don't be disheartened. Follow up after a week, but limit follow-ups to a maximum of two times. Keep follow-up emails concise, polite, and respectful.",
              ],
              subItems: [
                {
                  subtitle: "Key Aspects of a Good Email",
                  list: [
                    "Personalization: Tailor each email to the specific professor and university",
                    "Conciseness: Keep your email concise and to the point",
                    "Politeness and Respect: Address the professor as 'Dr. X / Professor X'",
                    "Introduce Yourself: Mention your academic background, major achievements, and research interests",
                    "Explain Your Interest: Articulate why you are interested in their research group",
                    "Highlight Your Skills: Emphasize relevant skills, experiences, and publications",
                    "Request for Meeting: Politely ask for a meeting or call about research opportunities",
                    "Attach Relevant Documents: Include CV, transcripts, relevant publications",
                    "Follow-Up Plan: Mention that you will follow up on a specific date",
                    "Proofreading: Carefully proofread for grammar and spelling errors",
                    "Scheduling Emails: Send during professors' early work hours on weekdays; avoid weekends and holidays",
                    "Use Email Templates in Gmail: Save a properly formatted email as a template and customize variables",
                  ],
                },
              ],
            },
            {
              id: "professor-interview",
              title: "c. Interview with Professor",
              paragraphs: [
                "Congratulations on securing an interview! This is a crucial step in your graduate school journey. The interview is an opportunity for both you and the professor to assess if you are a good fit for each other's research interests and working styles.",
              ],
              subItems: [
                {
                  subtitle: "Key Points",
                  list: [
                    "Research the Professor: Familiarize yourself with their research, publications, and current projects",
                    "Understand the Program: Be prepared to discuss how it aligns with your academic and career goals",
                    "Prepare Questions: Anticipate questions and prepare thoughtful questions to ask the professor",
                    "Be Professional: Dress appropriately, be punctual, and maintain a quiet and well-lit environment for virtual interviews",
                    "Showcase Your Achievements: Discuss relevant publications, projects, and courses. A slide presentation can significantly enhance your ease of presenting",
                    "Demonstrate Compatibility: Show how your research interests align with the professor's work",
                    "Be Enthusiastic and Confident: Show genuine enthusiasm for the opportunity",
                    "Listen and Respond: Pay close attention and engage in active listening",
                    "Follow Up: Send a thank-you email after the interview expressing appreciation and reiterating your interest",
                  ],
                },
              ],
            },
            {
              id: "lor-sop-coverletter",
              title: "d–f. Managing LoRs, Writing SoP & Cover Letter",
              type: "linked",
              links: [
                { label: "Managing Letters of Recommendation (LoRs)", href: "/letter-of-recommendations" },
                { label: "Writing Statement of Purpose (SoP)", href: "/statement-of-purpose" },
                { label: "Writing Cover Letters", href: "/cover-letter" },
              ],
            },
            {
              id: "finalizing-universities",
              title: "g. Finalizing Universities",
              paragraphs: ["Factors to consider when finalizing your university application list:"],
              subItems: [
                {
                  subtitle: "Prioritization Criteria",
                  list: [
                    "Got interviewed and professor was super enthusiastic",
                    "Got interviewed, and although the professor's response was vague, you managed only a few interviews",
                    "Didn't get interviewed, but the professor showed strong interest during email conversations",
                    "Have seniors in the lab who can provide guidance and support",
                    "Have relatives living in the state or near the university",
                    "Received fee waivers for application (note: these may attract higher competition)",
                    "Leap of Faith: Sometimes taking a chance is necessary when a university aligns with your aspirations",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "applying",
          title: "IV. Applying to Universities",
          type: "subsections-rich",
          intro: "The first application can be time-consuming, taking around 3 to 4 days to complete. But once you've submitted the first one, the process becomes smoother and quicker.",
          items: [
            {
              id: "central-application",
              title: "Central Application",
              paragraphs: [
                "A central application involves applying to a university without prior contact or positive feedback from any professor. If you have a mid or below-average profile, it is not recommended unless you have a fee waiver. However, if you have an outstanding profile, you can apply, but there's no guarantee of acceptance if you can't secure professors' recommendations before decisions are made.",
              ],
            },
            {
              id: "department-switch",
              title: "Department / Interest Switch",
              paragraphs: [
                "Unless it is absolutely necessary, avoid experimenting with a department switch. However, it is not impossible if you can persuade a professor who can advocate for you with the admission committee. If a professor assures you, you can apply to a different department. But keep some safe options open in your own field as well.",
              ],
            },
            {
              id: "waiting",
              title: "a. Waiting for Results",
              paragraphs: [
                "Resist the urge to compare your progress to others. Focus on maintaining a positive mindset. Avoid Grad Cafe — it's nothing more than a brain-draining pressure cooker that can leave you feeling overwhelmed and discouraged. Stay positive and trust the process.",
              ],
            },
            {
              id: "results",
              title: "b. Results & Making the Big Decision",
              paragraphs: [
                "Rejections are a natural part of the application process. Allow yourself to feel, but don't take it personally. Reflect and learn, keep things in perspective, explore alternatives, seek support, and stay determined.",
                "When you receive acceptance letters, consider: Academic Reputation, Research Opportunities, Faculty and Mentors, Funding and Scholarships, Location and Campus Life, Alumni Network and Career Support, and Personal Fit.",
                "Supporting a friend in need: If you have multiple acceptance offers, you can only accept one. Reach out to professors from universities you're declining and recommend your friends. 'The lone wolf dies but the pack survives.'",
              ],
            },
            {
              id: "i20",
              title: "c. Get the I-20 Fast",
              paragraphs: [
                "Once you have accepted the offer, wait for the I-20 form. The processing time can vary from 2–3 days to a month or longer. You need the I-20 to apply for a visa.",
                "Tip: When the first university sends you their acceptance letter, obtain the I-20 from them and use it to apply for your visa, even if you don't intend to attend that university. Simply book your visa slot, inform the first university before the deadline (April 15th) that you won't be attending, and update your university choice in all relevant portals within a week before your visa interview.",
              ],
            },
            {
              id: "physical-docs",
              title: "d. Collecting & Sending Physical Document Copies",
              paragraphs: [
                "After selecting your preferred university, promptly accept the offer and submit the required documents. Some universities may require early submission of your BSc transcripts.",
              ],
              subItems: [
                {
                  subtitle: "Step-by-step: Sending BUET Transcripts",
                  list: [
                    "Visit the Comptroller's office at BUET before 4 PM with required photocopies of certificates and transcripts. Pay 200 tk per copy (50 tk + 150 tk). Regular processing: 4–5 working days; same-day processing available for an extra 500 taka.",
                    "Choose a reliable courier service: DHL, FedEx, or UPS (all have branches at Katabon). Visit Saturday to Thursday before 7 PM. Delivery takes 3–5 days.",
                  ],
                },
              ],
            },
            {
              id: "health-vaccination",
              title: "e. Necessary Health Reports & Vaccination",
              paragraphs: [
                "Before your arrival at any school, fulfill certain vaccination and testing requirements. All tests and immunizations can be acquired at the least price from Bangabandhu Sheikh Mujib Medical University: BSMMU (PG Hospital). Ibn Sina Diagnostic and Imaging Center, Japan Bangladesh Friendship Hospital, and icddr,b also provide those vaccines and diagnostics.",
              ],
            },
            {
              id: "health-checkup",
              title: "f. Necessary Health Checkups",
              paragraphs: [
                "It is strongly advised to undergo a comprehensive full-body checkup and necessary medical procedures before departing for the USA. Some medical expenses may not be covered by your health insurance, and healthcare costs in the USA can be prohibitively expensive.",
              ],
            },
          ],
        },
        {
          id: "visa-processing",
          title: "V. Visa Processing",
          type: "subsections-rich",
          items: [
            {
              id: "ds160",
              title: "a. Fill up DS-160 Form",
              paragraphs: [
                "Upon receiving your I-20, promptly begin filling out your DS-160 form for Non-immigrant Visa.",
                "You have a total of 30 days to complete the application form from the moment you first open it. Once you submit the form, you won't be able to make any further edits or corrections — starting an entirely new application is required in such cases.",
              ],
              links: [
                { label: "CEAC Portal (DS-160)", href: "https://ceac.state.gov/genniv/" },
              ],
            },
            {
              id: "visa-photo",
              title: "b. Visa Photo",
              paragraphs: [
                "When applying for your visa through DS-160, have a visa photo ready. Not only obtain a physical copy from your photographer but also ensure that you have a soft copy of the photo for online submission.",
              ],
            },
            {
              id: "visa-fees",
              title: "c. Pay Visa Fee & SEVIS Fee",
              paragraphs: [
                "You are required to make two dollar payments: the visa interview booking fee ($185) and the SEVIS fee ($350). Pay the visa slot booking fee as soon as possible to secure your interview slot. The update process may take 2–3 days before available slots are displayed. Only EBL (Eastern Bank Limited) accepts this payment.",
                "For the SEVIS fee, pay it at least a week before your visa interview. Due to a Bangladesh Bank limit of $300, you may encounter difficulties. If you have a bank account with dual currency enabled, apply for the window to be opened or seek assistance from someone outside Bangladesh.",
              ],
              links: [
                { label: "Pay SEVIS Fee (I-901)", href: "https://www.fmjfee.com/i901fee/index.html" },
                { label: "EBL Website", href: "https://www.ebl.com.bd/" },
              ],
              sevisSteps: [
                "Endorse your card for dollars by visiting your bank (bring your passport).",
                "Visit the EBL website and navigate to 'Forms and Downloads' to download the 'Online Declaration Form'. Print, fill it out, and make a scanned copy.",
                "Proceed to EBL Query and Complain Management Cell on the website. Enter your registered email and follow the steps. An OTP will be sent to your email.",
                "Enter the required information and write a note within 250 words stating the purpose of your transaction.",
                "Attach the I-901 (SEVIS) review form and the filled-up online declaration form. Upload the I-20 if requested.",
                "Submit the form and wait for a response (may take a couple of days).",
                "If approved, you will receive an SMS notification. If additional documents are required, the bank will inform you.",
              ],
            },
            {
              id: "schedule-interview",
              title: "d. Schedule the Visa Interview",
              paragraphs: [
                "After paying the visa interview fee, you may feel overwhelmed to see all available dates are after your program start date. Don't panic — everyone will eventually get a visa interview, even if it's just before August.",
                "Join the following Telegram groups to stay updated on slot openings. As soon as desired slots are open, act swiftly to secure them.",
                "You are allowed to reschedule twice for regular interview dates. If you couldn't manage a regular slot, there is an Emergency Request (ER) option. Write a well-explained reason and send an email. If accepted, you can book an emergency slot (reschedulable once).",
              ],
              links: [
                { label: "CGI Portal (Schedule Interview)", href: "https://atlas.my.salesforce-sites.com/?language=English&country-Bangladesh" },
                { label: "Telegram: US-F1 Slot Update", href: "https://t.me/+NEcX-i-m1_9jMTU1" },
                { label: "Telegram: HSD For USA", href: "https://t.me/+hKTnz5q8IRZjYTJl" },
                { label: "Telegram: Refused Slot Update", href: "https://t.me/+DoBVbJHY6-tiNzE9" },
                { label: "Telegram: Emergency Slot Update", href: "https://t.me/+1xljzi1jOVA5OTQ1" },
              ],
            },
            {
              id: "visa-interview",
              title: "e. Appear in Your Visa Interview",
              paragraphs: [
                "Be punctual and arrive on time. The NexTop USA group is a goldmine of information about the visa interview process.",
              ],
              links: [
                { label: "US Embassy Location (Dhaka)", href: "https://goo.gl/maps/JCXbGpgFUmz1xHyM8" },
              ],
              subItems: [
                {
                  subtitle: "Suggestions for the Interview",
                  list: [
                    "Review your application: Familiarize yourself with your DS-160 information",
                    "Research the visa interview process: Know what documents to bring, dress code, and specific guidelines",
                    "Practice common interview questions: Purpose of visit, ties to home country, ability to finance trip, plans after stay",
                    "Organize your documents: Passport, DS-160 confirmation, visa fee payment receipt, and supporting documents",
                    "Be honest and concise: Provide clear and honest answers; keep them concise and to the point",
                    "Demonstrate strong ties to home country: Highlight family, employment, property, or educational prospects",
                    "Show proof of financial stability: Bank statements, sponsorship letters, or relevant financial documents",
                    "Be confident and respectful: Maintain a positive demeanor; greet the visa officer politely",
                    "Follow instructions: Pay close attention to the visa officer's instructions",
                    "Stay calm and composed: Preparation and confidence will help you make a good impression",
                  ],
                },
              ],
            },
            {
              id: "collect-passport",
              title: "f. Collect Your Passport",
              paragraphs: [
                "Congratulations on the approval of your visa! To collect your visa, visit VFS Global unless you have opted for home delivery. Once approved, VFS Global will collect your passport from the embassy. After 3–4 days, you will receive an email stating your passport is ready for collection. You can collect it between 10 AM and 4 PM on office days. Bring a photocopy of your passport and the DS-160 confirmation page.",
                "If unable to collect in person, you can authorize someone to collect it on your behalf.",
                "Check visa status or contact: passportstatus@ustraveldocs.com | support-bangladesh@ustraveldocs.com | +88-09610202040",
              ],
              links: [
                { label: "VFS Global Location", href: "https://goo.gl/maps/QBijnE3RcxhyfwMC7" },
              ],
            },
            {
              id: "book-flight",
              title: "g. Book Your Flight",
              paragraphs: [
                "Don't wait for your visa to be approved before booking flights. If you delay, fares can increase three to five times. You can cancel your ticket and receive a refund with a penalty of around 10–15%.",
                "Airlines to consider: Emirates, Qatar Airways, Etihad Airways, Singapore Airlines, Turkish Airlines, EgyptAir, United Airlines, American Airlines, and Saudia. Some airlines offer student discounts — search on YouTube to find how to avail them (typically saves 10,000–12,000 taka).",
                "While Google Flights can be helpful, always double-check prices directly on the airline's website or other reliable booking platforms.",
              ],
              subItems: [
                {
                  subtitle: "Factors to Consider When Booking",
                  list: [
                    "Price Differences: Elite airlines (Etihad, Qatar) may have significantly higher fares than others (Turkish)",
                    "Destination Airport: International airports usually offer more cost-effective options than domestic ones",
                    "Flexible Dates: Prices can vary significantly; be open to exploring different dates",
                    "Fluctuating Prices: Prices can change rapidly, even within a short period",
                    "Flight Time: Consider duration, convenience, and personal comfort level",
                    "Baggage Allowance: Carefully review dimensions, weight restrictions, and prohibited items",
                    "Number of Flights: Evaluate layovers — cheaper but potentially longer travel times",
                    "Immigration Time: Research immigration procedures at transit airports",
                    "Layover Consideration: Account for layover duration and available facilities",
                    "Travel Buddy: If you're a first-time traveler, consider having a travel buddy",
                    "Trusted Agencies: If using travel agencies, select reliable ones",
                    "Payment Options: Airlines have offices in Dhaka where you can pay in cash",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "shopping",
          title: "VI. Shopping List",
          type: "links-section",
          links: [
            { label: "Medicine List (Google Sheets)", href: "https://docs.google.com/spreadsheets/d/1PxunNrNb3EL_wk39T3iYhnHG7MaDFSJx/edit?usp=sharing&ouid=104499056544666209164&rtpof=true&sd=true" },
            { label: "Shopping List for Boys (Post 1)", href: "https://www.facebook.com/groups/nextop.usa/permalink/1658824020883436/" },
            { label: "Shopping List for Boys (Post 2)", href: "https://www.facebook.com/groups/nextop.usa/permalink/4446467212119089/" },
            { label: "Shopping List for Girls (Post 1)", href: "https://www.facebook.com/groups/nextop.usa/permalink/2285490834883415/" },
            { label: "Shopping List for Girls (Post 2)", href: "https://www.facebook.com/groups/nextop.usa/permalink/3960848990680916/" },
            { label: "Complete List of Items to Pack and Carry to the USA", href: "https://drive.google.com/file/d/1-cZiufcuT9QT7SqJmEZC58WgKoHKS3Jh/view?usp=sharing" },
          ],
        },
        {
          id: "monetary",
          title: "VII. Monetary Situation",
          type: "costs",
          intro: "Here is a breakdown of the potential costs you may encounter throughout the process:",
          costs: [
            { item: "Application Cost", value: "$700–$1500 (assuming some fee waivers) for 10–12 university applications" },
            { item: "GRE (including score sending)", value: "৳30,000 + $300" },
            { item: "IELTS / TOEFL", value: "৳30,000 + $250" },
            { item: "Visa Interview", value: "$185" },
            { item: "SEVIS Fee", value: "$350" },
            { item: "Plane Fare", value: "৳120,000–৳300,000 or more" },
            { item: "Vaccines & Tests", value: "৳15,000" },
            { item: "Rent (First Month)", value: "$600–$1000" },
            { item: "Pocket Money (First Month)", value: "$1000–$2000" },
            { item: "Purchases", value: "৳50,000–৳80,000" },
            { item: "Miscellaneous Expenses", value: "৳50,000" },
          ],
          summary: "Total estimated cost: approximately ৳600,000–৳800,000 (if fully funded). If you reside in Dhaka throughout the process: ৳1,000,000–৳1,200,000.",
          note: "Think of it as an investment for the greater rewards that await you in the near future.",
          buyingDollarsNote: "Acquiring US dollars has become challenging. It is advisable to seek advice from friends and seniors who have experience in this matter. Legal footnote: It is legal to transport any amount of currency or other monetary instruments into or out of the United States. However, if you transport currency in a combined amount exceeding $10,000 at one time, you must file a FinCEN Form 105 with U.S. Customs and Border Protection.",
        },
        {
          id: "mental-health",
          title: "Mental Health Reminder",
          type: "paragraphs",
          paragraphs: [
            "As you navigate the path of higher education in the United States, remember to prioritize your mental health. This journey is unique to you, and it's natural to feel uncertain and overwhelmed at times. Take comfort in knowing that you have the strength and resilience to overcome any challenges that come your way.",
            "One crucial piece of advice: avoid procrastination throughout this process. Procrastination can hinder progress and potentially lead to missed opportunities. Embrace the uncertainty with a positive mindset, and remember to take breaks and care for your well-being.",
            "Don't hesitate to reach out for help and support from your friends. Lean on them during moments of doubt or stress. Having a trusted support system can provide comfort and encouragement throughout your journey. Share your experiences, seek advice, and offer support to your friends as well. Together, you can navigate the ups and downs of this exciting chapter in your lives.",
          ],
        },
        {
          id: "useful-links",
          title: "Useful Links",
          type: "links-section",
          links: [
            { label: "FAQ From US Embassy", href: "https://www.ustraveldocs.com/bd/bd-gen-faq.asp#qlistfandm" },
            { label: "Dream USA (Notion Guide)", href: "https://rangon.notion.site/Dream-USA-2ac6e5835eca402383675b6ee6839700" },
            { label: "Mohammad Ali Kazmi (NexTop USA)", href: "https://www.facebook.com/groups/nextop.usa/permalink/6145101025589024/" },
            { label: "Ataher Shams (NexTop USA)", href: "https://www.facebook.com/groups/nextop.usa/permalink/6166263573472769/" },
            { label: "Shimanto Bhoumik — GRE Experience", href: "https://www.facebook.com/groups/nextop.usa/permalink/5820924071340056/" },
            { label: "Shimanto Bhoumik — TOEFL Experience", href: "https://www.facebook.com/groups/nextop.usa/permalink/5899764033456059/" },
            { label: "Shimanto Bhoumik — Journey Post", href: "https://www.facebook.com/groups/nextop.usa/permalink/6169521463146980/" },
            { label: "Arnob Das (NexTop USA)", href: "https://www.facebook.com/groups/nextop.usa/permalink/6246530632112729/" },
            { label: "Satyaki Banik — Higher Study Guide", href: "https://www.satyakibanik.com/others/higher-study-guide" },
            { label: "Eshanee Chowdhury — Higher Study Guide", href: "https://sites.google.com/view/eshaneechowdhury/miscellanea_1/grad-school-admission?authuser=0" },
            { label: "MS/Ph.D. Guide by Ragib Hasan", href: "https://www.facebook.com/groups/nextop.usa/permalink/5361022797330188/?mibextid=Nif5oz" },
            { label: "Visa Application (NexTop USA)", href: "https://nextopusa.com/visa_application/" },
            { label: "The Timeline of Success (NexTop USA)", href: "https://nextopusa.com/timeline_of_success/" },
            { label: "Emailing Professors (NexTop USA)", href: "https://www.facebook.com/groups/nextop.usa/permalink/5291694650929670/" },
            { label: "Complete Visa Processing Spreadsheet", href: "https://docs.google.com/spreadsheets/d/1PxunNrNb3EL_wk39T3iYhnHG7MaDFSJx/edit?usp=sharing&ouid=104499056544666209164&rtpof=true&sd=true" },
            { label: "After Arriving at the USA (NexTop USA)", href: "https://www.facebook.com/groups/nextop.usa/posts/4179213342177812/" },
            { label: "Shabash Fakibaj YouTube Channel", href: "https://youtube.com/@ShabashFakibajLLC" },
          ],
        },
      ],
    },
  ],
};
