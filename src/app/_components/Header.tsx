import HeaderData from "@/utils/HeaderData";
import Image from "next/image";
import React from "react";
import paviaLogo from "../../../public/images/pavialogo.png";
import appicon from "../../../public/images/appicon.png";

const Header = () => {
  return (
    <header>
      {/* Top Section with Logo and Background Image */}
      <div className="flex items-center justify-center">
        <Image
          src={paviaLogo}
          width={1000}
          height={400}
          alt="logo"
        />
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#3D803D] text-white w-full mt-4">
        <div className="container mx-auto flex justify-center p-4">
          <nav className="flex items-center space-x-6 ">
            {HeaderData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-[#9FC014] text-sm font-bold "
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex mt-10 items-center justify-center">
        <Image
          src={appicon}
          width={400}
          height={400}
          alt="logo"
        />
      </div>
    </header>
  );
};

export default Header;
