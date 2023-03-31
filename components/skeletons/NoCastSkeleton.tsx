import React from "react";

// is just shown in PersonBanner.tsx when there is no castPerson.profile_path
const NoCastSkeleton = ({ imageSize }: { imageSize?: boolean }) => {
  return (
    <div
      role="status"
      className="max-w-sm animate-pulse items-center rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
    >
      <div
        className={
          imageSize
            ? "flex h-[380px] w-[250px] items-center justify-center space-x-3"
            : "flex h-[150px] items-center justify-center space-x-3"
        }
      >
        <svg
          className="h-20 w-20 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default NoCastSkeleton;
