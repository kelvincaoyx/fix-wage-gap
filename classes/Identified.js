/**
 * This class inherits from the Products class and creates Store objects
 * 
 * @class
 */
class Identified extends People {

  /**
   * The constructor for Store objects
   * @constructor
   * @param {string} productName - The name of the product
   * @param {string} productCode - The product code
   * @param {number} stock - The amount of product stock
   * @param {number} price - The price of the product
   * @param {boolean} restocking - The restocking status of the product
   * @param {boolean} discontinued - The status of the product
   * @param {string} store - The store that the product is located at
   * @param {string} aisle - The aisle where the product is stored
   * @param {string} lastUpdated - The last time the information for this product was updated
   */
    constructor(job, income, work, experience, firstName, lastName, yearsOfWork, age, ethnicity, religion, gender, sOrientation){
      super(job, income, work, experience, yearsOfWork, age, ethnicity, religion, gender, sOrientation);
      this.firstName = firstName;
      this.lastName = lastName;

    };
  
    
};
  