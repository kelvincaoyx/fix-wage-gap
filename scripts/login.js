/** Michael */
const inputtedUsername = document.getElementById("usernameBox")
const inputtedPassword = document.getElementById("passwordBox")
const inputtedPasswordConfirm = document.getElementById("confirmPasswordBox")
const inputtedEmail = document.getElementById("emailBox")
const inputtedDOB = document.getElementById("birthdayBox")
var db = openDatabase('mydb', '1.0', 'credentialsStorage', 2 * 1024 * 1024);

let regesteredCredentials = [] // array to work with 

function linearSearch(array, thingToSearch) {
  /**
   * Searches for a thing inside a given array with the linear search method
   * 
   * @param {array} An array
   * @param {float} The number to search for
   * 
   * @return {number} The index of the item in the array
   * @return {number} -1 if the item is not found
   * 
   */

  for (i in array) {
    // console.log(i)
    if (array[i].id == thingToSearch) {
      return parseInt(i)
    } 
  }
  return -1
}



function getCredentials() {
   /**
   * Handles login requests
   * 
   * @param none
   * 
   * @return none
   * 
   */

  db.transaction(function (tx) { 
    tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
    tx.executeSql('SELECT * FROM credentials', [], function (tx, results) {
      var len = results.rows.length, i;

      for (i = 0; i < len; i++){
        // console.log(results.rows);
        regesteredCredentials = results.rows
        // console.log(regesteredCredentials)

        var userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)
        // console.log(userCredentials)
        if (userCredentials != -1) { // check if username is regestered

          if (regesteredCredentials[userCredentials].password == inputtedPassword.value) { // check if password corelates to username
            document.getElementById("outputBox").innerText = 'logged in successfully (pretend this green and not red)'
          }

          else {
            document.getElementById("outputBox").innerText = 'incorrect user or password'
          }
        }

        else {
          document.getElementById("outputBox").innerText = 'incorrect user or password'
        }
      }

    }, null);
  });
}



function makeCredentials() {
  /**
   * Regesters user into account database
   * 
   * @param none
   * 
   * @return none
   * 
   */

  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
    tx.executeSql('SELECT * FROM credentials', [], function (tx, results) {
      var len = results.rows.length, i;

      for (i = 0; i < len; i++){
        // console.log(results.rows.item(i).id);
        // console.log(results.rows.item(i).log);
        // console.log(results.rows);
        regesteredCredentials = results.rows
        // console.log(regesteredCredentials)

        var userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)
        // check if username is inputted, then if passwords match
        if (userCredentials == -1 && inputtedUsername.value != '') { 
          if (inputtedPassword.value == inputtedPasswordConfirm.value) { 
            
            db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
              tx.executeSql('INSERT INTO credentials (id, password, email, dob) VALUES (?, ?, ?, ?)', [inputtedUsername.value, inputtedPassword.value, inputtedEmail.value, inputtedDOB.value]);
            });
          
            console.log('Redirecting to login page...')
            document.getElementById("outputBox").innerText = 'Logged in!  (pretend this green and not red)'
            setTimeout(() => {  
              window.location.href = "account.html"; 
            }, 3000);
          }

          else {
            document.getElementById("outputBox").innerText = 'Passwords do not match'
          }
        }

        else {
          document.getElementById("outputBox").innerText = 'Invalid account information'
        }
      }
    }, null);
  });
}

function create() {
   /**
   * Redirects to create account page
   * 
   * @param none
   * 
   * @return none
   * 
   */
  window.location.href = "createAccount.html"
}

function destroy() {
 /**
   * Brutally destroys the database
   * 
   * @param none
   * 
   * @return none
   * 
   */
  db.transaction(function (tx) {
    tx.executeSql('DROP TABLE credentials');
    tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
    tx.executeSql('INSERT INTO credentials (id, password, email, dob) VALUES ("0", "0", "0", "0")'); // input an entry after reset or else something will break
    window.alert("Account storage destroyed")
  });
}







