 function makeRequest(url, query) {

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
     })
     .then((result) => {
       console.log(result);
     })
     .catch((error) => alert(error))
 }

 export default makeRequest;