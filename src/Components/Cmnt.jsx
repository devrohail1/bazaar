import React from "react";
import { FaStar } from "react-icons/fa";

const Cmnt = ({ heading, description, img, date, star, rating }) => {
  return (
    <>
      <div className=" mt-3">
        <div className="flex gap-3  ">
          <div>
            <img className="w-12" src={img} alt="" />
          </div>
          <div className="flex flex-col ">
            <h2 className="font-semibold">{heading}</h2>
            <div className="flex mb-2 ">
              {/* Looping to create 5 stars */}
              {[...Array(star)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-xl" />
              ))}
              <div className="flex gap-3 ml-2">
                <p className="text-gray-500"> {rating}</p>
                <p className="text-gray-500">{date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Cmnt;
