var friendList = require('../app/data/friends');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendList);
    });

    app.post('/api/friends', (req, res) => {
        if(friendList.length > 0){
            friendList.push(req.body);
            res.json(friendList[0]);
        }else{
            res.json(false);
        }
    });
};