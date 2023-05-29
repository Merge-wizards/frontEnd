
import './App.css';
import Router from './components/router/Route';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import FavList from './components/favList/favList';
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Router/>
    {/* <FavList/> */}
    <Footer/>
    </>
  );
}

export default App;
