import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../details/Details";
import { useEffect, useState } from "react";
import axios from "axios";
import Favourite from "../favourite/Favourite";
import Feedback from "react-bootstrap/esm/Feedback";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";
import Home from "../Home/Home";
import Team from "../Team/Team";

import Category from "../category/Category";
import Platform from '../plateform/Platform'
import { Row } from "react-bootstrap";

function Router() {
    const [data, setData] = useState([]);
    const [Brdata, setBrData] = useState([]);

    const fetchdata = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_URL}/pc`);
            setData(result.data);
        } catch (err) {
            console.log(err);
        }
    };

    const dataBr = async () => {
        try {
            const result = await axios.get(
                `${process.env.REACT_APP_URL}/browser`
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

    const [filterd, setFilterd] = useState([]);
    return (
        <div>
            <Navbar games={[...data, ...Brdata]} setFilterd={setFilterd} filterd={filterd} />

            <Routes>
                <Route path="/category" element={filterd.length && <Category filterd={filterd} />} />
                {/* <Route path="/plate" element={filterd.length && <Platform filterd={filterd} />} /> */}
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
            {/* <Footer /> */}
        </div>
    );
}

export default Router;
