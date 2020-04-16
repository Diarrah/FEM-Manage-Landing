/*------------- Form Validation -----------------*/
let form = document.querySelector('.form-control'),
    email = form.querySelector('input'),
    error = form.querySelector('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailVal = email.value.trim();

    if (emailVal === '') {
        form.classList.add('error')
        error.innerText = `Email cannot be empty`;
    } else if (!validateEmail(emailVal)) {
        form.classList.add('error')
        email.classList.add('error')
        error.innerText = `Please provide a valid email`;
   } else { 
       form.className = 'form-control';
   }
});

function validateEmail(email) {
    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase());
}


/* ------------- Mobile Nav Toggle -------------------- */
let { body } = document;
let mobile_nav = document.querySelector('.mobile-nav');

mobile_nav.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('show');
})