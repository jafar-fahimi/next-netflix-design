import { PlusIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import FaqElement from "./FaqElement";

const FAQ = () => {
  return (
    <main className="mx-auto mt-32 flex flex-col items-center gap-y-10 px-8 sm:gap-x-4 md:gap-y-16 lg:flex-row lg:justify-evenly">
      <section className="flex w-full flex-col space-y-2 text-left md:w-3/5">
        <FaqElement
          question="what is netflix"
          answer="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laborum error voluptatum, facilis laudantium necessitatibus voluptas! Voluptatem similique beatae ex qui quidem!"
        />
        <FaqElement
          question="How much does Netflix cost?"
          answer="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laborum error voluptatum, facilis laudantium necessitatibus voluptas! Voluptatem similique beatae ex qui quidem!"
        />
        <FaqElement
          question="Where can I watch?"
          answer="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laborum error voluptatum, facilis laudantium necessitatibus voluptas! Voluptatem similique beatae ex qui quidem!"
        />
        <FaqElement
          question="How do I cancel?"
          answer="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laborum error voluptatum, facilis laudantium necessitatibus voluptas! Voluptatem similique beatae ex qui quidem!"
        />
        <FaqElement
          question="What can I watch on Netflix?"
          answer="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laborum error voluptatum, facilis laudantium necessitatibus voluptas! Voluptatem similique beatae ex qui quidem!"
        />
        <FaqElement
          question="Is Netflix good for kids?"
          answer="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laborum error voluptatum, facilis laudantium necessitatibus voluptas! Voluptatem similique beatae ex qui quidem!"
        />
      </section>
    </main>
  );
};
export default FAQ;
