import React from "react";

const HomeNav = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-full h-[4.5rem] border-b lg:px-[10rem] px-[3rem] flex flex-col justify-center">
        <div className=" flex justify-between items-center flex-wrap">
          {/* logo container  */}
          <div className=" w-14 h-14 border bg-[#7E22CE] rounded-full"></div>

          {/* nav items container  */}
          <ul className=" flex items-center gap-3 lg:gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Career</li>
            <li>Openings</li>
            <li>Program</li>
          </ul>

          {/* button container  */}
          <div className=" md:flex items-center gap-3 hidden">
            <button className=" py-2 px-3 rounded-lg text-white bg-[#7E22CE] hover:border hover:border-[#7E22CE] hover:text-[#7E22CE] hover:bg-white transition-all border border-[#7E22CE] outline-none">
              Login
            </button>
            <button className="  py-2 px-3 rounded-lg text-white bg-[#7E22CE] hover:border hover:border-[#7E22CE] hover:text-[#7E22CE] hover:bg-white transition-all border border-[#7E22CE] outline-none">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
