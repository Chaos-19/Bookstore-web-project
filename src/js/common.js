export default async function makeRequest(url, data) {

  try {
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data,
    })
    const response = await request.json();
    
    return response;
    
  } catch (error) {
    console.log(error);
  }
}