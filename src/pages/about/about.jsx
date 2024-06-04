import React from 'react'

// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { Link } from 'react-router-dom';


import Card2 from '../../component/card2/card2';
import CardAbout from '../../component/cardAbout/cardAbout';

const About = () => {

    // transition
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <section className='pt-[100px]'>
                <div className='dark:bg-[#2c3a47] bg-[#f1f1f189] mb-[50px]' data-aos="fade-down" data-aos-duration="1300">
                    <div className='max-w-[1200px] m-[auto] flex items-center h-[190px] lg:p-[0_30px] mm:h-[150px]'>
                        <Link to={"/"}><a className='text-[28px] font-[Montserrat-Medium] dark:text-[#e2e2e2] text-[rgba(35,82,117,1)] mr-[10px] mm:text-[20px]' href="Главная">{t("page.main")}</a></Link>
                        <p className='text-[30px] font-[Montserrat-bold] dark:text-[#ff8c4e] text-[rgba(186,93,44,1)] mr-[10px] mm:text-[23px]'>/</p>
                        <Link><a className='text-[28px] font-[Montserrat-Medium] dark:text-[white] text-[rgba(35,82,117,1) text-[rgba(35,82,117,1)] mm:text-[20px]' href="O нас">{t("page.about")}</a></Link>
                    </div>
                </div>

                <div className='max-w-[1200px] m-[auto] lg:p-[0_30px]'>
                    {/* Заголовок */}
                    <h1 className='font-[Montserrat-bold]  lg:text-start text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]' data-aos="fade-up" data-aos-duration="1300">{t("about.title")}</h1>
                    {/* текст */}
                    <div className='mb-[40px]'>
                        <p className='max-w-[800px] lg:text-start lg:text-[14px] text-center m-[auto] dark:text-[white] text-[#192734] text-[15px] leading-[25px]' data-aos="fade-up" data-aos-duration="1300">{t("about.text")}</p>
                    </div>

                    {/* карточки */}
                    <div className='grid grid-cols-[repeat(4,142px)] gap-[20px] bg-[#f3f3f35d] backdrop-blur-sm dark:bg-[#1E293B] dark:bg-opacity-50 p-[40px_88px] rounded-[16px]  bg-opacity-90 mb-[70px] justify-between w:grid-cols-2 z:p-[30px_66px] mm:grid-cols-1 mm:gap-[30px] f:grid-cols-2' data-aos="fade-up" data-aos-duration="3000">
                        <Card2 title={t("about.card.title1")} text={t("about.card.text1")} />
                        <Card2 title={t("about.card.title2")} text={t("about.card.text2")} />
                        <Card2 title={t("about.card.title3")} text={t("about.card.text3")} />
                        <Card2 title={t("about.card.title4")} text={t("about.card.text4")} />
                    </div>


                    {/* карточки */}
                    <div className="container mx-auto p-6">
                        {/* Заголовок */}
                        <h1 className='font-[Montserrat-bold]  lg:text-start text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]' data-aos="fade-up" data-aos-duration="1300">{t("aboutCard.title")}</h1>
                        <div className="grid gap-20 grid-cols-3 j:grid-cols-2 m:grid-cols-1" data-aos="fade-up" data-aos-duration="1500">
                            <CardAbout name={t("aboutCard.card.title1")} position={t("aboutCard.card.position1")} description={t("aboutCard.card.text1")} />
                            <CardAbout name={t("aboutCard.card.title2")} position={t("aboutCard.card.position2")} description={t("aboutCard.card.text2")} />
                            <CardAbout name={t("aboutCard.card.title3")} position={t("aboutCard.card.position3")} description={t("aboutCard.card.text3")} />
                        </div>

                        {/* Заголовок */}
                        <h1 className='font-[Montserrat-bold] pt-[60px]  lg:text-start text-[#2d2e2f] text-[28px]  pb-[32px] dark:text-[white]' data-aos="fade-up" data-aos-duration="1300">{t("aboutCard.title")}</h1>
                        <p className='max-w-[800px] lg:text-start lg:text-[14px] dark:text-[white] text-[#192734] text-[15px] leading-[25px]' data-aos="fade-up" data-aos-duration="1300">{t("aboutCard.text")}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
