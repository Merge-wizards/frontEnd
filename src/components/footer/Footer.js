import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
    return (
        <MDBFooter className="bg-dark text-white text-center ">
            <MDBContainer className="p-4">
                <MDBRow>
                    <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Merge Wizards</h5>
                        <p>
                            Level up your gaming experience with our unbiased
                            and informative game reviews.
                        </p>
                    </MDBCol>
                    <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Pages</h5>
                        <ul className="list-unstyled mb-0">
                            <li id="hi">
                                <Link to="/" className="text-white">
                                    Home
                                </Link>
                            </li>
                            <li id="hi">
                                <Link to="/favourite" className="text-white">
                                    Favourite
                                </Link>
                            </li>
                            <li id="hi">
                                <Link to="/about-us" className="text-white">
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Categories</h5>
                        <ul className="list-unstyled">
                            <li id="hi">
                                <Link
                                    to="./category/action"
                                    className="text-white"
                                >
                                    Action
                                </Link>
                            </li>
                            <li id="hi">
                                <Link
                                    to="./category/shooter"
                                    className="text-white"
                                >
                                    Shooter
                                </Link>
                            </li>
                            <li id="hi">
                                <Link
                                    to="./category/survival"
                                    className="text-white"
                                >
                                    Survival
                                </Link>
                            </li>
                            <li id="hi">
                                <Link
                                    to="./category/racing"
                                    className="text-white"
                                >
                                    Racing
                                </Link>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="text-center p-3">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <a
                            href="https://www.facebook.com/your-page"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                size="lg"
                                className="footer-icon"
                                style={{ color: "#888888" }}
                            />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="https://www.twitter.com/your-page"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                size="lg"
                                className="footer-icon"
                                style={{ color: "#888888" }}
                            />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="https://www.instagram.com/your-page"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size="lg"
                                className="footer-icon"
                                style={{ color: "#888888" }}
                            />
                        </a>
                    </li>
                </ul>
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Merge Wizards All rights
                    reserved.
                </p>
            </div>
        </MDBFooter>
    );
};

export default Footer;
