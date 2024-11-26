import React from "react";
import ProductCard from "./ProductCard";

function Available1() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-9">
        <div className=" mt-5">
          <div>
            <h2 className="font-semibold text-lg">Related Products</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ProductCard
              img="/airpods1.jpg"
              heading="Airpods"
              price="$120.00"
              priceBefore="$160.00"
              stars={4}
            />
            <ProductCard
              img="/mobile.jpg"
              heading="Iphone"
              price="$1100.00"
              priceBefore="$1500.00"
              stars={5}
            />
            <ProductCard
              img="/watch.jpg"
              heading="Apple Watch"
              price="$180.00"
              priceBefore="$220.00"
              stars={3}
            />
            <ProductCard
              img="/wired.png"
              heading="Wired Earphones"
              price="$10.00 "
              priceBefore="$20.00"
              stars={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available1;
