import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Kids/kids6.png";
import Img2 from "../../assets/kids/kids7.png";
import Img3 from "../../assets/kids/kids5.png";
import { FaStar } from "react-icons/fa";

const KidsData = [
  {
    id: 1,
    img: Img1,
    title: "Kids Winter Jacket",
    description:
      "A warm and stylish jacket made with premium wool blend, perfect for winter outings.",
  },
  {
    id: 2,
    img: Img2,
    title: "Colorful Printed Shirt",
    description:
      "A vibrant and comfortable cotton shirt, designed for everyday fun and playtime",
  },
  {
    id: 3,
    img: Img3,
    title: "Soft Baby Upper",
    description:
      "Ultra-soft and cozy baby upper, crafted with organic fabric for delicate skin.",
  },
  {
    id: 4,
    img: Img2,
    title: "Trendy Printed Shirt",
    description:
      "A stylish printed shirt with a breathable fabric, keeping kids cool and fashionable",
  },
  {
    id: 5,
    img: Img3,
    title: "Formal Kids Suit",
    description:
      "A classy kids' suit, ideal for weddings, parties, and formal events.",
  },
  {
    id: 6,
    img: Img2,
    title: "Casual Summer Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    img: Img3,
    title: "Kids suit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    img: Img3,
    title: "Kids suit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Kids = ({ handleOrderPopup }) => {
  return (
    <div className="container mx-auto p-8 mt-16"> 
      
      {/* ✅ Page Header */}
      <div className="text-center mb-12">
        <p data-aos="fade-up" className="text-sm text-primary">
        🌟 Trendy Kids Collection 🌟
        </p>
        <h1 data-aos="fade-up" className="text-4xl font-bold">Best Products</h1>
        <p data-aos="fade-up" className="text-sm text-gray-500 mt-2">
          Discover the latest and greatest in kids' fashion.
        </p>
      </div>

      {/* ✅ Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
        {KidsData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 group max-w-[300px] p-6"
          >
            {/* ✅ Image Section */}
            <div className="h-[180px] flex justify-center items-center">
              <img
                src={data.img}
                alt={data.title}
                className="max-w-[180px] transform -translate-y-6 group-hover:scale-110 duration-300 drop-shadow-lg"
              />
            </div>

            {/* ✅ Details Section */}
            <div className="p-4 text-center">
              {/* ⭐ Star Rating */}
              <div className="w-full flex items-center justify-center gap-1 mb-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>

              {/* ✅ Product Title & Description */}
              <h1 className="text-lg font-semibold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-black duration-300 text-sm mt-2">
                {data.description}
              </p>

              {/* ✅ Order Now Button */}
              <button
                className="bg-primary hover:bg-secondary transition-all duration-300 text-white py-2 px-5 rounded-full mt-4"
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;
