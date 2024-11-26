import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function Head() {
  const navigate = useNavigate();

  // Handle dropdown change
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory) {
      navigate(selectedCategory); // Navigate to the selected category
    }
  };
  const handleLogoClick = () => {
    navigate("/"); // Navigate to home
    // Optionally, reset category to "Home" if managed globally
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="hidden md:grid grid-cols-12 col-span-12 bg-[#2B3445] text-white">
          <div className="col-start-2 flex gap-5">
            <div className="flex gap-2">
              <MdCall className="text-lg" />
              <span className="text-xs">+923364111954</span>
            </div>
            <div className="flex gap-2">
              <IoMdMail className="text-lg" />
              <span className="text-xs">devrohail21@gmail.com</span>
            </div>
          </div>
          <div className="col-start-10 col-span-2 flex justify-end gap-5 ">
            <div className="text-xs hover:text-gray-300">Theme FAQ's</div>
            <div className="text-xs hover:text-gray-300">Need Help?</div>
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-12 mt-3   ">
          {/* Logo */}
          <div className="  col-start-1 md:col-start-2 md:col-span-2  col-span-4 cursor-pointer   ">
            <img
              onClick={handleLogoClick}
              className=" -mr-2 h-14 "
              src="/logo1.png"
              alt="Logo"
            />
          </div>
          {/* Search Bar */}
          <div className="relative w-full md:w-auto flex items-center  md:mb-0 col-start-5 col-span-5   ">
            {/* Search Icon */}
            <IoSearch className="absolute left-3 text-gray-400 text-xl" />

            {/* Input Field */}
            <input
              className="h-10 w-full  rounded-full md:rounded-none md:rounded-l-full border pl-10 pr-4"
              type="text"
              placeholder="Searching for..."
            />

            {/* Dropdown for Categories */}
            <select
              onChange={handleCategoryChange}
              className="h-10 bg-[#e4e7eb] text-sm hidden md:block md:rounded-r-full p-2 "
              defaultValue="/"
            >
              <option value="" disabled>
                All Categories
              </option>

              <option value="/electronics">Electronics</option>
              <option value="/fashion">Fashion</option>
              <option value="/">Home</option>
              <option value="/books">Books</option>
            </select>
          </div>
          {/* icons */}
          <div className="flex justify-end items-center gap-4 md:col-start-10 md:col-span-2 col-start-11 col-span-1 ">
            <FaUserCircle className="cursor-pointer h-6 w-6" />
            <FiShoppingBag className="cursor-pointer h-6 w-6" />
          </div>
        </div>

        <div className="grid grid-cols-12 col-span-12   ">
          {/* Bottom Navigation */}
          <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-3  ">
            <div className="flex  mt-2 px-4  ">
              <div className="relative w-full mb-3 md:mb-0 md:col-span-12   ">
                {/* Category Icon */}
                <TbCategoryFilled className="absolute top-2.5 left-3 text-gray-400 text-xl pointer-events-none" />

                {/* Dropdown */}
                <select
                  className="h-10 w-full bg-[#e4e7eb]  text-gray-400 text-sm rounded-md pl-10 pr-8 focus:outline-none mb-3"
                  defaultValue=""
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled>
                    Categories
                  </option>
                  <option value="/all">All</option>
                  <option value="/electronics">Electronics</option>
                  <option value="/fashion">Fashion</option>
                  <option value="/">Home</option>
                  <option value="/books">Books</option>
                </select>
              </div>
            </div>
          </div>

          {/* List of Links */}
          <div className="col-start-2 col-span-12 md:col-start-5 md:col-span-7 ">
            <div className="w-auto   mt-2 pl-2 pr-2   ">
              <ul className="flex justify-end gap-5 text-gray-600 text-xs md:text-sm ">
                <li className="hover:text-red-500 cursor-pointer ">Home</li>
                <li className="hover:text-red-500 cursor-pointer ">Pages</li>
                <li className="hover:text-red-500 cursor-pointer ">User</li>
                <li className="hover:text-red-500 cursor-pointer ">Vendor</li>
                <li className="hover:text-red-500 cursor-pointer ">Tracking</li>
                <li className="hover:text-red-500 cursor-pointer ">
                  Documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
