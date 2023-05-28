
import './App.css';
import Browser from './components/browser/Browser';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import PcCard from './components/pc/PcCard';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <PcCard/>
    <Browser/>
    <Footer/>
    </>
  );
}

export default App;
