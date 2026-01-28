const courses = [
    {
        code: "WDD 130",
        title: "Web Fundamentals",
        credits: 3,
        completed: true,
        description: "Introduction to web development basics.",
        certificate: "Web & Computer Programming",
        technology: "HTML, CSS"
    },
    {
        code: "WDD 131",
        title: "Dynamic Web Fundamentals",
        credits: 3,
        completed: true,
        description: "JavaScript, DOM manipulation, and APIs.",
        certificate: "Web & Computer Programming",
        technology: "JavaScript"
    },
    {
        code: "WDD 231",
        title: "Frontend Web Development I",
        credits: 3,
        completed: false,
        description: "Advanced frontend development concepts.",
        certificate: "Web & Computer Programming",
        technology: "HTML, CSS, JS"
    },
    {
        code: "CSE 110",
        title: "Programming Building Blocks",
        credits: 2,
        completed: true,
        description: "Introduces fundamental programming concepts such as variables, conditionals, loops, functions, and basic problem-solving using Python.",
        certificate: "Web & Computer Programming",
        technology: "Python"
    },
    {
        code: "CSE 210",
        title: "Programming with Classes",
        credits: 2,
        completed: true,
        description: "Focuses on object-oriented programming concepts including classes, objects, abstraction, encapsulation, inheritance, and polymorphism using C#.",
        certificate: "Web & Computer Programming",
        technology: "C#, .NET, Git, GitHub"
    }
];

const courseContainer = document.getElementById("courses");
const creditOutput = document.getElementById("credits");

function displayCourses(list) {
    courseContainer.innerHTML = "";
    let totalCredits = 0;

    list.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        card.textContent = course.code;

        if (course.completed) {
            card.classList.add("completed");
        }

        card.addEventListener("click", () => {
            displayModal(course);
        });

        courseContainer.appendChild(card);
        totalCredits += course.credits;
    });

    creditOutput.textContent = totalCredits;
}

displayCourses(courses);

dialog.showModal()


