export const matchingGameData = {
  id: "matchingGame",
  industry: "Web Games",
  type: "Individual",
  categories: ["javascript", "html", "css", "webGames"],
  title: "Matching Game",
  slogan: "Unlock Star Wars Memories!",

  date: 2023,
  poster: "demo.gif",
  timeline: "1 week",
  website: {
    name: "Matching WebGame",
    link: "https://marynashavlak.github.io/matching-game/",
  },
  repository: {
    name: "matching-game (GitHub)",
    link: "https://github.com/MarynaShavlak/matching-game",
  },
  descr: [
    "Matching Game is a classic puzzle game where players have to find matching pairs of cards by remembering their positions after briefly seeing them.",
    "With five levels, the challenge grows from the 4x4 grid for beginners to the ultimate 8x6 memory test.",
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "DOM Manipulation",
    "Event Handling",
    "Asynchronous Timing",
    "Randomization technics",
    "Algorithm Implementation",
    "CSS Manipulation",
    "Function Decomposition",
    "State Management (vanilla JS)",
    "Game UX Logic",
  ],
  features: [
    {
      title: "Gameplay Mechanics",
      items: [
        "Find matching pairs of cards by remembering their positions",
        "Card images reveal briefly, then hide to test memory",
        "Cards are hidden again after being clicked",
      ],
    },
    {
      title: "Levels",
      items: [
        "Level 1: 4x4 grid (16 cards)",
        "Level 2: 6x4 grid (24 cards)",
        "Level 3: 8x4 grid (32 cards)",
        "Level 4: 8x5 grid (40 cards)",
        "Level 5: 8x6 grid (48 cards)",
      ],
    },
    {
      title: "User Interface",
      items: [
        "Buttons to select levels (Level 1 to Level 5)",
        "Card grid dynamically adjusts to selected level",
        "Reset button to restart the game after completing a level",
      ],
    },
    {
      title: "Game Features",
      items: [
        "Shuffle card images at the start of each level",
        "Show card images for a short time before hiding them again",
        "Game ends when all pairs are matched",
        "Each game reload shuffles the cards, so you can play again with a new challenge",
      ],
    },
  ],
  techStack: {
    architecture: "Vanilla JavaScript single-page application",
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    ui: ["Custom components", "Google Fonts"],
  },
  images: [
    "demo-video.mp4",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
  ],
};
