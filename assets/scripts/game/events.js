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

module.exports = {
  onSignUp
}
