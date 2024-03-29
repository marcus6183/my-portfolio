import styles from "./PortfolioCard.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioCard = (props) => {
    const { project } = props;
    return (
        <div
            className={`${styles.card} rounded-xl overflow-hidden flex justify-center flex-wrap group max-w-[28rem] h-fit`}
        >
            <div className="w-full h-56 flex justify-center items-end px-8 pt-8 overflow-hidden">
                <img
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 group-hover:-rotate-1 duration-200 ease-in-out"
                    src={project.thumbnailPathSM}
                    alt={`${project.projectName}-img`}
                    loading="lazy"
                />
            </div>
            {/* Project Title and GitHub link */}
            <div className="w-full flex items-center gap-4 px-8 mt-4">
                <h3 className="text-xl font-bold whitespace-nowrap text-neutral-500 bg-clip-text inline-block bg-gradient-to-br from-white via-stone-300 to-stone-500 group-hover:animate-gradientText group-hover:text-transparent duration-200">
                    {project.projectName}
                </h3>
                <div className="w-full h-[0.5px] bg-neutral-400 group-hover:bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 duration-200"></div>
                {project.liveSiteURL && (
                    <a
                        href={project.liveSiteURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link to Live Site"
                    >
                        <FaExternalLinkAlt
                            className="text-neutral-500 hover:text-white duration-200"
                            size={20}
                        />
                    </a>
                )}
                <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to GitHub repository"
                >
                    <FaGithub
                        className="text-neutral-500 hover:text-white duration-200"
                        size={25}
                    />
                </a>
            </div>
            {/* Tech Stack */}
            <div className="w-full text-neutral-600 group-hover:text-neutral-500 duration-200 px-8 my-4">
                <p>{project.techStack.join(" - ")}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
