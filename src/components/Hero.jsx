import { TiArrowSortedDown } from "react-icons/ti";
import WaterDropGrid from "./WaterDropGrid";

const Hero = () => {
    return (
        <section name="home" className="h-screen w-full bg-neutral-900">
            <div className="relative w-fit max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6">
                <div className="absolute right-0">
                    <WaterDropGrid />
                </div>
                <div className="z-[5]">
                    <h1 className="text-8xl font-bold">
                        Hey, I'm{" "}
                        <span className="animate-gradientText text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 inline-block ">
                            Marcus
                        </span>
                    </h1>
                    <h2 className="text-4xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                        Aspiring Web Developer
                    </h2>
                    <p className="max-w-md text-neutral-400">
                        I'm a fresh graduate with a deep passion for web
                        development. Actively seeking opportunities to kickstart
                        my career, I bring fresh ideas and a solid academic
                        background. Let's connect and explore how my skills can
                        contribute to your team's success.
                    </p>

                    <div>
                        <button className="group w-fit px-6 py-3 mt-6 rounded-md bg-cyan-400 text-black flex items-center">
                            Contact Me
                            <span className="ml-1 -rotate-90 group-hover:rotate-0 duration-300">
                                <TiArrowSortedDown />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
