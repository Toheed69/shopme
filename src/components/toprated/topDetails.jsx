import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KidsDetail = () => {
  const [data, setAllData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAllData(json);
      })
      .catch(() => {
        setError("Something went wrong! Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // ✅ Loading State
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
      </div>
    );

  // ✅ Error State
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-xl font-semibold">
        {error}
      </div>
    );

  return (
    <div className="container mx-auto p-8">
      {/* ✅ Product Details Card */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* ✅ Product Image */}
        <div className="flex justify-center bg-gray-100 dark:bg-gray-700 p-6">
          <img
            src={data.image}
            alt={data.title}
            className="max-w-[200px] md:max-w-[300px] object-contain"
          />
        </div>

        {/* ✅ Product Details */}
        <div className="p-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">{data.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-md mt-2">{data.description}</p>

        
          <button className="mt-5 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-2 px-6 rounded-full shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidsDetail;
