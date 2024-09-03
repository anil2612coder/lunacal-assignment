import Image from "next/image";
import { Inter } from "next/font/google";
import AnswerBox from "@/components/AnswerBox";
import AboutMeBox from "@/components/AboutMeBox";
import GalleryBox from "@/components/GalleryBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#373E44] w-full h-full px-10 py-12">
      <section className="flex justify-between gap-8" >
        <div className="w-1/2 border-[1px]  rounded-lg bg-[#616161] p-3 border-[#96BEE7]">
        <AnswerBox/>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
         <AboutMeBox/>
         <div className="w-11/12   h-[2px] rounded-full  bg-gray-400  mx-auto"></div>
         <GalleryBox/>
         <div className="w-11/12   h-[2px] rounded-full  bg-gray-400  mx-auto"></div>
        </div>
        
      </section>
    </main>
  )
}
