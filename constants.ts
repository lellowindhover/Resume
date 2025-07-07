
import { WorkExperience, Education, SoftwareSkill, SkillLevel, Certification, Language } from './types';

export const PROFESSIONAL_SUMMARY = "Dynamic professional with extensive experience in technical support and customer service. Proven mediation and critical evaluation capacity, enhancing client relationships and operational efficiency. Adept in predictive maintenance and Python programming, delivering tailored solutions for positive success and satisfaction. Recognized for fostering positive work environments and achieving high customer satisfaction.";

export const CORE_SKILLS = [
    "Representative experience",
    "Mediation skills",
    "Critical evaluation capacity",
    "Verbal and written communication",
    "Complex problems analysis",
    "Student evaluations"
];

export const WORK_HISTORY: WorkExperience[] = [
    {
        role: "Technical Support and Italian Language Liaison",
        company: "Estella Group (Pty) Ltd",
        location: "Cape Town, South Africa",
        period: "10/2024 - Current",
        responsibilities: [
            "Electrical repairs on industrial sewing and automated dyeing machinery.",
            "Translations for maintenance services, internal communications and management of relationships with external companies.",
            "Predictive Maintenance modelling and cost calculation."
        ],
    },
    {
        role: "Tourism Services",
        company: "Intrepid Africa",
        location: "Cape Town",
        period: "07/2024 - 01/2025",
        responsibilities: [
            "I offer customized tours in South Africa and Namibia, translation for Italian tourists, overnight stays and activities, guaranteeing unique and safe travel experiences.",
            "Information on local culture, wildlife and history, development of web scraping tools to find the best offers on activities and accommodations.",
            "Self-motivated, with a strong sense of personal responsibility."
        ]
    },
    {
        role: "HVAC Technician",
        company: "P.RI.S.T.",
        location: "Trieste, Italy",
        period: "12/2022 - 07/2024",
        responsibilities: [
            "Operation, maintenance and repair of heating and air conditioning equipment.",
            "Repair and installation of air conditioning systems and gas boilers."
        ],
    },
    {
        role: "Data Science Training Assistant (Remote)",
        company: "Auckland University, Institute of Data",
        location: "Auckland, New Zealand",
        period: "03/2023 - 03/2024",
        responsibilities: [
            "Coordination with the teaching staff, planning and implementation of the teaching program.",
            "Teaching of Python programming, statistics, Machine learning and artificial intelligence.",
            "Development of contents for the Course.",
            "Monitoring of students and their progress and projects.",
            "Storytelling, Presentation and transversal skills."
        ]
    }
];

export const EDUCATION_HISTORY: Education[] = [
    {
        degree: "Data Science / AI: Data Science",
        institution: "Auckland University of Technology, Institute of Data",
        location: "Auckland, New Zealand",
        period: "04/2023",
        details: [
            "Key modules covered: Pandas, Numpy, SQL, MongoDB, Neo4j, Api.",
            "Machine learning with optimization and validation.",
            "Unsupervised learning and Clustering.",
            "CNN, RNN, LSTM and Pretrained neural networks.",
            "Computer Vision, NLP, Statistical analysis.",
            "Data Visualization and Interactive Dashboards."
        ]
    },
    {
        degree: "Air Conditioning Installation Technician: Engineering",
        institution: "CompeteNZ",
        location: "Auckland, New Zealand",
        period: "06/2017",
        details: []
    },
    {
        degree: "Applied Manufacturing And Coach Building: Manufacturing Engineering",
        institution: "CompeteNZ",
        location: "Auckland, New Zealand",
        period: "06/2016",
        details: [
            "Kanban method implementation on industrial production line.",
            "Just-in-time manufacturing.",
            "Creation and deployment of workplace SOPs.",
            "Meet health and safety workplace requirements."
        ]
    }
];

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
    { name: "Python", level: SkillLevel.UpperIntermediate },
    { name: "Linux", level: SkillLevel.Advanced },
    { name: "TypeScript", level: SkillLevel.Advanced },
    { name: "Machine Learning", level: SkillLevel.Advanced },
    { name: "Natural Language Processing", level: SkillLevel.Intermediate },
    { name: "Computer Vision", level: SkillLevel.UpperIntermediate },
    { name: "Business Intelligence", level: SkillLevel.Advanced },
];

export const CERTIFICATIONS: Certification[] = [
    { name: "Fgas", date: "05/2024" },
    { name: "Self Containment Assessment", date: "06/2015" },
    { name: "Crane operation", date: "09/2018" },
    { name: "Food Safety. HCCP", date: "" }
];

export const LANGUAGES: Language[] = [
    { name: "English", proficiency: "Fluent" },
    { name: "Italian", proficiency: "Native" }
];
