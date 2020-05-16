// import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "../reducers/authSlice";
//
// const apiURL = 'http://localhost:8000/api/v1/';
//
// function login(dispatch, history, email, password) {
//
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({email, password})
//     };
//
//     dispatch(LOGIN_REQUEST());
//
//     console.log("FETCH");
//
//     // TODO Handle anything other than 200OK!
//     fetch(apiURL + "token/auth/", requestOptions)
//         .then(response => response.json())
//         .then(data => {
//             localStorage.setItem("accessToken", data.access);
//             localStorage.setItem("refreshToken", data.refresh);
//         })
//     // .then(() => {
//     //         console.log("SUCCESS!!");
//     //         dispatch(LOGIN_SUCCESS());
//     //         // history.push("/dashboard/");
//     //     }
//     // );
//
//     console.log("FETCH COMPLETE");
//
//     dispatch(LOGIN_SUCCESS());
//     console.log(history);
//     history.push("/dashboard/");
// }
//
// function refresh(dispatch) {
//
// }
//
// function logout(dispatch) {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     dispatch(LOGOUT());
// }
//
// export default {login, refresh, logout};