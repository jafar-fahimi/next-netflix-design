import Image from "next/image";
import React from "react";

const Watch: React.FC<{ title?: string; subtitle?: string }> = ({
  title = "Watch everywhere.",
  subtitle = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
}) => {
  return (
    <div className="mx-auto mt-32 flex flex-col items-center gap-y-10 px-8 sm:gap-x-4 md:gap-y-16 lg:flex-row lg:items-center lg:justify-evenly">
      <div className="max-w-[90%] text-left lg:max-w-[50%]">
        <h1 className="mb-10 text-4xl font-bold md:text-4xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-2xl lg:text-3xl">{subtitle}</p>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute scale-75">
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <Image
            src="/images/device-pile.png"
            alt="Netflix for kids"
            className="h-full w-full"
            height={400}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Watch;
