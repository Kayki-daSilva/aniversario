const elemento = document.getElementById("texto");
const textoCompleto = "Feliz Aniversário! \n Hoje é um dia muito especial. 17 anos já, hein? Tá ficando velha, em! \n Mas aproveita muito o seu dia, não só hoje, mas todos os dias que ainda vão vir. Você merece tudo de bom, muitas risadas e muita felicidade. \n Você é uma menina muito chata e esquisitinha kkkkkkkk às vezes, mas também é o dobro de engraçada e divertida, e isso é uma das coisas que eu acho mais foda em vc. \n Uma das formas que encontrei de demonstrar isso foi criando esse site pra você. Foi algo que fiz de coração e que eu não me arrependo nem um pouco. \n Aproveita seu dia, AL Malvadona o six do meu seven";
let i = 0;

function escrever() {
  if (i < textoCompleto.length) {
    elemento.textContent += textoCompleto.charAt(i);
    i++;
    // O número 100 define a velocidade (em milissegundos)
    setTimeout(escrever, 50); 
  }
}
// Inicia a função ao carregar a página
escrever();