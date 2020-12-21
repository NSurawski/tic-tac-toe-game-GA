const store = require('./../store')

const onCreateSuccess = function (userData) {
  $('#message').text('Signed Up Successfully!')
  $('#newGame').hide()
  $('#authenticated').hide()
}

const onCreateFailure = function (error) {
  $('#message').text('Sign Up Failed with error: ' + error.responseJSON.message)
  $('#newGame').hide()
  $('#newGame').hide()
  $('#authenticated').hide()
}

// handle token here
const onSignInSuccess = function (userData) {
  $('#message').text('Signed In Successfully!')
  store.user = userData.user
  $('.authenticated').show()
  $('.authenticated-2').show()
  $('.unauthenticated').hide()
  $('#newGame').show()

}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const onChangeSuccess = function () {
  $('#message').text('Password Change Successful!')
}

const onChangeFailure = function (error) {
  $('#message').text('Password change failed with error: ' + error.responseJSON.message)
}

const onSignOutSuccess = function (userData) {
  $('#message').text('Signed Out Successfully!')
  $('.authenticated').hide()
  $('.authenticated-2').hide()
  $('.unauthenticated').show()
  $('#newGame').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign Out Failed with error: ' + error.responseJSON.message)
  $('#newGame').hide()
  $('#newGame').hide()
  $('#authenticated').hide()
}

const onNewGameSuccess = function (userData) {
  $('#message').text('Good Luck!')
  $('#newGame').show()
}

const onNewGameFailure = function (error) {
  $('#message').text('Game failed to start with error' + error.responseJSON.message)
  $('#newGame').hide()
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
