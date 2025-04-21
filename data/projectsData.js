export const projectsData = [
    {
        id: 'devInterviewHub',
        categories: ['react'],
        title: 'Dev Interview Hub',
        date: 2025,
        industry: 'Education',
        timeline: '8 months',
        poster: 'poster.jpg',
        website: {
            name: 'Dev Interview Hub: Master the Interview, Land the Job !',
            link: 'https://dev-interview-hub.web.app/',
        },
        repository: 'https://github.com/MarynaShavlak/dev-interview-hub',
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
        categories: ['jquery', 'htmlcss', ],
        title: 'Comfort Group Cleaning',
        date: 2023,
        poster: 'poster.jpg',
        timeline: '3 months',
        website: {
            name: 'Comfort Group: Your Convenient Cleaning Solution!',
            link: 'https://marynashavlak.github.io/comfort-group-cleaning/',
        },
        repository: 'https://github.com/MarynaShavlak/comfort-group-cleaning',
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
            architecture: 'Multi-page website',
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
        categories: ['javascript', 'html', 'css', ],
        title: 'Sudoku for Kids',
        date: 2023,
        poster: 'poster.jpg',
        timeline: '2 months',
        website: {
            name: 'Sudoku for Kids - Fun and Educational Web Game!',
            link: 'https://marynashavlak.github.io/game-sudoku-for-kids/',
        },
        repository: 'https://github.com/MarynaShavlak/game-sudoku-for-kids',
        descr: [
            'Sudoku for Kids is an engaging web game introducing children to Sudoku puzzles.' ,
            'It offers a child-friendly interface, multiple difficulty levels, helpful hints, and immersive features like responsive design, sound orientation, and theme customization.',
            'It includes gameplay elements such as life and hint systems, random board generation, visual cues, and level statistics tracking, with potential future enhancements like multiplayer mode and achievements.'
        ],
        skills: [
            "JavaScript",
            "Time Management",
            "Cascading Style Sheets (CSS)",
            "HTML5"
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
        additionalInfo: [],
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


        ],
    },


];
