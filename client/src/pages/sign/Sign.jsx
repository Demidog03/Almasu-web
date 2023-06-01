import {useEffect, useRef} from "react";
import {useNavigate} from 'react-router-dom'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import {toast, ToastContainer} from "react-toastify";
import {auth, db} from '../../firebase/firebase.js';
import './Sign.css'
import Footer from "../../components/footer/Footer.jsx";
import {child, push, ref, set} from "firebase/database";


function Sign() {
    const navigate = useNavigate();
    const cont = useRef(null);

    const regEmail = useRef(null);
    const regPassword = useRef(null);
    const regPasswordConfirm = useRef(null);
    const regFullname = useRef(null);

    const loginEmail = useRef(null);
    const loginPassword = useRef(null);

    useEffect(() => {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // when window width is >= 600px
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
            },
        });

    }, [])

    function swipe(){
        cont.current.classList.toggle('s-signup')
    }

    async function login(e){
        e.preventDefault();
        const email = loginEmail.current.value
        const password = loginPassword.current.value

        if(email.length===0 || password.length===0){
            toast.warning('Please, fill all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                sessionStorage.setItem("userToken", user.accessToken)
                navigate("/services")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                let message
                if(errorCode==="auth/invalid-email"){
                    message = "Email is invalid!";
                }
                else if(errorCode==="auth/user-not-found"){
                    message = "Email does not exist!";
                }
                else if(errorCode==="auth/wrong-password"){
                    message = "Wrong password!";
                }
                toast.error(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }

    async function register(e){
        e.preventDefault()
        const fullName = regFullname.current.value
        const email = regEmail.current.value
        const password = regPassword.current.value
        const passwordConfirm = regPasswordConfirm.current.value

        if(email.length===0 || password.length===0 || passwordConfirm.length===0 || fullName.length===0){
            toast.warning('Please, fill all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        if(password!==passwordConfirm){
            toast.error('Passwords don`t match!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            regPassword.current.value=""
            regPasswordConfirm.current.value=""
            return;
        }
        const userRef = ref(db, "Users")
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                /**Save user in realtime db by path /Users*/
                const config = {
                    email,
                    name: fullName,
                    uid: user.uid
                }

                const userChild = child(userRef, user.uid)
                set(userChild, config)
                // push(userRef, config).then(response => console.log(response)).catch(error => console.error(error))

                navigate("/services")
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                console.error(errorCode);
                console.error(error);

                if(errorCode==="auth/email-already-in-use"){
                    toast.error('Email is already in use!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            });
    }

    return (
        <div>

            <section>
                <div className="cont" ref={cont}>
                    <div className="form sign-in">
                        <h2>Sign In</h2>

                        <label>
                            <span>Email Address</span>
                            <input type="email" name="email" id="loginEmail" ref={loginEmail}/>
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" name="password" id="loginPassword" ref={loginPassword}/>
                        </label>
                        <button className="submit" type="button" id="loginBtn" onClick={login}>Sign In</button>
                        <p className="forgot-pass">Forgot Password ?</p>
                    </div>

                    <div className="sub-cont">
                        <div className="img">
                            <div className="img-text m-up">
                                <h2>
                                    <div color="white">New here?</div>
                                </h2>
                                <p>Sign up and discover great amount of new opportunities!</p>
                            </div>
                            <div className="img-text m-in">
                                <h2>Hey There!</h2>
                                <p>
                                    Welcome Back.<br/>
                                    You are just one step away to your feed.
                                </p>
                            </div>
                            <div  className="img-btn" onClick={swipe}>
                                <span className="m-up">Sign Up</span>
                                <span className="m-in">Sign In</span>
                            </div>
                        </div>
                        <div className="form sign-up">
                            <h2>Sign Up</h2>
                            <div className="bottom">
                                <label>
                                    <span>Name</span>
                                    <input type="text" id="regName" ref={regFullname}/>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" id="regEmail" ref={regEmail}/>
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" id="regPassword" ref={regPassword}/>
                                </label>
                                <label>
                                    <span>Confirm Password</span>
                                    <input type="password" id="regPasswordConfirm" ref={regPasswordConfirm}/>
                                </label>
                                <button type="button" className="submit" id="regBtn" onClick={register}>
                                    Sign Up Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Sign;
