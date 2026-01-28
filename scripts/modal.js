const modal = document.getElementById("courseModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function displayModal(course) {
    modalContent.innerHTML = `
    <h2>${course.code}: ${course.title}</h2>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Description:</strong> ${course.description}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p><strong>Technology:</strong> ${course.technology}</p>
  `;
    modal.showModal();
}

closeModal.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
