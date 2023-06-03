import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function Year2015_2020() {
    const [year, setYear] = useState([]);

    const test = () => {
        axios
            .get(
                `https://api.rawg.io/api/games?key=e03886b2707f46558eecaec1fe43a8ae&dates=2015-10-10,2020-10-10`
            )
            .then((res) => setYear(res.data.results));
    };

    useEffect(() => {
        test();
    }, []);

    console.log(year);

    return (
        <div className="bdiv">
            {year &&
                year.map((item) => (
                    <Card className="wraps" key={item.id}>
                        <Card.Img
                            className="imgYear"
                            variant="top"
                            src={item.background_image}
                        />
                        <Card.Body className="bodyCard">
                            <Card.Title className="cardTitle">
                                {item.name}
                            </Card.Title>
                            <Card.Text className="font">
                                Rate: {item.rating}{" "}
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="star-icon"
                                />
                            </Card.Text>
                            <Card.Text className="font">
                                Released Date: {item.released}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
        </div>
    );
}
export default Year2015_2020;
