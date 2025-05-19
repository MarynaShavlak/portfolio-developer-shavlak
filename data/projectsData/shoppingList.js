export const shoppingListData = {
  id: "shoppingList",
  industry: "Web Application",
  type: "Individual",
  categories: ["react", "typescript", "canvas"],
  title: "Shopping List",
  slogan: "",
  date: 2024,
  poster: "demo.gif",
  timeline: "6 hours",
  website: {
    name: "Shopping List",
    link: "https://marynashavlak.github.io/shopping-list-ts/",
  },
  repository: {
    name: "shopping-list (GitHub)",
    link: "https://github.com/MarynaShavlak/shopping-list-ts",
  },
  descr: [
    "The Shopping List app simplifies grocery management with easy item addition, editing, and deletion. Users specify item details like name, unit (e.g., pcs, kg), and quantity.",
    "A visually dynamic background features pulsating, blurred circles created with a canvas, enhancing the app's aesthetic appeal.",
  ],
  skills: [
    "React.js (Functional Components)",
    "Component Reusability & Modularity",
    "State Management with useState",
    "Effect Management with useEffect",
    "Conditional Rendering",
    "Custom React Hooks",
    "Error Handling & Loading States",
    "Type-Safe Programming with TypeScript",
    "Object & Array Destructuring",
    "Linting",
    "Code Formatting ",
    "Modular Architecture & Folder Structure",
    "Controlled & Uncontrolled Components",
  ],
  features: [
    {
      title: "Item Management",
      items: [
        "Add items with name, unit of measurement, and quantity",
        "Mark items as done once purchased",
        "Edit or delete items from the shopping list",
      ],
    },
    {
      title: "Dynamic UI",
      items: [
        "Displays a message when the shopping list is empty",
        "Pulsating blurred circles on the background for aesthetic appeal",
      ],
    },
    {
      title: "Unit Selection",
      items: [
        "Dropdown menu to select units of measurement (pcs, kg, g, litre)",
      ],
    },
    {
      title: "User Interaction",
      items: [
        "Toast notifications for duplication items",
        "Smooth transitions and animations using react-transition-group",
      ],
    },
    {
      title: "Responsive Design",
      items: [
        "App adapts to various screen sizes for an optimal user experience",
      ],
    },
  ],
  techStack: {
    architecture: "Modular React Single Page Application with TypeScript",
    frontend: ["React"],

    styling: ["Styled Components", "CSS", "Modern Normalize"],
    ui: ["React Icons", "React Transition Group", "React Toastify"],
    utilities: ["Lodash", "UUID"],
    tools: ["TypeScript", "ESLint", "Prettier", "Webpack (via CRA)"],
    storage: ["LocalStorage"],
  },
  images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
};
