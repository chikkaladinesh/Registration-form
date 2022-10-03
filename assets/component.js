// const phoneNumber = document.getElementById("phoneNumber");
// const email = document.getElementById("email");

// function formValidation(){
// if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
//     alert("Please enter a valid email!");
//     email.focus();
//     return false;
// }
// if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
//     alert("Phone number must be 10 characters long number and first digit can't be 0!");
//     phoneNumber.focus();
//     return false;
//   }
//   if (radio.gender.value === "") {
//     alert("Please select your gender!");
//     return false;
//   }
// }

(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()