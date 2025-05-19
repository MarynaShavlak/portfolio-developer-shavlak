export const eslintPluginPathSupervisorData = {
  id: "eslintPluginPathSupervisor",
  categories: ["javascript", "eslintPlugin", "ast"],
  type: "Individual",
  title: "ESLint Plugin Path Supervisor",
  slogan: "Enforce Clean and Modular Import Paths!",
  date: 2025,
  industry: "Development Tools",
  timeline: "4 hours",
  poster: "poster.jpg",
  website: {
    name: "ESLint Plugin Path Supervisor",
    link: "https://www.npmjs.com/package/eslint-plugin-path-supervisor",
  },
  repository: {
    name: "eslint-plugin-path-supervisor (GitHub)",
    link: "https://github.com/MarynaShavlak/eslint-plugin-path-supervisor",
  },
  descr: [
    "This ESLint plugin enforces strict rules for absolute and relative path usage, public API imports, and layer-based import restrictions in JavaScript and TypeScript projects, promoting modular and maintainable code.",
  ],
  techStack: {
    architecture: "ESLint Plugin",
    tools: ["JavaScript", "ESLint", "Node.js", "NPM"],
    ciCd: ["Husky", "Lint-Staged"],
    testing: ["Jest", "ESLint Testing Utilities"],
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "ESLint",
    "Node.js",
    "AST Parsing",
    "Linting Rules",
    "Jest",
    "NPM Packaging",
    "Module Architecture",
  ],
  features: [
    {
      title: "Layer Imports Enforcement",
      items: [
        "Restricts imports between project layers (e.g., app, entities, features)",
        "Ensures imports only from underlying or shared layers",
        "Supports custom ignore patterns",
      ],
    },
    {
      title: "Relative Path Enforcement",
      items: [
        "Enforces relative paths within the same project slice",
        "Auto-fixes absolute paths to relative paths within slices",
      ],
    },
    {
      title: "Public API Imports",
      items: [
        "Restricts absolute imports to module Public API (index.ts)",
        "Enforces test-related imports from publicApi/testing.ts",
        "Auto-fixes import paths to use public API",
        "Supports test file patterns",
      ],
    },
    {
      title: "Customizable Rules",
      items: [
        "Configurable via `.eslintrc` with alias and pattern options",
        "Supports error and warning levels",
      ],
    },
  ],
  additionalInfo: [
    {
      title: "Code Quality and Modularity",
      items: [
        "Promotes scalable and maintainable project architecture",
        "Enforces consistent import patterns",
        "Enhances code readability and modularity",
      ],
    },
    {
      title: "Auto-Fixing Capabilities",
      items: [
        "Automatically corrects absolute paths to relative within slices",
        "Fixes imports to use public API paths",
      ],
    },
    {
      title: "Extensibility",
      items: [
        "Supports custom alias and ignore patterns",
        "Compatible with JavaScript and TypeScript projects",
      ],
    },
    {
      title: "Integration",
      items: [
        "Seamless integration with existing ESLint setups",
        "Supports modern Node.js environments",
        "Published as an NPM package",
      ],
    },
  ],
  images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
};
