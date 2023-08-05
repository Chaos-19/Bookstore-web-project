import { makeRequest, grapFormData, validateForm } from './commonFunction.js';

const formElement = document.getElementById('signin');



formElement.addEventListener('click', function(e) {

  let formData = new FormData(formElement);

  if (validateForm(formData)) {
    let query = grapFormData(formData);

    const url = "./src/php/signin.php";

    if (!isValueEqule(formElement, 'password', 'cpassword')) {
      e.preventDefault();
      const error = "password are not the same ";

      const smallScreenError = document.querySelector('.alert-xs');
      const middleScrean = document.querySelector('.alert-sm');

      if (window.innerWidth < 880) {
        
        smallScreenError.classList.remove('d-none');
        smallScreenError.textContent = error;

      } else {
      
        middleScrean.classList.remove('d-none');
        middleScrean.textContent = error;
      }

      console.log("value not equal");
    } else {
      e.preventDefault();
      document.querySelector('.overlay').classList.remove('d-none');

    }
  }
})

const isValueEqule = (form, value1, value2) => form[value1].value === form[value2].value || form[value1].length < form[value1].minLength;


const input = document.querySelectorAll('input');

input.forEach((v, i) => {

  v.addEventListener('invalid', function(event) {
    if (event.target.validity.valueMissing || event.target.value.length < event.target.minLength) {
      event.target.classList.add('is-invalid');
    }
  })

  v.addEventListener('input', function(event) {
    if (event.target.value.length > v.minLength && event.target.type !== "email") {
      event.target.setCustomValidity('');
      event.target.classList.remove('is-invalid');
    }
    else if (event.target.type == "email") {
      if (/^[a-z]+([0-9]*|[a-z]*)*(@gmail.com|@yahoo.com)$/i.test(event.target.value)) {
        event.target.setCustomValidity('');
        event.target.classList.remove('is-invalid');
      } else {
        event.target.classList.toggle('is-invalid');
        event.target.setCustomValidity('Please enter valid email address.');
      }
      console.log(/^[a-z]+(\d) +(@gmail.com|@yahoo.com)$/i.test(event.target.value));
    }
  })


});