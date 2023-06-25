import { postEmail } from "../../api/api";
import { createRef, useState } from "react";
import "./Footer.css";

import footerCell from '../../img/icons/footerCell.svg';
import footerMail from '../../img/icons/footer-mail.svg';
import footerScype from '../../img/icons/footer-skype.svg';
import footerGeo from '../../img/icons/footer-geo.svg';
import footerYouTube from '../../img/icons/footer-youtube.svg';
import footerFaceBook from '../../img/icons/footer-facebook.svg';
import footerTwitter from '../../img/icons/footer-twitter.svg';
import footerLinkedin from '../../img/icons/footer-linkedin.svg';
import footerGoogle from '../../img/icons/footer-google.svg';
import footerEllipse from '../../img/icons/footer-ellipse.svg';

export default function Footer() {

    const ref = createRef()

    const onPost = (evt) => {
        evt.preventDefault()
        postEmail(evt.target.value)
    }


    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-main__contacts" id="contacts">
                    <h3 className="footer-main_head">Свяжитесь с нами</h3>
                    <ul className="footer-main__contacts__items">
                        <li className="footer-main__contacts__item">
                            <img
                                className="footer-main__contacts__item__img"
                                src={footerCell}
                                alt=""
                            />
                            <span className="footer-main__contacts__item__desc">
                                8 (800) 000 00 00
                            </span>
                        </li>
                        <li className="footer-main__contacts__item">
                            <img
                                className="footer-main__contacts__item__img"
                                src={footerMail}
                                alt=""
                            />
                            <span className="footer-main__contacts__item__desc">
                                inbox@mail.ru
                            </span>
                        </li>
                        <li className="footer-main__contacts__item">
                            <img
                                className="footer-main__contacts__item__img"
                                src={footerScype}
                                alt=""
                            />
                            <span className="footer-main__contacts__item__desc">
                                tu.train.tickets
                            </span>
                        </li>
                        <li className="footer-main__contacts__item">
                            <img
                                className="footer-main__contacts__item__img"
                                src={footerGeo}
                                alt=""
                            />
                            <span className="footer-main__contacts__item__desc">
                                г. Москва ул. Московская 27-35 555 555
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="footer-main__subscribe">
                    <h3 className="footer-main_head">Подписка</h3>
                    <div className="footer-main__subscribe__item">
                        <form
                            action="footer-main__subscribe__form"
                            id="subscribe__form"
                            method="post"
                        >
                            <label
                                className="footer-main__subscribe__item__label"
                                htmlFor="subscribe__form"
                            >
                                Будьте в курсе событий
                            </label>
                            <div className="input-btn-wrapper">
                                <input
                                    type="email"
                                    className="footer-main__subscribe__form-input"
                                    placeholder="e-mail"
                                    ref={ref}
                                />
                                <button className="footer-main__subscribe__send btn-footer" onClick={(evt) => onPost(evt)}>
                                    ОТПРАВИТЬ
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="footer-main__subscribe__item">
                        <span className="footer-main__subscribe__social-media">
                            Подписывайтесь на нас
                        </span>
                        <div className="footer-main__subscribe__social-media-list">
                            <ul className="social-media-list">
                                <li className="social-media-list__item">
                                    <img
                                        src={footerYouTube}
                                        alt="youtube-icon"
                                        className="symbol-active"
                                    />
                                </li>
                                <li className="social-media-list__item">
                                    <img
                                        src={footerFaceBook}
                                        alt="facebook-icon"
                                        className="symbol-active"
                                    />
                                </li>
                                <li className="social-media-list__item">
                                    <img
                                        src={footerTwitter}
                                        alt="twitter-icon"
                                        className="symbol-active"
                                    />
                                </li>
                                <li className="social-media-list__item">
                                    <img
                                        src={footerLinkedin}
                                        alt="linkedin-icon"
                                        className="symbol-active"
                                    />
                                </li>
                                <li className="social-media-list__item">
                                    <img
                                        src={footerGoogle}
                                        alt="google-icon"
                                        className="symbol-active"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-main__line"></div>

            <div className="footer-logo container">
                <div className="footer__logo__logo">Лого</div>
                <div className="logo-up">
                    <img
                        src={footerEllipse}
                        alt="button-UP"
                        className="symbol-active"
                    />
                </div>
                <div className="copyright">2018 WEB</div>
            </div>
        </footer>
    );
}