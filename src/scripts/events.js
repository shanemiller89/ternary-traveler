import {RENDER, mainContainer} from "./render.js"
import { API } from "./api_manager.js";
import { UTILITY } from "./utility.js";

let EVENT = {
    submitNewPoi: function (button) {
        button.addEventListener("click", ()=> {
            let placeId = document.querySelector("#places").value;
            let poiName = document.querySelector("#name").value;
            let poiDesc = document.querySelector("#description").value;
            let poiCost = document.querySelector("#cost").value;
            let newPOI = UTILITY.newPoiFactory(placeId, poiName, poiDesc, poiCost);
            API.postAPI("interests", newPOI).then(() => {
                mainContainer.innerHTML = "";
                RENDER.displayFormPOI()
                RENDER.displayPOI()
            })
        });
    }
}

export {EVENT}