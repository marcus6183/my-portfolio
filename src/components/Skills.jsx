import Card from "./Card";
import {
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaVuejs,
    FaBootstrap,
    FaNodeJs,
    FaReact,
} from "react-icons/fa";
import { SiPhp, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
    const skillsArr = [
        {
            skill: "Programming Languages",
            items: [
                {
                    icon: <FaHtml5 size={40} color="rgb(115,115,115)" />,
                    description: "HTML",
                },
                {
                    icon: <FaCss3Alt size={40} color="rgb(115,115,115)" />,
                    description: "CSS",
                },
                {
                    icon: (
                        <IoLogoJavascript size={40} color="rgb(115,115,115)" />
                    ),
                    description: "JavaScript",
                },
                {
                    icon: <SiPhp size={40} color="rgb(115,115,115)" />,
                    description: "PHP",
                },
                {
                    icon: <FaPython size={40} color="rgb(115,115,115)" />,
                    description: "Python",
                },
            ],
            bgClass: "from-orange-500 via-pink-500 to-fuchsia-500",
        },
        {
            skill: "Technologies",
            items: [
                {
                    icon: <FaVuejs size={40} color="rgb(115,115,115)" />,
                    description: "Vue",
                },
                {
                    icon: <FaBootstrap size={40} color="rgb(115,115,115)" />,
                    description: "Bootstrap",
                },
                {
                    icon: <IoLogoFirebase size={40} color="rgb(115,115,115)" />,
                    description: "Firebase",
                },
                {
                    icon: <SiMysql size={40} color="rgb(115,115,115)" />,
                    description: "MySQL",
                },
            ],
            bgClass: "from-lime-200 to-cyan-500",
        },
        {
            skill: "Learning",
            items: [
                {
                    icon: <FaReact size={40} color="rgb(115,115,115)" />,
                    description: "React",
                },
                {
                    icon: <SiTailwindcss size={40} color="rgb(115,115,115)" />,
                    description: "Tailwind",
                },
                {
                    icon: <SiMongodb size={40} color="rgb(115,115,115)" />,
                    description: "MongoDB",
                },
                {
                    icon: <FaNodeJs size={40} color="rgb(115,115,115)" />,
                    description: "NodeJS",
                },
            ],
            bgClass: "from-blue-400 via-cyan-300 to-teal-300",
        },
    ];
    return (
        <section
            name="skills"
            className="min-h-screen w-full bg-neutral-900 flex flex-col justify-center items-center"
        >
            <h2 className="text-6xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block mt-12 lg:mt-0">
                Skills
            </h2>
            <div className="max-w-screen-2xl lg:gap-4 xl:gap-6 lg:flex">
                {skillsArr.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
