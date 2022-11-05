import React from 'react'
import '../assets/styles/HeaderNav.css';
import logoWeb from '../assets/svg/logo-web.svg';
import meInteresaButtonMobile from '../assets/images/me-interesa-button-mobile.png'
import hamburguesaMenuMobile from '../assets/images/hamburguesa-menu-mobile.png'
const HeaderNav = () => {
  return (
    <header>
        <div className="contenedor">
            <div className="logo">
            <img src={logoWeb} alt="" />
            </div>

            <div className="idiomas">
                <p className="idiomaEsp">ESP</p>
                <p className="idiomaEng">ENG</p>
            </div>

            <div className="padreDerecha">
                <div className="meInteresa">
                    <img src={meInteresaButtonMobile} alt="" />
                </div>

                <div className="hamburguesa">
                    <img src={hamburguesaMenuMobile} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderNav