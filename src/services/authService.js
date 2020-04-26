const refreshTime = 600;

function login(email, password) {

    var response;

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    }

    response = fetch('http://localhost:8000/api/v1/token/auth/', requestOptions);
    console.log(response);

}

function refresh() {

}

function logout() {

}