import { makeRequest, grapFormData, validateForm } from "./commonFunction.js";


const formElement = document.getElementById('login');


formElement.addEventListener('submit', function(e) {
  let formValues = new FormData(formElement);
  e.preventDefault();



  if (validateForm(formValues)) {
    var query = grapFormData(formValues).join("&");

    const url = ".../storage/emulated/0/htdocs/Test/process_form.php";

    makeRequest(url, query);

  }
})

const input = document.querySelectorAll('input');

input.forEach((v, i) => {

  v.addEventListener('invalid', function(event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Please tell us how we should address you.');
      event.target.classList.toggle('is-invalid');
    }
  })

  v.addEventListener('change', function(event) {
    event.target.setCustomValidity('');
    event.target.classList.remove('is-invalid');
  })


});