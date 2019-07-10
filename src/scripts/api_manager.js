const API = {
    getAPI: function(database) {
      return fetch(`http://localhost:8088/${database}`).then(
        response => response.json()
      );
    },
    postAPI: function(database, entry) {
      return fetch(`http://localhost:8088/${database}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
      });
    },
    deleteAPI: function(database, id) {
      return fetch(`http://localhost:8088/${database}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
    },
    editAPI: function(database, entry) {
      return fetch(`http://localhost:8088/${database}/${entry.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
      });
    }
  };