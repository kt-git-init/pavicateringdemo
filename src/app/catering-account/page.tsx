import Image from "next/image";
import React from "react";
import working from "../../../public/images/workingonit.gif";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={working}
        height={600}
        width={600}
        alt="working"
      />
    </div>
  );
};

export default page;
