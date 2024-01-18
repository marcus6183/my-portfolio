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
        <section className="flex justify-end md:justify-center fixed items-center w-full h-12 bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-b border-b-neutral-800 z-10">
            <ul className="hidden md:flex">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.nameRef} smooth duration={500}>
                            <p className="px-8 cursor-pointer font-medium text-white bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 bg-clip-text hover:text-transparent duration-300">
                                {item.displayText}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setShowNav(!showNav)}
                className="cursor-pointer pr-4 z-20 text-neutral-700 md:hidden"
            >
                {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {showNav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-neutral-900 z-10 md:hidden">
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
                </ul>
            )}
        </section>
    );
};

export default NavBar;
