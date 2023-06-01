import axios from "axios";
import React, { useEffect, useState } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Team from "../Team/Team";
import Details from "../details/Details";
import Favourite from "../favourite/Favourite";
import Navbar from "../nav/Navbar";
import GamesByType from "../GamesByType/GamesByType";
import Footer from "../footer/Footer";
function Router() {
    const [data, setData] = useState([]);
    const [Brdata, setBrData] = useState([]);

    const fetchdata = async () => {
        try {
            const result = await axios.get(`http://localhost:3002/pc`);
            setData(result.data);
        } catch (err) {
            console.log(err);
        }
    };

    const dataBr = async () => {
        try {
            const result = await axios.get(
                `http://localhost:3002/browser`
            );
            setBrData(result.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchdata();
        dataBr();
    }, []);

    return (
        <div>
            <Navbar games={[...data, ...Brdata]} />

            <Routes>
                <Route
                    path="/category/:id"
                    element={<GamesByType type="category" />}
                />
                <Route
                    path="/plate/:id"
                    element={<GamesByType type="platform" />}
                />
                <Route path="/about-us" element={<Team />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/about-us" element={<Team />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route
                    path="/"
                    element={<Home data={data} dataBr={Brdata} />}
                />

                <Route
                    path="/details/:id"
                    element={
                        data.length && <Details data={data} dataBr={Brdata} />
                    }
                />
            </Routes>

            {/* <FavList/> */}
            <Footer />
        </div>
    );
}

export default Router;
