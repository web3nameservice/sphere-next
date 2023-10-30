import { FC } from "react";
import Logo from "@/src/0.resources/3.files/logo/logo_color6.png";
import BgImg from "@/src/0.resources/3.files/images/bg.gif";
import Image from "next/image";

const Home: FC = () => {

    return (
        <div className="">

            <div className=''>
                <div className='w-screen h-screen opacity-60' style={{ backgroundImage: `url(${BgImg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    {/* <div className='grid  grid-cols-3 lg:grid-cols-6 grid-rows-4 lg:grid-rows-6 absolute inset-0 opacity-50'>
                        {Array.from({ length: 100 }).map((item, index) => (
                            <div className='card__grid-effect-tile' key={index}>
                            </div>
                        )
                        )}
                    </div> */}

                </div>
                <div className="w-screen h-screen flex flex-col items-center justify-center z-10 pb-14 absolute top-0">
                    <div className="cursor-pointer rounded-xl flex items-center gap-x-1">
                        <Image src={Logo} className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px]" alt="logo" priority={true} />
                        <p className="font-semibold text-6xl md:text-7xl text-black dark:text-white">Sphere</p>
                    </div>
                    <p className="text-xl md:text-2xl text-white font-semibold mt-4">The next generation of DeFi</p>
                </div>

                <div className="w-screen flex items-center justify-center gap-x-10 absolute bottom-0 overflow-hidden py-2 bg-white">
                    <p className="text-black text-lg font-semibold whitespace-nowrap">Coming soon</p>
                </div>
            </div>



        </div>
    );

}

export default Home;