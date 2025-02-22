import { Link } from "react-router-dom"
import Img1 from "/src/assets/home/speaker1.png"
import Img2 from "/src/assets/home/speaker2.png"
import Img3 from "/src/assets/home/speaker3.png"
import Img4 from "/src/assets/home/speaker4.png"
import Img5 from "/src/assets/home/speaker5.png"
import Img6 from "/src/assets/home/speaker6.png"

function Courses() {
    let courses = [
        {category: "Marketing", name: "The Ultimate Google Ads Training Course", price: 100, by: "Jerome Bell", img: Img1, color: "#03CEA4"},
        {category: "Management", name: "Product Management Fundamentals", price: 480, by: "Marvin McKinney", img: Img2, color: "#5A87FC"},
        {category: "HR & Recruiting", name: "HR  Management and Analytics", price: 200, by: "Leslie Alexander Li", img: Img3, color: "#F89828"},
        {category: "Marketing", name: "Brand Management & PR Communications", price: 530, by: "Kristin Watson", img: Img4, color: "#03CEA4"},
        {category: "Management", name: "Business Development Management", price: 400, by: "Dianne Russell", img: Img5, color: "#5A87FC"},
        {category: "Design", name: "Graphic Design Basic", price: 500, by: "Guy Hawkins", img: Img6, color: "#F52F6E"},
    ]
    return(
        <section>
            <div className="custom-container h-screen">
                <div className="flex justify-between items-center">
                    <div>
                        <h6 className="uppercase text-[16px] font-[700]">Ready to learn?</h6>
                        <h1 className="text-[46px] font-[900]">Featured Courses</h1>
                    </div>
                    <Link to="/courses"><button className="border bg-opacity-0 py-2 px-10 rounded border-[#F75E05] text-[#F75E05] hover:bg-gradient-to-br hover:from-[#FF3F3A] hover:to-[#F75E05] hover:text-white transition-all cursor-pointer ease-in-out duration-300 delay-100">View all courses</button></Link>
                </div>
                <div className="grid grid-cols-2 justify-between gap-7 my-10">
                    {courses.map((key, index) => (
                        <div className="flex border border-[#E5E8ED] transition-all delay-100 hover:shadow-2xl cursor-pointer items-center relative rounded" key={index}>
                            <img src={key.img} alt="" />
                            <div className="flex flex-col mx-5">
                                <p className="absolute top-5 text-[14px] font-[400] py-1 px-3 rounded text-white" style={{backgroundColor: `${key.color}`,}}>{key.category}</p>
                                <h1 className="my-5 text-[20px] font-[700]">{key.name}</h1>
                                <p className="text-[18px] absolute bottom-7 font-[400] text-[#787A80]"><span className="text-[#FF4242] font-[700]">${key.price}</span> | by {key.by}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses