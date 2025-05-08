import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const ICON_SIZE: number = 24;

export const FOOTER_ITEMS = [
  {
    icon: <FiMail size={ICON_SIZE} />,
    href: "/contact",
    ariaLabel: "Send me an email",
    target: "",
    rel: "",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    href: "https://www.linkedin.com/in/imade-wijaya",
    ariaLabel: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: <FiGithub size={ICON_SIZE} />,
    href: "https://github.com/widev71",
    ariaLabel: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export const FOOTER_LINKS = [
  {
    label: "Source Code",
    toolTip: "This website is open source.",
    url: "https://github.com/widev71",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Design",
    toolTip: "DuckyTech.site color palette.",
    url: "/design",
    target: "",
    rel: "",
  },
  {
    label: "Contact",
    toolTip:
      "Reach me out.",
    url: "/contact",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Certificate",
    toolTip: "All list of my certificate",
    url: "/certificate",
    target: "",
    rel: "",
  },
];