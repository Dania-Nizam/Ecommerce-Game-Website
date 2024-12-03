import React from "react";
import ProductCard from "./Helper/ProductCard";

const TopProduct = () => {
  return (
    <div className="bg-gray-800 pt-[4rem] pb-[3rem]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Top Products
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-400">
          Veiw all Product
        </button>
      </div>
      <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto">
        <div data-aos="fade-right"   data-aos-anchor-placement="top-center">
          <ProductCard
            title="Call of duty"
            actualPrice="$59.99"
            discountPrice="$49.99"
            category="Shooting"
            image="/g1.jpg"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="250"  data-aos-anchor-placement="top-center">
          <ProductCard
            title="Zombie House"
            actualPrice="$39.99"
            discountPrice="$29.99"
            category="Action"
            image="/g2.jpg"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="500"  data-aos-anchor-placement="top-center">
          <ProductCard
            title="Gun of Wars"
            actualPrice="$49.99"
            discountPrice="$35.99"
            category="Shooting"
            image="/g3.jpg"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="750"  data-aos-anchor-placement="top-center">
          <ProductCard
            title="House of Fire"
            actualPrice="$49.99"
            discountPrice="$35.99"
            category="Action"
            image="/g4.jpg"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="1000"  data-aos-anchor-placement="top-center">
          
          <ProductCard
            title="Assassins Creed"
            actualPrice="$69.99"
            discountPrice="$55.99"
            category="Action"
            image="/g5.jpg"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="1250"  data-aos-anchor-placement="top-cente" >
        <ProductCard
        title="Wild Wolf"
        actualPrice="$39.99"
        discountPrice="$25.99"
        category="Adventure"
        image="/g8.jpg"
      />
        
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
