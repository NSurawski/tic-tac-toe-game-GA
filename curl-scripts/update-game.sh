API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games/:id"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data "{
    "game": {
   "cell": {
     "index": 0,
     "value": "x"
   },
   "over": false
 }
  }"
