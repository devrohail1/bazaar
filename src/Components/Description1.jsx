import { useState } from "react";
import Review from "./Review";

function Description1() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="grid grid-cols-12">
      <div className=" col-start-1  col-span-12 md:col-start-2 md:col-span-9 flex flex-col mt-6  ">
        <div className="flex gap-4  font-medium text-left ">
          <h5
            className={`cursor-pointer ${
              activeTab === "description"
                ? "text-red-500 font-bold"
                : "hover:text-red-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </h5>
          <h5
            className={`cursor-pointer ${
              activeTab === "reviews"
                ? "text-red-500 font-bold"
                : "hover:text-red-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Review (3)
          </h5>
        </div>
        <hr className="border" />
        <div className="mt-3 ml-4 ">
          {activeTab === "description" ? (
            <div>
              <h3 className="font-bold mb-3">Specification</h3>
              <div className="flex flex-col text-sm gap-1">
                <p>Brand : Beats</p>
                <p>Model : 5450</p>
                <p>Wireless Bluetooth : Headset</p>
                <p>FM Frequency Response : 87.5 - 108MHz</p>
                <p>Feature : FM Radio, Card Supported</p>
                <p>Made in China</p>
              </div>
            </div>
          ) : (
            <Review />
          )}
        </div>
      </div>
    </div>
  );
}

export default Description1;
