import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from '../details/Details'
import { useEffect, useState } from 'react';
import PcCard from '../pc/PcCard';
import Browser from '../browser/Browser';
import axios from 'axios';
import Favourite from '../favourite/Favourite';
import Feedback from 'react-bootstrap/esm/Feedback';
function Router() {
  const [data, setData] = useState([]);
  const [Brdata, setBrData] = useState([]);
  const fetchdata = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_URL}/pc`)
      if (!data.length) {
        setData(result.data)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchdata()
  }, []);
  const dataBr = () => {
    axios.get(`${process.env.REACT_APP_URL}/browser`).then(res => setBrData(res.data)).catch(err => console.log(err))
  }
  useEffect(() => {
    dataBr();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/' element={[data.length && <PcCard data={data} />, Brdata.length && <Browser dataBr={Brdata} />]} />
        <Route path='/details/:id' element={data.length && <Details data={data} dataBr={Brdata} />} />
      </Routes>
    </div>
  )
}

export default Router
