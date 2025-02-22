import Bg from "/src/assets/home/background3.png"

function Events() {
    let events = [
        {date: "05", month: "August", time: "11:00 - 14:00", topic: "Formation of the organizational structure of the company in the face of uncertainty.", type: "Online master-class"},
        {date: "24", month: "July", time: "11:00 - 12:30", topic: "Building a customer service department. Best Practices.", type: "Online lecture"},
        {date: "16", month: "July", time: "10:00 - 13:00", topic: "How to apply methods of speculative design in practice. World building prototyping.", type: "Online workshop"},
    ]
    return (
        <section>
            <div style={{backgroundImage: `url(${Bg})`,}} className="bg-center bg-cover h-screen bg-no-repeat">
                <div className="custom-container pt-[133px]">
                    <div className="flex flex-col items-center justify-center mt-10">
                        <h6 className="uppercase text-[16px] font-[400]">Our Events</h6>
                        <h1 className="text-[46px] font-[900]">Lectures & Workshops</h1>
                    </div>
                    <div className="grid grid-rows-3 gap-5 max-h-[426px] grid-cols-1 my-10">
                        {events.map((key, index) => (
                            <div className="flex items-center rounded bg-white p-10 gap-7 relative hover:shadow-2xl hover:shadow-[#FF3F3A]/50 transition-all delay-75" key={index}>
                                <div className="flex items-center gap-5">
                                    <h1 className="text-[48px] font-[900] text-[#FF3F3A]">{key.date}</h1>
                                    <div className="flex flex-col">
                                        <h3 className="text-[20px] font-[700]">{key.month}</h3>
                                        <p className="text-[16px] font-[400] text-[#787A80]">{key.time}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-[20px] font-[700]">{key.topic}</h1>
                                    <p className="text-[16px] font-[400] text-[#787A80]">{key.type}</p>
                                </div>
                                <button className="border bg-opacity-0 absolute right-10 py-2 px-5 rounded border-[#F75E05] text-[#F75E05] hover:bg-gradient-to-br hover:from-[#FF3F3A] hover:to-[#F75E05] hover:text-white transition-all cursor-pointer ease-in-out duration-300 delay-100">View More</button>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-10">
                        <h1 className="text-[28px] font-[700] text-[#1E212C]">Do you want more?</h1>
                        <button className="cursor-pointer text-white text-[16px] font-[700] bg-gradient-to-br from-[#FF3F3A] to-[#F75E05] py-3 px-10 rounded">Explore all events</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events