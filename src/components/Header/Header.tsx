export default function RootLayout() {
  return <header className="header">
    <div className="container">
      <div className="header__inner">
        <img src="/icons/Logo.svg" alt="Logo" className="header__logo" />
        <h1 className="header__title">online zoo</h1>
        <button id="openMenu" className="open-btn hide-on-desktop">
          <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 0H22V2.30776H0V0ZM0 13.8476H22V16.1553H0V13.8476ZM22 27.6908H0V29.9985H22V27.6908Z"
                  fill="black" />
          </svg>
        </button>
        <div className="header__right-panel">
          <nav className="header__nav">
            <div><a className="nav__link nav__link--active" href="">About</a></div>
            <div><a className="nav__link" href="">Map</a></div>
            <div><a className="nav__link " href="">Zoos</a></div>
            <div><a className="nav__link" href="">Contact Us</a></div>
            <div><a className="nav__link"
                    href="figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1">Design</a>
            </div>
          </nav>
          <div className="header__social"><a href="https://www.youtube.com/" className="social__link"><img
            className="social__icon"
            src="public/icons/YouTube.svg"
            alt="YouTube" /></a>
            <a href="https://www.instagram.com/" className="social__link"><img className="social__icon"
                                                                               src="public/icons/Instagram.svg"
                                                                               alt="Instagram" /></a>
            <a href="https://www.facebook.com/" className="social__link"><img className="social__icon"
                                                                              src="public/icons/Facebook.svg"
                                                                              alt="Facebook" /></a>
          </div>
          <div className="user__container">
          </div>
        </div>
      </div>
    </div>
  </header>
}