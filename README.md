## Services
+ 🔥 Storing users in firebase firestore.
+ To avoid quota limitation problem, We're saving only 2 users for each 
random-users-list returned on every new request.
+ Validating each user input by email with existing users in firebase.
+ Show list of users from external api and validate-store them in firebase.
+ Apply sorting (⚠️ not togglable) in tables.
+ ⏱ Redux/redux-toolkit for managing states globally and persisting data on component unmount.

# How to run the project:
+ create a firebase project & create firestore app.
+ replace/provide firebase app's config variables in .env.local file (if not given, copy from .env.template)
+ run `yarn`
+ run `yarn start`