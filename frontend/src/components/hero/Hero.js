import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../assets/game.jpg";
import img2 from "../../assets/game2.jpg";
import img3 from "../../assets/game3.jpg";
import img4 from "../../assets/game4.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./style.css";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/game")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data[0].thumbnail)
                setData(data);
            })
            .catch((error) => console.error(error));
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <section className="section">
            <MDBCarousel showIndicators showControls fade>
                <div className="img1">
                    <MDBCarouselItem
                        className="w-100 d-block hero"
                        itemId={1}
                        src={img}
                        alt="..."
                    >
                        <h5>First slide label</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </MDBCarouselItem>
                </div>

                <MDBCarouselItem
                    className="w-100 d-block hero"
                    itemId={2}
                    src={img2}
                    alt="..."
                >
                    <h5>Second slide label</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className="w-100 d-block hero"
                    itemId={3}
                    src={img3}
                    alt="..."
                >
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className="w-100 d-block hero"
                    itemId={4}
                    src={img4}
                    alt="..."
                >
                    <h5>Second slide label</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </MDBCarouselItem>
            </MDBCarousel>
        </section>
    );
};
export default Hero;

// <div className='div'>

//   {
//     data.length && (

//         <Row  selectedItem={currentIndex} className='Row'>

//         {data.slice(0, 5).map((item, index) => (

//             <img key={index} src={item.thumbnail} alt={`Image ${index + 1}`} className='img'/>

//         ))}
//          </Row>

//     )

//   }
// </div>
