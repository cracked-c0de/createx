import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
import Testimonial from "./Testimonial"
import { useState } from "react"
import Img1 from "/src/assets/home/speaker5.png"
import Img2 from "/src/assets/home/speaker1.png"
import Img3 from "/src/assets/home/speaker4.png"
import Img4 from "/src/assets/home/speaker2.png"
import Img5 from "/src/assets/home/speaker3.png"
import Bg from "/src/assets/home/background4.png"


function Team() {
    let team = [
        {name: "Dianne Russell", position: "Founder and CEO", img: Img1},
        {name: "Jerome Bell", position: "Founder and Program Director", img: Img2},
        {name: "Kristin Watson", position: "Marketer, Curator of Marketing Course", img: Img3},
        {name: "Marvin McKinney", position: "PM, Curator of Management Course", img: Img4},
        {name: "Leslie Alexander Li", position: "HR & Recruiter", img: Img5}
    ]
    const [startIndex, setStartIndex] = useState(0);
    const visibleMembers = [
        ...team.slice(startIndex, startIndex + 4),
        ...team.slice(0, Math.max(0, startIndex + 4 - team.length)) // Wrap around if needed
    ];

    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % team.length);
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
    };
    return(
        <section>
            <div style={{backgroundImage: `url(${Bg})`}} className="min-h-screen bg-center bg-no-repeat">
                <div className="custom-container pt-15">
                    <div className="flex items-center justify-between">
                        <div>
                            <h6 className="text-[16px] font-[700] uppercase">Best tutors are all here</h6>
                            <h1 className="text-[46px] font-[900]">Meet our team</h1>
                        </div>
                        <div className="flex items-center gap-10 relative">
                            <span onClick={prevSlide} className="bg-transparent hover:p-2 hover:px-3 hover:m-2 text-[20px] p-0 rounded-full cursor-pointer transition-all delay-100 duration-200 m-5 hover:text-white hover:bg-[#FF3F3A] absolute top-0 right-12">←</span>
                            <span onClick={nextSlide} className="bg-transparent hover:p-2 hover:px-3 hover:m-2 text-[20px] p-0 rounded-full cursor-pointer transition-all delay-100 duration-200 m-5 hover:text-white hover:bg-[#FF3F3A] absolute top-0 right-0">→</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 justify-between gap-5 my-15">
                    {visibleMembers.map((member, index) => (
                            <div key={index} className="flex flex-col text-center animate-fade animate-once">
                                <div className="w-full max-h-[340px] overflow-hidden transition-all delay-100 duration-300 rounded relative group">
                                    <img src={member.img} alt="" className="rounded w-full z-0 aspect-8/9" />
                                    <div className="absolute h-0 group-hover:h-full transition-all delay-75 text-white z-10 bottom-0 rounded bg-gradient-to-t from-black/100 to-black/0 w-full">
                                        <div className="absolute flex gap-5 text-[25px] translate-y-12 group-hover:translate-y-0 transition-all delay-75 z-20 bottom-4 right-4">
                                            <BsFacebook className="cursor-pointer" />
                                            <BsInstagram className="cursor-pointer" />
                                            <BsLinkedin className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-[20px] text-[#424551] font-[700] mt-2">{member.name}</h1>
                                <p className="text-[16px] text-[#787A80] font-[400]">{member.position}</p>
                            </div>
                        ))}
                    </div>
                    <Testimonial />
                </div>
            </div>
        </section>
    )
}

export default Team