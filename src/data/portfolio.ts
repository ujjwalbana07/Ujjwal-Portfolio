export const portfolioData = {
    hero: {
        name: "Ujjwal Bana",
        title: "MS-MIS @ Texas A&M University | Ex-Associate Consultant at Oracle",
        tagline: "Bridging Business & Technology through Systems Analysis.",
        cta: "View My Work",
    },
    about: {
        title: "About Me",
        description: "I’m Ujjwal Bana, a graduate student in Management Information Systems at Texas A&M University, focused on building data-driven and system-oriented software solutions. I previously worked as an Associate Consultant at Oracle Financial Software Services, where I gained hands-on experience with enterprise-scale systems, data flows, and business-critical applications. Alongside this, my role as a Finance Coordinator at BITS strengthened my understanding of process management and decision-making, enabling me to approach software development with a strong balance of technical depth and business perspective.",
        mindset: [
            "Thinks like a System Analyst",
            "Understands Information, Data, and Architecture (IDA)",
            "Designs systems, not just code"
        ]
    },
    projects: [
        {
            title: "EventSync",
            subtitle: "Campus Engagement & Analytics Platform",
            description: "solved the 'fragmented events' problem at Texas A&M by aggregating data from 15+ student organizations into a single, real-time feed. Engineered a decoupled architecture that handled 5k+ concurrent requests, providing recruiters with granular engagement analytics to identify top talent based on participation trends.",
            impact: "Unified campus events, boosting student engagement by 40%.",
            techIds: ["React", "Node.js", "Predictive Analytics"],
            link: "https://github.com/ujjwalbana07/EventSync",
            image: "/eventsync.jpeg",
            details: {
                problem: "Disconnect between students and campus opportunities.",
                solution: "Centralized aggregation engine with real-time sync.",
                impact: "40% increase in event discovery and attendance.",
            }
        },
        {
            title: "NeuroSync",
            subtitle: "Cognitive Workflow Automation Engine",
            description: "Built an intelligent system that doesn't just manage workflows but 'thinks' about them. mimics cognitive pattern recognition to ingest unstructured audits/reports and automatically propose optimized process routes. Designed a modular plugin architecture allowing enterprises to scale custom logic without core system downtime.",
            impact: "Reduced process bottlenecks by 30% via AI-driven routing.",
            techIds: ["Machine Learning", "System Design", "Graph Algorithms"],
            link: "https://github.com/ujjwalbana07/NeuroSync",
            image: "/Neurosync.jpeg",
            details: {
                problem: "Static workflows failed to adapt to dynamic data.",
                solution: "Adaptive engine using cognitive pattern matching.",
                impact: "30% reduction in manual process intervention.",
            }
        },
        {
            title: "PatentMind",
            subtitle: "Semantic Patent Intelligence System",
            description: "Revolutionized patent discovery by moving beyond keyword search to semantic understanding. Constructed a knowledge graph that links isolated patents into innovation clusters, enabling legal teams to find 'hidden' prior art 10x faster. Implemented advanced search logic that understands context, not just syntax.",
            impact: "Accelerated prior art discovery by 10x using semantic search.",
            techIds: ["NLP / IR", "Knowledge Graphs", "Search Algorithms"],
            link: "https://github.com/ujjwalbana07/PatentMind",
            image: "/patent_mind.jpg",
            details: {
                problem: "Keyword search checks text, not meaning.",
                solution: "Semantic vector search with knowledge graphing.",
                impact: "10x faster discovery of relevant prior art.",
            }
        }
    ],
    experience: [
        {
            company: "Oracle Financial Services Software Limited",
            role: "Associate Consultant",
            period: "Jun 2023 – Aug 2025",
            description: "As an Associate Consultant, I engineered core banking systems handling 700K+ daily transactions with Java, Spring Boot, and Oracle DB, ensuring high concurrency, fault tolerance, and ISO 20022/SFMS compliance. I optimized settlement workflows, automated SLA monitoring, and built a Virtual Account Management System, improving efficiency and reducing operational costs.",
            highlights: [],
            focusAreas: [
                "Fintech innovation",
                "banking and payments system optimization",
                "scalable backend architecture",
                "workflow automation",
                "real-time monitoring",
                "operational efficiency"
            ]
        },
        {
            company: "Indian Dental Association",
            role: "Junior Developer",
            period: "Dec 2022 – Mar 2023",
            description: "As a Junior Developer, I developed high-availability e-commerce microservices for 10K+ monthly users, automated data aggregation and reporting pipelines, and integrated secure REST APIs with compliance systems, enhancing system reliability and data integrity using JavaScript, MySQL, and AWS.",
            highlights: [],
            focusAreas: [
                "Web and cloud development",
                "microservices architecture",
                "data automation",
                "API integration",
                "secure and scalable systems",
                "analytics dashboards"
            ]
        }
    ],
    education: [
        {
            institution: "Texas A&M University",
            degree: "Master of Science in Management Information Systems (MS-MIS)",
            period: "Expected Graduation 2027", // Adjust
            details: "Specialization in Systems Analysis & Data Analytics."
        },
        {
            institution: "University of Mumbai",
            degree: "Bachelor of Engineering in Information Technology",
            period: "2019 – 2023",
            details: "Focused on Software Engineering, Database Management, and Data Structures."
        }
    ],
    skillCategories: [
        {
            title: "Programming Languages",
            skills: ["Java", "JavaScript", "SQL", "Python (Analytics)"],
            icon: "Terminal"
        },
        {
            title: "Web & Frontend",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Oracle JET"],
            icon: "Monitor"
        },
        {
            title: "Backend & Enterprise",
            skills: ["Java EE", "Spring Boot", "RESTful APIs", "Oracle WebLogic"],
            icon: "Server"
        },
        {
            title: "Databases",
            skills: ["Oracle Database", "MySQL", "PostgreSQL"],
            icon: "Database"
        },
        {
            title: "BI & Reporting",
            skills: ["Oracle BI Publisher", "Power BI", "Tableau", "SQL Reporting"],
            icon: "BarChart3"
        },
        {
            title: "Cloud & DevOps",
            skills: ["Oracle Cloud (OCI)", "Git & GitHub", "CI/CD Basics", "Linux/Unix"],
            icon: "Cloud"
        },
        {
            title: "Enterprise & FinTech",
            skills: ["Core Banking Systems", "Oracle Financial Services", "EAI Integration", "Transaction Systems"],
            icon: "Building2"
        },
        {
            title: "Data, Analytics & MIS",
            skills: ["Data Analysis", "Business Intelligence", "System Analysis", "IT Strategy"],
            icon: "TrendingUp"
        }
    ],
    certifications: [
        {
            title: "Microsoft Certified: Power BI Data Analyst Associate",
            issuer: "Microsoft",
            image: "/microsoft.png",
            link: "https://learn.microsoft.com/en-us/users/ujjwalbana-6790/credentials/c288e676e9842194?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            knowledge: [
                "Data modeling and transformation using Power Query",
                "Building interactive dashboards and reports",
                "DAX for calculations and measures",
                "Data visualization best practices",
                "Business intelligence and analytics workflows"
            ]
        },
        {
            title: "Oracle Database SQL Certified Associate",
            issuer: "Oracle",
            image: "/oracle.png",
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FE47EE42671741F889373E42C5041C78D566C637D26C2B75D9D0C60405B5177C",
            knowledge: [
                "Core SQL queries (SELECT, JOIN, SUBQUERIES)",
                "INSERT, UPDATE, DELETE operations",
                "DDL and DCL commands",
                "Indexes, constraints, and query optimization basics",
                "Data modeling and normalization concepts"
            ]
        },
        {
            title: "AWS Certified AI Practitioner",
            issuer: "Amazon Web Services",
            image: "/aws.png",
            link: "https://www.credly.com/badges/af62a647-87f9-47d4-8842-fd368075afb8",
            knowledge: [
                "AI, ML, and Generative AI fundamentals",
                "Responsible and ethical AI practices",
                "AWS AI/ML services and real-world use cases",
                "Foundation models and GenAI concepts",
                "AWS cloud infrastructure and pricing models"
            ]
        }
    ],
    leadership: [
        {
            role: "Finance Coordinator",
            organization: "BITS",
            image: "/BITS.jpeg",
            description: "Managed budgeting and financial planning for student-led initiatives and institutional events. Coordinated with multiple stakeholders to track expenses, approvals, and fund utilization. Ensured transparency, compliance, and efficient allocation of financial resources. Developed strong skills in financial coordination, reporting, and cross-team collaboration."
        },
        {
            role: "Founder",
            organization: "Friends & Charity",
            image: "/friends.jpg",
            description: "Founded and led a community-driven initiative focused on social impact and charitable outreach. Organized fundraising drives and coordinated volunteer efforts to support local causes. Managed planning, execution, and resource distribution for multiple charity activities. Demonstrated leadership in team building, social responsibility, and grassroots organization."
        }
    ],
    contact: {
        github: "https://github.com/ujjwalbana07",
        linkedin: "https://linkedin.com/in/ujjwalbana",
        email: "mailto:ujjwalbana@gmail.com",
        phone: "+1 9795749622"
    }
};
