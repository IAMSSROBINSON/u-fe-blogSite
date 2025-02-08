console.log("Hello World!");
import model from './model.js';
import view from './view.js';


const controller = {
    init () {
        console.log(window.location);
        console.log(window.location.pathname.includes("index"));

        if (window.location.pathname.includes("index")) {
            console.log("You are on the homepage");
            model.init();
            view.init();

        }
        else if (window.location.pathname.includes("blogTemplate")) {
            console.log("You are on a blog template page");
        }
    } 
}
controller.init();
export default controller;