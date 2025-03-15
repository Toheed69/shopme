import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const Menproduct = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Formal Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Img1,
    title: "Office Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Img2,
    title: "Casual Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Party Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const MenProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container mx-auto p-8 mt-12">
      
      <div className="text-center mb-12">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated Products for You
        </p>
        <h1 data-aos="fade-up" className="text-4xl font-bold text-primary">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-sm text-gray-500 mt-2">
          Explore our latest collection of men's fashion.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {Menproduct.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 group max-w-[320px] p-6"
          >
           
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

              
              <h1 className="text-lg font-semibold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm mt-2">
                {data.description}
              </p>

              
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

export default MenProducts;
