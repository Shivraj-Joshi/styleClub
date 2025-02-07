import React from "react";
import Layout from "../../components/layout/Layout";
import Swal from "sweetalert2";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };
  return (
    <>
      <Layout>
        <div className="container flex flex-col items-center justify-center ">
          <h1 className="uppercase text-[30px] text-center mt-18">
            Feel free to contact us{" "}
          </h1>

          <div className="container bg-slate-200 p-4 flex flex-col md:flex-row items-center gap-2 border border-[#e4e4e4] justify-center ml-20 w-full h-[500px] mb-18">
            <div className="maps  py-6 px-4 h-[450px] w-full overflow-hidden ml-1.5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112336.358511045!2d77.31768287193773!3d28.37362392428674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738562112134!5m2!1sen!2sin"
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* form sumbimtion */}

            <div className="form h-[450px] w-full py-6 px-4 ">
              <form onSubmit={onSubmit} className="bg-white  px-8 px-4 py-6 ">
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 text-sm font-semi-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    required
                    placeholder="Enter your name"
                    className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semi-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    required
                    placeholder="Enter your email address"
                    className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-semi-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    placeholder="Enter your message"
                    required
                    className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    value="send"
                    className="border border-[#e4e4e4] hover:bg-[#717fe0] hover:scale-95 transition-all hover:duration-700 hover:text-white  text-black font-semi-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
