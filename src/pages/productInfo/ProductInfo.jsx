import React from "react";

const ProductInfo = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-4 ">
      <div className="main-container h-[500px] w-[400px] bg-green-300">
        image
      </div>
      <div className="productDesc-container h-[500px] w-[400px] bg-pink-300">
        <div className="info-container flex flex-col  bg-green-300 gap-4">
          <div className="flex flex-col gap-6">
            <h1>title</h1>
            <p> $ price</p>
            <p>description</p>
          </div>
          <div className="p-2 bg-[#717fe0] text-white text-center border border-[#e4e4e4]">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
