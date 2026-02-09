document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#lessonModal");
    const modalContent = document.querySelector("#modalContent");
    const closeBtn = document.querySelector(".close-modal");

    if (!modal) {
        console.error("Modal not found");
        return;
    }

    const lessonDetails = {
        alphabet: {
            title: "English Alphabet",
            text: "Learn A–Z letters and basic pronunciation."
        },
        speaking: {
            title: "Speaking Basics",
            text: "Practice everyday English conversations."
        },
        grammar: {
            title: "Basic Grammar",
            text: "Understand simple grammar rules and sentence structure."
        },
        vocabulary: {
            title: "Vocabulary Building",
            text: "Learn common English words used daily."
        }
    };

    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", () => {
            const key = button.dataset.lesson;

            modalContent.innerHTML = `
        <h2>${lessonDetails[key].title}</h2>
        <p>${lessonDetails[key].text}</p>
      `;

            modal.showModal();
        });
    });

    closeBtn.addEventListener("click", () => modal.close());

    modal.addEventListener("click", e => {
        if (e.target === modal) modal.close();
    });
});


