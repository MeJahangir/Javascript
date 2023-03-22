// step : 1 add even handelar with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    // step : 2 get the email address
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    // console.log(email);
    // step : 3 get the password collect
    const passwodFild = document.getElementById('user-password');
    const password = passwodFild.value;
    // console.log(password);
    console.log(email, password);

    // email and password condition
    if (email === 'jahangir@gmail.com' && password === 'Jahangir') {
        window.location.href = 'bank.html';
        // error alert system
    }else{
    alert('Invalid user');
    }
})
