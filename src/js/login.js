const formElement = document.getElementById('login');
var formData = new FormData(formElement);



console.log(formData);

// fun to get form data in form array of the form value
function grapFormData() {
  var encodedData = [];

  for (var key of formData.entries()) {
    encodedData.push(encodeURIComponent(key[0]) + '=' + 
    encodeURIComponent(key[1]));

  }
  return encodedData;
}




formElement.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(grapFormData());
})