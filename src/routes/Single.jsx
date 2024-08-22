import React from "react";
import { useParams } from "react-router-dom";
import { useFitch } from "../hooks/useFitch";
import { Link } from "react-router-dom";
import { FaHeart, FaCartPlus, FaDollarSign } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  const product = useFitch(`https://dummyjson.com/products/${id}`);

  if (!product) {
    return <p className="text-center text-gray-600">Not found.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-8 bg-gray-100">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-12 p-12">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="relative">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[90vh] object-cover rounded-lg shadow-2xl transform scale-105 transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <FaHeart size={24} className="text-red-500" />
              </div>
            </div>
          </div>

          <div className="flex-grow w-full md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 flex items-center">
              {product.title}
              <span className="ml-3 text-yellow-500">
                <FaDollarSign size={28} />
              </span>
            </h1>

            <p className="text-lg font-semibold text-gray-800 mb-3">
              <span className="font-medium">Category:</span> {product.category}
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-3">
              <span className="font-medium">Brand:</span> {product.brand}
            </p>
            <p className="text-3xl font-bold text-green-700 mb-6">
              ${product.price}
            </p>
            <p className="text-gray-800 mb-8">{product.description}</p>

            <div className="flex flex-col gap-5">
              <Link to="/Login">
                <button className="w-full h-14 px-6 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 text-lg font-semibold flex items-center justify-center">
                  Buy Now
                  <span className="ml-3">
                    <FaDollarSign size={20} />
                  </span>
                </button>
              </Link>
              <button className="w-full h-14 px-6 bg-yellow-600 text-white rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 text-lg font-semibold flex items-center justify-center">
                Add to Cart
                <span className="ml-3">
                  <FaCartPlus size={20} />
                </span>
              </button>
              <button className="w-full h-14 px-6 bg-gray-200 text-gray-800 border border-gray-400 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 text-lg font-semibold flex items-center justify-center">
                Add to Wishlist
                <span className="ml-3">
                  <FaHeart size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
