const store = require('./../store')

const onCreateSuccess = function (userData) {
  $('#message').text('Signed Up Successfully!')
}

const onCreateFailure = function (error) {
$('#message').text('Sign Up Failed with error: ' + error.responseJSON.message)
}

// handle token here
const onSignInSuccess = function (userData) {
  $('#message').text('Signed In Successfully!')
  console.log(data.user)
  store.user = data.user
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const onChangeSuccess = function (userData) {
  $('#message').text('Password Change Successful!')
  console.log(data.user)
  store.user = data.user
}

const onChangeFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure
}
