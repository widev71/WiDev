import { 
  SiReact, 
  SiTailwindcss, 
  SiElementor,
  SiWordpress, 
} from "react-icons/si";


export const ABOUT_TEXTS = [
  {
    text: "Hi there! I'm Made Wijaya, currently studying at SMK Negeri 1 Tampaksiring. My programming journey began in 2022, driven by a curiosity about how the internet works and fueled by countless tutorials. These initial explorations ignited my passion, leading me to dive deep into the expansive world of programming. As I ventured further, I was captivated by web development. Since the end of 2023, I've dedicated myself to mastering various aspects of this exciting field.",
  },
  {
    text: "My passion for web development knows no bounds. I'm captivated by the ever-evolving landscape of this field and the limitless opportunities it presents. Each day is an exciting adventure filled with new challenges and growth, fueling my drive to continuously learn and improve. I thrive on the journey of innovation and the pursuit of mastering web development.",
  },
  {
    text: "Through this platform, I aspire to share my experiences, insights, and projects. Documenting my learning journey not only solidifies my understanding but also allows me to give back to the programming community. Whether you're a fellow enthusiast or someone seeking guidance, feel free to connect with me. I'm always excited to collaborate, learn, and grow together!",
  },
];

const ICON_SIZE: number = 24;

export const FAVORITE_STACKS = [
  { icon: <SiReact size={ICON_SIZE} color="#149FCB" />, name: "React" },
  { icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />, name: "Tailwind" },
  { icon: <SiElementor size={ICON_SIZE} color="#FF7BE5" />, name: "Elementor" },
  { icon: <SiWordpress size={ICON_SIZE} color="#3858E9" />, name: "WordPress" },

];
