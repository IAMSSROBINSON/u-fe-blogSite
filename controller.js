console.log("Hello World!");
console.log("pathname:", window.location.pathname);
console.log("pathname includes u-fe-blogSite:", window.location.pathname.includes("u-fe-blogSite"));
// import model from './model.js';
// import view from './view.js';


const controller = {
    // init () {
    //     console.log(window.location);
    //     console.log(window.location.pathname.includes("blogSite"));

    //     if (window.location.pathname.includes("blogSite")) {
    //         console.log("You are on the homepage");
    //         model.init();
    //         view.init();

    //     }
    //     else if (window.location.pathname.includes("blogTemplate")) {
    //         console.log("You are on a blog template page");
    //     }
    // } 
}
controller.init();
export default controller;