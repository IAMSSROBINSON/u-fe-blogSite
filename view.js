import controller from "./controller.js";

const view = {
    init () {
        console.log("view.init");
        this.subjectsContainer = document.querySelector(".subjects-container");
        this.subjectsContainer.addEventListener("click", (event) => {
            controller.handleSubjects(event);
        });
    },
    setCurrentlySelectedSubjectId(id) {
        const allSubjects = [...document.querySelectorAll(".subjects-list-item")];
        allSubjects.forEach((element) => {
            element.classList.remove("selected");
            console.log("element:", element.id);
        });

        const match = allSubjects.find((subject) => {
            return subject.id === id;
        })

        if (match) {
            match.classList.add("selected");
            console.log(match);
        }

    }

}

export default view;