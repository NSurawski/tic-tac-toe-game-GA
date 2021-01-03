

# Tic Tac Toe

Tic Tac Toe is A 2 player web browser game for the desktop and phone where players will
take turns selecting spots on the game board with their assigned game marker.
The first player to get 3 in a row either vertically, horizontally or diagonally
wins the game!

## Wireframes

(https://imgur.com/tylZkmO)
(https://imgur.com/GaaRLig)
(https://imgur.com/a/WLgE4D7)


## User Stories

As a user, I would like to be able to sign up.
As a user, I would like to be able to sign in once I sign up.
As a user, I would like to be able to change my password.
As a user, I would like to be able create a new game with the click of a button.
As a user, I would like to be able to refresh games if I want a new game by clicking a button.
As a user, I would like to be able to click on a place on the gameboard to set my place marker with my assigned Xs or Os.
As a user, I would like the computer to remember which spaces on the board have already been claimed and not allow a player to pick a space that is already claimed.
As a user, I would like an announcement or alert of some kind telling me who won the game based on the 3 in a row vertical, horizontal or diagonal game board placement.


## Technologies Used

HTML/CSS
JQuery
Bootstrap
Javascript

## Planning and Process

12/3

I began by creating the wireframes and user stories for this project. My game definitely went through some visual changes between creating the wireframes and starting to lay out the structure with HTML, for example, I didnt end up going with buttons for every spot on the gameboard, instead i set the gameboard up by styling divs. Though my end result looked different, it provided a good basic structure for how I wanted my game to look and what I wanted the layout to be.

12/7

The first day of actual coding for the project, I worked on the file structure and then the authentication process of signing up, signing in, changing the password, and signing out. First I created all of the files I would need for this project inside of my Tic-Tac-Toe game file. Once I had all of the files created I added in some basic HTML elements I would need to test out my auth functions. At this stage, the auth part definitely took be a very long time, as I still did not feel 100% comfortable with this process. I re-watched part of the lesson from this day, which helped me understand what needed to be done. Getting the first auth step of 'sign-up' to work helped me get the syntax down for the rest of the actions.

12/8-12/18

It took me a long time to get the authentication functionality working for all actions, but with help from my classmates and reviewing the class materials related to this action, I was able to achieve all working authentication API for this project. This felt like the biggest challenge for me thus far, and I definitely understand these actions better now through this process.

12/19-1/3

At this stage, I was still having trouble with the game functionality. Getting the API part right and troubleshooting errors took up most of my time. When it came to the game javascript at the end, I definitely felt a bit overwhelmed and could of done a better job breaking down the game functionality into smaller chunks. If i had another week, I feel confident that I would be able to complete this portion of the project. I know that I did not complete all of the game requirements, but I do feel like I learned alot throughout this process and will continue to work on this project after the due date!

## Unsolved Problems

I still need to:
- 'Update Game' API - 500 Internal Server Error
- GET games' API with counter visible on page in 'message' <p> section
- Work out actual game functionality -
