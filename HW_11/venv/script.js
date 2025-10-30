const messageInput = document.getElementById('message');
const messageSpan = document.getElementById('controlMessage');

messageInput.addEventListener('input', function (event) {
    const message = event.target.value;
    if (message.length >= 5) {
        messageSpan.innerText = ''
    } else {
        messageSpan.innerText = 'Тест має бути більше ніж з 5 символів'
    }
});

const phoneInput = document.getElementById('phoneNumber');
const phoneSpan = document.getElementById('controlPhoneNumber');

phoneInput.addEventListener('input', function (event) {
    const phoneNumber = event.target.value;
    if (phoneNumber.startsWith('+380') && phoneNumber.length == 13) {
        phoneSpan.innerText = ''
    } else {
        phoneSpan.innerText = 'Номер телефону повинен починатись на +380 і мати 9 додаткових цифр'
    }
});


const emailInput = document.getElementById('email');
const emailSpan = document.getElementById('controlEmail');

emailInput.addEventListener('input', function (event) {
    const email = event.target.value;
    if (email.includes('@') && email.includes('.')) {
        emailSpan.innerText = ''
    } else {
        emailSpan.innerText = 'Email повинен мати символ "@" і "."'
    }
});


const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const formData = new FormData(form);
    for (let [key, value] of formData.entries()){
        console.log(`${key}: ${value}`)
    }
});