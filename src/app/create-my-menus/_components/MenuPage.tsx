"use client";

import Header from "@/app/_components/Header";
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { menuData } from "@/utils/MenuData";

const MenuPage = () => {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < menuData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentMenus = menuData.slice(currentPage * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <div className="bg-[url('/images/backgroundImage.jpg')] bg-cover bg-no-repeat h-full pb-10">
      <Header />

      <div className="flex justify-between w-full px-8 mb-6">
        <button
          className={`bg-[#5D1575] hover:bg-[#3D803D] p-3 rounded-full ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          className={`bg-[#5D1575] hover:bg-[#3D803D] p-3 rounded-full ${(currentPage + 1) * ITEMS_PER_PAGE >= menuData.length ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleNext}
          disabled={(currentPage + 1) * ITEMS_PER_PAGE >= menuData.length}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {currentMenus.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
          />
        ))}
      </div>

      <div className="flex justify-center my-10 space-x-4 ">
        <button className="bg-[#3D803D] hover:bg-[#246224] text-white font-bold py-2 px-6 rounded">Checkout</button>
        <button className="bg-[#5D1575] hover:bg-[#74288d] text-white font-bold py-2 px-6 rounded">Customize</button>
      </div>
    </div>
  );
};

export default MenuPage;
