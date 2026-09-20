export const portfolioData = {
    hero: {
        name: "Ujjwal Bana",
        title: "MS-MIS @ Texas A&M University | Former Associate Consultant at Oracle",
        tagline: "Building data pipelines, distributed systems, and applied AI.",
        cta: "View My Work",
    },
    about: {
        title: "About Me",
        description: "I'm Ujjwal Bana, a graduate student in Management Information Systems at Texas A&M University, building at the intersection of data engineering, distributed systems, and applied AI — with a particular focus on RAG pipelines and agentic systems. I've built multi-agent architectures using LangChain and CrewAI, including a retrieval-augmented system that indexes and reasons over thousands of documents to cut manual research time significantly. Before graduate school, I spent two years as an Associate Consultant at Oracle Financial Services, where I worked on enterprise-scale payment infrastructure processing hundreds of thousands of daily transactions — experience that shaped how I think about reliability, data integrity, and system design at scale. My role as Finance Coordinator at BITS added a business lens to that technical foundation, sharpening how I weigh trade-offs and communicate decisions. I like working across the full stack of a problem: from the data model and pipeline up through the agent or API that acts on it.",
        mindset: [
            "Thinks like a System Analyst",
            "Understands Information, Data, and Architecture (IDA)",
            "Designs systems, not just code"
        ]
    },
    featuredProjects: [
        {
            title: "ATLAS",
            subtitle: "Event-Driven Trading Lifecycle & Audit System",
            tagline: "Three isolated data paths for trading execution, authoritative state, and immutable event archives.",
            description: "A high-performance, event-driven trading platform modeling real exchange architecture across three isolated data paths. The hot path runs order gateway → OMS → venue simulator over a Redpanda (Kafka-protocol) stream, tuned for throughput and strict ordering rather than durability. The state path persists authoritative order and balance data in DynamoDB using conditional writes and idempotency guards, keeping every service stateless and safely restartable. The cold path exports every stream event to S3 as immutable JSONL for regulatory audit and data-lake ingestion. Go microservices handle execution; a Next.js/TypeScript trading console renders live order entry, real-time market simulation, risk/exposure previews, and an adaptive layout that reflows analytics panels based on order volume. Infrastructure is fully Terraform-provisioned on AWS, with OpenTelemetry, Prometheus, and Grafana wired in for production-style observability.",
            highlights: ["Go execution services connected by Kafka-protocol Redpanda streams", "DynamoDB conditional writes and idempotency guards protect authoritative state", "Immutable JSONL event exports to S3 for audit and data-lake ingestion", "Terraform-provisioned AWS infrastructure with OpenTelemetry, Prometheus, and Grafana"],
            techIds: ["Go", "Kafka / Redpanda", "DynamoDB", "Terraform"],
            link: "https://github.com/ujjwalbana07/atlas",
            liveDemo: "https://atlas-sage-nine.vercel.app/console",
            github: "https://github.com/ujjwalbana07/atlas",
            image: null,
            featured: true,
            details: {
                problem: "Modern trading systems demand ultra-low latency execution with complete regulatory traceability.",
                solution: "Event-driven architecture with decoupled execution and analytics pipelines, immutable event capture, and real-time observability.",
                impact: "Isolated execution, authoritative state, and immutable event archive paths.",
            }
        },
        {
            title: "Atlas AI",
            subtitle: "Multi-Agent Travel Planning System",
            tagline: "Supervisor-routed specialists with persistent workflows and human itinerary review.",
            description: "A stateful multi-agent system where a supervisor node routes each request to the specialist agents it actually needs, rather than running every agent on every query. Flight search combines an AviationStack MCP integration with a bundled offline catalog of 7,800+ IATA/ICAO airports, so lookups keep working even when the live service is unavailable. Hotel and weather research run through separate Tavily and OpenWeather MCP servers, one of which is a custom-built local MCP weather server. The core workflow is a LangGraph state machine checkpointed to PostgreSQL, which pauses execution after drafting an itinerary for human review; approvals, rejections, and free-text revision requests (\"make this 10 days instead of 5\") all resume the same graph from its saved thread rather than starting over. Deployed as a FastAPI app with lazy-loaded graph initialization, so the health check and home route work even before the LangGraph secrets are configured.",
            highlights: [
                "Supervisor routes requests to the relevant flight, hotel, and weather specialists",
                "AviationStack MCP integration with an offline catalog of 7,800+ airports",
                "PostgreSQL checkpoints preserve the same LangGraph thread through human review and revisions",
                "Lazy-loaded FastAPI initialization keeps health and home routes available before graph secrets are configured"
            ],
            techIds: ["LangGraph", "FastAPI", "Model Context Protocol", "PostgreSQL"],
            link: "https://github.com/ujjwalbana07/Atlas-AI",
            liveDemo: "https://atlas-ai-murex-ten.vercel.app",
            github: "https://github.com/ujjwalbana07/Atlas-AI",
            image: null,
            featured: true,
            details: {
                problem: "Travel planning requires coordinating specialist research and preserving context through itinerary revisions.",
                solution: "Supervisor-routed MCP specialists with PostgreSQL-checkpointed LangGraph execution and human review.",
                impact: "Resumable itinerary planning with offline airport lookup support."
            }
        },
        {
            title: "Acquisition Intelligence Platform",
            subtitle: "Institutional Real Estate Underwriting Dashboard",
            tagline: "Acquisition scoring, rules-based risk detection, and investment committee memos for CR Equity AI.",
            description: "An executive-grade underwriting tool built for CR Equity AI that scores acquisition targets across 7 weighted axes (cap rate, levered cash, LTV, DSCR, opex ratio, break-even, CapEx load), with a rules-based risk engine that flags structural vulnerabilities like negative leverage before they reach the investment committee. Business logic is fully decoupled from the component tree, isolated into a scoring-weight config, a calculations module, and a separate risk-detection engine, so the underwriting desk can retune thresholds without touching UI code. An IC Memo generator turns the quantitative output into narrative deal memos, and Recharts drives the capital-flow waterfall visualization.",
            highlights: ["Acquisition scoring across seven configurable weighted axes", "Rules-based risk detection flags structural vulnerabilities such as negative leverage", "Separate scoring configuration, calculations, and risk engine keep business logic independent of UI", "IC Memo generation and Recharts capital-flow waterfall visualization"],
            techIds: ["Vite", "Recharts", "Decoupled Business Logic"],
            link: "https://github.com/ujjwalbana07/Acquisition-Intelligence",
            liveDemo: "https://acquisition-intelligence-two.vercel.app/",
            github: "https://github.com/ujjwalbana07/Acquisition-Intelligence",
            image: null,
            featured: true,
            details: {
                problem: "Real estate acquisition teams lack integrated tools combining financial rigor with AI-driven advisory.",
                solution: "Configurable seven-axis scoring, an independent risk engine, and IC Memo generation.",
                impact: "Acquisition evaluation with narrative deal memos and capital-flow visualization.",
            }
        }
    ],
    projects: [
        {
            title: "EventSync",
            subtitle: "Campus Engagement & Analytics Platform",
            description: "Solves the fragmented-events problem at Texas A&M by aggregating data from 15+ student organizations into a single real-time feed, built on a decoupled architecture that separates ingestion from presentation so new organization sources plug in without touching the core pipeline.",
            impact: "Unified event discovery across 15+ student organizations.",
            techIds: ["React", "Node.js", "Real-Time Data Aggregation"],
            link: "https://github.com/ujjwalbana07/EventSync",
            image: "/eventsync.jpeg",
            details: {
                problem: "Disconnect between students and campus opportunities.",
                solution: "Centralized aggregation engine with real-time sync.",
                impact: "Unified event discovery across 15+ student organizations.",
            }
        },
        {
            title: "NeuroSync",
            subtitle: "Cognitive Workflow Automation Engine",
            description: "Goes past standard workflow management by mimicking cognitive pattern recognition to ingest unstructured audits and reports and act on them automatically, using graph-based reasoning to model dependencies between workflow steps rather than a fixed linear pipeline.",
            impact: "Automated workflows informed by unstructured audits and reports.",
            techIds: ["Machine Learning", "Graph Algorithms", "Workflow Automation"],
            link: "https://github.com/ujjwalbana07/NeuroSync",
            image: "/Neurosync.jpeg",
            details: {
                problem: "Static workflows failed to adapt to dynamic data.",
                solution: "Adaptive engine using cognitive pattern matching.",
                impact: "Graph-based reasoning models dependencies between workflow steps.",
            }
        },
        {
            title: "PatentMind",
            subtitle: "Semantic Patent Intelligence System",
            description: "Moves patent discovery beyond keyword search into semantic retrieval, constructing a knowledge graph that links isolated patents into innovation clusters so related prior art surfaces even when it shares no vocabulary with the query.",
            impact: "Semantic retrieval connects related patents beyond shared keywords.",
            techIds: ["NLP", "Vector Search", "Knowledge Graphs"],
            link: "https://github.com/ujjwalbana07/PatentMind",
            image: "/patent_mind.jpg",
            details: {
                problem: "Keyword search checks text, not meaning.",
                solution: "Semantic vector search with knowledge graphing.",
                impact: "Related prior art surfaces even without shared query vocabulary.",
            }
        }
    ],
    achievements: [
        {
            title: "Aerial View Hackathon Winner — Ranked #1",
            hook: "Engineered the top-ranking solution in a competitive arena of technical innovation.",
            description: "Secured the #1 overall rank at the Aerial View Hackathon by architecting and rapidly deploying a high-impact, technically rigorous prototype under extreme constraints. Competing against top engineering talent, this victory demonstrates proven ability to bridge ambitious architectural design with flawless, product-oriented execution.",
            highlight: "Awarded 1st Place for technical excellence, architectural innovation, and precise product execution.",
            image: "/hackathon_winner.jpg",
        }
    ],
    experience: [
        {
            company: "Myriad Distribution",
            role: "Software Engineering Intern",
            period: "Internship",
            description: "Built a full-stack inventory management platform using React, Node.js, and PostgreSQL to solve real-time stock visibility challenges across 50+ warehouses. Delivered the data model, backend services, operational dashboards, and a frontend for warehouse staff to act on inventory insights.",
            highlights: [
                "Designed a normalized PostgreSQL schema for stock levels, warehouse locations, and product movement, then built RESTful APIs to keep concurrent updates consistent",
                "Developed SQL aggregation pipelines for inventory turnover dashboards and improved query latency with indexing and materialized views, reducing holding costs by 20%",
                "Implemented threshold-based restock alerting with Node.js scheduled jobs and PostgreSQL triggers, cutting stock discrepancies by 35%",
                "Enabled same-day fulfillment across warehouse locations by surfacing replenishment actions automatically instead of relying on manual checks",
                "Worked closely with operations teams to align restock thresholds and dashboard priorities with day-to-day fulfillment workflows"
            ],
            focusAreas: [
                "Full-stack development",
                "React and Node.js",
                "PostgreSQL data modeling",
                "RESTful API design",
                "SQL query optimization",
                "Inventory and operations systems"
            ]
        },
        {
            company: "Texas A&M Health — IPER Program",
            role: "Student Technician",
            period: "Feb 2026 – Present",
            description: "Support Texas A&M Health's interprofessional education program through structured healthcare datasets, academic data pipelines, and enterprise CMS publishing across 6+ clinical disciplines, serving 1000+ faculty and students.",
            highlights: [
                "Engineered and maintained structured healthcare datasets across 6+ clinical disciplines, enforcing data schemas, taxonomy design, and integrity validation protocols",
                "Executed ETL-style data pipelines for longitudinal academic records — research outcomes, awards registries, and performance datasets — serving 1000+ faculty and students",
                "Performed data quality audits, anomaly detection, and bulk transformation workflows across multi-departmental institutional health data repositories",
                "Designed structured data templates and content taxonomies within an enterprise CMS, enabling queryable, version-controlled data publishing for interprofessional health research programs",
                "Collaborated with cross-functional clinical and academic teams to standardize data collection workflows and reporting pipelines across interdisciplinary healthcare education initiatives"
            ],
            focusAreas: [
                "Healthcare data management",
                "ETL pipelines",
                "Data quality and validation",
                "Taxonomy design",
                "Enterprise CMS",
                "Interdisciplinary reporting"
            ]
        },
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
            period: "Expected Graduation 2027",
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
            skills: ["Go", "Python", "TypeScript", "JavaScript", "Java", "SQL"],
            icon: "Terminal"
        },
        {
            title: "Applied AI & Agents",
            skills: ["LangGraph", "LangChain", "CrewAI", "RAG pipelines", "Model Context Protocol", "Vector search"],
            icon: "TrendingUp"
        },
        {
            title: "Data Engineering",
            skills: ["Kafka / Redpanda", "ETL pipelines", "Data modeling", "SQL optimization", "Data quality", "Materialized views"],
            icon: "Database"
        },
        {
            title: "Backend & APIs",
            skills: ["FastAPI", "Node.js", "Spring Boot", "RESTful APIs", "Event-driven architecture", "Idempotent services"],
            icon: "Server"
        },
        {
            title: "Web & Frontend",
            skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Recharts", "Oracle JET"],
            icon: "Monitor"
        },
        {
            title: "Databases & Storage",
            skills: ["PostgreSQL", "DynamoDB", "Oracle Database", "MySQL", "AWS S3"],
            icon: "Database"
        },
        {
            title: "Cloud & Observability",
            skills: ["AWS", "Terraform", "OpenTelemetry", "Prometheus", "Grafana", "Git & GitHub"],
            icon: "Cloud"
        },
        {
            title: "Analytics & Financial Systems",
            skills: ["Power BI", "Tableau", "Core banking", "Payment infrastructure", "Real estate underwriting", "SQL reporting"],
            icon: "BarChart3"
        },
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
