
var listOfPeople = [];


const dynamicPage = document.getElementById("dynamicPage");
const submitButtonActivate = document.getElementById("submitButton")

/**
 * This function creates a table filled with the products
 */
function refreshTable(newList){
  dynamicPage.innerHTML = ""
  if (newlist[0] == "N/a"){
    errorMessage = document.createElement("p");
    errorMessage.innerHTML= "nothing fit your criteria, sorry"
    dynamicPage.append(errorMessage)
  }
  for (var i = 0; i < newList.length; i++){
    borderDiv =  document.createElement("div");
    borderDiv.classList= "border";

    discriminatationTags = document.createElement("ul");
    discriminatationTags.classList = "discriminationTags";
    
    fullName= document.createElement("li");
    fullName.innerHTML =  newList[i].firstName + " " + newList[i].lastName
    discriminatationTags.append(fullName);
    

    age= document.createElement("button");
    age.innerHTML =  newList[i].age + " years old"
    discriminatationTags.append(age);

    ethnicity= document.createElement("button");
    ethnicity.innerHTML =  newList[i].ethnicity
    discriminatationTags.append(ethnicity);

    religion= document.createElement("button");
    religion.innerHTML =  newList[i].religion
    discriminatationTags.append(religion);

    gender= document.createElement("button");
    gender.innerHTML =  newList[i].gender
    discriminatationTags.append(gender);

    disability= document.createElement("button");
    if (newList[i].disability != "none"){
      disability.innerHTML =  newList[i].disability
      discriminatationTags.append(disability);
    };

    sOrientation = document.createElement("button");
    sOrientation.innerHTML =  newList[i].sOrientation
    discriminatationTags.append(sOrientation);
    
   
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
};

/**
 * Generates a sample array for the table
 */
for (var i = 0; i < 10; i++){
  let firstName = ['kelvin', 'micheal', 'David', 'bob', 'joe', 'peter', 'harry', 'jeff', 'alex', 'homer'];
  let lastName = ['smith', 'geller', 'jackson', 'bobby', 'greene', 'stark', 'parker', 'lang', 'rogers', 'natasha'];
  let work = ["google", "microsoft", "amazon", "mcdonalds", "harveys", "walmart", "staples", "best buy", "target", "starbucks"];
  let experience = ["was here for 10 years. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium placerat mi, nec rutrum leo luctus ut. Ut molestie quam in metus lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec ex in tortor varius pretium nec vitae risus. In semper, eros ac pharetra vestibulum, felis nunc vulputate odio, nec tincidunt diam metus nec felis. Sed vel est tincidunt, eleifend ante ut, tincidunt diam. In lobortis augue porttitor, varius neque sed, auctor lacus.", 
  "very good at eating cookies Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium placerat mi, nec rutrum leo luctus ut. Ut molestie quam in metus lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec ex in tortor varius pretium nec vitae risus. In semper, eros ac pharetra vestibulum, felis nunc vulputate odio, nec tincidunt diam metus nec felis. Sed vel est tincidunt, eleifend ante ut, tincidunt diam. In lobortis augue porttitor, varius neque sed, auctor lacus.", 
  "love tacos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium placerat mi, nec rutrum leo luctus ut. Ut molestie quam in metus lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec ex in tortor varius pretium nec vitae risus. In semper, eros ac pharetra vestibulum, felis nunc vulputate odio, nec tincidunt diam metus nec felis. Sed vel est tincidunt, eleifend ante ut, tincidunt diam. In lobortis augue porttitor, varius neque sed, auctor lacus.", 
  "I make horrible jokes", 
  "i own a dog Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium placerat mi, nec rutrum leo luctus ut. Ut molestie quam in metus lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec ex in tortor varius pretium nec vitae risus. In semper, eros ac pharetra vestibulum, felis nunc vulputate odio, nec tincidunt diam metus nec felis. Sed vel est tincidunt, eleifend ante ut, tincidunt diam. In lobortis augue porttitor, varius neque sed, auctor lacus.", 
  "i hate cats Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium placerat mi, nec rutrum leo luctus ut. Ut molestie quam in metus lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec ex in tortor varius pretium nec vitae risus. In semper, eros ac pharetra vestibulum, felis nunc vulputate odio, nec tincidunt diam metus nec felis. Sed vel est tincidunt, eleifend ante ut, tincidunt diam. In lobortis augue porttitor, varius neque sed, auctor lacus.", 
  "pizza needs pineapple", 
  "marvel is better than dc", 
  "i have been fired 10 times", 
  "Im addicted to coffee"];
  let job = ['engineer', 'software dev', 'warehouse manager', 'janitor', 'cashier', 'manager', 'employee', 'sample tester', 'cashier', 'bartender'];
  let income = [12341, 32342, 4334, 32342, 33248, 32431, 4234, 22347, 32344, 12342];
  let yearsOfWork = [1,2,3,1,2,5,4,3,2,5]
  let age = [20,23,23,65,45,75,34,54,45,73];
  let ethnicity = ["Not Selected", "Caucasian", "West Asian", "Latin American", "Southeast Asian", "Arab", "Filipino", "African American", "Korean", "Japanese"];
  let religion = ["scientology", "Christianity", "Judaism", "Hinduism", "Islam", "greek orthodox", "Confucianism", "Druze", "pagan", "Calvinism" ];
  let gender = ["male", "female", "transgender", "gender neutral", "non-binary", "agender", "pangender", "genderqueer", "two-spirit", "thrid gender"];
  let disability = ["vision impairment", "none", "deaf", "none", "intellectual disability", "none", "none", "none", "none", "none"];
  let sOrientation = ["heterosexual", "homosexual", "bisexual", "asexual", "heterosexual", "heterosexual", "homosexual", "bisexual", "asexual", "heterosexual",];
  let newProduct = new Identified(job[i], income[i], work[i], experience[i], firstName[i], lastName[i], yearsOfWork[i], age[i], ethnicity[i], religion[i], gender[i], disability[i], sOrientation[i]);
  listOfPeople.push(newProduct);
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

function filterEthnicity(list, chosenEthnicity){
  return list.filter(function(person) {
    if (person.ethnicity == chosenEthnicity){
      return true
    }
    
    return  false
  })
}

submitButtonActivate.addEventListener("click", () => {
  while (true){
    var maxIncome = $( "#maxIncome" ).val();
  
    if (maxIncome == ''){
      maxIncome = 999999999999999;
    }

    var minIncome = $( "#minIncome" ).val();
    if (minIncome == ''){
      minIncome = 0;
    }
    var modifiedList = filterByIncome(listOfPeople, maxIncome, minIncome);

    if(modifiedList.length == 0){
      modifiedList = ["N/a"]
    }
    
    var chosenEthnicity = $( "#ethnicity" ).val();
    if (chosenEthnicity != 'Not selected'){
      var modifiedList = filterEthnicity(modifiedList, chosenEthnicity)
    }

    
    refreshTable(modifiedList)
  }

})


//refreshTable(modifiedList)

