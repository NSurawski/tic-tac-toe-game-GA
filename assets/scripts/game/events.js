const api = require('./api')
const ui = require('./ui')
// once again the .js is optional
const getFormFields = require('./../../../lib/get-form-fields.js')

// where we write function refrenced in jquery on app.js
const onSignUp = function(event) {
  event.preventDefault()
  // using event.target as the form
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePass = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePass(data)
    .then(ui.onChangeSuccess)
    .catch(ui.onChangeFailure)
}

const onSignOut = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGame = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// display new game button when user signs in
const hideShowBtn = function () {
  if (onSignIn === true) {
    document.getElementById('newGame').style.visibility = 'visible'
  } else {
    document.getElementById('newGame').style.visibility = 'hidden'
  }
}


// when new game button is clicked, start player as x
 // const playerOne = x
 // const playerTwo = o
// and make a POST games API call to create game

// save the API response so you have access to game ID and cells

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onNewGame
}
