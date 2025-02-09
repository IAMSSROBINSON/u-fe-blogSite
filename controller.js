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
        if (card) {
            const cardId = card?.id;
            console.log("target, card, cardId:", target, card, cardId);
            model.setCurrentlySelectedCardId(cardId);
        }
    },
    renderCurrentSubject () {
        const subjectId = model.getSelectedSubject();
        if (subjectId) {
          view.renderCurrentSubject(subjectId);
        }
    },
    handleSubjectClick (event) {
        const target = event?.target;
        const item = target.closest(".subjects-list-item");
        if (item) {
            const id = item.id;
            model.setSelectedSubject(id);
            view.renderCurrentSubject(id)
        }
    }
};
controller.init();
export default controller;