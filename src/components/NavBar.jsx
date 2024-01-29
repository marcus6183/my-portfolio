import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const navItems = [
        { displayText: "Home", nameRef: "home" },
        { displayText: "About", nameRef: "about" },
        { displayText: "Skills", nameRef: "skills" },
        { displayText: "Portfolio", nameRef: "portfolio" },
        { displayText: "Contact Me", nameRef: "contactMe" },
    ];
    return (
        <section className="flex justify-between fixed items-center w-full h-12 bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-b border-b-neutral-800 z-10">
            <Link
                href="#home"
                to="home"
                smooth
                duration={500}
                className="cursor-pointer w-32 pl-2"
            >
                <img
                    src="/my-logo.svg"
                    alt="my-logo"
                    width="60"
                    height="auto"
                />
            </Link>
            <ul className="hidden lg:flex">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={`#${item.nameRef}`}
                            to={item.nameRef}
                            smooth
                            duration={500}
                        >
                            <p className="px-8 cursor-pointer font-medium text-white bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 bg-clip-text hover:text-transparent duration-300">
                                {item.displayText}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="w-32 flex justify-center">
                <a
                    href="/documents/Marcus_Wong-Resume.pdf"
                    download
                    className="w-fit px-3 py-1 rounded-md border-2 border-cyan-400 text-cyan-400 box-border hover:bg-cyan-400 hover:text-black duration-300 ease-in-out lg:flex items-center hidden cursor-pointer"
                >
                    My Resume
                </a>
            </div>

            <div
                onClick={() => setShowNav(!showNav)}
                className="cursor-pointer pr-4 z-20 text-neutral-700 lg:hidden"
            >
                {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {showNav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-neutral-900 z-10 lg:hidden">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.nameRef}
                                smooth
                                duration={500}
                                onClick={() => setShowNav(!showNav)}
                            >
                                <p className="cursor-pointer py-8 text-4xl text-white bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 bg-clip-text hover:text-transparent duration-300">
                                    {item.displayText}
                                </p>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="/documents/Marcus_Wong-Resume.pdf" download>
                            <p className="cursor-pointer py-8 text-4xl text-white bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 bg-clip-text hover:text-transparent duration-300">
                                My Resume
                            </p>
                        </a>
                    </li>
                </ul>
            )}
        </section>
    );
};

export default NavBar;
