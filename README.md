## Details:
+ 3 available routes:
  - `/counter`: displays a counter and incrementor button which increments state in redux (using RTK).
  - `/form`: Displays a form & a table of random users. Form submission stores the data in firbase and validates already existing emails.
  - `/list`: Displays a list of users in table, which is returned by a 3rd party api and the users list gets saved in firestore (first 2 items for avoiding memory limitation errors.)

+ 🔥 Storing users in firebase firestore.
+ + ⏱ Redux/redux-toolkit for managing states globally and persisting data on component unmount.
+ Validating each user input by email with existing users in firebase.
+ Show list of users from external api and validate-store them in firebase.
+ Apply sorting (⚠️ not togglable) in tables.
+ ⚠️ Search is yet to be implemented.

# How to run the project:
+ create a firebase project & create firestore app.
+ replace/provide firebase app's config variables in .env.local file (if not given, copy from .env.template)
+ run `yarn`
+ run `yarn start`
