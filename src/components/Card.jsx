import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
    const { data } = props;

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
            <div className="flex flex-col items-center p-2">
                <div className="w-full h-24 flex items-center justify-center mb-2">
                    <h1
                        className={`text-4xl text-center font-bold text-transparent inline-block bg-clip-text bg-gradient-to-br ${data.bgClass} animate-gradientText`}
                    >
                        {data.skill}
                    </h1>
                </div>
                <div className="w-2/4">
                    <ul>
                        {data.items.map((item, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <span>{item.icon}</span>
                                <p className="ml-4 text-xl text-neutral-500">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
