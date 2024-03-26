import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import NavBarOverlay from "./NavBarOverlay";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navItems = [
        { displayText: "Home", nameRef: "home" },
        { displayText: "About", nameRef: "about" },
        { displayText: "Skills", nameRef: "skills" },
        { displayText: "Portfolio", nameRef: "portfolio" },
        { displayText: "Contact Me", nameRef: "contactMe" },
    ];
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    useEffect(() => {
        windowWidth > 1024 && setShowNav(false);
    }, [windowWidth]);
    return (
        <motion.section
            initial={{ y: -48 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-between fixed items-center w-full h-12 bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-b border-b-neutral-800 z-10"
        >
            <Link
                href="#home"
                to="home"
                smooth
                duration={500}
                className="cursor-pointer w-32 pl-2"
            >
                <img src="/my-logo.svg" alt="my-logo" className="w-14 h-auto" />
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
                    href="/documents/Marcus_Wong_Resume.pdf"
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
            <AnimatePresence>
                {showNav && <NavBarOverlay navItems={navItems} />}
            </AnimatePresence>
        </motion.section>
    );
};

export default NavBar;
