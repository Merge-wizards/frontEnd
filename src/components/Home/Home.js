import Browser from "../browser/Browser";
import Hero from "../hero/Hero";
import PcCard from "../pc/PcCard";
import Card from "react-bootstrap/Card";
import "./style.css";
const Home = ({ data, dataBr }) => {
    return (
        <div>
            <Hero />
            <h2 className="main-title"> best game this year pc</h2>
            <div id="parent">
                <Card id="mainimg" style={{ width: "13rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://m.media-amazon.com/images/M/MV5BNWM2ZjM5ZjgtYjgxMi00NGY2LTgxNTYtYmMzY2EyNTQwNjg1XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"
                    />
                </Card>
                <Card id="firstchildren" style={{ width: "45rem" }}>
                    <Card.Body>
                        <Card.Title id="secondchildren">
                            <span>R</span>esident <span>E</span>vil 4
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {" "}
                            <p>survival horror game</p>
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
            {data?.length > 0 && <PcCard data={data} />}
            {dataBr?.length > 0 && <Browser dataBr={dataBr} />}
        </div>
    );
};
export default Home;
