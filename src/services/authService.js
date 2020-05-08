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
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);
        });

}

function refresh() {

}

function logout() {
    localStorage.setItem("isAuthenticated", false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

export default {login, refresh, logout};