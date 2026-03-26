export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
  price: string;
  fullDescription: string;
  prerequisites: string[];
  learningOutcomes: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  jobOpportunities: string[];
  realLifeSkills: string[];
  entrepreneurialBenefits: string[];
  futureScope: string;
  instructor: {
    name: string;
    bio: string;
  };
}

export const courses: Course[] = [
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "Build complete websites and web applications from frontend design to backend logic and databases.",
    duration: "6 months",
    level: "Beginner to Advanced",
    icon: "Code2",
    price: "₹3,999/month",
    fullDescription: "This program trains students to build complete websites and web applications — from frontend design to backend logic and databases. Students learn how real websites like e-commerce platforms, dashboards, and SaaS tools are built.",
    prerequisites: ["Basic computer skills", "Interest in coding"],
    learningOutcomes: [
      "Create responsive websites using HTML5 & CSS3",
      "Build interactive UIs with JavaScript",
      "Develop backend servers and APIs",
      "Manage databases and user authentication",
      "Deploy websites to production"
    ],
    curriculum: [
      {
        module: "Frontend Development",
        topics: [
          "HTML5 & CSS3 (modern layouts)",
          "Responsive design (mobile-first)",
          "JavaScript fundamentals",
          "DOM manipulation",
          "Modern UI concepts"
        ]
      },
      {
        module: "Backend Development",
        topics: [
          "Server-side programming concepts",
          "APIs & request handling",
          "Authentication & authorization",
          "Business logic implementation"
        ]
      },
      {
        module: "Databases",
        topics: [
          "SQL fundamentals",
          "Database design",
          "CRUD operations",
          "Real-world data handling"
        ]
      },
      {
        module: "Tools & Deployment",
        topics: [
          "Git & GitHub",
          "Hosting & deployment basics",
          "Website performance optimization"
        ]
      }
    ],
    jobOpportunities: [
      "Junior Web Developer",
      "Frontend / Backend Developer",
      "Full Stack Developer",
      "Startup tech roles"
    ],
    realLifeSkills: [
      "Build personal websites",
      "Create business websites",
      "Freelancing readiness",
      "Problem-solving mindset"
    ],
    entrepreneurialBenefits: [
      "Launch your own startup website",
      "Build client projects",
      "Create SaaS or online services"
    ],
    futureScope: "Web development will continue growing strongly due to e-commerce expansion, startups & SaaS growth, and AI-based web platforms. Full Stack Developers will remain highly employable till 2030 and beyond.",
    instructor: {
      name: "Expert Instructors",
      bio: "Experienced instructors with proven expertise in web development and industry best practices."
    }
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Extract insights from data and make data-driven decisions using statistics, programming, and real-world analysis.",
    duration: "6 months",
    level: "Beginner to Intermediate",
    icon: "BarChart3",
    price: "₹3,999/month",
    fullDescription: "Data Science teaches how to extract insights from data and make data-driven decisions using statistics, programming, and real-world analysis.",
    prerequisites: ["Basic mathematics", "Computer literacy"],
    learningOutcomes: [
      "Analyze data using Python",
      "Apply statistical methods to real problems",
      "Create data visualizations",
      "Clean and transform datasets",
      "Communicate insights effectively"
    ],
    curriculum: [
      {
        module: "Programming & Data Handling",
        topics: [
          "Python for data analysis",
          "Data structures",
          "File handling"
        ]
      },
      {
        module: "Statistics & Mathematics",
        topics: [
          "Descriptive statistics",
          "Probability basics",
          "Data interpretation"
        ]
      },
      {
        module: "Data Processing",
        topics: [
          "Data cleaning",
          "Data transformation",
          "Handling missing values"
        ]
      },
      {
        module: "Visualization & Insights",
        topics: [
          "Charts & graphs",
          "Storytelling with data",
          "Business reporting"
        ]
      }
    ],
    jobOpportunities: [
      "Data Analyst",
      "Junior Data Scientist",
      "Business Analyst"
    ],
    realLifeSkills: [
      "Decision making using data",
      "Understanding trends",
      "Analytical thinking"
    ],
    entrepreneurialBenefits: [
      "Market analysis",
      "Customer behavior analysis",
      "Data-backed business planning"
    ],
    futureScope: "Data will increase exponentially. Every company needs data-driven decisions. Data Science will remain one of the most future-secure careers till 2030+.",
    instructor: {
      name: "Expert Instructors",
      bio: "Specialists in data science with expertise in business analytics and statistical modeling."
    }
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Teach systems to learn from data and make predictions automatically using advanced algorithms.",
    duration: "6 months",
    level: "Intermediate to Advanced",
    icon: "Brain",
    price: "₹3,999/month",
    fullDescription: "Machine Learning focuses on teaching systems to learn from data and make predictions automatically.",
    prerequisites: ["Python programming", "Basic statistics"],
    learningOutcomes: [
      "Understand ML fundamentals and algorithms",
      "Build and train ML models",
      "Apply supervised and unsupervised learning",
      "Perform feature engineering",
      "Deploy ML solutions to real problems"
    ],
    curriculum: [
      {
        module: "Machine Learning Fundamentals",
        topics: [
          "Introduction to ML",
          "Types of learning",
          "ML workflow"
        ]
      },
      {
        module: "Supervised & Unsupervised Learning",
        topics: [
          "Classification algorithms",
          "Regression techniques",
          "Clustering methods"
        ]
      },
      {
        module: "Model Training & Testing",
        topics: [
          "Training datasets",
          "Model evaluation",
          "Cross-validation"
        ]
      },
      {
        module: "Advanced Topics",
        topics: [
          "Feature engineering",
          "Real-life ML applications",
          "Model deployment"
        ]
      }
    ],
    jobOpportunities: [
      "Machine Learning Engineer (Junior)",
      "AI/ML Analyst",
      "Research Assistant"
    ],
    realLifeSkills: [
      "Predictive thinking",
      "Automation mindset",
      "Logical problem solving"
    ],
    entrepreneurialBenefits: [
      "Build recommendation systems",
      "Create automation tools",
      "Develop AI-powered products"
    ],
    futureScope: "ML will be embedded in healthcare, finance, education, and e-commerce. ML skills will be mandatory for future tech professionals.",
    instructor: {
      name: "Expert Instructors",
      bio: "ML experts with hands-on experience in building intelligent systems."
    }
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Analyze existing data to answer business questions and improve performance using visualization and reporting.",
    duration: "6 months",
    level: "Beginner to Intermediate",
    icon: "TrendingUp",
    price: "₹3,999/month",
    fullDescription: "Data Analytics focuses on analyzing existing data to answer business questions and improve performance.",
    prerequisites: ["Basic spreadsheet knowledge", "Analytical thinking"],
    learningOutcomes: [
      "Master Excel for data analysis",
      "Write SQL queries for databases",
      "Create business dashboards",
      "Generate KPI reports",
      "Visualize data effectively"
    ],
    curriculum: [
      {
        module: "Excel & Data Tools",
        topics: [
          "Advanced Excel functions",
          "Pivot tables",
          "Data validation"
        ]
      },
      {
        module: "SQL for Analytics",
        topics: [
          "Database queries",
          "Joins and aggregations",
          "Data extraction"
        ]
      },
      {
        module: "Data Visualization",
        topics: [
          "Chart creation",
          "Dashboard design",
          "Visual storytelling"
        ]
      },
      {
        module: "Business Reporting",
        topics: [
          "KPI & reporting",
          "Business dashboards",
          "Performance metrics"
        ]
      }
    ],
    jobOpportunities: [
      "Data Analyst",
      "MIS Executive",
      "Business Analyst"
    ],
    realLifeSkills: [
      "Understanding numbers",
      "Reporting accuracy",
      "Logical reasoning"
    ],
    entrepreneurialBenefits: [
      "Sales & marketing analytics",
      "Customer trend analysis",
      "Cost optimization"
    ],
    futureScope: "Data Analytics will grow as companies want better decisions, performance tracking, and cost reduction. Very stable career till 2030.",
    instructor: {
      name: "Expert Instructors",
      bio: "Analytics professionals with corporate experience in MIS and business intelligence."
    }
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence (AI)",
    description: "Create intelligent systems that can think, learn, and assist humans using cutting-edge AI technologies.",
    duration: "6 months",
    level: "Intermediate to Advanced",
    icon: "Sparkles",
    price: "₹3,999/month",
    fullDescription: "AI focuses on creating intelligent systems that can think, learn, and assist humans.",
    prerequisites: ["Programming knowledge", "Problem-solving skills"],
    learningOutcomes: [
      "Understand AI fundamentals and concepts",
      "Build AI-powered applications",
      "Work with natural language processing",
      "Apply AI ethics responsibly",
      "Use modern AI tools and platforms"
    ],
    curriculum: [
      {
        module: "AI Fundamentals",
        topics: [
          "Introduction to AI",
          "AI vs ML vs Deep Learning",
          "AI applications"
        ]
      },
      {
        module: "Real-world AI Applications",
        topics: [
          "Computer vision basics",
          "Natural language concepts",
          "Recommendation systems"
        ]
      },
      {
        module: "AI Tools & Platforms",
        topics: [
          "Modern AI frameworks",
          "Cloud AI services",
          "API integration"
        ]
      },
      {
        module: "AI Ethics & Responsibility",
        topics: [
          "Ethical considerations",
          "Bias in AI",
          "Responsible AI development"
        ]
      }
    ],
    jobOpportunities: [
      "AI Analyst",
      "AI Engineer (Junior)",
      "Automation Specialist"
    ],
    realLifeSkills: [
      "Smart decision systems",
      "Productivity enhancement",
      "Automation understanding"
    ],
    entrepreneurialBenefits: [
      "AI-based startups",
      "Automation services",
      "Smart digital products"
    ],
    futureScope: "AI will dominate education, healthcare, manufacturing, and government systems. AI skills will be essential, not optional by 2030.",
    instructor: {
      name: "Expert Instructors",
      bio: "AI specialists focused on practical applications and ethical AI development."
    }
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing (2026–2030 Ready)",
    description: "Master future-ready digital marketing including SEO, SEM, social media, and AI-powered marketing strategies.",
    duration: "4 months",
    level: "Beginner to Intermediate",
    icon: "Megaphone",
    price: "₹3,999/month",
    fullDescription: "This course prepares students for future digital marketing, not outdated tactics.",
    prerequisites: ["Basic internet knowledge", "Communication skills"],
    learningOutcomes: [
      "Master SEO for modern algorithms",
      "Run effective SEM campaigns",
      "Create social media strategies",
      "Develop content marketing plans",
      "Use AI-powered marketing tools"
    ],
    curriculum: [
      {
        module: "SEO (Future Algorithms)",
        topics: [
          "Modern SEO techniques",
          "Keyword research",
          "On-page & off-page optimization"
        ]
      },
      {
        module: "SEM & Paid Advertising",
        topics: [
          "Google Ads fundamentals",
          "Campaign optimization",
          "ROI tracking"
        ]
      },
      {
        module: "Social Media Marketing",
        topics: [
          "Platform strategies",
          "Content creation",
          "Engagement tactics"
        ]
      },
      {
        module: "AI-Powered Marketing & Branding",
        topics: [
          "Content strategy",
          "AI marketing tools",
          "Brand building"
        ]
      }
    ],
    jobOpportunities: [
      "Digital Marketer",
      "SEO Executive",
      "Social Media Manager"
    ],
    realLifeSkills: [
      "Personal branding",
      "Online growth",
      "Communication skills"
    ],
    entrepreneurialBenefits: [
      "Freelancing opportunities",
      "Online business growth",
      "Marketing agency creation"
    ],
    futureScope: "Marketing will shift to AI-based personalization, creator economy, and performance-driven branding. Digital marketers will be in constant demand.",
    instructor: {
      name: "Expert Instructors",
      bio: "Digital marketing experts specializing in future-ready strategies and AI integration."
    }
  }
];