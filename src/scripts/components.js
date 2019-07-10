const COMPONENT = {
    poiFormComponent: function (places) {
        let poiForm = `
        <h1>Create New Point of Interest</h1>
        <form class ="editForm" action="">
            <fieldset>
                <label for="places">Where are you Traveling?</label>
                    <select id="places">
                        <option value="default"></option>
                        <option value="${places.id}">${places.name}</option>
                        <option value="${places.id}">${places.name}</option>
                        <option value="${places.id}">${places.name}</option>
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
            <fieldset>
        </form>
        `
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
        poiContainer.innerHTML = poiDisplay
        return poiContainer
    }
};

export {COMPONENT}