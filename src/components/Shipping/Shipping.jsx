import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

const Shipping = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-6 py-4">
          {products.slice(24, 29).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-80"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  {product.title}
                </h2>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-semibold text-green-700">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="line-through text-red-600 ml-2 text-lg">
                      $
                      {(
                        product.price +
                        (product.discountPercentage / 100) * product.price
                      ).toFixed(2)}
                    </span>
                  )}
                </div>
                {product.discountPercentage > 0 && (
                  <div className="text-red-600 text-sm font-medium">
                    Promo Code:{" "}
                    <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded">
                      WHOLEHOME20
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shipping;
