import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Browser from "../browser/Browser";
import Footer from "../footer/Footer";

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

    return (
        <>
            <div className="wrapper container">
                <div className="c-d row">
                    <div className="col-3">
                        <img src={card[0].thumbnail} className="c-image" />
                    </div>
                    <div className="col-9">
                        <div className="column">
                            <h2> {card[0].title}</h2>
                            <p className="wraptext">
                                {card[0].short_description}
                            </p>

                            <button
                                className="btn btn-success"
                                onClick={() => fetchFav()}
                            >
                                Send To favoutire
                            </button>
                        </div>
                    </div>
                </div>
                {dataBr?.length > 0 && <Browser dataBr={dataBr} />}
            </div>
            <Footer />
        </>
    );
}

export default Details;
