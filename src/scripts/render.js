import { API } from "./api_manager.js"
import { COMPONENT } from "./components.js"

let mainContainer = document.querySelector("#container")

const RENDER = {
    displayPOI: function () {
        API.getAPI("interests","_expand=place").then( pois => {
            pois.forEach(poi => {
                mainContainer.appendChild(COMPONENT.poiDisplayComponent(poi))
            });
        });
    },
    displayFormPOI: function () {
        API.getAPI("places").then( places => {
            mainContainer.appendChild(COMPONENT.poiFormComponent(places))
        });
    }
};

export {RENDER, mainContainer}