import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css'
const Browser = ({dataBr}) => {
    // const [dataBr, setdataBr] = useState([]);


    const [currentIndex, setCurrentIndex] = useState(0);

    // const dataBr = () => {
    //     axios.get(`${process.env.REACT_APP_URL}/browser`).then(res => setdataBr(res.dataBr)).catch(err => console.log(err))
    // }
    // useEffect(() => {
    //     dataBr([])
    // }, []);

    const handleClick = (direction) => {
        if (direction === 'prev' && currentIndex !== 0) { setCurrentIndex((prevIndex) => prevIndex - 1); }
        else if (direction === 'next' && currentIndex + 5  < dataBr.length ) { setCurrentIndex((nextIndex) => nextIndex + 1); }
       
    };
    // const renderImages = () => {
    //     return dataBr.slice(0,15).slice(currentIndex, currentIndex + 4)
    //         .map((item, index) => (<Link><img key={index} src={item.thumbnail} alt={`Image ${index + 1}`}/></Link>));
    // };
   
    const hasdataBr = dataBr.length > 0;
  const showNextButton = currentIndex <= dataBr.length - 5;
  return (
    <div>
        <h3>Browser Games</h3>
      <div>
      <Row className='Row'>{
          dataBr.slice(0, 15).slice(currentIndex, currentIndex + 4)
              .map((item, index) =>
             { 
              return(

       <Link to= {`/details/${item.id}`} ><img key={index} src={item.thumbnail} alt={"Image "} />
       </Link>
              )
             }
)        }</Row>
      </div>
      {hasdataBr && (
        <div>
         <button onClick={() => handleClick('prev')} disabled={currentIndex === 0} style={{border:'0', backgroundColor:'transparent'}}> <GrLinkPrevious/></button>
          {showNextButton && (
            <button onClick={() => handleClick('next')} disabled={currentIndex === 4} style={{border:'0', backgroundColor:'transparent'}}><GrLinkNext/></button>
          )}
        </div>
      )}
    </div>
  );

};
export default Browser;
