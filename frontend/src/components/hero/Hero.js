import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../assets/game.jpg";
import img2 from "../../assets/game2.jpg";
import img3 from "../../assets/game3.jpg";
// import img4 from "../../assets/game4.jpg";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
const Hero = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:3001/game")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data);
    //         })
    //         .catch((error) => console.error(error));
    //     const timer = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    //     }, 3000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);
    return (
        <section className="section">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};
export default Hero;
