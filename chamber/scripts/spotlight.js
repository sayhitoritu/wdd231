// ===== Business Spotlights =====

const spotlightContainer = document.querySelector("#spotlight-container");
const dataUrl = "data/members.json";

async function loadSpotlights() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();

        // Filter gold & silver members only
        const eligibleMembers = data.companies.filter(member =>
            member.membership === "gold" || member.membership === "silver"
        );

        // Shuffle randomly
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

        // Select 2 or 3 members
        const selectedMembers = shuffled.slice(0, 3);

        spotlightContainer.innerHTML = "";

        selectedMembers.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
        <h3>${member.name}</h3>
        
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Membership:</strong> ${member.membership.toUpperCase()}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

loadSpotlights();




