import { useContext } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { ProductContext } from "./ProductContext";

const ProductCard = ({
  img,
  heading,
  priceBefore,
  price,
  stars,
  id,
  brandName,
  brandImg,
}) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const { setProductData } = useContext(ProductContext);

  const handleClick = () => {
    setProductData({
      brandName,
      mainImg: img,
      heading,
      price,
      rating: stars,
      id,
      brandImg,
    });
    // Construct the dynamic URL based on the current path
    const currentPath = location.pathname;
    navigate(`${currentPath}/product/${id}`);
  };
  return (
    <>
      <div
        key={id}
        onClick={handleClick}
        className="bg-white border rounded-xl shadow-xl w-60  m-3  cursor-pointer  "
      >
        <p className="bg-red-500  text-white w-16 rounded-full p-2 ml-2 text-center text-xs h-8 mx-6 m-2 absolute z-40">
          50% off
        </p>
        <img
          className="w-full h-60 sm:w-60 sm:h-60 rounded-t-xl object-cover relative z-30"
          src={img}
          alt=""
        />
        <div className="p-2 mb-0">
          <div className="flex justify-between text-gray-400   ">
            <p className="underline text-[8px] sm:text-xs font-light flex gap-1 mb-0 mt-2">
              Bike <span>Ducati</span> <span>Motors</span>
            </p>
            <FaRegHeart className="mt-1 mb-0 text-lg mr-2 text-red-500" />
          </div>
          <h2 className="font-medium mt-0 mb-0">{heading}</h2>
          <div className="flex mb-0">
            {[...Array(stars)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-xl" />
            ))}
          </div>
          <p className="text-red-500">
            {price}{" "}
            <span className="text-gray-400 text-xs line-through">
              {priceBefore}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
