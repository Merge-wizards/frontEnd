
import './App.css';
import Browser from './components/browser/Browser';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import PcCard from './components/pc/PcCard';
import Team from './components/Team/team';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <PcCard/>
    <Browser/>
    <Team/>
    <Footer/>
    </>
  );
}

export default App;
