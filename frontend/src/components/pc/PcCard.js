import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css'
const PcCard = () => {
    const [data, setData] = useState([]);


    const [currentIndex, setCurrentIndex] = useState(0);

    const Data = () => {
        axios.get(`${process.env.REACT_APP_URL}/pc`).then(res => setData(res.data)).catch(err => console.log(err))
    }
    useEffect(() => {
        Data([])
    }, []);

    const handleClick = (direction) => {
        if (direction === 'prev' && currentIndex !== 0) { setCurrentIndex((prevIndex) => prevIndex - 1); }
        else if (direction === 'next' && currentIndex + 5  < data.length ) { setCurrentIndex((nextIndex) => nextIndex + 1); }
       
    };
    const renderImages = () => {
        return data.slice(0,15).slice(currentIndex, currentIndex + 5)
            .map((item, index) => (<img key={index} src={item.thumbnail} alt={`Image ${index + 1}`} />));
    };
   
    const hasData = data.length > 0;
  const showNextButton = currentIndex <= data.length - 5;
  return (
    <div>
      <h3>Pc Games</h3>
      <div>
        <Row className='Row'>{hasData && renderImages()}</Row>
      </div>
      {hasData && (
        <div className='btn'>
          
          <button onClick={() => handleClick('prev')} disabled={currentIndex === 0} style={{border:'0', backgroundColor:'transparent'}}> <GrLinkPrevious/></button>
          {showNextButton && (
            <button onClick={() => handleClick('next')} disabled={currentIndex === 5} style={{border:'0', backgroundColor:'transparent'}}><GrLinkNext/></button>
          )}
        </div>
      )}
    </div>
  );

};
export default PcCard;
