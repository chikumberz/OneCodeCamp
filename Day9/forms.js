const form = document.getElementById('form');
const name = document.getElementById('name');
const name_err = document.getElementById('name-err');
const email = document.getElementById('email');
const email_err = document.getElementById('email-err');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const validate = validateForm();

    if (validate) {
        alert('Form is submited');
        this.reset();
    }
});

function validateForm () {
    let is_valid = true;

    name_err.textContent = '';
    email_err.textContent = '';

    name_val = name.value.trim();
    email_val = email.value.trim();

    if (!name_val) {
        is_valid = false;
        name_err.textContent = 'Name field is required';
    } else if (name_val.length < 3) {
        is_valid = false;
        name_err.textContent = 'Name is not valid';
    }

    if (!email_val) {
        is_valid = false;
        email_val.textContent = 'Email field is required';
    }

    return is_valid;
}