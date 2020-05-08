// export const userService = {
//     login,
//     logout
// };

function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    // TODO Move to some sort of project config.
    const apiURL = 'http://localhost:8000/api/v1/';

    // TODO Handle anything other than 200OK!
    fetch(apiURL + "token/auth/", requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);
        })

}

function logout() {
    console.log("logout!!");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
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

export default {login, logout};