import {useContext, useEffect, useState} from 'react';
import {auth, db} from '../../firebase/firebase.js';
import { ref, child, get } from "firebase/database";
import Footer from "../footer/Footer.jsx";
import {useNavigate, useParams} from "react-router-dom";
import './AdsItemMore.css'
import Modal from "../UI/Modal.jsx";
import {UserContext} from "../../App.jsx";
import {onAuthStateChanged} from "firebase/auth";
import {toast} from "react-toastify";

function AdsItemMore({}) {
    const navigate = useNavigate()
    const [isLoggedIn] = useContext(UserContext)
    const dbRef = ref(db);
    const [adsItem, setAdsItem] = useState({})
    const [user, setUser] = useState({})
    const [client, setClient] = useState({})
    const [imageSrc, setImageSrc] = useState("")
    const [isClicked, setIsClicked] = useState(false)
    const id = useParams().id

    useEffect(() => {
        getAdsItem(dbRef)
        onAuthStateChanged(auth, user => {
            setClient(user)
        })
    }, [])

    useEffect(() => {
        if(!isLoggedIn){
            navigate("/services")
        }
    }, [isLoggedIn])

    useEffect(() => {
        if(Object.keys(adsItem).length !== 0){
            getUser(dbRef)
            setImageSrc(Object.values(adsItem?.Images)[0]?.imageUrl)
        }
        console.log(adsItem)
    }, [adsItem])

    function getAdsItem(dbRef){
        get(child(dbRef, `Ads/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setAdsItem(snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    function getUser(dbRef){
        console.log("UID: "+ adsItem.uid)
        get(child(dbRef, `Users/${adsItem.uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setUser(snapshot.val())
            } else {
                console.log("No data available");
            }
        }).then(response => console.log(response))
            .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        console.log(client)
    }, [client])


    function sendEmail(){
        if(user.email.length!==0 && Object.keys(adsItem).length !== 0){
            Email.send({
                SecureToken: "1f8368b1-1f28-476d-95be-d906c59353fc",
                Host : "smtp.elasticemail.com",
                Username: "aliyaroova.03@gmail.com",
                Password: "FA813365DC64B0D77A10CA6EC2F9276E9FC8",
                To : user.email,
                From : "aliyaroova.03@gmail.com",
                Subject : "Almasu",
                Body : `Добрый день, ${user.name}.  <br/> 
                        На вашу услуг <b><i>${adsItem.nameService}</i></b> кто то откликнулся.<br/> 
                        Почта клиента: ${client.email}`
            }).then(
                message => {
                    if(message==="OK"){
                        toast.success("Вы откликнулись!", {
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
                    else{
                        toast.error("Ошибка отклика", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        console.log(message)
                    }
                }
            );
        }
    }

    if(adsItem){
        return (
            <div>
                <div className="course-item--wrapper">
                    <article className="course-item">
                        <div className="course-item__image" onClick={() => setIsClicked(true)}>
                           <img src={imageSrc}/>
                        </div>
                        <div className="course-item__info">
                            <div>
                                <h4>{adsItem.nameService}</h4>
                                <div className="course-item__info__category">{adsItem.category}</div>
                                <p>
                                    {adsItem.description}
                                </p>
                            </div>
                            <div>
                                <div className="course-item__info__address">
                                    <i className="uil uil-location-point"></i>{adsItem.address}
                                </div>
                                <div className="course-item__info__user">
                                    <i className="uil uil-user"></i>{user.name}
                                </div>
                                <a style={{padding: '0.5rem 2rem'}} className="btn btn-primary" onClick={() => navigate("/services")}>Назад</a>
                                <a style={{padding: '0.5rem 2rem', marginLeft: '40px', backgroundColor: "blue"}} className="btn btn-primary" onClick={sendEmail}>Откликнуться</a>
                            </div>
                        </div>
                    </article>
                </div>
                <Modal visible={isClicked} setVisible={setIsClicked}><img src={imageSrc}/></Modal>
                <Footer/>
            </div>
        );
    }

}

export default AdsItemMore;
