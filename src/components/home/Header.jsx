import { Link } from "react-router-dom"
import Img1 from "/src/assets/home/small.png"

function Header() {
    return(
        <header>
            <div className="custom-container my-25 flex relative">
                <div className="flex flex-col">
                    <div className="flex items-center relative">
                        <img src={Img1} alt="" className="absolute cursor-pointer bg-[#FF3F3A]/30 rounded-full m-4 hover:p-4 hover:m-0 transition-all delay-100" />
                        <p className="mx-21 text-[14px] font-[700]">Play showreel</p>
                    </div>
                    <div className="w-[496px] mx-7 my-10">
                        <h1 className="text-[64px] font-[900]">
                        Enjoy studying
                        with Createx Online Courses
                        </h1>
                    </div>
                    <div className="flex mx-7 gap-6">
                        <button className="border bg-opacity-0 py-2 px-10 rounded border-[#F75E05] text-[#F75E05] hover:bg-gradient-to-br hover:from-[#FF3F3A] hover:to-[#F75E05] hover:text-white transition-all cursor-pointer ease-in-out duration-300 delay-100">About us</button>
                        <Link to="/courses"><button className="cursor-pointer hover:bg-gradient-to-tl transition-all delay-75 bg-gradient-to-br from-[#FF3F3A] to-[#F75E05] rounded py-3 px-10 text-[16px] text-white font-[700]">Explore courses</button></Link>
                    </div>
                </div>
                <img src="./src/assets/home/illustration.svg" alt="" className="absolute right-0 -top-5"/>
            </div>
        </header>
    )
}

export default Header