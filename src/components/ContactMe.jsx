import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";

const ContactMe = () => {
    return (
        <section name="contactMe" className="h-screen w-full bg-neutral-900">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6">
                <div className="w-full flex flex-col items-center text-center gap-4">
                    <Reveal>
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                            Contact
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl text-neutral-400 max-w-lg">
                            If you have exciting opportunities or just want to
                            connect, I'd love to hear from you. Feel free to
                            leave an email.
                        </p>
                    </Reveal>
                    <Reveal>
                        <a
                            href="mailto:marcusw6183@gmail.com"
                            className="flex justify-center items-center gap-2 hover:text-cyan-400 duration-200"
                        >
                            <IoMail size={30} />
                            <p className="text-xl">marcusw6183@gmail.com</p>
                        </a>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl text-neutral-400 max-w-lg">
                            You can also find me on:
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://github.com/marcus6183"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to my GitHub profile"
                            >
                                <FaGithub
                                    size={30}
                                    className="hover:text-cyan-400 duration-200"
                                />
                            </a>
                            <a
                                href="https://linkedin.com/in/marcusw6183"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to my LinkedIn profile"
                            >
                                <FaLinkedin
                                    size={30}
                                    className="hover:text-cyan-400 duration-200"
                                />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
