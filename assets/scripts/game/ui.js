const store = require('./../store')

// $('#authenticated').hide()
// $('#authenticated-2').hide()
// $('#newGame').hide()
// $('#gameboard').hide()

const onCreateSuccess = function (userData) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
  $('#newGame').hide()
  $('#authenticated').hide()
  $('#gameboard').hide()
  $('#authenticated-signIn').show()
}

const onCreateFailure = function (error) {
  $('#message').text('Sign Up Failed with error: ' + error.responseJSON.message)
  $('form').trigger('reset')
  $('#newGame').hide()
  $('#authenticated').hide()
  $('#authenticated-signIn').hide()
  $('#gameboard').hide()
}

// handle token here
const onSignInSuccess = function (userData) {
  $('#message').text('Signed In Successfully!')
  store.user = userData.user
  $('.authenticated').show()
  $('.authenticated-2').show()
  $('.unauthenticated').hide()
  $('#newGame').show()
  $('#gameboard').hide()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed with error: ' + error.responseJSON.message)
  $('#newGame').hide()
  $('#authenticated').hide()
  $('#gameboard').hide()
}

const onChangeSuccess = function (userData) {
  $('#message').text('Password Change Successful!')
  $('authenticated').show()
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
  $('#gameboard').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign Out Failed with error: ' + error.responseJSON.message)
  $('#newGame').hide()
  $('#newGame').hide()
  $('#authenticated').hide()
  $('#gameboard').hide()
}

const onNewGameSuccess = function (userData) {
  $('#message').text('Good Luck!')
  $('#newGame').show()
  $('#gameboard').show()
}

const onNewGameFailure = function (error) {
  $('#message').text('Game failed to start with error ' + error.responseJSON.message)
  $('#newGame').hide()
}

const onUpdateGameSuccess = function (userData) {
  $('#message').text("Wow, you're really playing now!")
}

const onUpdateGameFailure = function (error) {
  $('#message').text('Update Game failed with error ' + error.responseJSON.message)
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
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
