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
import Year2010_2015 from "../collection/Year2010_2015";
import Year2017 from "../collection/Year2015_2020";
import Year2020_2023 from '../collection/Year2020_2023';
import Upcoming from "../upcoming/Upcoming";
import Hero_Year from '../heroYear/Hero_Year'

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
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/2010-2015" element={[<Hero_Year />, <Year2010_2015 />]} />
                <Route path="/2015-2020" element={[<Hero_Year />, <Year2017 />]} />
                <Route path="/2020-2022" element={[<Hero_Year />, <Year2020_2023 />]} />
                <Route path="/Upcoming" element={[<Hero_Year />, <Upcoming />]} />
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
