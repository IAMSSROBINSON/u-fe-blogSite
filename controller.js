console.log("Hello World!");

import model from './model.js';
import view from './view.js';


const controller = {
    init () {
      model.init();
    }
};
controller.init();
export default controller;