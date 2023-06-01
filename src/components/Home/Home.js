import Browser from "../browser/Browser";
import Hero from "../hero/Hero";
import PcCard from "../pc/PcCard";
import Card from "react-bootstrap/Card";
import "./style.scss";
const Home = ({ data, dataBr }) => {
    return (
        <div id="home">
            <Hero games={[...data, ...dataBr]}/>
            <div className="main-card">
            <h2 className="main-title"> Best game recommended </h2>
            <div className="card-in">
                <Card className="img" style={{ width: "26rem" }}>
                    <Card.Img
                    className="imgC"
                        variant="top"
                        src="https://m.media-amazon.com/images/M/MV5BNWM2ZjM5ZjgtYjgxMi00NGY2LTgxNTYtYmMzY2EyNTQwNjg1XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"
                    />
                </Card>
                <Card className="contant-card" style={{ width: "45rem", height:'22rem' , backgroundColor:"rgba(0, 0, 0, 0.568)", color:'white'}}>
                    <Card.Body>
                        <Card.Title className="card-title">
                            <span style={{fontSize:'60px'}}>R</span>esident <span style={{fontSize:'60px'}}>E</span>vil 4
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <h2 style={{color:'white'}}>survival horror game</h2>
                        </Card.Subtitle>
                        <Card.Text>
                            SURVIVAL IS JUST THE BEGINNING...Resident Evil 4 is
                            a remake of the 2005 original Resident Evil 4.
                            Reimagined for 2023 to bring state-of-the-art
                            survival horror. Resident Evil 4 preserves the
                            essence of the original game, while introducing
                            modernized gameplay, a reimagined storyline, and
                            vividly detailed graphics to make this the latest
                            survival horror game where life and death, terror
                            and catharsis intersect.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
            {data?.length > 0 && <PcCard data={data} />}
            {dataBr?.length > 0 && <Browser dataBr={dataBr} />}
        </div>
    );
};
export default Home;
