import anime from "animejs";
import { motion } from "framer-motion";

const WaterDropGrid = () => {
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });

    // useEffect(() => {
    //     console.log("Use Effect Called");
    //     console.log(`Current value: ${isInView}`);
    //     animate();
    // }, [isInView]);

    const GRID_WIDTH = 25;
    const GRID_HEIGHT = 20;

    const handleDotClick = (e) => {
        if (e.target.id !== "container") {
            animate(e);
        }
    };

    const animate = (e = null) => {
        anime({
            targets: ".dot-point",
            scale: [
                { value: 1.35, easing: "easeOutSine", duration: 250 },
                { value: 1, easing: "easeInOutQuad", duration: 500 },
            ],
            translateY: [
                { value: -15, easing: "easeOutSine", duration: 250 },
                { value: 0, easing: "easeInOutQuad", duration: 500 },
            ],
            opacity: [
                { value: 1, easing: "easeOutSine", duration: 250 },
                { value: 0.5, easing: "easeInOutQuad", duration: 500 },
            ],

            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e ? e.target.dataset.index : 0,
            }),
        });
    };

    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-neutral-800"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-500 opacity-50 group-hover:from-emerald-100 group-hover:via-cyan-400 group-hover:to-blue-500"
                        data-index={index}
                    />
                </div>
            );
            index++;
        }
    }

    return (
        <motion.div
            whileInView={animate}
            viewport={{ once: true }}
            onClick={handleDotClick}
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit"
            id="container"
        >
            {dots}
        </motion.div>
    );
};

export default WaterDropGrid;
