export const codeMeterData = {
  id: "codeMeter",
  industry: "Education",
  type: "Individual",
  categories: ["javascript", "html", "css", "canvas"],
  title: "Code Meter: JavaScript Test",
  slogan: "Tick the Right Code Boxes!",

  date: 2024,
  poster: "demo.gif",
  timeline: "3 hours",
  website: {
    name: "Code Meter",
    link: "https://marynashavlak.github.io/code-meter/",
  },
  repository: {
    name: "code-meter (GitHub)",
    link: "https://github.com/MarynaShavlak/code-meter",
  },
  descr: [
    "Code Meter is an interactive JavaScript quiz application that evaluates the user's knowledge of core JS concepts.",
    "It features animated progress tracking, real-time scoring, modal prompts, and celebratory canvas fireworks for completion.",
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "DOM Manipulation",
    "Event Handling",
    "Canvas API for particle effects",
    "Font Awesome for UI Icons",
    "Modular File Structure",
    "Code Splitting",
  ],
  features: [
    {
      title: "Quiz Functionality",
      items: [
        "Dynamic quiz generation from predefined question set",
        "Real-time score tracking and feedback per question",
        "Restart functionality with reset state and UI",
        "Edge-case handling for empty test scenario",
      ],
    },
    {
      title: "User Interface & UX",
      items: [
        "Animated progress bar for visual test advancement",
        "Modal system for user guidance and warnings",
        "Responsive layout with semantic HTML & custom CSS",
      ],
    },
    {
      title: "Celebratory & Visuals",
      items: ["Firework animation on test completion via canvas API"],
    },
  ],
  techStack: {
    architecture: "Vanilla JavaScript single-page application",
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    tools: ["Prettier"],
    ui: ["SVG icons", "Google Fonts"],
    styling: ["CSS with BEM methodology", "Modern Normalize CSS reset"],
  },
  images: ["demo-video.mp4", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
};
