const baseURL = 'http://localhost:3000/c4/'

export default {
    getPlayer() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    postPlayer(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json());
    },

    updatePlayer(player) {
        return fetch(baseURL + player._id, {
            method: 'PUT',
            body: JSON.stringify(player),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json());
    },

    deletePlayer(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}