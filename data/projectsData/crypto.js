export const cryptoData = {
  id: "crypto",
  industry: "Web Application",
  type: "Individual",
  categories: ["react", "vite"],
  title: "Crypto Web App",
  slogan: "",
  date: 2024,
  poster: "demo.gif",
  timeline: "3 hours",

  website: {
    name: "Crypto WebApplication",
    link: "https://marynashavlak.github.io/crypto/",
  },
  repository: {
    name: "crypto (GitHub)",
    link: "https://marynashavlak.github.io/crypto/",
  },
  descr: [
    "Crypto Portfolio Management Application is a React-based application designed to help users track their cryptocurrency investments.",
    "It allows users to add and manage various assets by providing features for viewing real-time cryptocurrency data and calculating profits or losses based on historical asset prices.",
    "The application integrates with a simulated backend that mimics API calls, enabling real-time fetches for cryptocurrency data and user-owned assets.",
    "It allows users to track changes in asset values and make informed decisions about their portfolios.",
  ],
  skills: [
    "Vite (Build Tool)",
    "Custom API Mocking (Async Data Fetching)",
    "State Management (useState, useContext)",
    "React Context API",
    "React.js (Functional Components)",
    "Component Reusability & Modularity",
    "State Management",
    "Effect Management with useEffect",
    "Conditional Rendering",
    "Custom React Hooks",
    "Error Handling & Loading States",
    "Object & Array Destructuring",
    "Linting",
    "Code Formatting ",
    "Modular Architecture & Folder Structure",
  ],
  features: [
    {
      title: "Portfolio Management",
      items: [
        "Add and manage cryptocurrency assets with custom amounts and purchase prices",
        "Track total portfolio value and overall profit/loss",
        "View detailed information about each coin in the portfolio",
      ],
    },
    {
      title: "Real-Time Data Fetching",
      items: [
        "Fetch real-time cryptocurrency data through simulated API calls",
        "Displays current prices, market cap, and other coin-related information",
        "Shows price changes over the last hour, day, and week",
      ],
    },
    {
      title: "Asset Details",
      items: [
        "View detailed information about each asset in a modal",
        "Track changes in asset value based on current market prices",
        "Calculate total profit/loss based on asset price changes",
      ],
    },
    {
      title: "UI/UX",
      items: [
        "Responsive layout with a header, sidebar, and content area",
        "Use of Ant Design components for clean UI elements (buttons, modals, etc.)",
        "Tailwind CSS for styling and responsive design",
      ],
    },
    {
      title: "Add New Asset",
      items: [
        "Form for adding new cryptocurrency assets with coin selection, price, and amount input fields",
        "Support for adding assets via modal or drawer",
        "Option to set date and time of asset purchase",
      ],
    },
  ],
  techStack: {
    architecture: "Modular React Single Page Application",
    frontend: ["React"],
    api: ["Custom API Mock (funkFetchCrypto, funkFetchAssets)"],
    build: ["Vite"],
    backend: ["Simulated API (Mock Data)"],
    styling: ["Ant Design"],
    ui: ["Ant Design Components (Modal, Drawer, Select, Button, etc.)"],
    tools: ["ESLint", "Prettier"],
  },
  images: [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
  ],
};
