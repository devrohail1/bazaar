import React from "react";
import ProductCard from "../Components/ProductCard";
import hoodie from "../assets/Images/fashion/hoodie.png";
import jacket from "../assets/Images/fashion/Jacket.png";
import shirt from "../assets/Images/fashion/Redshirt.png";
import shoes from "../assets/Images/fashion/shoes.png";
import brand from "/brand.png";

function Fashion() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-9">
        <div className=" mt-5">
          <div>
            <h2 className="font-semibold text-lg">Fashion Products</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ProductCard
              brandName="Outfitters"
              brandImg={brand}
              id="9"
              img={hoodie}
              heading="Hoodie"
              price="$120.00"
              priceBefore="$160.00"
              stars={4}
            />
            <ProductCard
              brandName="Outfitters"
              brandImg={brand}
              id="10"
              img={jacket}
              heading="Jacket"
              price="$190.00"
              priceBefore="$200.00"
              stars={5}
            />
            <ProductCard
              brandName="Outfitters"
              brandImg={brand}
              id="11"
              img={shirt}
              heading="Shirt"
              price="$180.00"
              priceBefore="$220.00"
              stars={3}
            />
            <ProductCard
              brandName="Outfitters"
              brandImg={brand}
              id="12"
              img={shoes}
              heading="Shoes"
              price="$90.00 "
              priceBefore="$120.00"
              stars={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashion;
