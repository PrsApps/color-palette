

function change() {
  const btn = event.target;
  const entrada = btn.previousElementSibling;
  const color = entrada.value;
  const painel = entrada.previousElementSibling;
  painel.style.backgroundColor = color;
}
