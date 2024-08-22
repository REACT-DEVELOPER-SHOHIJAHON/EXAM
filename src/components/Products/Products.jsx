import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Products/Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products.slice(20, 24));
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="p-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-56 w-56 object-contain mb-4 rounded-lg border border-gray-200"
            />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {product.title}
            </h3>
            <p className="text-lg font-medium text-gray-600">
              ${product.price}
            </p>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-8 flex justify-between items-center">
        <p className="text-2xl font-semibold text-gray-800">
          {t("score_trending_kicks")}
        </p>
        <Link
          to="/Collection"
          className="flex items-center text-blue-600 hover:underline transition-transform duration-300 transform hover:scale-105"
        >
          {t("see_all")}
          <AiOutlineArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </section>
  );
};

export default Products;
