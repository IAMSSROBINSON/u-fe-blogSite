import siteData from './assets/data/siteData.js';
const model = {
    data: null,
  setDataSource() {
    try {
        const data = localStorage.getItem("blogSite");
        if (data) {
            this.data = JSON.parse(data);
            console.log("localStorageGot", this.data);
        } else {
            this.data = siteData;
            localStorage.setItem("blogSite", JSON.stringify(this.data));
            console.log("localStorageSet", this.data);
        }
    }
    catch (error) {
        console.log("Could not load data!");
    }
  },
  setCurrentlySelectedCardId (id) {
    this.data.currentlySelectedCardId = id;
    console.log("model setCurrentlySelectedCardId:", this.data.currentlySelectedCardId);
    localStorage.setItem("blogSite", JSON.stringify(this.data));
    console.log("localStorageSet", this.data);
  },
  getCurrentPost () {
    const cardId = this.data.currentlySelectedCardId;
    const cardTitle = this.data.currentTitle;
    const cardArticle = this.data.currentArticle
    const cardSubject = this.data.currentSubject;
    const cardDateStamp = this.data.currentDateStamp;
    if (cardId) {
        console.log("model getCurrentCardId:", cardId);
        console.log("model cardTitle:", cardTitle);
        console.log("model cardArticle:", cardArticle);
        console.log("model cardSubject:", cardSubject);
        console.log("model cardDateStamp:", cardDateStamp);
        return {cardId, cardTitle, cardArticle, cardSubject, cardDateStamp};
    } else {
        console.log("No cardId.");
    }
  },
  setCardDetails (cardDetails) {
   if (cardDetails) {
    console.log("model card details:", cardDetails);
    this.data.currentlySelectedCardId = cardDetails.id;
    this.data.currentTitle = cardDetails.title;
    this.data.currentArticle = cardDetails.article;
    this.data.currentSubject = cardDetails.subject;
    this.data.currentDateStamp = cardDetails.dateStamp;
    localStorage.setItem("blogSite", JSON.stringify(this.data));
    console.log("model setCardDetails local storage set:", this.data);
    
   }
  },
  getPosts () {
    return this.data.posts;
  },
  filterSubjects (subjectId) {
    console.log("model filtered subjects:", subjectId);
    console.log("model filtered subjects:", this.data.posts);
    const filtered = this.data.posts.filter((post) => {
      console.log("post subjects:", post.subjects);
      console.log("post subjects:", post.subjects.includes("design"));
      return post.subjects.includes(subjectId);
    });
    console.log("post subjects filtered:", filtered);
    return filtered.length > 0 ? filtered : null;
  }
}

export default model;