import { Link, useLocation } from "react-router-dom"
import Logo from "/src/assets/logo.svg"
import { AiOutlineUser } from "react-icons/ai"

function Navbar() {
    let navbar = [
        {name: "About Us", link: "/about"},
        {name: "Courses", link: "/courses"},
        {name: "Events", link: "/events"},
        {name: "Blog", link: "/blog"},
        {name: "Contacts", link: "/contacts"},
    ]
    let location = useLocation()
    return(
        <>
            <nav>
                <div className="custom-container">
                    <div className="flex justify-between items-center text-[16px] font-[700]">
                        <div className="flex items-center gap-14">
                            <Link to="/"><img src={Logo} alt="CreateX" /></Link>
                            <ul className="text-[#424551] flex items-center gap-5 font-[700] text-[16px]">
                                {navbar.map((key, index) => (
                                    <li key={index}>
                                        <Link to={key.link} className={`hover:text-[#FF3F3A] transition-all delay-75 ${key.link == location.pathname ? "text-[#FF3F3A]" : "cursor-pointer"}`}>{key.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-7">
                            <button className="cursor-pointer hover:bg-gradient-to-tl transition-all delay-75 bg-gradient-to-br from-[#FF3F3A] to-[#F75E05] rounded py-3 px-7 text-[16px] text-white font-[700]">Get consultation</button>
                            <div className="flex items-center gap-3">
                                <AiOutlineUser className="text-[20px]"/>
                                <p className="text-[#424551]"><span className="hover:text-[#FF3F3A] cursor-pointer transition-all delay-75">Log in</span> / <span className="hover:text-[#FF3F3A] cursor-pointer transition-all delay-75">Register</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar