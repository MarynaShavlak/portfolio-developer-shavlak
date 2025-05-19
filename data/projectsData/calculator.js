export const calculatorData = {
  id: "calculator",
  industry: "Web Application",
  categories: ["html", "css", "javascript"],
  title: "Calculator UA",
  type: "Individual",
  slogan: "Power Your Math with the Spirit of Ukraine!",
  date: 2022,
  poster: "demo.gif",
  timeline: "2 weeks",

  website: {
    name: "Calculator UA WebApplication",
    link: "https://marynashavlak.github.io/calculator/",
  },
  repository: {
    name: "calculator-ua (GitHub)",
    link: "https://github.com/MarynaShavlak/calculator",
  },
  descr: [
    "Calculator_UA is a front-end web application designed to perform both basic and advanced arithmetic operations, including addition, subtraction, multiplication, division, percentages, square roots, and exponents.",
    "Enhancing the user experience, the app features patriotic Ukrainian imagery that appears on button hover, blending functionality with national pride.",
  ],
  skills: [
    "Mathematical Calculations & Validation",
    "Input Handling & Data Validation",
    "Clipboard Integration",
    "Responsive Design & Accessibility",
    "Semantic HTML",
    "Flexbox and Gid Layouts",
    "Mobile-first design",
    "DOM manipulation",
    "Event Handling Delegation",
    "Media queries",
    "Accessibility (aria)",
    "Responsive Web Design",
  ],
  features: [
    {
      title: "Ukrainian Reality Theming & Patriotic UI",
      items: [
        "Themed around Ukrainian realities and wartime symbolism",
        "Incorporates cultural identity through visuals and tone",
        "Displays patriotic images (e.g. flag, symbols) on button hover",
        "Enhances user engagement with themed UI interactions",
        "Promotes pride and awareness through subtle patriotic cues",
      ],
    },
    {
      title: "Mathematical Calculation Functions",
      items: [
        "Handles core operations: +, -, *, /, %, ^, √",
        "Includes input validation (e.g. divide by 0, negative roots)",
        "Supports power calculation with optional negative exponent flag",
        "Calculates percent and combined square root operations",
        "Rounds all results using a shared utility function",
      ],
    },
    {
      title: "Digits Accumulation & Input Limitation",
      items: [
        "Restricts integer digits: 15 for positive, 16 for negative numbers",
        "Limits decimal precision to 6 digits",
        "Separately handles whole and fractional values for positive/negative numbers",
        "Ensures formatted output stays within defined digit boundaries",
        "Supports safe numeric input display without overflow",
      ],
    },
    {
      title: "Notification System & Math Validation",
      items: [
        "Modal-based notifications with auto and manual dismissal",
        'Handles invalid use of "%", "^", and operators after root sign',
        "Detects missing first or second operand in expressions",
        "Logs detailed errors to the console for debugging",
      ],
    },
    {
      title: "Clipboard Support",
      items: ["Implements clipboard copying from the display field"],
    },
    {
      title: "Design & Responsiveness",
      items: [
        "Responsive layout optimized for all screen sizes",
        "Semantic HTML5 markup for structure and SEO",
        "Retina-ready raster images for high-resolution displays",
        "Custom favicon for brand identity",
        "Custom cursor for unique UI interaction",
      ],
    },
  ],

  techStack: {
    architecture: "Single-page responsive site with Vanilla JS ",
    frontend: ["HTML5", "SCSS", "Vanilla JavaScript", "Font Awesome"],
    ui: ["Font Awesome icons"],
    tools: ["Prettier"],
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
