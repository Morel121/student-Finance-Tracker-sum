# student-Finance-Tracker-sum
Student finance tracker

A simple website expense tracker for students.

What it does

- Displays a form to add expense records with:
 - description
 - amount
 - category
 - date
- Saves each record to browser.
- Shows a table of saved records.
- Calculates and displays the total amount spent.
- Lets the user delete records.
- Loads saved records aitomatically when the page is opened again .
Main files
- index.html
 - Page entrypoint
 - Loads the app styles and scripts.
- Styles/main.css
 - Styles the form, table, and overall layout.
- Scripts/app.js
 - RENDERS the page HTML structure into the document body.
- Scripts/state.js
 - Manages the app state in memory.
 - Adds and deletes records.
 - Sorts records by date.
- Scripts/storage.js
 - Reads and writes records to localstorage.
 - Scripts/main.js
  - Initializes the app on DOMcontentloaded.
  - Hooks up from submission, reset, and delete button handling.

 How it runs 
 1. open index.html in a web browser.
 2. The page will render the finance tracker UI.
 3. Ebter a description, amount, category, and date.
 4. Click save to add the record.
 5. Records appear in the table and the total updates.
 6. click Delete to remove a record.

 Notes 
 - Data is stored inside the browser using localstorage under the key tracker_records.
 - No build or installation is required.
 - It is a static web app using plain HTML, css, and Javascript.