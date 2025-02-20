import Main from "../components/courses/Main"
import Footer from "../components/Footer"
import Certificate from "../components/home/Certificate"
import Subscribe from "../components/home/Subscribe"
import Testimonial from "../components/home/Testimonial"
import Navbar from "../components/Navbar"


function Courses() {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Main />
                <section style={{backgroundImage: "url('/src/assets/home/background4.png')"}} className="bg-center bg-no-repeat py-15">
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