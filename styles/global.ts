import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: Elianto;
  src: url(/assets/fonts/elinato/Elianto-Regular.ttf);
}
@font-face {
  font-family: Product Sans;
  src: url(/assets/fonts/product-sans/Product-Sans-Regular.ttf);
} */


@font-face {
  font-family: 'Heavitas [RUS by Daymarius]';
  src: url(/font/Heavitas.ttf);
}

body {
  padding: 0;
  margin: auto;
  max-width: 1440px;
  /* background: #E5E5E5; */
}
input[type="checkbox"] {
  background-color: initial;
}
`;

export default GlobalStyle;
