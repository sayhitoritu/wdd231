const byuiCourse = {
    name: "Web Frontend Development I",
    code: "WDD231",
    sections: [
        {
            sectionNumber: 1,
            enrolled: 88,
            instructor: "Brother Bingham"
        },
        {
            sectionNumber: 2,
            enrolled: 81,
            instructor: "Sister Shultz"
        },
        {
            sectionNumber: 3,
            enrolled: 95,
            instructor: "Sister Smith"
        }
    ],

    changeEnrollment(sectionNum, add = true) {
        const section = this.sections.find(
            (s) => s.sectionNumber == sectionNum
        );
        if (section) {
            add ? section.enrolled++ : section.enrolled--;
        }
    }
};


// 👇 REQUIRED by the assignment
export default byuiCourse;
