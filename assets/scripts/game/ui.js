const onCreateSuccess = function (userData) {
  $('#message').text('Signed Up Successfully!')
}

const onCreateFailure = function (error) {
$('#message').text('Sign Up Failed with error: ' + error.message)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure
}
