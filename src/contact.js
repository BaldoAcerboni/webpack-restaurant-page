import { content } from "./home";

export function showContancts() {
  content.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Contact us";

  const border1 = document.createElement("div");
  border1.className = "border";
  const container1 = document.createElement("div");
  container1.className = "container";
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";
  const locationPara = document.createElement("p");
  locationPara.textContent = "123 Forest Drive, Forestville, Maine";

  container1.appendChild(locationTitle);
  container1.appendChild(locationPara);
  border1.appendChild(container1);

  const border2 = document.createElement("div");
  border2.className = "border";
  const container2 = document.createElement("div");
  container2.className = "container";
  const person1 = document.createElement("h3");
  person1.textContent = "MamaBear";
  const position1 = document.createElement("p");
  position1.textContent = "Chef";
  const phone1 = document.createElement("p");
  phone1.textContent = "555-555-5554";
  const email1 = document.createElement("p");
  email1.textContent = "totallyRealEmail@notFake.com";

  container2.appendChild(person1);
  container2.appendChild(position1);
  container2.appendChild(phone1);
  container2.appendChild(email1);
  border2.appendChild(container2);

  const border3 = document.createElement("div");
  border3.className = "border";
  const container3 = document.createElement("div");
  container3.className = "container";
  const person2 = document.createElement("h3");
  person2.textContent = "Papa Bear";
  const position2 = document.createElement("p");
  position2.textContent = "Manager";
  const phone2 = document.createElement("p");
  phone2.textContent = "555-555-5555";
  const email2 = document.createElement("p");
  email2.textContent = "perfectlyRealEmail@notFake.com";

  container3.appendChild(person2);
  container3.appendChild(position2);
  container3.appendChild(phone2);
  container3.appendChild(email2);
  border3.appendChild(container3);

  const border4 = document.createElement("div");
  border4.className = "border";
  const container4 = document.createElement("div");
  container4.className = "container";
  const person3 = document.createElement("h3");
  person3.textContent = "Baby Bear";
  const position3 = document.createElement("p");
  position3.textContent = "Waiter";
  const phone3 = document.createElement("p");
  phone3.textContent = "555-555-5556";
  const email3 = document.createElement("p");
  email3.textContent = "totallyRealEmail@notFake.com";

  container4.appendChild(person3);
  container4.appendChild(position3);
  container4.appendChild(phone3);
  container4.appendChild(email3);
  border4.appendChild(container4);

  content.appendChild(h1);
  content.appendChild(border1);
  content.appendChild(border2);
  content.appendChild(border3);
  content.appendChild(border4);
}
