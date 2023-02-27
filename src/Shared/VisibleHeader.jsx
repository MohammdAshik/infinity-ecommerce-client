import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";

const VisibleHeader = () => {
  return (
    <div className="w-[100%] top-0 z-10  ">
      <nav className="flex justify-between items-center border-b-2 border-black/10 h-20 w-[92%] mx-auto">
        <div>
          <h4 className="logo-font text-4xl text-black">Infinity</h4>
        </div>
        <div className="text-black">
          <ul className="flex items-center">
            <li className="mx-3">
              <BiSearch className="text-2xl" />
            </li>
            <li className="mx-3">
              <RiUserLine className="text-2xl" />
            </li>
            <li className="mx-3">
              <HiOutlineShoppingCart className="text-2xl" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default VisibleHeader;