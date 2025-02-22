import Img1 from "/src/assets/home/sponsor-1.png"
import Img2 from "/src/assets/home/sponsor-2.png"
import Img3 from "/src/assets/home/sponsor-3.png"
import Img4 from "/src/assets/home/certificate.png"

function Certificate() {
    return(
        <section>
            <div className="custom-container pt-20">
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="">
                            <h6 className="uppercase text-[16px] font-[700]">Createx Certificate</h6>
                            <h1 className="text-[46px] font-[900]">Your expertise will be confirmed</h1>
                        </div>
                        <div className="flex-col my-15">
                            <p className="w-[390px] text-[16px] font-[400] text-[#424551]">We are accredited by international professional organizations and institutes:</p>
                            <div className="flex my-10 gap-10">
                                <img src={Img1} alt="" />
                                <img src={Img2} alt="" />
                                <img src={Img3} alt="" />
                            </div>
                        </div>
                    </div>
                    <img src={Img4} alt="" className="w-[705px] rounded h-[500px]" />
                </div>
            </div>
        </section>
    )
}

export default Certificate