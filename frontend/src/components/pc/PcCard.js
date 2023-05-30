import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";
const PcCard = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "prev" && currentIndex !== 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else if (direction === "next" && currentIndex + 5 < data.length) {
            setCurrentIndex((nextIndex) => nextIndex + 1);
        }
    };
    const hasData = data.length > 0;
    const showNextButton = currentIndex <= data.length - 5;
    return (
        <div className="games">
            <h3>
                {" "}
                <strong>Pc Games </strong>
            </h3>

            <div className="relative container">
                <div className="row">
                    {data
                        .slice(0, 15)
                        .slice(currentIndex, currentIndex + 4)
                        .map((item, index) => {
                            return (
                                <div className="col-md-3">
                                    <div>
                                        <Link
                                            key={item.id}
                                            to={`/details/${item.id}`}
                                        >
                                            <img
                                                className="img-fluid"
                                                key={index}
                                                src={item.thumbnail}
                                                alt={"Image "}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}

                </Row>
            </div>
            {hasData && (
                <div className="btn w-100">
                    <button className="btns"
                        onClick={() => handleClick("prev")}
                        disabled={currentIndex === 0}
                        style={{ border: "0", backgroundColor: "transparent" }}
                    >
                        <GrLinkPrevious />
                    </button>
                    {showNextButton && (
                        <button
                            onClick={() => handleClick("next")}
                            disabled={currentIndex === 4}
                            style={{
                                border: "0",
                                backgroundColor: "transparent",
                            }}
                        >
                            <GrLinkNext />
                        </button>

                    )}
                </div>
            </div>
        </div>
    );
};
export default PcCard;
