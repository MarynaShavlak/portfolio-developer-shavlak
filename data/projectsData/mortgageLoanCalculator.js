export const mortgageLoanCalculatorData = {
  id: "mortgageLoanCalculator",
  industry: "Web Application",
  categories: ["html", "css", "javascript"],
  title: "Mortgage Loan Calculator",
  type: "Individual",
  slogan: "Plan Smart. Borrow Smarter.!",
  date: 2023,
  poster: "poster.jpg",
  timeline: "1 week",

  website: {
    name: "Mortgage Loan Calculator App",
    link: "https://marynashavlak.github.io/mortgage-loan-calculator/",
  },
  repository: {
    name: "mortgage-loan-calculator (GitHub)",
    link: "https://github.com/MarynaShavlak/mortgage-loan-calculator",
  },
  descr: [
    "The Mortgage Loan Calculator is a powerful and user-friendly web application that helps users accurately estimate their mortgage payments based on key variables like property cost, down payment percentage, loan term, and repayment method (annuity or classic).",
    "Designed to streamline the mortgage planning process, it also includes an integrated application form, enabling users to submit loan requests directly from the platform.",
  ],
  skills: [
    "Mathematical Calculations & Validation",
    "Input Handling & Data Validation",
    "Semantic HTML",
    "Flexbox Layouts",
    "DOM manipulation",
    "Event Handling Delegation",
    "Accessibility",
    "Form Handling",
    "Dynamic UI Rendering",
  ],
  features: [
    {
      title: "Loan Calculation Core Functions",
      items: [
        "Calculates loan amount, monthly and total payments",
        "Supports annuity and classic repayment types",
        "Includes real interest rate and total cost computation",
        "Updates UI in real time with every change",
      ],
    },
    {
      title: "Additional Fees & Options",
      items: [
        "Dynamically renders and tracks fee checkboxes",
        "Updates loan metrics on fee selection",
        "Toggles fee and options sections in the UI",
      ],
    },
    {
      title: "Modal & Form Validation",
      items: [
        "Interactive modal with form submission handling",
        "Validates inputs and shows inline errors",
        "Logs form data and resets on successful submit",
      ],
    },
  ],

  techStack: {
    architecture: "Single-page responsive site with Vanilla JS ",
    frontend: ["HTML5", "SCSS", "Vanilla JavaScript", "Font Awesome"],
    ui: ["Font Awesome icons"],
    styling: ["CSS with BEM methodology"],
    tools: ["Prettier"],
  },
  images: ["demo-video.mp4", "img1.jpg", "img2.jpg"],
};
