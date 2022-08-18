import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
  --blue-darkest: #021224;
  --blue-dark: #052241;
  --blue-medium: #204174;
  --blue-light: #b3e6ec;
  --orange-medium: #fabd52;
  --gray-dark: #52514f;
  --grey-medium: #85837f;
  --gray-darkest: #2b2b2a;
  --gray-light: #cccac6;
  --black-medium: #212020;
}

html,
body {
  font-family: 'Caveat', 'Arsenal', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.3rem;
  scroll-behavior: smooth;
  background-color: black;
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
    font-size: 4rem;
    font-family: 'Amatic SC', cursive, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
  }
/* ########### */



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
  color: var(--orange-medium);
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

.logo {
  z-index: 2;
  position: absolute;
  top: 3%;
  left: 3%; 
}
.logo img {
  border-radius: 45%;
}

.toggle {
  left: 50% !important;
}
.loading, .error {
  color: var(--orange-medium);
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.5rem;
}
.loading button {
    appearance: none;
    border: none;
    margin: 10px auto;
    background-color: var(--gray-darkest);
    color: var(--orange-medium);
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 1rem;
    padding: 10px 25px;
    border-radius: 15px;
}
.loading button:hover {
    background-color: var(--gray-dark);
    cursor: pointer;
}
.modal {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: 5%;
  left: 10%;
  height: 87%;
  width: 80%;
  opacity: 0.9;
  z-index: 999;
  box-shadow: 100%;
  background-color: var(--black-medium);
}
.close {
  position: fixed;
  top: 9%;
  right: 13%;

  background: transparent;
  border: none;
}
.close :first-child {
  color: var(--orange-medium);
}
.close :first-child:hover {
    cursor: pointer;
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
  transform: translateX(500%);
  transition: transform 1000ms linear;
  -webkit-transform: translateX(500%);
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
    font-size: 1.5rem;
  }

  body {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  body::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }

  header {
    background-image: url("/IMG-5c826a4196040c2f46406090a9fb2e3d-V.jpg");
    background-size: cover;
    z-index: 2;
  }

  .site-title {
    margin-top: 20px;
  }

  .video-container {
    position: relative;
    margin: 0 10px;
    padding: 0;
    border: 3px solid var(--orange-medium);
    border-radius: 5%;
  }

}

@media screen and (max-width: 370px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5rem;
  }
}

`;
