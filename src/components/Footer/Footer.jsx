import React from "react";
import Feyzbuk from "../../assets/Feyzbuk.svg";
import Twiter from "../../assets/Twiter.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 text-gray-500 cursor-pointer my-8">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">
            {t("footer_buy")}
          </h2>
          <FooterItem>{t("footer_registration")}</FooterItem>
          <FooterItem>{t("footer_money_back_guarantee")}</FooterItem>
          <FooterItem>{t("footer_bidding_help")}</FooterItem>
          <FooterItem>{t("footer_stores")}</FooterItem>
          <FooterItem>{t("footer_ebay_charity")}</FooterItem>
          <FooterItem>{t("footer_charity_shop")}</FooterItem>
          <FooterItem>{t("footer_sales_events")}</FooterItem>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">
            {t("footer_sell")}
          </h2>
          <FooterItem>{t("footer_selling_on_ebay")}</FooterItem>
          <FooterItem>{t("footer_start_ad")}</FooterItem>
          <FooterItem>{t("footer_ad_center")}</FooterItem>
          <FooterItem>{t("footer_ad_format")}</FooterItem>
          <FooterItem>{t("footer_reserve_price")}</FooterItem>
          <FooterItem>{t("footer_find_reseller")}</FooterItem>

          <h3 className="text-lg font-semibold mb-2 hover:text-blue-400">
            {t("footer_tools_apps")}
          </h3>
          <FooterItem>{t("footer_developers")}</FooterItem>
          <FooterItem>{t("footer_security_center")}</FooterItem>
          <FooterItem>{t("footer_amazon_appstore")}</FooterItem>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">
            {t("footer_stay_connected")}
          </h2>
          <SocialMediaLink
            imgSrc={Feyzbuk}
            altText="Facebook"
            text="Facebook"
          />
          <SocialMediaLink imgSrc={Twiter} altText="Twitter" text="Twitter" />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">
            {t("footer_about_ebay")}
          </h2>
          <FooterItem>{t("footer_newsroom")}</FooterItem>
          <FooterItem>{t("footer_investors")}</FooterItem>
          <FooterItem>{t("footer_corporate_info")}</FooterItem>
          <FooterItem>{t("footer_mobile")}</FooterItem>
          <FooterItem>{t("footer_jobs")}</FooterItem>
          <FooterItem>{t("footer_investor_relations")}</FooterItem>
          <FooterItem>{t("footer_accessibility")}</FooterItem>
          <FooterItem>{t("footer_supply_chain_act")}</FooterItem>
          <FooterItem>{t("footer_suppliers")}</FooterItem>
          <FooterItem>{t("footer_corporate_responsibility")}</FooterItem>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">
            {t("footer_help_contact")}
          </h2>
          <FooterItem>{t("footer_help")}</FooterItem>
          <FooterItem>{t("footer_customer_service")}</FooterItem>
          <FooterItem>{t("footer_shipping_returns")}</FooterItem>
          <FooterItem>{t("footer_payment_options")}</FooterItem>

          <h3 className="text-lg font-semibold mt-4 hover:text-blue-400">
            {t("footer_faqs")}
          </h3>
          <FooterItem>{t("footer_find_store")}</FooterItem>
          <FooterItem>{t("footer_amazon_assistant")}</FooterItem>
          <FooterItem>{t("footer_amazon_business")}</FooterItem>
          <FooterItem>{t("footer_amazon_web_services")}</FooterItem>
          <FooterItem>{t("footer_gift_cards")}</FooterItem>
          <FooterItem>{t("footer_corrections")}</FooterItem>

          <h3 className="text-lg font-semibold mt-4 hover:text-blue-400">
            {t("footer_ebay_sites")}
          </h3>
        </div>
      </div>

      <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400 hover:text-gray-200">
          {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
};

const FooterItem = ({ children }) => (
  <p className="mb-2 hover:text-gray-300">{children}</p>
);

const SocialMediaLink = ({ imgSrc, altText, text }) => (
  <div className="flex items-center mb-4 hover:text-gray-300">
    <img src={imgSrc} alt={altText} className="w-6 h-6 mr-2" />
    <p>{text}</p>
  </div>
);

export default Footer;
