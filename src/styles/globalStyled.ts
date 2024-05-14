import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Sedan+SC&display=swap');
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
