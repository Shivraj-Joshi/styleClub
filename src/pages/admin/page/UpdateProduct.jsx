import React, { useContext } from "react";
import myContext from "../../../context/myContext";

const UpdateProduct = () => {
  const { products, setProducts, updateProduct } = useContext(myContext);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[400px] w-[300px] border border-[#e4e4e4] bg-green-300 flex flex-col items-center justify-center">
        <h3>Update Product</h3>
        <div className="flex flex-col w-full items-center justifu-center gap-6 p-4 mb-6">
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            value={products.title}
            onChange={(e) =>
              setProducts({ ...products, title: e.target.value })
            }
            type="text"
            placeholder="title "
          />
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.category}
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
            placeholder="category"
          />
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.price}
            onChange={(e) =>
              setProducts({ ...products, price: e.target.value })
            }
            placeholder="price"
          />
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.description}
            onChange={(e) =>
              setProducts({ ...products, description: e.target.value })
            }
            placeholder="description"
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            onClick={updateProduct}
            className="p-2 bg-[#717fe0] text-white uppercase cursor-pointer"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
