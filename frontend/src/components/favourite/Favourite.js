import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Favourite() {
    const [data, setData] = useState([]);
    const getFav = () => (
        axios.get(`${process.env.REACT_APP_URL}/fav`).then(res => setData(res.data)).catch(err => console.log(err))
    )
    const deleteFav = () => {
        data.map(item => {
            axios.delete(`${process.env.REACT_APP_URL}/delete/${item.id}`).then(res => console.log(res.data)).catch(err => console.log(err))
        })
    }
    // deleteFav()
    useEffect(() => {
        getFav([])
    }, []);
    // console.log("this is data",data);
    return (
        <div className='c-d'>
            {
                data.length &&
                data.map(item => {
                    return (
                        <>
                            <img src={item.thumbnail} className='c-image' />
                            <div className='column'>
                                <h2>Title : {item.title}</h2>
                                <p><h3>short description :  </h3>{item.short_description}</p>
                            </div>
                            <button onClick={deleteFav}>delete</button>
                        </>

                    )

                })
            }

        </div>
    )
}

export default Favourite
