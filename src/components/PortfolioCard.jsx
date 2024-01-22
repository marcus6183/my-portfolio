import styles from "./PortfolioCard.module.css";
import { FaGithub } from "react-icons/fa";

const PortfolioCard = (props) => {
    const { project } = props;
    return (
        <div className={styles.card}>
            {/* Inner div for CSS Tailwind styling */}
            <div className="w-full h-full pt-4 rounded-xl flex justify-center flex-wrap group">
                {/* Thumbnail Container */}
                <div className="w-full h-56 rounded-t-xl flex items-end justify-center overflow-hidden">
                    <div className="w-[22rem] h-52 overflow-hidden rounded-t-lg group-hover:scale-105 group-hover:-rotate-1 duration-200 ease-in-out">
                        <img
                            className="w-full h-full object-cover"
                            src={project.thumbnailPath}
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full px-12 -mt-4 flex items-center gap-5">
                    <h3 className="text-xl font-bold whitespace-nowrap text-neutral-500 bg-clip-text inline-block bg-gradient-to-br from-white via-stone-300 to-stone-500 group-hover:animate-gradientText group-hover:text-transparent duration-200">
                        {project.projectName}
                    </h3>
                    <div className="w-full h-[0.5px] bg-neutral-400 group-hover:bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 duration-200"></div>
                    <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub
                            className="text-neutral-500 hover:text-white duration-200"
                            size={25}
                        />
                    </a>
                </div>
                <div className="w-full px-12 text-neutral-600 group-hover:text-neutral-500 duration-200">
                    <p>{project.techStack.join(" - ")}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
