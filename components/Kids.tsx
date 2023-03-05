import Image from "next/image";
import React from "react";

export default function Kids() {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly sm:gap-x-4 gap-y-16 mt-20 px-8 md:items-center mx-auto">
      <div className="flex justify-center order-2 md:order-1">
        <Image
          src="/images/kids-netflix.png"
          alt="Netflix for kids"
          className="w-full h-full"
            height={400}
            width={600}
        />
      </div>
      <div className="max-w-2xl md:order-2 text-left">
        <h1 className="mb-10 text-4xl md:text-4xl lg:text-6xl font-bold">Create profiles for kids.</h1>
        <p className="text-2xl lg:text-3xl">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </div>
  );
}
