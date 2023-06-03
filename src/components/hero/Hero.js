// <<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img from "../../assets/game.jpg";
// import img2 from "../../assets/game2.jpg";
// import img3 from "../../assets/game3.jpg";
// // import img4 from "../../assets/game4.jpg";
// // import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// import "./style.css";
// import Carousel from "react-bootstrap/Carousel";
// const Hero = () => {
//     // const [currentIndex, setCurrentIndex] = useState(0);
//     // const [data, setData] = useState([]);
//     // useEffect(() => {
//     //     fetch("http://localhost:3001/game")
//     //         .then((response) => response.json())
//     //         .then((data) => {
//     //             setData(data);
//     //         })
//     //         .catch((error) => console.error(error));
//     //     const timer = setInterval(() => {
//     //         setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
//     //     }, 3000);
//     //     return () => {
//     //         clearInterval(timer);
//     //     };
//     // }, []);
// =======
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import img4 from "../../assets/game4.jpg";
import img2 from "../../assets/game2.jpg";
import img3 from "../../assets/game3.jpg";
import img from "../../assets/game.jpg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "./style.css";


const Hero = ({ games }) => {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = (text) => {
        const result = games.filter((e) =>
            e.title.toLowerCase().includes(text.toLowerCase())
        );

        setSearchResult(result);
    };

    const sumbitHandler = (e) => {
        e.preventDefault();
        if (searchResult.length === 1) {
            navigate(`/details/${searchResult[0].id}`);
        }
    };


    return (
        <section className="section">
            <Carousel>
                <Carousel.Item>
                    <img
                        // <<<<<<< HEAD
                        //                         className="d-block w-100"
                        // =======
                        className="w-50"

                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <<<<<<< HEAD
                        <h3>Home is where you are 'Player 1'.</h3>
======= */}
                        <h3 className="hs">Home is where you are 'Player 1'.</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        // className="d-block w-100"

                        className="w-50"

                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>


                        <h3 className="hs">Eat. Sleep. Game. Repeat.</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // <<<<<<< HEAD
                        //                         className="d-block w-100"
                        // =======
                        className="w-50"

                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        <h3 className="hs">

                            I'm not a player. I'm a gamer. Players get chicks. I
                            get achievements.
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-50"
                        src={img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="hs">
                            A game is the complete exploration of freedom within a restrictive environment
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <form
                onSubmit={sumbitHandler}
                className="search"
            >
                <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="example: pubg ... "
                    onInput={(e) => searchHandler(e.target.value)}
                />
                <datalist id="datalistOptions">
                    {searchResult.length > 0 &&
                        searchResult.map((e, index) => {
                            return (
                                <option
                                    key={index}
                                    value={e.title}
                                    onClick={() =>
                                        navigate(`/details/${e.id}`)
                                    }
                                />
                            );
                        })}
                </datalist>
            </form>
            =
        </section>
    );
};
export default Hero;
