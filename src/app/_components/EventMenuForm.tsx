"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import welcome from "../../../public/images/welcome.png";

const EventMenuForm = () => {
  const [eventDetails, setEventDetails] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEventDetails(e.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-white/80 mt-10">
      <div className="flex px-20 py-16 justify-center items-center gap-20">
        <div className="bg-[#5D1575] p-10 rounded-xl py-20">
          <h2 className="text-md font-semibold mb-4 text-white">Enter event details below to get started</h2>
          <textarea
            value={eventDetails}
            onChange={handleInputChange}
            placeholder="We want food for 50 peopled and my budgetis $800.  5 are gluten-free and 10 vegan."
            className="w-full h-28 mb-10 p-3 rounded-md border border-gray-400 text-gray-900"
          />
          <Link
            href={"/create-my-menus"}
            className="bg-[#58a858] hover:bg-[#62c062]  text-white/90 font-bold py-2 px-4 rounded-md font-Qauattrocento"
          >
            Create my menus
          </Link>
        </div>

        <div className="flex-col">
          <Image
            src={welcome}
            width={600}
            height={400}
            alt="logo"
            className="mb-10"
          />
          <div className="mt-6 text-left w-full">
            <h3 className="text-2xl font-medium mb-2 font-Qauattrocento">Please follow the steps below:</h3>
            <ol className="list-decimal list-inside space-y-1 text-black text-xl font-Quattrocento">
              <li>Tell us a few details like your headcount, budget, and dietary restrictions.</li>
              <li>Press the &quot;Create my menus&quot; button for your specially curated options.</li>
              <li>Customize or checkout with the menu that best fits your needs.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMenuForm;
