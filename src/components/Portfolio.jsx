import PortfolioCard from "./PortfolioCard";
import Reveal from "./Reveal";

const Portfolio = () => {
    const projects = [
        {
            thumbnailPath: "/portfolio-website.png",
            projectName: "My Portfolio",
            githubURL: "https://github.com/marcus6183",
            techStack: [
                "React",
                "Vite",
                "Tailwind",
                "Framer Motion",
                "AnimeJS",
            ],
        },
        {
            thumbnailPath: "/carrot-keebs-thumbnail.png",
            projectName: "Carrotkeebs",
            githubURL:
                "https://github.com/marcus6183/COS30043-Custom-Web-Application",
            techStack: ["Vue", "Bootstrap", "Firebase"],
        },
        {
            thumbnailPath: "/KPI-Management-System.png",
            projectName: "KPI-System",
            githubURL: "https://github.com/marcus6183/KPI-Management-System",
            techStack: ["PHP", "MySQL"],
        },
    ];
    return (
        <section
            name="portfolio"
            className="min-h-screen w-full bg-neutral-900 flex items-center"
        >
            <div className="max-w-screen-lg h-full mx-auto flex flex-col items-center justify-center px-6 mt-8">
                <Reveal>
                    <h2 className="text-6xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                        Portfolio
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="grid lg:grid-cols-2 gap-8 sm:px-0 mb-10">
                        {projects.map((project, index) => (
                            <PortfolioCard key={index} project={project} />
                        ))}
                    </div>
                </Reveal>
                <Reveal>
                    <p className="text-xl text-neutral-400 max-w-lg">
                        Feel free to explore my other projects{" "}
                        <a
                            href="https://marcusw6183.notion.site/marcusw6183/My-Other-Course-Works-c5d631bf951041ac850cfd4e96d0e108"
                            className="text-white hover:text-cyan-400 duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Link to Notion portfolio"
                        >
                            here
                        </a>
                        !
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Portfolio;
