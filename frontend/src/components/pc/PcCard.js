import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.scss'
const PcCard = ({ data }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'prev' && currentIndex !== 0) { setCurrentIndex((prevIndex) => prevIndex - 1); }
    else if (direction === 'next' && currentIndex + 5 < data.length) { setCurrentIndex((nextIndex) => nextIndex + 1); }

  };
  const hasData = data.length > 0;
  const showNextButton = currentIndex <= data.length - 5;
  return (
    <div>
      <h3 className='text'><strong>Pc Games</strong></h3>
      <div className='bigDiv1'>
      {hasData && (
        <div className='btn'>
          <button onClick={() => handleClick('prev')} disabled={currentIndex === 0} style={{ border: '1', backgroundColor: 'black' }}> <GrLinkPrevious size='30px' filter='invert(100%)'/></button>
      </div>)}
      <div>
        <Row className='Row1'>{
          data.slice(0, 15).slice(currentIndex, currentIndex + 4)
            .map((item, index) => {
              return (
                <Link to={`/details/${item.id}`} ><img key={index} src={item.thumbnail} alt={"Image "} />
                </Link>
              )
            }
            )}</Row>
      </div>
      {hasData && (
        <div className='btn'>
          {showNextButton && (
            <button onClick={() => handleClick('next')} disabled={currentIndex === 4} style={{ border: '1', backgroundColor: 'black' }}><GrLinkNext size='30px' filter='invert(100%)' /></button>
            )}
            </div>
      )}
</div>

    </div>
  );

};
export default PcCard;

