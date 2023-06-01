import {useEffect, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {  signOut } from "firebase/auth";
import '../../pages/about/About.css'
import {UserContext} from "../../App.jsx";
import {auth} from "../../firebase/firebase.js";

function Header() {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            document
                .querySelector("nav")
                .classList.toggle("window-scroll", window.scrollY > 0);
        });

        // show/hide nav menu
        const menu = document.querySelector(".nav__menu");
        const menuBtn = document.querySelector("#open-menu-btn");
        const closeBtn = document.querySelector("#close-menu-btn");

        menuBtn.addEventListener("click", () => {
            menu.style.display = "flex";
            closeBtn.style.display = "inline-block";
            menuBtn.style.display = "none";
        });

        // close nav menu
        const closeNav = () => {
            menu.style.display = "none";
            closeBtn.style.display = "none";
            menuBtn.style.display = "inline-block";
        };

        closeBtn.addEventListener("click", closeNav);

    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            navigate("/main");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.error(error)
        });
    }

    return (
        <nav>
            <div className="container nav__container">
                <Link to={"/main"}><a href=""><h4>ALMASU</h4></a></Link>
                <ul className="nav__menu">
                    <Link to={"/main"}><li><a href="">Главная</a></li></Link>
                    <Link to={"/about"}><li><a href="">О нас</a></li></Link>
                    <Link to={"/services"}><li><a href="">Сервисы</a></li></Link>
                    <Link to={"/contact"}><li><a href="">Контакты</a></li></Link>
                    {isLoggedIn
                        ?
                        <li onClick={logout}><a href="">Выйти</a></li>
                        :
                        <Link to={"/sign"}><li><a href="">Войти</a></li></Link>
                    }
                </ul>
                <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
                <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
            </div>
        </nav>
    );
}

export default Header;
