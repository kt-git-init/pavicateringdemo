import Image from "next/image";
import React from "react";
import fb from "../../../public/images/fb.jpg";

//Footer Component
const Footer = () => {
  return (
    <div className="bg-[#D33527] p-8 flex-col gap-20 items-center justify-center">
      <div className="flex gap-4 items-center justify-center text-white font-bold">
        <p>133 Pearl Street, Boston, MA 02110 | Phone: 617-720-3000 </p>
        <Image
          src={fb}
          height={100}
          width={100}
          alt="fb connect"
        />
      </div>

      <div className="flex items-center justify-center mt-2">
        <p className="text-[#F4BFBF] ">Website by Kunal Tajne</p>
      </div>
    </div>
  );
};

export default Footer;
