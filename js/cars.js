
const cars = [
  {
    id: "vellfire-2020",
    name: "2020 Toyota Vellfire 2.5X",
    url: "cars/vellfire-2020.html",
    year: "2020",
    price: "RM178,000"
  },
  {
    id: "alphard-2019",
    name: "2019 Toyota Alphard SC",
    url: "cars/alphard-2019.html",
    year: "2019",
    price: "RM228,000"
  }
];

const container = document.getElementById("car-list");

function displayCars(filter = "") {
  container.innerHTML = "";
  cars
    .filter(car => car.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(car => {
      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `<h3>${car.name}</h3><p>${car.price}</p><a href="${car.url}">View Details</a>`;
      container.appendChild(card);
    });
}

displayCars();
