// User Login Assignment JS

// Event Listener
document.getElementById('login-btn').addEventListener('click', login);

// Event Function
function login() {
    // Input
    let username = document.getElementById('user-name').value;
    let password = document.getElementById('pass-word').value;
    let name = 'Alaa';
    let pass = 'blue';

    // If username and password are correct
    if (username == name && password == pass) {
        document.getElementById('feedback').innerHTML = 'Sign In Successful';
        document.getElementById('solution').style.visibility = 'hidden';
    } else {
        document.getElementById('feedback').innerHTML = 'Sign In Unsuccessful';
    }
    if (username != name && password != pass) {
        document.getElementById('solution').innerHTML = 'Username and Password are Incorrect';
        document.getElementById('solution').style.visibility = 'visible';
    } else if (password != pass) {
        document.getElementById('solution').innerHTML = 'Password is Incorrect';
        document.getElementById('solution').style.visibility = 'visible';
    } else if (username != name) {
        document.getElementById('solution').innerHTML = 'Username is Incorrect';
        document.getElementById('solution').style.visibility = 'visible';
    }

    document.getElementById('feedback').style.visibility = 'visible';
}