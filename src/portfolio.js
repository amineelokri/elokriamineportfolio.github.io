/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "ELOKRI's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url:
      "https://drive.google.com/file/d/1ZbEHl0EkFQ0LVeFmLliWfdF28wwJpkBG/view?usp=sharing",
  },
};

//Home Page
const greeting = {
  title: "I'm EL OKRI AMINE",
  logo_name: "EL AM",
  nickname: "Software Engineer",
  subTitle:
    "Élève-Ingénieur. en deuxième année de génie logiciel à l'ENSIAS et responsable de cellule projet et logistique de club ENSIAS ROBOTICS .",
  resumeLink:
    "https://drive.google.com/file/d/1ZbEHl0EkFQ0LVeFmLliWfdF28wwJpkBG/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1ZbEHl0EkFQ0LVeFmLliWfdF28wwJpkBG/view?usp=sharing",
  githubProfile:
    "https://drive.google.com/file/d/1ZbEHl0EkFQ0LVeFmLliWfdF28wwJpkBG/view?usp=sharing",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/amineelokri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amine-el-okri-54aa1723b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:amineelokri10@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link:
      "https://www.facebook.com/profile.php?id=100072261707989&mibextid=ZbWKwL",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/amineelok/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Développeur Génie Logiciel ",
      fileName: "FullStackImg",
      skills: [
        "⚡ Gérer les exigences des clients.",
        "⚡ Développement et/ou intégration d'applications logicielles et des systèmes d'information bien structurés et sécurisés.",
        "⚡ Analyser,concevoir et élaborer les différents types d'architecture relatifs aux domaines du logiciel et des systèmes d'information.",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#4F5B93",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "LARAVEL",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ORACLE",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#FF0000",
          },
        },
        {
          skillName: "ANDROID",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#A4C639",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Expérience de travail sur plusieurs plates-formes cloud",
        "⚡ Hébergement et maintenance de sites Web sur des instances de machines virtuelles avec intégration de bases de données",
        "⚡ Déploiement de modèles ML sur le cloud ",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Embarqué & IOT",
      fileName: "DesignImg",
      skills: [
        "⚡ Développement d'un programme pour le microcontrôleur afin de collecter des données à partir de plusieurs capteurs simultanément.",
        "⚡ Programmation d'un module de communication Bluetooth ou WiFi pour envoyer les données collectées vers un serveur distant où elles seront traitées.",
        "⚡ Conception et réalisation de petits robots intelligents",
      ],
      softwareSkills: [
        {
          skillName: "arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#008CBA",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C plus plus",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/amineelokri10",
    },

    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/amineelokri10",
    },

    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/amineelokri",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Ecole Nationale Supérieure d'informatique et d'Analyse des Systèmes (ENSIAS) MAROC, RABAT",
      subtitle: "Génie Logiciel",
      logo_path: "ensiaslogo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ j'étudie les bases de génie logiciel tels que  la gestion de projets,la modélisation,la programmation orientée objet,le développement logiciel ,Réseaux,l'administration des base de données,cloud computing ,virtualisation,IA, algorithmes et les mathématiques etc.",
        "⚡ En dehors de cela, j'ai suivi des cours sur Deep Learning, Devops, Spring boot et Angular pour le développement web",
        "⚡ J'ai été sélectionné pour une double diplomation a EILCO en France, qui est attribuée aux 20% des meilleurs étudiants de l'ENSIAS.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title:
        "Centre Ibnou Timiya des Classes Préparatoires aux Grandes Écoles Marrakech ",
      subtitle: "PCSI/PSI*",
      logo_path: "cpge.png",
      alt_name: "Indiana University Bloomington",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ La filière PCSI/PSI est centrée sur les sciences physiques et les mathématiques, mais elle inclut également des enseignements en sciences de l'ingénieur, en chimie, en informatique et en langues vivantes",
        "⚡ J'ai réussi le concours national commun et le concours commun INP en France.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Artificial Intelligence",
      subtitle: "- Artificial Intelligence Analyst Certificate",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/6b433553-5761-4715-9416-6b07ac842bc6/public_url",
      alt_name: "Stanford University",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "L'expérience permet également aux ingénieurs informatiques de développer une compréhension approfondie des différentes technologies et de leurs avantages et inconvénients respectifs. Cette connaissance approfondie est essentielle pour choisir la meilleure technologie pour résoudre un problème informatique particulier.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Travaille",
      experiences: [
        {
          title: "Développeur FrontEnd",
          company: "FreeLancer",
          company_url: "#",
          logo_path: "legato_logo.png",
          duration: "OCT 2022 - OCT 2022",
          location: "RABAT, Maroc",
          description:
            "J'ai conçu des pages web dynamiques pour diverses agences d'assurance, de construction, et bien d'autres",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Stage d'été",
      experiences: [
        {
          title: "Développeur FULL STACK",
          company: "EAT.MA.",
          company_url: "https://www.eat.ma/",
          logo_path: "eatlogo.jpg",
          duration: "JUI 2022 - AUT 2022",
          location: "MARRAKECH, MAROC",
          description:
            "EAT V2 ,la plateforme permet aux restaurants de gérer leurs réservations ainsi que le suivi de leurs performances,tout en permettant aux clients de gérer facilement leurs propres réservations auprès de ces restaurants.",
          color: "#000000",
        },
        {
          title: "Consultant IT && Développeur FULL STACK",
          company: "ONEE Branche Eau",
          company_url: "http://www.onep.ma/",
          logo_path: "oneplogo.png",
          duration: "AUT 2021 - SEP 2021",
          location: "MARRAKECH, ONEP",
          description:
            "Proposition et Réalisation d'une solution IT pour le service de comptabilité de l'agence ONEP MARRAKECH pour gérer les bordereau d'envois",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Chef de cellule projet et logistique",
          company: "CLUB ENSIAS ROBOTICS",
          company_url: "#",
          logo_path: "logo1.png",
          duration: "JUI 2022 - JUI 2023",
          location: "RABAT, MAROC",
          description:
            "Assumer la gestion et la réalisation de projets de club de robotique en collaboration avec les membres de la cellule, et également s'occuper de la gestion des équipements du club",
          color: "#4285F4",
        },
        {
          title: "Membre de Arduino team",
          company: "VAMOS TIPE VOLUNTEERING",
          company_url: "#",
          logo_path: "vamos.PNG",
          duration: "MAI 2022 - JUI 2022",
          location: "RABAT,MAROC",
          description:
            "Apporter une assistance aux étudiants marocains en CPGE pour la réalisation de leur TIPE, en particulier pour ceux qui ont opté pour l'embarqué comme domaine d'application.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Travailler avec mes mains pour faire de la magie sur internet.  La meilleure expérience que j'ai eue a été de concevoir un système d'information avec oracle forms et à le déployer à l'aide d'une infrastructure cloud.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez-Moi",
    profile_image_path: "anatr.png",
    description:
      "Je suis disponible sur presque tous les réseaux sociaux. Vous pouvez m'envoyer un message, je vous répondrai dans les 24 heures. Je peux vous aider avec le développement Spring boot, Angularjs, ML,DBA, Cloud et IOT.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Addresse",
    subtitle: "ENSIAS, RABAT, Maroc",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/FSdMPaBp1CRVVBta9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
