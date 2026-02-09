import lessons from "../data/lessons.json" assert { type: "json" };

const container = document.querySelector("#lessons-container");

lessons.forEach(lesson => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <h3>${lesson.title}</h3>
    <p><strong>Topic:</strong> ${lesson.topic}</p>
    <p>${lesson.description}</p>
    <button data-id="${lesson.id}">View Lesson</button>
  `;

    container.appendChild(card);
});
