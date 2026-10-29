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
import commercePadImg from "@/public/mocks/commerce-pad.png";
import erpImg from "@/public/mocks/erp.png";


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

export const featuredProjects = [
    {
        project: "E-commerce",
        title: "CommercePad",
        description: [
            `Implemented a robust discount system, improved code quality through reviews and refactoring, and optimized database performance for a scalable SAS e-commerce platform. Collaborated closely in Agile sprints to ensure efficient and timely delivery.`
        ],
        tags: [
            "React js",
            "Node js",
            "Express js",
            "Mongo DB",
        ],
        image: commercePadImg,
        link: 'https://www.commercepad.com/'
    },
    {
        project: "ERP",
        title: "ERP",
        description: [
            `Contributed to the development and optimization of a robust ERP system, ensuring high scalability and performance across business operations. Designed and implemented RESTful APIs to support smooth communication between services, and collaborated closely with frontend teams to deliver responsive, user-friendly interfaces. Provided mentorship to junior developers, conducted code reviews, and upheld coding best practices. Proactively diagnosed and resolved integration and performance issues to maintain system reliability and uptime.`
        ],
        tags: [
            "React js",
            "Node js",
            "Express js",
            "Postgre Sql",
        ],
        image: erpImg,
        link: ''
    }
]


export const projects = [
    {
        project: "Spa",
        title: "GamaAg",
        description: `
                Designed and developed dashboards for a photovoltaic system installation company using React.js. Handle multiple roles (super admin, manager, client). Created the dashboard UI using Material-UI (MUI) and seamlessly integrated Rest APIs using axios. Utilized Redux for efficient dashboard flow and user activity management. Additionally, conducted unit testing to ensure product quality and reliability.
                `,
        tags: [
            "React js",
            "Material UI",
            "Redux Toolkit",
            "Jest",
            "React Test Library",
            "Axios",
        ],
        image: "./mocks/gama-ag.png",
        link: ''
    },
    {
        project: "Mobile Application",
        title: "Bubbles",
        description: `Developed mobile application and website for laundry and dry cleaning services using React Native. Developed the app's user interface with the React Native Paper library and seamlessly integrated APIs for enhanced functionality and efficiency.`,
        tags: [
            "React Native",
            "Paper ui",
            "Redux Toolkit",
            "Axios",
        ],
        image: "./mocks/bubbles.png",
        link: ''
    },
    {
        project: "Mobile Application",
        title: "DePalm Tours",
        description: `Develop an exclusive mobile app for a travel agency, enabling tourists to effortlessly explore visiting locations. Designed an intuitive UI with react-native-paper and implemented offline data storage using SQLite DB for a seamless user experience even without an internet connection.`,
        tags: [
            "React Native",
            "Paper ui",
            "Sqlite db",
            "Axios",
        ],
        image: "./mocks/tourist.png",
        link: ''
    },
    {
        project: "Spa",
        title: "Poseidon Fuel",
        description: `Developed a comprehensive dashboard and website using React.js for the registration of gas stations and boats. Designed an intuitive and user-friendly UI for both the dashboard and website. Integrated Rest APIs using axios to enable efficient communication and data exchange. The platform allows boat drivers to access information about nearby gas stations and their fuel charges through both the dashboard and website for a seamless user experience.`,
        tags: [
            "Next js",
            "Bootstrap 5",
            "Redux",
            "axios",
        ],
        image: "./mocks/poseidon.png",
        show: true,
        link: "https://drive.google.com/drive/folders/1jznLW6oQTPSt0FaNlY3sk29VIw0vq_dA?usp=sharing"
    },
    {
        project: "Dashboard",
        title: "BorderPay",
        description: "Create pixel perfect UI of dashboard using html, css.",
        tags: [
            "Html",
            "Css",
            "Bootstrap 5",
            "Javascript",
            "jquery",
        ],
        image: "./mocks/borderpay.png",
        show: true,
        link: '',
    },
    {
        project: "Dashboard",
        title: "CampAway",
        description: "Create pixel perfect UI of dashboard for a traveling reservations company.",
        tags: [
            "Html",
            "Css",
            "Bootstrap 5",
            "JavaScript",
            "jquery",
        ],
        image: "./mocks/campaway-12.png",
        link: "http://campaway.surge.sh/",
        show: true
    },
    {
        project: "Dashboard",
        title: "Hospital - Dammam",
        description: "Create pixel perfect UI of help desk for hospital.",
        tags: [
            "Html",
            "Css",
            "scss",
            "rtl",
            "ltr",
            "Bootstrap 5",
            "JavaScript",
            "jquery",
        ],
        image: "./mocks/dammam.png",
        link: "http://dammam.surge.sh/",
        show: true
    },
    {
        project: "Website",
        title: "Andes Salud",
        description: "Create pixel perfect UI of landing page.",
        tags: [
            "Html",
            "Css",
            "Bootstrap 5",
            "Javascript",
        ],
        image: "./mocks/andesT21.png",
        show: true,
        link: ''
    },
    {
        project: "Website",
        title: "Study Buddy",
        description: "Create pixel perfect UI of a website. Where professional teacher's will help student's with their studies. Project was divided into two parts, One is website and other is a dashboard from which student and tutor will register their accounts.",
        tags: [
            "Html",
            "Css",
            "Bootstrap 5",
            "Javascript",
            "jquery",
        ],
        image: "./mocks/study-buddy.png",
        show: true,
        link: ''
    },
    {
        project: "WordPress",
        title: "Propulsion Funding",
        description: "Create pixel prefect single page UI on Elementor.",
        tags: [
            "Wordpress",
            "Elementor",
        ],
        image: "./mocks/propulsion.png",
        show: true,
        link: ''
    },
    {
        project: "WordPress",
        title: "Tattoo Removal Professionals",
        description: "Create pixel prefect single page UI on Elementor.",
        tags: [
            "Wordpress",
            "Elementor",
        ],
        image: "./mocks/tattoo.png",
        show: true,
        link: ''
    },
    {
        project: "WordPress",
        title: "Security Automation Solutions",
        description: "Create pixel prefect single page UI on Elementor.",
        tags: [
            "Wordpress",
            "Elementor",
        ],
        image: "./mocks/auto-solutions.png",
        show: true,
        link: ''
    },
    {
        project: "WordPress",
        title: "Acan Immigration",
        description: "Create pixel prefect UI on Elementor.",
        tags: [
            "Wordpress",
            "Elementor",
        ],
        image: "./mocks/acan.png",
        link: "https://drive.google.com/drive/folders/1FWGou04_lAM3vPwLFETF78PU0wrsPTTi?usp=share_link",
        show: true,
    },
    {
        project: "WordPress",
        title: "Flippings",
        description: "Create pixel prefect UI on Elementor.",
        tags: [
            "Wordpress",
            "WP Bakery",
        ],
        image: "./mocks/flippings.png",
        show: true,
        link: ''
    },
    {
        project: "Spa",
        title: "Eventsify",
        description: `Orchestrated the development of a comprehensive system for an event organizing company, encompassing a dashboard, website, and mobile application. Employed React Native for mobile app development, leveraging Material-UI (MUI) to design an intuitive user interface. Seamlessly integrated Rest APIs using axios and implemented Redux Toolkit for effective global state management.`,
        tags: [
            "React js",
            "Material UI",
            "Redux Toolkit",
            "Axios",
        ],
        image: "./mocks/eventsify.png",
        link: ''
    },
    {
        project: "Spa",
        title: "Mold Free",
        description: `Developed a comprehensive dashboard for repair and maintenance services using React.js. Implemented state management with Redux, designed the dashboard UI using Material-UI, and seamlessly integrated Rest APIs using axios for enhanced functionality and efficiency in the project.`,
        tags: [
            "React js",
            "Material UI",
            "Material Data Grid",
            "FCM",
            "Redux Toolkit",
            "Axios",
        ],
        image: "./mocks/mold.png",
        show: true,
        link: "https://drive.google.com/drive/folders/1XwgiT43drnubnt2XboDwYXcNBGo6UFXF?usp=share_link"
    },
    {
        project: "Spa",
        title: "Litoral",
        description: "Develop dashboard using Vue js. Consume REST API's.",
        tags: [
            "Vue js",
            "Bootstrap 5",
            "Vuex",
            "FCM",
            "axios"
        ],
        image: "./mocks/litoral.png",
        show: true,
        link: "https://drive.google.com/drive/folders/1ekQvDlDJgFz3Ic9fLR3s42jSC-HnG8xm?usp=sharing"
    },
    {
        project: "Spa",
        title: "Precocial",
        description: "Create dashboard using React-js. consume REST API's.",
        tags: [
            "React js",
            "Material UI",
            "Redux Toolkit",
            "Axios",
        ],
        image: "./mocks/precocial.png",
        show: true,
        link: ''
    },
    {
        project: "Ebay Listing Template",
        title: "Dealours",
        description: "Create ebay listing template for client",
        tags: [
            "Html",
            "Css",
        ],
        image: "./mocks/dealorus.png",
        show: true,
        link: "http://dealourus.surge.sh/"
    },
]

export const archives = [
    {
        title: "Ai English Mentor",
        built_wt: ["Next js", "Typescript", "Mongo DB", "Ollama", "Prompt Engineering"],
        url: "https://github.com/Amir-zeb/ai-english-mentor",
        live: ""
    },
    {
        title: "Docker and Kubernetes guide for absolute beginners",
        built_wt: ["Next js", "Docker", "Kubernetes"],
        url: "https://github.com/Amir-zeb/docker-and-kubernetes-with-nextjs",
        live: ""
    },
    {
        title: "Ai Job Assistant",
        built_wt: ["Next js", "Typescript", "Mongo DB", "Gemini AI", "Prompt Engineering"],
        url: "https://github.com/Amir-zeb/ai-job-assistant",
        live: ""
    },
    {
        title: "Hours Management System",
        built_wt: ["React js", "Firebase Firestore", "Firebase Auth", "Firebase Hosting"],
        url: "https://github.com/Amir-zeb/hours-management-system",
        live: "https://hours-management-ed8a2.web.app/"
    },
    {
        title: "React Three Fibre lab",
        built_wt: ["React js", "Vite"],
        url: "https://github.com/Amir-zeb/r3f-lab",
        live: "https://amir-zeb.github.io/r3f-lab/"
    },
    {
        title: "Custom Form Validator",
        built_wt: ["React js", "Vite"],
        url: "https://github.com/Amir-zeb/custom-form-validator-react-js",
        live: "https://amir-zeb.github.io/custom-form-validator-react-js/"
    },
    {
        title: "Control Device Pixel Ratio",
        built_wt: ["React js", "Vite"],
        url: "https://github.com/Amir-zeb/react-device-pixel-ratio",
        live: "https://amir-zeb.github.io/react-device-pixel-ratio/"
    },
    {
        title: "React js Custom Toast",
        built_wt: ["React js", "Vite", "Context Api", "Reducer"],
        url: "https://github.com/Amir-zeb/custom-toast-react-js",
        live: "https://amir-zeb.github.io/custom-toast-react-js/"
    },
]