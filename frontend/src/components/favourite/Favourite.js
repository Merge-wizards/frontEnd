import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md';
import './fav.css'

function Favourite() {
  const [data, setData] = useState([]);
  const [refreshCall, setRefreshCall] = useState(false);

  const getFav = async () => {
    try {
      const result = await axios.get(`http://localhost:8002/fav`);
      setData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFav = async (id) => {
    try {
      await axios.delete(`http://localhost:8002/delete/${id}`);
      console.log("Item deleted");
      setRefreshCall(!refreshCall);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFav([]);
  }, [refreshCall]);

  return (
    <div className="container">
      <div className="row">
        {data.length &&
          data.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img src={item.thumbnail} className="card-img-top" alt="Item thumbnail" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.short_description}</p>
                  <button
                    className="transparent"
                    onClick={() => deleteFav(item.id)}
                    style={{
                      border:'0',
                    backgroundColor:'transparent'
                    }}
                    
                  >
                    <MdOutlineDeleteOutline size='50px' backgroundColor='transparent'/>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Favourite;
