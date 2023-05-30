import axios from "axios";
import React, { useEffect, useState } from "react";
import "./fav.scss";
import { GrTrash } from "react-icons/gr";
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
    // deleteFav()
    useEffect(() => {
        getFav([]);
    }, [refreshCall]);
    // console.log("this is data",data);
    return (
        <div id="favorite" className="big-div container">
            <div className="row">
                {data.length &&
                    data.map((item) => {
                        return (
                            <div key={item.id} className="col-4">
                                <div className="card">
                                    <img
                                        src={item.thumbnail}
                                        className="c-image"
                                    />
                                    <div className="card-body">
                                        <div className="column">
                                            <h2>{item.title}</h2>
                                            <p>{item.short_description}</p>
                                        </div>
                                        <div className="btns d-flex justify-content-center">
                                            <button
                                                className="btn btn-transparent "
                                                onClick={() =>
                                                    deleteFav(item.id)
                                                }
                                            >
                                                <GrTrash size="50%" />
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
