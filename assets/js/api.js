'use strict'
/**
 *  Fetch data from server
 * @param {*} url  api url[required]
 * @param {*} successCallback  success callback [required]
 * @param {*} errorCallback  error callback [optional]
 */
export async function fetchData(url,successCallback,errorCallback) {
  const response =await fetch(url);
  if(response.ok){
    const data = await response.json();
    successCallback(data);
  }else{
    const error = await response.json()
    errorCallback && errorCallback(error)
  }
}

// export async function fetchData(url, successCallback, errorCallback) {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       successCallback(data);
//     } else {
//       const error = await response.json();
//       console.error('Error fetching data:', error);
//       errorCallback && errorCallback(error);
//     }
//   } catch (err) {
//     console.log('Network error:', err);
//     errorCallback && errorCallback({ message: 'Network error' });
//   }
// }
