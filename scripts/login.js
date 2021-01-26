// Michael


const inputtedUsername = document.getElementById("usernameBox")
const inputtedPassword = document.getElementById("passwordBox")
const inputtedPasswordConfirm = document.getElementById("confirmPasswordBox")
const inputtedEmail = document.getElementById("emailBox")
const inputtedDOB = document.getElementById("birthdayBox")
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

// let regesteredCredentials = [{"username": 'uwu', "password": "aaa"}]
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
  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES ("0", "0")');

  db.transaction(function (tx) { 
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
     var len = results.rows.length, i;


     for (i = 0; i < len; i++){
        // console.log(results.rows.item(i).id);
        // console.log(results.rows.item(i).log);
        console.log(results.rows);
        regesteredCredentials = results.rows
        console.log(regesteredCredentials)
        // var userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)
        var userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)
        // console.log(userCredentials)
        if (userCredentials != -1) {

          if (regesteredCredentials[userCredentials].log == inputtedPassword.value) {
            // document.body.innerHTML = document.body.innerHTML.replace('hello', 'hi');
            document.getElementById("outputBox").innerText = 'logged in successfully (pretend this green and not red)'
            
            // window.alert('logged in successfully')
          }
          else {
            document.getElementById("outputBox").innerText = 'incorrect user or password'
            // window.alert('incorrect user or password ')
          }
        }
        else {
          document.getElementById("outputBox").innerText = 'incorrect user or password'
          // window.alert('incorrect user or password ')
        }

    
     }
 
  }, null);
});
});
  

 

}



function makeCredentials() {

  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES ("0", "0")');
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
      var len = results.rows.length, i;

      for (i = 0; i < len; i++){

        // console.log(results.rows.item(i).id);
        // console.log(results.rows.item(i).log);
        console.log(results.rows);
        // regesteredCredentials = results.rows
        console.log(regesteredCredentials)

        var userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)
        if (userCredentials == -1 && inputtedUsername.value != '') {
          if (inputtedPassword.value == inputtedPasswordConfirm.value) {
            // regesteredCredentials.push({"username": inputtedUsername.value, "password": inputtedPassword.value, "email" : inputtedEmail.value, "dob" : inputtedDOB.value})
            
            db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
              // tx.executeSql('INSERT INTO LOGS (id, pass, email, dob) VALUES (?, ?, ?, ?)', [inputtedUsername.value, inputtedPassword.value, inputtedEmail.value, inputtedDOB.value]);
              tx.executeSql('INSERT INTO LOGS (id, log) VALUES (?, ?)', [inputtedUsername.value, inputtedPassword.value]);
            });
            window.alert('account created, please login')
            // window.location.href = "account.html"
            
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

function destroy() {
db.transaction(function (tx) {
  tx.executeSql('DROP TABLE LOGS');
});
}







