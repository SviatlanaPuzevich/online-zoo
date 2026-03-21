import styles from "./header.module.css";
import { NavLink } from 'react-router-dom';

export default function Header() {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : styles.nav__link;
  return <header className={styles.header}>
    <div className="container">
      <div className={styles.header__inner}>
        <img src="/icons/Logo.svg" alt="Logo" className={styles.he} />
        <h1 className={styles.header__title}>online zoo</h1>
        <button id="openMenu" className="open-btn hide-on-desktop">
          <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M0 0H22V2.30776H0V0ZM0 13.8476H22V16.1553H0V13.8476ZM22 27.6908H0V29.9985H22V27.6908Z"
                  fill="black" />
          </svg>
        </button>
        <div className={styles.header__rightPanel}>
          <nav className={styles.header__nav}>
            <div><NavLink to='/' className={setActive}>About</NavLink></div>
            <div><NavLink className={setActive} to='/map'>Map</NavLink></div>
            <div><NavLink className={setActive} to='/zoo/'>Zoos</NavLink></div>
            <div><NavLink className={setActive} to='/contacts'>Contact Us</NavLink></div>
            <div><a className={styles.nav__link}
                    href="figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1">Design</a>
            </div>
          </nav>
          <div className={styles.header__social}><a href="https://www.youtube.com/" className={styles.social__link}><img
            className={styles.social__icon}
            src="/icons/YouTube.svg"
            alt="YouTube" /></a>
            <a href="https://www.instagram.com/" className={styles.social__link}><img className={styles.social__icon}
                                                                               src="/icons/Instagram.svg"
                                                                               alt="Instagram" /></a>
            <a href="https://www.facebook.com/" className={styles.social__link}><img className={styles.social__icon}
                                                                              src="/icons/Facebook.svg"
                                                                              alt="Facebook" /></a>
          </div>
        </div>
      </div>
    </div>
  </header>
}