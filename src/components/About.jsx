import Reveal from "./Reveal";
import Marquee from "react-fast-marquee";

const About = () => {
    return (
        <section name="about" className="h-screen w-full bg-neutral-900">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6<Reveal>">
                <div className="w-full flex flex-col items-center text-justify px-6">
                    <Reveal>
                        <h2 className="text-5xl md:text-6xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                            About
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl text-neutral-400 max-w-3xl">
                            Greetings, I'm{" "}
                            <span className="text-cyan-400 font-bold">
                                Marcus
                            </span>
                            , a fresh graduate with a Bachelor's degree in ICT
                            (Information and Communication Technology) and am
                            fueled by a deep passion for web development.
                        </p>
                    </Reveal>
                    <br />
                    <Reveal>
                        <p className="text-xl text-neutral-400 max-w-3xl">
                            I love web development because it allows me to fully
                            utilize my creativity and problem-solving skills.
                            What sets me apart is not just my technical skills
                            but also my commitment to innovation and continuous
                            improvement.
                        </p>
                    </Reveal>
                    <br />
                    <Reveal>
                        <Marquee
                            className="max-w-3xl"
                            pauseOnHover="true"
                            delay={1}
                        >
                            <div className="font-medium text-xl mx-10 animate-gradientText text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500">
                                "The man who graduates today and stops learning
                                tomorrow is uneducated the day after." - Newton
                                D. Baker
                            </div>
                        </Marquee>
                    </Reveal>
                    <br />
                    <Reveal>
                        <p className="text-xl text-neutral-400 max-w-3xl">
                            As an individual in the tech field, I wholeheartedly
                            agree with this. Technology always moves forward;
                            what is new today turns old the next day and will
                            eventually be replaced or deprecated. Hence, I am
                            dedicated to keeping up with the latest trends,
                            learning new things, and consistently increasing my
                            skillset to stay relevant in this ever-evolving
                            field.{" "}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
