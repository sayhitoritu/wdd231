const courses = [
    { code: "WDD 130", credits: 3, completed: true },
    { code: "WDD 131", credits: 3, completed: true },
    { code: "WDD 231", credits: 3, completed: false },
    { code: "CSE 110", credits: 2, completed: true },
    { code: "CSE 210", credits: 2, completed: true }
];

const courseContainer = document.getElementById("courses");
const creditOutput = document.getElementById("credits");

function displayCourses(list) {
    courseContainer.innerHTML = "";
    let total = 0;

    list.forEach(course => {
        const div = document.createElement("div");
        div.textContent = course.code;
        if (course.completed) div.style.backgroundColor = "#cce5cc";
        courseContainer.appendChild(div);
        total += course.credits;
    });

    creditOutput.textContent = total;
}

displayCourses(courses);

document.getElementById("all").onclick = () => displayCourses(courses);
document.getElementById("wdd").onclick = () =>
    displayCourses(courses.filter(c => c.code.startsWith("WDD")));
document.getElementById("cse").onclick = () =>
    displayCourses(courses.filter(c => c.code.startsWith("CSE")));
