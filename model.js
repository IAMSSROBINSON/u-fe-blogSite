import data from './assets/data/data.js';
const model = {
    init () {
        console.log("model.init");
        console.log("assets data:", data);
        const dataFromStorage = localStorage.getItem("blogSite");
        if (dataFromStorage) {
            this.data = JSON.parse(dataFromStorage);
            if (!this.data.currentlySelectedSubject) {
                this.data.currentlySelectedSubjectId = "all";
            }
            console.log("Local storage data retrieved from blogSite");
            console.log("this.data:", this.data);
        }
        else {
            this.data = data;
            this.data.currentlySelectedSubjectId = "all";
            localStorage.setItem("blogSite", JSON.stringify(data));
            console.log("Local storage data set to blogSite");
            console.log("this.data:", this.data);
        }
    },
    getCurrentlySelectedSubjectId() {
        return this.data.currentlySelectedSubjectId;
    }

}

export default model;