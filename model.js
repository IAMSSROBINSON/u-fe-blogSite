import siteData from "./assets/data/siteData.js";
const model = {
  data: null,
  setDataSource() {
    try {
      const data = localStorage.getItem("blogSite");
      if (data) {
        this.data = JSON.parse(data);
      } else {
        this.data = siteData;
        localStorage.setItem("blogSite", JSON.stringify(this.data));
      }
    } catch (error) {
      console.log("Could not load data!");
    }
  },
  setCurrentlySelectedCardId(id) {
    this.data.currentlySelectedCardId = id;
    localStorage.setItem("blogSite", JSON.stringify(this.data));
  },
  getCurrentPost() {
    const cardId = this.data.currentlySelectedCardId;
    const cardTitle = this.data.currentTitle;
    const cardArticle = this.data.currentArticle;
    const cardSubject = this.data.currentSubject;
    const cardDateStamp = this.data.currentDateStamp;
    if (cardId) {
      return { cardId, cardTitle, cardArticle, cardSubject, cardDateStamp };
    }
  },
  setCardDetails(cardDetails) {
    if (cardDetails) {
      this.data.currentlySelectedCardId = cardDetails.id;
      this.data.currentTitle = cardDetails.title;
      this.data.currentArticle = cardDetails.article;
      this.data.currentSubject = cardDetails.subject;
      this.data.currentDateStamp = cardDetails.dateStamp;
      localStorage.setItem("blogSite", JSON.stringify(this.data));
    }
  },
  getPosts() {
    return this.data.posts;
  },
  filterSubjects(subjectId) {
    const filtered = this.data.posts.filter((post) => {
      return post.subjects.includes(subjectId);
    });
    return filtered.length > 0 ? filtered : null;
  },
};

export default model;
