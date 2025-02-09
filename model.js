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
        } else if (window.location.pathname.endsWith("/u-fe-blogSite") || window.location.pathname.endsWith("index.html")) {
            console.log("You are on the blogHomePage");
        }

        // if the homepage is open
        // check local storage for data
        // if there is data then load to this.data
        // render the currentlySelectedSubjectId in the view through controller


    }   
};

export default model;