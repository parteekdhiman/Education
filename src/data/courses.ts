export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  image: string;
  price: string;
  fullDescription: string;
  prerequisites: string[];
  learningOutcomes: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  jobOpportunities?: string[];
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
    icon: "Code2",
    image: "/images/fullstack-development.png",
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
    icon: "BarChart3",
    image: "/images/Data-science.png",
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
    duration: "4 months",
    icon: "Brain",
    image: "/images/machine_learning.jpeg",
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
    icon: "TrendingUp",
    image: "/images/data-analytics.jpg",
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
    icon: "Sparkles",
    image: "/images/AI.jpg",
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
    icon: "Megaphone",
    image: "/images/AI-in-digital-marketing-2025.png",
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
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description: "Deploy, manage, and scale applications on cloud platforms like AWS, Azure, and Google Cloud.",
    duration: "5 months",
    icon: "Cloud",
    image: "/images/cloud-computing.png",
    price: "₹4,499/month",
    fullDescription: "Cloud Computing teaches students to deploy, manage, and scale applications on industry-leading platforms. Master containerization, DevOps, and serverless architecture.",
    prerequisites: ["Basic programming knowledge", "Linux fundamentals"],
    learningOutcomes: [
      "Understand cloud architecture and models",
      "Deploy applications on AWS/Azure/GCP",
      "Manage cloud databases and storage",
      "Implement cloud security best practices",
      "Master CI/CD and DevOps pipelines"
    ],
    curriculum: [
      {
        module: "Cloud Fundamentals",
        topics: [
          "Cloud service models (IaaS, PaaS, SaaS)",
          "Cloud deployment models",
          "AWS, Azure, GCP overview"
        ]
      },
      {
        module: "Core Cloud Services",
        topics: [
          "Compute services (EC2, VMs)",
          "Storage solutions",
          "Database management",
          "Networking & security"
        ]
      },
      {
        module: "DevOps & Containerization",
        topics: [
          "Docker fundamentals",
          "Kubernetes orchestration",
          "CI/CD pipelines",
          "Infrastructure as Code"
        ]
      },
      {
        module: "Cloud Architecture & Best Practices",
        topics: [
          "Scalable architecture design",
          "Cost optimization",
          "Disaster recovery",
          "Security compliance"
        ]
      }
    ],
    jobOpportunities: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Cloud Architect",
      "Solutions Architect"
    ],
    realLifeSkills: [
      "Infrastructure management",
      "Cost optimization",
      "System reliability",
      "Scalability design"
    ],
    entrepreneurialBenefits: [
      "Build scalable startups",
      "Reduce infrastructure costs",
      "Enable global application deployment"
    ],
    futureScope: "Cloud computing is the backbone of modern tech. Every company is migrating to cloud. Cloud expertise will be highly demanded through 2030 and beyond.",
    instructor: {
      name: "Expert Instructors",
      bio: "Cloud experts with hands-on experience in AWS, Azure, and Google Cloud Platform."
    }
  },
  {
    id: "graphics-designing",
    title: "Graphics Designing",
    description: "Create stunning visuals using industry-standard tools like Corel Draw, Figma, and Adobe Creative Suite.",
    duration: "6 months",
    icon: "Palette",
    image: "/images/Graphic-Design.webp",
    price: "₹3,000/month",
    fullDescription: "Graphics Designing teaches students to create professional visual content using modern design tools and principles.",
    prerequisites: ["Basic computer skills", "Creative mindset"],
    learningOutcomes: [
      "Master Adobe Creative Suite (Photoshop, Illustrator)",
      "Design for web and print",
      "Understand UI/UX design principles",
      "Create compelling marketing visuals",
      "Develop professional design portfolios"
    ],
    curriculum: [
      {
        module: "Design Fundamentals",
        topics: [
          "Design principles & theory",
          "Color theory",
          "Typography",
          "Composition"
        ]
      },
      {
        module: "Design Tools",
        topics: [
          "Corel Draw mastery",
          "Figma for UI/UX",
          "Vector design techniques",
          "Premiere Pro basics"
        ]
      },
      {
        module: "Digital Design Tools",
        topics: [
          "Figma for UI/UX",
          "Web design principles",
          "Responsive design",
          "Design systems"
        ]
      },
      {
        module: "Professional Portfolio Development",
        topics: [
          "Branding & identity",
          "Marketing collateral",
          "Portfolio creation",
          "Client presentation"
        ]
      }
    ],
    jobOpportunities: [
      "Graphic Designer",
      "UI/UX Designer",
      "Web Designer",
      "Brand Designer",
      "Marketing Designer"
    ],
    realLifeSkills: [
      "Visual communication",
      "Creative problem-solving",
      "Professional presentation",
      "Brand building"
    ],
    entrepreneurialBenefits: [
      "Freelance design work",
      "Design agency creation",
      "Brand consulting",
      "Product design business"
    ],
    futureScope: "Visual content dominates digital marketing. Skilled designers are in constant demand across tech, marketing, entertainment, and e-commerce industries.",
    instructor: {
      name: "Expert Instructors",
      bio: "Professional designers with portfolio experience in branding, UI/UX, and digital media."
    }
  },
  {
    id: "core-python",
    title: "Core Python",
    description: "Master Python programming fundamentals in 2 months. Learn the essentials and build real projects.",
    duration: "2 months",
    icon: "Code2",
    image: "/images/python-code.jpg",
    price: "₹3,000/month",
    fullDescription: "A comprehensive 2-month Python program covering core concepts, data structures, and practical application development.",
    prerequisites: ["Basic computer knowledge"],
    learningOutcomes: [
      "Write Python programs from scratch",
      "Understand variables, loops, and functions",
      "Work with files and data",
      "Solve real-world problems with Python",
      "Build simple automation scripts"
    ],
    curriculum: [
      {
        module: "Python Basics",
        topics: ["Variables & data types", "Operators", "Input/Output"]
      },
      {
        module: "Control Flow",
        topics: ["If-else statements", "Loops", "Break & continue"]
      },
      {
        module: "Functions & Modules",
        topics: ["Function definition", "Parameters & return", "Using libraries"]
      },
      {
        module: "Practical Applications",
        topics: ["File operations", "String manipulation", "Simple projects"]
      }
    ],
    realLifeSkills: ["Problem-solving", "Logical thinking", "Coding confidence"],
    entrepreneurialBenefits: ["Build automation tools", "Create scripts for business", "Learn programming foundation"],
    futureScope: "Python is the most popular language. Strong foundation opens doors to data science, AI, web development, and automation.",
    instructor: {
      name: "Expert Instructors",
      bio: "Experienced Python trainers specializing in beginner education and practical coding skills."
    }
  },
  {
    id: "core-java",
    title: "Core Java",
    description: "Master Java programming fundamentals in 2 months. Build enterprise-ready foundation.",
    duration: "2 months",
    icon: "Code2",
    image: "/images/Java.png",
    price: "₹3,000/month",
    fullDescription: "A comprehensive 2-month Java program covering core concepts, OOP principles, and practical application development.",
    prerequisites: ["Basic programming knowledge or Python basics"],
    learningOutcomes: [
      "Write Java programs with proper syntax",
      "Understand Object-Oriented Programming",
      "Work with classes and inheritance",
      "Handle exceptions and errors",
      "Build console and simple GUI applications"
    ],
    curriculum: [
      {
        module: "Java Fundamentals",
        topics: ["Variables & data types", "Operators", "Control structures"]
      },
      {
        module: "Object-Oriented Programming",
        topics: ["Classes & objects", "Inheritance", "Polymorphism", "Encapsulation"]
      },
      {
        module: "Advanced Concepts",
        topics: ["Exception handling", "Collections", "File I/O"]
      },
      {
        module: "Practical Projects",
        topics: ["Console applications", "Simple games", "Data management programs"]
      }
    ],
    realLifeSkills: ["OOP mindset", "Enterprise coding", "Problem decomposition"],
    entrepreneurialBenefits: ["Build business applications", "Create scalable systems", "Enterprise startup foundation"],
    futureScope: "Java powers millions of enterprise systems. Strong Java skills ensure stable, well-paying careers in large organizations.",
    instructor: {
      name: "Expert Instructors",
      bio: "Java specialists with enterprise development experience and strong teaching methodologies."
    }
  },
  {
    id: "cpp",
    title: "C++ Basics",
    description: "Learn C++ fundamentals in 45 days. Build performance-critical applications.",
    duration: "45 days",
    icon: "Code2",
    image: "/images/C++.png",
    price: "₹3,500",
    fullDescription: "An intensive 45-day C++ program covering syntax, memory management, and system-level programming.",
    prerequisites: ["Basic programming knowledge or Python basics"],
    learningOutcomes: [
      "Master C++ syntax and data structures",
      "Understand memory management and pointers",
      "Work with functions and libraries",
      "Apply object-oriented principles",
      "Build efficient, fast applications"
    ],
    curriculum: [
      {
        module: "C++ Fundamentals",
        topics: ["Syntax & data types", "Variables & operators", "Input/Output"]
      },
      {
        module: "Advanced Features",
        topics: ["Pointers & references", "Arrays & strings", "Functions"]
      },
      {
        module: "OOP in C++",
        topics: ["Classes & objects", "Inheritance", "Polymorphism"]
      },
      {
        module: "Practical Applications",
        topics: ["Game development basics", "System programs", "Performance optimization"]
      }
    ],
    realLifeSkills: ["Low-level thinking", "Performance optimization", "Memory management"],
    entrepreneurialBenefits: ["Build high-performance tools", "Create game engines", "System software development"],
    futureScope: "C++ is essential for game development, operating systems, and performance-critical applications. Remains highly relevant through 2030+.",
    instructor: {
      name: "Expert Instructors",
      bio: "C++ experts with experience in systems programming, game development, and performance optimization."
    }
  },
  {
    id: "sql",
    title: "SQL Basics",
    description: "Master SQL database queries in 1 month. Essential for data professionals.",
    duration: "1 month",
    icon: "Database",
    image: "/images/sql.jpeg",
    price: "₹3,500",
    fullDescription: "A comprehensive 1-month SQL program teaching database design, query writing, and data manipulation.",
    prerequisites: ["Basic computer literacy"],
    learningOutcomes: [
      "Write SELECT, INSERT, UPDATE, DELETE queries",
      "Design database schemas",
      "Join and aggregate data",
      "Optimize query performance",
      "Work with real-world databases"
    ],
    curriculum: [
      {
        module: "SQL Fundamentals",
        topics: ["Database basics", "Tables & relationships", "Data types"]
      },
      {
        module: "Query Writing",
        topics: ["SELECT statements", "WHERE clauses", "ORDER BY & LIMIT"]
      },
      {
        module: "Advanced Querying",
        topics: ["JOINs", "Aggregations", "GROUP BY & HAVING"]
      },
      {
        module: "Database Management",
        topics: ["CREATE & ALTER", "INSERT & UPDATE", "Transactions & constraints"]
      }
    ],
    realLifeSkills: ["Data retrieval efficiency", "Logical thinking", "Database reasoning"],
    entrepreneurialBenefits: ["Manage business databases", "Extract business insights", "Data-driven decision making"],
    futureScope: "SQL is timeless. Every company needs database professionals. SQL skills ensure long-term career stability.",
    instructor: {
      name: "Expert Instructors",
      bio: "Database experts with hands-on experience in enterprise SQL systems and data management."
    }
  }
];