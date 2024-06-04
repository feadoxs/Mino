import React from 'react'


// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { Link } from 'react-router-dom';

// fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon, faBurger, faDrumstickBite, faIceCream, faMugSaucer, faPizzaSlice, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Card2 from '../../component/card2/card2';
import Card1 from '../../component/card1/card1';
import FeatureCard from '../../component/featureCard/featureCard';
import { FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Catalog = () => {

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
                        <Link><a className='text-[28px] font-[Montserrat-Medium] dark:text-[white] text-[rgba(35,82,117,1)] mm:text-[20px]' href="каталог">{t("page.category")}</a></Link>
                    </div>
                </div>

                <div className='max-w-[1200px] m-[auto] mb-[70px] lg:p-[0_30px]'>
                    {/* Заголовок */}
                    <h1 className='font-[Montserrat-bold] text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]' data-aos="fade-up" data-aos-duration="1300">{t("section1.title")}</h1>
                    {/* Карточки */}
                    <div className='grid grid-cols-4 gap-[30px] mb-[62px] md:grid-cols-2 mm:grid-cols-1 sm:grid-cols-2 l:grid-cols-3' data-aos="fade-up" data-aos-duration="1300">
                        <Link to={"/турецкая"}><Card1 title={t("section1.box.card1")} icons={faMugSaucer} /></Link>
                        <Link to={"/национальная"}><Card1 title={t("section1.box.card2")} icons={faUtensils} /></Link>
                        <Link to={"/бургеры"}><Card1 title={t("section1.box.card3")} icons={faBurger} /></Link>
                        <Link to={"/плов"}><Card1 title={t("section1.box.card4")} icons={faUtensils} /></Link>
                        <Link to={"/пицца"}><Card1 title={t("section1.box.card5")} icons={faPizzaSlice} /></Link>
                        <Link to={"/стейки"}><Card1 title={t("section1.box.card6")} icons={faDrumstickBite} /></Link>
                        <Link to={"/десерты"}><Card1 title={t("section1.box.card7")} icons={faIceCream} /></Link>
                        <Link to={"/суши"}><Card1 title={t("section1.box.card8")} icons={faBacon} /></Link>
                    </div>


                    {/* Заголовок */}
                    <h1 className='font-[Montserrat-bold] text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]' data-aos="fade-up" data-aos-duration="1300">{t("category.title")}</h1>
                    {/* карточки */}
                    <div className="grid grid-cols-3 gap-[20px] j:grid-cols-2 m:grid-cols-1 m:gap-[40px] j:gap-[30px]" data-aos="fade-up" data-aos-duration="1500">
                        <FeatureCard
                            title={t("category.card.title1")}
                            description={t("category.card.text1")}
                            icon={<FaRocket size={32} />}
                        />
                        <FeatureCard
                            title={t("category.card.title2")}
                            description={t("category.card.text2")}
                            icon={<FaUsers size={32} />}
                        />
                        <FeatureCard
                            title={t("category.card.title3")}
                            description={t("category.card.text3")}
                            icon={<FaShieldAlt size={32} />}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catalog

