import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AssignmentOutlined } from '@mui/icons-material';
import Groups2Icon from '@mui/icons-material/Groups2';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ErrorIcon from '@mui/icons-material/Error';



export default {
    name: ' Povilas Gedminas',
    title: ' Front end developer',
    birthday: '1997-07-13',
    email: ' povilasgedminas@gmail.com',
    address: 'Santariskiu g., Vilnius',
    phone: '+37060146826',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/povilas.gedminas.7/',
            text: 'My Facebook',
            icon: <FacebookIcon />,
        },
        Twitter: {
            link: 'https://twitter.com/0xGedis',
            text: 'My Twitter',
            icon: <TwitterIcon />,
        },
        GitHub: {
            link: 'https://www.github.com/PovilasGe',
            text: 'My Github',
            icon: <GitHubIcon />,
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/povilas-gedminas-19781725a/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon />,
        },
    },

    about: 'Hi! My name is Povilas and I am a junior frontend developer with a strong interest in creating engaging and visually appealing user interfaces. I recently graduated "CodeAcademy" Frontend Serverless courses and have been learning on my own as a way to gain practical experience. I have a solid foundation in HTML, CSS and JavaScript, and I am comfortable using frameworks such as ReactJS. I am a quick learner and I am always looking for opportunities to expand my knowledge and skills in frontend development. I am excited to join a team of experienced developers and contribute to the creation of innovative and user-friendly products.',

    portfolio: 'This section will be updated with the projects or websites I worked on in near future',

    experiences: [
        {
            title: 'Self-employment',
            date: '2018 - Present',
            description: 'Marketing, dropshipping and more recently WEB3'
        },
        {
            title: 'Internship in "nerdwelten GbR"',
            date: '2022 March - 2022 May',
            description: 'Was responsible for creating a frontend for a browser-based game using ReactJS'
        },
        {
            title: 'Baltec CNC Technologies',
            date: '2019 - 2020',
            description: 'Wrote and tuned programs for CNC machines to run more efficiently'
        },
    ],
    educations: [
        {
            title: 'CodeAcademy',
            date: '2022 Aug - 2022 Dec',
            description: 'Completed "Frontend Serverless" programming course'
        },
        {
            title: 'Kaunas University of Technology',
            date: '2015 - 2019',
            description: 'Achieved bachelors degree in robotics'
        },
        {
            title: 'Telšiu Zemaites gymnasium',
            date: '2011-2015',
            description: 'Graduated from school with high grades.'
        },
    ],

    services: [
        {
            title: 'Time management',
            description: 'I am a quick learner and I am efficient at managing my time',
            icon: <AccessTimeFilledIcon />
        },
        {
            title: 'Communication',
            description: 'I work well in a team, but I am also capable of working independently',
            icon: <Groups2Icon />
        },
        {
            title: 'Ability to adapt',
            description: `I am highly flexible and able to quickly adapt to new challenges`,
            icon: <ErrorIcon />
        },
    ],
    
    skills: [
        {title: 'Front-end',
        description: [
            'ReactJS',
            'JavaScript',
            'Bootstrap',
            'Material UI',

        ],
    },
    {
        title: 'Back-end',
        description: ['Solidity'],
    },
    {
        title: 'DATABASES',
        description: ['MySQL'],
    },
    {
        title: 'SOURCE CONTROL',
        description: ['Git', 'GitHub'],
    },
    ]
};