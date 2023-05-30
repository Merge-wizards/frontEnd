import Browser from "../browser/Browser";
import Hero from "../hero/Hero";
import PcCard from "../pc/PcCard";

const Home = ({ data, dataBr }) => {
    return (
        <div>
            <Hero></Hero>
            {data?.length > 0 && <PcCard data={data} />}
            {dataBr?.length > 0 && <Browser dataBr={dataBr} />}
        </div>
    );
};

export default Home;
