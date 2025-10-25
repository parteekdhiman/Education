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
  instructor: {
    name: string;
    bio: string;
    expertise: string;
  };
}

export const courses: Course[] = [
  {
    id: "web-development",
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
    duration: "8 weeks",
    level: "Beginner",
    icon: "Code2",
    price: "$299",
    fullDescription: "A comprehensive introduction to web development covering essential technologies and best practices.",
    prerequisites: ["Basic computer skills", "Internet browsing experience"],
    learningOutcomes: [
      "Create responsive websites using HTML and CSS",
      "Add interactivity with JavaScript",
      "Understand modern web development workflows"
    ],
    curriculum: [
      {
        module: "HTML Fundamentals",
        topics: ["HTML structure", "Semantic elements", "Forms and validation"]
      },
      {
        module: "CSS Styling",
        topics: ["Selectors and properties", "Flexbox and Grid", "Responsive design"]
      },
      {
        module: "JavaScript Basics",
        topics: ["Variables and functions", "DOM manipulation", "Event handling"]
      }
    ],
    instructor: {
      name: "John Smith",
      bio: "Senior web developer with 10+ years of experience.",
      expertise: "Frontend Development, UX Design"
    }
  },
  {
    id: "data-analytics",
    title: "Data Analytics Essentials",
    description: "Introduction to data analysis using popular tools and techniques.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: "BarChart3",
    price: "$399",
    fullDescription: "Learn how to collect, analyze, and visualize data to make informed business decisions.",
    prerequisites: ["Basic mathematics", "Spreadsheet experience"],
    learningOutcomes: [
      "Analyze data using statistical methods",
      "Create compelling visualizations",
      "Interpret and communicate findings"
    ],
    curriculum: [
      {
        module: "Data Collection",
        topics: ["Data sources", "Data cleaning", "Data validation"]
      },
      {
        module: "Analysis Techniques",
        topics: ["Descriptive statistics", "Correlation analysis", "Trend identification"]
      },
      {
        module: "Data Visualization",
        topics: ["Chart types", "Dashboard creation", "Storytelling with data"]
      }
    ],
    instructor: {
      name: "Sarah Johnson",
      bio: "Data scientist with expertise in business analytics.",
      expertise: "Data Analysis, Statistics, Visualization"
    }
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using modern frameworks.",
    duration: "12 weeks",
    level: "Intermediate",
    icon: "Smartphone",
    price: "$499",
    fullDescription: "Create mobile applications that work on both iOS and Android devices.",
    prerequisites: ["Programming basics", "Object-oriented concepts"],
    learningOutcomes: [
      "Develop cross-platform mobile apps",
      "Implement user interfaces for mobile",
      "Deploy applications to app stores"
    ],
    curriculum: [
      {
        module: "Mobile Fundamentals",
        topics: ["Mobile UX principles", "Platform differences", "Navigation patterns"]
      },
      {
        module: "Development Frameworks",
        topics: ["React Native", "State management", "API integration"]
      },
      {
        module: "Deployment",
        topics: ["App store guidelines", "Performance optimization", "Testing strategies"]
      }
    ],
    instructor: {
      name: "Michael Chen",
      bio: "Mobile development expert with apps published on major platforms.",
      expertise: "React Native, iOS, Android"
    }
  }
];