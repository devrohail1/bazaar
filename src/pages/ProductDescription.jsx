import React, { useContext } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "../Components/ProductContext";
import Description1 from "../Components/Description1";

function ProductDescription() {
  const { productData } = useContext(ProductContext);

  if (!productData) {
    return <p>No product selected.</p>;
  }

  const { img, heading, priceBefore, price, stars, brandName, brandImg } =
    productData;
  {
    return (
      <div>
        <div className="grid grid-cols-12 ">
          <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-4">
            <div className="flex flex-col md:flex-row items-center justify-center p-6 mt-3 ">
              {/* Left Section: Image */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  src={productData.mainImg}
                  alt="Product"
                  className="w-full max-w-lg mx-auto md:max-w-[400px]  h-96 sm:w-96 sm:h-96 "
                />
              </div>
            </div>
          </div>
          <div className="col-start-3 col-span-8 md:col-start-7 md:col-span-3 flex">
            <div className="flex-1 flex flex-col items-center justify-center text-center  md:items-start md:text-left mt-6 md:mt-0">
              <h1 className="text-3xl font-bold">{productData.heading}</h1>
              <div>
                <p className="flex text-sm text-gray-400 items-center mt-0 ">
                  Brand:{" "}
                  <span className="ml-3">
                    <img
                      className="w-10 mr-0 "
                      src={productData.brandImg}
                      alt=""
                    />
                  </span>{" "}
                  <span className="text-black text-[12px] font-medium ">
                    {productData.brandName}
                  </span>
                </p>
              </div>

              {/* Stars for Reviews */}
              <div className="flex mb-4   ">
                {/* Looping to create 5 stars */}
                <span className="mr-2 text-gray-400">Rated:</span>
                {[...Array(productData.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Price and Stock Information */}
              <div className="mb-4">
                <p className="text-xl font-semibold text-red-500">
                  {productData.price}{" "}
                  <span className="text-gray-400 text-sm">Only</span>
                </p>
                <p className="text-xs text-gray-400 font-medium">
                  Stock Available
                </p>
              </div>

              {/* Shop Now Button */}
              <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-2">
                Shop Now
              </button>

              <div>
                <p className="flex text-sm text-gray-400 items-center mt-10 ">
                  Sold by:{" "}
                  <span className="ml-3">
                    <img className="w-5 mr-1 " src="/womanUser.png" alt="" />
                  </span>{" "}
                  <span className="text-black text-[12px] font-medium  mt-1">
                    Mobile Store
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Description1 />
      </div>
    );
  }
}

export default ProductDescription;
