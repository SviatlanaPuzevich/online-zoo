import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Buttons/Button.tsx';
import Arrow from '../Buttons/icons/Arrow.tsx';
import QuickDonationPopup from '../popups/QuickDonationPopup/QuickDonationPopUp.tsx';
import { CONSTANT } from '../../const/const.ts';

export default function Footer() {
  return <>
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.footer__logos}>
            <div className={styles.logo__wrapper}>
              <img src="/icons/Logo-white.svg" alt="Logo" className={styles.footer__logo} />
            </div>
            <div className={styles.logo__wrapper}>
              <img src="/icons/Yem%20Digital.svg" alt="yem logo" className={styles.footer__logo} />
            </div>
            <div className={styles.logo__wrapper}>
              <img src="/icons/rs_school_js%20logo.svg" alt="RSSchool logo" className={styles.footer__logo} />
            </div>
          </div>
          <nav className={styles.footer__nav}>
            <div><Link to="/" className={styles.nav__link}>About</Link></div>
            <div><Link className={styles.nav__link} to="/map">Map</Link></div>
            <div><Link className={styles.nav__link} to="/zoo/1">Zoos</Link></div>
            <div><Link className={styles.nav__link} to="/contacts">Contact Us</Link></div>
          </nav>
          <div className={styles.footer__button}>
            <Button text="donate for volunteers" btnStyle="white" extraClass="mobile-block" icon={<Arrow />}
                    popoverTarget={CONSTANT.POPUP_ID.quickDonationPopupId}/>
          </div>
        </div>
        <div className={classNames(styles.footer__divider, styles.tabletDivider)}></div>
        <div className={styles['footer__bottom--desktop']}>
          <div className={styles.footer__social}><a href="https://www.youtube.com/" className={styles.social__link}><img
            className={styles.social__icon}
            src="/icons/YouTube.svg"
            alt="Youtube" /></a>
            <a href="https://www.instagram.com/" className={styles.social__link}><img className={styles.social__icon}
                                                                                      src="/icons/Instagram.svg"
                                                                                      alt="Instagram" /></a>
            <a href="https://www.facebook.com/" className={styles.social__link}><img className={styles.social__icon}
                                                                                     src="/icons/Facebook.svg"
                                                                                     alt="Facebook" /></a></div>
          <div className={classNames(styles.footer__divider, 'mobile-only')}></div>
          <div className={styles.footer__copyright}>
            <div>© 2021 DinaK</div>
            <div>© Yem Digital</div>
            <div>© RSSchool</div>
          </div>
        </div>
      </div>
    </footer>
    <QuickDonationPopup />
  </>;
}