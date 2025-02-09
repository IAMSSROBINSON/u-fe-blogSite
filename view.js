import controller from "./controller.js";

const view = {
    cacheDOM () {
        this.headerContainer = document.querySelector(".header-container");
        this.logoContainer = document.querySelector(".logo-container");
        this.navContainer = document.querySelector(".nav-container");
        this.headingContainer = document.querySelector(".heading-container");
        this.subjectsContainer = document.querySelector(".subjects-container");
        this.mainContainer = document.querySelector(".main-container");
        this.mainContainerList = document.querySelector(".main-container-list");
        this.footerContainer = document.querySelector(".footer-container");
        console.log("view DOM cached.");

        this.mainContainer.addEventListener("click", (e) => {
            e.preventDefault();
            controller.handleCard(e);
        })
    },
    renderBlogTemplate () {
        window.location.pathname = "/u-fe-blogSite/blogTemplate.html";
    },
    renderPost (cardDetails) {
        console.log("view cardDetails:", cardDetails);
        console.log("view cardDetails:", cardDetails.cardTitle);
        this.renderSubjectDateStamp(cardDetails.cardSubject, cardDetails.cardDateStamp);
        this.renderTitle(cardDetails.cardTitle);
       
    },
    renderSubjectDateStamp (subject, dateStamp) {
        this.headingContainer.style.display = "none";
        this.subjectsContainer.style.display = "none";
        console.log("renderSubjectDateStamp:", subject, dateStamp);
        this.blogPostHeader = document.createElement("div");
        this.blogPostHeader.classList.add("blogPost-header");

        const subjectElement = document.createElement("p");
        subjectElement.classList.add("blogPost-subject");
        subjectElement.textContent = subject

        const dateStampElement = document.createElement("p");
        dateStampElement.classList.add("blogPost-date");
        dateStampElement.textContent = dateStamp;

        this.blogPostHeader.appendChild(subjectElement);
        this.blogPostHeader.appendChild(dateStampElement);

        this.subjectsContainer.after(this.blogPostHeader);
    },
    renderTitle (title) {
        console.log("renderTitle title", title);
        this.blogPostTitle = document.createElement("h1");
        this.blogPostTitle.classList.add("blogPost-title");
        this.blogPostTitle.textContent = title;

        this.blogPostHeader.after(this.blogPostTitle); 

    }
};
export default view;