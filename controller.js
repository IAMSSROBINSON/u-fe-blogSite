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