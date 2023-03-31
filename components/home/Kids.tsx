import Image from "next/image";
import React from "react";

const Kids = () => {
  return (
    <div className="mx-auto mt-32 flex flex-col items-center gap-y-10 px-8 sm:gap-x-4 md:gap-y-16 lg:flex-row lg:justify-evenly">
      <div className="order-1 max-w-[90%] text-left lg:order-2 lg:max-w-[50%]">
        <h1 className="mb-10 text-4xl font-bold lg:text-6xl">
          Create profiles for kids.
        </h1>
        <p className="text-2xl lg:text-3xl">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/kids-netflix.png"
          alt="Netflix for kids"
          className="h-full w-full"
          height={400}
          width={600}
        />
      </div>
    </div>
  );
};

export default Kids;
