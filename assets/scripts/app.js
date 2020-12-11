'use strict'

// dont need .js for events.js file ref
const userEvents = require('./game/events')
// wait for page to load then runs given the callback function
// .on = event listener
// have not written 'onSignUp' function yet!
$(() => {
  $('#signUp').on('submit', userEvents.onSignUp)
  $('#signIn').on('submit', userEvents.onSignIn)
  $('#changePassword').on('submit', userEvents.onChangePass)
  $('#signOutBtn').on('click', userEvents.onSignOut)
  $('#createNewGame').on('submit', userEvents.onNewGame)
  // $('#gameboard').addEventListener('click', userEvents)
})
