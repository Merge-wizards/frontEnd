import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import axios from "axios";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
const Browser = ({ dataBr }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "prev" && currentIndex !== 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else if (direction === "next" && currentIndex + 5 < dataBr.length) {
            setCurrentIndex((nextIndex) => nextIndex + 1);
        }
    };

    const hasdataBr = dataBr.length > 0;
    const showNextButton = currentIndex <= dataBr.length - 5;
    return (
        <div className='all2'>
      <h3 className="text2">
        <strong>Browser Games</strong>
      </h3>
      <div className="bigDiv2">
        {hasdataBr && (
          <div className="btn" style={{marginRight:'2%', width:'3rem'}}>
            <Button
              onClick={() => handleClick('prev')}
              disabled={currentIndex === 0}
              style={{ border: '0',  backgroundColor: 'rgba(0, 0, 0, 0.829)',  width: '4rem'}}
            >
              <GrLinkPrevious size="200px" filter="invert(100%)" />
            </Button>
          </div>
        )}
        <div>
          <Row className="Row2">
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
          <div className="btn" style={{  marginLeft:'15%', width:'3rem'  }}>
            {showNextButton && (
              <Button
                onClick={() => handleClick('next')}
                disabled={currentIndex + 4 >= dataBr.length}
                style={{ border: '0',  backgroundColor: 'rgba(0, 0, 0, 0.829)',  width: '4rem'}}
              >
                <GrLinkNext size="200px" filter="invert(100%)"  />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
    );
};
export default Browser;
