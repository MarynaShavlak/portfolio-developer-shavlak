export const projectsData = [
    {
        id: 'devInterviewHub',
        categories: ['react'],
        type: 'Individual',
        title: 'Dev Interview Hub',
        slogan: 'Master the Interview, Land the Job !',
        date: 2025,
        industry: 'Education',
        timeline: '8 months',
        poster: 'poster.jpg',
        website: {
            name: 'Dev Interview Hub WebApp',
            link: 'https://dev-interview-hub.web.app/',
        },
        repository: {
            name: 'dev-interview-hub (GitHub)',
            link: 'https://github.com/MarynaShavlak/dev-interview-hub'
        },
        descr: [
            '<b>Dev Interview Hub</b> is a web app that helps developers manage answers to common frontend interview questions, offering features for reading, searching, filtering, and organizing responses.',


        ],
        techStack: {
            architecture: 'Feature-Sliced Design',
            frontend: ['React', 'Redux Toolkit', 'React Router'],
            backend: ['Firebase (Firestore, Auth, Cloud Functions, Storage)'],
            tools: ['TypeScript', 'Webpack', 'Vite', 'Babel', 'ESLint', 'Prettier'],
            ciCd: ['Husky', 'Lint-Staged'],
            ui: ['SASS/SCSS', 'Headless UI', 'React Spring', 'Use Gesture', 'TanStack Table'],
            testing: ['Jest', 'React Testing Library', 'Cypress', 'Storybook', 'Loki'],
            other: ['Algolia', 'Monaco Editor', 'React Draft WYSIWYG', 'ApexCharts', 'Zod', 'React Device Detect'],
        },
        skills: [
            'TypeScript', 'React.js', 'Webpack', 'Vite',
            'CI/CD', 'Firebase', 'Feature-Sliced Design',
            'Data Normalization', 'Cypress', 'Jest', 'Storybook',
            'E2E', 'Lazy Loading', 'Regression Testing'
        ],
        features: [
            {
                title: 'Authentication & Profile',
                items: ['Email/Google sign-in', 'Profile editing'],
            },
            {
                title: 'Article Management',
                items: [
                    'Create articles',
                    'Edit articles',
                    'Delete articles',
                    'Search articles',
                    'Filter by category',
                    'Sort by date, views, title',
                ],
            },
            {
                title: 'User Interaction',
                items: [
                    'Comments',
                    'Ratings',
                    'Feedback',
                    'Article stats in "My Articles" page',
                ],
            },
            {
                title: 'Admin Dashboard',
                items: ['Analytics', 'Interactive charts', 'User management'],
            },
            {
                title: 'Real-Time Notifications',
                items: [
                    'Articles',
                    'Comments',
                    'Ratings',
                    'Feedback',
                    'Auto-expiration',
                ],
            },
            {
                title: 'Internationalization',
                items: ['English & Ukrainian (i18next)'],
            },
            {
                title: 'Performance & UX Enhancements',
                items: [
                    'UI version switch',
                    'Smooth scrolling',
                    'Error notifications',
                    'Skeleton loaders',
                    'Dynamic theming',
                ],
            },
        ],
        additionalInfo: [
            {
                title: 'Optimized Rendering & State Management & Offline Support',
                items: [
                    'Async reducers/components',
                    'Data normalization',
                    'Throttle/debounce',
                    'Lazy loading',
                    'Async injections',
                    'List virtualization',
                    'Service Worker with asset/API caching',
                ],
            },
            {
                title: 'Feature Flags',
                items: [
                    'Toggle between old/new UI',
                    'Control article rating and feedback',
                ],
            },
            {
                title: 'Code Generation: AST-Based',
                items: [
                    'Generate FSD slices',
                    'Update imports',
                    'Create public API',
                    'Remove feature toggles',
                    'Generate Loki reports',
                    'Clear cache',
                ],
            },
            {
                title: 'Custom Plugins for Code Quality',
                items: [
                    'Feature flag management',
                    'Architecture enforcement',
                    'Layer import validation',
                    'Relative path enforcement',
                    'Restrict absolute imports to public APIs',
                ],
            },
        ],
        images: [
            'signInForm.jpg',
            'validations.jpg',
            'loginForm.jpg',
            'resetPassword.jpg',
            'adminInfo1.jpg',
            'adminInfo2.jpg',
            'adminInfo3.jpg',
            'adminTable.jpg',
            'article1.jpg',

            'article3.jpg',
            'article5.jpg',
            'create1.jpg',
            'create2.jpg',
            'edit1.jpg',
            'edit2.jpg',
            'gridArticlesRedesigned.jpg',
            'articlesDeprecated.jpg',
            'articlesDeprecated2.jpg',
                        'myArticles.jpg',
            'profile.jpg',
            'profileEdit.jpg',
            'queue.jpg',
            'ratingRecommendationsComments.jpg',
            'sequenceArticlesRedesigned.jpg',
            'settings.jpg',
                   ],
    },
    {
        id: 'cleaningComfortGroup',
        industry: 'Services',
        type: 'Individual',
        categories: ['jquery', 'html', 'css', 'gulp' ],
        title: 'Comfort Group Cleaning',
        slogan: 'Your Convenient Cleaning Solution!',
        date: 2023,
        poster: 'poster.gif',
        timeline: '3 months',
        website: {
            name: 'Comfort Group WebSite',
            link: 'https://marynashavlak.github.io/comfort-group-cleaning/',
        },
        repository: {
            name: 'comfort-group-cleaning (GitHub)',
            link: 'https://github.com/MarynaShavlak/comfort-group-cleaning'
        },
        descr: [
            'Comfort Group an innovative cleaning service platform designed to streamline your cleaning needs. ' ,
            'With a user-friendly website, this JavaScript project simplifies the process of estimating costs, booking services, and managing your cleaning appointments. ' ,
            'Using a combination of technologies and features, project aims to revolutionize the cleaning service industry and bring cleanliness right to your fingertips.',
        ],
        skills: [  "Optimized Images",
            "Google Maps API",
            "Dark/Light Theme Toggler",
            "JavaScript",
            "Responsive Web Design",
            "Cascading Style Sheets (CSS)",
            "Front-End Development",
            "BEM",
            "Gulp.js",
            "SASS",
            "CSS Grid Layout",
            "jQuery",
            "Lighthouse audit",
            "HTML5"],
        features: [
            {
                title: 'User Experience',
                items: [
                    'Child-friendly interface',
                    'Visually appealing design',
                    'Responsive design for various devices',
                    'Sound orientation for navigation and feedback',
                ],
            },
            {
                title: 'Gameplay Mechanics',
                items: [
                    'Multiple difficulty levels',
                    'Life system for added challenge',
                    'Timer options: play with or without a timer',
                    'Pause and resume functionality with timer',
                    'Random board generation for replayability',
                ],
            },
            {
                title: 'Customization',
                items: ['Theme customization with 8 cartoon themes'],
            },
            {
                title: 'Assistance & Guidance',
                items: [
                    'Helpful hints when stuck',
                    'Dedicated hint system to improve memory and progression',
                ],
            },
            {
                title: 'Performance Tracking',
                items: ['Level statistics tracking for performance and progress'],
            },
        ],
        techStack: {
            architecture: 'Multi-page application (MPA) using Vanilla JavaScript',
            frontend: ['HTML/CSS/JS', 'SASS/SCSS', 'jQuery'],
            build: ['Gulp', 'Webpack', 'Babel'],
            tools: ['PostCSS', 'Autoprefixer'],
            ui: [ 'Masonry Layout', 'Swiper JS', 'Font Awesome'],
            effects: ['Vanilla Tilt', 'GSAP'],
            optimization: ['CSS Minification (gulp-csso)', 'Group CSS Media Queries'],
            other: ['Body Scroll Lock', 'Modern Normalize'],
        },
        additionalInfo: [],
        images: [
           'demo-comfort-group.mp4',
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',
            'img7.jpg',
            'img8.jpg',
            'img9.jpg',
            'img10.jpg',
            'img11.jpg',


        ],
    },
    {
        id: 'sudokuForKids',
        industry: 'Web Games',
        type: 'Individual',
        categories: ['javascript', 'html', 'css', ],
        title: 'Sudoku for Kids',
        slogan: 'Fun and Educational Web Game!',
        presentation: {
            name: 'Sudoku for Kids – Project Presentation',
            link: 'https://www.canva.com/design/DAFo_yYBwKY/2VVBeMIKfRF6uEI7AnxDvQ/edit'
        },
        date: 2023,
        poster: 'poster.gif',
        timeline: '2 months',
        website: {
            name: 'Sudoku for Kids WebGame',
            link: 'https://marynashavlak.github.io/game-sudoku-for-kids/',
        },
        repository: {
            name: 'game-sudoku-for-kids (GitHub)',
            link: 'https://github.com/MarynaShavlak/game-sudoku-for-kids'
        },
        descr: [
            'Sudoku for Kids is an engaging web game introducing children to Sudoku puzzles.' ,
            'It offers a child-friendly interface, multiple difficulty levels, helpful hints, and immersive features like responsive design, sound orientation, and theme customization.',
            'It includes gameplay elements such as life and hint systems, random board generation, visual cues, and level statistics tracking, with potential future enhancements like multiplayer mode and achievements.'

        ],
        skills: [
           "HTML5",
            "CSS3",
            "JavaScript",
            "Time Management",
            "DOM Manipulation",
            "Event Handling",
            "Modal Management",
            "Game State Initialization",
            "Responsive Design Handling",
            "Custom UI Transitions",
            "Theming and Dynamic Styling",
            "Audio & Visual Feedback",
            'Images Optimization',
            "Function Decomposition",
            "State Management (vanilla JS)",
            "Game UX Logic"
        ],
        features: [
            {
                title: 'User Experience & Accessibility',
                items: [
                    'Child-friendly interface',
                    'Responsive design for all devices',
                    'Sound orientation for navigation and feedback',
                ],
            },
            {
                title: 'Gameplay Mechanics',
                items: [
                    'Multiple difficulty levels',
                    'Life system to increase challenge',
                    'Random board generation for endless puzzles',
                    'Pause and resume game functionality',
                    'Timer options: play with or without a countdown',
                ],
            },
            {
                title: 'Customization & Personalization',
                items: [
                    'Theme customization with 8 cartoon styles',
                ],
            },
            {
                title: 'Hint & Assistance System',
                items: [
                    'Helpful hints when stuck',
                    'Hint system to guide players and improve memory',
                ],
            },
            {
                title: 'Progress Tracking',
                items: [
                    'Level statistics tracking to monitor performance',
                ],
            },
        ],
        techStack: {
            architecture: 'Vanilla JavaScript single-page application',
            frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
            build: ['Gulp', 'Webpack', 'Babel'],
            tools: ['PostCSS', 'Autoprefixer'],
            ui: ['Custom components', 'SVG icons', 'Google Fonts'],
            media: ['Audio integration', 'GIF animations'],
            storage: ['LocalStorage for game statistics'],
        },
           images: [
            'demo-sudoku.mp4',
            'preview.gif',
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',
            'img7.jpg',
            'img8.jpg',
            'img9.jpg',
            'img10.jpg',
            'img11.jpg',
            'img12.jpg',
            'img13.jpg',


        ],
    },
    {
        id: 'phonebook',
        industry: 'Web Application',
        type: 'Individual',
        categories: ['react', 'webpack' ],
        title: 'Phonebook',
        slogan: 'Let PHONE GENIE grant your every connection wish!',
        presentation: '',
        date: 2023,
        poster: 'poster.png',
        timeline: '4 months',
        apiDocumentation: {
            name: 'Connections API Docs',
            link: 'https://connections-api.goit.global/docs/'
        },
        website: {
            name: 'Phonebook WebApplication',
            link: 'https://marynashavlak.github.io/phonebook/',
        },
        repository: {
            name: 'phonebook (GitHub)',
            link: 'https://github.com/MarynaShavlak/phonebook'
        },
        descr: [
           '"Phone Genie" is a comprehensive phonebook application meticulously crafted to redefine user interaction with contact management.' ,
           'This individual project is driven by a robust Swagger backend API for a seamless user experience.',
            'Effortlessly manage contacts, including secure registration, easy input of international numbers, and intuitive organization features.',
            'Enjoy swift search, batch actions, and a recycle bin for added safety.',
            '"Phone Genie" prioritizes user convenience, offering a comprehensive suite of tools for effortless contact and group management.',
            'Elevate your experience with its intuitive interface and powerful features.'

        ],
        skills: [
            'React.js',
            'React Router DOM',
            'Redux Toolkit',
            'Redux Thunk',
            'Async Data Fetching (AJAX)',
            'State Persistence',
            'Form Management',
            'Component Styling',
            'UI Enhancements & Notifications',
            'Drag-and-Drop Interfaces',
            'Custom Dropdowns & Highlight Components',
            'Slug Generation & REST API Integration',
            'Reusable & Modular Components',
            'Responsive Design',
            'Linting & Code Quality (ESLint, Prettier)',
            'Browser Compatibility',
            'Custom React Hooks & Constants'
        ],
        features: [
            {
                title: 'Authentication',
                items: [
                    'User registration with input validation and password confirmation',
                    'Secure login with session management',
                    'Logout to end session safely',
                ],
            },
            {
                title: 'Phone Number Input',
                items: [
                    'Supports international phone numbers with optional country code',
                    'Phone number validation for correct format',
                    'Country flags shown for selected codes for visual clarity',
                ],
            },
            {
                title: 'Contact Management',
                items: [
                    'Add new contacts with name and phone number',
                    'Edit existing contacts',
                    'Delete contacts with confirmation (moved to recycle bin)',
                    'Search across phonebook, favorites, and recycle bin',
                    'Smart search highlighting matching entries',
                    'Sort contacts by name or date (ascending/descending)',
                ],
            },
            {
                title: 'Favorites & Groups',
                items: [
                    'Mark contacts as favorites for quick access',
                    'Assign contacts to custom groups',
                    'Create, edit, and delete contact groups with unique names',
                    'Drag-and-drop contacts between groups',
                    'Toggle visibility of contacts in a group',
                ],
            },
            {
                title: 'Merge & Batch Actions',
                items: [
                    'Merge contacts with selected name and number',
                    'Retain key info during merging',
                    'Merge groups with a custom name, avoiding duplicates',
                    'Batch select contacts for efficient management',
                ],
            },
            {
                title: 'Recycle Bin',
                items: [
                    'Restore one, multiple, or all contacts from recycle bin',
                    'Permanent contact deletion with confirmation',
                    'Timestamps for removal tracking',
                ],
            },
            {
                title: 'Click-to-Call',
                items: [
                    'Initiate phone calls directly from contact entries',
                ],
            },
            {
                title: 'Notifications & Feedback',
                items: [
                    'Success notifications for completed actions',
                    'Error alerts for failed operations',
                    'Real-time updates across UI',
                ],
            },
            {
                title: 'Personalization & UX',
                items: [
                    'Dynamic avatars with user initials',
                    'Custom loading indicator for processing feedback',
                ],
            },
        ],
        techStack: {
            architecture: 'Modular React app with Redux Toolkit state management',
            frontend: ['React', 'React Router DOM'],
            stateManagement: ['Redux Toolkit', 'React Redux', 'Redux Persist'],
            api: ['Axios'],
            backend: ['RESTful API built with Swagger (OpenAPI standard)'],
            forms: ['Formik', 'Yup'],
            styling: ['Styled Components', 'Classnames', 'Clsx', 'Modern Normalize'],
            ui: [
                'Material UI',
                'React Icons',
                'React Select',
                'React Modal',
                'React Loader Spinner',
                'React Avatar',
                'React Highlight Words',
                'React Toastify',
            ],
            utilities: ['Slugify', 'Nanoid', 'Randomcolor'],
            interactivity: ['Downshift', 'react-beautiful-dnd(Drag and Drop)'],
            tools: ['ESLint', 'Prettier', 'Babel', 'Webpack (via CRA)'],
            storage: ['LocalStorage'],
        },
        images: [
            '1.gif',
            '2.gif',
            'edit-delete-group.gif',
            'favorites.gif',
            'merge-groups.gif',
            'drag-contacts.gif',
            'add-few-contacts-in-groups.png',
            'create-group.png',
            'delete-modal.png',
            'edit-contact.png',
            'mobile.png',
            'recycle-bin.png',
            'restore-contacts.png',
            'search-contacts.png',
            'select-and-drop-down.png',
            'select-contacts.jpg',
            'tablet.png',
        ],
    },
    {
        id: 'gooseTrack',
        industry: 'Web Application',
        categories: ['react', 'webpack' ],
        title: 'GooseTrack',
        type: 'Collaborative',
        slogan: 'Your Ultimate Task Manager and Calendar Companion!',

        date: 2023,
        poster: 'poster.jpg',
        timeline: '2 weeks',
        apiDocumentation: {
            name: 'Goose Tracker API Docs',
            link: 'https://goose-tracker-backend.p.goit.global/api-docs/#/'
        },
        website: {
            name: 'GooseTrack WebApplication',
            link: 'https://svitlanahonchar.github.io/Goose-Track_Work-Smart/',
        },
        repository: {
            name:'goose-track (GitHub)',
            link: 'https://github.com/SvitlanaHonchar/Goose-Track_Work-Smart'
        },
        descr: [
           'GooseTrack is a collaborative React project, that streamlines task, event, and deadline management with a user-friendly interface.',
            'It centralizes these activities, allowing easy customization of account settings and calendar preferences.',
            'Users can prioritize tasks effortlessly, visualize upcoming events, and maintain a cohesive schedule for improved productivity.'
        ],
        skills: [
            'React.js',
            'React Router DOM',
            'React Redux',
            'Redux Toolkit',
            'Redux Thunk',
            'Async Data Fetching (AJAX)',
            'Async Thunk Middleware',
            'REST API integration',
            'State Persistence',
            'Form Management',
            'Date manipulation and comparison',
            'Component Styling',
            'UI Enhancements & Notifications',
            'Reusable & Modular Components',
            'Responsive Design',
            'Linting & Code Quality (ESLint, Prettier)',
            'Browser Compatibility',
            'Custom React Hooks & Constants'
        ],
        features: [
            {
                title: 'Authentication',
                items: [
                    'Quick user registration',
                    'Persistent login sessions',
                    'Secure logout',
                ],
            },
            {
                title: 'User Experience',
                items: [
                    'Intuitive and user-friendly interface design',
                    'Responsive layout for optimal interaction across devices',
                    'Smooth navigation for consistent flow between pages',
                ],
            },
            {
                title: 'Personalization',
                items: [
                    'Customizable user profiles with editable preferences',
                    'Adjustable calendar filters to suit user schedules',
                    'Persistent local storage of sorting and filter settings',
                ],
            },
            {
                title: 'Task Management',
                items: [
                    'Add new tasks',
                    'Update task information in real-time',
                    'Delete individual tasks with instant feedback',

                ],
            },
            {
                title: 'Task Details',
                items: [
                    'Assign start and end time for accurate planning',
                    'Set task priority: low, medium, or high',
                    'Display priority levels with color-coded indicators',
                ],
            },
            {
                title: 'Planning & Scheduling',
                items: [
                    'Clear visual layout for upcoming events and deadlines',
                    'Date-based organization to help track progress',
                    'Seamless transition between planned and completed tasks',
                ],
            },
        ],
        techStack: {
            architecture: 'Modular React application using Redux Toolkit and feature-based structure',
            frontend: ['React', 'React Router DOM'],
            stateManagement: ['Redux Toolkit', 'React Redux', 'Redux Persist',  'Redux Async Thunk'],
            api: ['Axios'],
            backend: ['RESTful API built with Swagger (OpenAPI standard)'],
            forms: ['Formik', 'Yup'],
            styling: [
                'SCSS with BEM methodology',
                'Emotion Styled (@emotion/styled)',
                'Styled Components',
            ],
            ui: [
                'Material UI',
                'Material UI Icons',
                'MUI X Date Pickers',
                'React Icons',
                'React Modal',
                'React Hot Toast'
            ],
            tools: ['ESLint', 'Prettier', 'Babel', 'Webpack (via CRA)'],
            storage: ['Redux Persist', 'LocalStorage'],
            dateTime: [
                'Calendar Dates',
                'Date-fns',
                'Dayjs',
                'React Datepicker',
            ],
        },
        images: [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',
            'img7.jpg',
        ],
    },
    {
        id: 'filmoteka',
        industry: 'Web Application',
        categories: ['javascript', 'html', 'saas', 'parcel', 'canvas' ],
        title: 'Filmoteka',
        type: 'Collaborative',
        slogan: 'Discover, Organize, and Enjoy Movies Your Way!',

        date: 2023,
        poster: 'demo.gif',
        timeline: '2 weeks',
        presentation: {
            name: 'Filmoteka – Project Presentation',
            link: 'https://www.canva.com/design/DAFaRx-25Hc/T7veuXW-nSjhchXr3s8Ubg/view#1'
        },
        website: {
            name: 'Filmoteka WebApplication',
            link: 'https://marynashavlak.github.io/filmoteka/',
        },
        repository: {
            name:'filmoteka (GitHub)',
            link: 'https://github.com/MarynaShavlak/filmoteka'
        },
        descr: [
          'Filmoteka is a responsive online movie platform with a vast collection of films.',
            'The platform boasts a responsive design and an extensive collection of films, which users can browse through with ease by using various search and filter criteria. ',
            'The platform\'s home page showcases trending and popular movies, thereby facilitating convenient access to the most sought-after content. ',
            'Additionally, users can personalize their movie experience by marking their favorite films as watched and adding them to their queue.'
        ],
        skills: [
            'AJAX',
            'REST API integration',
            'Axios for HTTP requests',
            'Firebase Authentication and Database Management',
            'Modern JavaScript with ES6+ classes and private fields',
            'Dynamic DOM manipulation and event handling',
            'Responsive image loading with <picture> and srcset attributes',
            'Lazy loading implementation for images',
            'Custom templating and HTML construction',
            'Third-party library integration',
            'Regular expression implementation',
            'Modular code architecture',
            'LocalStorage data management',
            'Data fetching optimization',
            'Responsive image techniques',
            'Responsive design',
            'Efficient pagination',
            'Responsive canvas animation using Canvas API and OOP',
            'Dynamic effects based on screen size',

          ],
        features: [
            {
                title: 'Authentication',
                items: [
                    'User registration via Firebase',
                    'Secure login with persistent sessions',
                    'Firebase-powered logout functionality',
                ],
            },
            {
                title: 'Movie Management',
                items: [
                    'Add movies to personal "Watched" list',
                    'Add movies to personal "Queue" list',
                    'Remove movies from personal lists',
                ],
            },
            {
                title: 'Search & Discovery',
                items: [
                    'Advanced movie search functionality',
                    'Sort movies by genre and year',
                    'Display trending movies on homepage',
                ],
            },
            {
                title: 'Media & Content',
                items: [
                    'Showcase movie trailers directly within the app',
                    'Option to visit the film’s official homepage',
                ],
            },
            {
                title: 'UI Feedback & Navigation',
                items: [
                    'Spinner for loading states',
                    'Pagination optimized for mobile devices',
                    'Notifications for instant user feedback',
                ],
            },
            {
                title: 'Design & Experience',
                items: [
                    'Dark theme for low-light environments',
                    'Responsive raster images across devices',
                    'Smooth scroll for seamless browsing',
                    'CSS transitions for hover animations',
                    'Canvas-based header with device-specific variations',
                ],
            },
        ],
        techStack: {
            architecture: 'Multi-page application (MPA) using Vanilla JavaScript with Parcel',
            frontend: ['Vanilla JavaScript', 'HTML5', 'SCSS'],
            stateManagement: ['LocalStorage (for persistence)'],
            api: ['Axios', 'The Movie Database (TMDb) API'],
            backend: ['Firebase (Authentication & Realtime Database)'],
            styling: [
                'SCSS with BEM methodology',
                'Modern Normalize CSS reset',
            ],
            ui: [
                'BasicLightbox',
                'Notiflix',
                'Darkmode-js',
                'Ultimate Pagination',
            ],
            tools: ['Parcel', 'PostHTML Include', 'Prettier'],
            storage: ['LocalStorage', 'Firebase'],
                    },
        images: [
            'demo.gif',
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',
            'img7.jpg',
            'img8.jpg',
            'img9.jpg',
            'img10.jpg',
            'img11.jpg',
            'img12.jpg',
            'img13.jpg',
            'img14.jpg',
            'img15.jpg',
        ],
    },
    {
        id: 'iceCream',
        industry: 'Web Application',
        categories: ['html', 'saas', 'javascript', 'parcel', 'jquery'],
        title: 'Ice Cream Landing Page',
        type: 'Collaborative',
        slogan: 'One Lick and You’re Hooked!',
        date: 2022,
        poster: 'poster.jpg',
        timeline: '2 weeks',

        website: {
            name: 'Ice Cream WebApplication',
            link: 'https://annakilchytska.github.io/team-work-smart-not-hard/',
        },
        repository: {
            name:'ice-cream (GitHub)',
            link: 'https://github.com/AnnaKilchytska/team-work-smart-not-hard'
        },
        descr: [
            "We designed a responsive one-page website for an ice cream company featuring semantic markup, accessibility standards, and intuitive navigation through a mobile-friendly burger menu.",
            "Our design incorporates interactive elements including modal windows with application forms, a customer feedback gallery slider, and smooth-scrolling functionality.",
            "The website delivers an engaging user experience with custom cursor effects, hover animations, and optimized retina-display images.",
            "Additionally, we implemented iframe integration for external content embedding, complemented by thoughtful details like a custom favicon to enhance brand recognition."
        ],
        skills: [
            'Semantic HTML',
            "SVG sprite usage",
            'Flexbox Layout',
            "Mobile-first design",
            'SASS Variables',
            'Reusable Mixins',
            'Progressive enhancement',
            "IIFE pattern",
            "DOM manipulation",
            "Event handling",
            "Media queries",
            "Accessibility (aria)",
            "jQuery usage",
            "Third-party library integration",
            "Responsive design",
            "Code reusability",
            'Responsive image techniques',
        ],
        features: [{
    title: 'Design & Responsiveness',
    items: [
        'Responsive layout optimized for all screen sizes',
        'Semantic HTML5 markup for structure and SEO',
        'Retina-ready raster images for high-resolution displays',
        'Custom favicon for brand identity',
        'Custom cursor for unique UI interaction',
    ],
},
    {
        title: 'Navigation & Accessibility',
        items: [
            'Mobile-friendly burger menu for easy navigation',
            'Smooth scroll for seamless user experience',
            'Accessible design ensuring usability for all users',
        ],
    },
    {
        title: 'Interactivity & Media',
        items: [
            'Modal windows for form interaction',
            'Feedback gallery slider built with Slick Carousel',
            'Hover animation effects for enhanced interactivity',
            'Embedded external content via iframe',
        ],
    }
    ],

        techStack: {
            architecture: 'Single-page responsive site with Vanilla JS and Parcel',
            frontend: ['HTML5', 'SCSS', 'Vanilla JavaScript', 'jQuery' ],

            styling: [
                'SCSS with BEM methodology',
                'Modern Normalize CSS reset',
            ],
            ui: [
                'Slick Carousel',
                'Custom modal windows with JavaScript',
                'Custom cursor implementation',
            ],
            tools: ['Parcel', 'PostHTML Include', 'Prettier'],

        },
        images: [
            'demo.gif',
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',
            'img7.jpg',
            'img8.jpg',
            'img9.jpg',
            'img10.jpg',
        ],
    },
    {
        id: 'calculator',
        industry: 'Web Application',
        categories: ['html', 'css', 'javascript', ],
        title: 'Calculator UA',
        type: 'Individual',
        slogan: 'Power Your Math with the Spirit of Ukraine!',
        date: 2022,
        poster: 'demo.gif',
        timeline: '2 weeks',

        website: {
            name: 'Calculator UA WebApplication',
            link: 'https://marynashavlak.github.io/calculator/',
        },
        repository: {
            name:'calculator-ua (GitHub)',
            link: 'https://github.com/MarynaShavlak/calculator'
        },
        descr: [
            'Calculator_UA is a front-end web application designed to perform both basic and advanced arithmetic operations, including addition, subtraction, multiplication, division, percentages, square roots, and exponents.',
            'Enhancing the user experience, the app features patriotic Ukrainian imagery that appears on button hover, blending functionality with national pride.'
            ],
        skills: [
            'Mathematical Calculations & Validation',
            'Input Handling & Data Validation',
            'Clipboard Integration',
            'Responsive Design & Accessibility',
                      'Semantic HTML',
           'Flexbox and Gid Layouts',
           "Mobile-first design",
            "DOM manipulation",
            "Event Handling Delegation",
            "Media queries",
            "Accessibility (aria)",
            "Responsive Web Design",

        ],
        features: [
            {
                title: 'Ukrainian Reality Theming & Patriotic UI',
                items: [
                    'Themed around Ukrainian realities and wartime symbolism',
                    'Incorporates cultural identity through visuals and tone',
                    'Displays patriotic images (e.g. flag, symbols) on button hover',
                    'Enhances user engagement with themed UI interactions',
                    'Promotes pride and awareness through subtle patriotic cues',
                ],
            },
            {
                title: 'Mathematical Calculation Functions',
                items: [
                    'Handles core operations: +, -, *, /, %, ^, √',
                    'Includes input validation (e.g. divide by 0, negative roots)',
                    'Supports power calculation with optional negative exponent flag',
                    'Calculates percent and combined square root operations',
                    'Rounds all results using a shared utility function',
                ],
            },
            {
                title: 'Digits Accumulation & Input Limitation',
                items: [
                    'Restricts integer digits: 15 for positive, 16 for negative numbers',
                    'Limits decimal precision to 6 digits',
                    'Separately handles whole and fractional values for positive/negative numbers',
                    'Ensures formatted output stays within defined digit boundaries',
                    'Supports safe numeric input display without overflow',
                ],
            },
            {
                title: 'Notification System & Math Validation',
                items: [
                    'Modal-based notifications with auto and manual dismissal',
                    'Handles invalid use of "%", "^", and operators after root sign',
                    'Detects missing first or second operand in expressions',
                    'Logs detailed errors to the console for debugging',
                ],
            },
            {
                title: 'Clipboard Support',
                items: [
                          'Implements clipboard copying from the display field',

                ],
            },
            {
                title: 'Design & Responsiveness',
                items: [
                    'Responsive layout optimized for all screen sizes',
                    'Semantic HTML5 markup for structure and SEO',
                    'Retina-ready raster images for high-resolution displays',
                    'Custom favicon for brand identity',
                    'Custom cursor for unique UI interaction',
                ],
            },

        ],

        techStack: {
            architecture: 'Single-page responsive site with Vanilla JS ',
            frontend: ['HTML5', 'SCSS', 'Vanilla JavaScript', 'Font Awesome' ],
            ui: ['Font Awesome icons'],
            tools: ['Prettier'],

        },
        images: [
            'demo-video.mp4',
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',

        ],
    },
    {
        id: 'webStudio',
        industry: 'Web Application',
        categories: ['html', 'saas', 'javascript', ],
        title: 'Web Studio Landing Page',
        type: 'Individual',
        slogan: 'Crafting Your Digital Universe!',
        date: 2022,
        poster: 'poster.jpg',
        timeline: '1 week',

        website: {
            name: 'Web Studio Landing',
            link: 'https://marynashavlak.github.io/web-studio/index.html',
        },
        repository: {
            name:'web-studio (GitHub)',
            link: 'https://github.com/MarynaShavlak/web-studio'
        },
        descr: [
            'Web Studio is a professional two-page website with a responsive design for optimal viewing on any device.',
            'It features an intuitive burger menu, modal window for smooth navigation, and a curated portfolio with overlay descriptions.',
            'A custom checkbox enhances overall functionality.'
        ],
        skills: [
            'Semantic HTML',
            "SVG sprite usage",
            'Flexbox Layout',
            "Mobile-first design",
            "Burger menu",
            'SASS Variables',
            'Reusable Mixins and Placeholders',
            'Progressive enhancement',
            "IIFE pattern",
            "DOM manipulation",
            "Event handling",
            "Media queries",
            "Accessibility (aria)",
            "Responsive design",
            "Code reusability",
            'Responsive image techniques',
        ],
        features: [{
            title: 'Design & Responsiveness',
            items: [
                'Responsive layout optimized for all screen sizes',
                'Semantic HTML5 markup for structure and SEO',
                'Retina-ready raster images for high-resolution displays',
            ],
        },
            {
                title: 'Navigation & Accessibility',
                items: [
                    'Mobile-friendly burger menu for easy navigation',
                    'Modal window for displaying application forms',
                    'Accessible design ensuring usability for all users',
                    'Scroll locking via Body Scroll Lock'
                ],
            },
            {
                title: 'Portfolio & Interactivity',
                items: [
                    'Curated portfolio gallery showcasing diverse works',
                    'Overlay descriptions providing project context',
                    'Custom checkbox component for enhanced form interaction',
                    'Subtle hover animations for engaging user experience',
                ],
            },
        ],

        techStack: {
            architecture: 'Multi-page application (MPA) using Vanilla JavaScript',
            frontend: ['HTML5', 'SCSS', 'Vanilla JavaScript', 'Vanilla JavaScript (ES6+)' ],
            styling: [
                'SCSS with BEM methodology',
                'Modern Normalize CSS reset',
            ],
            ui: [
                'Body Scroll Lock',
               'Custom modal windows with JavaScript',

            ],


        },
        images: [
            'demo-video.mp4',
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',

        ],
    },
];
