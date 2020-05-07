// export const userService = {
//     login,
//     logout
// };

function login(email, password) {

    console.log("we got here!")
    console.log(email)
    console.log(password)

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    const apiURL = 'http://localhost:8000/api/v1/';

    //return fetch(apiURL + "token/auth/", requestOptions)
    fetch(apiURL + "token/auth/", requestOptions)
    // .then(handleResponse)
    // .then()
}

function logout() {

}

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }
//
//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }
//
//         return data;
//     });
// }

export default login;