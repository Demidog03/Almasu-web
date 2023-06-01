import '../../pages/about/About.css'

function Footer(props) {
    return (
        <footer>
            <div className="container footer__container">
                <div className="footer__1">
                    <a href="index.html" className="footer__logo"><h4>ALMASU</h4></a>
                    <p>
                        это онлайн-платформа, которая позволяет физическим или юридическим лицам обмениваться
                        услугами друг с другом.
                    </p>
                </div>

                <div className="footer__2">
                    <h4>Постоянные ссылки</h4>
                    <ul className="permalinks">
                        <li><a href="index.html">Главная</a></li>
                        <li><a href="about.html">О нас</a></li>
                    </ul>
                </div>

                <div className="footer__2">
                    <h4>Постоянные ссылки</h4>
                    <ul className="permalinks">
                        <li><a href="services.html">Сервисы</a></li>
                        <li><a href="contact.html">Контакты</a></li>
                    </ul>
                </div>


                <div className="footer__4">
                    <h4>Связаться с нами</h4>
                    <div>
                        <p>+8(705)9527145</p>
                        <p>abuovaizel1@gmail.com</p>
                    </div>

                    <ul className="footer__socials">
                        <li>
                            <a href="#"><i className="uil uil-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-instagram-alt"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="uil uil-linkedin-alt"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
