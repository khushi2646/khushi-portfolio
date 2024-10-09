"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Use this in app router
import ProductProjects from "./productProjects";
import BrandingProjects from "./brandingProjects";

const Main = () => {
  const searchParams = useSearchParams(); // This will read the query params from the URL
  const [activeTab, setActiveTab] = useState("branding");

  // Handle query params to switch tabs via URL
  useEffect(() => {
    const tabFromQuery = searchParams.get("tab"); // Read the query parameter
    if (tabFromQuery === "digital-products" || tabFromQuery === "branding") {
      setActiveTab(tabFromQuery);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState(null, "", `?tab=${tab}`); // Manually update the URL
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 my-12 flex justify-center items-center flex-col space-y-8">
      <div className=" text-xl font-clashGrotesk font-medium text-grey-700 ">
        Selected Work
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6 bg-grey-100 p-1 rounded-sm w-[28rem]">
        <button
          className={`px-8 py-4 font-semibold font-aileron text-md rounded-sm w-1/2 ${
            activeTab === "digital-products"
              ? "text-pink-100 bg-grey-600 "
              : "text-grey-500"
          }`}
          onClick={() => handleTabChange("digital-products")}
        >
          Digital Products
        </button>
        <button
          className={`px-8 py-4 font-semibold font-aileron text-md rounded-sm w-1/2 ${
            activeTab === "branding"
              ? "text-pink-100 bg-grey-600 "
              : "text-grey-500"
          }`}
          onClick={() => handleTabChange("branding")}
        >
          Branding
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "branding" && (
          <div>
            <BrandingProjects />
          </div>
        )}

        {activeTab === "digital-products" && (
          <div>
            <ProductProjects />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
