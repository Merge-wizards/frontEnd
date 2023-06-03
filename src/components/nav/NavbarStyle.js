import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
    color: ${(props) => props.theme.mainColor};
    padding: 0.25em 1em;
    &.active {
        color: red;
        background-color: rgba(255, 0, 0, 0.05);
    }
`;
export const ThemeButton = styled.div`
    font-size: 1em;
    padding: 0.25em 1em;
    //border-radius: 3px;
    backgroundcolor: "transparent";
`;
export const Mood = styled.img`
    heigh: 2.5vh;
    width: 2.5vw;
`;
export const FORM = styled.form``;
.search-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

/* Optional: Add custom styles for the input field */
.form-control {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
