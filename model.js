import data from './assets/data/data.js';
const model = {
    data : null,
    init () {
        console.log("model init");
        console.log("data:", data);
        // if the blogTemplatePage is open
        // check local storage for data
        // if there is data then load to this.data 
        // render the currentlySelectedCardId in the view through controller
        // render the currentlySelectedSubjectId in the view through controller
        if (window.location.pathname.endsWith("blogTemplate.html")) {
            console.log("You are on the blogTemplatePage");
            console.log("blogTemplatePage currentlySelectedSubjectId:", data.currentlySelectedSubjectId);
        } else if (window.location.pathname.endsWith("u-fe-blogSite/") || window.location.pathname.endsWith("index.html")) {
            console.log("You are on the blogHomePage");
            console.log("blogHomePage currentlySelectedSubjectId:", data.currentlySelectedSubjectId);
        }

        // if the homepage is open
        // check local storage for data
        // if there is data then load to this.data
        // render the currentlySelectedSubjectId in the view through controller


    },
    getSelectedSubject () {
        const subject = data.currentlySelectedSubjectId;
        if (subject) {
            return subject;
        }
    },
    setCurrentlySelectedCardId (cardId) {
        data.currentlySelectedCardId = cardId;
        console.log("model setCurrentlySelectedCardId:", data.currentlySelectedCardId);
    }
};

export default model;