import { content } from "./home";
import honeyTea from "./images/honeyTea.jpg";
import berryTea from "./images/berryTea.jpg";

export function showMenu() {
  content.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  const border1 = document.createElement("div");
  border1.className = "border";
  const container1 = document.createElement("div");
  container1.className = "container";
  const beveragesTitle = document.createElement("h1");
  beveragesTitle.textContent = "Beverages";

  container1.appendChild(beveragesTitle);
  border1.appendChild(container1);

  const border2 = document.createElement("div");
  border2.className = "border";
  const container2 = document.createElement("div");
  container2.className = "container";
  const titleBvg1 = document.createElement("h2");
  titleBvg1.textContent = "Honey Tea";
  const descriptionBvg1 = document.createElement("p");
  descriptionBvg1.textContent =
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
  const priceBvg1 = document.createElement("h3");
  priceBvg1.textContent = "$2";
  const imgContainer1 = document.createElement("div");
  imgContainer1.className = "img-container";
  const bvg1Img = document.createElement("img");
  bvg1Img.className = "product-image";
  bvg1Img.src = honeyTea;

  container2.appendChild(titleBvg1);
  container2.appendChild(descriptionBvg1);
  container2.appendChild(priceBvg1);
  imgContainer1.appendChild(bvg1Img);
  container2.appendChild(imgContainer1);
  border2.appendChild(container2);

  const border3 = document.createElement("div");
  border3.className = "border";
  const container3 = document.createElement("div");
  container3.className = "container";
  const titleBvg2 = document.createElement("h2");
  titleBvg2.textContent = "Beary Tea";
  const descriptionBvg2 = document.createElement("p");
  descriptionBvg2.textContent =
    "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";
  const priceBvg2 = document.createElement("h3");
  priceBvg2.textContent = "$3";
  const imgContainer2 = document.createElement("div");
  imgContainer2.className = "img-container";
  const bvg2Img = document.createElement("img");
  bvg2Img.className = "product-image";
  bvg2Img.src = berryTea;

  container3.appendChild(titleBvg2);
  container3.appendChild(descriptionBvg2);
  container3.appendChild(priceBvg2);
  imgContainer2.appendChild(bvg2Img);
  container3.appendChild(imgContainer2);
  border3.appendChild(container3);

  content.appendChild(h1);
  content.appendChild(border1);
  content.appendChild(border2);
  content.appendChild(border3);
}
