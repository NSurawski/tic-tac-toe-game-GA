const api = require('./api')
const ui = require('./ui')
// once again the .js is optional
const getFormFields = require('./../../../lib/get-form-fields.js')

// where we write function refrenced in jquery on app.js
const onSignUp = function (event) {
  event.preventDefault()
  // using event.target as the form
  const form = event.target
  const data = getFormFields(form)

  // this is working
  api.signUp(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}
// this is working
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// troubleshoot this
const onChangePass = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePass(data)
    .then(ui.onChangeSuccess)
    .catch(ui.onChangeFailure)
}
// troubleshoot this
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// troubleshoot this
const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// if user sign in was successful, show create new game button
/* if( user signs in successfully) {
   ('#createNewGame').show()
} else {
   ('#createNewGame').hide()
 } */

// if create new game button is clicked, show gameboard, else hide it
/* if(document.getElementbyId('createNewGame').clicked == true) {
  ('#gameboard').show()
} else {
  ('#gameboard').hide()
} */

// display new game button when user signs in
// const hideShowBtn = function () {
// const hideBtn = document.getElementById('#createNewGame').style.visibility = 'hidden'
// const showBtn = document.getElementById('#createNewGame').style.visibility = 'visible'
//  if (onSignInSuccess === true) {
//    $.ajax('#createNewGame').show()
//  } else {
// $.ajax('#createNewGame').hide()
// }
// }

// when new game button is clicked, start player as x
// const playerOne = x
// const playerTwo = o

// const order = function () {
// if ('#createNewGame'// is clicked) {
// start as x
// else {
// start as o
//  }
//  }
//  }

// const gameMove = function (value) {
//  const form = event.target
// }

// To Do:
// and make a POST games API call to create game

// save the API response so you have access to game ID and cells

// utilize event.target for gameboard places?

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onNewGame
  // hideShowBtn
}
