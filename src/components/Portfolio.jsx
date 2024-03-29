import PortfolioCard from "./PortfolioCard";
import Reveal from "./Reveal";

const Portfolio = () => {
    const projects = [
        {
            thumbnailPath: "/portfolio-website.webp",
            thumbnailPathSM: "/portfolio-website-sm.webp",
            projectName: "My Portfolio",
            liveSiteURL: "https://marcusw6183.netlify.app/",
            githubURL: "https://github.com/marcus6183/my-portfolio",
            techStack: ["React", "Vite", "Tailwind"],
        },
        {
            thumbnailPath: "/jimbroz-thumbnail.webp",
            thumbnailPathSM: "/jimbroz-thumbnail-sm.webp",
            projectName: "JimBroz",
            liveSiteURL: "https://jimbroz.netlify.app/",
            githubURL: "https://github.com/marcus6183/jimbroz",
            techStack: ["React", "Vite", "Tailwind", "Redux", "RapidAPI"],
        },
        {
            thumbnailPath: "/carrot-keebs-thumbnail.webp",
            thumbnailPathSM: "/carrot-keebs-thumbnail-sm.webp",
            projectName: "Carrotkeebs",
            liveSiteURL: null,
            githubURL:
                "https://github.com/marcus6183/COS30043-Custom-Web-Application",
            techStack: ["Vue", "Bootstrap", "Firebase"],
        },
        {
            thumbnailPath: "/KPI-Management-System.webp",
            thumbnailPathSM: "/KPI-Management-System-sm.webp",
            projectName: "KPI-System",
            liveSiteURL: null,
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
                    <h2 className="text-5xl md:text-6xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
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
                        Feel free to explore{" "}
                        <a
                            href="https://marcusw6183.notion.site/marcusw6183/My-Other-Course-Works-c5d631bf951041ac850cfd4e96d0e108"
                            className="text-white hover:text-cyan-400 duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Link to Notion portfolio"
                        >
                            my other projects
                        </a>
                        !
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Portfolio;
