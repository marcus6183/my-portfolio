import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <ContactMe />
        </>
    );
}

export default App;
