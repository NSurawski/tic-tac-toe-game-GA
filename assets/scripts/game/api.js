const config = require('./../config')

const signUp = function(userData) {

  return $.ajax({
    url: config.apiUrl + '/game/' + userData.user,
    method: 'GET'
})

module.exports = {
  signUp
}
