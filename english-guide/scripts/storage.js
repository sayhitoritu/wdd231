document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("saveLevel");
if (btn) {
    btn.addEventListener("click", () => {
        localStorage.setItem("level", "Beginner");
        alert("Level saved!");
    });
}
