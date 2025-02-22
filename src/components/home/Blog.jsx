import { BsArrowRight, BsClock } from "react-icons/bs"
import { BiCalendar } from "react-icons/bi"
import Img1 from "/src/assets/home/blog1.png"
import Img2 from "/src/assets/home/blog2.png"
import Img3 from "/src/assets/home/blog3.png"

function Blog() {
    let latest = [
        {img: Img1, type: "Podcast", category: "Marketing", date: "September 4, 2020", duration: "36 min", header: "What is traffic arbitrage and does it really make money?", part: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...", btn: "Listen", link: ""},
        {img: Img2, type: "Video", category: "Management", date: "August 25, 2020", duration: "45 min", header: "What to do and who to talk to if you want to get feedback on the product", part: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...", btn: "Watch", link: ""},
        {img: Img3, type: "Article",category: "Design", date: "August 8, 2020", header: "Should you choose a creative profession if you are attracted to creativity?", part: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...", btn: "Read", link: ""},
    ]
    return(
        <section>
            <div className="custom-container my-25">
                <div className="flex justify-between items-center">
                    <div>
                        <h6 className="uppercase text-[16px] font-[700]">Our Blog</h6>
                        <h1 className="text-[46px] font-[900]">Latest posts</h1>
                    </div>
                    <button className="cursor-pointer py-3 px-8 mt-5 text-[16px] bg-gradient-to-br from-[#FF3F3A] to-[#F75E05] rounded text-white">Go to blog</button>
                </div>
                <div className="grid grid-cols-3 place-items-center gap-5 my-10">
                    {latest.map((key, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="relative">
                                <img src={key.img} alt="" />
                                <p className="absolute top-2 left-3 bg-white text-[#424551] px-3 rounded text-[14px]">{key.type}</p>
                            </div>
                            <p className="my-3 text-[#787A80] text-[14px] font-[400] flex items-center gap-2 tracking-wider"><span className="font-[700]">{key.category}</span> | <BiCalendar className="text-[17px]"/> {key.date} {key.duration ? <>| <BsClock /> {key.duration} </> : ""}</p>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-[#1E212C] text-[20px] font-[700]">{key.header}</h1>
                                <p className="text-[16px] font-[400] text-[#1E212C]">{key.part}</p>
                            </div>
                            <button className="w-fit my-4 text-[16px] font-[700] text-[#1E212C] flex items-center gap-3 cursor-pointer">{key.btn} <BsArrowRight className="text-[17px] text-[#FF3F3A]"/></button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog