// Michael


const inputtedUsername = document.getElementById("usernameBox")
const inputtedPassword = document.getElementById("passwordBox")
const inputtedPasswordConfirm = document.getElementById("confirmPasswordBox")
const inputtedEmail = document.getElementById("emailBox")
const inputtedDOB = document.getElementById("birthdayBox")


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
    if (array[i].username== thingToSearch) {
      return parseInt(i)
    } 
  }
  return -1
}


let regesteredCredentials = [{"username": 'uwu', "password": "aaa"}]
function getCredentials() {
  
 let userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)

  if (userCredentials != -1) {
    if (regesteredCredentials[userCredentials].password == inputtedPassword.value) {
        window.alert('logged in successfully')
    }
    else {
      window.alert('incorrect user or password ')
    }
  }
  else {
    window.alert('incorrect user or password ')
  }
}



function makeCredentials() {

 let userCredentials = linearSearch(regesteredCredentials, inputtedUsername.value)

  if (userCredentials == -1) {
    if (inputtedPassword.value == inputtedPasswordConfirm.value) {
      regesteredCredentials.push({"username": inputtedUsername.value, "password": inputtedPassword.value, "email" : inputtedEmail.value, "dob" : inputtedDOB.value})
      window.alert('account created')
    }
    else {
      window.alert('password aint matching my guy')
    }

    console.log(regesteredCredentials)
  }
  else {
    window.alert('username is taken')
  }
}













