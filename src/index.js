import "./style.css";
import { showHome } from "./home";
import { showMenu } from "./menu";
import { showContancts } from "./contact";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

showHome();

homeBtn.addEventListener("click", showHome);
menuBtn.addEventListener("click", showMenu);
contactBtn.addEventListener("click", showContancts);
