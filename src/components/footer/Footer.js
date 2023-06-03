import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
    return (
        <MDBFooter className="bg-secondary text-white text-center">
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
                            <li>
                                <a href="/" className="text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="./favourite" className="text-white">
                                    Favourite
                                </a>
                            </li>
                            <li>
                                <a href="./about-us" className="text-white">
                                    About us
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Categories</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="./category/action"
                                    className="text-white"
                                >
                                    Action
                                </a>
                            </li>
                            <li>
                                <a
                                    href="./category/shooter"
                                    className="text-white"
                                >
                                    Shooter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="./category/survival"
                                    className="text-white"
                                >
                                    Survival
                                </a>
                            </li>
                            <li>
                                <a
                                    href="./category/racing"
                                    className="text-white"
                                >
                                    Racing
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
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
