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

  api.signUp(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePass = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePass(data)
    .then(ui.onChangeSuccess)
    .catch(ui.onChangeFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.getGames(data)
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

// game functionality
// variables
// store all possible winning combos
// const winning = new Array()
// store cells each player has selected
// const player1Move = new Array()
// const player3Move = new Array()
// store total game count in variable, start at 0
// const gameCount = 0
// board size
// const boardSize = 3

// function that finds all winning combos that will end game and pushes onto the winning array
// function gameEnd () {
// winning.push([0, 1, 2])
// winning.push([3, 4, 5])
// winning.push([6, 7, 8])
// winning.push([0, 4, 8])
// winning.push([2, 4, 6])
// winning.push([0, 3, 6])
// winning.push([2, 5, 8])
// winning.push([1, 4, 7])
// }

// get all game cells
// const cells = document.getElementById('cells')
// loop through all cells
// for (let i = 0; i < cells.length; i++) {
// add a click event to each cells
// cells[i].addEventListener('click', function () {
// if (cells[i].innerHTML === '') {
//  cells[i].innerHTML = playersTurn

// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', gameboardClick))

// const gamesPlayed = function () {
//  for (i = 0, i < gameCount.length, i++ ) {
//    $('#message').text('Game Count: ' + gameCount)
//  }
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onNewGame,
  onUpdateGame,
  onGetGames
}
