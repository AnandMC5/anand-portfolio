export const projects = [

  // ============================================================
  // PERSONAL / PUBLIC PROJECTS
  // ============================================================

  {
    id: "ecommerce-data-engineering-ai-platform",

    title: "E-Commerce Data Engineering & AI Analytics Platform",

    shortDescription:
      "End-to-end data engineering platform combining ETL pipelines, data quality, analytics and an AI BI copilot.",

    description:
      "A production-style e-commerce data platform that processes raw datasets through automated pipelines and exposes business intelligence through APIs and an AI-powered analytics layer.",

    category: "Data Engineering + AI",

    year: "2026",

    featured: true,

    visible: true,

    status: "Completed",

    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "PostgreSQL",
      "Apache Airflow",
      "FastAPI",
      "RAG",
      "Ollama",
      "LLaMA",
      "Docker",
    ],

    githubUrl:
      "https://github.com/AnandMC5/ecommerce-data-engineering-ai-platform",

    liveUrl: "",

    problem:
      "Raw e-commerce datasets require reliable ingestion, validation, transformation and analytics before they can support business decisions.",

    solution:
      "Built an end-to-end platform with incremental ingestion, automated data quality validation, dimensional modeling, KPI APIs, Airflow orchestration and an AI BI copilot.",

    challenges: [
      "Designing incremental data loading",
      "Automating data quality checks",
      "Building reusable Airflow DAGs",
      "Connecting LLMs with business data",
      "Designing reliable analytics pipelines",
    ],

    results:
      "Created an end-to-end analytics platform capable of transforming raw data into business KPIs and AI-assisted insights.",

    architecture: [
      "Raw Data",
      "Incremental ETL",
      "Data Quality",
      "PostgreSQL",
      "Star Schema",
      "FastAPI",
      "AI BI Copilot",
      "Streamlit",
    ],
  },


  {
    id: "automated-car-parking-system",

    title: "Automated Car Parking System",

    shortDescription:
      "An automated parking management system designed to streamline vehicle entry, parking allocation and tracking.",

    description:
      "A software-based automated car parking solution designed to manage parking spaces, vehicle information and parking operations through an organized digital workflow.",

    category: "Software Engineering",

    year: "2023",

    featured: false,

    visible: true,

    status: "Completed",

    technologies: [
      "Python",
      "Automation",
      "Database",
      "Application Development",
    ],

    githubUrl:
      "https://github.com/AnandMC5/Automated_Car_Parking_System",

    liveUrl: "",

    problem:
      "Manual parking management can lead to inefficient space utilization, longer vehicle processing times and difficulty tracking parking information.",

    solution:
      "Developed an automated parking management application to organize vehicle information and parking operations digitally.",

    challenges: [
      "Designing the parking workflow",
      "Managing vehicle information",
      "Handling parking allocation",
      "Creating a simple user workflow",
    ],

    results:
      "Built an automated parking management solution that demonstrates application development, workflow design and data handling.",

    architecture: [
      "User Interface",
      "Parking Management",
      "Vehicle Management",
      "Database",
    ],
  },


  {
    id: "life-insurance-management-system",

    title: "Life Insurance Management System",

    shortDescription:
      "A software application for managing life insurance policies, customer information and insurance operations.",

    description:
      "A management system designed to organize customer information, insurance policies and related insurance operations through a centralized application.",

    category: "Software Engineering",

    year: "2023",

    featured: false,

    visible: true,

    status: "Completed",

    technologies: [
      "Python",
      "Database",
      "Application Development",
      "SQL",
    ],

    githubUrl:
      "https://github.com/AnandMC5/Life_Insurance_Management_System",

    liveUrl: "",

    problem:
      "Insurance operations involve managing customer details, policies and related information that can become difficult to maintain through manual processes.",

    solution:
      "Developed a centralized application for managing customer and insurance policy information.",

    challenges: [
      "Designing policy management workflows",
      "Managing customer information",
      "Structuring insurance data",
      "Implementing database operations",
    ],

    results:
      "Created a centralized insurance management application demonstrating database-driven application development.",

    architecture: [
      "Application Layer",
      "Customer Management",
      "Policy Management",
      "Database",
    ],
  },


  // ============================================================
  // CURRENTLY BUILDING
  // ============================================================

  {
    id: "open-aix",

    title: "OpenAIX",

    shortDescription:
      "An AI knowledge platform for indexing and querying documents using embeddings, vector search and RAG.",

    description:
      "OpenAIX is an AI application currently under development, designed to ingest different document types, create embeddings and provide intelligent retrieval and question answering.",

    category: "Generative AI / RAG",

    year: "2026",

    featured: true,

    visible: true,

    status: "Currently Building",

    technologies: [
      "Python",
      "FastAPI",
      "Ollama",
      "LLaMA",
      "Qdrant",
      "Embeddings",
      "RAG",
      "Docker",
    ],

    githubUrl: "",

    liveUrl: "",

    problem:
      "Important information is often distributed across PDFs, Word documents, spreadsheets, CSV files and other formats, making it difficult to search and interact with efficiently.",

    solution:
      "Building a document ingestion and retrieval architecture that converts multiple file formats into searchable vector representations and uses Retrieval-Augmented Generation for intelligent question answering.",

    challenges: [
      "Supporting multiple document formats",
      "Designing effective document chunking",
      "Managing vector embeddings",
      "Improving retrieval quality",
      "Integrating local LLM inference",
    ],

    results:
      "Currently building a modular RAG platform capable of processing multiple data sources and providing AI-powered document retrieval.",

    architecture: [
      "Document Loaders",
      "Chunking",
      "Embeddings",
      "Qdrant",
      "Retriever",
      "LLM",
      "FastAPI",
    ],
  },


  {
    id: "ai-prompt-optimizer",

    title: "AI Prompt Optimizer",

    shortDescription:
      "An AI-powered application that analyzes, scores and improves user prompts using LLM-based evaluation.",

    description:
      "AI Prompt Optimizer is a Generative AI application currently under development. It analyzes user prompts, evaluates their quality and generates improved versions using LLM-based prompt optimization techniques.",

    category: "Generative AI",

    year: "2026",

    featured: true,

    visible: true,

    status: "Currently Building",

    technologies: [
      "Python",
      "FastAPI",
      "LLM",
      "Qwen",
      "Prompt Engineering",
      "Embeddings",
      "RAG",
      "Qdrant",
    ],

    githubUrl: "",

    liveUrl: "",

    problem:
      "Poorly structured prompts can produce inconsistent, incomplete or low-quality AI responses. Users need a systematic way to evaluate and improve prompts.",

    solution:
      "Building an AI-powered system that evaluates prompts across dimensions such as clarity, specificity, context, constraints and expected output format, then generates an optimized prompt.",

    challenges: [
      "Designing a meaningful prompt scoring system",
      "Controlling LLM output format",
      "Evaluating prompt quality consistently",
      "Integrating local LLM inference",
      "Improving optimization quality",
    ],

    results:
      "Currently developing a modular AI application combining prompt analysis, scoring and LLM-based optimization.",

    architecture: [
      "React Frontend",
      "FastAPI Backend",
      "LLM Service",
      "Prompt Evaluator",
      "Vector Database",
    ],
  },


  // ============================================================
  // PROFESSIONAL EXPERIENCE PROJECTS
  // No GitHub links because these are client/company projects.
  // ============================================================

  {
    id: "lyca-uk-customer-billing-migration",

    title: "Lyca UK – Customer & Billing Data Migration",

    shortDescription:
      "Large-scale telecom customer and billing data migration involving 100M+ records from Oracle to MongoDB and MySQL.",

    description:
      "A large-scale telecom data migration project involving customer and billing data migration from Oracle to MongoDB and MySQL. Worked onsite in the UK for two months, supporting client coordination, data validation and production go-live activities.",

    category: "Professional Experience • Telecom Data Migration",

    year: "2025",

    featured: true,

    visible: true,

    status: "Production Project",

    technologies: [
      "Python",
      "SQL",
      "Oracle",
      "MongoDB",
      "MySQL",
      "PySpark",
      "ETL",
      "JSON",
      "Data Validation",
      "Data Migration",
    ],

    githubUrl: "",

    liveUrl: "",

    problem:
      "The project required migrating more than 100 million customer and billing records from an Oracle-based source environment into MongoDB and MySQL while maintaining data consistency, financial accuracy and business-rule compliance.",

    solution:
      "Worked on scalable ETL pipelines with staging, validation and rerun mechanisms. Performed data cleansing, deduplication, financial reconciliation and business-rule validation. Converted relational source data into JSON structures for MongoDB and structured relational tables for MySQL billing systems.",

    challenges: [
      "Migrating 100M+ customer and billing records",
      "Handling large-scale data validation",
      "Managing partial failures and rerun scenarios",
      "Performing financial reconciliation",
      "Converting relational data into MongoDB JSON structures",
      "Optimizing Spark joins and SQL queries",
      "Supporting production go-live activities",
      "Coordinating directly with the UK client onsite",
    ],

    results:
      "Successfully contributed to large-scale customer and billing data migration activities with strong validation, reconciliation and rerun mechanisms to support reliable production migration and go-live.",

    architecture: [
      "Oracle Source",
      "Flat File / Extract Layer",
      "Staging Layer",
      "Data Validation",
      "Data Cleansing",
      "ETL Processing",
      "MongoDB",
      "MySQL Billing",
      "Reconciliation",
      "Production Migration",
    ],
  },


  {
    id: "mtn-cameroon-uganda-migration",

    title: "MTN Cameroon & MTN Uganda – Customer & Billing Data Migration",

    shortDescription:
      "Large-scale telecom customer and billing data migration from Cassandra and Oracle into MongoDB and MySQL.",

    description:
      "Professional telecom data migration projects involving migration of customer and billing data from Cassandra and Oracle source systems into MongoDB and MySQL target platforms.",

    category: "Professional Experience • Telecom Data Migration",

    year: "2024–2026",

    featured: true,

    visible: true,

    status: "Production Project",

    technologies: [
      "Python",
      "SQL",
      "Oracle",
      "Cassandra",
      "MongoDB",
      "MySQL",
      "ETL",
      "Data Validation",
      "Data Cleansing",
      "Incremental Loading",
    ],

    githubUrl: "",

    liveUrl: "",

    problem:
      "Large telecom datasets from Cassandra and Oracle needed to be migrated into MongoDB and MySQL while maintaining data quality, consistency and business requirements.",

    solution:
      "Designed and implemented staging and validation layers for data cleansing, deduplication and null handling. Implemented incremental loading, reconciliation checks and rerun mechanisms to improve migration reliability.",

    challenges: [
      "Migrating large-scale telecom datasets",
      "Handling Cassandra and Oracle source systems",
      "Designing staging and validation layers",
      "Data cleansing and deduplication",
      "Handling null and inconsistent records",
      "Implementing incremental loading",
      "Building reconciliation checks",
      "Handling migration reruns and partial failures",
    ],

    results:
      "Contributed to reliable customer and billing data migration across MTN Cameroon and MTN Uganda, with automated validation, reconciliation and rerun mechanisms supporting accurate target-system data.",

    architecture: [
      "Cassandra",
      "Oracle",
      "Source Extraction",
      "Staging Layer",
      "Data Validation",
      "Data Cleansing",
      "Incremental Load",
      "MongoDB",
      "MySQL",
      "Reconciliation",
    ],
  },
];