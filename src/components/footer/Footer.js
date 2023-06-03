import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container">
                <div className="row"></div>
                <div className="text-center">
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
                                />
                            </a>
                        </li>
                    </ul>
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} Merged Wizards All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
