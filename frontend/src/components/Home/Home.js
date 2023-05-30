import Browser from "../browser/Browser";
import PcCard from "../pc/PcCard";

const Home = ({ data, dataBr }) => {
    return (
        <div>
            <Hero />
            {data?.length > 0 && <PcCard data={data} />}
            {dataBr?.length > 0 && <Browser dataBr={dataBr} />}
            
        </div>
    );
};

export default Home;
