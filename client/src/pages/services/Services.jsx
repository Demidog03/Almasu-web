import React, {useContext, useEffect, useState} from 'react';
import {auth, db} from '../../firebase/firebase.js';
import { onValue, ref } from "firebase/database";
import Footer from "../../components/footer/Footer.jsx";
import AdsItem from "../../components/adsItem/AdsItem.jsx";
import './Services.css'
import {UserContext} from "../../App.jsx";
import {useNavigate} from "react-router-dom";

function Services() {
    const navigate = useNavigate()
    const [isLoggedIn] = useContext(UserContext)
    const [ads, setAds] = useState({})
    const [services, setServices] = useState([])
    const [updatedServices, setUpdatedServices] = useState([])


    useEffect(() => {
        const starCountRef = ref(db, 'Ads');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if(Object.values(data).length!==0){
                setAds(data)
            }
        });
    }, []);

    const filterBySearch = (event) => {

        // Access input value
        const query = event.target.value;

        // Create copy of item list
        let updatedList = [...services];
        console.log(updatedList)
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) =>{
            return item.props.nameService.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setUpdatedServices(updatedList);
    };

    useEffect(() => {
        console.log(Object.values(ads).length!==0)
            if(Object.values(ads).length!==0){
                const data =  Object.values(ads).map(ad => {
                    return <AdsItem
                        key={ad.id}
                        nameService={ad.nameService}
                        description={ad.description}
                        src={Object.values(ad.Images)[0].imageUrl}
                        id={ad.id}/>
                })
                console.log(data)
                setServices(data)
                setUpdatedServices(data)
            }
        }, [ads])
    return (
        <div>
            <section className="courses">
                {isLoggedIn &&  <div className="btn btn-primary courses__btn" onClick={() => navigate("/addService")}>Добавить услугу</div>}
                <div className="input-box">
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Поиск..." onChange={e => filterBySearch(e)}/>
                    {/*<button className="button">Search</button>*/}
                </div>

                <div className="container courses__container">
                    {updatedServices.length!==0 ? updatedServices : <h4>Здесь пусто</h4>}
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Services;
