import Illustration from "/src/assets/about/Illustration2.svg"

function Process() {
    let process = [
        {step: 1, h1: "Watching online video lectures", p: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque."},
        {step: 2, h1: "Passing test", p: "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam."},
        {step: 3, h1: "Curator's feedback", p: "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis."},
        {step: 4, h1: "Corrections if needed", p: "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor."},
    ]
    return(
        <div className="custom-container">
            <div className="flex relative">
                <div className="flex flex-col">
                    <div className="text-[#1E212C] my-5">
                        <h6 className="uppercase text-[16px] font-[700]">Studying Process</h6>
                        <h1 className="font-[900] text-[46px]">That's how we do it</h1>
                    </div>
                    <div className="max-w-[550px] mt-7">
                        {process.map((key, index) => (
                            <div key={index}>
                                <div className="flex items-center">
                                    <div className="rounded-full h-fit p-[5px] w-fit bg-[#FF3F3A]"></div>
                                    <h6 className="mx-10 text-[#787A80] uppercase font-[900] text-[15px]">Step {key.step}</h6>
                                </div>
                                <div className={`border-l ml-1 border-l-[#9A9CA5] pl-10 text-[#1E212C] flex flex-col gap-3 pt-2 ${index == process.length - 1 ? "pb-0" : "pb-10"}`}>
                                    <h1 className="font-[700] text-[20px]">{key.h1}</h1>
                                    <p className="text-[#787A80] text-[16px] font-[400]">{key.p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={Illustration} alt="" className="absolute w-[525px] h-[620px] bottom-0 -right-7"/>
            </div>
        </div>
    )
}

export default Process