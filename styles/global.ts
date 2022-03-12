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
  /* background: #E5E5E5; */
}
input[type="checkbox"] {
  background-color: initial;
}
/* .swiper{
  overflow-x: hidden !important;
  overflow-y: clip !important;
}
.swiper-pagination-horizontal {
  margin-bottom: -32px !important;
  overflow: hidden !important;
} */
/* .swiper swiper-initialized swiper-horizontal swiper-ios {
  overflow-x: hidden !important;
  overflow-y: clip !important;
}
.swiper .swiper-initialized .swiper-horizontal .swiper-ios{
  overflow-x: hidden !important;
  overflow-y: clip !important;
} */
/* .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
  margin-bottom: -32px !important;
}
.myswiper {
  overflow: clip !important;
  overflow-x: hidden !important;
  overflow-y: clip !important;

} */
.loading {
  animation-name: loading;
  animation-duration: 1s;
  max-width: 1440px;
  margin: auto;
}
@keyframes loading {
  from {opacity:0}
  to {opacity: 1}
}
.hidden {
  display: none;
}
.visuallyhidden {
  opacity: 0;
}
.faqlist-Text-Show {
  animation-name: faqlistTextShow;
  animation-duration: 3s;
}
@keyframes faqlistTextShow {
  from{
    height: 0%;
  }
  to {
    height: 100%;
  }
} 
`;

export default GlobalStyle;
