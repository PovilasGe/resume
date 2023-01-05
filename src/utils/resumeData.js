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

    about: 'Aenean eleifend mollis posuere. Proin id neque bibendum, dignissim augue ac, varius mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id augue ut ligula lobortis hendrerit id quis ipsum. Etiam pharetra leo tempus, porta leo ut, euismod eros. Suspendisse nibh sem, iaculis at condimentum id, ornare non sapien. Integer et leo hendrerit, iaculis elit vitae, posuere ex. \n\n Donec id quam semper, placerat metus in, rhoncus lorem. Sed non bibendum libero. Mauris facilisis orci ante, ac rhoncus nibh imperdiet in. In accumsan tincidunt nisl et sagittis. Praesent aliquet consequat semper. Nullam et velit urna. Nullam tempus arcu in posuere varius. Nullam sit amet ultrices leo, quis luctus orci. Nam nec tempor diam. Fusce volutpat eget tortor eu posuere. Nulla posuere, risus at commodo tincidunt, arcu mauris lobortis est, non tristique mauris eros eget lorem. Fusce lacinia, massa sit amet porttitor tincidunt, augue velit aliquam dolor, id hendrerit ante tortor pulvinar enim. Nam sit amet sapien fermentum, pharetra eros eget, viverra nisi.'
};