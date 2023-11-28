document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('Name').value;
    var lastname = document.getElementById('Lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(name && lastname && email && password) {
        alert('User has been registered successfully');
        document.getElementById('registerForm').reset();
    } else {
        alert('Please fill out all the fields');
    }
});