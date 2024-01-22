import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    const projects = [
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
            className="min-h-screen w-full bg-neutral-900 pt-12"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6">
                <h2 className="text-6xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                    Portfolio
                </h2>
                <div className="grid lg:grid-cols-2 gap-8 px-12 sm:px-0 mb-10">
                    {projects.map((project, index) => (
                        <PortfolioCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
