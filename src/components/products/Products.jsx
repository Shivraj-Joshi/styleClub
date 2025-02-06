import React, { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";

const Products = () => {
  const { product } = useContext(myContext);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // function to add products to cart

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("product added to cart", {
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-16 max-w-6xl mx-auto  px-6 py-12">
      {/* product cards */}

      {product.map((item, index) => {
        const { title, price, imageUrl, category } = item;
        return (
          <div key={index} className="">
            <div className="mt-16 border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
              <div className="w-full h-full flex justify-center items-center">
                {/* image */}
                <div className="w-[200px] mx-auto flex justify-center items-center">
                  <img
                    className="max-h-full  group-hover:scale-110  transition duration-300"
                    src={imageUrl}
                    alt=""
                  />
                </div>
                <div className="absolute border border-[#e4e4e4] -bottom-14 group-hover:bottom-3  opacity-0 group-hover:opacity-100 transitiona duration-300">
                  <button
                    onClick={() => addCart(item)}
                    className="p-2 cursor-pointer bg-[#717fe0] hover:scale-95 transition-all text-white  "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 uppercase">{category}</p>
              <p className="text-gray-400 uppercase">🌟4.2</p>
              <p>{title}</p>
              <p className="text-green-500">${price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
