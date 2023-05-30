import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar({ games }) {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = (text) => {
        const result = games.filter((e) =>
            e.title.toLowerCase().includes(text.toLowerCase())
        );

        setSearchResult(result);
    };

    const sumbitHandler = (e) => {
        e.preventDefault();
        if (searchResult.length === 1) {
            navigate(`/details/${searchResult[0].id}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Merge Wizards
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favourite" className="nav-link">
                            Favourite
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/feedback" className="nav-link">
                            Feedback
                        </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Disabled
                        </a>
                    </li> */}
                </ul>

                <form
                    onSubmit={sumbitHandler}
                    className="form-inline my-2 my-lg-0"
                >
                    <input
                        className="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Type to search..."
                        onInput={(e) => searchHandler(e.target.value)}
                    />
                    <datalist id="datalistOptions">
                        {searchResult.length > 0 &&
                            searchResult.map((e, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={e.title}
                                        onClick={() =>
                                            navigate(`/details/${e.id}`)
                                        }
                                    />
                                );
                            })}
                    </datalist>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;