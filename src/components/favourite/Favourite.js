import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./fav.scss";

function Favourite() {
    const [data, setData] = useState([]);
    const [refreshCall, setRefreshCall] = useState(false);

    const getFav = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_URL}/fav`);
            setData(result.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteFav = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_URL}/delete/${id}`);
            console.log("Item deleted");
            setRefreshCall(!refreshCall);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getFav([]);
    }, [refreshCall]);

    return (
        <div id="favorite" className="big-div container">
            <div className="fav-title-div">
                <h1 className="fav-title">Favorite page</h1>
                <img
                    className="fav-img"
                    src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/Header_1.jpg"
                    alt="no-pic"
                />
            </div>
            <div className="row">
                {data.length > 0 &&
                    data.map((item) => {
                        return (
                            <div key={item.id} className="col-4">
                                <div className="card">
                                    <img
                                        src={item.thumbnail}
                                        className="c-image"
                                        alt="no-pic"
                                    />
                                    <div className="card-body">
                                        <div className="column">
                                            <h2>{item.title}</h2>
                                            <p>{item.short_description}</p>
                                        </div>
                                        <div className="btns d-flex justify-content-center">
                                            <button
                                                className="btn btn-transparent"
                                                onClick={() =>
                                                    deleteFav(item.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className="trash-icon"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Favourite;
