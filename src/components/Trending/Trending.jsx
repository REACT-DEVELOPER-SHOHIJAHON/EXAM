import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Phone1 from "../../assets/Phone1.png";
import Phone2 from "../../assets/Phone2.png";
import Logo from "../../assets/Logo.svg";
import "../Trending/trending.css";

const Trending = () => {
  const { t } = useTranslation();

  return (
    <section className="trending-container p-8 bg-gray-50">
      <div className="trending-top flex flex-col md:flex-row items-center border-t border-gray-200 py-6">
        <div className="trending-description md:w-1/3 p-4 text-center md:text-left">
          <div className="text-xs md:text-sm text-gray-500 mb-2 uppercase tracking-wide">
            {t("featured")}
          </div>
          <img
            src={Logo}
            alt="Ebay Logo"
            className="w-24 mx-auto md:mx-0 mb-4"
          />
          <div className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            {t("deals_made_easy")}
          </div>
          <div className="text-gray-700 mb-4 text-lg">
            {t("free_shipping_prices")}
          </div>
          <button className="btn-primary flex items-center justify-center">
            {t("get_your_thing")}
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>

        <div className="trending-phone-1 md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg object-contain rounded-lg shadow-lg"
            src={Phone1}
            alt="Phone 1"
          />
        </div>

        <div className="trending-phone-2 md:w-1/3 flex justify-center items-center">
          <img
            className="w-full max-w-sm object-contain rounded-lg shadow-lg"
            src={Phone2}
            alt="Phone 2"
          />
        </div>
      </div>

      <div className="trending-bottom mt-12 flex justify-between items-center">
        <p className="text-2xl md:text-3xl font-bold text-gray-800">
          {t("todays_deals")}
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

export default Trending;
