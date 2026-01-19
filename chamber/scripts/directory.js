const url = "data/members.json";
const membersDiv = document.querySelector("#members");
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#primaryNav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}

function displayMembers(companies) {
    membersDiv.innerHTML = "";
    companies.forEach(company => {
        const card = document.createElement("section");

        card.innerHTML = `
      <h2>${company.name}</h2>
      <img src="images/${company.image}" alt="${company.name}">
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <a href="${company.website}" target="_blank">Visit Website</a>
    `;

        membersDiv.appendChild(card);
    });
}

document.querySelector("#grid").addEventListener("click", () => {
    membersDiv.className = "grid";
});

document.querySelector("#list").addEventListener("click", () => {
    membersDiv.className = "list";
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;

getMembers();
