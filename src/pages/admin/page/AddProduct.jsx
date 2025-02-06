import React, { useContext } from "react";
import myContext from "../../../context/myContext";

const AddProduct = () => {
  const { products, setProducts, addProduct } = useContext(myContext);

  return (
    <div className="h-screen bg-slate-300 flex items-center justify-center">
      <div className="h-[500px] w-[400px] border border-[#e4e4e4] bg-white flex flex-col items-center justify-center">
        <h3 className="text-[25px] text-[#333333] uppercase font-bold mb-6">
          Add new Product
        </h3>
        <div className="flex flex-col w-full items-center justifu-center gap-6 p-4 mb-6">
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.title}
            onChange={(e) =>
              setProducts({ ...products, title: e.target.value })
            }
            placeholder="Title "
          />
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.price}
            onChange={(e) =>
              setProducts({ ...products, price: e.target.value })
            }
            placeholder="Price"
          />
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.imageUrl}
            onChange={(e) =>
              setProducts({ ...products, imageUrl: e.target.value })
            }
            placeholder="Image URL"
          />
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.category}
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
            placeholder="Product Category"
          />
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.description}
            onChange={(e) =>
              setProducts({ ...products, description: e.target.value })
            }
            placeholder="Description"
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            onClick={addProduct}
            className="p-2 bg-[#717fe0] text-white uppercase cursor-pointer hover:scale-95"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
