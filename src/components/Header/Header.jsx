import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header h-[38vw]  mt-[30px] mx-auto  relative">
      <div className="header-content animate-fadeIn absolute flex flex-col items-start gap-[1.5vw]  md:max-w-1/2 bottom-[50%] translate-y-[50%] pb-5 md:translate-y-[0] md:bottom-[10%] left-[6vw]">
        <h2 className="font-medium text-white text-2xl md:text-4xl xl:text-7xl">
          Order your favorite food here
        </h2>
        <p className="text-white hidden md:block text-[1vw] leading-relaxed">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission to satisfy your cravings and elevate your dining experience,
          one delicious meal at at time.
        </p>
        <button className = "border-none text-btn font-semibold text-sm md:text-lg py-[1vw] px-[2.3vw] bg-white hover:bg-white/80 active:bg-white/50 rounded-full cursor-pointer transition" >View Menu</button>
      </div>
    </div>
  );
}

export default Header;
