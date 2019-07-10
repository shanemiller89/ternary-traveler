const UTILITY = {
    newPOIfactory: function (placeData, nameData, descData, costData) {
        return {
            placeId: placeData,
            name: nameData,
            description: descData,
            cost: costData,
            review: ""
          }; 
    }
};