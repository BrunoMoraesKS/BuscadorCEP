import { createGlobalStyle } from "styled-components";

export const Colors = {
  background: "#fffffe",
  headline: "#094067",
  paragraph: "#5f6c7b",
  button: "#3da9fc",
  buttonText: "#fffffe",
  stroke: "#094067",
  main: "#fffffe",
  highlight: "#3da9fc",
  secondary: "#90b4ce",
  tertiary: "#ef4565",
};

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


  body {
    font-family: 'Open Sans', sans-serif;

    background-color: ${Colors.background};

    color: ${Colors.paragraph}
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: 'Mohave', sans-serif; 
    color: ${Colors.headline};
  }
  
  h1 {
    font-weight: 800;
  }

  h2 {
    font-weight: 600;
  }

  h3 {
    font-weight: 500;
  }

  h4, h5, h6 {
    font-weight: 400;
  }

  a, a:hover, a:focus, a:active, a:visited {
    text-decoration: none;
    text-decoration: underline;
    color: ${Colors.highlight};
  }
`;
