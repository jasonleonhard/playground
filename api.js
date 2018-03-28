// var url = `https://user-apis.herokuapp.com/`
// var url = `https://user-apis.herokuapp.com/api/v1/users`

// api.js
var api = {
  getData(){
    var url = `http://hipsterjesus.com/api/`
    return fetch(url).then((res) => res.json());
  }
}
module.exports = api;
