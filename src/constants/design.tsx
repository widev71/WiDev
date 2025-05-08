import { 
SiAdobephotoshop,
SiFigma,
SiCanva,
SiAdobeillustrator,
} from "react-icons/si";

const ICON_SIZE: number = 24;

export const TECH_DESIGN_ONE = [
  {
    label: "Adobephotoshop",
    icon: <SiAdobephotoshop size={ICON_SIZE} color="#3858E9" />,
  },
  {
    label: "Figma",
    icon: <SiFigma size={ICON_SIZE} color="#FF7BE5" />,
  },
  {
    label: "Canva",
    icon: <SiCanva size={ICON_SIZE} color="#87E64B"/>,
  },
  {
    label: "Adobeillustrator",
    icon: <SiAdobeillustrator size={ICON_SIZE} color="#87E64B"/>,
  },
];

export const PROJECT_DESIGN = [
  {
    url: "https://github.com/dkvclass/DKV-CLASS.git",
    name: "DKV CLASS",
    description:
      "DKV class website using React Js, tailwind css as well as Firebase database",
    techStack: TECH_DESIGN_ONE,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733263885/Screenshot_2024-12-04_061021_bpu3jj.png",
    imageAlt: "",
  },
];
