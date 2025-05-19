export const eslintPluginToggleFeaturesData = {
  id: "eslintPluginToggleFeatures",
  categories: ["javascript", "ast", "eslintPlugin"],
  type: "Individual",
  title: "ESLint Plugin Toggle Features",
  slogan: "Enforce Clean and Consistent Feature Toggles!",
  date: 2024,
  industry: "Development Tools",
  timeline: "3 hours",
  poster: "poster.jpg",
  website: {
    name: "ESLint Plugin Toggle Features",
    link: "https://www.npmjs.com/package/eslint-plugin-toggle-features",
  },
  repository: {
    name: "eslint-plugin-toggle-features (GitHub)",
    link: "https://github.com/MarynaShavlak/eslint-plugin-toggle-features",
  },
  descr: [
    "This ESLint plugin is designed to enforce consistent and concise usage of feature toggles in JavaScript and TypeScript projects, ensuring clean and maintainable toggle logic.",
  ],
  techStack: {
    architecture: "ESLint Plugin",
    tools: ["JavaScript", "TypeScript", "ESLint", "Node.js", "NPM"],
    ciCd: ["Husky", "Lint-Staged"],
    testing: ["Jest", "ESLint Testing Utilities"],
  },
  skills: [
    "JavaScript",
    "ESLint",
    "Node.js",
    "AST Parsing",
    "Linting Rules",
    "Jest",
    "NPM Packaging",
  ],
  features: [
    {
      title: "One-Line Arrow Function Enforcement",
      items: [
        "Enforces one-line arrow functions for `on` and `off` in `toggleFeatures`",
        "Reports errors for multiline arrow functions",
      ],
    },
    {
      title: "JSX Props Validation",
      items: [
        "Ensures only JSX elements are passed to `on` and `off` props in `ToggleFeaturesComponent`",
        "Prevents variables or non-JSX expressions",
      ],
    },
    {
      title: "Customizable Rules",
      items: [
        "Configurable via `.eslintrc`",
        "Supports error and warning levels",
      ],
    },
  ],
  additionalInfo: [
    {
      title: "Code Quality",
      items: [
        "Promotes concise and readable feature toggle logic",
        "Reduces complexity in toggle management",
        "Ensures consistent JSX usage in components",
      ],
    },
    {
      title: "Extensibility",
      items: [
        "Easy to extend with additional rules",
        "Compatible with JavaScript projects",
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
  images: ["img1.jpg", "img2.jpg", "img3.jpg"],
};
