const config = require('./../config')
// telling JQuery to invoke the ajax function and we are sending it an object with important info like where to go
// and what type of request to make
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
})
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePass = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: data
  })
}

const signOut = function (data) {
  return.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePass,
  signOut
}
