const config = require('./../config')
// telling JQuery to invoke the ajax function and we are sending it an object with important info like where to go
// and what type of request to make
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + ('/sign-up'),
    method: 'POST',
    data: data
})
}

module.exports = {
  signUp
}
