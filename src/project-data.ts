import sproutImg1 from './assets/sprout/sprout-1.png';
import sproutImg2 from './assets/sprout/sprout-2.png';
import sproutImg3 from './assets/sprout/sprout-3.png';
import sproutImg4 from './assets/sprout/sprout-4.png';
import sproutImg5 from './assets/sprout/sprout-5.png';
import sproutImg6 from './assets/sprout/sprout-6.png';
import sproutImg7 from './assets/sprout/sprout-7.png';

const projects = [
  {
    title: 'Sprout',
    body: 'An application where users can grow virtual gardens by sending and receiving positive messages.',
    slug: 'sprout',
    chips: ['Web Application', 'React', 'Node.js'],
    tech: ['HTML', 'SCSS', 'React', 'Pixi.js', 'Node.js', 'MongoDB'],
    summary: [],
    images: [
      sproutImg1.src,
      sproutImg2.src,
      sproutImg3.src,
      sproutImg4.src,
      sproutImg5.src,
      sproutImg6.src,
      sproutImg7.src,
    ],
    link: 'https://sprout-community.com/start',
  },
  {
    title: 'Grammasaurus-Rex',
    body: 'A digital tool to help students practice grammar skills.',
    slug: 'g-rex',
    chips: ['Web Application', 'Vue.js', 'Grammarbot'],
    summary: [],
    // Add image paths: ['/assets/g-rex/img1.png', '/assets/g-rex/img2.png']
    images: [],
  },
  {
    title: '2018 U.S. Hate Crimes',
    body: 'An interactive data visualization of hate crimes in the United States in 2018.',
    slug: 'hate-crimes',
    chips: ['Data Visualization', 'D3.js', 'OpenRefine'],
    summary: [],
    // Add image paths: ['/assets/hate-crimes/img1.png', '/assets/hate-crimes/img2.png']
    images: [],
  },
];

export default projects;
