// Michael


const inputtedUsername = document.getElementById("usernameBox")
const inputtedPassword = document.getElementById("passwordBox")
const inputtedPasswordConfirm = document.getElementById("confirmPasswordBox")
const inputtedEmail = document.getElementById("emailBox")
const inputtedDOB = document.getElementById("birthdayBox")
var db = openDatabase('mydb', '1.0', 'credentialsStorage', 2 * 1024 * 1024);

let regesteredCredentials = []





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

  db.transaction(function (tx) { 
    tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
    tx.executeSql('SELECT * FROM credentials', [], function (tx, results) {
     var len = results.rows.length, i;


     for (i = 0; i < len; i++){

        console.log(results.rows);
        regesteredCredentials = results.rows
        console.log(regesteredCredentials)

        var userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)
        console.log(userCredentials)
        if (userCredentials != -1) {

          if (regesteredCredentials[userCredentials].password == inputtedPassword.value) {

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

  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
    tx.executeSql('SELECT * FROM credentials', [], function (tx, results) {
      var len = results.rows.length, i;

      for (i = 0; i < len; i++){

        // console.log(results.rows.item(i).id);
        // console.log(results.rows.item(i).log);
        console.log(results.rows);
        regesteredCredentials = results.rows
        console.log(regesteredCredentials)

        var userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)
        if (userCredentials == -1 && inputtedUsername.value != '') {
          if (inputtedPassword.value == inputtedPasswordConfirm.value) {
            
            db.transaction(function (tx) {
              // tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, log)');
              tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
              tx.executeSql('INSERT INTO credentials (id, password, email, dob) VALUES (?, ?, ?, ?)', [inputtedUsername.value, inputtedPassword.value, inputtedEmail.value, inputtedDOB.value]);
              
            });
          
            
            setTimeout(() => {  
              window.location.href = "account.html"; 
              console.log('Redirecting to login page...')
            }, 3000);
            
          }
          else {
            // document.getElementById("outputBox").innerText = 'password aint matching my guy'
            window.alert('password aint matching my guy')
          }
          // console.log(regesteredCredentials)
        }
        else {
          window.alert('invalid account information')
        }
      }
    }, null);
  });
}

function create() {
  window.location.href = "createAccount.html"
}

function destroy() { // reset database
db.transaction(function (tx) {
  tx.executeSql('DROP TABLE credentials');
  tx.executeSql('CREATE TABLE IF NOT EXISTS credentials (id unique, password, email, dob)');
  tx.executeSql('INSERT INTO credentials (id, password, email, dob) VALUES ("0", "0", "0", "0")');
});
}







