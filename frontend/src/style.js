import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  background-color:${(props) => props.theme.backgroundColor};
  
}
`;
export const List = styled.div`
    padding-top: 90px;
`;
export const ListWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`;
export const ListM = styled.div`
    margin-left: 5vw;
`;
