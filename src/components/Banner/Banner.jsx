import React from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const links = [
    { key: "home", text: t("home") },
    {
      key: "saved",
      text: t("saved"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1 text-gray-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    { key: "motors", text: t("motors") },
    { key: "electronics", text: t("electronics") },
    { key: "collectibles", text: t("collectibles") },
    { key: "home_garden", text: t("home_garden") },
    { key: "fashion", text: t("fashion") },
    { key: "toys", text: t("toys") },
    { key: "sporting_goods", text: t("sporting_goods") },
    { key: "business_industrial", text: t("business_industrial") },
    { key: "jewelry_watches", text: t("jewelry_watches") },
    { key: "ebay_live", text: t("ebay_live") },
    { key: "refurbished", text: t("refurbished") },
  ];

  return (
    <div className="bg-gray-100 p-4 border-b border-gray-300">
      <div className="container mx-auto flex items-center">
        <a
          href="#"
          className="text-gray-800 hover:text-blue-600 font-semibold text-lg"
        >
          {t("home")}
        </a>

        <div className="ml-6 flex flex-wrap gap-4">
          {links.map(({ key, text, icon }) => (
            <a
              key={key}
              href="#"
              className="text-gray-600 hover:text-blue-600 flex items-center text-sm font-medium"
            >
              {icon && <span className="mr-1">{icon}</span>}
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
