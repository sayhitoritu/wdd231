const spotlightContainer = document.querySelector("#spotlight-cards");

async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const eligible = data.members.filter(
        m => m.membership === "Gold" || m.membership === "Silver"
    );

    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("spotlight");

        div.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.logo}" alt="${member.name} logo">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><strong>${member.membership} Member</strong></p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

        spotlightContainer.appendChild(div);
    });
}

loadSpotlights();
