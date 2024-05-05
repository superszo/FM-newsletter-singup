let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('form-error');
let submit = document.getElementById('submit');
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let errorVisible = false;

const toggleEmailError = () => {
    if (errorVisible === false) {
 
        errorMessage.style.visibility = 'visible'
        emailInput.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
        emailInput.style.border = '1px solid #FF6155';
        emailInput.style.color = '#FF6155'
        errorVisible = true;
    } else {
   
        errorMessage.style.visibility = 'hidden'
        emailInput.style.backgroundColor = '#FFF';
        emailInput.style.border = '1px solid rgba(25, 24, 43, 0.25)';
        emailInput.style.color = 'initial'
        errorVisible = false;
    }
}

emailInput.addEventListener('click', function() {
    if (errorVisible) {
        toggleEmailError();
    }
})


submit.addEventListener('click', function () {
    if (emailInput.value === '' && errorVisible === false) {
        toggleEmailError();
        console.log(errorVisible)
    } else if (!regex.test(emailInput.value) && errorVisible === false){
        toggleEmailError();
    } else if (regex.test(emailInput.value)) {
        // send to server
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    } 
})

document.getElementById('dismiss').addEventListener('click', function () {
    document.getElementById('signup-form').style.display = 'flex';
    document.getElementById('thank-you').style.display = 'none';
    emailInput.value = '';
})