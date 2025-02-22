import Img1 from "/src/assets/home/subsillustration.png"

function Subscribe() {
    return(
        <section>
            <div style={{backgroundImage: "url('/src/assets/home/subscribe.png')"}} className="bg-center min-h-[564px] h-full relative">
                <div>
                    <img src={Img1} alt="" className="absolute left-0 bottom-0"/>
                    <img src={Img1} alt="" className="absolute right-0 bottom-0"/>
                </div>
                <div className="custom-container">
                    <div className="flex flex-col items-center justify-center text-[#1E212C]">
                        <div className="w-[810px] text-center my-25">
                            <h6 className="uppercase text-[16px] font-[700]">Don't miss anything</h6>
                            <h1 className="text-[46px] font-[900]">Subscribe to the Createx School announcements</h1>
                        </div>
                        <div className="flex gap-5">
                            <input type="email" name="email" id="email" placeholder="Your working email" className="bg-white border-[#D7DADD] border rounded py-1 w-[422px] h-[52px] px-4"/>
                            <input type="submit" value="Subscribe" className="text-[16px] py-2 px-10 bg-gradient-to-br from-[#FF3F3A] to-[#F75E05] text-white rounded font-[700] cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe