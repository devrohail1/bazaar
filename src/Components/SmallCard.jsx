const SmallCard = ({ imgsrc, heading, price, priceBefore }) => {
  return (
    <>
      <div className="bg-white w-36 shadow-lg border p-5 m-5 rounded-md text-xs font-medium ">
        <img
          className="w-full h-24 sm:w-24 sm:h-24  object-cover border bg-[#f4f7fb] rounded-md"
          src={imgsrc}
          alt=""
        />
        <h3 className="mt-3 ">{heading}</h3>
        <p className="text-red-500">
          {price}
          {"  "}
          <span className="text-gray-400 text-[10px] line-through">
            {priceBefore}
          </span>
        </p>
      </div>
    </>
  );
};

export default SmallCard;
