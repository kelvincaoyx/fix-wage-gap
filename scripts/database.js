var listOfPeople = [];


const dynamicPage = document.getElementById("dynamicPage");


function refreshTable(newList){
  dynamicPage.innerHTML = ""
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
    jobDiv.innerHTML = newList[i].job + ", at " + newList[i].work + " for " + newList[i].yearsOfWork + " years."
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
  if (newList.length == 0){
    errorMessage = document.createElement("p");
    errorMessage.innerHTML = "Sorry, no one matches your criteria. :'("
    dynamicPage.append(errorMessage);

  }
};

function randomNumberGenerator(lowRange, highRange){
  highRange -= lowRange;
  return Math.floor(Math.random() * highRange) + lowRange; 
};

for (var i = 0; i < 50; i++){
  let firstName = ['Kelvin', 'Micheal', 'David', 'Bob', 'Joe', 'Peter', 'Harry', 'Jeff', 'Alex', 'Homer'];
  let lastName = ['Smith', 'Geller', 'Jackson', 'Bobby', 'Greene', 'Stark', 'Parker', 'Lang', 'Rogers', 'Natasha'];
  let work = ["Google", "Microsoft", "Amazon", "McDonalds", "Harveys", "Walmart", "Staples", "Best Buy", "Target", "Starbucks"];
  let experience = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium placerat mi, nec rutrum leo luctus ut. Ut molestie quam in metus lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec ex in tortor varius pretium nec vitae risus. In semper, eros ac pharetra vestibulum, felis nunc vulputate odio, nec tincidunt diam metus nec felis. Sed vel est tincidunt, eleifend ante ut, tincidunt diam. In lobortis augue porttitor, varius neque sed, auctor lacus."];
  let job = ['Regional Manager', 'Website Developer', 'Warehouse manager', 'Janitor', 'Receptionist', 'Manager', 'Employee', 'Product tester', 'Accountant', 'Marketing lead'];
  let income = randomNumberGenerator(10000,500000)
  let yearsOfWork = randomNumberGenerator(1,30)
  let age = randomNumberGenerator(30,97)
  let ethnicity = ["Not Selected", "Caucasian", "West Asian", "Latin American", "Southeast Asian", "Arab", "Filipino", "African American", "Korean", "Japanese", "Chinese", "Visible minority, other","Multiple visible minorities"];
  let religion = ["Not Selected", "Christian", "Muslim", "Hindu", "Sikh", "Buddhist", "Jewish", "No religious affliation", "Other"];
  let gender = ["male", "female", "transgender", "gender neutral", "non-binary", "agender", "pangender", "genderqueer", "two-spirit", "third gender", "Not Selected"];
  let sOrientation = ["Not Selected", "heterosexual", "homosexual", "bisexual", "asexual"];
  let newPerson = new Identified(job[randomNumberGenerator(0,10)], income, work[randomNumberGenerator(0,10)], experience, firstName[randomNumberGenerator(0,10)], lastName[randomNumberGenerator(0,10)], yearsOfWork, age, ethnicity[randomNumberGenerator(0,13)], religion[randomNumberGenerator(0,9)], gender[randomNumberGenerator(0,11)], sOrientation[randomNumberGenerator(0,5)]);
  listOfPeople.push(newPerson);
};


refreshTable(listOfPeople)

function filterByIncome(list, max, min){
  return list.filter(function(person) {
    if (person.income <= max & person.income >= min){
      return true
    }
    return  false
  })
}

function filterByAge(list, age){
  return list.filter(function(person) {
    if (age <= person.age + 2 & age >= person.age - 2){
      return true
    }
    
    return  false
  })
}

function filterByExperience(list, experience){
  return list.filter(function(person) {
    if (experience <= person.yearsOfWork + 2 & experience >= person.yearsOfWork - 2){
      return true
    }
    
    return  false
  })
}

function filterEthnicity(list, chosenEthnicity){
  return list.filter(function(person) {
    if (person.ethnicity == chosenEthnicity){
      return true
    }
    return  false
  })
}

function filterReligion(list, chosenReligion){
  return list.filter(function(person) {
    if (person.religion == chosenReligion){
      return true
    }
    return  false
  })
}

function filterGender(list, chosenGender){
  return list.filter(function(person) {
    if (person.gender == chosenGender){
      return true
    }
    return  false
  })
}

function filterOrientation(list, chosenOrientation){
  return list.filter(function(person) {
    if (person.sOrientation == chosenOrientation){
      return true
    }
    return  false
  })
}


function filterItems(list, query) {
  return list.filter(function(person) {
    if (person.job.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      return true
    if (person.work.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      return true
    return false
  })
}

function applyingFilters() {

  var maxIncome = $("#maxIncome").val();

  if (maxIncome == ''){
    maxIncome = 999999999;
  }

  var minIncome = $("#minIncome").val();
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


  refreshTable(modifiedList)

}


$( "input" )
  .keyup(applyingFilters)

$( "select" )
  .change(applyingFilters)

fetch('https://api.github.com/orgs/nodejs')
  .then(response => response.json())
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))