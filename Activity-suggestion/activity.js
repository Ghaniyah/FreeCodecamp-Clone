 async function getActivity(){

   let url='https://boredapi.com/api/activity'

   const response = await fetch(url)

   const responseBody = await response.json()

   document.getElementById(`suggest-result`).innerHTML = responseBody.act;
 }