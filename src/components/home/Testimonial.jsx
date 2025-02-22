import { useEffect, useState } from "react"
import { BsQuote } from "react-icons/bs"
import Img1 from "/src/assets/home/student.png"

function Testimonial() {
    let [active, updActive] = useState(0)
    let setActive = (index) => {
        if (index > 5) {
            updActive(0)
        } else if (index < 0) {
            updActive(5)
        } else {
            updActive(index)
        }
    }
    let content = [
        {text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.", img: Img1, name: "Eleanor Pena", position: "Management", course: "Product Management Fundamentals"},
        {text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.", img: Img1, name: "Eleanor Pena", position: "Management", course: "Product Management Fundamentals"},
        {text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.", img: Img1, name: "Eleanor Pena", position: "Management", course: "Product Management Fundamentals"},
        {text: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.", img: Img1, name: "Eleanor Pena", position: "Management", course: "Product Management Fundamentals"},
        {text: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.", img: Img1, name: "Eleanor Pena", position: "Management", course: "Product Management Fundamentals"},
        {text: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.", img: Img1, name: "Eleanor Pena", position: "Management", course: "Product Management Fundamentals"},
    ]
    let activeContent = (
        <div className="flex flex-col mx-5 animate-fade animate-once" key={active}>
            <p className="text-[20px] font-[400]">{content[active].text}</p>
            <div className="flex my-5 items-center gap-5">
                <img src={content[active].img} alt="" />
                <div className="flex flex-col">
                    <h3 className="text-[16px] font-[700] text-[#1E212C]">{content[active].name}</h3>
                    <p className="text-[#787A80] text-[14px] font-[400]">{content[active].position}, {content[active].course}</p>
                </div>
            </div>
        </div>)

    useEffect(() => {
    }, [active])

    return(
        <section>
            <div className="flex flex-col items-center justify-center gap-15 my-15">
                <div className="flex flex-col items-center">
                    <h6 className="uppercase text-[16px] font-[400]">Testimonials</h6>
                    <h1 className="text-[46px] font-[900]">What our students say</h1>
                </div>
                <div className="flex items-center justify-center gap-15">
                    <p onClick={() => setActive(active - 1)} className="bg-transparent hover:p-2 hover:px-3 hover:m-2 text-[20px] p-0 rounded-full cursor-pointer transition-all delay-100 duration-200 m-5 hover:text-white hover:bg-[#FF3F3A]">←</p>
                    <div className="w-[1020px] h-[344px] bg-white px-25 py-15 relative rounded">
                        <BsQuote className="absolute left-20 top-15 text-[28px] text-[#FF3F3A]"/>
                        {activeContent}
                    </div>
                    <p onClick={() => setActive(active + 1)} className="bg-transparent hover:p-2 hover:px-3 hover:m-2 text-[20px] p-0 rounded-full cursor-pointer transition-all delay-100 duration-200 m-5 hover:text-white hover:bg-[#FF3F3A]">→</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <div onClick={() => updActive(0)} className={`px-4 py-[2px] rounded transition-all delay-75 ${active == 0 ? "bg-[#424551]" : "bg-[#B3B7BC] hover:bg-[#424551] cursor-pointer"}`}></div>
                    <div onClick={() => updActive(1)} className={`px-4 py-[2px] rounded transition-all delay-75 ${active == 1 ? "bg-[#424551]" : "bg-[#B3B7BC] hover:bg-[#424551] cursor-pointer"}`}></div>
                    <div onClick={() => updActive(2)} className={`px-4 py-[2px] rounded transition-all delay-75 ${active == 2 ? "bg-[#424551]" : "bg-[#B3B7BC] hover:bg-[#424551] cursor-pointer"}`}></div>
                    <div onClick={() => updActive(3)} className={`px-4 py-[2px] rounded transition-all delay-75 ${active == 3 ? "bg-[#424551]" : "bg-[#B3B7BC] hover:bg-[#424551] cursor-pointer"}`}></div>
                    <div onClick={() => updActive(4)} className={`px-4 py-[2px] rounded transition-all delay-75 ${active == 4 ? "bg-[#424551]" : "bg-[#B3B7BC] hover:bg-[#424551] cursor-pointer"}`}></div>
                    <div onClick={() => updActive(5)} className={`px-4 py-[2px] rounded transition-all delay-75 ${active == 5 ? "bg-[#424551]" : "bg-[#B3B7BC] hover:bg-[#424551] cursor-pointer"}`}></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial