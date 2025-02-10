console.log("Hello World!");

import model from './model.js';
import view from './view.js';


const controller = {
    init () {
        view.cacheDOM();
        model.setDataSource();
        if (window.location.pathname.endsWith("blogTemplate.html")) {
            console.log("You are on blogTemplate.html");
            view.renderPost(model.getCurrentPost());
        } else {
            console.log("You are on the homepage blogSite/index.html");
            const cards = model.getPosts();
            console.log("controller getPosts cards", cards);
            if (cards) {
                view.renderCards(cards);
            }
        }
    },
    handleCard(e) { 
        const target = e.target;
        const card = target.closest(".main-list-item");
        if (card) {
            const id = card.id;
            console.log("card:", card);
            console.log("cardId:", id);
    
            const title = card.querySelector(".card-title").textContent;
            const article = card.querySelector(".card-article").textContent;
            const subject = card.querySelector(".card-subject").textContent;
            const dateStamp = card.querySelector(".card-dateStamp").textContent;
            const cardDetails = {id, title, article, subject, dateStamp};
            console.log("controller handleCard:", {id, title, article, subject, dateStamp});
            model.setCardDetails(cardDetails);
            view.renderBlogTemplate();   
        } else {
            console.log("no card found");
        }
    },
    handleSubjects (e) {
        const target = e.target;
        console.log("controller handleSubjects target:", target)
        const subject = target.closest(".subjects-list-item");
        const subjectId = subject?.id;
        if (subjectId) {
            console.log("controller handle subjects", subjectId);
        // from data.posts filter posts whose subjects include subjectId
        const filteredSubjects = model.filterSubjects(subjectId);
        if (filteredSubjects) {
            view.renderFilteredSubjects(filteredSubjects);
        }
        }
    }
}
controller.init();
export default controller;