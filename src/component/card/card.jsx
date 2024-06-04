// src/Cards.js
import React from 'react';
// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';



const Card = ({ title, description }) => (
    <div className="card2 bg-white rounded-md dark:bg-[#1E293B] dark:bg-opacity-50">
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-[#c9c9c9]">{description}</p>
        </div>
    </div>
);


const Cards = () => {
    // transition
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }
    return (
        <div className="grid grid-cols-3 gap-[30px] mb-[40px] ml:grid-cols-2 mv:grid-cols-1" data-aos="fade-down" data-aos-duration="1100">
            <Card title={t("donate.cards.title1")} description={t("donate.cards.description1")} />
            <Card title={t("donate.cards.title2")} description={t("donate.cards.description2")} />
            <Card title={t("donate.cards.title3")} description={t("donate.cards.description3")} />

        </div>
    );
};

export default Cards;
