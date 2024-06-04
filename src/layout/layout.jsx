import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


// logo
import lightLogo from "../assets/icons/light.png";
import darkLogo from "../assets/icons/dark.png";
import SearchIcon from '../assets/icons/search.svg';
import Switcher from '../component/switcher/switcher';
import { faArrowRightFromBracket, faBars, faBookmark, faCaretDown, faCircleUser, faComments, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaBars, FaTimes } from 'react-icons/fa';


// translate
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { Link } from 'react-router-dom';
// footer logo
import footerLogo from '../assets/images/footer.svg';
import fressLogo from '../assets/icons/fress.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { borderRadius, height } from '@mui/system';
import { useGetUserQuery, usePostUserMutation } from '../api/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import { stringify } from 'postcss';
import { setSearch } from '../reducers/TodoSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "350px",
  height: "500px",
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: "5px"
}

const Layout = () => {
  let [update, setUpdate] = useState("")
  let dispatch = useDispatch();

  let search = useSelector((state) => state.todo.search)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  let { data, error, isLoading } = useGetUserQuery()
  let [postUser] = usePostUserMutation()

  // transition
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    AOS.init();
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // состояние для кнопок
  const [activeButton, setActiveButton] = useState('number'); // Установите начальное значение в 'number'

  const handleClick = (button) => {
    setActiveButton(button);
  };

  let user = JSON.parse(localStorage.getItem('user')) || []

  return (
    <div>
      {/* Навигационное меню */}
      <nav className='fixed z-[5] bg-[rgba(249,249,249,0.9)] dark:bg-[rgba(25,39,52,0.9)] w-[100%] hover:duration-[0.30s]'>
        <div className='max-w-[1200px] m-[auto] flex justify-between h-[90px] items-center lg:p-[0_30px] m:w-[100%]'>
          <div className='flex items-center m:w-[100%] m:justify-between'>
            {/* logo */}
            <div className='mr-[30px]'>
              <Link to={"/"}><img src={lightLogo} className='text-[#192734] w-[95px] dark:hidden light:inline a:w-[80px]' alt="logo" /><img src={darkLogo} className='text-[#192734] w-[95px] hidden dark:inline a:w-[80px]' alt="logo" /></Link>
            </div>
            <div className='mr-[32px] flex items-center rounded-[4px] overflow-hidden shadow a:hidden'>
              <input onChange={(e) => dispatch(setSearch(e.target.value))} value={search} type="search" className='outline-none w-[300px] h-[50px] p-[0_12px] text-[#192734]' />
              <button className='w-[53px] flex justify-center items-center bg-[#e00707] h-[50px] outline-none hover:bg-[rgb(255,67,67)] hover:duration-[0.30s]'><img src={SearchIcon} alt="" /></button>
            </div>
            <ul className='flex lg:hidden'>
              <Link to={"/каталог"}><li><a href="каталог" className='mr-[20px] text-[#192734] text-[14px] font-[Montserrat-medium] dark:text-[white]'>{t("header.nav.li1")}</a></li></Link>
              <Link to={"/about"}><li className='mr-[20px]'><a href="about" className='text-[#192734] text-[14px] font-[Montserrat-medium] dark:text-[white]'>{t("header.nav.li2")}</a></li></Link>
              <Link to={"/контакты"}><li><a href="контакты" className='text-[#192734] mr-[20px] text-[14px] font-[Montserrat-medium] dark:text-[white]'>{t("header.nav.li3")}</a></li></Link>
              <Link to={"/донат"}><li><a href="донат" className='text-[#192734] mr-[20px] text-[14px] font-[Montserrat-medium] dark:text-[white]'>{t("header.nav.li4")}</a></li></Link>
            </ul>






            <div className="burger-menu-container hidden lg:block">
              <div className="burger-icon" onClick={toggleMenu}>
                {isOpen ? <FontAwesomeIcon className='dark:text-[white] text-[#192734]' icon={faXmark} /> : <FontAwesomeIcon className='dark:text-[white] text-[#192734]' icon={faBars} />}
              </div>
              <nav className={`burger-menu bg-[rgba(249,249,249,0.9)] dark:bg-[rgba(25,39,52,0.9)] ${isOpen ? 'open' : ''}`}>
                <div className='flex items-center rounded-[4px] overflow-hidden mb-[10px]'>
                  <input onChange={(e) => dispatch(setSearch(e.target.value))} value={search} type="search" className='outline-none w-[200px] h-[40px] p-[0_12px] text-[#192734]' />
                  <button className='w-[53px] flex justify-center items-center bg-[#e00707] h-[40px] outline-none hover:bg-[rgb(255,67,67)] hover:duration-[0.30s]'><img className='text-[15px]' src={SearchIcon} alt="" /></button>
                </div>
                <ul className='a:flex'>
                  <Link to={"/каталог"}><li><a href="каталог" className='text-[#192734] text-[14px] font-[Montserrat-medium] dark:text-[white]  a:mr-[20px]' onClick={() => { setIsOpen(false) }}>{t("header.nav.li1")}</a></li></Link>
                  <Link to={"/about"}><li className=''><a href="about" className='text-[#192734] text-[14px] font-[Montserrat-medium] dark:text-[white] a:mr-[20px]' onClick={() => { setIsOpen(false) }}>{t("header.nav.li2")}</a></li></Link>
                  <Link to={"/контакты"}><li><a href="контакты" className='text-[#192734] text-[14px] font-[Montserrat-medium] dark:text-[white]' onClick={() => { setIsOpen(false) }}>{t("header.nav.li3")}</a></li></Link>
                  <Link to={"/донат"}><li><a href="донат" className='text-[#192734] text-[14px] font-[Montserrat-medium] dark:text-[white]' onClick={() => { setIsOpen(false) }}>{t("header.nav.li4")}</a></li></Link>
                </ul>
                <div className="select-container text-[14px]font-[Montserrat-medium] dark:text-[white] hidden i:hidden lg:flex mb-[30px]">
                  <select id="stylish-select" className=' text-[16px] a:text-[14px] font-[Montserrat-medium] dark:text-[white]' onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="ru" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]' onClick={() => { setIsOpen(false) }}>Русский</option>
                    <option value="en" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>English</option>
                    <option value="tj" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>Точики</option>
                  </select>
                  <FontAwesomeIcon icon={faCaretDown} className='text-[#192734] dark:text-[white]' />
                </div>
                <div className='items-center hidden m:flex justify-center'>
                  {localStorage.getItem("user") ? <div className='flex items-center mr-[20px]'>
                    <FontAwesomeIcon className='text-[25px] dark:text-[white] mr-[10px] text-[#192734]' icon={faCircleUser} />
                    <h1 className='dark:text-[white] text-[16px] a:text-[14px] tracking-[0.46px] font-[Montserrat-medium] text-[#192734] mr-[40px]'>{user.name}</h1>
                    <FontAwesomeIcon className='text-[20px] dark:text-[white] text-[#192734] cursor-pointer' onClick={() => { localStorage.removeItem("user"), setUpdate() }} icon={faArrowRightFromBracket} />
                  </div> : <div>
                    <button className='mr-[20px] border-2 border-[#fff] rounded-[4px] p-[0_16px] h-[40px] text-[#0f172a] font-[Montserrat-medium] text-[14px] hover:bg-[white] hover:duration-[0.50s] hover:text-[#0f172a] dark:text-[white] dark:hover:text-[#0f172a] shadow a:h-[35px] a:p-[0_10px]' onClick={() => { { handleOpenLogin() } }}>{t("header.button1")}</button>
                    <button className='bg-[#e00707] hover:bg-[rgb(255,67,67)] p-[0_16px] h-[40px] rounded-[4px] text-[white] font-[Montserrat-medium] mr-[20px] text-[14px] hover:duration-[0.30s] a:h-[35px] a:p-[0_10px]' onClick={() => { { handleOpen() } }}>{t("header.button2")}</button>
                  </div>}
                  <Switcher />
                </div>
              </nav>
            </div>






            <div className="select-container text-[14px] text-[#192734] font-[Montserrat-medium] dark:text-[white] i:hidden lg:hidden">
              <select id="stylish-select" className='text-[14px] dark:text-[white]' onChange={(e) => changeLanguage(e.target.value)}>
                <option value="ru" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>Русский</option>
                <option value="en" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>English</option>
                <option value="tj" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>Точики</option>
              </select>
              <FontAwesomeIcon icon={faCaretDown} className='text-[#192734] dark:text-[white]' />
            </div>
          </div>
          <div className="select-container text-[14px] text-[#192734] font-[Montserrat-medium] dark:text-[white] hidden i:flex lg:hidden">
            <select id="stylish-select" className='text-[14px] dark:text-[white]' onChange={(e) => changeLanguage(e.target.value)}>
              <option value="ru" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>Русский</option>
              <option value="en" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>English</option>
              <option value="tj" className='dark:bg-[rgba(25,39,52,0.9)] dark:text-[white] bg-[rgba(249,249,249,0.9)]'>Точики</option>
            </select>
            <FontAwesomeIcon icon={faCaretDown} className='text-[#192734] dark:text-[white]' />
          </div>
          <div className='flex items-center m:hidden'>
            {localStorage.getItem("user") ? <div className='flex items-center mr-[30px]'>
              <FontAwesomeIcon className='text-[25px] dark:text-[white] mr-[10px] text-[#192734]' icon={faCircleUser} />
              <h1 className='dark:text-[white] text-[14px] tracking-[0.46px] font-[Montserrat-medium] text-[#192734] mr-[40px] cursor-pointer'>{user.name}</h1>
              <FontAwesomeIcon className='text-[20px] dark:text-[white] text-[#192734] cursor-pointer' onClick={() => { localStorage.removeItem("user"), setUpdate() }} icon={faArrowRightFromBracket} />
            </div> : <div>
              <button className='mr-[10px] border-2 border-[#fff] rounded-[4px] p-[0_8px] h-[40px] text-[#0f172a] font-[Montserrat-medium] text-[14px] hover:bg-[white] hover:duration-[0.50s] hover:text-[#0f172a] dark:text-[white] dark:hover:text-[#0f172a] shadow' onClick={() => { { handleOpenLogin() } }}>{t("header.button1")}</button>
              <button className='bg-[#e00707] hover:bg-[rgb(255,67,67)] p-[0_8px] h-[40px] rounded-[4px] text-[white] font-[Montserrat-medium] mr-[10px] text-[14px] hover:duration-[0.30s]' onClick={() => { { handleOpen() } }}>{t("header.button2")}</button>
            </div>}
            <Switcher />
          </div>
        </div>
      </nav>


      <Outlet />
      {/* footer */}
      <footer className='border-t pt-[36px] dark:border-t-[#2c3a47]'>
        <div className='max-w-[1200px] m-[auto] lg:p-[0_30px]'>
          {/* верхняя часть */}
          <div className='grid grid-cols-3 justify-items-center mb-[24px] mm:grid-cols-1 mm:justify-items-center mm:gap-[20px] s:grid-cols-2 s:justify-items-start s:gap-[25px]'>
            <ul className='mm:text-center'>
              <p className='mb-[12px]'><a className='font-[Montserrat-semiBold] text-[#2d2e2f] dark:text-[white]' href="#">{t("footer.first.p")}</a></p>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.first.li1")}</a></li>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.first.li2")}</a></li>
            </ul>
            <ul className='mm:text-center'>
              <p className='mb-[12px]'><a className='font-[Montserrat-semiBold] text-[#2d2e2f] dark:text-[white]' href="#">{t("footer.second.p")}</a></p>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.second.li1")}</a></li>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.second.li2")}</a></li>
            </ul>
            <ul className='mm:text-center'>
              <p className='mb-[12px]'><a className='font-[Montserrat-semiBold] text-[#2d2e2f] dark:text-[white]' href="#">{t("footer.third.p")}</a></p>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.third.li1")}</a></li>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.third.li2")}</a></li>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.third.li3")}</a></li>
              <li><a className='text-[#6e7072] text-[14px] font-[Montserrat-medium] dark:text-[#c5c5c5]' href="#">{t("footer.third.li4")}</a></li>
            </ul>
          </div>

          {/* нижняя часть */}
          <div className='w-[800px] m-[auto] m:w-[700px] z:hidden'>
            <img src={footerLogo} alt="" />
            <p className='text-center p-[16px_0] text-[#6e7072] text-[12px] dark:text-[#ccc]'>{t("footer.text")}</p>
          </div>
        </div>
      </footer>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ outline: "none" }}
      >
        <Box sx={{ ...style, boxShadow: '40px 40px 250px rgba(0,0,0,0.1)' }}>
          <div>

            {/* Верхняя часть */}
            <div className='p-[16px_24px]'>
              <h1 className='font-[Montserrat-bold] text-center text-[#2d2e2f] text-[21px]'>{t("registered.title")}</h1>
            </div>

            <div className='p-[16px_24px]'>
              <div className='flex justify-center w-[100%] bg-[rgb(235,235,235)] p-[5px] rounded-[4px] mb-[20px]'>
                <button type="button"
                  onClick={() => handleClick('number')}
                  className={`min-h-[30px] w-[50%] rounded-[4px] font-[Montserrat-medium] text-[14px] ${activeButton === 'number' ? 'w-[50%] bg-[rgb(255,255,255)] text-[rgba(0,0,0,0.87)]' : ''
                    }`}
                >
                  {t("registered.number")}
                </button>
              </div>

              <form action="" onSubmit={(e) => {
                e.preventDefault();
                let user = {
                  name: e.target["name"].value,
                  surname: e.target["surname"].value,
                  phone: e.target["phone"].value,
                  password: e.target["password"].value,
                  cart: []
                }
                localStorage.setItem("user", JSON.stringify(user))
                postUser(user)
                setOpen(false)
              }}>
                <div className='flex h-[50px] border border-[#bbb] rounded-[4px] overflow-hidden mb-[10px] hover:border-none'>
                  <div className='bg-[#c5c5c5] text-[#fff] p-[7px] text-[14px] flex items-center cursor-default'>+992</div>
                  <input name='phone' type="number" className='w-[100%] rounded-r-[4px] outline-none text-[14px] text-[#2d2e2f] pl-[7px] hover:duration-[0.30s] hover:border hover:border-[#e00707] hover:border-l-[hidden]' placeholder={t("registered.phone")} />
                </div>
                <div className='flex mb-[10px]'>
                  <input name='name' className='w-[50%] outline-none text-[14px] text-[#2d2e2f] h-[50px] border rounded-[4px] border-[#bbb] pl-[7px] hover:duration-[0.30s] hover:border-[#e00707] mr-[12px]' type="text" placeholder={t("registered.name")} />
                  <input name='surname' className='w-[50%] outline-none text-[14px] text-[#2d2e2f] h-[50px] border rounded-[4px] border-[#bbb] pl-[7px] hover:duration-[0.30s] hover:border-[#e00707]' placeholder={t("registered.surname")} type="text" />
                </div>

                <input name='password' type="password" placeholder={t("registered.password")} className='w-[100%] outline-none text-[14px]text-[#2d2e2f] h-[50px] border rounded-[4px] mb-[25px] border-[#bbb] pl-[7px] hover:duration-[0.30s] hover:border-[#e00707]' />

                <button type="submit" className='h-[40px] bg-[#e00707] w-[100%] text-[16px] text-[#fff] font-[Montserrat-medium] rounded-[4px] mb-[12px] hover:bg-[rgb(255,67,67)] hover:duration-[0.30s]'>{t("registered.button")}</button>
                <p className='text-[12px] text-[#2d2e2f] text-center mb-[20px]'>При входе и регистрации Вы соглашаетесь с <span className='text-[#e00707] font-[Montserrat-medium] hover:text-[rgb(255,67,67)] hover:duration-[0.30s] cursor-pointer'>Условиями использования сайта</span> и <span className='text-[#e00707] font-[Montserrat-medium] hover:text-[rgb(255,67,67)] hover:duration-[0.30s] cursor-pointer'>Политикой конфиденциальности.</span></p>
              </form>

              <div className='flex justify-center items-end'>
                <p className='text-[13px] text-[#2d2e2f] mr-[4px] font-[Montserrat-medium]'>{t("registered.text2")}</p>
                <p className='text-[13px] text-[#e00707] font-[Montserrat-semiBold] hover:text-[rgb(255,67,67)] hover:duration-[0.30s] cursor-pointer' onClick={() => { handleClose(), handleOpenLogin() }}>{t("registered.link")}</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>


      {/* Вход */}
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ outline: "none" }}
      >
        <Box sx={style}>
          <div>
            {/* Верхняя часть */}
            <div className='p-[16px_24px]'>
              <div className='flex justify-center mb-[12px]'>
                <img src={fressLogo} alt="" />
              </div>
              <h1 className='font-[Montserrat-bold] text-center text-[#2d2e2f] text-[21px]'>{t("login.title")}</h1>
            </div>

            <div className='p-[16px_24px]'>


              <p className='text-[12px] text-[#2d2e2f] text-center mb-[20px]'>При входе и регистрации Вы соглашаетесь с <span className='text-[#e00707] font-[Montserrat-medium] hover:text-[rgb(255,67,67)] hover:duration-[0.30s] cursor-pointer'>Условиями использования сайта</span> и <span className='text-[#e00707] font-[Montserrat-medium] hover:text-[rgb(255,67,67)] hover:duration-[0.30s] cursor-pointer'>Политикой конфиденциальности.</span></p>
              <form action="" className='mb-[15px]' onSubmit={(e) => {
                e.preventDefault();
                if (data.find((el) => el.phone == e.target["phone"].value)) {
                  let filter = data.filter(
                    (el) => el.phone == e.target["phone"].value
                  );
                  if (
                    filter.find((el) => el.password == e.target["password"].value)
                  ) {
                    localStorage.setItem(
                      "user",
                      JSON.stringify(
                        filter.find((el) => {
                          return el.password == e.target["password"].value;
                        })
                      )
                    );
                    setOpenLogin(false);
                  } else {
                    alert("Неверный пароль!!!");
                  }
                } else {
                  alert("Такого номера не существует!!!");
                }
              }}>
                <input name='phone' type="login" placeholder={t("login.login")} className='w-[100%] outline-none text-[14px]text-[#2d2e2f] h-[50px] border rounded-[4px] mb-[10px] border-[#bbb] pl-[7px] hover:duration-[0.30s] hover:border-[#e00707]' />
                <input name='password' type="password" placeholder={t("login.password")} className='w-[100%] outline-none text-[14px]text-[#2d2e2f] h-[50px] border rounded-[4px] mb-[25px] border-[#bbb] pl-[7px] hover:duration-[0.30s] hover:border-[#e00707]' />
                <button type='submit' className='h-[40px] bg-[#e00707] w-[100%] text-[16px] text-[#fff] font-[Montserrat-medium] rounded-[4px] hover:bg-[rgb(255,67,67)] hover:duration-[0.30s]'>{t("login.button")}</button>
              </form>

              <div className='flex justify-center items-end'>
                <p className='text-[13px] text-[#2d2e2f] mr-[4px] font-[Montserrat-medium]'>{t("login.text2")}</p>
                <p className='text-[13px] text-[#e00707] font-[Montserrat-semiBold] cursor-pointer hover:text-[rgb(255,67,67)] hover:duration-[0.30s]' onClick={() => { handleCloseLogin(), handleOpen() }}>{t("login.link")}</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default Layout
