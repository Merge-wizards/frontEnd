import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Browser from "../browser/Browser";

import Hero from "../hero/Hero";
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
            .post(`http://localhost:3/fav`, card[0])
            .then((result) => console.log(result.data))
            .catch((err) => console.log(err));
    };
    return (
        <div className="wrapper">
            <Hero />
            <div className="c-d">
                <div className="img-div">
                    <img
                        src={card[0].thumbnail}
                        className="c-image"
                        alt="no-pic"
                    />
                    <button
                        className="btn btn-success"
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
                    {/* <button
                        className="btn btn-success"
                        onClick={() => fetchFav()}
                    >
                        Send To favorite
                    </button> */}
                </div>
            </div>

            {dataBr?.length > 0 && <Browser dataBr={dataBr} />}
        </div>
    );
}
export default Details;
