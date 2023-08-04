import Common from "./Common.js";



const formElement = document.getElementById('login');


//console.log(formData);

// fun to get form data in form array of the form value
function grapFormData(formValues) {
  var encodedData = [];

  for (var key of formValues.entries()) {
    encodedData.push(encodeURIComponent(key[0]) + '=' +
      encodeURIComponent(key[1]));

  }
  return encodedData;
}

function validateForm(formValues) {
  for (var value of formValues) {
    if (value[1] === "") return false;
  }
  return true;
}





formElement.addEventListener('submit', function(e) {
  let formValues = new FormData(formElement);
  e.preventDefault();



  if (validateForm(formValues)) {
    var query = grapFormData(formValues).join("&");

    const url = ".../storage/emulated/0/htdocs/Test/process_form.php"; //'../storage/emulated/0/htdocs/Test/process_form.php';

    /*
        fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: query,
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            return response.json();

          }).then(result => console.log(result))
          .catch(error => console.log(error))


  */
  
    Common(url, query);


  }


})