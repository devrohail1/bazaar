const XtraSmallCard = ({ imgsrc, headtxt }) => {
  return (
    <>
      <div className="w-32 bg-white p-4 m-3 shadow-md border rounded-lg ">
        <img
          className="rounded-2xl h-20 sm:w-20 sm:h-20 ml-2 "
          src={imgsrc}
          alt=""
        />
        <h3 className="text-xs font-semibold text-center">{headtxt} </h3>
      </div>
    </>
  );
};

export default XtraSmallCard;
