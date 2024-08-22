import React from "react";
import { NavLink } from "react-router-dom";
import Qongiroqcha from "../../assets/Qongiroqcha.svg";
import Savatcha from "../../assets/Savatcha.svg";
import Logotip from "../../assets/Logotip.svg";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className="bg-white border-b py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="text-lg font-semibold">
              {t("Hi")}
              <NavLink to="/login" className="text-blue-600 hover:underline">
                {t("Sign in")}
              </NavLink>
              {t("or")}
              <NavLink to="/login" className="text-blue-600 hover:underline">
                {t("Register")}
              </NavLink>
            </span>
          </div>

          <nav className="flex space-x-6">
            {["Daily Deals", "Brand Outlet", "Help & Contact"].map(
              (item, idx) => (
                <NavLink
                  key={idx}
                  to="#"
                  className="text-gray-600 hover:text-blue-600 hover:underline"
                >
                  {t(item)}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <select
              value={i18n.language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded px-3 py-1 text-gray-700"
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
            <NavLink to="#" className="text-gray-600 hover:text-blue-600">
              {t("Watchlist")}
            </NavLink>
            <NavLink to="#" className="text-gray-600 hover:text-blue-600">
              {t("My eBay")}
            </NavLink>
            <div className="flex space-x-2">
              <img src={Qongiroqcha} alt="Notifications" className="w-6 h-6" />
              <img src={Savatcha} alt="Cart" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 border-b">
        <div className="container mx-auto flex items-center">
          <NavLink to="/" className="mr-auto">
            <img src={Logotip} alt="Logo" className="w-48 md:w-52" />
          </NavLink>

          <div className="flex items-center space-x-4">
            <NavLink to="#" className="text-gray-600 hover:underline">
              {t("Shop by Category")}
            </NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <div className="flex items-center ml-auto space-x-4 w-full max-w-3xl">
            <input
              type="text"
              placeholder={t("Search for anything")}
              className="flex-grow py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
            />
            <select className="border-t border-b border-r border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-none rounded-r-lg">
              <option>{t("All Categories")}</option>
            </select>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-r-lg hover:bg-blue-700">
              {t("Search")}
            </button>
            <NavLink to="#" className="text-gray-400 hover:underline">
              {t("Advanced Search")}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
