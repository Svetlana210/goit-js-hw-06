const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitLoginForm);

function onSubmitLoginForm(event) {
    event.preventDefault();
   
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!")
    }
    const userDetails = {
        Email: email.value,
        Password: password.value
    }
    console.log(userDetails);
    form.reset();
}

