import sproutImg1 from './assets/sprout/sprout-1.png';
import sproutImg2 from './assets/sprout/sprout-2.png';
import sproutImg3 from './assets/sprout/sprout-3.png';
import sproutImg4 from './assets/sprout/sprout-4.png';
import sproutImg5 from './assets/sprout/sprout-5.png';
import sproutImg6 from './assets/sprout/sprout-6.png';
import sproutImg7 from './assets/sprout/sprout-7.png';

import gRexImg1 from './assets/g-rex/g-rex-1.png';
import gRexImg2 from './assets/g-rex/g-rex-2.png';
import gRexImg3 from './assets/g-rex/g-rex-3.png';

import hateCrimesImg1 from './assets/hate-crimes/hate-crimes-1.png';
import hateCrimesImg2 from './assets/hate-crimes/hate-crimes-2.png';
import hateCrimesImg3 from './assets/hate-crimes/hate-crimes-3.png';
import hateCrimesImg4 from './assets/hate-crimes/hate-crimes-4.png';

const projects = [
  {
    title: 'Sprout',
    body: 'An application where users can grow virtual gardens by sending and receiving positive messages.',
    slug: 'sprout',
    chips: ['Web Application', 'React', 'Node.js'],
    tech: ['React', 'SCSS', 'Pixi.js', 'Node.js', 'MongoDB'],
    summary: [
      'This was my senior capstone project at RIT. I was part of a team of three developers and three designers, who worked for an entire semester designing and building this application from start to finish.',
      "I acted as our team's full stack developer--developing the code and logic for adding, removing, and growing the plants, as well as assisting with tasks related to database work and schema creation.",
      'The goal of this project was to help people feel more connected with each other through the exchange of positive and encouraging messages. We wanted to create an experience that would symbolize how spreading kindness to others results in something beautiful.',
      'The full process site can be found [here](https://designed.cad.rit.edu/nmcapstone/project/sprout).',
    ],
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
    tech: ['Vue.js', 'jQuery', 'typist.js', 'Grammarbot API'],
    summary: [
      "Grammasaurus-Rex (G-Rex for short) was a small project completed by myself and two others in 24 hours for RIT's annual BrickHack hackathon.",
      'We wanted to create an application intended for young students to quickly learn and practice their grammar skills. We drew inspiration from the grammar worksheets/books we had to do when we were in elementary school, so many of the grammar questions and problems to solve come directly from existing examples used in English classes.',
      'When the user begins the application, it randomly generates grammar-related questions to solve. Some examples include fixing sentences to be more grammatically correct, adding in the correct word, and fill in the blank.',
      'If the user gets the question wrong, the application will show where the errors are and will display messages explaining why they are wrong.',
      {
        type: 'info',
        content:
          'Important note: the Grammarbot API that we used is sometimes incorrect, so the application may mark something as wrong when it is right (or vice versa). Future considerations would be to invest in a better API or build our own.',
      },
    ],
    images: [gRexImg1.src, gRexImg2.src, gRexImg3.src],
  },
  {
    title: '2018 U.S. Hate Crimes',
    body: 'An interactive data visualization of hate crimes in the United States in 2018.',
    slug: 'hate-crimes',
    chips: ['Data Visualization', 'D3.js', 'OpenRefine'],
    summary: [
      'This was my final project for my Data Visualization class I took in my third year of college. The news about George Floyd was all over the media at the time, so I really wanted my final project to highlight data related to hate crimes in this country to see if there were any trends and examine how this data was reported.',
      'For this project, I grabbed some open source data from 2018 and used OpenRefine to clean it. I utilized the D3.js library to create interactive bar charts that represent the number of hate crimes reported by month in each state.',
      'Clicking on one of the bars opens up a zoomable sunburst chart that gives a detailed breakdown of the types of hate crimes committed in that particular month (for that state). Each time a section on the sunburst is selected, the information becomes more specific--showing the subcategory of the hate crime, the location it took place, and the date.',
      'This was one of my favorite projects I completed while at RIT, and it was very intriguing to see the hate crimes that were reported (or, more interestingly, NOT reported) in the U.S. Although it is outdated, much of the data is still a reflection of today.',
    ],
    images: [
      hateCrimesImg1.src,
      hateCrimesImg2.src,
      hateCrimesImg3.src,
      hateCrimesImg4.src,
    ],
    link: 'https://jjheipz24.github.io/2018HateCrimes/',
  },
];

export default projects;
