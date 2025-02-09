console.log("Hello World!");

import model from './model.js';
import view from './view.js';


const controller = {
    init () {
      model.init();
      view.init();
      this.renderCurrentSubject();
    },
    handleArticleClick (event) {
        console.log("controller handleArticleClick:", event);
        const target = event.target;
        const card = target.closest(".main-list-item");
        const cardId = card?.id;
        console.log("target, card, cardId:", target, card, cardId);
        model.setCurrentlySelectedCardId(cardId);
    },
    renderCurrentSubject () {
        const subject = model.getSelectedSubject();
        if (subject) {
          view.renderCurrentSubject(subject);
        }
    }
};
controller.init();
export default controller;