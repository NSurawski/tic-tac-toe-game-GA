'use strict'

// dont need .js for events.js file ref
const userEvents = require('./game/events')
// wait for page to load then runs given the callback function

// .on = event listener
$(() => {
  $('#signUp').on('submit', userEvents.onSignUp)
  $('#signIn').on('submit', userEvents.onSignIn)
  $('#changePass').on('submit', userEvents.onChangePass)
  $('#signOutBtn').on('click', userEvents.onSignOut)
  $('#newGame').on('click', userEvents.onNewGame)
  // add Event listener for gameboard clicks:
  // $('#gameboard').addEventListener('click', userEvents)
})
