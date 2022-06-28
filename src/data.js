import React, {useState} from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaHome, FaUserFriends, FaFolderOpen, FaCalendarAlt, FaFolder, FaChevronLeft, FaChevronRight, FaQuoteRight}from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const links = [
  {
    id: 1,
    icon: <FaHome/>,
    text: "random",
  },
  {
    id: 2,
    icon: <FaUserFriends/>,
    text: "about",
  },
  {
    id: 3,
    icon: <FaFolderOpen/>,
    text: "projects",
  },
  {
    id: 4,
    icon: <FaFolderOpen/>,
    text: "contact",
  },
  {
    id: 5,
    icon: '',
    text: "profile",
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
           'IIFE',
           'Scope',
           'Functions Definition',
           'Module Pattern',
           'Template Literal',
           'Import & Export',
           'Spread Operator',
           'Apply/Call/Bind Methods',
           'Array methods',
           'Asynchronous JS',
           'Callback Function',
           'Promises',
           'Async & Await'
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
           'setState',
           'Components',
           'Hooks',
           'Custom Hooks',
           'NextJS',
           'React Native',
           'Promises',
           'Async & Await'
    ]
  },
  {
    id: 3,
    img: 'https://i.imgur.com/VOLv5yG.jpg',
    alt: 'NodeJS_logo',
    header: "NodeJS",
    cardList: ['Asynchronous I/O ',
               'Prototypes',
               'Modules',
               'Callbacks',
               'Promises',
               'Observables',
               'Event Queue',
               'Event Loop',
               'Thread Pool',
               'No Buffering',
               'NPM',
               'Cluster',
               'DNS',
               'Add-ons',
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
        'Editable Content',
        'Email Inputs',
        'Placeholders',
        'Local Storage',
        'Semantic Header & Footer',
        'Form Features',
        'Required Attribute',
        'Autofocus Attribute',
        'Audio Support',
        'Video Support',
        'Preload Videos',
        'Display Controls',
        'Regular Expressions',
        'Mark Element'
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
        'Flex Layouts',
        'Responsive Media Queries',
        'Inheritance',
        'Bootstrap Library',
        'Atomic CSS',
        'BEM',
        'SMA CSS',
        'Systematic CSS'
    ]
  },
];
