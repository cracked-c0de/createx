import Img1 from "/src/assets/home/small.png"
import About from "/src/assets/about/about.png"

function Section() {
    return(
        <section>
            <div className="custom-container my-45">
                <div className="flex items-center relative my-15">
                    <img src={Img1} alt="" className="absolute cursor-pointer bg-[#FF3F3A]/30 rounded-full m-4 hover:p-4 hover:m-0 transition-all delay-100" />
                    <p className="mx-23 text-[14px] font-[700]">Watch Video</p>
                </div>
                <div className="flex gap-35">
                    <div className="flex flex-col">
                        <img src={About} alt="" className="w-[750px] h-[450px] rounded"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="flex items-center gap-5 text-[#1E212C] font-[700] text-[18px]"><span className="text-[48px] font-[900] text-[#FF3F3A]">1200</span> students graduated</p>
                        <p className="flex items-center gap-5 text-[#1E212C] font-[700] text-[18px]"><span className="text-[48px] font-[900] text-[#FF3F3A]">84</span> completed courses</p>
                        <p className="flex items-center gap-5 text-[#1E212C] font-[700] text-[18px]"><span className="text-[48px] font-[900] text-[#FF3F3A]">16</span> qualified tutors</p>
                        <p className="flex items-center gap-5 text-[#1E212C] font-[700] text-[18px]"><span className="text-[48px] font-[900] text-[#FF3F3A]">5</span> years of experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section