export const content = document.querySelector("#content");

export function showHome() {
  content.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Beary's breakfast bar.";

  const border1 = document.createElement("div");
  border1.className = "border";

  const container1 = document.createElement("div");
  container1.className = "container";
  const para1 = document.createElement("p");
  para1.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

  const h3 = document.createElement("h3");
  h3.textContent = " - Goldilocks";

  container1.appendChild(para1);
  container1.appendChild(h3);
  border1.appendChild(container1);

  const border2 = document.createElement("div");
  border2.className = "border";
  const container2 = document.createElement("div");
  container2.className = "container";

  const h2 = document.createElement("h2");
  h2.textContent = "Hours";

  const monday = document.createElement("p");
  monday.className = "hours";
  monday.textContent = "Monday: 6am - 6pm";

  const tuesday = document.createElement("p");
  tuesday.className = "hours";
  tuesday.textContent = "Tuesday: 6am - 6pm";

  const wednesday = document.createElement("p");
  wednesday.className = "hours";
  wednesday.textContent = "Wednesday: 6am - 6pm";

  const thursday = document.createElement("p");
  thursday.className = "hours";
  thursday.textContent = "Thursday: 6am - 10pm";

  const friday = document.createElement("p");
  friday.className = "hours";
  friday.textContent = "Friday: 6am - 10pm";

  const saturday = document.createElement("p");
  saturday.className = "hours";
  saturday.textContent = "Saturday: 8am - 10pm";

  const sunday = document.createElement("p");
  sunday.className = "hours";
  sunday.textContent = "Closed";

  container2.appendChild(h2);
  container2.appendChild(monday);
  container2.appendChild(tuesday);
  container2.appendChild(wednesday);
  container2.appendChild(thursday);
  container2.appendChild(friday);
  container2.appendChild(saturday);
  container2.appendChild(sunday);
  border2.appendChild(container2);

  content.appendChild(h1);
  content.appendChild(border1);
  content.appendChild(border2);
}
