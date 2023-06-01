import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.scss';

const PcCard = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'prev' && currentIndex !== 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === 'next' && currentIndex + 4 < data.length) {
      setCurrentIndex((nextIndex) => nextIndex + 1);
    }
  };

  const hasData = data.length > 0;
  const showNextButton = currentIndex <= data.length - 5;

  return (
    <div className='all1'>
      <h3 className="text">
        <strong>Pc Games</strong>
      </h3>
      <div className="bigDiv1">
        {hasData && (
          <div className="btn" style={{ marginRight:'2%', width:'3rem'}}>
            <Button
              onClick={() => handleClick('prev')}
              disabled={currentIndex === 0}
              style={{ border: '0', backgroundColor: 'rgba(245, 222, 179, 0.329)', width: '3rem' }}
            >
              <GrLinkPrevious size="200px" filter="invert(100%)" style={{paddingTop:'50%'}}/>
            </Button>
          </div>
        )}
        <div>
          <Row className="Row1">
            {data
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
        {hasData && (
          <div className="btn" style={{marginLeft:'15%', width:'3rem' }}>
            {showNextButton && (
              <Button
                onClick={() => handleClick('next')}
                disabled={currentIndex + 4 >= data.length}
                style={{ border: '0', backgroundColor: 'rgba(245, 222, 179, 0.329)',  width: '3rem' }}
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

export default PcCard;
