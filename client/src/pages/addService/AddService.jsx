import {useContext, useEffect, useRef, useState} from 'react';
import {st, db} from "../../firebase/firebase.js";
import {ref as stRef, uploadBytesResumable, getDownloadURL  } from 'firebase/storage'
import { ref, push, set } from "firebase/database";
import Footer from "../../components/footer/Footer.jsx";
import './AddService.css'
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../App.jsx";

function AddService({uid}) {
    const navigate = useNavigate()
    const [isLoggedIn] = useContext(UserContext)
    const [serviceData, setServiceData] = useState({})
    const [percent, setPercent] = useState(0);
    const [image, setImage] = useState({})
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const imageRef = useRef(null)
    const statusRef = useRef(null)
    const addressRef = useRef(null)
    const categoryRef = useRef(null)

    useEffect(() => {
        if(!isLoggedIn){
            navigate("/services")
        }
    }, [isLoggedIn])

    async function saveData(e){
        e.preventDefault();
        const image = imageRef.current.files[0]

        if(!image){
            alert("Вы не загрузили фотографию")
        }

        else{
            const storageRef = stRef(st, `/Ads/${image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    // update progress
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                        setImage({
                            id: uploadTask._metadata.generation,
                            imageUrl: url
                        })
                    });
                }
            );
        }

        /*getting latitude, longitude and timestamp*/
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                 const latitude = position.coords.latitude;
                 const longitude = position.coords.longitude;
                 const timestamp = new Date().getTime()
                 //setting data
                setServiceData({
                    latitude,
                    longitude,
                    timestamp,
                    uid,
                    nameService: titleRef.current.value,
                    status: statusRef.current.value,
                    address: addressRef.current.value,
                    description: descRef.current.value,
                    category: categoryRef.current.value,
                })
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    useEffect(() => {
        if(Object.keys(image).length !== 0){
            setServiceData({...serviceData, Images: {[image.id]: image}})
        }
    }, [image])

    useEffect(() => {
        const testRef = ref(db, "Ads")
        if(Object.keys(serviceData).length !== 0 && !Object.values(serviceData).includes(undefined) && Object.keys(image).length !== 0){
            const newRef = push(testRef);
            const config = {
                ...serviceData,
                id: newRef.key
            }
            set(newRef, config)
        }
    }, [serviceData])

    return (
        <div className="addService">
            <form onSubmit={(event) => saveData(event)}>
                <label>
                    <h3>Загрузите фото</h3>
                    <input type="file" accept="image/*" ref={imageRef}/>
                </label>
                <label>
                    <h3>Название</h3>
                    <input type="text" ref={titleRef}/>
                </label>
                <label>
                    <h3>Адрес</h3>
                    <input type="text" ref={addressRef}/>
                </label>
                <label>
                    <h3>Категория</h3>
                    <input type="text" ref={categoryRef}/>
                </label>
                <label>
                    <h3>Описание</h3>
                    <textarea ref={descRef}/>
                </label>
                <label>
                    <h3>Статус</h3>
                    <select ref={statusRef}>
                        <option value="AVAILABLE">Доступно</option>
                        <option value="UNAVAILABLE">Не доступно</option>
                    </select>
                </label>
                <button className="btn btn-primary saveBtn">Сохранить</button>
                <h2>Загружено: {percent}%</h2>
            </form>
            <Footer/>
        </div>
    );
}

export default AddService;
