import { Link } from "react-router-dom";
import "./style.scss";
function Btn_For_Collection() {
    return (
        <div className="collectionBtn">
            <Link to="/2010-2015">
                <button className="button-c">
                    collection of best games from 2010-2015
                </button>
            </Link>
            <Link to="/2015-2020">
                <button className="button-c">
                    collection of best games from 2015-2020
                </button>
            </Link>
            <Link to="/2020-2022">
                <button className="button-c">
                    collection of best games from 2020-2023
                </button>
            </Link>
            <Link to="/Upcoming">
                <button className="button-c">The Upcoming Games</button>
            </Link>
        </div>
    );
}

export default Btn_For_Collection;
