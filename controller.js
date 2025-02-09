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
            // const promise = new Promise((res, rej) => {
            //     setTimeout(() => {
            //         res(view.renderBlogTemplate());
            //     }, 0);
            // });
         
            
        } else {
            console.log("no card found");
        }
    }
}
controller.init();
export default controller;