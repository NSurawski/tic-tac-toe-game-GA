'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // figure out what to put where 'userEvents' is
  $('#signUp').on('submit', userEvents.onSignUp)
})
