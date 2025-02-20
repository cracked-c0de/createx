import { useState } from "react"
import { BiChat, BiLayer, BiLike } from "react-icons/bi"
import { SlStar } from "react-icons/sl"
import Exp from "./benefits/Exp"


function Benefits() {
    let [active, updActive] = useState(1)

    let setActive = (id) => {
        updActive(id)
    }
    return(
        <section>
            <div className="custom-container mt-35 h-screen relative">
                <div className="flex flex-col justify-center items-center">
                    <h6 className="uppercase text-[16px] font-[700]">Our Benefits</h6>
                    <h1 className="text-[46px] font-[900]">That's how we do it</h1>
                </div>
                <div className="flex justify-baseline gap-5 mt-10">
                    <button onClick={() => setActive(1)} className={`flex transition delay-75 border items-center justify-center rounded gap-2 py-2 w-full text-[16px] font-[700] ${active == 1 ? "border-[#FF3F3A] text-[#FF3F3A] cursor-default" : "cursor-pointer text-[#9A9CA5] hover:border-[#FF3F3A] hover:text-[#FF3F3A] border-white "}`}>Experienced Tutors</button>
                    <button onClick={() => setActive(2)} className={`flex transition delay-75 border items-center justify-center rounded gap-2 py-2 w-full text-[16px] font-[700] ${active == 2 ? "border-[#FF3F3A] text-[#FF3F3A] cursor-default" : "cursor-pointer text-[#9A9CA5] hover:border-[#FF3F3A] hover:text-[#FF3F3A] border-white "}`}>Feedback & Support</button>
                    <button onClick={() => setActive(3)} className={`flex transition delay-75 border items-center justify-center rounded gap-2 py-2 w-full text-[16px] font-[700] ${active == 3 ? "border-[#FF3F3A] text-[#FF3F3A] cursor-default" : "cursor-pointer text-[#9A9CA5] hover:border-[#FF3F3A] hover:text-[#FF3F3A] border-white "}`}>24/7 Online Library</button>
                    <button onClick={() => setActive(4)} className={`flex transition delay-75 border items-center justify-center rounded gap-2 py-2 w-full text-[16px] font-[700] ${active == 4 ? "border-[#FF3F3A] text-[#FF3F3A] cursor-default" : "cursor-pointer text-[#9A9CA5] hover:border-[#FF3F3A] hover:text-[#FF3F3A] border-white "}`}>Community</button>
                </div>
                {active == 1 && <Exp />}
            </div>
        </section>
    )
}

export default Benefits