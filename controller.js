import model from "./model.js";
import view from "./view.js";

const controller = {
  init() {
    view.cacheDOM();
    model.setDataSource();
    if (window.location.pathname.endsWith("blogTemplate.html")) {
      view.renderPost(model.getCurrentPost());
    } else {
      const cards = model.getPosts();
      if (cards) {
        view.renderCards(cards);
        view.setSelectedSubject("all");
      }
    }
  },
  handleCard(e) {
    const target = e.target;
    const card = target.closest(".main-list-item");
    if (card) {
      const id = card.id;
      const title = card.querySelector(".card-title").textContent;
      const article = card.querySelector(".card-article").textContent;
      const subject = card.querySelector(".card-subject").textContent;
      const dateStamp = card.querySelector(".card-dateStamp").textContent;
      const cardDetails = { id, title, article, subject, dateStamp };

      model.setCardDetails(cardDetails);
      view.renderBlogTemplate();
    }
  },
  handleSubjects(e) {
    const target = e.target;
    const subject = target.closest(".subjects-list-item");
    const subjectId = subject?.id;
    if (subjectId) {
      view.setSelectedSubject(subjectId);
      const filteredSubjects = model.filterSubjects(subjectId);
      if (filteredSubjects) {
        view.renderFilteredSubjects(filteredSubjects);
      }
    }
  },
};
controller.init();
export default controller;
