import {useContext} from "react";
import {UserContext} from "../../App.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import './AdsItem.css'


function AdsItem({nameService, description, src, id}) {
    const navigate = useNavigate()
    const [isLoggedIn] = useContext(UserContext)

    function seeMore(){
        if(isLoggedIn){
            navigate(`/services/${id}`)
        }
        else{
            toast.error('Please sign in to see more!', {
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
    }

    return (
        <article className="course">
            <div className="course__image">
                <img src={src}/>
            </div>
            <div className="course__info">
                <h4>{nameService}</h4>
                <p>
                    {description.substring(0, 60)}...
                </p>
                <a className="btn btn-primary" onClick={seeMore}>Узнать больше</a>
            </div>
        </article>
    );
}

export default AdsItem;
