import Bg2 from "/src/assets/home/background2.png"

function About() {
    return(
        <section style={{backgroundImage: `url(${Bg2})`}} className="bg-no-repeat">
            <div className="custom-container">
                <div className="h-screen flex items-center gap-25">
                    <img src="/src/assets/home/image.png" alt="" className="rounded" />
                    <div className="flex flex-col">
                        <div className="my-10">
                            <h6 className="uppercase text-[16px] font-[700]">Who are we</h6>
                            <h1 className="text-[46px] font-[900]">Why Createx?</h1>
                        </div>
                        <ul className="mx-5 list-outside list-image-[url('/src/assets/home/check.png')]">
                            <li className="my-3 pl-2">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li className="my-3 pl-2">Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li className="my-3 pl-2">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li className="my-3 pl-2">Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li className="my-3 pl-2">Tincidunt sagittis neque sem ac eget.</li>
                            <li className="my-3 pl-2">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                        </ul>
                        <button className="my-13 w-fit cursor-pointer hover:bg-gradient-to-tl transition-all delay-75 bg-gradient-to-br from-[#FF3F3A] to-[#F75E05] rounded py-3 px-10 text-[16px] text-white font-[700]">More about us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About