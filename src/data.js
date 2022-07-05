import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaHome, FaUserFriends, FaFolderOpen, FaCalendarAlt, FaFolder, FaChevronLeft, FaChevronRight, FaQuoteRight}from "react-icons/fa";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolderOpen, faUserCircle, faPeopleGroup, faContactCard, faMoneyBill, faGraduationCap} from '@fortawesome/free-solid-svg-icons'


export const projects= [
{
    id: 1,
    title: 'appointments',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/EHdnGwE.jpg',
    desc: `Appointment list of a person using useState() and useEffect() hooks.`,
    link: 'https://github.com/rlevec/app1_Appointments-react',
  },
  {
    id: 2,
    title: 'excursion',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/LedjrDc.jpg',
    desc: `Excursion list of available tours using useState() and useEffect() hooks with added functionality and multiple component drilling. State alteration in the component.`,
    link: 'https://github.com/rlevec/app2_Excursion-react',    
  },
  {
    id: 3,
    title: 'product reviews',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/vh4vmaw.jpg',
    desc: `List of product reviews using useState() and useEffect() hooks with added functionality of switching between users and multiple component drilling.`,
    link: 'https://github.com/rlevec/app3_ProductReviews-react',    
  },
  {
    id: 4,
    title: 'shipping accordion',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/HdjGEb0.jpg',
    desc: `Accordion web design for questions and answers about shipping of product using useState() and useEffect() hooks. State alteration in the component.`,
    link: 'https://github.com/rlevec/app4_ShippingAccordion-react',    
  },
  {
    id: 5,
    title: 'urban menu',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/rRqLWAb.jpg',
    desc: `Menu list using useState() and useEffect() hooks with added functionality of conditional rendering.`,
    link: 'https://github.com/rlevec/app5_UrbanMenu-react',    
  },
  {
    id: 6,
    title: 'work experience',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/XXZyAnj.jpg',
    desc: 'Interactive index based GUI alteration with useState() and useEffect() hooks based on work experience info example via company filtering.',
    link: 'https://github.com/rlevec/app6_WorkExperience-react',    
  },
  {
    id: 7,
    title: 'reviews slider',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/AgS850B.jpg',
    desc: `List of job description reviews with added functionality of index based css position and a times slider between the users.`,
    link: 'https://github.com/rlevec/app7_ReviewsSlider-react',    
  },
  {
    id: 8,
    title: 'color shades generator',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/Urrc1ns.jpg',
    desc: `List of CSS HEX color shades using Stack Overflow's function implementation and importing color palete value objects from GitHub and turning it all into interactive color shade selection screen bas…`, 
    link: 'https://github.com/rlevec/app8_ColorShadesGenerator-react',      
  },
  {
    id: 9,
    title: 'lorem ipsum paragraph generator',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/z4VEf6y.jpg',
    desc: `List of lorem ipsum paragraphs generated via user input by altering the state of the component with external data.`,
    link: 'https://github.com/rlevec/app9_LoremIpsumParagraphGenerator-react-external_data',     
  },
  {
    id: 10,
    title: 'daily workout ToDo',
    category: 'intermediate',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/26qJlom.jpg',
    desc: `Multiple input based list with interactive GUI via multiple state altering and functionalities such as edit/remove/clear with alert state on each change.`,
    link: 'https://github.com/rlevec/app10_DailyWorkoutToDo-react',   
  },
  {
    id: 11,
    title: 'navBar alter design',
    category: 'beginner',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/AHgwmfu.jpg',
    desc: `Altering navigation bar height based on the height value of the container gathered via useRef hook and altered via useEffect based on the state value.`,
    link: 'https://github.com/rlevec/app11_navBarDesignAlter-react',  
  },
  {
    id: 12,
    title: 'portfolio page',
    category: 'intermediate',
    technologies: 'JS, React, CSS, HTML',
    img: 'https://i.imgur.com/CCidYIJ.jpg',
    desc: `to be continued...`,
    link: 'https://github.com/rlevec/app12_fullPortfolioPage-part1-react-in-progress',  
  },
]

export const people1 = [
    {
    id: 1,
    image:'https://i.imgur.com/snovgnr.jpg',
    name: 'rene levec',
    title: 'Front-end',
    duty:
      'Responsible for using my knowledge of programming languages to code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web applications.',
  },
  {
    id: 2,
    image:
      'https://i.imgur.com/15Z1YVa.jpg',
    name: 'sofia vergara',
    title: 'Back-end',
    duty:
      'Responsible for server-side web application logic and integration of the work front-end developers do. I mostly write the web services and APIs used by front-end developers and mobile application developers.',
  },
  {
    id: 3,
    image:
      'https://i.imgur.com/sbjVIvD.jpg',
    name: 'ladislav johnson',
    title: 'SQL',
    duty:
      'Responsible for developing SQL databases and writing applications to interface with SQL databases. Development often consists of designing tables, storing procedures, views and functions.',
  },
  {
    id: 4,
    image:
      'https://i.imgur.com/4EACi0Y.jpgg',
    name: 'gal gadot',
    title: '.NET',
    duty:
      'Responsible for producing code using . net languages such as C# and VB. I create applications from scratch, configure existing systems and provide user support. Also, net developers are able to write functional code with a sharp eye for spotting defects. ',
  },
  {
    id: 5,
    image:
      'https://i.imgur.com/trl6zVV.jpg',
    name: 'scarlet johanson',
    title: 'Python',
    duty:
      'Responsible for writing server-side web application logic. I develop back-end components, connect the application with third-party web services, and support the front-end developers by integrating their work with the Python application. ',
  },
]

export const education = [
  {
    "id": "je435diU4Cea7HL",
    "name": "Ladislav Johnson",
    "order": 5,
    "title": "Bachelor of Software Engineering",
    "dates": "December 2013 - November 2018",
    "studies": [
    "Software development, modeling, simulation, testing, and quality assurance.",
    "Perform maintenance and software integrations for existing systems.",
    "Application development for the full lifecycle of software. ",
    "Developing and executing project plans.",
    "Creating technical specifications.",
  ],
    "institution": "VSITE"
  },
  {
    "id": "rfcAGJfij4Ce3V0HL",
    "name": "Rene Levec",
    "order": 4,
    "title": "Bachelor of Information Systems",
    "dates": "July 2015 - Semptember 2021.",
    "studies": [
    "Manages hardware and software installations and upgrades.",
    "Maintains information systems by planning, monitoring, and coordinating employees.",
    "Develops private intranet and public internet sites.",
    "Creates reports, programs, BAMs, and BPMs as well as add-on applications to perform small features on ERP-system.",
    "Safeguards assets by planning and implementing disaster recovery and back-up procedures and information security and control structures.",
  ],
    "institution": "FOI"
  },
  {
    "id": "recAGJfiU4CeaV0HL",
    "name": "Sofia Vergara",
    "order": 3,
    "title": "Bachelor of Systems & Network Administration",
    "dates": "May 2013 - August 2016.",
    "studies": [
    "Installs, configures, tests and maintains servers, SAN, and related networking equipment.",
    "Monitors scheduled jobs and computer output for completeness, accuracy, and errors.",
    "Performs all critical data backups and secures data according to established procedures.",
    "Installs firmware and security updates on servers, printers, and related networking equipment.",
    " Troubleshoots and resolves issues with ATM and related equipment, Home Branch (Internet Banking) and Mobile services.",
  ],
    "institution": "ALGEBRA"
  },
  {
    "id": "recIL6mJNfWObonls",
    "name": "Gal Gadot",
    "order": 2,
    "title": "Bachelor of Cybersecurity",
    "dates": "October 2018 -  October 2021",
    "studies": [
    "Set and implement user access controls and identity and access management systems.",
    "Monitor network and application performance to identify and irregular activity.",
    "Perform regular audits to ensure security practices are compliant.",
    "Deploy endpoint detection and prevention tools to thwart malicious hacks.",
    "Implement comprehensive vulnerability management systems across all assets on-premises and in the cloud.",
  ],
    "institution": "PMF"
  },
  {
    "id": "rec61x18GVY99hQq5",
    "name": "Scarlet Johanson",
    "order": 1,
    "title": "Bachelor of Computer Science",
    "dates": "May 2016  - September 2020",
    "studies": [
    "Develop and/or simplify algorithms.",
    "Create new computing languages.",
    "Determine new methods for working with computers.",
    "Develop models and theories to address issues in the field.",
    "Increase the efficiency of computer software and/or hardware.",
  ],
    "institution": "FER"
  },
]

export const links = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faUserCircle}/>,
    text: "profile",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faPeopleGroup}/>,
    text: "team",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faFolderOpen}/>,
    text: "projects",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faGraduationCap}/>,
    text: "education",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faContactCard}/>,
    text: "contact",
  },

];


export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];


export const cards = [
  {
    id: 1,
    img: 'https://i.imgur.com/yObFNJP.png',
    alt: 'javascript_logo',
    header: "JavaScript",
    cardList: ['Prototype',
           '(ES6) Class',
           'Functions Definition',
           'Module Pattern',
           'Template Literal',
           'Import & Export',
           'Spread Operator',
           'Apply/Call/Bind Methods',
           'Array methods',
           'Promises',
    ]
  },
  {
    id: 2,
    img: 'https://i.imgur.com/ocgt99l.jpg',
    alt: 'ReactJS_logo',
    header: "ReactJS",
    cardList: ['Component Lifecycle',
           'Mounting',
           'Updating',
           'Unmounting',
           'Context',
           'Props',
           'State',
           'Components',
           'Hooks',
           'Async & Await'
    ]
  },
  {
    id: 3,
    img: 'https://i.imgur.com/VOLv5yG.jpg',
    alt: 'NodeJS_logo',
    header: "NodeJS",
    cardList: ['Asynchronous I/O ',
               'Modules',
               'Callbacks',
               'Promises',
               'Event Queue',
               'Event Loop',
               'Thread Pool',
               'NPM',
               'Cluster',
               'Console'

    ]
  },
  {
    id: 4,
    img: 'https://i.imgur.com/q4XclAA.jpg',
    alt: 'html5_logo',
    header: "HTML5",
    paragraph: 'FWFWFFW',
    cardList: ['Figure Element',
        'Email Inputs',
        'Local Storage',
        'Semantic Header & Footer',
        'Form Features',
        'Required Attribute',
        'Audio/Video Support',
        'Preload Videos',
        'Display Controls',
        'Regular Expressions',
    ]
  },
  {
    id: 5,
    img: 'https://i.imgur.com/MRfIRKa.jpg',
    alt: 'css3_logo',
    header: "CSS3",
    paragraph: 'FWFWFWSW',
    cardList: ['Flexbox',
        'Grid System',
        'Spacing Out',
        'Box Model',
        'Shorthand Properties',
        'Display Layouts',
        'Positioning Layouts',
        'Responsive Media Queries',
        'Inheritance',
        'Bootstrap Library',
    ]
  },

];
