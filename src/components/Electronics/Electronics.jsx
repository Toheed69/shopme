import React from "react";
import Img1 from "../../assets/Electronics/mobile3.png";
import Img2 from "../../assets/Electronics/mobile4.png";
import Img3 from "../../assets/Electronics/mobile1.png";
import Img4 from "../../assets/Electronics/mobile2.png";
import Img5 from "../../assets/Electronics/tv1.png";
import Img6 from "../../assets/Electronics/tv.png";
import Img7 from "../../assets/Electronics/tv3.png";
import Img8 from "../../assets/Electronics/washing.png";
import Img9 from "../../assets/Electronics/watch1.png";
import Img10 from "../../assets/Electronics/watch2.png";
import Img11 from "../../assets/Electronics/watch3.png";
import { FaStar } from "react-icons/fa";

const ElectronicProduct = [
  {
    id: 1,
    img: Img1,
    title: "Iphone 16 Pro Max",
    description:
      "The ultimate smartphone experience with a sleek design and advanced features.",
  },
  {
    id: 2,
    img: Img2,
    title: "Iphone 16 Plus",
    description:
      "Experience top-tier performance and an immersive display.",
  },
  {
    id: 3,
    img: Img3,
    title: "OnePlus Nord 30",
    description:
      "Blazing-fast performance with an AI-powered camera.",
  },
  {
    id: 4,
    img: Img4,
    title: "Samsung S25 Ultra",
    description:
      "Unparalleled power and cutting-edge innovation.",
  },
  {
    id: 5,
    img: Img5,
    title: "Sumsung LED TV",
    description:
      "4K UHD smart TV with incredible picture quality.",
  },
  {
    id: 6,
    img: Img6,
    title: "HAIER LED TV",
    description:
      "Crystal-clear display with seamless connectivity.",
  },
  {
    id: 7,
    img: Img7,
    title: "Orient LED TV",
    description:
      "Bringing cinema to your home with stunning visuals.",
  },
  {
    id: 8,
    img: Img8,
    title: "Washing Machine",
    description:
      "Efficient and smart washing machine for hassle-free laundry",
  },
  {
    id: 9,
    img: Img9,
    title: "Ultra Smart Watch",
    description:
      "Stay connected and track your health on the go.",
  },
  {
    id: 10,
    img: Img10,
    title: "Samsung Smart Watch",
    description:
      "A fusion of style and functionality for your wrist.",
  },
  {
    id: 11,
    img: Img11,
    title: "Smart Watch ",
    description:
      "Your perfect fitness and lifestyle companion.",
  },
  {
    id: 2,
    img: Img2,
    title: "Iphone 16 Plus",
    description:
      "Experience top-tier performance and an immersive display.",
  },
];

const Electronics = ({ handleOrderPopup }) => {
  return (
    <div className="container mx-auto p-8 mt-12">
      {/* ✅ Page Header */}
      <div className="text-center mb-12">
        <p data-aos="fade-up" className="text-sm text-blue-600">
        ⭐ Top Rated Electronics ⭐
        </p>
        <h1 data-aos="fade-up" className="text-4xl font-bold text-White">
        Best Electronics for You
        </h1>
        <p data-aos="fade-up" className="text-sm text-gray-500 mt-2">
        Discover the latest and most advanced gadgets, designed for your convenience.
        </p>
      </div>

      {/* ✅ Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {ElectronicProduct.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-blue-600 hover:text-white shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 group max-w-[320px] p-6"
          >
            {/* ✅ Image Section */}
            <div className="h-[180px] flex justify-center items-center">
              <img
                src={data.img}
                alt={data.title}
                className="max-w-[160px] transform -translate-y-8 group-hover:scale-110 duration-300 drop-shadow-lg"
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
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm mt-2">
                {data.description}
              </p>

              {/* ✅ Order Now Button */}
              <button
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-2 px-5 rounded-full mt-4"
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

export default Electronics;
