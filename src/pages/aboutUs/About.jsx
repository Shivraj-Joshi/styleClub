import React from "react";
import Layout from "../../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto  px-6 py-12">
        <h1 className="text-6xl border-b-2 border-[#e4e4e4] font-bold text-center mt-14 mb-10 py-2 text-black mb-8">
          About Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/8387126/pexels-photo-8387126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-b-2 border-[#717fe0] text-black">
              Who We Are
            </h2>
            <p className="text-gray-600 mt-4">
              Welcome to our eCommerce platform, where we strive to bring you
              the best products at unbeatable prices. Our goal is to make online
              shopping simple, secure, and convenient for everyone.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <div>
            <h2 className="text-2xl font-semibold border-b-2 border-[#717fe0] text-black">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4">
              We are committed to providing a seamless shopping experience with
              top-quality products, fast shipping, and excellent customer
              service. Your satisfaction is our priority.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/7163957/pexels-photo-7163957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <div>
            <img
              src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-black border-b-2 border-[#717fe0]">
              Why Choose Us?
            </h2>
            <ul className="text-gray-600 mt-4 list-disc pl-5">
              <li>High-quality products at affordable prices</li>
              <li>Secure and fast checkout process</li>
              <li>Reliable customer support</li>
              <li>Fast and hassle-free delivery</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-black text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              "Personalized shopping recommendations",
              "24/7 customer support",
              "Easy returns and refunds",
              "Exclusive deals and discounts",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-md text-center"
              >
                <p className="text-gray-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl  font-semibold text-black text-center">
            Customer Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                text: "Amazing experience! Fast delivery and great products. Highly recommended!",
                name: "John Doe",
              },
              {
                text: "Best online shopping platform! Great prices and excellent customer service.",
                name: "Jane Smith",
              },
              {
                text: "Best online shopping platform! Great prices and excellent customer service.",
                name: "Jane Smith",
              },
              {
                text: "Best online shopping platform! Great prices and excellent customer service.",
                name: "Jane Smith",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6  hover:shadow-md text-center"
              >
                <p className="text-gray-700 ">"{testimonial.text}"</p>
                <h3 className="text-gray-800 font-semibold mt-4">
                  - {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
