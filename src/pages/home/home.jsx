import React, { useEffect, useMemo } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import SearchIcon from '../../assets/icons/search.svg';

// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { Link } from 'react-router-dom';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa';

// swiper styles
import 'swiper/css';
import Card1 from '../../component/card1/card1';
import Card2 from '../../component/card2/card2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon, faBurger, faDrumstickBite, faIceCream, faMugSaucer, faPizzaSlice, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faMaxcdn, faPaypal, faShopify, faSquarespace, faStaylinked, faStubber, faWebflow, faWpressr, faYoast } from '@fortawesome/free-brands-svg-icons';
import FeatureCard from '../../component/featureCard/featureCard';

const Home = () => {
    // transition
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            {/* Заголок сайта */}
            <header>
                {/* Секция */}
                < section className='absolute top-0 w-[100%] h-[600px] sm:h-[500px]'>
                    <Swiper
                        direction={'vertical'}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper duration-[0.50s]"
                    >
                        <SwiperSlide className='first-slide flex'>
                            <div className='w-[100%]'>
                                <div className='max-w-[1200px] m-[auto] flex justify-start text-start lg:p-[0_30px]'>
                                    <div>
                                        <h1 className='font-[Montserrat-bold] text-[48px] text-start w-[480px] mb-[15px] b:text-[35px] b:w-[350px] mm:text-[20px] mm:w-[250px]'>{t("header.section.title")}</h1>
                                        <a href="#restorans"><button className='bg-[#e00707] hover:duration-[0.30s] hover:bg-[rgb(255,67,67)] p-[0_20px] h-[48px] card1 rounded-[4px] text-[white] font-[Montserrat-medium] mr-[20px] text-[16px] flex items-center mm:text-[13px] mm:h-[38px] mm:p-[0_15px]'><div className='mm:w-[25px]'><img className='mr-[3px]' src={SearchIcon} alt="" /></div>{t("header.section.text")}</button></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='second-slide flex'>
                            <div className='w-[100%]'>
                                <div className='max-w-[1200px] m-[auto] flex justify-start text-start lg:p-[0_30px]'>
                                    <div>
                                        <h1 className='font-[Montserrat-bold] text-[48px] text-start w-[480px] mb-[15px] textShadow text-[white] b:text-[35px] b:w-[350px] mm:text-[20px] mm:w-[250px]'>{t("header.section.title")}</h1>
                                        <a href="#restorans"><button className='bg-[#e00707] hover:duration-[0.30s] hover:bg-[rgb(255,67,67)] p-[0_20px] h-[48px] rounded-[4px]  card1 text-[white] font-[Montserrat-medium] mr-[20px] text-[16px] flex items-center mm:text-[13px] mm:h-[38px] mm:p-[0_15px]'><div className='mm:w-[25px]'><img className='mr-[3px]' src={SearchIcon} alt="" /></div>{t("header.section.text")}</button></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='third-slide flex'>
                            <div className='w-[100%]'>
                                <div className='max-w-[1200px] m-[auto] flex justify-start text-start lg:p-[0_30px]'>
                                    <div>
                                        <h1 className='font-[Montserrat-bold] text-[48px] text-start w-[480px] mb-[15px] b:text-[35px] textShadow text-[white] b:w-[350px] mm:text-[20px] mm:w-[250px]'>{t("header.section.title")}</h1>
                                        <a href="#restorans"><button className='bg-[#e00707] hover:duration-[0.30s] hover:bg-[rgb(255,67,67)] p-[0_20px] h-[48px] card1 rounded-[4px] text-[white] font-[Montserrat-medium] mr-[20px] text-[16px] flex items-center mm:text-[13px] mm:h-[38px] mm:p-[0_15px]'><div className='mm:w-[25px]'><img className='mr-[3px]' src={SearchIcon} alt="" /></div>{t("header.section.text")}</button></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='fourth-slide flex'>
                            <div className='w-[100%]'>
                                <div className='max-w-[1200px] m-[auto] flex justify-start text-start lg:p-[0_30px]'>
                                    <div>
                                        <h1 className='font-[Montserrat-bold] text-[48px] text-start w-[480px] mb-[15px] textShadow text-[white] b:text-[35px] b:w-[350px] mm:text-[20px] mm:w-[250px]'>{t("header.section.title")}</h1>
                                        <a href="#restorans"><button className='bg-[#e00707] hover:duration-[0.30s] hover:bg-[rgb(255,67,67)] p-[0_20px] h-[48px] card1 rounded-[4px] text-[white] font-[Montserrat-medium] mr-[20px] text-[16px] flex items-center mm:text-[13px] mm:h-[38px] mm:p-[0_15px]'><div className='mm:w-[25px]'><img className='mr-[3px]' src={SearchIcon} alt="" /></div>{t("header.section.text")}</button></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section >
            </header >


            {/* Первая секция */}
            < section className='pt-[700px] sm:pt-[570px]' data-aos="fade-up" data-aos-duration="3000">
                <div className='max-w-[1200px] m-[auto] lg:p-[0_30px]' id="restorans">
                    {/* Заголовок */}
                    <h1 className='font-[Montserrat-bold] text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]'>{t("section1.title")}</h1>
                    {/* Карточки */}
                    <div className='grid grid-cols-4 gap-[30px] mb-[70px] md:grid-cols-2 mm:grid-cols-1 sm:grid-cols-2 l:grid-cols-3'>
                        <Link to={"/турецкая"}><Card1 title={t("section1.box.card1")} icons={faMugSaucer} /></Link>
                        <Link to={"/национальная"}><Card1 title={t("section1.box.card2")} icons={faUtensils} /></Link>
                        <Link to={"/бургеры"}><Card1 title={t("section1.box.card3")} icons={faBurger} /></Link>
                        <Link to={"/плов"}><Card1 title={t("section1.box.card4")} icons={faUtensils} /></Link>
                        <Link to={"/пицца"}><Card1 title={t("section1.box.card5")} icons={faPizzaSlice} /></Link>
                        <Link to={"/стейки"}><Card1 title={t("section1.box.card6")} icons={faDrumstickBite} /></Link>
                        <Link to={"/десерты"}><Card1 title={t("section1.box.card7")} icons={faIceCream} /></Link>
                        <Link to={"/суши"}><Card1 title={t("section1.box.card8")} icons={faBacon} /></Link>
                    </div>

                    <div className='mb-[100px]'>
                        {/* Заголовок */}
                        <h1 className='font-[Montserrat-bold] text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]' data-aos="fade-down" data-aos-duration="1500">{t("home.title")}</h1>
                        {/* карточки */}
                        <div className='grid grid-cols-[repeat(4,142px)] gap-[20px] bg-[#f3f3f35d] backdrop-blur-sm dark:bg-[#1E293B] dark:bg-opacity-50 p-[40px_88px] rounded-[16px]  bg-opacity-90 mb-[70px] justify-between w:grid-cols-2 z:p-[30px_66px] mm:grid-cols-1 mm:gap-[30px] f:grid-cols-2' data-aos="fade-up" data-aos-duration="3000">
                            <Card2 title={t("about.card.title1")} text={t("about.card.text1")} />
                            <Card2 title={t("about.card.title2")} text={t("about.card.text2")} />
                            <Card2 title={t("about.card.title3")} text={t("about.card.text3")} />
                            <Card2 title={t("about.card.title4")} text={t("about.card.text4")} />
                        </div>
                    </div>

                    <div className='mb-[90px]'>
                        {/* Заголовок */}
                        <h1 className='font-[Montserrat-bold] text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]' data-aos="fade-down" data-aos-duration="1500">{t("home.titleMap")}</h1>
                        <marquee class="h-[150px] bg-[#f3f3f35d] backdrop-blur-sm dark:bg-[#1E293B] dark:bg-opacity-50  rounded-[10px] p-[0_10px]" data-aos="fade-up" data-aos-duration="3000"
                            direction="right"
                            behavior="alternate"
                            scrollamount=""
                            scrolldelay=""
                            onmouseover=""
                        >
                            <div className='grid grid-cols-10 justify-center items-center h-[150px]'>
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faPaypal} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faShopify} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faBehance} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faYoast} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faStubber} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faMaxcdn} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faWebflow} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faSquarespace} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' icon={faWpressr} />
                                <FontAwesomeIcon className='text-[60px] text-[#192734] dark:text-[white]' F icon={faStaylinked} />
                            </div>
                        </marquee>
                    </div>

                    {/* Заголовок */}
                    <h1 className='font-[Montserrat-bold] text-[#2d2e2f] text-[28px] text-center pb-[32px] dark:text-[white]' data-aos="fade-up" data-aos-duration="1300">{t("category.title")}</h1>
                    {/* карточки */}
                    <div className="grid grid-cols-3 gap-[30px] j:grid-cols-2 m:grid-cols-1 m:gap-[40px] j:gap-[30px] mb-[80px]" data-aos="fade-up" data-aos-duration="1500">
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
            </section >
        </>
    )
}

export default Home
