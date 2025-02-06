import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully", {
        position: "bottom-right",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error("sign in failed. please check your credentials", {
        position: "bottom-right",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <Layout>
      <div className="container flex  items-center  mb-10  justify-center">
        <div className="form h-[550px] w-[400px] mt-20 bg-slate-100 py-5 px-4 hover:shadow-md ">
          <h1 className="text-center text-[#717fe0] text-[25px] mb-4 font-semibold uppercase">
            Login to continue
          </h1>
          <div className="bg-white h-[450px] px-8 px-4 py-6 ">
            <div className="mb-4  ">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semi-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
                placeholder="Enter your email address"
                className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semi-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
                placeholder="Enter your Password"
                className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <p className="mb-4">
              Don't have account ?{" "}
              <NavLink to="/signUp">
                <span className="text-[#717fe0] hover:underline">SignUp</span>
              </NavLink>
            </p>

            <div className="flex items-center justify-center">
              <button
                onClick={login}
                className="border border-[#e4e4e4] cursor-pointer hover:bg-[#717fe0] hover:scale-95 transition-all hover:duration-700 hover:text-white mt-10 text-black font-semi-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
