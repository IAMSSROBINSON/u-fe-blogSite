const view = {
    init () {
        console.log("view.init");

    },
    setCurrentlySelectedSubjectId(id) {
        const allSubjects = [...document.querySelectorAll(".subjects-list-item")];
        allSubjects.forEach((element) => {
            if (element.id === id) {
            element.classList.add("selected");
            console.log("setCurrentlySelectedSubjectId complete");
            }
            element.classList.remove("selected");
        })

    }

}

export default view;