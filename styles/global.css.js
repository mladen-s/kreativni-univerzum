import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
  --blue-darkest: #021224;
  --blue-dark: #052241;
  --blue-medium: #204174;
  --blue-light: #b3e6ec;
}

html,
body {
  font-family: 'Caveat', 'Arsenal', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.3rem;
  scroll-behavior: smooth;
  background-color: var(--blue-darkest);
  z-index: 0;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

*,
::after,
::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

img {
  display: block;
}

h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 6rem;
    font-family: 'Amatic SC', cursive, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
  }
/* ########### */

body {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
body::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.root {
  width: 100%;
  height: 100%;
}

.video-container {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.site-title {
  display: block;
  color: var(--blue-light);
  padding: 30px;
  z-index: 2;
  white-space: normal;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.main {
  background-color: black;
  background-image: url('/IMG-78f5e7b2341131cef9e3a2e20309af9e-V.jpg');
  background-position: 0%;
  background-size: 50%;
  background-repeat: no-repeat;
  
  z-index: 1;
  height: 100vh;

  padding-left: 40%;
  display: flex;
  justify-content: right;
}
.toggle {
  left: 50% !important;
}
.teaser-container {
  padding: 10% 20%;
  text-align: center;
}

${"" /* transition */}
.transition-appear {
  opacity: 0.1;
  transform: scale(4.5);
  -webkit-transform: scale(4.5);
}

.transition-appear-active {
  opacity: 1;
  transform: scale(1);
  transition: all 1800ms ease-in-out;
  -webkit-transform: scale(1);
  -webkit-transition: all 1800ms ease-in-out;
}

${"" /* ################# Slide ############### */}
.slide {
  transform: translateX(100%);
  transition: transform 1000ms linear;
  -webkit-transform: translateX(100%);
  -webkit-transition: transform 1000ms linear;
}
.slide.slide-active {
  transform: translateX(0);
  transition: transform 1000ms linear;
  -webkit-transform: translateX(0);
  -webkit-transition: transform 1000ms linear;
}

@media screen and (max-width: 768px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 2.2rem;
  }
  .main {
  background-image: url('/IMG-6cd4f8b2d220e72b39542766f2356c77-V.jpg');
  }
  header {
    background-image: url("/IMG-6cd4f8b2d220e72b39542766f2356c77-V.jpg");
    z-index: 2;
  }
}

@media screen and (max-width: 370px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.7rem;
  }
}

`;
