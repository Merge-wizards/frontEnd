import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./style.scss";
import { Link, useParams } from "react-router-dom";

function Category() {
    const [showMore, setShowMore] = useState(false);
    const [actions, setActions] = useState([]);

    const { selectedCategory } = useParams();

    const category = () => {
        axios
            .get(`${process.env.REACT_APP_URL}/category`, {
                params: {
                    category: selectedCategory,
                },
            })
            .then((res) => setActions(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        category();
    }, [selectedCategory]);
    return (
        <div className="bigdiv">
            {actions &&
                actions.slice(0, 20).map((item, index) => {
                    return (
                        <div key={index}>
                            <Card className="wrap">
                                <Link key={item.id} to={`/details/${item.id}`}>
                                    <Card.Img
                                        variant="top"
                                        src={item.thumbnail}
                                    />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>

                                    <Card.Text className="h6">
                                        {showMore
                                            ? item.short_description
                                            : `${item.short_description.substring(
                                                  0,
                                                  50
                                              )}`}

                                        <button
                                            className="btn"
                                            onClick={() =>
                                                setShowMore(!showMore)
                                            }
                                        >
                                            {showMore
                                                ? "Show less"
                                                : "Show more"}
                                        </button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
}

export default Category;
