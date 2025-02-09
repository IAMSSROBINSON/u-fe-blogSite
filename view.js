import controller from "./controller.js";

const view = {
    init () {
        this.mainContainerList = document.querySelector(".main-container-list");
        this.mainContainerList.addEventListener("click", (event) => {
            console.log("this.mainContainerList:", this.mainContainerList);
            event.preventDefault();
            controller.handleArticleClick(event);
        });
    },
    renderCurrentSubject (subjectId = "all") {
        console.log("view renderCurrentSubject:", subjectId);
        const subjects = [...document.querySelectorAll(".subjects-list-item")];
        subjects.forEach((element) => {
            // console.log("element:", element);
            element?.classList?.remove("selected");
        });

        const selectedSubjectElement = subjects.find((subject) => {
            return subject.id === subjectId;
        })
        selectedSubjectElement.classList.add("selected");
    }

};

export default view;