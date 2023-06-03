import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
function Navbar({ games }) {
    const navigate = useNavigate();

    const categoires = [
        { link: "/category/action", name: "Action" },
        { link: "/category/shooter", name: "Shooter" },
        { link: "/category/survival", name: "Survival" },
        { link: "/category/racing", name: "Racing" },
    ];

    const platform = [
        { link: "/plate/pc", name: "Pc" },
        { link: "/plate/browser", name: "Browser" },
    ];
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img
                    src={logo}
                    style={{
                        width: "10rem",
                        marginBottom: "-2rem",
                        marginTop: "-2rem",
                    }}
                />
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

                    <Dropdown className="nav-item">
                        <Dropdown.Toggle
                            className="nav-link"
                            id="dropdown-basic"
                        >
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {categoires.map((e, index) => (
                                <Dropdown.Item
                                    onClick={() => navigate(e.link)}
                                    key={index}
                                    eventKey="action"
                                >
                                    {e.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="nav-item">
                        <Dropdown.Toggle
                            className="nav-link"
                            id="dropdown-basic"
                        >
                            Plateform
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {platform.map((e, index) => (
                                <Dropdown.Item
                                    onClick={() => navigate(e.link)}
                                    key={index}
                                    eventKey="action"
                                >
                                    {e.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-link">
                            About us
                        </Link>
                    </li>
                   
                </ul>

                {/* <form
>>>>>>> f6692be4a0920e61ba838227bba04fd75711acb9
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

                </form> */}
            </div>
        </nav>
    );
}

export default Navbar;
