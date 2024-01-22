import testingTN from "/carrot-keebs-thumbnail.png";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    return (
        <section name="portfolio" className="h-screen w-full bg-neutral-900">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6">
                <h2 className="text-6xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                    Portfolio
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
                    <PortfolioCard />
                    <PortfolioCard />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
