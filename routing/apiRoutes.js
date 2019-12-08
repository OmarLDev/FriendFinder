var friendList = require('../app/data/friends');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendList);
    });

    app.post('/api/friends', (req, res) => {

    });
};