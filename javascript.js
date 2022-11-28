const form = document.querySelector('form');
const errorIcon = document.querySelectorAll('.err-icon');
const span = document.querySelectorAll('.err-msg');
const input = document.querySelectorAll('.input');

const success = document.querySelector('.success-message-container');
const sesionContainer = document.querySelector('.content-sesion');

const inputCorrect = (i) =>{
  span[i].textContent = 'ingresado ✅'
  span[i].style.color = '#38cc8b'
  input[i].classList.remove('err-border');
  errorIcon[i].classList.add('hidden');
}

const inputIncorrect = (i) =>{
  span[i].textContent = "no puede ser vacio"
  errorIcon[i].classList.remove('hidden');
  span[i].style.color = 'red';
  input[i].classList.add('err-border')
}

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log("boton presionado");

  const data = Object.fromEntries(
    new FormData(e.target)
  )

  Object.values(data).forEach((e,index) =>{
    e.length ? inputCorrect(index) : inputIncorrect(index)
  });

  console.log(JSON.stringify(data));

  // success.classList.remove('hidden');
  // sesionContainer.classList.add('hidden');

});
