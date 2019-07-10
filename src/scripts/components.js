import { UTILITY } from "./utility.js"
import { API } from "./api_manager.js";
import {EVENT} from "./events.js"


const COMPONENT = {
    poiFormComponent: function (places) {
        let poiFormContainer = document.createElement("div")
        let poiSubmitBtn = document.createElement("button")
        let poiForm = `
        <h1>Create New Point of Interest</h1>
        <form class ="editForm" action="">
            <fieldset>
                <label for="places">Where are you Traveling?</label>
                    <select id="places">
                        <option value="default"></option>
                        <option value="${places[0].id}">${places[0].name}</option>
                        <option value="${places[1].id}">${places[1].name}</option>
                        <option value="${places[2].id}">${places[2].name}</option>
                    </select>
            </fieldset>
            <fieldset>
                <label for="name">Name of your P.O.I.</label>
                <input type="text" name="name" id="name"/>
            </fieldset>
            <fieldset>
                <label for="description">Description of P.O.I.</label>
                <input type="text" name="description" id="description"/>
            </fieldset>
            <fieldset>
                <label for="cost">Estimated Cost</label>
                <input type="text" name="cost" id="cost"/>
            </fieldset>
        </form>
        `
        poiSubmitBtn.innerText = "Submit"
        poiFormContainer.innerHTML = poiForm;
        poiFormContainer.appendChild(poiSubmitBtn)
        EVENT.submitNewPoi(poiSubmitBtn)
        return poiFormContainer;
    },
    poiDisplayComponent: function (x) {
        let poiContainer = document.createElement("div")
        let poiDisplay = `
        <h1> Points of Interest</h1>
        <h2>Location: </h2><div>${x.place.name}</div>
        <h2>P.O.I Name: </h2><div>${x.name}</div>
        <h2>Description: </h2><div>${x.description}</div>
        <h2>Cost: </h2><div>${x.cost}</div>
        <h2>Review: </h2><div>${x.review}</div>
        `
        poiContainer.innerHTML = poiDisplay;
        return poiContainer;
    }
};

// poiSubmitBtn.addEventListener("click", ()=> {
//     let placeId = document.querySelector("#places").value;
//     let poiName = document.querySelector("#name").value;
//     let poiDesc = document.querySelector("#description").value;
//     let poiCost = document.querySelector("#cost").value;
//     let newPOI = UTILITY.newPoiFactory(placeId, poiName, poiDesc, poiCost);
//     API.postAPI("interests", newPOI)
// })


export {COMPONENT}
