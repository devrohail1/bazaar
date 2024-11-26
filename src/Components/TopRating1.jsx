import SmallCard from "./SmallCard";
import XtraSmallCard from "./XtraSmallCard";

function TopRating1() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-10">
        <div className="  mt-7">
          <div className="font-semibold text-lg">
            <h2>Frequently Bought Together</h2>
          </div>
          <div className="grid grid-cols-12 ">
            <div className=" col-start-1 col-span-12 ">
              <div className="flex flex-col md:flex-wrap lg:flex-row items-center">
                <div>
                  <SmallCard
                    imgsrc="/camera.png"
                    heading="Canon 30s Camera"
                    price="$1300"
                    priceBefore="$1500"
                  />
                </div>
                <div className="flex items-center text-2xl text-gray-500">
                  +
                </div>

                <div>
                  <SmallCard
                    imgsrc="/Iphone.png"
                    heading="Iphone 8"
                    price="$1090"
                    priceBefore="$1400"
                  />
                </div>
                <div className="flex justify-center items-center text-2xl text-gray-500">
                  +
                </div>

                <div>
                  <SmallCard
                    imgsrc="/controller.png"
                    heading="Ps4 & Controller"
                    price="$1900"
                    priceBefore="$2300"
                  />
                </div>
                <div className="flex justify-center items-center text-2xl text-gray-500">
                  +
                </div>
                <div>
                  <SmallCard
                    imgsrc="/mic.png"
                    heading=" Micrphone"
                    price="$900"
                    priceBefore="$1100"
                  />
                </div>
                <div className="flex justify-center items-center text-2xl text-gray-500">
                  =
                </div>
                <div className="bg-transparent w-64  border-2 p-5  rounded-md text-xs font-medium flex flex-col justify-center items-center">
                  <h3 className="text-red-500 text-lg ">$5190</h3>
                  <span className="text-gray-300 ">Save $500</span>
                  <div className="flex gap-3 mt-4  ">
                    <button className="w-24 bg-red-500 text-white p-2 rounded-md  hover:bg-red-600">
                      Add To Cart
                    </button>

                    <button className="border border-red-500 text-red-500 w-24 rounded-md p-2">
                      Add To List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div className="font-semibold text-lg">
              <h2>Also Available At</h2>
            </div>
            <div
              className=" gap-7 flex flex-col md:flex-row items-center
        "
            >
              <div>
                <XtraSmallCard imgsrc="/laptop1.png" headtxt=" Tech Friend" />
              </div>
              <div>
                <XtraSmallCard imgsrc="/laptop.avif" headtxt="Smart Shop" />
              </div>
              <div>
                <XtraSmallCard imgsrc="/laptop2.png" headtxt="Gadget 360" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRating1;
