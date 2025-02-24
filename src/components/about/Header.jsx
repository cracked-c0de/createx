import Illustration from "/src/assets/about/illustration.svg"
import { Link } from "react-router-dom"

function Header() {
    return(
        <section>
            <div className="custom-container my-15">
                <div className="flex relative">
                    <div className="flex flex-col max-w-[580px] w-full">
                        <div className="text-[#1E212C] my-10">
                            <h6 className="text-[16px] font-[700] uppercase">About Us</h6>
                            <h1 className="text-[46px] font-[900]">Createx Online School</h1>
                        </div>

                        <h3 className="text-[#1E212C] font-[700] text-[20px] mb-10">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</h3>

                        <p className="font-[400] text-[#424551] text-[16px]">We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organize.</p>

                        <div className="flex mt-20 gap-5">
                            <Link to="/events"><button className="text-[#FF3F3A] hover:bg-gradient-to-br hover:text-white hover:from-[#FF3F3A] hover:to-[#F75E05] transition-all delay-100 duration-300 font-[700] text-[16px] py-3 rounded px-10 border cursor-pointer border-[#FF3F3A]">Explore Events</button></Link>
                            <Link to="/courses"><button className="text-white font-[700] text-[16px] py-3 px-10 bg-gradient-to-br cursor-pointer from-[#FF3F3A] to-[#F75E05] rounded">Browse Courses</button></Link>
                        </div>
                    </div>
                    <img src={Illustration} alt="" className="w-[465px] h-[400px] absolute -right-5 bottom-0"/>
                </div>
            </div>
        </section>
    )
}

export default Header