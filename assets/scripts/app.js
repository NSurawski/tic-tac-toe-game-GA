'use strict'

// dont need .js for events.js file ref
const userEvents = require('./game/events')
// wait for page to load then runs given the callback function

// .on = event listener
$(() => {
  $('#signUp').on('submit', userEvents.onSignUp)
  $('#signIn').on('submit', userEvents.onSignIn)
  $('#changePassword').on('submit', userEvents.onChangePass)
  $('#signOutBtn').on('click', userEvents.onSignOut)
  $('#newGame').on('click', userEvents.onNewGame)
  $('#gameboard').on('click', userEvents.onUpdateGame)
})

// function resetForm () {
// document.getElementById('signUp').reset()
// document.getElementById('signIn').reset()
// document.getElementById('changePassword').reset()
// }
