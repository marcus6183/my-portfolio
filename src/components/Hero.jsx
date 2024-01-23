import { TiArrowSortedDown } from "react-icons/ti";
import WaterDropGrid from "./WaterDropGrid";
import { Link } from "react-scroll";
import Reveal from "./Reveal";

const Hero = () => {
    return (
        <section name="home" className="h-screen w-full bg-neutral-900">
            <div className="relative w-fit max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6">
                <div className="absolute right-0">
                    <WaterDropGrid />
                </div>
                <div className="z-[5]">
                    <Reveal>
                        <h1 className="text-8xl font-bold">
                            Hey, I'm{" "}
                            <span className="animate-gradientText text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 inline-block ">
                                Marcus
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-4xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                            Aspiring Web Developer
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-xl text-neutral-400 text-xl">
                            I'm a fresh graduate with a deep passion for web
                            development. Actively seeking opportunities to
                            kickstart my career, I bring fresh ideas and a solid
                            academic background. Let's connect and explore how
                            my skills can contribute to your team's success.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div>
                            <Link
                                to="contactMe"
                                smooth
                                duration={500}
                                className="group w-fit px-6 py-3 mt-6 rounded-md flex items-center cursor-pointer border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black duration-300 ease-in-out"
                            >
                                Contact Me
                                <span className="ml-1 -rotate-90 group-hover:rotate-0 duration-300">
                                    <TiArrowSortedDown />
                                </span>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
