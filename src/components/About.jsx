const About = () => {
    return (
        <section name="about" className="h-screen w-full bg-neutral-900">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6">
                <div className="w-full flex flex-col items-center text-justify">
                    <h2 className="text-6xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-300 to-stone-500 inline-block">
                        About
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl">
                        Greetings! I'm Marcus Wong En Hao, a recent graduate
                        fueled by a deep passion for web development. Beyond my
                        academic achievements, my journey is marked by hands-on
                        experiences, including an impactful internship where I
                        implemented Python scripts and crafted a Chatbot
                        prototype at NAIM Holdings Berhad.
                    </p>
                    <br />
                    <p className="text-xl text-neutral-400 max-w-3xl">
                        What sets me apart is not just my technical prowess in
                        HTML, CSS, JavaScript, Python, PHP, and MySQL, but also
                        my commitment to innovation and continuous improvement.
                        I thrive on turning fresh ideas into tangible solutions
                        and am on the lookout for opportunities to apply and
                        expand my skills within the industry.
                    </p>
                    <br />
                    <p className="text-xl text-neutral-400 max-w-3xl">
                        {" "}
                        In addition to my proficiency, my adaptability and
                        problem-solving mindset make me a valuable asset to any
                        team. Let's connect and explore how I can bring a blend
                        of enthusiasm, innovation, and skills to contribute to
                        your team's success.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
