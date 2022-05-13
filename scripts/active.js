function onChange() {
    const password = document.querySelector('input[name=userpass]');
    const confirm = document.querySelector('input[name=confirmpass]');
    if (confirm.value === password.value && confirm.value !== "") {
        confirm.setCustomValidity('');
        password.style.border = '1px solid greenyellow'
        confirm.style.border = '1px solid greenyellow'
    } else if (confirm.value === password.value && confirm.value === "") {
        confirm.setCustomValidity('');
        password.style.border = '1px solid rgb(230, 230, 230)'
        confirm.style.border = '1px solid rgb(230, 230, 230)'
    } else {
        confirm.setCustomValidity('Passwords do not match');
        password.style.border = '1px solid red'
        confirm.style.border = '1px solid red'
    }
}

const password = document.querySelector('input[name=userpass]');
const confirm = document.querySelector('input[name=confirmpass]');
password.addEventListener('input', onChange)
confirm.addEventListener('input', onChange)