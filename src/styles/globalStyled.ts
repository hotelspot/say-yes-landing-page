import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  html {
    scroll-behavior: smooth;
  }
  
  h1,h2,h2,h3,h4,h5,p{
    margin:0;
  }
  body{
    margin: 0;
    padding: 0;
  }
  
  *{
    font-family: "Montserrat", sans-serif;
  }
  
`;
