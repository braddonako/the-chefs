export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export type MenuCategory = {
  title: string;
  subtitle: string;
  icon: string;
  items: MenuItem[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const siteConfig = {
  name: "The Chefs",
  slogan: "Let Us Cook.",
  tagline: "We build software that actually works.",
  description:
    "Two senior engineers who stopped watching from the kitchen and started cooking. Custom software, no templates, no excuses.",
  contact: {
    email: "hello@thechefs.dev",
    calendly: "#",
  },
} as const;

export const menuCategories: MenuCategory[] = [
  {
    title: "Appetizers",
    subtitle: "Quick wins to get things started",
    icon: "🍽️",
    items: [
      {
        name: "Landing Page",
        description:
          "A sharp, conversion-focused page that makes a first impression worth remembering.",
        price: "From $2,500",
        tags: ["Quick Turnaround", "SEO Ready"],
      },
      {
        name: "MVP Prototype",
        description:
          "Validate your idea with a working prototype before you invest in the full build.",
        price: "From $5,000",
        tags: ["2-4 Weeks", "Iterative"],
      },
      {
        name: "AI Workflow Audit",
        description:
          "We'll assess where AI can actually save your team time — not just where it sounds cool.",
        price: "From $1,500",
        tags: ["Strategy", "Actionable Report"],
      },
    ],
  },
  {
    title: "Entrées",
    subtitle: "Full-course builds for serious appetites",
    icon: "🔥",
    items: [
      {
        name: "Custom Web Application",
        description:
          "Full-stack web apps built from scratch. Real architecture, real performance, real tests.",
        price: "From $15,000",
        tags: ["React", "Next.js", "Node", "Cloud"],
      },
      {
        name: "Mobile Application",
        description:
          "Cross-platform or native mobile apps that don't feel like they were made by a tutorial.",
        price: "From $20,000",
        tags: ["iOS", "Android", "Flutter", "React Native"],
      },
      {
        name: "AI Integration & Workflows",
        description:
          "Custom AI pipelines, LLM integrations, and intelligent automation baked into your product.",
        price: "From $12,000",
        tags: ["LLMs", "Automation", "Custom Models"],
      },
    ],
  },
  {
    title: "Chef's Specials",
    subtitle: "Off-menu — for those who know what they want",
    icon: "⭐",
    items: [
      {
        name: "Full Product Build",
        description:
          "From napkin sketch to production. Architecture, design, development, deployment — the whole kitchen.",
        price: "Let's Talk",
        tags: ["End-to-End", "Dedicated Team"],
      },
      {
        name: "Technical Rescue",
        description:
          "Inherited a codebase that's on fire? We've put out bigger fires. Let us stabilize and rebuild.",
        price: "Let's Talk",
        tags: ["Legacy Code", "Refactoring", "SOS"],
      },
      {
        name: "Ongoing Retainer",
        description:
          "Keep us in the kitchen. Monthly hours for dev, architecture review, and technical leadership.",
        price: "Custom",
        tags: ["Flexible", "Priority Support"],
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They actually understood our problem before writing a single line of code. Refreshing.",
    author: "Future Client",
    role: "Coming Soon",
  },
];
