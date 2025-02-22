import { useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"
import Img1 from "/src/assets/courses/speaker1.png"
import Img2 from "/src/assets/courses/speaker2.png"
import Img3 from "/src/assets/courses/speaker3.png"
import Img4 from "/src/assets/courses/speaker4.png"
import Img5 from "/src/assets/courses/speaker5.png"
import Img6 from "/src/assets/courses/speaker6.png"
import Img7 from "/src/assets/courses/speaker7.png"
import Img8 from "/src/assets/courses/speaker8.png"
import Img9 from "/src/assets/courses/speaker9.png"


function Main() {
    let [query, setQuery] = useState("")
    let [active, updActive] = useState(0)
    let courses = [
        {img: Img1, category: "Marketing", header: "The Ultimate Google Ads Training Course", price: 100, author: "Jerome Bell"},
        {img: Img2, category: "Management", header: "Product Management Fundamentals", price: 480, author: "Marvin McKinney"},
        {img: Img3, category: "HR & Recruiting", header: "HR Management and Analytics", price: 200, author: "Leslie Alexander Li"},
        {img: Img4, category: "Marketing", header: "Brand Management & PR Communications", price: 530, author: "Kristin Watson"},
        {img: Img5, category: "Design", header: "Graphic Design Basic", price: 500, author: "Guy Hawkins"},
        {img: Img6, category: "Management", header: "Business Development Management", price: 400, author: "Dianne Russell"},
        {img: Img7, category: "Development", header: "Highroad Software Architecture", price: 600, author: "Brooklyn Simmons"},
        {img: Img8, category: "HR & Recruiting", header: "Human Resources - Selection and Recruitment", price: 150, author: "Kathryn Murphy"},
        {img: Img9, category: "Design", header: "User Experience. Human-centered Design", price: 240, author: "Cody Fisher"},
    ]
    let [shown, updShown] = useState(courses)

    useEffect(() => {
        let filteredCourses = courses;

        switch (active) {
            case 1:
                filteredCourses = marketing;
                break;
            case 2:
                filteredCourses = management;
                break;
            case 3:
                filteredCourses = hr;
                break;
            case 4:
                filteredCourses = design;
                break;
            case 5:
                filteredCourses = development;
                break;
            default:
                filteredCourses = courses;
        }

        if (query.trim() !== "") {
            filteredCourses = filteredCourses.filter(course =>
                course.header.toLowerCase().includes(query.toLowerCase())
            );
        }
    
        updShown(filteredCourses);
    }, [active, query])
    

    function color(category) {
        switch (category) {
            case "Marketing":
                return "#03CEA4"
            case "Management":
                return "#5A87FC"
            case "HR & Recruiting":
                return "#F89828"
            case "Design":
                return "#F52F6E"
            case "Development":
                return "#7772F1"
            default:
                return "#F75E05"
        }
    }
    let marketing = courses.filter(course => course.category == "Marketing")
    let management = courses.filter(course => course.category == "Management")
    let hr = courses.filter(course => course.category == "HR & Recruiting")
    let design = courses.filter(course => course.category == "Design")
    let development = courses.filter(course => course.category == "Development")
    return(
        <section>
            <div className="custom-container">
                <div className="flex flex-col text-[#1E212C]">
                    <div className="text-center my-15">
                        <h6 className="uppercase text-[16px] font-[700]">Enjoy your studying!</h6>
                        <h1 className="font-[900] text-[46px]">Our online courses</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center justify-between gap-7 font-[700]">
                            <p onClick={() => updActive(0)} className={`text-[14px] py-2 px-4 cursor-pointer ${active == 0 ? "text-[#FF3F3A] border border-[#FF3F3A] rounded" : "text-[#9A9CA5] border border-white/0"}`}>All <sup className="text-[10px] font-[900] group-hover:text-[#FF3F3A]">{courses.length}</sup></p>
                            <p onClick={() => updActive(1)} className={`text-[14px] py-2 px-4 cursor-pointer ${active == 1 ? "text-[#FF3F3A] border border-[#FF3F3A] rounded" : "text-[#9A9CA5] border border-white/0"}`}>Marketing <sup>{marketing.length}</sup></p>
                            <p onClick={() => updActive(2)} className={`text-[14px] py-2 px-4 cursor-pointer ${active == 2 ? "text-[#FF3F3A] border border-[#FF3F3A] rounded" : "text-[#9A9CA5] border border-white/0"}`}>Management <sup>{management.length}</sup></p>
                            <p onClick={() => updActive(3)} className={`text-[14px] py-2 px-4 cursor-pointer ${active == 3 ? "text-[#FF3F3A] border border-[#FF3F3A] rounded" : "text-[#9A9CA5] border border-white/0"}`}>HR & Recruiting <sup>{hr.length}</sup></p>
                            <p onClick={() => updActive(4)} className={`text-[14px] py-2 px-4 cursor-pointer ${active == 4 ? "text-[#FF3F3A] border border-[#FF3F3A] rounded" : "text-[#9A9CA5] border border-white/0"}`}>Design <sup>{design.length}</sup></p>
                            <p onClick={() => updActive(5)} className={`text-[14px] py-2 px-4 cursor-pointer ${active == 5 ? "text-[#FF3F3A] border border-[#FF3F3A] rounded" : "text-[#9A9CA5] border border-white/0"}`}>Development <sup>{development.length}</sup></p>
                        </div>
                        <div className="relative">
                            <input type="text" name="search" id="search" placeholder="Search course..." className="border border-[#D7DADD] rounded py-2 px-4 w-[315px]" value={query} onChange={(e) => setQuery(e.target.value)}/>
                            <BiSearch className="absolute top-1/2 right-2 text-[20px] text-[#9A9CA5] transform -translate-y-1/2"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-3 justify-between gap-7 my-10">
                    {shown.map((key, index) => (
                        <div key={index} className="flex flex-col rounded  hover:shadow-2xl transition-all delay-100 cursor-pointer border border-[#E5E8ED] animate-fade animate-once">
                            <img src={key.img} alt="" className="aspect-16/10"/>
                            <div className="p-5">
                                <p style={{backgroundColor: color(key.category)}} className={`text-white text-[14px] font-[400] rounded w-fit px-3 py-1 items-center flex`}>{key.category}</p>
                                <h1 className="text-[#1E212C] font-[700] text-[20px] my-5">{key.header}</h1>
                                <p className="text-[#FF4242] text-[18px] font-[700]">${key.price} <span className="text-[#787A80] font-[400]">| by {key.author}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Main