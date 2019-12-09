var friendList = require('../app/data/friends');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendList);
    });

    app.post('/api/friends', (req, res) => {
            newFriend = req.body;
            var bestFit = calcDifferences(newFriend);
            friendList.push(newFriend);
            res.json(friendList[bestFit]);
    });
};

function calcDifferences(newFriend){
    var friendsDifference = [];
    var diff = 0;
    for(var friend of friendList){
        for(var i = 0; i < 10; i++){
            if(i < 9){
                diff = diff += Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
            }else{
                friendsDifference.push(diff);
                diff = 0;
            }
        }
    }
    var index = friendsDifference.indexOf(Math.min.apply(null, friendsDifference));
    return index;
}