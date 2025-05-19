export const imageFinderData = {
  id: "imageFinder",
  industry: "Web Application",
  type: "Individual",
  categories: ["react"],
  title: "Image Finder",
  slogan: "",
  date: 2023,
  poster: "poster.jpg",
  timeline: "1 week",
  apiDocumentation: {
    name: "Pixabay API Docs",
    link: "https://pixabay.com/api/docs/",
  },
  website: {
    name: "Image Finder WebApplication",
    link: "https://marynashavlak.github.io/react-image-finder/",
  },
  repository: {
    name: "image-finder(GitHub)",
    link: "https://github.com/MarynaShavlak/react-image-finder",
  },
  descr: [
    "A responsive React app that lets users search for images, view thumbnails, and open larger images in a modal.",
    'Images are loaded progressively with a "Load More" button, and users receive notifications about search results.',
  ],
  skills: [
    "React.js",
    "Async Data Fetching (AJAX)",
    "State Persistence",
    "Component Styling",
    "UI Enhancements & Notifications",
    "Reusable & Modular Components",
    "Responsive Design",
    "Linting & Code Quality (ESLint, Prettier)",
    "Browser Compatibility",
    "Custom React Hooks & Constants",
    "React Portal Integration",
  ],
  features: [
    {
      title: "Image Search & Display",
      items: [
        "Search for images by keyword using Pixabay API",
        "View image thumbnails in a gallery",
        "Click thumbnails to view larger images in a modal",
        'Load more images with the "Load More" button',
      ],
    },
    {
      title: "User Notifications",
      items: [
        "Receive notifications about search results",
        "Notify users if no results are found",
        "Display success/failure notifications for search",
      ],
    },
    {
      title: "Responsive Design",
      items: [
        "Fully responsive layout for various screen sizes",
        "Optimized user experience across devices",
      ],
    },
  ],
  techStack: {
    architecture: "Modular React  Single Page Application",
    frontend: ["React"],
    api: ["Axios"],
    backend: ["Third-party RESTful  Pixabay API "],
    styling: ["Styled Components", "CSS Modules", "Modern Normalize"],
    ui: ["React Icons", "React Loader Spinner", "React Toastify"],
    utilities: ["Nanoid", "Prop-types"],
    tools: ["ESLint", "Prettier", "Webpack (via CRA)"],
  },
  images: ["demo-video.mp4", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
};
