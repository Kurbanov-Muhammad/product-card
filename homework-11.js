const subscribeForm = document.querySelector('.subscribe-form');
const subscribeInput = document.querySelector('.subscribe-input');


subscribeForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    email: subscribeInput.value
  };
  console.log(formData);
});


const regBtn = document.querySelector('.reg-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

regBtn.addEventListener('click', function() {
  modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove('modal-showed');
});

let user 

const regForm = document.querySelector('.reg-form');

regForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const isValid = regForm.checkValidity()

  const password = document.querySelector('#password');
  const repeatpassword = document.querySelector('#repeatpassword');
  const firstName = document.querySelector('#firstname');
  const lastName = document.querySelector('#lastname');
  const date = document.querySelector('#date');
  const login = document.querySelector('#login');
  const isPasswordsMatch = password.value === repeatpassword.value

  if (!isValid || !isPasswordsMatch) {
    alert('Регистрация отклонена');
  }else {
    user = {
      firstname: firstName.value,
      lastname: lastName.value,
      date: date.value,
      login: login.value,
      password: password.value,
      createdOn: new Date()
    };
    console.log(user);
    modal.classList.remove('modal-showed');
  };
});