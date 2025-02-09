import controller from "./controller.js";

const view = {
    cacheDOM () {
        this.body = document.body;
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
        this.body.style.gridTemplateRows = "min-content min-content auto auto auto auto";
        this.footerContainer.style.gridRow = "7/8" 
        console.log("view cardDetails:", cardDetails);
        console.log("view cardDetails:", cardDetails.cardTitle);
        this.renderSubjectDateStamp(cardDetails.cardSubject, cardDetails.cardDateStamp);
        this.renderTitle(cardDetails.cardTitle);
        this.renderImage(cardDetails.cardSubject);
        this.renderCaption();
        this.renderArticle(cardDetails.cardArticle);
       
    },
    renderSubjectDateStamp (subject, dateStamp) {
        this.headingContainer.style.display = "none";
        this.subjectsContainer.style.display = "none";
        this.mainContainer.style.display = "none";
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

    },
    renderImage (imageName) {
        this.blogPostImageContainer = document.createElement("figure");
        this.blogPostImageContainer.classList.add("blogPost-image-container");

        const img = document.createElement("img");
        img.classList.add("blogPost-image");
        img.src = `/assets/images/photos/${imageName.toLowerCase()}.jpg`;
        img.setAttribute("alt", "Blog post image");

        this.blogPostImageContainer.appendChild(img);
        this.blogPostTitle.after(this.blogPostImageContainer);
    },
    renderCaption () {
        this.blogPostCaption = document.createElement("figcaption");
        this.blogPostCaption.classList.add("blogPost-image-caption");
        this.blogPostCaption.textContent = "High quality image of the subject.";
        
        this.blogPostImageContainer.after(this.blogPostCaption);
    },
    renderArticle (text) {
        this.blogPostArticle = document.createElement("p");
        this.blogPostArticle.classList.add("blogPost-article");
        this.blogPostArticle.textContent = text;
        this.blogPostCaption.after(this.blogPostArticle);
    }
};
export default view;