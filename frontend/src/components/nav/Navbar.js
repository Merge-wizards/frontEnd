import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dropdown from 'react-bootstrap/Dropdown';
function Navbar({ games, setFilterd, filterd }) {

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
    const selectCategory = (eventKey) => {
        setFilterd(eventKey)
    }
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
                        <Link to="/about-us" className="nav-link">
                            About us
                        </Link>
                    </li>
                    <Dropdown className="nav-item" onSelect={selectCategory}>
                        <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey='action' ><Link to='/category' style={{ textDecoration: 'none', color: 'black' }}>Action</Link></Dropdown.Item>
                            <Dropdown.Item eventKey='shooter'><Link to='/category' style={{ textDecoration: 'none', color: 'black' }}>shooter</Link></Dropdown.Item>
                            <Dropdown.Item eventKey='Sports' ><Link to='/category' style={{ textDecoration: 'none', color: 'black' }}>Sport</Link></Dropdown.Item>
                            <Dropdown.Item eventKey='survival'><Link to='/category' style={{ textDecoration: 'none', color: 'black' }}>survival</Link></Dropdown.Item>

                            <Dropdown.Item eventKey='racing' ><Link to='/category' style={{ textDecoration: 'none', color: 'black' }}>racing</Link></Dropdown.Item>


                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Dropdown className="nav-item" onSelect={selectCategory}>
                        <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                            Plateform
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey='pc'><Link to='/plate' style={{ textDecoration: 'none', color: 'black' }}>Pc</Link></Dropdown.Item>
                            <Dropdown.Item eventKey='browser'><Link to='/plate' style={{ textDecoration: 'none', color: 'black' }}>broswer</Link></Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown> */}

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
