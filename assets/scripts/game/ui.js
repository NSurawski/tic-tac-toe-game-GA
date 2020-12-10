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
  console.log(userData.user)
  store.user = userData.user
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const onChangeSuccess = function (userData) {
  $('#message').text('Password Change Successful!')
  console.log(userData.user)
  store.user = userData.user
}

const onChangeFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const onSignOutSuccess = function (userData) {
  $('#message').text('Signed Out Successfully!')
  $('.authenticated').hide()
  $('.unauthenticated').show()
}

const onSignOutFailure = function (error) {
  $('m#message').text('Sign Out Failed with error: ' + error.responseJSON.message)
}

const onNewGameSuccess = function (userData) {
  $('#message').text('Good Luck!')
  $('#gameboard').show()
}

const onNewGameFailure = function (error) {
  $('#message').text('Game failed to start with error' + error.responseJSON.message)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure
}
