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
  background-image: url('/IMG-6cd4f8b2d220e72b39542766f2356c77-V.jpg');
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
.transition-enter {
  opacity: 0;
  transform: scale(2);
  -webkit-transform: scale(2);
}
.transition-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 1500ms ease-in;
  -webkit-transform: scale(1);
  -webkit-transition: all 1500ms ease-in;
}
.transition-exit {
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
}
.transition-exit-active {
  opacity: 0;
  transform: scale(3);
  transition: all 1200ms linear;
  -webkit-transform: scale(3);
  -webkit-transition: all 1200ms linear;
}
${"" /* ################# Slide ############### */}
.slide {
  transform: translateX(100%);
  transition: transform 1000ms linear;
  -webkit-transform: translateX(100%);
  -webkit-transition: transform 1000ms linear;
}
.slide-active {
  transform: translateX(0);
  transition: transform 1000ms linear;
  -webkit-transform: translateX(0);
  -webkit-transition: transform 1000ms linear;
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
.honeycomb-item::after
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
.honeycomb-item span
{
  top: -50% !important;
  left: 0 !important;
  width: 100% !important;
  height: 200% !important;
  display: block !important;
  position: absolute !important;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%) !important;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%) !important;
  z-index: -1 !important;
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
  background: black;
  opacity: 0.3;
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


@media screen and (max-width: 768px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 2.2rem;
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
