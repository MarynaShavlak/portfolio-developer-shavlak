export const nanogramExpertData = {
  id: "nanogramExpert",
  industry: "Web Games",
  type: "Individual",
  categories: ["javascript", "html", "css", "canvas", "webGames"],
  title: "NanogramXpert",
  slogan: "",

  date: 2025,
  poster: "nanogram-demo.gif",
  timeline: "8 hours",
  website: {
    name: "NanogramXpert",
    link: "https://marynashavlak.github.io/nanogram-xpert/",
  },
  repository: {
    name: "nanogram-xpert (GitHub)",
    link: "https://github.com/MarynaShavlak/nanogram-xpert",
  },
  descr: [
    "NanogramXpert is a web-based JavaScript game designed to solve Japanese nanogram puzzles.",
    "Users can select colors, hover over cells for better navigation, and click to solve the puzzle.",
    "The application features two main pages: a game page with the Canvas grid for solving the puzzles and a rules page where users can read and visualize the steps for solving nanogram puzzles.",
    "Users receive immediate feedback when interacting with the grid, and incorrect attempts are highlighted.",
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "DOM Manipulation",
    "Event Handling",
    "Canvas API for particle effects",
    "Modular File Structure",
    "Code Splitting",
    "Grid Drawing",
    "Algorithmic Thinking",
  ],
  features: [
    {
      title: "Rules Page",
      items: [
        "Detailed explanation of how to solve Japanese nanogram puzzles.",
        "Visual steps showing how to approach and solve each puzzle.",
      ],
    },
    {
      title: "Dynamic Puzzle Interaction",
      items: [
        "Tasks are dynamically drawn on the Canvas based on configuration.",
        "Users can fill cells by clicking on them, and the puzzle state is updated in real-time.",
      ],
    },
    {
      title: "Color Customization",
      items: ["Users can select the drawing color through an input element."],
    },

    {
      title: "Hover and Click Effects",
      items: [
        "Hovering over cells highlights the associated row and column.",
        "Clicking on the canvas updates the puzzle by filling the selected cell.",
      ],
    },
    {
      title: "Error Highlighting",
      items: [
        "Incorrect cell selections are marked with an error cell for visual feedback.",
      ],
    },
    {
      title: "Area Boundaries Restriction",
      items: [
        "It is not allowed to draw outside the available area set in the configuration.",
      ],
    },
  ],
  techStack: {
    architecture: "Vanilla JavaScript multi-page application with Canvas",
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    tools: ["Prettier"],
    ui: ["Google Fonts"],
    styling: ["CSS with BEM methodology"],
  },
  images: ["nanogram-demo-video.mp4", "img1.jpg", "img3.jpg", "img2.jpg"],
};
