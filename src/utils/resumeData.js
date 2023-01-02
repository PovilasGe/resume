import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
};