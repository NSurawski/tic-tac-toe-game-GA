const config = require('./../config')

const signUp = function(formData) {

  return $.ajax({
    url: config.apiUrl + '/game/' + formData.userData,
    method: 'GET'
})

module.exports = {
  signUp
}
