// import React from 'react'
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Favourite from '../favourite/Favourite';

// function FavList() {

//     const [data, setData] = useState([]);

//     const getFav = () => (
//         axios.get(`${process.env.REACT_APP_URL}/fav`).then(res => setData(res.data)).catch(err => console.log(err))
//     )
    
//     useEffect(() => {
//         getFav()
//       }, []);
      
//     console.log(data)
//     return (
//         <div>
//             {

//                 data &&
//                 data.map(item => {
//                     return <Favourite item={item} getFav={getFav} />
//                 }
//                 )
//             }
//         </div>
//     )
// }

// export default FavList
