const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateError)
  const form = event.target
  const userData = getFormFields(form)
}

module.exports = {
  onSignUp
}
