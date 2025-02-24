import { BsArrowRight } from "react-icons/bs"
import Cat1 from "/src/assets/about/cat1.png"
import Cat2 from "/src/assets/about/cat2.png"
import Cat3 from "/src/assets/about/cat3.png"
import Cat4 from "/src/assets/about/cat4.png"
import Cat5 from "/src/assets/about/cat5.png"
import { Link } from "react-router-dom"

function Directions() {
    let directions = [
        {img: Cat1, dir: "Marketing", p: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat."},
        {img: Cat2, dir: "Management", p: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat."},
        {img: Cat3, dir: "HR & Recruiting", p: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat."},
        {img: Cat4, dir: "Design", p: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat."},
        {img: Cat5, dir: "Development", p: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat."},
    ]
    const color = (key) => {
        switch(key) {
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
                return "#FF3F3A"
        }
    }
    return(
        <div className="custom-container my-20">
            <div className="text-center text-[#1E212C]">
                <h6 className="uppercase font-[700] text-[16px]">Our Main Directions</h6>
                <h1 className="font-[900] text-[46px]">What do we teach</h1>
            </div>
            <div className="grid grid-cols-3 gap-7 place-items-center my-15">
                {directions.map((key, index) => (
                    <div key={index} className="shadow hover:shadow-xl transition-all delay-100 duration-300 rounded">
                        <img src={key.img} alt="" className="w-full aspect-4/2" />
                        <div className="p-7 flex flex-col gap-7">
                            <p style={{backgroundColor: color(key.dir)}} className="w-fit text-white px-2 py-1 font-[700] text-[16px] rounded">{key.dir}</p>
                            <p className="text-[#787A80] font-[400] text-[16px]">{key.p}</p>
                            <Link to="/courses" className="w-fit"><button className="cursor-pointer w-fit text-[#1E212C] font-[700] hover:text-[#FF3F3A] transition-all delay-100 duration-300 flex items-center justify-center gap-3">Check courses <BsArrowRight className="text-[17px] text-[#FF3F3A]"/></button></Link>
                        </div>
                    </div>
                ))}
                <div className="shadow rounded flex flex-col items-center justify-center h-full w-full bg-[#F4F5F6]">
                    <h1 className="text-[20px] font-[700] text-[#424551]">New Study Program</h1>
                    <h1 className="text-[20px] font-[700] text-[#424551]">Coming Soon...</h1>
                </div>
            </div>
        </div>
    )
}

export default Directions