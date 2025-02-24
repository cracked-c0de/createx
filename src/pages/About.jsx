import Team from "../components/home/Team"
import Directions from "../components/about/Directions"
import Header from "../components/about/Header"
import Process from "../components/about/Process"
import Section from "../components/about/Section"
import Values from "../components/about/Values"
import Navbar from "../components/Navbar"
import Bg from "/src/assets/about/background.png"
import Blog from "../components/home/Blog"
import Subscribe from "../components/home/Subscribe"
import Footer from "../components/Footer"


function About() {
    return(
        <>
            <header>
                <Navbar />
                <Header />
            </header>
            <main>
                <Section />
                <section style={{backgroundImage: `url("${Bg}")`}} className="bg-no-repeat">
                    <Values />
                    <Directions />
                    <Process />
                </section>
                <Team />
                <Blog />
                <Subscribe />
                <Footer />
            </main>
        </>
    )
}

export default About