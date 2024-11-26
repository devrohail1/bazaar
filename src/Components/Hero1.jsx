import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Hero1() {
  const [mainImg, setMainImg] = useState("/product.png");
  const images = ["/product.png", "/pro2.png", "/pro3.png"];

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-4">
        <div className="flex flex-col md:flex-row items-center justify-center p-6 mt-3 ">
          {/* Left Section: Image */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src={mainImg}
              alt="Product"
              className="w-full max-w-lg mx-auto md:max-w-[400px]  h-96 sm:w-96 sm:h-96 "
            />

            <div className="flex gap-4 mt-8 mb-3">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-24 border bg-white shadow-lg overflow-hidden p-2 rounded-lg cursor-pointer hover:border-red-500"
                  onClick={() => setMainImg(img)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-3 col-span-8 md:col-start-7 md:col-span-3 flex">
        <div className="flex-1 flex flex-col items-center justify-center text-center  md:items-start md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">Xiaomi 410 Headphone - Orange</h1>
          <div>
            <p className="flex text-sm text-gray-400 items-center mt-0 ">
              Brand:{" "}
              <span className="ml-3">
                <img className="w-10 mr-0 " src="/brand.png" alt="" />
              </span>{" "}
              <span className="text-black text-[12px] font-medium ">
                Xiaomi
              </span>
            </p>
          </div>

          {/* Stars for Reviews */}
          <div className="flex mb-4   ">
            {/* Looping to create 5 stars */}
            <span className="mr-2 text-gray-400">Rated:</span>
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-xl" />
            ))}
          </div>

          {/* Price and Stock Information */}
          <div className="mb-4">
            <p className="text-xl font-semibold text-red-500">
              $35.00 <span className="text-gray-400 text-sm">Only</span>
            </p>
            <p className="text-xs text-gray-400 font-medium">Stock Available</p>
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
  );
}

export default Hero1;
