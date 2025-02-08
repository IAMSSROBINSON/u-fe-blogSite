console.log("Hello World!");
console.log("pathname:", window.location.pathname);
console.log("pathname includes u-fe-blogSite:", window.location.pathname.includes("u-fe-blogSite"));
import model from './model.js';
import view from './view.js';


const controller = {
    init () {
        console.log(window.location);
        console.log(window.location.pathname.includes("u-fe-blogSite"));

        if (window.location.pathname.includes("u-fe-blogSite")) {
            console.log("You are on the homepage /u-fe-blogSite");
            model.init();
            view.init();
        }
        else if (window.location.pathname.includes("blogTemplate")) {
            console.log("You are on a blogTemplate.html page");
        }
        else {
            console.log("This page is unaccounted for");
        }

        const currentlySelectedSubjectId = model.getCurrentlySelectedSubjectId();
        console.log("currentlySelectedSubjectId:", currentlySelectedSubjectId);
        if (currentlySelectedSubjectId) {
            view.setCurrentlySelectedSubjectId(currentlySelectedSubjectId);
        }
    },
    handleSubjects (event) {
        console.log("handle subjects:", event);
        const target = event?.target;
        const classList = [...event.target?.classList];
        console.log("target:", target);
        console.log("target class list", target.classList);
        if (classList.includes("subjects-list-item")) {
            console.log("list item clicked", target);
            console.log("list item clicked id", target.id);
            view.setCurrentlySelectedSubjectId(target.id);
            model.setCurrentlySelectedSubjectId(target.id);
        }
    }
}
controller.init();
export default controller;