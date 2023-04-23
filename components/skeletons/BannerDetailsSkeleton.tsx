import React from "react";

// component to show while loading Banner
const BannerDetailsSkeleton = () => (
  <div
    role="status"
    className="max-w-3xl animate-pulse space-y-4 overflow-hidden pt-24"
  >
    <div className="mb-12 w-screen">
      <div className="mb-4 h-8 w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div className="mb-2.5 h-2 max-w-[260px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="mb-2.5 h-2 rounded-full bg-gray-200  dark:bg-gray-700"></div>
    <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="h-2 max-w-[580px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <br />
    <div className="mb-2.5 h-2 max-w-[400px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

export default BannerDetailsSkeleton;
