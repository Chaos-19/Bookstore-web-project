function makeRequest(url, query, method) {

  fetch(url, {
      method: method,
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
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => alert(error))
}

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


export  { makeRequest, grapFormData, validateForm };