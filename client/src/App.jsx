import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import {useEffect, createContext, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase/firebase.js";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import About from "./pages/about/About.jsx";
import Main from "./pages/main/Main.jsx";
import Sign from "./pages/sign/Sign.jsx";
import Services from "./pages/services/Services.jsx";
import Header from "./components/header/Header.jsx";
import AdsItemMore from "./components/adsItemMore/AdsItemMore.jsx";
import AddService from "./pages/addService/AddService.jsx";
import Contact from "./pages/contact/Contact.jsx";

export const UserContext = createContext([])

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [uid, setUid] = useState("")

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("uid: ", user.uid)
                setUid(user.uid)
                setIsLoggedIn(true)
            } else {
                // User is signed out
                setIsLoggedIn(false)
                console.log("user is logged out")
            }
        });
    }, [])

    return (
        <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/main"} element={<Main/>}/>
                    <Route path={"/sign"} element={<Sign/>}/>
                    <Route path={"/services"} element={<Services/>}/>
                    <Route path={"/services/:id"} element={<AdsItemMore/>}/>
                    <Route path={"/addService"} element={<AddService uid={uid}/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </UserContext.Provider>
  )
}

export default App
