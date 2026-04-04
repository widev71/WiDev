import React from "react";
import Image from "next/image";

const BoxGallery = () => {
  return (
    <div id="BoxGallery">
      <div className="flex justify-between">
        <Image
          src="/upload.png"
          alt="Upload"
          width={40}
          height={40}
          className="h-10 w-auto"
        />
        <Image
          src="/next.png"
          alt="Next"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      </div>
      <h1 className="text-white text-xl pr-3 mt-3">Class Gallery</h1>
    </div>
  );
};

export default BoxGallery;
