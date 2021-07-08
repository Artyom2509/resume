import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Artyom Zhilenko', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `I'm the Frontend Developer.`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is ',
  name: 'Artyom Zhilenko',
  subtitle: `I'm the Frontend Developer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne: `My passion is creating web applications, learning new technologies and improving my skills. My goal is to become a high-level specialist in what I love. Every day I try to learn more so that
    my code was getting better.`,
  paragraphTwo: `SKILLS: JavaScript, TypeScript, React, Git, GraphQL, Socket.io, Redux, MobX, CSS, HTML, Sass, Scss, Less, Jest, Enzyme, ExpressJS, Laravel, NestJS, PostgreSQL, PHP, SQL, MySQL, MongoDB, Redis, NodeJS, JQuery, Redux-Saga, React-Query, Webpack, Docker, Gulp, UML, Algorithms and Data Structures, GoF patterns, SOLID, GRASP.`,
  paragraphThree: `
  English language - Intermediate.
  `,
  resume: 'https://drive.google.com/file/d/1CdP_oCAj1ISZRL-Bi8e1un-hPoaRan53/view?usp=sharing', // if no resume, the button will not show up
};

/* `
#### Name: [Excel-Table](https://artyom2509.github.io/my-excel/) - On Github: [Open](https://github.com/Artyom2509/my-excel)
*/

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'discord.png',
    title: 'Discord clone',
    info: 'A clone of the popular messenger.',
    info2: 'Technologies: React, Socket.io, React-Query, Zustand as state-manager.',
    url: 'https://discord-clone-application.herokuapp.com',
    repo: 'https://github.com/Artyom2509/discord-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'laravel-shop.png',
    title: 'React Typescript Laravel Shop',
    info: 'Internet shop. Authorization with an administrator role on demand.',
    info2: 'Technologies: React, Typescript, Redux-Saga, Laravel.',
    url: 'https://react-e-commerce-laravel.web.app',
    repo: 'https://github.com/Artyom2509/react-laravel-typescript-shop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tiny-house.png',
    title: 'TinyHouse TypeScript',
    info: 'Application for booking houses for rent.',
    info2: 'Technologies: React, Typescript, GraphQL.',
    url: 'https://tiny-house-111.herokuapp.com',
    repo: 'https://github.com/Artyom2509/tiny-house', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'j-book.png',
    title: 'J-Book TypeScript',
    info: 'An application that can execute JavaScript code and connect any NPM libraries. Use the function show(<h1>Hello world!</h1>)',
    info2: 'Technologies: React, TypeScript, WebAssembly.',
    url: 'https://artyom2509.github.io/j-book',
    repo: 'https://github.com/Artyom2509/j-book', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mern-ecom.png',
    title: 'MERN E-Commerce',
    info: 'Internet shop.',
    info2: 'Technologies: React, ExpressJS, Stripe.',
    url: 'https://app-ecommerce-mern.herokuapp.com',
    repo: 'https://github.com/Artyom2509/mern-ecommerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'excel.png',
    title: 'Excel-Table',
    info: 'An application in pure JavaScript, without the use of libraries and frameworks, with which you can create, format, and work on tables.',
    info2: ' ',
    url: 'https://artyom2509.github.io/my-excel',
    repo: 'https://github.com/Artyom2509/my-excel', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you want to contact me?',
  btn: `Let's talk on Skype`,
  email: 'skype:live:.cid.b22c6a306ee23ae?chat', // live:.cid.b76cbda1ba0644e5 live:.cid.b22c6a306ee23ae?chat
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Artyom2509',
    },
    {
      id: nanoid(),
      name: 'google',
      url: 'mailto:zhilenko25artyom@gmail.com',
    },
    {
      id: nanoid(),
      name: 'envelope-open',
      url: 'mailto:artyom_zhiko@mail.ru',
    },
    {
      id: nanoid(),
      name: 'telegram',
      url: 'tg://resolve?domain=artyom_zhilenko',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/+77780197912',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
