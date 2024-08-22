import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./category.css";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data.slice(20, 23));
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="flex p-8 bg-orange-300">
      <div className="w-1/3 p-8 my-5 font-sans">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {t("super_savings")}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{t("discount")}</p>
        <button className="bg-blue-600 text-white px-8 py-2 flex items-center rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
          {t("shop_now")}
          <AiOutlineArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 text-white" />
        </button>
      </div>

      <div className="flex w-2/3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => (
  <div className="flex flex-col items-center bg-white p-4 w-1/3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
      {product.title}
      <AiOutlineArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 text-gray-600" />
    </h3>
    <img
      src={product.images[0]}
      alt={product.title}
      className="h-45 w-45 object-contain mb-4 rounded-md"
    />
  </div>
);

export default Category;
