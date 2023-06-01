import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import axios from "axios";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
const Browser = ({ dataBr }) => {
    // const [dataBr, setdataBr] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);

    // const dataBr = () => {
    //     axios.get(`${process.env.REACT_APP_URL}/browser`).then(res => setdataBr(res.dataBr)).catch(err => console.log(err))
    // }
    // useEffect(() => {
    //     dataBr([])
    // }, []);

    const handleClick = (direction) => {
        if (direction === "prev" && currentIndex !== 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else if (direction === "next" && currentIndex + 5 < dataBr.length) {
            setCurrentIndex((nextIndex) => nextIndex + 1);
        }
    };
    // const renderImages = () => {
    //     return dataBr.slice(0,15).slice(currentIndex, currentIndex + 4)
    //         .map((item, index) => (<Link><img key={index} src={item.thumbnail} alt={`Image ${index + 1}`}/></Link>));
    // };

    const hasdataBr = dataBr.length > 0;
    const showNextButton = currentIndex <= dataBr.length - 5;
    return (
        <div className='all2'>
      <h3 className="text">
        <strong>Browser Games</strong>
      </h3>
      <div className="bigDiv1">
        {hasdataBr && (
          <div className="btn">
            <Button
              onClick={() => handleClick('prev')}
              disabled={currentIndex === 0}
              style={{ border: '0', backgroundColor: 'black', width: '3rem' }}
            >
              <GrLinkPrevious size="30px" filter="invert(100%)" />
            </Button>
          </div>
        )}
        <div>
          <Row className="Row1">
            {dataBr
              .slice(currentIndex, currentIndex + 4)
              .map((item, index) => {
                return (
                  <Col key={index} md={4}>
                    <Card>
                      <Link to={`/details/${item.id}`}>
                        <Card.Img
                          className="img-fluid"
                          src={item.thumbnail}
                          alt="Image"
                        />
                      </Link>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
        {hasdataBr && (
          <div className="btn" style={{ marginRight:'-25rem' }}>
            {showNextButton && (
              <Button
                onClick={() => handleClick('next')}
                disabled={currentIndex + 4 >= dataBr.length}
                style={{ border: '0', backgroundColor: 'black',width: '3rem' }}
              >
                <GrLinkNext size="30px" filter="invert(100%)"  />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
    );
};
export default Browser;
