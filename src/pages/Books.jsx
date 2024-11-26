import React from "react";
import ProductCard from "../Components/ProductCard";
import kamil from "../assets/Images/Books/kamil.png";
import falt from "../assets/Images/Books/falt.png";
import rich from "../assets/Images/Books/rich.png";
import clean from "../assets/Images/Books/clean.jpg";
import brand from "/brand.png";

function Books() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-9">
        <div className=" mt-5">
          <div>
            <h2 className="font-semibold text-lg">Books</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ProductCard
              brandName="Novels"
              brandImg={brand}
              id="1"
              img={kamil}
              heading="Peer e Kamil"
              price="$120.00"
              priceBefore="$160.00"
              stars={4}
            />
            <ProductCard
              brandName="Novels"
              brandImg={brand}
              id="2"
              img={clean}
              heading="Clean Code"
              price="$100.00"
              priceBefore="$150.00"
              stars={5}
            />
            <ProductCard
              brandName="Novels"
              brandImg={brand}
              id="3"
              img={falt}
              heading="Fault In Our Stars"
              price="$180.00"
              priceBefore="$220.00"
              stars={3}
            />
            <ProductCard
              brandName="Novels"
              brandImg={brand}
              id="4"
              img={rich}
              heading="Rich Dad"
              price="$110.00 "
              priceBefore="$120.00"
              stars={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
