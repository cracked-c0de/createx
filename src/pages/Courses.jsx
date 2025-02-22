import Main from "../components/courses/Main"
import Footer from "../components/Footer"
import Certificate from "../components/home/Certificate"
import Subscribe from "../components/home/Subscribe"
import Testimonial from "../components/home/Testimonial"
import Navbar from "../components/Navbar"
import Bg from "/src/assets/home/background4.png"


function Courses() {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Main />
                <section style={{backgroundImage: `url(${Bg})`}} className="bg-center bg-no-repeat py-15">
                    <Testimonial />
                </section>
                <Certificate />
                <Subscribe />
                <Footer />
            </main>
        </>
    )
}

export default Courses