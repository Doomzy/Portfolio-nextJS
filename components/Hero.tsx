import { navData, heroData } from "@/lib/constants";
import Circles from "./fragments/Circles";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full h-[75vh] content-center items-center flex justify-center">
      <Circles numberOfCircles={4}>
        <div className="text-center absolute w-max top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="mb-4 justify-items-center">
            <Image
              src={heroData.image_url}
              width={"300"}
              height={"300"}
              className=" rounded-full w-40 h-40 m-auto mb-10"
              alt={""}
            />
            <h2 className="text-sm sm:text-xl font-sans font-extralight tracking-[0.5rem] text-yellow-500">
              {heroData.job_title.toUpperCase()}
            </h2>
            <h1 className="text-5xl sm:text-[4.5rem]">{heroData.name}</h1>
          </div>

          <div className="grid grid-cols-2 justify-items-center sm:grid-cols-4 gap-x-2 gap-y-8 md:gap-x-8 text-xl mt-10">
            {navData.links.map((link) => (
              <Link
                href={"#" + link}
                key={link.toLocaleUpperCase()}
                className="py-3 rounded-full bg-black bg-opacity-30 border-neutral-800 hover:border-white hover:scale-110 transition-all border w-40"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </Circles>
    </div>
  );
}

export default Hero;
