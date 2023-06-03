// // <<<<<<< HEAD
// // import React, { useEffect, useState } from "react";
// // import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
// // import { Link } from "react-router-dom";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import "./style.scss";

// // const PcCard = ({ data }) => {
// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     const handleClick = (direction) => {
// //         if (direction === "prev" && currentIndex !== 0) {
// //             setCurrentIndex((prevIndex) => prevIndex - 1);
// //         } else if (direction === "next" && currentIndex + 5 < data.length) {
// //             setCurrentIndex((nextIndex) => nextIndex + 1);
// //         }
// //     };

// //     const hasData = data.length > 0;
// //     const showNextButton = currentIndex <= data.length - 5;

// //     return (
// //         <div className="games">
// //             <h3 style={{ paddingLeft: "1%" }}>Pc Games</h3>

// //             <div className="relative container">
// //                 <div className="row">
// //                     {data
// //                         .slice(0, 15)
// //                         .slice(currentIndex, currentIndex + 4)
// //                         .map((item, index) => {
// //                             return (
// //                                 <div key={index} className="col-md-3">
// //                                     <Link
// //                                         key={item.id}
// //                                         to={`/details/${item.id}`}
// //                                     >
// //                                         <img
// //                                             className="img-fluid"
// //                                             key={index}
// //                                             src={item.thumbnail}
// //                                             alt={"Image "}
// //                                         />
// //                                     </Link>
// //                                 </div>
// //                             );
// //                         })}
// //                     {hasData && (
// //                         <div className="btn w-100 shapes">
// //                             <button
// //                                 onClick={() => handleClick("prev")}
// //                                 disabled={currentIndex === 0}
// //                             >
// //                                 <GrLinkPrevious />
// //                             </button>
// //                             {showNextButton && (
// //                                 <button
// //                                     onClick={() => handleClick("next")}
// //                                     disabled={currentIndex === 4}
// //                                 >
// //                                     <GrLinkNext />
// //                                 </button>
// //                             )}
// //                         </div>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // =======
// import React, { useEffect, useState } from 'react';
// import { Row, Col, Card, Button } from 'react-bootstrap';
// import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
// import { Link } from 'react-router-dom';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './style.scss';

// const PcCard = ({ data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleClick = (direction) => {
//     if (direction === 'prev' && currentIndex !== 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     } else if (direction === 'next' && currentIndex + 4 < data.length) {
//       setCurrentIndex((nextIndex) => nextIndex + 1);
//     }
//   };

//   const hasData = data.length > 0;
//   const showNextButton = currentIndex <= data.length - 5;

//   return (
//     <div className='all1'>
//       <h3 className="text">
//         <strong>Pc Games</strong>
//       </h3>
//       <div className="bigDiv1">
//         {hasData && (
//           <div className="btn">
//             <Button
//               onClick={() => handleClick('prev')}
//               disabled={currentIndex === 0}
//               style={{ border: '0', backgroundColor: 'black', width: '3rem' }}
//             >
//               <GrLinkPrevious size="30px" filter="invert(100%)" style={{paddingTop:'50%'}}/>
//             </Button>
//           </div>
//         )}
//         <div>
//           <Row className="Row1">
//             {data
//               .slice(currentIndex, currentIndex + 4)
//               .map((item, index) => {
//                 return (
//                   <Col key={index} md={4}>
//                     <Card>
//                       <Link to={`/details/${item.id}`}>
//                         <Card.Img
//                           className="img-fluid"
//                           src={item.thumbnail}
//                           alt="Image"
//                         />
//                       </Link>
//                     </Card>
//                   </Col>
//                 );
//               })}
//           </Row>
//         </div>
//         {hasData && (
//           <div className="btn" style={{marginRight:'-25rem' }}>
//             {showNextButton && (
//               <Button
//                 onClick={() => handleClick('next')}
//                 disabled={currentIndex + 4 >= data.length}
//                 style={{ border: '0', backgroundColor: 'black',  width: '3rem' }}
//               >
//                 <GrLinkNext size="30px" filter="invert(100%)"  />
//               </Button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );

// };

// export default PcCard;

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
          <div className="btn" style={{  width:'3rem'}}>
            <Button
              onClick={() => handleClick('prev')}
              disabled={currentIndex === 0}
              style={{ border: '0',  backgroundColor: 'rgba(0, 0, 0, 0.829)',  width: '4rem' }}
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
          <div className="btn" style={{ width:'3rem' }}>
            {showNextButton && (
              <Button
                onClick={() => handleClick('next')}
                disabled={currentIndex + 4 >= data.length}
                style={{ border: '0', backgroundColor: 'rgba(0, 0, 0, 0.829)',  width: '4rem' }}
              >
                <GrLinkNext size="200px" filter="invert(100%)" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PcCard;