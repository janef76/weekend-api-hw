const Request = require('../helpers/request.js');

const CharacterData = function() {
  this.url = 'http://hp-api.herokuapp.com/api/characters';
  this.data = null;
}

CharacterData.prototype.getData = function (onComplete) {
  const request = new Request(this.url);
  request.get((data) => {
    console.log(data);
    this.data = data;
    onComplete(data);
  });
};

module.exports = CharacterData;
