import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaHome, FaUserFriends, FaFolderOpen, FaCalendarAlt, FaFolder, FaChevronLeft, FaChevronRight, FaQuoteRight}from "react-icons/fa";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolderOpen, faUserCircle, faPeopleGroup, faContactCard, faMoneyBill} from '@fortawesome/free-solid-svg-icons'



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
    icon: <FontAwesomeIcon icon={faMoneyBill}/>,
    text: "pricing",
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
