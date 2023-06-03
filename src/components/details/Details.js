import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Browser from "../browser/Browser";
import Btn_For_Collection from '../btn_For_collection/Btn_For_Collection'
import Hero from "../hero/Hero";
import detailsImg from "../../assets/details.jpg";

// import Hero from "../hero/Hero";

function Details({ data, dataBr }) {
    // console.log(data[0].id);
    const { id } = useParams();
    // console.log(id)
    let card;

    for (let i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            card = data.filter((ele) => ele.id == id);
            // console.log(card)
        }
    }
    for (let j = 0; j < dataBr.length; j++) {
        if (id == dataBr[j].id) {
            card = dataBr.filter((ele) => ele.id == id);
            // console.log(card)
        }
    }
    const fetchFav = () => {
        axios
            .post(`${process.env.REACT_APP_URL}/fav`, card[0])
            .then((result) => console.log(result.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const pageHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollToMiddle = Math.max(0, pageHeight / 2 - windowHeight / 2);
        window.scrollTo(0, scrollToMiddle);
    }, []);

    return (
        <div className="wrapper">

     
            <Btn_For_Collection/>

            <div>
                <h2 className="details-title"> Details page</h2>
                <img className="details-img" src={detailsImg} alt="no-pic" />
            </div>

            <div className="c-d">
                <div className="img-div">
                    <img
                        src={card[0].thumbnail}
                        className="c-image"
                        alt="no-pic"
                    />
                    <button
                        className="add-fav-button"
                        onClick={() => fetchFav()}
                    >
                        Send To favorite
                    </button>
                </div>
                <div className="column">
                    <h2 className="title">{card[0].title}</h2>
                    <h3 className="platform"> {card[0].platform}</h3>
                    <h4 className="releaseData">
                        {" "}
                        release date : {card[0].release_date}
                    </h4>
                    <p className="description">{card[0].short_description}</p>
                </div>
            </div>
            <div className="details-data">
                {dataBr?.length > 0 && <Browser dataBr={dataBr} />}
            </div>
        </div>
    );
}

export default Details;
