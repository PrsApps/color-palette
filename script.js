// const panel = document.querySelector('.panel__color')
// const panelInput = document.querySelector('.panel__input')
// const panelButton = document.querySelector('.panel__button')

// panelButton.addEventListener('click', function() {

//     const color = panelInput.value

//     console.log(color)
//         if (color !=='') {
//             panel.style.backgroundColor = color
//         }
// })

const panel = document.querySelectorAll(".panel__color");
const panelInput = document.querySelectorAll("input");
const panelButton = document.querySelectorAll(".panel__button");
const group = document.querySelectorAll(".group");

function change() {
  const btn = event.target;
  const entrada = btn.previousElementSibling;
  const color = entrada.value;
  const painel = entrada.previousElementSibling;
  painel.style.backgroundColor = color;
}
