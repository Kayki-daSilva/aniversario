const elemento = document.getElementById("txt");
const textoCompleto = "Como você já sabe, a primeira vez que eu te vi, lá no 6º ano, com uma faixa da Akatsuki na cabeça, eu ri e ri muito. Mas uma das coisas que eu acho mais foda em você é que você não parecia ligar para a opinião das pessoas. \n Porra, se falassem para o meu eu de 2022 que aquela menina de cabelo VERMELHO, parecendo o Pica-Pau, se tornaria uma pessoa muito importante na minha vida, nem fudendo que eu iria acretidar. \n Mas enfim, 2023 foi bom… mas 2024, caralho, foi muito bom. E naquele ano você não faz ideia do quanto vc foi importante para mim.";


let c = 0;

function escrever() {
  if (c < textoCompleto.length) {
    elemento.textContent += textoCompleto.charAt(c);
    c++;
    // O número 100 define a velocidade (em milissegundos)
    setTimeout(escrever, 50); 
  }
}
// Inicia a função ao carregar a página
escrever();