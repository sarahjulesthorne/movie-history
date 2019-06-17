# movie-history
Exercise in Firebase and ERDs
Deployed at: https://movie-history-a2f47.firebaseapp.com  
## Description  
Movie-history was an individual exercise in Firebase, ERDs, and full CRUD.  
C: After logging in, the user can click the Add New Movie button to pull up a form with edits for the movie information. If the title has not already been added, when the user hits save, that movie is added to the firebase collection.  
R: On page load, after a new movie has been added, and after each change to the database, all movies in the movie collection print to the page and display the user's current rating and watchlisting choices.  
U: If a user wishes to rate or watchlist a movie that is already in their collection, their choice updates the database entry for that movie in their collection and is displayed.  
D: If the user cdeletes the movie from their collection, the movie resets to original, non-rated non-watchlisted view and that movie is removed from their collection.  
## Screenshots  
![Screenshot of page on load. Displays five movies with various information and images as well as logout and add buttons](https://raw.githubusercontent.com/sarahjulesthorne/movie-history/master/src/assets/images/screenshot.png "Screenshot of page on load. Displays five movies with various information and images as well as logout and add buttons")  
## Installation Instructions  
* Clone down this repo  
* At the root of the project, run `npm install`  
## Firebase Project Creation  
* create a project in Firebase  
* Add a web app to the project and enable Google authentication  
* Create a real-time database and seed it with the data from the database directory  
* add the keys for the project into apiKeys.json  
## How To Run  
* In terminal, type `npm start`  
* To make a production build of this project, in terminal type `npm run build`--creates folder called build with all necessary minified code  
## Deployment  
* Log into firebase by running `firebase login` or `firebase login --interactive` for Windows users  
* Run `firebase init` and select y  
* Select hosting as the firebase feature to add and select the current project  
* When asked if directory should be public, run `build`  
* y to single-page app and n to overwrite  
* run `firebase deploy`  
## Redeployment  
* create script in package.json:  
`"deploy": "npm run build && firebase deploy"`  
* To redeploy, run `npm run deploy`  
## Author  

#### Sarah Thorne  
To see more of Sarah's work on Github, click [HERE!](https://github.com/sarahjulesthorne "Sarah Thorne's Github")  
