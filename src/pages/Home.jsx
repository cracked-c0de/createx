import About from "../components/home/About"
import Benefits from "../components/home/Benefits"
import Blog from "../components/home/Blog"
import Certificate from "../components/home/Certificate"
import Courses from "../components/home/Courses"
import Events from "../components/home/Events"
import Footer from "../components/Footer"
import Header from "../components/home/Header"
import Subscribe from "../components/home/Subscribe"
import Team from "../components/home/Team"
import Navbar from "../components/Navbar"
import Bg from "/src/assets/home/background.png"


function Home() {
    return(
        <>
            <div style={{ backgroundImage: `url(${Bg})` }} className="relative bg-center h-screen bg-cover">
                <Navbar />
                <Header />
                <div className="custom-container">
                    <div className="flex items-center justify-center gap-15 text-nowrap absolute bottom-10">
                        <p className="flex items-center gap-4 text-[16px] font-[400]"><span className="text-[46px] font-[900]">1200</span> Students graduated</p>
                        <div className="w-[8px] h-[8px] bg-[#FF3F3A] rounded-full"></div>
                        <p className="flex items-center gap-4 text-[16px] font-[400]"><span className="text-[46px] font-[900]">84</span> Completed courses</p>
                        <div className="w-[8px] h-[8px] bg-[#FF3F3A] rounded-full"></div>
                        <p className="flex items-center gap-4 text-[16px] font-[400]"><span className="text-[46px] font-[900]">16</span> Qualified tutors</p>
                        <div className="w-[8px] h-[8px] bg-[#FF3F3A] rounded-full"></div>
                        <p className="flex items-center gap-4 text-[16px] font-[400]"><span className="text-[46px] font-[900]">5</span> Years of experience</p>
                    </div>
                </div>
            </div>
            <main>
                <About />
                <Courses />
                <Benefits />
                <Events />
                <Certificate />
                <Team />
                <Blog />
                <Subscribe />
            </main>
            <Footer />
        </>
    )
}

export default Home