import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Brand from "../assets/Brand.png";
import "./Collection.css";

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="collection-container p-8">
      <div className="promo-banner mb-10 rounded-lg overflow-hidden shadow-xl">
        <img
          src={Brand}
          alt="Brand Promotion"
          className="w-full h-auto object-cover"
        />
        <div className="promo-content p-6 bg-white">
          <h2 className="promo-title text-4xl font-extrabold mb-4 text-gray-900">
            Up to 60% off Apple tech
          </h2>
          <p className="promo-description text-lg text-gray-700">
            Save on AirPods, iPhones, and more.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link to={`/single/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="product-title text-2xl font-bold mb-2 text-gray-900">
                {product.title}
              </h3>
              <p className="product-description text-base text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="product-pricing flex items-center mb-4">
                <p className="product-price text-xl font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                <p className="product-original-price text-sm text-gray-500 line-through ml-3">
                  ${(product.price * 1.2).toFixed(2)}
                </p>
                <p className="product-discount text-sm text-red-600 ml-3">
                  {Math.floor(product.discountPercentage)}% OFF
                </p>
              </div>
              <p className="product-category text-sm text-green-600 font-medium mb-4">
                {product.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
