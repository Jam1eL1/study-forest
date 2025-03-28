import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo1 from '/images/logo/logo_icon.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/study-create') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.header__wrapper}>
          <Link to='/' className={styles.logo}>
            <img src={logo1} alt='Study Forest Logo' />
          </Link>

          {isOpen && (
            <Link to='/study-create' className={styles.create__study__button}>
              <span className={styles.create__study__button__text__bg}>
                스터디 만들기
              </span>
              <span className={styles.create__study__button__text}>
                스터디 만들기
              </span>
            </Link>
          )}
        </div>
      </header>

      {/* TODO: 작업용 임시 네비게이션 메뉴 입니다. 나중에 삭제해야 합니다. */}

      {location.pathname === '/' && (
        <div className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to='/study-detail' className={styles.nav__link}>
                스터디 상세
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link to='/today-habit' className={styles.nav__link}>
                오늘의 습관
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link to='/today-focus' className={styles.nav__link}>
                오늘의 집중
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
