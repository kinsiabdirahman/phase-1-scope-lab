// Write your solution in this file!
// Declaring customerName to be bob in global scope
var customerName = "bob";

// Modifying the customerName variable to be all uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Setting the bestCustomer variable
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Overwriting the bestCustomer variable
function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

// Tryinging to reassign the leastFavoriteCustomer
const leastFavoriteCustomer = "someone";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone else";
}
