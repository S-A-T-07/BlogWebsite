import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../assets/Logo.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-16 px-3 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 items py-2">
        <div className="flex flex-col items-center mr-0 m-12">
          {/* First column*/}
          <h1 className="text-3xl font-bold lg:text-6xl">Blog</h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-5">
            "A Website Diary"
          </p>
          <Link
            to="/search"
            className="align-center text-xs sm:text-sm text-amber-300 font-bold hover:underline mt-10"
          >
            View all posts
          </Link>
        </div>
        <div className="flex justify-center">
          {/* Second column */}
          <img src={Logo} alt="Logo" className="h-[200px] w-[200px]" />
        </div>
      </div>
    </div>
  );
}
