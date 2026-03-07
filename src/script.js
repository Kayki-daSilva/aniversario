// Data final: 18 de março de 2026 às 00:00
const dataFinal = new Date("2026-03-18T00:00:00");

const contador = document.getElementById("contador");
const conteudo = document.getElementById("conteudo");
const btn = document.getElementById("btn");

function atualizarContagem() {
  const agora = new Date();
  const diferenca = dataFinal - agora;

  if (diferenca <= 0) {
    contador.textContent = "0d 0h 0m 0s";
    conteudo.style.display = "block";
    btn.classList.remove("disabled");
    btn.textContent = "Feliz Aniversário !!!🎉❤️";
    clearInterval(intervalo);
    return;
  }

  const segundos = Math.floor(diferenca / 1000) % 60;
  const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
  const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

atualizarContagem();
const intervalo = setInterval(atualizarContagem, 1000);
