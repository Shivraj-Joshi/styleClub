import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";
// import Modal from "../../components/modal/Modal";

const Cart = () => {
  const context = useContext(myContext);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Item Deleted Successfully", {
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

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });
    setTotalAmount(temp);
    console.log(temp);
  }, [cartItems]);

  const shipping = parseInt(5);
  const grandTotal = shipping + totalAmount;
  console.log(grandTotal);

  // for payment integration

  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [pincode, setPincode] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Layout>
      <div className="h-screen bg-gray-100 pt-5 mb-[10%] ">
        <h1 className="product-container mb-10 text-center text-2xl font-bold">
          Cart Items
        </h1>

        <div className="mx-auto max-w-5xl bg- justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          {/* product section */}
          <div className="rounded md:w-2/3 ">
            {cartItems.map((item, index) => {
              const { title, price, imageUrl, description } = item;
              return (
                <div
                  key={index}
                  className="justify-between mb-2  border-t border-b border-[#e4e4e4]  shadow-xl bg-white p-4  sm:flex  sm:justify-start"
                >
                  <img
                    src={imageUrl}
                    alt="product-image"
                    className="w-full h-[120px] object-contain sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900 ">
                        {title}
                      </h2>
                      <h2 className="text-sm  text-gray-900 ">{description}</h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700">
                        ${price}
                      </p>
                    </div>
                    <div
                      onClick={() => deleteCart(item)}
                      className="mt-4 flex justify-between  sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* checkout section  */}
          <div className="mt-6 h-full  border-l border-r border-[#e4e4e4] bg-white p-8 shadow md:mt-0 md:w-1/3">
            <p className="text-center uppercase mb-8 text-[25px] font-bold text-[#333333]">
              Cart Total
            </p>
            <div className="mb-6 flex justify-between">
              <p className="text-gray-700 captalized ">Subtotal</p>
              <p className="text-gray-700">${totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 capitalized">Shipping Charges</p>
              <p className="text-gray-700">${shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-semibold capitalized text-[#333333]">
                Total
              </p>
              <div className>
                <p className="mb-1 text-lg  text-gray-800">${grandTotal} </p>
              </div>
            </div>
            {/* <Modal  /> */}
            {/* <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
