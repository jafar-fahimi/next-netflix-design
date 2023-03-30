import { PlusIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";

const FaqElement: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="w-full text-2xl outline-none"
      onClick={() => setActive(!active)}
    >
      <div className="flex items-center justify-between bg-gray-400/40 py-4 px-8">
        <h4>{question}</h4>
        <span className="cursor-pointer">
          <PlusIcon height={30} />
        </span>
      </div>
      <div
        ref={contentRef}
        className={
          active
            ? `flex w-full bg-white/10 py-2 px-8 transition duration-200 ease-in-out`
            : `hidden`
        }
      >
        <p className="text-lg">{answer}</p>
      </div>
    </div>
  );
};
export default FaqElement;
