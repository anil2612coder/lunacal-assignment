import Image from "next/image";
import React from "react";

const GalleryBox = () => {
  return (
    <div className="w-full shadow-black shadow-md rounded-lg bg-[#60656d] py-3 px-2">
      <div className="flex w-full justify-between">
        <div className="flex">
          <div>
            <Image src={"/question.png"} width={24} height={24} />
          </div>
          <div className="text-white ml-3 px-7 py-2 rounded-2xl bg-[#242424] font-medium">
            Gallery
          </div>
        </div>
        <div className="flex gap-3 mr-4">
          <div
            className="text-white px-7 py-1 rounded-2xl bg-[#474e57] font-medium"
            style={{ boxShadow: "-2px -4px 6px rgba(156, 163, 175, 0.9)" }}
          >
            + ADD MORE
          </div>
          <div
            className="text-white text-lg font-bold rounded-full w-10 h-10 flex justify-center items-center bg-gradient-to-r from-gray-600 to-gray-900"
            style={{ boxShadow: "-2px -4px 6px rgba(156, 163, 175, 0.9)" }}
          >
            &larr;
          </div>
          <div
            className="text-white text-lg font-bold rounded-full w-10 h-10 flex justify-center items-center bg-gradient-to-r from-gray-600 to-gray-900"
            style={{ boxShadow: "-2px -4px 6px rgba(156, 163, 175, 0.9)" }}
          >
            &rarr;
          </div>
        </div>
      </div>
      <div className=" flex mt-8">
        <div className=" mr-8 mt-3">
          <Image src={"/dots.png"} width={20} height={20} />
        </div>
        <div className="flex w-full gap-4">
          <div>
            <Image src={"/picture.png"} width={172} height={64} />
          </div>
          <div>
            <Image src={"/picture.png"} width={172} height={64} />
          </div>
          <div>
            <Image src={"/picture.png"} width={172} height={64} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBox;
