import React from 'react'
// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark, Clusterer, ZoomControl, SearchControl } from '@pbe/react-yandex-maps';


// fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Card3 from '../../component/card3/card3';

const Contacts = () => {

    // transition
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }


    const markerStyle = {
        iconColor: '#ff0000',
        iconLayout: 'default#image',
        // iconImageHref: ,
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -32]
    };

    const placemarks = [
        {
            geometry: [38.563838, 68.757106],
            properties: {
                balloonContentHeader: "Softclub",
                balloonContentBody: "улица Рахими 12 ориентир: Профсоюз",
                balloonContentFooter: "Открыто до 21:00<br>+7(499)653-62-77"
            }
        },
        {
            geometry: [38.438679, 68.771488],
            properties: {
                balloonContentHeader: "Softclub",
                balloonContentBody: ""
            }
        }
    ];
    return (
        <>
            <section className='pt-[100px]'>
                <div className='dark:bg-[#2c3a47] bg-[#f1f1f189] mb-[50px]' data-aos="fade-down" data-aos-duration="1300">
                    <div className='max-w-[1200px] m-[auto] flex items-center h-[190px] lg:p-[0_30px] mm:h-[150px]'>
                        <Link to={"/"}><a className='text-[28px] font-[Montserrat-Medium] dark:text-[#e2e2e2] text-[rgba(35,82,117,1)] mr-[10px] mm:text-[20px]' href="Главная">{t("page.main")}</a></Link>
                        <p className='text-[30px] font-[Montserrat-bold] dark:text-[#ff8c4e] text-[rgba(186,93,44,1)] mr-[10px] mm:text-[23px]'>/</p>
                        <Link><a className='text-[28px] font-[Montserrat-Medium] dark:text-[white] text-[rgba(35,82,117,1)] mm:text-[20px]' href="контакты">{t("page.contacts")}</a></Link>
                    </div>
                </div>

                <div className='max-w-[1200px] m-[auto] mb-[70px] lg:p-[0_30px]'>
                    <div className='flex justify-between items-center mb-[50px] f:flex-col'>
                        {/* Заголовок */}
                        <div className='w-[50%] f:w-[100%]'>
                            <h1 className='font-[Montserrat-bold] text-[#2d2e2f] text-[40px] text-center mb-[42px] dark:text-[white] mm:text-[33px] mm:mb-[20px]' data-aos="fade-up" data-aos-duration="1500">{t("contacts.title")}</h1>
                        </div>
                        <div className='w-[50%] f:w-[100%]'>
                            <div className='rounded-[20px] overflow-hidden'>
                                <YMaps>
                                    <Map className='w-[1000px] h-[240px] rounded-[20px] overflow-hidden f:m-[auto]' defaultState={{ center: [38.563838, 68.757106], zoom: 9 }} >
                                        <ZoomControl options={{ float: 'right' }} />

                                        <Clusterer>
                                            {placemarks.map((placemark, index) => (
                                                <Placemark
                                                    key={index}
                                                    geometry={placemark.geometry}
                                                    properties={placemark.properties}
                                                    options={markerStyle}
                                                />
                                            ))}
                                        </Clusterer>
                                    </Map>
                                </YMaps>
                            </div>
                        </div>
                    </div>



                    {/* Карточки */}
                    <div className='grid grid-cols-3 gap-5 items-center w:grid-cols-[repeat(1,300px)] w:justify-center mm:grid-cols-[repeat(1,250px)] mm:justify-center w:gap-[25px]' data-aos="fade-up"
                        data-aos-duration="3000">
                        <Card3 title={t("contacts.card.title1")} text={t("contacts.card.text1")} icons={faLocationDot} />
                        <Card3 title={t("contacts.card.title2")} text={t("contacts.card.text2")} icons={faPhone} />
                        <Card3 title={t("contacts.card.title3")} text={t("contacts.card.text3")} icons={faEnvelope} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts
