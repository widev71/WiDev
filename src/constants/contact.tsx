import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const ICON_SIZE: number = 20;

export const CONTACT_ITEMS = [
  {
    icon: <FiGithub size={ICON_SIZE} />,
    url: "https://github.com/widev71",
    label: "GitHub",
    backgroundColor: "#262626",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    url: "https://www.linkedin.com/in/imade-wijaya/",
    label: "LinkedIn",
    backgroundColor: "#0A66C2",
  },
  {
    icon: <FiInstagram size={ICON_SIZE} />,
    url: "https://www.instagram.com/madewijaya072",
    label: "Instagram",
    backgroundColor: "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
  },
  {
    icon: <FiTwitter size={ICON_SIZE} />,
    url: "https://twitter.com/duucky",
    label: "Twitter",
    backgroundColor: "#262626",
  },
  
];
