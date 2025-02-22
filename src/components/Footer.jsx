import { BiHeart } from "react-icons/bi"
import { BsArrowRight, BsInstagram, BsLinkedin, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { PiPhone } from "react-icons/pi"
import { Link } from "react-router-dom"
import Logo from "/src/assets/logo2.svg"


function Footer() {
    return(
        <footer className="bg-[#1E212C]">
            <section className="pt-15 pb-7">
                <div className="custom-container">
                    <div className="flex flex-row items-baseline justify-between">
                        <div className="flex-col flex text-white w-[280px]">
                            <img src={Logo} alt="" className="w-[130px]"/>
                            <p className="text-[14px] mt-5 text-white/60">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
                            <div className="grid grid-cols-6 text-[27px] gap-3 mt-5">
                                <FaFacebook className="hover:text-white text-white/60 cursor-pointer"/>
                                <BsTwitter className="hover:text-white text-white/60 cursor-pointer"/>
                                <BsYoutube className="hover:text-white text-white/60 cursor-pointer"/>
                                <BsTelegram className="hover:text-white text-white/60 cursor-pointer"/>
                                <BsInstagram className="hover:text-white text-white/60 cursor-pointer"/>
                                <BsLinkedin className="hover:text-white text-white/60 cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-white">
                            <h6 className="uppercase text-[16px] font-[700]">Site Map</h6>
                            <div className="text-[16px] font-[400] text-white/60 flex flex-col">
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">About Us</a>
                                <Link to="/courses" className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Courses</Link>
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Events</a>
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Blog</a>
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Contacts</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-white">
                            <h6 className="uppercase text-[16px] font-[700]">Courses</h6>
                            <div className="text-[16px] font-[400] text-white/60 flex flex-col">
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Marketing</a>
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Management</a>
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">HR & Recruiting</a>
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Design</a>
                                <a className="cursor-pointer hover:text-white transition-all delay-100 pb-3">Development</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-white">
                            <h6 className="uppercase text-[16px] font-[700]">Contact us</h6>
                            <div className="text-[16px] font-[400] text-white/60 flex flex-col">
                                <a href="tel:(405)555-0128" className="cursor-pointer pb-3 flex items-center gap-2 group"><PiPhone className="text-[18px]"/> <span className="group-hover:text-white transition-all delay-75">(405) 555-0128</span></a>
                                <a href="mailto:hello@createx.com" className="cursor-pointer pb-3 flex items-center gap-2 group"><MdMail className="text-[18px]"/> <span className="group-hover:text-white transition-all delay-75">hello@createx.com</span></a>
                            </div>
                        </div>
                        <div className="flex-col flex w-[290px]">
                            <h6 className="text-16px font-[700] text-white uppercase">Sign up to our newsletter</h6>
                            <div className="relative mt-7">
                                <input type="email" name="newsletter" id="newsletter" placeholder="Email address" className="bg-white/15 border-white/20 border text-white  placeholder:text-white/50 rounded py-1 px-4 w-full" />
                                <BsArrowRight className="text-white cursor-pointer absolute right-2 text-[20px] top-1/2 transform -translate-y-1/2"/>
                            </div>
                            <p className="text-[10px] mt-5 text-white">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-white/5">
                <div className="custom-container">
                    <div className="flex justify-between items-center">
                        <p className="flex items-center gap-1 text-white text-[12px] font-[400]">&copy; All rights reserved. Made with <BiHeart className="text-red-600 text-[20px]"/> by Createx Studio</p>
                        <a href="#" className="text-white/60 uppercase hover:text-white transition-all delay-100 text-[14px] font-[700]">Go To Top</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer