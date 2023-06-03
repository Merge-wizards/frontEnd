import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Browser from "../browser/Browser";
import detailsImg from "../../assets/detailsImg.jpg";
import { RiHeartAddFill } from "react-icons/ri";
import { Card, Button } from "react-bootstrap";
import PcCard from "../pc/PcCard";
import { Link } from "react-router-dom";

function Details({ data, dataBr }) {
    const { id } = useParams();
    const scrollRef = useRef();

    let card;
    for (let i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            card = data.filter((ele) => ele.id == id);
        }
    }
    for (let j = 0; j < dataBr.length; j++) {
        if (id == dataBr[j].id) {
            card = dataBr.filter((ele) => ele.id == id);
        }
    }

    const fetchFav = () => {
        axios
            .post(`${process.env.REACT_APP_URL}/fav`, card[0])
            .then((result) => console.log(result.data))
            .catch((err) => console.log(err));
    };

    const isBrowser = card[0].platform === "Web Browser";
    const isPc = card[0].platform === "PC (Windows)";

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);

    return (
        <div className="wrapper">
            <div>
                <h2 className="details-title">Details page</h2>
                <div
                    className="details-img"
                    src={detailsImg}
                    alt="no-pic"
                ></div>
            </div>
            <div className="c-d" ref={scrollRef}>
                <Card className="img-div">
                    <img
                        src={card[0].thumbnail}
                        className="c-image"
                        alt="no-pic"
                    />
                    <button
                        className="add-fav-button"
                        onClick={() => fetchFav()}
                    >
                        <RiHeartAddFill className="heart-icon" size="100px" />
                    </button>
                </Card>
                <div className="column">
                    <h2 className="title">{card[0].title}</h2>
                    <h3 className="platform"> {card[0].platform}</h3>
                    <h4 className="releaseData">
                        {" "}
                        release date : {card[0].release_date}
                    </h4>
                    <p className="description">{card[0].short_description}</p>
                    <Link to={card[0].game_url} className="play">
                        <Button>Go to the game</Button>
                    </Link>
                </div>
            </div>
            <div className="details-data">
                {isPc && <PcCard data={data} />}
                {isBrowser && <Browser dataBr={dataBr} />}
            </div>
        </div>
    );
}

export default Details;
