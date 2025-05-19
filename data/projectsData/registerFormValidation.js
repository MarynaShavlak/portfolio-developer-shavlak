export const registerFormValidationData = {
  id: "registerFormValidation",
  slogan: "",
  industry: "Education",
  type: "Individual",
  categories: ["html", "css", "javascript"],
  title: "Register Form Validation",
  date: 2024,
  poster: "poster.jpg",
  timeline: "2 hours",
  website: {
    name: "Register Form Validation",
    link: "https://marynashavlak.github.io/registration-form-validation/",
  },
  repository: {
    name: "register-form-validation (GitHub)",
    link: "https://github.com/MarynaShavlak/registration-form-validation",
  },
  descr: [
    "The Registration Form Validation project is designed to create a user-friendly and secure registration form with comprehensive validation.",
    "It allows users to input personal information such as their name, username, email, phone number, password, and gender.",
    "The form is validated to ensure all data is entered correctly before submission. It uses client-side validation to check for empty fields, correct data formats, and password strength, as well as custom validations for phone numbers and matching passwords.",
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "DOM Manipulation",
    "Event Handling",
    "State Management",
    "Conditional Logic & Validation",
    "Array & Object Handling",
    "Data-Driven Rendering",
    "Code Splitting",
  ],
  features: [
    {
      title: "Comprehensive Registration Form",
      items: [
        "Inputs: Full Name, Username, Email, Phone Number (masked), Password, Confirm Password, Gender",
        "Logical section grouping, clear structure, mobile-friendly layout",
        "Auto-formatting and validation for consistent phone number entry",
      ],
    },
    {
      title: "Real-time Validation & Feedback",
      items: [
        "Instant validation on user input with custom error messages",
        "Password strength enforcement and confirmation matching",
        "Mandatory gender selection with immediate error feedback",
      ],
    },
    {
      title: "Dynamic Error Handling & Form Reset",
      items: [
        "Styled error labels shown/hidden based on input",
        "Validation refreshes after submission",
        "Form clears and logs valid data on success",
      ],
    },
    {
      title: "Responsive & Accessible Design",
      items: [
        "Optimized for different breakpoints (mobile, tablet, desktop)",
        "Keyboard-friendly navigation and semantic HTML for better accessibility and SEO",
      ],
    },
  ],

  techStack: {
    architecture: "Vanilla JavaScript single-page application",
    frontend: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)"],
    tools: ["Prettier"],
    ui: ["Google Fonts", "Font Awesome"],
    styling: ["CSS with BEM methodology"],
    forms: ["JustValidate", "Inputmask"],
  },
  images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
};
