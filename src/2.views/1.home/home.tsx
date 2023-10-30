import { FC } from "react";
import Logo from "@/src/0.resources/3.files/logo/logo_color6.png";
import Image from "next/image";

const Home: FC = () => {

    return (
        <div className="">

            <div className='card'>
                <div className='card__img'>
                    <div className='grid  grid-cols-3 lg:grid-cols-6 grid-rows-4 lg:grid-rows-6 absolute inset-0'>
                        {Array.from({ length: 100 }).map((item, index) => (
                            <div className='card__grid-effect-tile' key={index}>
                            </div>
                        )
                        )}
                    </div>
                    {/* <div className="flex flex-col items-center justify-center bg-black/90 z-10 mb-14">
                        <div className="cursor-pointer rounded-xl flex items-center gap-x-1">
                            <Image src={Logo} className="rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" alt="logo" priority={true} />
                            <p className="font-semibold text-6xl lg:text-7xl text-black dark:text-white">Sphere</p>
                        </div>
                    </div> */}
                    <div className="flex gap-x-10 absolute bottom-0 overflow-hidden py-2 bg-black">
                        {Array.from({ length: 10 }).map((item, index) => (
                            <p className="text-white text-3xl font-semibold whitespace-nowrap">Coming soon</p>
                        )
                        )}
                    </div>
                </div>
            </div>



        </div>
    );

}

export default Home;