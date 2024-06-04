// src/App.js
import React from 'react';
import DonationForm from '../../component/donateForm/donateForm';
import Cards from '../../component/card/card';

// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

const Donate = () => {
    // transition
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="pt-[150px]">
            <main className="max-w-[1200px] m-[auto] lg:p-[0_30px]">
                <Cards />
                <div className='flex items-center pt-[40px] sm:flex-col mm:flex-col g:flex-col mb-[100px]' data-aos="fade-up" data-aos-duration="1100">
                    <div className='w-[50%] sm:w-[100%] mm:w-[100%] g:w-[100%]'>
                        <DonationForm />
                    </div>
                    <div className="mt-8 w-[50%] flex justify-end sm:w-[100%] mm:w-[100%] g:w-[100%]">
                        <div className='w-[90%] sm:w-[100%] sm:mb-[70px] mm:w-[100%] g:w-[100%] g:text-center mm:mb-[70px]'>
                            <h2 className="font-[Montserrat-medium] text-[17px] text-[#192734] dark:text-[white]">{t("donate.phoneDonation.title")}</h2>
                            <p className="text-[15px] text-[#192734] dark:text-[white]">{t("donate.phoneDonation.description")} <br /> <span className="font-[Montserrat-bold] text-[16px]">123-456-7890</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <p></p>
                </div>
            </main>
        </div>
    );
};

export default Donate;
