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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.3rem;
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
    font-size: 5rem;
    font-family: 'Amatic SC', cursive, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
  }
/* ########### */

.root {
  width: 100%;
  height: 100%;
  ${"" /* bellow code not working */}
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.root::-webkit-scrollbar { 
  ${"" /* bellow code not working */}
    display: none;  /* Safari and Chrome */
}
.header {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
}
.header::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgb(0, 0, 0, 0.3);
}
.video-container {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.site-title {
  display: block;
  color: var(--blue-light);
  padding: 30px;
  ${
    "" /* border-radius: 20px;
  border: 5px groove var(--blue-dark); */
  }
  ${"" /* background-color: rgb(0, 0, 0, 0.5); */}
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
  height: 2000px;
  background-image: url('/IMG-6cd4f8b2d220e72b39542766f2356c77-V.jpg');
  background-size: cover;
}
.toggle {
  left: 50%;
}


${"" /* ############# Honeycomb ############## */}
.honeycomb-list {

  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  transform: translateY(80px);
}
.honeycomb-item {
  -webkit-box-flex: 0;
  flex: 0 1 250px;
  max-width: 250px;
  height: 137.5px;
  margin: 65.4px 12.5px 25px;
  position: relative;
  padding: 0.5em;
  text-align: center;
  z-index: 1;
  box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.1);
}
.honeycomb-item_img
{
  object-fit: cover;
  object-position: center;
  filter: grayscale(100);
}
.honeycomb-item::before,
.honeycomb-item::after
{
  content: '';
}
.honeycomb-item::before,
.honeycomb-item::after,
.honeycomb-item span
{
  top: -50%;
  left: 0;
  width: 100%;
  height: 200%;
  display: block;
  position: absolute;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: -1;
}
.honeycomb-item span,
.honeycomb-item_img
{
  top: -50%;
  left: 0;
  width: 100%;
  height: 200%;
  display: block;
  position: absolute;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(0% 0%, 100% -25%, 150% -75%, 150% 100%, -50% 200%, -25% 25%);
  z-index: -1;
}
.honeycomb-item::before
{
  background: #fff;
  transform: scale(1.055);
}
.honeycomb-item::after
{
  background: #111111;
  opacity: 0.8;
  transition: opacity 350ms;
  -webkit-transition: opacity 350ms;
}
.honeycomb-item:hover
.honey-title
{
  opacity: 0;
}
.honeycomb-item_img
{
  filter: none;
}
.honeycomb-item:hover::before
{
  background: transparent;
}
.honeycomb-item:hover::after
{
  opacity: 0;
}
.honeycomb-item:hover .honey-title
{
  display: none;
}
.honey-title {
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-hyphens: auto;
  hyphens: auto;
  word-break: break-word;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-size: 1.75em;
  transition: opacity 350ms;
}
.honey-text {
  font-size: 0.8rem;
  display: none;
}
${"" /* ###################### */}


@media screen and (max-width: 780px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 2.2rem;
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
