// // // courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26, days: 'TTh', instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function (sectionNum) {
        const sectionMatch = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionMatch >= 0) {
            this.sections[sectionMatch].enrolled++;
            outputSection(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionMatch = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionMatch >= 0) {
            this.sections[sectionMatch].enrolled--;
            outputSection(this.sections);
        }
    },
    addOrDrop: function (sectionNum, add = true) {
        const sectionMatch = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionMatch >= 0) {
            if (add) {
                this.sections[sectionMatch].enrolled++;
            } else {
                this.sections[sectionMatch].enrolled--;
            }
            renderSections(this.sections);
        }
    }
};

function setACourse(courseObj) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = courseObj.name;
    courseCode.textContent = courseObj.code;
}

function outputSection(sections) {
    const insideHTML = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>
    `);
    document.querySelector('#sections').innerHTML = insideHTML.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

setACourse(aCourse);
outputSection(aCourse.sections);
