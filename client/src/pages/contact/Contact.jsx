import React, {useRef} from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './Contact.css'
import {child, ref, set, push} from "firebase/database";
import {db} from "../../firebase/firebase.js";
import {toast} from "react-toastify";

function Contact() {
    const nameRef = useRef(null)
    const surNameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    function sendMessage(e){
        e.preventDefault()
        const contactRef = ref(db, "contact")

        const config = {
            fullName: nameRef.current.value + " " + surNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }

        const userPush = push(contactRef)
        set(userPush, config).then(response => {
            toast.success("Спасибо за обращение!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).catch(err => {
            toast.error("Ошибка отправки", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.error(err)
        })
    }

     return (
        <div>
            <Header/>
            <section className="contact">
                <div className="container contact__container">
                    <aside className="contact__aside">
                        <div className="aside__image">
                            <img src="./images/contact.svg"/>
                        </div>
                        <h2>Связаться с нами</h2>
                        <p>
                            Связывайтесь с нами в любое время!
                        </p>
                        <ul className="contact__details">
                            <li>
                                <i className="uil uil-phone-times"></i>
                                <h5>8(705)9527145</h5>
                            </li>
                            <li>
                                <i className="uil uil-envelope"></i>
                                <h5>abuovaizel1@gmail.com</h5>
                            </li>
                            <li>
                                <i className="uil uil-location-point"></i>
                                <h5>Астана, Казахстан</h5>
                            </li>
                        </ul>
                        <ul className="contact__socials">
                            <li><a href="https://facebook.com"><i className="uil uil-facebook-f"></i></a></li>
                            <li><a href="https://instagram.com"><i className="uil uil-instagram"></i></a></li>
                            <li><a href="https://twitter.com"><i className="uil uil-twitter"></i></a></li>
                            <li><a href="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></a></li>
                        </ul>
                    </aside>


                    <form action="https://formspree.io/f/xeqnevgj" method="POST" className="contact__form" onSubmit={(e) => sendMessage(e)}>
                        <div className="form__name">
                            <input type="text" name="First Name" placeholder="Имя" required ref={nameRef}/>
                                <input type="text" name="Last Name" placeholder="Фамилия" required ref={surNameRef}/>
                        </div>
                        <input type="email" name="Email Address" placeholder="Email..." required ref={emailRef}/>
                            <textarea name="Message" rows="7" placeholder="Сообщение" required ref={messageRef}></textarea>
                            <button type="submit" className="btn btn-primary">Отправить</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Contact;
