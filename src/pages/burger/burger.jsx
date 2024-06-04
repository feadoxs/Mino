import React, { Suspense, useEffect, useState } from 'react';
// logo
import merve from '../../assets/images/Merve.jpg';

// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { faBan, faBookmark, faCircleExclamation, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartTodoMutation, useGetTodoBQuery, useGetTodoQuery } from '../../api/todoApi';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';


// float button
import { FloatButton } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Space, Drawer } from "antd";

const Burger = () => {
    let search = useSelector((state) => state.todo.search);
    let [test, setTest] = useState("")
    let dispatch = useDispatch()

    let [post] = useCartTodoMutation()

    let user = JSON.parse(localStorage.getItem('user')) || []
    // translation
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }


    const [openDrawer, setOpenDrawer] = useState(false);
    const showDrawer = () => {
        setOpenDrawer(true);
    };
    const onClose = () => {
        setOpenDrawer(false);
    };

    const { data: burger, error, isLoading } = useGetTodoBQuery();

    if (isLoading) return <div className='w-[100%] pt-[100px] h-[300px] flex items-center justify-center'>
        <div className='loader hidden dark:block'></div>
        <div className='loader-light dark:hidden'></div>
    </div>;
    if (error) return <div className='w-[100%] pt-[100px] h-[300px] flex items-center justify-center'>
        <div className='text-center'>
            <FontAwesomeIcon className='text-[50px] mb-[10px] dark:text-[white] text-[#192734]' icon={faCircleExclamation} />
            <h1 className='text-[20px] text-[#192734] dark:text-[white]'>{t("error.error")}</h1>
        </div>
        <p className='text-[#192734]'>{error.message}</p>
    </div>;

    return (
        <>
            {/* Section */}
            <section className='pt-[140px]'>
                <div className='max-w-[1200px] m-[auto] lg:p-[0_30px]'>
                    <p className='text-[#6e7072] font-[Montserrat-medium] tracking-[1.5] text-[15px] dark:text-[#b7b7b7]' data-aos="fade-down" data-aos-duration="1500">{t("burger.city")}</p>
                    <h1 className='text-[#2d2e2f] font-[Montserrat-bold] dark:text-[white] text-[26px] mt-[8px] mb-[40px]' data-aos="fade-down" data-aos-duration="1500">{t("burger.title")}</h1>

                    <div className='d:justify-center e:justify-center mb-[30px]'>
                        {burger?.filter(el => {
                            return el.name.toLowerCase().trim().includes(search.toLowerCase().trim());
                        })
                            .map(el => {
                                return (

                                    <div className='p-[24px] card1 w-[730px] dark:border-hidden dark:rounded-[5px] flex justify-between mb-[30px] dark:bg-opacity-50 dark:bg-[#1E293B] border-b d:flex-col d:w-[400px] e:flex-col d:m-[auto] d:mb-[30px] e:w-[400px] e:m-[auto] e:mb-[30px] y:w-[280px] y:m-[auto] y:flex-col y:mb-[30px]' key={el.id}>
                                        {/* img */}
                                        <div className='w-[35%] mr-[25px] d:w-[100%] d:h-[280px] d:mb-[20px] e:mb-[20px] e:w-[100%] e:h-[270px] y:w-[100%] y:h-[250px] y:mb-[20px]' key={el.id}>

                                            <Swiper navigation={true} modules={[Autoplay, Navigation]} autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                                className="mySwiper">

                                                {el.images.map(image => (
                                                    <SwiperSlide key={image.id}>
                                                        <img className='w-[200px] rounded-[4px]' src={image.imageName} alt="" />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                        {/* text */}
                                        <div className='w-[65%] z:w-[100%]'>
                                            <div className='flex justify-between y:flex-col'>
                                                <a href=""><h2 className='text-[#2d2e2f] dark:text-[#fff] font-[Montserrat-semiBold] text-[20px]  y:text-start e:text-start'>{el.name}</h2></a>
                                                <div className='text-end y:text-start y:mb-[20px]'>
                                                    <p className='text-[#6e7072] text-[12px] dark:text-[#d6d6d6]'>{el.adress}</p>
                                                    <p className='text-[#6e7072] text-[12px] dark:text-[#d6d6d6]'>{el.locales}</p>
                                                </div>
                                            </div>
                                            <div className='mb-[9px] y:flex y:flex-wrap'>
                                                <div className='rounded-[5px] bg-[#f0f0f0] inline p-[5px] text-[#6e7072] font-[Montserrat-bold] text-[12.5px] mr-[8px] dark:text-[#383838] y:block '>{el.food1}</div>
                                                <div className='rounded-[5px] bg-[#f0f0f0] inline p-[5px] text-[#6e7072] font-[Montserrat-bold] text-[12.5px] mr-[8px] dark:text-[#383838]  y:block'>{el.food2}</div>
                                                <div className='rounded-[5px] bg-[#f0f0f0] inline p-[5px] text-[#6e7072] font-[Montserrat-bold] text-[12.5px] dark:text-[#383838] y:block y:mt-[8px]'>{el.food3}</div>
                                            </div>

                                            <div className='mb-[10px]'>
                                                <p className='font-[Montserrat-medium] text-[#02a11d] inline text-[14px] y:text-[12px]'>Открыто</p> <a className='text-[14px] y:text-[12px] dark:text-[#d6d6d6]' href="">{el.time}</a>
                                            </div>

                                            <div className='flex items-start mb-[15px]'>
                                                <FontAwesomeIcon className='mr-[8px] mt-[5px] text-[#2d2e2f] dark:text-[white]' icon={faComments} />
                                                <p className='text-[14px] text-[#6e7072] dark:text-[#d6d6d6] y:text-[12px] d:text-start e:text-start y:text-start'>{el.comment}</p>
                                            </div>

                                            <button
                                                className="text-[14px] cart-btn bg-[rgba(213,73,76,1)] hover:transition-[opacity_.3s_ease,visibility_.0s_ease] text-[white] rounded-[35px] min-w-[90px] h-[36px]"
                                                onClick={() => {
                                                    const itemExists = user.cart.some(cartItem => cartItem.id === el.id);

                                                    if (!itemExists) {
                                                        user.cart.push(el);
                                                        localStorage.setItem("user", JSON.stringify(user));
                                                        dispatch(post(user));
                                                        (user.cart.push(el),
                                                            localStorage.setItem("user", JSON.stringify(user)),
                                                            dispatch(post(user)))
                                                    } else {
                                                        alert('Этот ресторан уже добавлен');
                                                    }

                                                }
                                                }
                                            >
                                                <p className='font-[Montserrat-medium] text-[13.5px]'>Coхранить</p>
                                                <FontAwesomeIcon className="antd-icon text-[22px]" icon={faBookmark} />
                                            </button>
                                        </div>
                                    </div >
                                )
                            })}
                    </div>
                </div>
            </section >


            {/* Кнопка сохранить */}
            < FloatButton
                shape="circle"
                style={{ right: 75, boxShadow: '0px 2px 18px rgba(0, 0, 0, 0.15)', }
                }
                onClick={() => {
                    showDrawer()
                }}
                icon={< FontAwesomeIcon className="antd-icon text-[22px] text-[#192734]" icon={faBookmark} />} />


            < Drawer
                className="overflow-hidden"
                title={t("save.title")}
                onClose={onClose}
                open={openDrawer}
            >
                <div className="overflow-y-scroll h-[478px] scrollbarHidden">
                    {user.cart?.length ? (
                        user.cart?.map((el) => (
                            <div key={el.id} className="flex min-h-[94px] justify-between mb-[20px]">
                                <div className='w-[35%] mr-[5px]'>

                                    <Swiper navigation={true} modules={[Autoplay, Navigation]} autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                        className="mySwiper">

                                        {el.images.map(image => (
                                            <SwiperSlide key={image.id}>
                                                <img className='w-[200px] rounded-[4px]' src={image.imageName} alt="" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                <div className="text-[16px] text-[#000000DE] ml-[16px]">
                                    <h4 className='text-[14px]'>{el.name}</h4>
                                    <div className='mb-[10px]'>
                                        <p className='font-[Montserrat-medium] text-[#02a11d] inline text-[13px]'>Открыто</p> <a className='text-[13px] text-[#192734]' href="">{el.time}</a>
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    onClick={() => {
                                        const updatedCart = user.cart.filter((item) => item.id !== el.id);
                                        const updatedUser = { ...user, cart: updatedCart };
                                        localStorage.setItem("user", JSON.stringify(updatedUser)); // Обновление localStorage
                                        dispatch(post(updatedUser)); // Отправка обновленного списка на сервер, если необходимо
                                        setTest() // Может быть, вам нужно обновить что-то в вашем компоненте после удаления
                                    }}
                                    className="text-[24px] ml-[16px]"
                                    icon={faXmark}
                                />
                            </div>
                        ))
                    ) : (
                        <div className='flex justify-center h-[400px] items-center'>
                            <FontAwesomeIcon className='text-[35px] text-[#192734] mr-[10px]' icon={faBan} />
                            <h3>{t("noSave.title")}</h3>
                        </div>
                    )}
                </div>
            </Drawer >
        </>
    );
}

export default Burger;


