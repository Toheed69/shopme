import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Toprated = ({ handleOrderPopup }) => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllData(json);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-xl font-semibold">
        {error}
      </div>
    );

  return (
    <div className="container mx-auto p-8 mt-16">
      {/* ✅ Page Header */}
      <div className="text-center mb-12">
        <h1 data-aos="fade-up" className="text-4xl font-bold">Best Products</h1>
        <p data-aos="fade-up" className="text-sm text-gray-500 mt-2">
          Discover the latest and greatest in  fashion.
        </p>
      </div>

      {/* ✅ Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
        {allData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300 group max-w-[300px] p-6"
          >
            {/* ✅ Image Section */}
            <div className="h-[180px] flex justify-center mt-14 items-center">
              <img
                src={data.image}
                alt={data.title}
                className="w-[100%] h-[100%] transform -translate-y-6 group-hover:scale-110 duration-300 drop-shadow-lg"
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
              <h1
                className="text-lg font-semibold cursor-pointer truncate"
                onClick={() => navigate("/top-rated/" + data.id)}
              >
                {data.title}
              </h1>

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

export default Toprated;
