import { 
  SiFirebase,  
  SiReact,
  SiWordpress,
  SiElementor,
  SiTailwindcss,
  SiEnvato,
  SiJavascript,
  SiCss3, 
  SiVite,
} from "react-icons/si";

const ICON_SIZE: number = 24;

//Tech Wordpres

export const TECH_STACK_WORDPRESS = [
  {
    label: "Wordpress",
    icon: <SiWordpress size={ICON_SIZE} color="#3858E9" />,
  },
  {
    label: "Elementor",
    icon: <SiElementor size={ICON_SIZE} color="#FF7BE5" />,
  },
  {
    label: "Envato",
    icon: <SiEnvato size={ICON_SIZE} color="#87E64B"/>,
  },
];

// Forto Animation Weding Website
export const TECH_STACK_UNDANGAN_WORDPRESS = [
  {
    label: "Wordpress",
    icon: <SiWordpress size={ICON_SIZE} color="#3858E9" />,
  },
  {
    label: "Javascript",
    icon: <SiJavascript size={ICON_SIZE} color="#FFFF00" />,
  },
  {
    label: "CSS",
    icon: <SiCss3 size={ICON_SIZE} color="#FF00FF" />,
  },
];

//Tech Main Forto

export const TECH_STACK_SIZE = [
  {
    label: "React.js",
    icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  {
    label: "Firebase",
    icon: <SiFirebase size={ICON_SIZE} color="#016949" />,
  },
];



export const TECH_WI_DEV = [
  {
    label: "React.js",
    icon: <SiReact size={ICON_SIZE} color="#149FCB" />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  {
    label: "Vite",
    icon: <SiVite size={ICON_SIZE} color="#FFFF00" />,
  },
 
];








export const PROJECTCARD_CONTENTS = [

  //forto pribadi
  {
    url: "https://wijaya-dev.vercel.app",
    name: "Fortofolio v.1",
    description:
      "My firs Personal website create using react vite and styling with Tilwind Css",
    techStack: TECH_WI_DEV,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1736742587/Screenshot_2025-01-13_122917_j4gokz.png",
      imageAlt: "https://wijaya-dev.vercel.app",
  },
  {
    url: "https://github.com/dkvclass/DKV-CLASS.git",
    name: "DKV CLASS",
    description:
      "DKV class website using React Js, tailwind css as well as Firebase database",
    techStack: TECH_STACK_SIZE,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733263885/Screenshot_2024-12-04_061021_bpu3jj.png",
      imageAlt: "",
  },

  //forto  Web Company Blue Creative
  {
    url: "https://www.fabrikasiglobal.com/",
    name: "GLOBALINDO MANDIRI TEKNIK",
    description: "Create Company Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733267336/3_jynmg5.png",
    imageAlt: "https://www.fabrikasiglobal.com/",
  },
  {
    url: "https://kori.bluecreative.id/",
    name: "Kori Dessert",
    description: "Create  Dessert Restaurant Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733267346/4_ocz8gw.png",
      imageAlt: "https://kori.bluecreative.id/",
  },
  {
    url: "https://gatebalitour.com/",
    name: "Gate Bali Tour",
    description: "Create  Dessert Restaurant Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733268814/Screenshot_2024-12-04_073102_j9w3zs.png",
    imageAlt: "https://gatebalitour.com/",
  },
  {
    url: "https://www.taxiairportbali.com/",
    name: "Taxi Air Port Bali",
    description: "Create Company Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1734323596/Screenshot_2024-12-16_123201_yhvotg.png",
    imageAlt: "https://www.taxiairportbali.com/",
  },
  {
    url: "https://www.abangcuciin.com/",
    name: "Abang Cuciin",
    description: "Create  Laundry landing page Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733269777/Screenshot_2024-12-04_074805_fajc7b.png",
    imageAlt: "https://www.abangcuciin.com/",
  },
  {
    url: "https://www.izinsah.com/",
    name: "Izinsah",
    description: "Create  Ferfume Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733269285/Screenshot_2024-12-04_074000_g7tcol.png",
    imageAlt: "https://www.izinsah.com/",
  },
  {
    url: "https://fijarbaranusantara.co.id/",
    name: "PT.Fijarbara Nusantara",
    description: "Create Company Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733269385/Screenshot_2024-12-04_074226_vkjnq5.png",
    imageAlt: "https://fijarbaranusantara.co.id/",
  },
  {
    url: "https://mailakubeli.com/",
    name: "Mailakubeli",
    description: "Create Company Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733269843/Screenshot_2024-12-04_075024_hvkkhx.png",
    imageAlt: "https://mailakubeli.com/",
  },
  {
    url: "https://elmozaperfume.com/",
    name: "Elmozaperfume",
    description: "Create Company Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1736740716/Screenshot_2025-01-13_115605_hai2j6.png",
    imageAlt: "https://elmozaperfume.com/",
  },
  {
    url: "https://www.toveheritage.com/",
    name: "Tove Heritage",
    description: "Create Wedding Ecomers Website Using Wordpres and Elementor Plugin",
    techStack: TECH_STACK_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1733270189/Screenshot_2024-12-04_075518_s43cfl.png",
    imageAlt: "https://www.toveheritage.com/",
  },

  //forto Undangan Website blue creative

  {
    url: "https://we.undanganweb.com/radit-kintan/",
    name: "Radit & Kintan ",
    description: "Create best Wedding Website animation Using Wordpres and Divi Plugin",
    techStack: TECH_STACK_UNDANGAN_WORDPRESS,
    image:
      "https://res.cloudinary.com/dgnlhc8r1/image/upload/v1736741202/Screenshot_2025-01-13_120538_qowvnu.png",
    imageAlt: "https://we.undanganweb.com/radit-kintan/",
  },

];
