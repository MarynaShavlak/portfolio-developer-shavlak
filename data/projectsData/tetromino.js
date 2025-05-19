export const tetrominoData = {
  id: "tetromino",
  industry: "Web Games",
  type: "Individual",
  categories: ["javascript", "html", "css", "canvas", "webGames"],
  title: "Tetromino",
  slogan: "Move with purpose, play with calm.",
  date: 2025,
  poster: "tetromino-demo.gif",
  timeline: "14 hours",
  website: {
    name: "Tetromino Web Game",
    link: "https://marynashavlak.github.io/tetromino/",
  },
  repository: {
    name: "tetromino (GitHub)",
    link: "https://github.com/MarynaShavlak/tetromino",
  },
  descr: [
    "Tetromino is an engaging web-based puzzle game with smooth, layered animations, powered by multiple canvas elements for seamless visual effects.",
    "It offers interactive menus, dynamic animations, and a clear game flow, including an animated start screen, real-time tetromino manipulation, and progressive difficulty levels.",
    "The game features intuitive pause/resume functionality, a game over flow, and robust state management, including a confirmation system for restarting or exiting the game.",
    "Players can enjoy polished UI transitions and a challenging progression system as they play through predefined levels.",
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Canvas Animation & Visual Effects",
    "DOM Manipulation",
    "Event Handling",
    "Modular File Structure",
    "Code Splitting",
    "Algorithmic Thinking",
    "Mathematics for Geometry",
    "Mathematical Computations",
    "Conditional Logic",
    "Synchronous and Asynchronous Programming",
    "Object-Oriented Concepts",
  ],
  features: [
    {
      title: "Canvas-Based Visual Effects",
      items: [
        "Multiple layered canvas elements dedicated to animated visuals.",
        "Effects are segregated from core DOM-based Tetris logic for clarity and performance.",
      ],
    },
    {
      title: "Dynamic Animation Techniques",
      items: [
        "Includes progressive arc animations and concentric circle effects.",
        "Arcs expand and contract smoothly using requestAnimationFrame.",
        "Concentric circles expand from the center, featuring inner and outer rings for depth.",
      ],
    },
    {
      title: "Seamless Animation Flow",
      items: [
        "Smooth transitions between stages driven by state changes.",
        "Independent canvas layers manage specific visual elements.",
        "Enables composite effects and updates without flicker or redraw conflicts.",
      ],
    },
    {
      title: "Interactive Start Menu",
      items: [
        "Animated main menu with options: Set Username, How to Play, and START.",
        "Each option triggers modular UI transitions with smooth visual feedback.",
      ],
    },
    {
      title: "Username & Rules Flow",
      items: [
        "Username input form replaces menu on click, submits with greeting and returns.",
        "Rules view includes keyboard instructions and back navigation logic.",
      ],
    },
    {
      title: "Seamless Game Launch",
      items: [
        "START triggers animated transition to game UI with progressive canvas effects.",
        "UI sections (level, player info, etc.) appear in timed sequence for polished entry.",
      ],
    },
    {
      title: "Level Progression",
      items: [
        "5 predefined levels with increasing difficulty",
        "Each level has custom speed, score per line, and point goal",
        "Level 5 is the final stage with max challenge",
      ],
    },
    {
      title: "Tetromino Definitions",
      items: [
        "7 standard tetrominoes: O, I, S, Z, L, J, T",
        "Each defined by a 4x4 matrix layout",
        "Shapes used for rendering and collision detection",
      ],
    },
    {
      title: "Game State Management",
      items: [
        "Stores playfield as 20x10 grid",
        "Tracks current level, score, lines, and next goal",
      ],
    },
    {
      title: "Real-Time Tetromino Manipulation",
      items: [
        "Rotate tetromino, soft drop it, Move tetromino horizontally",
        "Instantly hard drop tetromino to the bottom",
      ],
    },
    {
      title: "Start Game Session",
      items: [
        "First-time start initializes game state and UI",
        "Runs game loop, shows next tetromino, enables controls",
        "If game was started before, shows confirmation and pauses game",
      ],
    },
    {
      title: "New Game Confirmation",
      items: [
        "Modal warns about losing previous progress when starting a new game",
        "Includes 'Yes' to proceed and 'No' to cancel",
      ],
    },

    {
      title: "Pause & Resume Game",
      items: [
        "Pause button toggles game state during active session",
        "Pauses game by stopping timer and freezing logic",
        "Resumes game and updates button state accordingly",
      ],
    },
    {
      title: "Exit Game Flow",
      items: [
        "Confirmation modal warns about progress loss",
        "Pauses game and disables controls if already started",
        "‘No’ resumes game, ‘Yes’ resets state and back to menu",
      ],
    },

    {
      title: "Game Over Flow",
      items: [
        "Game over window appears when collisions occur after tetromino drop",
        "Displays 'Game Over' message and a 'Start New Game' button",
      ],
    },
  ],
  techStack: {
    architecture: "Vanilla JavaScript multi-page application with Canvas",
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    tools: ["Prettier"],
    ui: ["Google Fonts", "Font Awesome"],
    styling: ["CSS with BEM methodology"],
  },
  images: [
    "tetromino-demo-video.mp4",
    "img4.jpg",
    "img1.jpg",
    "img3.jpg",
    "img2.jpg",
  ],
};
