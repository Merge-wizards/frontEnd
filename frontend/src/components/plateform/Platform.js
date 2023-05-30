// import React from 'react'
// import axios from 'axios'
// import  { useEffect, useState } from 'react'


// function Category({ filterd }) {

//     const [actions, setActions] = useState([]);

//     const category = () => {
//         axios.get(`${process.env.REACT_APP_URL}/category?category=${filterd}`).then(res => setActions(res.data)).catch(err => console.log(err))
//     }
  
//     useEffect(() => {
//         category();
//     }, []);
//     return (
//         <div className='bigdiv'>
//             {
//                 actions &&
//                 actions.slice(0, 20).map(item => {
//                     return (
//                         <div >
//                             <Card className='wrap'>
//                                 <Link key={item.id} to={`/details/${item.id}`}>
//                                     <Card.Img variant="top" src={item.thumbnail} />
//                                 </Link>
//                                 <Card.Body>
//                                     <Card.Title>{item.title}</Card.Title>
                                    
//                                         <Card.Text>
                                          
                                                
//                                                     <h6>
//                                                         {showMore ? item.short_description : `${item.short_description.substring(0, 50)}`}
                                                        
//                                                         <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                                                        
                                                         
//                                                     </h6>
                                            
                                           
//                                         </Card.Text>
                                  
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     )
//                 })

//             }


//         </div>
//     )
// }

// export default Category