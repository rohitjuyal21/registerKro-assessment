export const PRIORITY = [
  { label: "High", value: "HIGH" },
  { label: "Medium", value: "MEDIUM" },
  { label: "Low", value: "LOW" },
];

export const STATUS = [
  { label: "Not Started", value: "NOT_STARTED" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Completed", value: "COMPLETED" },
];

export const SOCIAL_LINKS = [
  { name: "Fb", link: "https://facebook.com", logo: "/assets/Fb.svg" },
  { name: "Insta", link: "https://instagram.com", logo: "/assets/Insta.svg" },
  {
    name: "Pinterest",
    link: "https://pinterest.com",
    logo: "/assets/Pintrest.svg",
  },
  { name: "Twitter", link: "https://twitter.com", logo: "/assets/Twiter.svg" },
];

export const MENU_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    isChildren: true,
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "SEO Optimization", href: "/services/seo" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
];
