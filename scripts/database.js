//Kelvin's work
var listOfPeople = [];

//Allows script to access the dynamicPage element in the index.html
const dynamicPage = document.getElementById("dynamicPage");

/**
 * Takes a one-dimensional array and dynamically shows them on the database tab
 * 
 * @param {array} newList - An array of objects that will be shown on the database scrren
 */
function refreshTable(newList){
  //Clears the previous data from the div
  dynamicPage.innerHTML = ""

  //Takes in each object and creates a card for each object
  for (var i = 0; i < newList.length; i++){
    borderDiv =  document.createElement("div");
    borderDiv.classList= "border";

    discriminatationTags = document.createElement("ul");
    discriminatationTags.classList = "discriminationTags";
    
    fullName= document.createElement("li");
    fullName.innerHTML =  newList[i].firstName + " " + newList[i].lastName
    discriminatationTags.append(fullName);
    

    age= document.createElement("span");
    age.innerHTML =  newList[i].age + " years old"
    discriminatationTags.append(age);

    
    if(newList[i].ethnicity != "Not Selected"){
      ethnicity= document.createElement("span");
      ethnicity.innerHTML =  newList[i].ethnicity
      discriminatationTags.append(ethnicity);
    }

    if(newList[i].religion != "Not Selected" & newList[i].religion != "Other"){
      religion= document.createElement("span");
      religion.innerHTML =  newList[i].religion
      discriminatationTags.append(religion);
    }

    if(newList[i].gender != "Not Selected"){
      gender= document.createElement("span");
      gender.innerHTML =  newList[i].gender
      discriminatationTags.append(gender);
    };

    if(newList[i].sOrientation != "Not Selected"){
      sOrientation = document.createElement("span");
      sOrientation.innerHTML =  newList[i].sOrientation
      discriminatationTags.append(sOrientation);
    };
   
    borderDiv.append(discriminatationTags);

    jobDiv = document.createElement("p");
    jobDiv.classList = "job";
    jobDiv.innerHTML = newList[i].job + ", at " + newList[i].company + " for " + newList[i].yearsOfWork + " years."
    borderDiv.append(jobDiv);

    incomeDiv = document.createElement("p");
    incomeDiv.classList = "income";
    incomeDiv.innerHTML = "Salary: $" + newList[i].income + "/per year"
    borderDiv.append(incomeDiv);
    
    infoDiv = document.createElement("p");
    infoDiv.classList = "info";
    infoDiv.innerHTML = newList[i].experience 
    borderDiv.append(infoDiv);

    dynamicPage.append(borderDiv);
 
  }

  //Gives out an error message if there is nothing in the list/ nothing fit the user's search criteria
  if (newList.length == 0){
    errorMessage = document.createElement("p");
    errorMessage.innerHTML = "Sorry, no one matches your criteria. :'("
    dynamicPage.append(errorMessage);

  }

};

/**
 * Takes in data from .json and displays it on the database screen
 */
fetch('sample_people.json')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
        Array.prototype.push.apply(listOfPeople, out)
        applyingFilters()
}).catch(err => console.error(err));

/**
 * Creates a sample array of people, so that you can see how the cards in the database will be laid out
 * 

for (var i = 0; i < 5; i++){
  let firstName = ['Kelvin', 'Micheal', 'David', 'Bob', 'Joe', 'Peter', 'Harry', 'Jeff', 'Alex', 'Homer'];
  let lastName = ['Smith', 'Geller', 'Jackson', 'Bobby', 'Greene', 'Stark', 'Parker', 'Lang', 'Rogers', 'Natasha'];
  let company = ["Google", "Microsoft", "Amazon", "McDonalds", "Harveys", "Walmart", "Staples", "Best Buy", "Target", "Starbucks"];
  let experience = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium placerat mi, nec rutrum leo luctus ut. Ut molestie quam in metus lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec ex in tortor varius pretium nec vitae risus. In semper, eros ac pharetra vestibulum, felis nunc vulputate odio, nec tincidunt diam metus nec felis. Sed vel est tincidunt, eleifend ante ut, tincidunt diam. In lobortis augue porttitor, varius neque sed, auctor lacus."];
  let job = ['Regional Manager', 'Website Developer', 'Warehouse manager', 'Janitor', 'Receptionist', 'Manager', 'Employee', 'Product tester', 'Accountant', 'Marketing lead'];
  let income = randomNumberGenerator(10000,500000)
  let yearsOfWork = randomNumberGenerator(1,30)
  let age = randomNumberGenerator(30,97)
  let ethnicity = ["Not Selected", "Caucasian", "West Asian", "Latin American", "Southeast Asian", "Arab", "Filipino", "African American", "Korean", "Japanese", "Chinese", "Visible minority, other","Multiple visible minorities"];
  let religion = ["Not Selected", "Christian", "Muslim", "Hindu", "Sikh", "Buddhist", "Jewish", "No religious affliation", "Other"];
  let gender = ["male", "female", "transgender", "gender neutral", "non-binary", "agender", "pangender", "genderqueer", "two-spirit", "third gender", "Not Selected"];
  let sOrientation = ["Not Selected", "heterosexual", "homosexual", "bisexual", "asexual"];
  let newPerson = new People(job[randomNumberGenerator(0,10)], income, experience, company[randomNumberGenerator(0,10)], firstName[randomNumberGenerator(0,10)], lastName[randomNumberGenerator(0,10)], yearsOfWork, age, ethnicity[randomNumberGenerator(0,13)], religion[randomNumberGenerator(0,9)], gender[randomNumberGenerator(0,11)], sOrientation[randomNumberGenerator(0,5)]);
  listOfPeople.push(newPerson);
};
 */

/**
 * Takes in a max and min income and filters out the specified range in the list
 * 
 * @param {array} array - The array that the function will sort through
 * @param {number} max - The lowest income the person can have
 * @param {number} min - The highest income the person can have
 * @returns {array} - Returns the filtered array with the specified range of incomes
 */
function filterByIncome(array, max, min){
  return array.filter(function(person) {
    if (person.income <= max & person.income >= min){
      return true
    }
    return  false
  })
}

/**
 * Takes in age of a person and filters out ages that aren't close to the specified age
 * 
 * @param {array} array - The array that the function will sort through
 * @param {number} age - The specified age that want to be filtered
 * @returns {array} - Returns the filtered array with people with ages that are at most two years away from the specified age
 */
function filterByAge(array, age){
  return array.filter(function(person) {
    if (age <= person.age + 2 & age >= person.age - 2){
      return true
    }
    return  false
  })
}

/**
 * Takes in years of experience of a person and filters out people without similar years of experience
 * 
 * @param {array} array - The array that the function will sort through
 * @param {number} experience - The specified number of years the person must have to be in the new array
 * @returns {array} - Returns the filtered array with people that have similar years of experience at the company
 */
function filterByExperience(array, experience){
  return array.filter(function(person) {
    if (experience <= person.yearsOfWork + 2 & experience >= person.yearsOfWork - 2){
      return true
    }
    return  false
  })
}

/**
 * Takes in a person's ethnicity and looks for people with the same ethnicity in the array
 * 
 * @param {array} array - The array that the function will sort through
 * @param {string} chosenEthnicity - The chosen ethnicity that the function will look for in the array
 * @returns {array} - Returns the filtered array with people that have the same ethnicity
 */
function filterEthnicity(array, chosenEthnicity){
  return array.filter(function(person) {
    if (person.ethnicity == chosenEthnicity){
      return true
    }
    return  false
  })
}

/**
 * Takes in a person's religion and looks for people with the same religion in the array
 * 
 * @param {array} array - The array that the function will sort through
 * @param {string} chosenReligion - The chosen religion that the function will look for in the array
 * @returns {array} - Returns the filtered array with people that have the same religion
 */
function filterReligion(array, chosenReligion){
  return array.filter(function(person) {
    if (person.religion == chosenReligion){
      return true
    }
    return  false
  })
}

/**
 * Takes in a person's gender and looks for people with the same gender in the array
 * 
 * @param {array} array - The array that the function will sort through
 * @param {string} chosenGender - The chosen gender that the function will look for in the array
 * @returns {array} - Returns the filtered array with people that have the same gender
 */
function filterGender(array, chosenGender){
  return array.filter(function(person) {
    if (person.gender == chosenGender){
      return true
    }
    return  false
  })
}

/**
 * Takes in a person's sexual orientation and looks for people with the same orientation in the array
 * 
 * @param {array} array - The array that the function will sort through
 * @param {string} chosenOrientation - The chosen sexual orientation that the function will look for in the array
 * @returns {array} - Returns the filtered array with people that have the same orientation
 */
function filterOrientation(array, chosenOrientation){
  return array.filter(function(person) {
    if (person.sOrientation == chosenOrientation){
      return true
    }
    return  false
  })
}

/**
 * Takes in a query from a search bar and searches through an array for the jobs and companies that match their query
 * 
 * @param {array} array - The array that the function will sort through
 * @param {string} query - The query that the user has written
 * @returns {array} - Returns the filtered array with objects that contain letters in their query
 */
function filterItems(array, query) {
  return array.filter(function(person) {
    if (person.job.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      return true
    if (person.company.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      return true
    if (person.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      return true
    if (person.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      return true
    return false
  })
}

/**
 * Retrieves data from the user and filters an array using the user inputs. Then it takes this filtered array and displays it on the screen
 */
function applyingFilters() {

  var maxIncome = $("#maxIncome").val();
  var minIncome = $("#minIncome").val();

// gives the max/min income some default numbers incase the user doesn't want to filter using this filter. Makes sure everything is shown
  if (maxIncome == ''){
    maxIncome = 999999999999;
  }
  if (minIncome == ''){
    minIncome = 0;
  }
  var modifiedList = filterByIncome(listOfPeople, maxIncome, minIncome);

  
  var chosenEthnicity = $("#ethnicity").val();
  if (chosenEthnicity != 'Not Selected'){
    var modifiedList = filterEthnicity(modifiedList, chosenEthnicity)
  }

  var chosenReligion = $('#religion').val()
  if (chosenReligion != 'Not Selected'){
    var modifiedList = filterReligion(modifiedList, chosenReligion)
  }

  var chosenGender = $('#gender').val()
  if (chosenGender != 'Not Selected'){
    var modifiedList = filterGender(modifiedList, chosenGender)
  }

  var chosenOrientation = $('#sOrientation').val()
  if (chosenOrientation != 'Not Selected'){
    var modifiedList = searchFilter(modifiedList, chosenOrientation)
  }
  
  var chosenAge = $('#age').val()
  if (chosenAge != ''){
    var modifiedList = filterByAge(modifiedList, chosenAge)
  }
  
  var chosenExperience = $('#yearsOfExperience').val()
  if (chosenExperience != ''){
    var modifiedList = filterByExperience(modifiedList, chosenExperience)
  }

  var searchTerm = $('#searchBox').val()
  if (searchTerm != ''){
    var modifiedList = filterItems(modifiedList, searchTerm)
  }

  var sortingCriteria = $('#sorting').val()

  if (sortingCriteria == "Name (A-Z)"){
    modifiedList.sort((a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName))
  }

  if (sortingCriteria == "Name (Z-A)"){
    modifiedList.sort((a, b) => (b.firstName + b.lastName).localeCompare(a.firstName + a.lastName))
  }

  if (sortingCriteria == "Age (Ascending)"){
    modifiedList.sort((a, b) => a.age - b.age)
  }

  if (sortingCriteria == "Age (Descending)"){
    modifiedList.sort((a, b) => b.age - a.age)
  }

  if (sortingCriteria == "Income (Ascending)"){
    modifiedList.sort((a, b) => a.income - b.income)
  }

  if (sortingCriteria == "Income (Descending)"){
    modifiedList.sort((a, b) => b.income - a.income)
  }

  if (sortingCriteria == "Years of Experience (Ascending)"){
    modifiedList.sort((a, b) => a.yearsOfWork - b.yearsOfWork)
  }

  if (sortingCriteria == "Years of Experience (Descending)"){
    modifiedList.sort((a, b) => b.yearsOfWork - a.yearsOfWork)
  }

//Sends the filtered array to the refreshtable function so that everything gets displayed
  refreshTable(modifiedList)
}

/**
 * Applies the user's search terms every time they type, so they get live updates and don't need to press a button
 */
$( "input" )
  .keyup(applyingFilters)

/**
 * Applies the users filter everytime they change a filter term. 
 */
$( "select" )
  .change(applyingFilters)
