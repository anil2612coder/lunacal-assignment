import Image from "next/image";
import React from "react";

const AboutMeBox = () => {
  return (
    <div className="w-full shadow-black shadow-md rounded-lg bg-[#60656d] py-3 px-2">
      <div className="flex gap-3 w-full">
        <div>
          <Image src={"/question.png"} width={24} height={24} />
        </div>
        <div className="bg-[#242424] w-full rounded-3xl mr-4 pr-5 h-[40px] items-center flex justify-between">
          <div className="text-white  ml-1 px-7 py-1 rounded-2xl bg-[#474e57] font-medium">
            About Me
          </div>
          <div className="text-gray-300">Experiences</div>
          <div className="text-gray-300">Recommended</div>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="mt-6 mr-3">
          <Image src={"/dots.png"} width={64} height={64} />
        </div>
        <div className="text-[#b9b8b8]">
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <br />

          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
        <div className="w-3 rounded-lg  h-12 mx-2 bg-gradient-to-b from-gray-200 to-gray-700"></div>
      </div>
    </div>
  );
};

export default AboutMeBox;
