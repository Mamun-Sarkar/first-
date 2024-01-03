
let username= document.querySelector('#username');
let email= document.querySelector('#email');
let password= document.querySelector('#password');
let password2= document.querySelector('#password2');

function showError(input,massege) {
    const formControl = input.parentElement
    formControl.className='form-control error'
    const small = formControl.querySelector('span')
    small.innerHTML =massege
    
}
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className='form-control success'
    
    
}

