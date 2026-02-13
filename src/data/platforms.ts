export interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Platform {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  logo: string;
  originalPrice: number;
  ourPrice: number;
  discountPercent: number;
  features: string[];
  plans: Plan[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  color: string;
  icon: string;
}

export const platforms: Platform[] = [
  {
    name: "Coursera",
    slug: "coursera",
    description: "Access world-class university courses and professional certificates from top institutions.",
    longDescription: "Coursera partners with over 300 leading universities and companies to bring flexible, affordable, and job-relevant online learning to individuals and organizations worldwide. Earn degrees, professional certificates, and develop in-demand skills with courses from Stanford, Google, IBM, and more. Our discounted subscription gives you unlimited access to thousands of courses, guided projects, and specializations.",
    logo: "/platforms/coursera.svg",
    originalPrice: 59,
    ourPrice: 24,
    discountPercent: 59,
    color: "oklch(0.55 0.18 250)",
    icon: "GraduationCap",
    features: [
      "7,000+ courses from top universities",
      "Professional certificates from Google, Meta, IBM",
      "Hands-on projects and assignments",
      "Shareable certificates on LinkedIn",
      "Mobile app for learning on-the-go",
      "Flexible deadlines and schedules"
    ],
    plans: [
      {
        name: "Monthly",
        price: 24,
        period: "month",
        features: ["Full platform access", "Unlimited courses", "Certificates included", "Cancel anytime"],
      },
      {
        name: "Quarterly",
        price: 19,
        period: "month",
        features: ["Full platform access", "Unlimited courses", "Certificates included", "Priority support", "Billed quarterly"],
        popular: true,
      },
      {
        name: "Annual",
        price: 14,
        period: "month",
        features: ["Full platform access", "Unlimited courses", "Certificates included", "Priority support", "Career guidance", "Billed annually"],
      },
    ],
    testimonials: [
      {
        name: "Sarah Chen",
        role: "Data Analyst at Google",
        quote: "The Google Data Analytics certificate on Coursera completely changed my career. Getting it at this price was unbelievable!",
        rating: 5,
      },
      {
        name: "Marcus Johnson",
        role: "Software Engineer",
        quote: "I've completed 12 specializations through CDS's Coursera plan. The savings are incredible compared to paying full price.",
        rating: 5,
      },
      {
        name: "Emily Park",
        role: "Marketing Manager",
        quote: "Best investment in my career. I earned my Digital Marketing certificate from the University of Illinois for a fraction of the cost.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "Do I get the same Coursera experience?",
        answer: "Absolutely! You get full access to all courses, specializations, and professional certificates on Coursera. The experience is identical to a direct subscription.",
      },
      {
        question: "Are the certificates the same?",
        answer: "Yes, all certificates are issued directly by Coursera and the respective universities or companies. They are shareable on LinkedIn and verified.",
      },
      {
        question: "Can I access Coursera for Business courses?",
        answer: "Our subscription covers Coursera Plus individual plans. For enterprise or business plans, please contact us for custom pricing.",
      },
      {
        question: "How quickly do I get access?",
        answer: "Access is granted within 2-4 hours after payment confirmation. You'll receive login credentials via email.",
      },
    ],
  },
  {
    name: "Udemy",
    slug: "udemy",
    description: "Learn anything with 200,000+ courses taught by real-world experts.",
    longDescription: "Udemy is the world's largest online learning marketplace with over 200,000 courses covering everything from programming and data science to photography, music, and personal development. Our Udemy Business subscription gives you access to a curated collection of top-rated courses for professional development, all at a significant discount from the standard pricing.",
    logo: "/platforms/udemy.svg",
    originalPrice: 30,
    ourPrice: 12,
    discountPercent: 60,
    color: "oklch(0.60 0.20 25)",
    icon: "BookOpen",
    features: [
      "200,000+ courses on every topic",
      "Lifetime access to purchased courses",
      "30-day money-back guarantee",
      "Certificate of completion",
      "Expert instructors",
      "Mobile and offline access"
    ],
    plans: [
      {
        name: "Personal",
        price: 12,
        period: "month",
        features: ["Udemy Business access", "5,000+ top courses", "Certificates included", "Cancel anytime"],
      },
      {
        name: "Professional",
        price: 9,
        period: "month",
        features: ["Udemy Business access", "5,000+ top courses", "Certificates included", "Learning paths", "Priority support"],
        popular: true,
      },
      {
        name: "Team",
        price: 7,
        period: "month",
        features: ["Udemy Business access", "5,000+ top courses", "Certificates included", "Learning paths", "Team analytics", "Admin dashboard"],
      },
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        role: "Freelance Developer",
        quote: "Udemy through CDS has been a game-changer. I've learned React, Python, and AWS — all for less than one course's normal price!",
        rating: 5,
      },
      {
        name: "Priya Sharma",
        role: "UX Designer",
        quote: "The variety of courses on Udemy is amazing. I've upskilled in Figma, user research, and product design, saving hundreds of dollars.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Is this different from buying individual Udemy courses?",
        answer: "Yes! Instead of buying courses individually (which can cost $20-200 each), you get Udemy Business access with 5,000+ curated top-rated courses included in one subscription.",
      },
      {
        question: "Do I keep access to courses if I cancel?",
        answer: "With Udemy Business, access is subscription-based. As long as your subscription is active, you have unlimited access to the course library.",
      },
      {
        question: "Can I download courses for offline viewing?",
        answer: "Yes, the Udemy mobile app allows you to download courses for offline viewing on iOS and Android devices.",
      },
    ],
  },
  {
    name: "edX",
    slug: "edx",
    description: "Take university-level courses from Harvard, MIT, and 160+ institutions.",
    longDescription: "edX offers courses from the world's best universities and institutions, including Harvard, MIT, Berkeley, and many more. Learn cutting-edge skills in data science, computer science, business, humanities, and beyond. Our discounted subscription provides access to verified certificates and professional programs at a fraction of the regular cost.",
    logo: "/platforms/edx.svg",
    originalPrice: 49,
    ourPrice: 20,
    discountPercent: 59,
    color: "oklch(0.55 0.15 25)",
    icon: "Award",
    features: [
      "Courses from Harvard, MIT, Berkeley",
      "Professional certificates & MicroMasters",
      "Verified certificates included",
      "Self-paced learning",
      "Discussion forums with peers",
      "Mobile learning app"
    ],
    plans: [
      {
        name: "Learner",
        price: 20,
        period: "month",
        features: ["Full catalog access", "Verified certificates", "Self-paced learning", "Cancel anytime"],
      },
      {
        name: "Professional",
        price: 16,
        period: "month",
        features: ["Full catalog access", "Verified certificates", "MicroMasters programs", "Priority support", "Billed quarterly"],
        popular: true,
      },
      {
        name: "Executive",
        price: 12,
        period: "month",
        features: ["Full catalog access", "Verified certificates", "MicroMasters programs", "Executive education", "1-on-1 guidance", "Billed annually"],
      },
    ],
    testimonials: [
      {
        name: "David Kim",
        role: "Product Manager",
        quote: "Completed the MIT MicroMasters in Supply Chain through CDS. The quality is the same as studying at MIT — at 1/10th the price.",
        rating: 5,
      },
      {
        name: "Lisa Wang",
        role: "Research Scientist",
        quote: "edX courses from Harvard helped me transition from academia to the tech industry. CDS made it affordable.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Are these real university courses?",
        answer: "Yes! edX courses are created by professors at Harvard, MIT, and 160+ other leading institutions. The content is identical to what paying students experience.",
      },
      {
        question: "What's a MicroMasters?",
        answer: "MicroMasters programs are a series of graduate-level courses that can count toward a full Master's degree at participating universities, often fulfilling 25–50% of the degree requirements.",
      },
      {
        question: "Are certificates recognized by employers?",
        answer: "Yes, edX verified certificates are widely recognized by employers globally and can be added to your LinkedIn profile or resume.",
      },
    ],
  },
  {
    name: "LinkedIn Learning",
    slug: "linkedin-learning",
    description: "Build business, tech, and creative skills with 16,000+ expert-led courses.",
    longDescription: "LinkedIn Learning (formerly Lynda.com) offers over 16,000 courses taught by industry experts in business, technology, and creative fields. Courses are integrated directly with your LinkedIn profile, making it easy to showcase new skills to your professional network. Our discounted subscription includes all premium features at a fraction of the standard price.",
    logo: "/platforms/linkedin-learning.svg",
    originalPrice: 40,
    ourPrice: 16,
    discountPercent: 60,
    color: "oklch(0.55 0.15 230)",
    icon: "Briefcase",
    features: [
      "16,000+ expert-led courses",
      "LinkedIn profile integration",
      "Personalized course recommendations",
      "Certificates of completion",
      "Offline mobile access",
      "Exercise files for hands-on practice"
    ],
    plans: [
      {
        name: "Essential",
        price: 16,
        period: "month",
        features: ["Full course library", "Certificates", "LinkedIn integration", "Cancel anytime"],
      },
      {
        name: "Business",
        price: 13,
        period: "month",
        features: ["Full course library", "Certificates", "LinkedIn integration", "Learning paths", "Offline access"],
        popular: true,
      },
      {
        name: "Enterprise",
        price: 10,
        period: "month",
        features: ["Full course library", "Certificates", "LinkedIn integration", "Learning paths", "Insights & analytics", "API access"],
      },
    ],
    testimonials: [
      {
        name: "Jennifer Martinez",
        role: "HR Director",
        quote: "LinkedIn Learning transformed our team's skills development. With CDS's pricing, we enrolled our entire department.",
        rating: 5,
      },
      {
        name: "Robert Chen",
        role: "Project Manager",
        quote: "The project management courses helped me get my PMP certification. The LinkedIn integration made my profile stand out to recruiters.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "Does it integrate with my LinkedIn profile?",
        answer: "Yes! Completed courses and certificates automatically show on your LinkedIn profile, visible to recruiters and your network.",
      },
      {
        question: "Are exercise files included?",
        answer: "Yes, most courses include downloadable exercise files so you can practice along with the instructor.",
      },
      {
        question: "Can I use the LinkedIn Learning mobile app?",
        answer: "Yes, you can use the official LinkedIn Learning app on iOS and Android, including offline download features.",
      },
    ],
  },
  {
    name: "Skillshare",
    slug: "skillshare",
    description: "Explore creative classes in design, illustration, photography, and more.",
    longDescription: "Skillshare is an online learning community with thousands of classes in design, business, technology, and more. Unlike traditional platforms, Skillshare focuses on project-based learning, encouraging you to create real work as you learn. Our discounted Premium membership gives you unlimited access to all classes, including offline viewing.",
    logo: "/platforms/skillshare.svg",
    originalPrice: 32,
    ourPrice: 13,
    discountPercent: 59,
    color: "oklch(0.55 0.16 155)",
    icon: "Palette",
    features: [
      "30,000+ creative classes",
      "Project-based learning approach",
      "Community feedback on projects",
      "Offline viewing on mobile",
      "No ads interruptions",
      "New classes added weekly"
    ],
    plans: [
      {
        name: "Starter",
        price: 13,
        period: "month",
        features: ["Unlimited classes", "Offline access", "No ads", "Cancel anytime"],
      },
      {
        name: "Premium",
        price: 10,
        period: "month",
        features: ["Unlimited classes", "Offline access", "No ads", "Class downloads", "Priority community support"],
        popular: true,
      },
      {
        name: "Creative Pro",
        price: 8,
        period: "month",
        features: ["Unlimited classes", "Offline access", "No ads", "Class downloads", "Exclusive workshops", "1-on-1 mentoring"],
      },
    ],
    testimonials: [
      {
        name: "Maya Patel",
        role: "Graphic Designer",
        quote: "Skillshare completely transformed my design skills. I've learned everything from logo design to motion graphics, and the community feedback is invaluable.",
        rating: 5,
      },
      {
        name: "Tom Vasquez",
        role: "Freelance Illustrator",
        quote: "The project-based approach on Skillshare is unique. I built a real portfolio while learning, and CDS's price made it a no-brainer.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What types of classes are available?",
        answer: "Skillshare offers classes in design, illustration, photography, video, freelancing, marketing, business, technology, and lifestyle categories.",
      },
      {
        question: "Can I interact with instructors?",
        answer: "Yes! You can post projects for community and instructor feedback, participate in discussion boards, and join live sessions.",
      },
      {
        question: "Are new classes added regularly?",
        answer: "Absolutely! Hundreds of new classes are added every month by both Skillshare staff picks and community teachers.",
      },
    ],
  },
  {
    name: "Pluralsight",
    slug: "pluralsight",
    description: "Master technical skills with expert-led courses in software development, IT, and data.",
    longDescription: "Pluralsight is the technology workforce development company that helps teams build better products by developing critical skills, improving processes, and gaining insights through data. Our discounted subscription provides access to their full library of 7,000+ expert-led courses in software development, IT ops, data, security, and more.",
    logo: "/platforms/pluralsight.svg",
    originalPrice: 45,
    ourPrice: 18,
    discountPercent: 60,
    color: "oklch(0.55 0.16 330)",
    icon: "Code",
    features: [
      "7,000+ expert-led tech courses",
      "Skill assessments and IQ tests",
      "Learning paths by technology",
      "Hands-on projects and labs",
      "Certificates of completion",
      "Role-based learning guides"
    ],
    plans: [
      {
        name: "Standard",
        price: 18,
        period: "month",
        features: ["Full course library", "Skill assessments", "Learning paths", "Cancel anytime"],
      },
      {
        name: "Premium",
        price: 14,
        period: "month",
        features: ["Full course library", "Skill assessments", "Interactive courses", "Projects & labs", "Exam prep"],
        popular: true,
      },
      {
        name: "Enterprise",
        price: 11,
        period: "month",
        features: ["Full course library", "Skill assessments", "Interactive courses", "Projects & labs", "Analytics dashboard", "SSO integration"],
      },
    ],
    testimonials: [
      {
        name: "James O'Brien",
        role: "DevOps Engineer",
        quote: "Pluralsight's cloud computing paths helped me get both my AWS and Azure certifications. The skill assessments show exactly where to focus.",
        rating: 5,
      },
      {
        name: "Anika Singh",
        role: "Full-Stack Developer",
        quote: "The expert instructors on Pluralsight are actual industry professionals. The quality is unmatched, and CDS's pricing is unbeatable.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What technologies are covered?",
        answer: "Pluralsight covers virtually every technology stack including JavaScript, Python, React, Angular, AWS, Azure, Docker, Kubernetes, cybersecurity, data science, and much more.",
      },
      {
        question: "What are Skill IQ assessments?",
        answer: "Skill IQ is Pluralsight's unique assessment tool that measures your proficiency in any technology, helping you identify knowledge gaps and track improvement over time.",
      },
      {
        question: "Are there hands-on coding environments?",
        answer: "Yes! Premium plans include interactive courses with built-in coding environments, projects, and labs where you can practice in real scenarios.",
      },
    ],
  },
  {
    name: "DataCamp",
    slug: "datacamp",
    description: "Learn data science, AI, and analytics with interactive coding exercises.",
    longDescription: "DataCamp is the go-to platform for learning data science and analytics. With interactive coding exercises in Python, R, SQL, and more, you learn by doing rather than watching. Our discounted subscription gives you access to 400+ courses, career tracks, projects, and the DataCamp practice workspace.",
    logo: "/platforms/datacamp.svg",
    originalPrice: 39,
    ourPrice: 16,
    discountPercent: 59,
    color: "oklch(0.55 0.16 155)",
    icon: "BarChart3",
    features: [
      "400+ interactive courses",
      "Learn Python, R, SQL, and more",
      "Career and skill tracks",
      "Real-world projects",
      "DataCamp Workspace for practice",
      "Mobile app with offline access"
    ],
    plans: [
      {
        name: "Basic",
        price: 16,
        period: "month",
        features: ["All courses access", "Practice exercises", "Certificates", "Cancel anytime"],
      },
      {
        name: "Professional",
        price: 13,
        period: "month",
        features: ["All courses access", "Career tracks", "Real-world projects", "DataCamp Workspace", "Priority support"],
        popular: true,
      },
      {
        name: "Team",
        price: 10,
        period: "month",
        features: ["All courses access", "Career tracks", "Custom assignments", "Team reporting", "Admin tools", "API access"],
      },
    ],
    testimonials: [
      {
        name: "Rachel Kim",
        role: "Data Scientist at Meta",
        quote: "DataCamp's interactive approach to teaching Python and machine learning is hands down the best. CDS saved me hundreds on the subscription.",
        rating: 5,
      },
      {
        name: "Carlos Mendez",
        role: "Business Analyst",
        quote: "Went from knowing nothing about SQL to building complex queries in 3 months. The career tracks on DataCamp are incredibly well-structured.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What programming languages can I learn?",
        answer: "DataCamp focuses on Python, R, SQL, Scala, Java, shell scripting, and spreadsheet tools. They also cover tools like Power BI, Tableau, Excel, and Git.",
      },
      {
        question: "Is prior coding experience required?",
        answer: "No! DataCamp has beginner-friendly courses that start from zero. The interactive exercises guide you step-by-step through coding concepts.",
      },
      {
        question: "What are career tracks?",
        answer: "Career tracks are curated sequences of courses designed to prepare you for specific roles like Data Scientist, Data Analyst, Machine Learning Scientist, and more.",
      },
    ],
  },
  {
    name: "Codecademy",
    slug: "codecademy",
    description: "Learn to code interactively with hands-on programming courses.",
    longDescription: "Codecademy is an interactive platform that teaches you to code through hands-on practice. With courses in 14+ programming languages and a focus on project-based learning, Codecademy makes it easy to start coding from scratch or advance your existing skills. Our discounted Pro subscription includes career paths, real-world projects, and professional certificates.",
    logo: "/platforms/codecademy.svg",
    originalPrice: 40,
    ourPrice: 16,
    discountPercent: 60,
    color: "oklch(0.55 0.18 270)",
    icon: "Terminal",
    features: [
      "14+ programming languages",
      "Interactive coding environment",
      "Career paths and skill paths",
      "Real-world portfolio projects",
      "Professional certificates",
      "Community forums and support"
    ],
    plans: [
      {
        name: "Pro Lite",
        price: 16,
        period: "month",
        features: ["All courses access", "Skill paths", "Interactive practice", "Cancel anytime"],
      },
      {
        name: "Pro",
        price: 13,
        period: "month",
        features: ["All courses access", "Career paths", "Real-world projects", "Professional certificates", "Priority support"],
        popular: true,
      },
      {
        name: "Pro Plus",
        price: 10,
        period: "month",
        features: ["All courses access", "Career paths", "Interview prep", "Professional certificates", "1-on-1 mentoring", "Job placement support"],
      },
    ],
    testimonials: [
      {
        name: "Natasha Williams",
        role: "Junior Web Developer",
        quote: "Codecademy's full-stack engineer career path took me from zero coding knowledge to landing my first developer job in 8 months!",
        rating: 5,
      },
      {
        name: "Kevin Park",
        role: "iOS Developer",
        quote: "The interactive exercises are what set Codecademy apart. You code from day one, and the instant feedback loop accelerates learning tremendously.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What programming languages are taught?",
        answer: "Codecademy teaches Python, JavaScript, HTML/CSS, Java, C++, C#, Ruby, PHP, Go, Swift, Kotlin, SQL, Bash, and TypeScript.",
      },
      {
        question: "What are career paths?",
        answer: "Career paths are comprehensive programs that take you from beginner to job-ready in specific roles like Full-Stack Engineer, Data Scientist, Front-End Developer, and more.",
      },
      {
        question: "Do I need to install anything to code?",
        answer: "No! Codecademy provides an in-browser coding environment. You can start writing and running code immediately without any setup.",
      },
    ],
  },
  {
    name: "MasterClass",
    slug: "masterclass",
    description: "Learn from the world's best — celebrity and expert-taught classes in every field.",
    longDescription: "MasterClass offers online classes taught by the most renowned experts in their fields: Gordon Ramsay on cooking, Martin Scorsese on filmmaking, Neil deGrasse Tyson on scientific thinking, and many more. Each class features cinematic-quality video lessons, downloadable workbooks, and community activities. Our discounted subscription gives you unlimited access to every MasterClass.",
    logo: "/platforms/masterclass.svg",
    originalPrice: 23,
    ourPrice: 10,
    discountPercent: 57,
    color: "oklch(0.25 0.02 250)",
    icon: "Star",
    features: [
      "180+ classes from world-class experts",
      "Cinematic video production quality",
      "Downloadable class workbooks",
      "Community activities and discussions",
      "New classes added monthly",
      "Stream on any device"
    ],
    plans: [
      {
        name: "Individual",
        price: 10,
        period: "month",
        features: ["1 device streaming", "All classes access", "Workbooks included", "Cancel anytime"],
      },
      {
        name: "Duo",
        price: 8,
        period: "month",
        features: ["2 device streaming", "All classes access", "Workbooks included", "Offline viewing", "Shared profiles"],
        popular: true,
      },
      {
        name: "Family",
        price: 6,
        period: "month",
        features: ["6 device streaming", "All classes access", "Workbooks included", "Offline viewing", "6 profiles", "Priority support"],
      },
    ],
    testimonials: [
      {
        name: "Olivia Foster",
        role: "Aspiring Writer",
        quote: "Learning writing from Neil Gaiman and Malcolm Gladwell on MasterClass was surreal. The production quality is Netflix-level!",
        rating: 5,
      },
      {
        name: "Daniel Brown",
        role: "Home Chef",
        quote: "Gordon Ramsay's MasterClass literally changed how I cook. And at CDS's price? It's the best deal in online learning.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Who teaches on MasterClass?",
        answer: "MasterClass instructors include Gordon Ramsay, Serena Williams, Neil deGrasse Tyson, Martin Scorsese, Anna Wintour, Chris Hadfield, and 180+ other experts.",
      },
      {
        question: "Is MasterClass good for professional skills?",
        answer: "While MasterClass excels in creative fields, it also offers classes in leadership, business strategy, negotiation, communication, and scientific thinking.",
      },
      {
        question: "Can I download classes for offline viewing?",
        answer: "Yes, with Duo and Family plans, you can download classes for offline viewing on the MasterClass mobile app.",
      },
    ],
  },
  {
    name: "FutureLearn",
    slug: "futurelearn",
    description: "Join UK and global university courses with a focus on professional and personal growth.",
    longDescription: "FutureLearn is a leading online learning platform offering courses from world-renowned universities like King's College London, University of Leeds, and partners across the globe. Specializing in professional development and personal growth, FutureLearn provides microcredentials, short courses, and full online degrees. Our discounted Unlimited subscription gives you access to thousands of courses.",
    logo: "/platforms/futurelearn.svg",
    originalPrice: 35,
    ourPrice: 14,
    discountPercent: 60,
    color: "oklch(0.55 0.18 300)",
    icon: "Globe",
    features: [
      "Courses from 250+ university partners",
      "Microcredentials and degrees",
      "Social learning experience",
      "Digital certificates included",
      "Flexible learning schedule",
      "Expert-led discussions"
    ],
    plans: [
      {
        name: "Unlimited",
        price: 14,
        period: "month",
        features: ["Unlimited course access", "Certificates included", "Social learning", "Cancel anytime"],
      },
      {
        name: "Professional",
        price: 11,
        period: "month",
        features: ["Unlimited course access", "Microcredentials", "Certificates included", "Priority support", "Billed quarterly"],
        popular: true,
      },
      {
        name: "Academic",
        price: 9,
        period: "month",
        features: ["Unlimited course access", "Microcredentials", "Degree pathways", "Academic support", "1-on-1 guidance", "Billed annually"],
      },
    ],
    testimonials: [
      {
        name: "Sophie Turner",
        role: "Healthcare Professional",
        quote: "FutureLearn's healthcare courses from King's College London are incredibly thorough. CDS made continuing education affordable.",
        rating: 5,
      },
      {
        name: "Ahmed Hassan",
        role: "Business Consultant",
        quote: "The microcredentials from FutureLearn carry real weight with employers. I've earned three through my CDS subscription.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "What makes FutureLearn different?",
        answer: "FutureLearn emphasizes social learning — you learn alongside a global community of learners, participate in discussions, and get feedback from peers and educators.",
      },
      {
        question: "What are microcredentials?",
        answer: "Microcredentials are short, accredited courses that prove your expertise in a specific professional skill. They're recognized by employers and can count toward academic qualifications.",
      },
      {
        question: "Are there full degree programs?",
        answer: "Yes! FutureLearn partners with universities to offer fully online undergraduate and postgraduate degrees, though these require separate enrollment.",
      },
    ],
  },
];

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}

export const generalTestimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Data Analyst at Google",
    quote: "CDS saved me over $500 on e-learning subscriptions this year. The access is identical to direct subscriptions — it's unbelievable!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Software Engineer",
    quote: "I've been using CDS for 6 months now. Access to Coursera, Pluralsight, and DataCamp at these prices is the best deal in edtech.",
    rating: 5,
  },
  {
    name: "Emily Park",
    role: "Marketing Manager",
    quote: "Cut our company training budget by 60% while giving employees access to more platforms. CDS is a no-brainer for businesses.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Student",
    quote: "As a student, every dollar counts. CDS lets me access premium learning platforms I never could've afforded otherwise.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "Career Changer",
    quote: "Switched from accounting to data science using courses from multiple platforms — all through one affordable CDS subscription.",
    rating: 4,
  },
  {
    name: "James O'Brien",
    role: "Freelancer",
    quote: "The variety of platforms available through CDS is insane. I pick up new skills for every client project without breaking the bank.",
    rating: 5,
  },
];

export const generalFAQs: FAQ[] = [
  {
    question: "How does CDS offer such low prices?",
    answer: "We partner directly with e-learning platforms to negotiate group and educational licensing at significantly reduced rates. We pass these savings directly to you, keeping only a small margin to sustain our operations.",
  },
  {
    question: "Are these legitimate subscriptions?",
    answer: "Absolutely! All subscriptions are 100% legitimate, officially licensed accounts. You get the same experience, features, and certificates as direct subscribers. We never use shared accounts or unauthorized methods.",
  },
  {
    question: "How quickly do I get access?",
    answer: "Most subscriptions are activated within 2-4 hours of payment confirmation. You'll receive your access credentials via email with step-by-step setup instructions.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! All monthly plans can be cancelled anytime with no penalties or hidden fees. Quarterly and annual plans can be cancelled at the end of their billing period.",
  },
  {
    question: "Do I get certificates?",
    answer: "Yes, all certificates are issued directly by the respective platforms (Coursera, edX, etc.) and carry the same recognition and verification as direct subscriptions.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through encrypted payment gateways.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee on all plans. If you're not satisfied with your subscription for any reason, contact us within 7 days for a full refund.",
  },
  {
    question: "Can I switch between platforms?",
    answer: "Our general pricing tiers (Basic, Pro, Ultimate) include access to multiple platforms. You can switch or add platforms based on your plan level at any time.",
  },
];
