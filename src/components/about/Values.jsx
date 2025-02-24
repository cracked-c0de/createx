import Structure from "/src/assets/about/ic-structure.svg"
import Chat from "/src/assets/about/ic-chat.svg"
import Target from "/src/assets/about/ic-target.svg"
import Calendar from "/src/assets/about/ic-calendar.svg"


function Values() {
    return(
        <div className="custom-container">
            <div className="flex flex-col justify-center">
                <div className="text-[#1E212C] text-center">
                    <h6 className="uppercase font-[700] text-[16px]">We Always Stand For</h6>
                    <h1 className="font-[900] text-[46px]">Our Core Values</h1>
                </div>
                <div className="flex flex-row gap-10 items-center my-15">
                    <div className="flex-col items-center flex gap-5 w-[240px]">
                        <img src={Structure} alt="" className="w-[48px] h-[48px]"/>
                        <h3 className="text-[#1E212C] text-[20px] font-[700]">Structured Approach</h3>
                        <p className="text-center font-[400] text-[16px] text-[#787A80]">Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.</p>
                    </div>
                    <div className="h-[162px] bg-gradient-to-tr from-[#DADBDD] to-[#dadbdda3] w-[1px]"></div>
                    <div className="flex-col flex items-center gap-5 w-[240px]">
                        <img src={Chat} alt="" className="w-[48px] h-[48px]"/>
                        <h3 className="text-[#1E212C] text-[20px] font-[700]">Professional Feedbacks</h3>
                        <p className="text-center font-[400] text-[16px] text-[#787A80]">Culpa nostrud commodo ea consequat reprehenderit aliquip.</p>
                    </div>
                    <div className="h-[162px] bg-gradient-to-tr from-[#DADBDD] to-[#dadbdda3] w-[1px]"></div>
                    <div className="flex-col flex items-center gap-5 w-[240px]">
                        <img src={Target} alt="" className="w-[48px] h-[48px]"/>
                        <h3 className="text-[#1E212C] text-[20px] font-[700]">Efficiency</h3>
                        <p className="text-center font-[400] text-[16px] text-[#787A80]">Viverra scelerisque consequat net. Adipisicing esse consequat.</p>
                    </div>
                    <div className="h-[162px] bg-gradient-to-tr from-[#DADBDD] to-[#dadbdda3] w-[1px]"></div>
                    <div className="flex-col flex items-center gap-5 w-[240px]">
                        <img src={Calendar} alt="" className="w-[48px] h-[48px]"/>
                        <h3 className="text-[#1E212C] text-[20px] font-[700]">Flexible Schedule</h3>
                        <p className="text-center font-[400] text-[16px] text-[#787A80]">Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values