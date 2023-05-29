import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import axios from 'axios'

function Details({ data, dataBr }) {

// console.log(data[0].id);

  
      

  const { id } = useParams();

  // console.log(id)


  let card;

  for (let i = 0; i < data.length; i++) {

    if (id == data[i].id) {

      card = data.filter(ele => ele.id == id)
      // console.log(card)
    }
  }

  for (let j = 0; j < dataBr.length; j++) {

    if (id == dataBr[j].id) {

      card = dataBr.filter(ele => ele.id == id)
      // console.log(card)
    }
  }

  const fetchFav = () => {
    axios.post(`${process.env.REACT_APP_URL}/fav`,card[0]).then(result => console.log(result.data) ).catch(err => console.log(err))
   }
   
fetchFav()
  return (

    <div className='c-d'>
      <img src={card[0].thumbnail} className='c-image' />
      <div className='column'>
        <h2>Title : {card[0].title}</h2>
        <p><h3>short description :  </h3>{card[0].short_description}</p>
      </div>
      <button onClick={fetchFav}>Send To favoutire</button>
    </div>
  )
}

export default Details
