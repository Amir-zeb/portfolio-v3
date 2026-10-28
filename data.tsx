import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { FaBootstrap, FaCcStripe, FaCss3, FaElementor, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaTrello, FaVuejs } from "react-icons/fa";
import { FaClover, FaJira, FaPython } from "react-icons/fa6";
import { GrMysql, GrWordpress } from "react-icons/gr";
import { IoLogoPwa } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAsana, SiChakraui, SiDocker, SiExpress, SiFastapi, SiFirebase, SiKubernetes, SiMongodb, SiMongoose, SiMui, SiNestjs, SiPostman, SiPrisma, SiSequelize, SiSwagger } from "react-icons/si";
import {
    TbBrandRedux,
    TbLayersIntersect,
    TbDeviceDesktopCode,
    TbServerCog,
    TbShoppingCart,
    TbDatabase,
    TbPlugConnected,
    TbTool,
    TbLayoutDashboard,
} from "react-icons/tb";


export const skillCategories: { id: string; label: string; blurb: string; details: string[] }[] = [
    {
        id: 'frontend',
        label: 'Frontend',
        blurb: "Building responsive, production UI with React, Next.js and Vue — from component architecture to design-system integration.",
        details: [
            "Building reusable component libraries and state management with Redux Toolkit/Saga",
            "Converting Figma/Adobe XD designs into pixel-perfect, responsive layouts",
            "Building cross-platform mobile apps with React Native",
        ],
    },
    {
        id: 'backend',
        label: 'Backend & APIs',
        blurb: "Designing REST APIs, authentication, RBAC, and cron-driven backend services with Node, Express and NestJS.",
        details: [
            "Designing and documenting REST APIs (Swagger) used across ERP and SaaS platforms",
            "Implementing JWT authentication and role-based access control (RBAC)",
            "Refactoring and integrating third-party APIs into existing production modules",
        ],
    },
    {
        id: 'database',
        label: 'Databases & ORMs',
        blurb: "Schema design and query optimization across MongoDB, MySQL and PostgreSQL.",
        details: [
            "Optimizing MongoDB schemas and queries for high-load ERP modules",
            "Working with Prisma, Sequelize and Mongoose across different stacks",
        ],
    },
    {
        id: 'devops',
        label: 'DevOps & Tools',
        blurb: "Containerizing and deploying apps with Docker and Kubernetes, plus Git-based team workflows.",
        details: [
            "Setting up Docker Compose, Nginx reverse proxy, and load balancing across containers",
            "Running CI/CD pipelines via GitHub Actions for production deployments",
        ],
    },
    {
        id: 'design',
        label: 'Design & PM',
        blurb: "Turning designs into pixel-perfect UI and coordinating delivery across agile teams.",
        details: [
            "Creating UI assets and mockups in Photoshop, Illustrator and Canva",
            "Running sprints and tracking delivery in Jira, Trello and Asana",
        ],
    },
]

export const skills: { title: string; icon: any; category: string; proficiency: number }[] = [
    // Frontend
    { title: 'Html5', icon: FaHtml5, category: 'frontend', proficiency: 5 },
    { title: 'Css3', icon: FaCss3, category: 'frontend', proficiency: 5 },
    { title: 'Scss', icon: BsFiletypeScss, category: 'frontend', proficiency: 5 },
    { title: 'Javascript', icon: FaJsSquare, category: 'frontend', proficiency: 4 },
    { title: 'Typescript', icon: BiLogoTypescript, category: 'frontend', proficiency: 4 },
    { title: 'React js', icon: FaReact, category: 'frontend', proficiency: 4 },
    { title: 'Next js', icon: RiNextjsFill, category: 'frontend', proficiency: 4 },
    { title: 'Vue js', icon: FaVuejs, category: 'frontend', proficiency: 3 },
    { title: 'React Native', icon: FaReact, category: 'frontend', proficiency: 2 },
    { title: 'Redux', icon: TbBrandRedux, category: 'frontend', proficiency: 4 },
    { title: 'PWA', icon: IoLogoPwa, category: 'frontend', proficiency: 3 },
    { title: 'Bootstrap', icon: FaBootstrap, category: 'frontend', proficiency: 4 },
    { title: 'Chakra UI', icon: SiChakraui, category: 'frontend', proficiency: 4 },
    { title: 'Material UI', icon: SiMui, category: 'frontend', proficiency: 4 },
    { title: 'Tailwind Css', icon: RiTailwindCssFill, category: 'frontend', proficiency: 4 },

    // Backend & APIs
    { title: 'Node js', icon: FaNodeJs, category: 'backend', proficiency: 4 },
    { title: 'Express Js', icon: SiExpress, category: 'backend', proficiency: 4 },
    { title: 'Nest Js', icon: SiNestjs, category: 'backend', proficiency: 4 },
    { title: 'Python', icon: FaPython, category: 'backend', proficiency: 3 },
    { title: 'FastAPI', icon: SiFastapi, category: 'backend', proficiency: 3 },
    { title: 'Postman', icon: SiPostman, category: 'backend', proficiency: 4 },
    { title: 'Swagger', icon: SiSwagger, category: 'backend', proficiency: 4 },

    // Databases & ORMs
    { title: 'MongoDB', icon: SiMongodb, category: 'database', proficiency: 4 },
    { title: 'Mysql', icon: GrMysql, category: 'database', proficiency: 3 },
    { title: 'PostgreSql', icon: BiLogoPostgresql, category: 'database', proficiency: 3 },
    { title: 'Prisma', icon: SiPrisma, category: 'database', proficiency: 4 },
    { title: 'Sequelize', icon: SiSequelize, category: 'database', proficiency: 4 },
    { title: 'Mongoose', icon: SiMongoose, category: 'database', proficiency: 4 },

    // DevOps & Tools
    { title: 'Docker', icon: SiDocker, category: 'devops', proficiency: 3 },
    { title: 'Kubernetes', icon: SiKubernetes, category: 'devops', proficiency: 3 },
    { title: 'Git', icon: FaGitAlt, category: 'devops', proficiency: 4 },
    { title: 'Github', icon: FaGithub, category: 'devops', proficiency: 4 },
    { title: 'Firebase', icon: SiFirebase, category: 'devops', proficiency: 3 },
    { title: 'WordPress', icon: GrWordpress, category: 'devops', proficiency: 3 },
    { title: 'Elementor', icon: FaElementor, category: 'devops', proficiency: 3 },
    { title: 'Stripe', icon: FaCcStripe, category: 'devops', proficiency: 3 },
    { title: 'Clover', icon: FaClover, category: 'devops', proficiency: 3 },

    // Design & PM
    { title: 'Adobe Photoshop', icon: FaClover, category: 'design', proficiency: 3 },
    { title: 'Adobe Illustrator', icon: FaClover, category: 'design', proficiency: 2 },
    { title: 'Canva', icon: FaClover, category: 'design', proficiency: 3 },
    { title: 'Trello', icon: FaTrello, category: 'design', proficiency: 4 },
    { title: 'Jira', icon: FaJira, category: 'design', proficiency: 4 },
    { title: 'Asana', icon: SiAsana, category: 'design', proficiency: 4 },
]

export const services: { icon: IconType; title: string; description: string }[] = [
    {
        icon: TbLayersIntersect,
        title: "Full Stack Web Applications",
        description:
            "Building end-to-end web applications using modern technologies, from intuitive frontend interfaces to scalable backend systems tailored to your business needs.",
    },
    {
        icon: TbDeviceDesktopCode,
        title: "Frontend Development",
        description:
            "Creating responsive, interactive, and user-friendly interfaces with a strong focus on performance, accessibility, and seamless user experience.",
    },
    {
        icon: TbServerCog,
        title: "Backend Development",
        description:
            "Developing secure and scalable server-side applications, RESTful APIs, authentication systems, and business logic designed for reliability and growth.",
    },
    {
        icon: TbShoppingCart,
        title: "E-commerce Development",
        description:
            "Building fast, secure, and easy-to-manage e-commerce platforms that provide smooth shopping experiences and support business expansion.",
    },
    {
        icon: TbDatabase,
        title: "Database Design & Management",
        description:
            "Designing and optimizing database architectures to ensure data integrity, scalability, security, and efficient application performance.",
    },
    {
        icon: TbPlugConnected,
        title: "API Integration",
        description:
            "Integrating third-party services such as payment gateways, AI solutions, email providers, and external APIs to extend application functionality.",
    },
    {
        icon: TbLayoutDashboard,
        title: "Content Management Systems",
        description:
            "Developing customizable content management solutions that enable efficient content updates and simplify website administration.",
    },
    {
        icon: TbTool,
        title: "Maintenance & Support",
        description:
            "Providing ongoing maintenance, bug fixes, performance optimization, and feature enhancements to keep applications running smoothly.",
    },
];