
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/router/Route';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import {  useEffect,useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/game')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0].thumbnail)
        setData(data);
      })
      .catch((error) => console.error(error));
    },[])
  return (
    <>
    <Navbar games={data}/>
    <Router/>
    <Footer/>
    </>
  );
}

export default App;
