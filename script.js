function getFormvalue() {
    //Write your code here
var form = document.getElementById('form1');

  // Getting the values of the first and last name input fields
  var firstName = form.elements['fname'].value;
  var lastName = form.elements['lname'].value;

  // Combining the first and last name
  var fullName = firstName + ' ' + lastName;

  // Displaying the full name using an alert
  alert(fullName);
}
