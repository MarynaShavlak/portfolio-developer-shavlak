export const happyBirthdayGameData = {
  id: "happyBirthdayGame",
  categories: ["react", "typescript", "webGames"],
  type: "Individual",
  title: "Happy Birthday Riddle Quest",
  slogan: "",
  date: 2025,
  industry: "WebGame",
  timeline: "1 week",
  poster: "poster.jpg",
  website: {
    name: "Happy Birthday Riddle Quest",
    link: "https://marynashavlak.github.io/daniela-4-years-game/",
  },
  repository: {
    name: "hb-riddle-quest (GitHub)",
    link: "https://github.com/MarynaShavlak/daniela-4-years-game",
  },
  descr: [
    "Daniela's Birthday Riddle Quest is a magical fullscreen web game to celebrate the 4th birthday of a little girl named Daniela.",
    "The game blends real-world interactivity with digital riddles, guiding Daniela through a journey with her favorite cartoon heroes like Lady Bug and Super Cat as she solves puzzles and unlocks surprises from a real-life box of 18 small mystery containers.",
  ],
  features: [
    {
      title: "Ukrainian Language Support",
      items: [
        "The entire game interface, audio, and text content are in Ukrainian.",
        "Designed to feel natural and familiar for young Ukrainian-speaking children.",
      ],
    },
    {
      title: "Immersive Fullscreen Experience",
      items: [
        "Fullscreen game mode hides browser UI for full immersion.",
        "Themed with Daniela’s favorite cartoon characters and custom videos from Lady Bug.",
      ],
    },
    {
      title: "Real-World and Digital Game Sync",
      items: [
        "Connected to a physical box with 18 compartments, each marked with a letter or digit.",
        "Daniela selects a matching symbol on-screen and in the real box to start each riddle.",
      ],
    },
    {
      title: "Riddle Solving Tasks",
      items: [
        "Each riddle includes a scene from a cartoon partially hidden with a white overlay.",
        "Audio and text clues are presented to help guess the hidden character or object.",
        "Controls include pause, play, and replay audio for accessibility.",
      ],
    },
    {
      title: "Interactive Reveal and Reward",
      items: [
        "Clicking the overlay reveals the answer with confetti and firework animations.",
        "Real-life gingerbread and gifts tied to the digital reveal create excitement.",
      ],
    },
    {
      title: "Progress Tracking and Motivation",
      items: [
        "Vertical progress bar updates after each successful task.",
        "Unique achievement photos of Daniela appear after solving each riddle.",
        "Audio greetings from Lady Bug become more exciting with each step.",
      ],
    },
    {
      title: "Final Celebration",
      items: [
        "After all 18 riddles are solved, a celebratory dance video from Lady Bug ends the journey.",
        "A sense of accomplishment with visual, audio, and real-world rewards.",
      ],
    },
  ],
  techStack: {
    architecture: "Feature-Sliced Design",
    frontend: ["React", "Zustand"],
    styling: ["CSS Modules"],
    tools: ["TypeScript", "CRACO"],
    effects: ["Framer Motion", "React Confetti", "react-step-progress-bar"],
    ui: ["ionicons"],
    media: ["Howler js", "react-player"],
    stateManagement: ["Zustand"],
    utilities: ["react-use", "screenfull"],
  },
  skills: [
    "TypeScript",
    "React.js",
    "Feature-Sliced Design",
    "Code Splitting",
    "Custom React Hooks",
    "Component Reusability & Modularity",
    "Advanced TypeScript Typing",
    "Modular Architecture & Folder Structure",
    "Multimedia Handling",
    "Dynamic Assets Management",
    "Configuration-driven Rendering (via object maps/types)",
    "Efficient Resource Cleanup (timeouts, audio elements)",
  ],

  additionalInfo: [
    {
      title: "Handmade and Designed with Love",
      items: [
        "All 18 physical small boxes with symbols are handcrafted and uniquely decorated.",
        "Riddle scenes are custom-designed using photo and video editors to include animated and funny cartoon characters.",
        "Each screen encourages both solving the riddle and playful discovery of hidden elements.",
      ],
    },
    {
      title: "Original Riddle Content",
      items: [
        "Several riddles are self-written by the developer, specifically tailored to fit the game theme and characters.",
        "Others are carefully selected from trusted child-friendly sources on the internet.",
      ],
    },
    {
      title: "Fully Personalized Experience for Daniela",
      items: [
        "Every visual and audio element, from progress photos to greetings and themes, is custom-designed for Daniela.",
        "Favorite characters, personal images, and unique achievements make the experience special and memorable.",
      ],
    },
    {
      title: "Optional Future Extensions",
      items: [
        "Planned support for parental customization: upload child’s photos, edit riddles, and personalize greeting messages.",
        "Ongoing development based on interest from other parents for similar birthday game experiences.",
      ],
    },
  ],
  images: [
    "rules-demo.mp4",
    "icecream.mp4",
    "cat.mp4",
    "tree.mp4",
    "fox.mp4",
    "dog.mp4",
    "behemoth.mp4",
    "car.mp4",
    "pig.mp4",
    "dinosaur.mp4",

    "crab.mp4",
    "turtle.mp4",

    "ghost.mp4",
    "frog.mp4",
    "sheep.mp4",
    "unicorn.mp4",
    "final.mp4",
  ],
};
