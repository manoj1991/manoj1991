// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'manoj1991', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/manoj1991/manoj1991.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/manoj1991/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['manoj1991/my-project1', 'manoj1991/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['manoj1991/gitprofile', 'manoj1991/pandora'], // List of repository names to display. example: ['manoj1991/my-project1', 'manoj1991/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Tata CLiQ E-commerce Platform',
          description: `Tata CLiQ is a flagship omni-channel e-commerce platform by the Tata Group—offering fashion, electronics, luxury and lifestyle products across digital and physical touchpoints. During my tenure, I led feature enhancements and maintenance efforts that improved developer effectiveness by 20%, reduced bugs by 15%, and elevated user satisfaction through collaborative design-driven development.`,
          imageUrl: 'src/assets/img/tatacliq.png', // Ensure this matches your actual image filename path
          link: 'https://www.tatacliq.com/',
          technologies: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Docker', 'Zustand', 'Jenkins'],
        },

        {
          title: 'Admin Dashboard',
          description:
            'Developed a modern admin dashboard with focus on performance, scalability, and state management. Integrated charts, role-based access, and modular components. Used Zustand for lightweight state management and optimized rendering for large datasets.',
          imageUrl: 'src/assets/img/admin_dashboard.png', // 🔗 local image
          link: 'https://example.com', // replace with real demo or repo link if available
          technologies: [
            'React.js',
            'Next.js',
            'TypeScript',
            'Zustand',
            'Tailwind CSS',
            'Ant Design',
            'Node.js',
            'Express.js',
            'PostgreSQL',
          ],
        },
        {
          title: 'Impelsys Learning & Publishing Solutions',
          description:
            'Impelsys is a global provider of digital learning and content delivery solutions for publishers, educators, and enterprises. Worked on Magento PWA-based e-learning products, optimizing performance and analytics. Supported large-scale digital publishing workflows with integrated PWA technology.',
          imageUrl: 'src/assets/img/impelsys.png', // 🔗 local image
          link: 'https://www.impelsys.com/',
          technologies: [
            'Magento',
            'PWA',
            'React.js',
            'TypeScript',
            'Service Workers',
            'MySQL',
            'Analytics',
          ],
        },
        {
          title: 'Meow Meow Tweet – Shopify Store',
          description:
            'Meow Meow Tweet is a vegan body care company focused on sustainability. The website runs on Shopify, offering an engaging e-commerce experience with eco-friendly design. Integrated custom themes, analytics, and SEO-friendly optimizations to enhance conversions and user engagement.',
          imageUrl: 'src/assets/img/meowmeowtweet.png', // 🔗 local image
          link: 'https://meowmeowtweet.com/',
          technologies: [
            'Shopify',
            'Liquid',
            'JavaScript',
            'GA (Google Analytics)',
            'SEO',
            'Tailwind CSS',
          ],
        },
      ],
    },

  }, // ✅ fixed: close `projects` here properly

  seo: { title: 'Portfolio of Manoj Kadolkar', description: '', imageURL: '' },
  social: {
    linkedin: 'manoj-kadolkar',
    // x: '',
    // mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: 'me_manoj',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'im_manoj406',
    dev: 'manoj_kadolkar',
    stackoverflow: '5312898/manoj-kadolkar', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.manoj1991.com',
    phone: '',
    email: 'manojmkadolkar@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Web3',
    'PHP',
    'Laravel',
    'Python',
    'React.js',
    'Node.js',
    'Nest.js',
    'RTK',
    'D3.js',
    'GraphQL',
    'Next.js',
    'jQuery',
    'Bootstrap 5',
    'Zustand',
    'AngularJS',
    'Tailwind CSS',
    'MySQL',
    'PostgreSQL',
    'HTML5',
    'CSS3',
    'Git',
    'Docker',
    'Webpack',
    'Jenkins',
    'VS Code',
    'Eclipse',
    'NPM',
    'Grunt',
    'Gulp',
    'Yarn',
    'Fiddler',
    'WordPress',
    'Magento',
    'Shopify',
    'PHPUnit',
    'Antd',
    'Agile Methodology',
    'Test Driven Development',
    'MVC',
  ],

  experiences: [
    {
      company: 'Yupiter LLC',
      position: 'Senior Software Engineer',
      from: 'Dec 2021',
      to: 'Present',
      companyLink: 'https://yupiterllc.com', // replace with real URL if available
    },
    {
      company: 'Teamware Solution (Client: Microsoft)',
      position: 'Browser Application Developer',
      from: 'Sep 2019',
      to: 'Dec 2021',
      companyLink: 'https://www.teamwaresolutions.net', // replace with real URL if needed
    },
    {
      company: 'Impelsys',
      position: 'Frontend Developer',
      from: 'Sep 2018',
      to: 'Sep 2019',
      companyLink: 'https://www.impelsys.com',
    },
    {
      company: 'Shaast Tech Company',
      position: 'Web Developer',
      from: 'Jan 2016',
      to: 'Feb 2017',
      companyLink: 'https://example.com', // add real link if company has one
    },
  ],

  certifications: [
    {
      name: 'WCAG 2.1 / 2.2 Simplified With Examples',
      body: 'Udemy',
      year: 'August 2025',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-81c57e28-0812-42fe-b5f6-67ab76ebebbb.pdf',
    },
    {
      name: 'Web Design Accessibility Certificate',
      body: 'Udemy',
      year: 'August 2025',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-774cab05-fdb5-4528-be1a-7c79aa8657b2.pdf',
    },
    {
      name: 'Introduction to Software Product Management',
      body: 'Coursera',
      year: 'April 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/7VASRLRB25VN',
    },
  ],
  educations: [
    {
      institution: 'VTU',
      degree: 'Bachelor of Engineering (Computer Science)',
      from: '2012',
      to: '2015',
    },
    {
      institution: 'DTE',
      degree: 'Diploma (Computer Science)',
      from: '2009',
      to: '2012',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    display: false,
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/manoj1991/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
