import { useEffect } from "react";
import { useAnimate, usePresence, stagger } from "framer-motion";
import { Link } from "react-scroll";

const NavBarOverlay = ({ navItems }) => {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(
                    scope.current,
                    { x: "-100%" },
                    { ease: "easeInOut", duration: 0.3 }
                );
                animate("li", { opacity: 1, y: -20 }, { delay: stagger(0.05) });
            };
            enterAnimation();
        } else {
            const exitAnimation = async () => {
                animate(
                    "li",
                    { opacity: 0, y: 0 },
                    { duration: 0.1, delay: stagger(0.05) }
                );
                await animate(
                    scope.current,
                    { x: 0 },
                    { ease: "easeInOut", duration: 0.3, delay: 0.3 }
                );
                safeToRemove();
            };

            exitAnimation();
        }
    }, [isPresent]);
    return (
        <ul
            ref={scope}
            className="flex flex-col justify-center items-center absolute top-0 left-full w-full h-screen bg-neutral-900 z-10 lg:hidden"
        >
            {navItems.map((item, index) => (
                <li key={index} className="opacity-0">
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
            <li className="opacity-0">
                <a href="/documents/Marcus_Wong_Resume.pdf" download>
                    <p className="cursor-pointer py-8 text-4xl text-white bg-gradient-to-r from-emerald-100 via-cyan-400 to-blue-500 bg-clip-text hover:text-transparent duration-300">
                        My Resume
                    </p>
                </a>
            </li>
        </ul>
    );
};

export default NavBarOverlay;
