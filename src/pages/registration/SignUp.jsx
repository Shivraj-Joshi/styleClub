import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useId, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (name === "" || email === "" || password === "") {
      return toast.error("fill fill all the fields");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("SigneUp Successfully");
      // console.log("user stored  in firestore");

      setName(""), setEmail(""), setPassword("");
    } catch (error) {
      console.log("firestore error:", error.message);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      this is SignUp page
      <div className="form h-[600px] w-[400px] py-6 px-4 bg-green-300 ">
        <div className="bg-white h-[450px] px-8 px-4 py-6 ">
          <div className="mb-4  ">
            <label
              htmlFor="Name"
              className="block text-gray-700 text-sm font-semi-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              required
              placeholder="Enter your Name"
              className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
              placeholder=" Password"
              className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <p className="mb-4">
            Already have account ?{" "}
            <NavLink to="/login">
              <span className="text-[#717fe0] hover:underline">Login</span>
            </NavLink>
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={signup}
              className="border border-[#e4e4e4] hover:bg-[#717fe0] hover:scale-95 transition-all hover:duration-700 hover:text-white  text-black font-semi-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
