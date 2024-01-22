import styles from "./PortfolioCard.module.css";
import { useState } from "react";

const PortfolioCard = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setMousePosition({ x, y });
    };

    return (
        <div
            className={styles.card}
            onMouseMove={handleMouseMove}
            style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
            }}
        >
            Hello World
        </div>
    );
};

export default PortfolioCard;
