import React, { useContext } from "react";
import myContext from "../../../context/myContext";

const AddProduct = () => {
  const { products, setProducts, addProduct } = useContext(myContext);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[450px] w-[300px] border border-[#e4e4e4] bg-green-300 flex flex-col items-center justify-center">
        <h3>Add a New Product</h3>
        <div className="flex flex-col w-full items-center justifu-center gap-6 p-4 mb-6">
          <input
            className="border border-[#e4e4e4] p-2 w-full"
            type="text"
            value={products.title}
            onChange={(e) =>
              setProducts({ ...products, title: e.target.value })
            }
            placeholder="title "
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
            placeholder="description"
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            onClick={addProduct}
            className="p-2 bg-[#717fe0] text-white uppercase cursor-pointer"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
