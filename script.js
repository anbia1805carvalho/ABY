// Função para criptografar a entrada
function criptografar() {
    // Obtém o texto de entrada do elemento input com id 'entrada'
    var entrada = document.getElementById("entrada").value;
   
    // Inicializa uma variável para armazenar o resultado
    var resultado = "";
     // Loop através de cada caractere da entrada
    for (var i = 0; i < entrada.length; i++) {
      var c = entrada[i];
       // Desloca caracteres maiúsculos e minúsculos três posições para a direita na tabela ASCII
      if (c >= 'a' && c <= 'z') {
        resultado += String.fromCharCode((c.charCodeAt(0) - 97 + 3) % 26 + 97);
      } else if (c >= 'A' && c <= 'Z') {
        resultado += String.fromCharCode((c.charCodeAt(0) - 65 + 3) % 26 + 65);
      } else {
        resultado += c;
      }
    }
     // Inverte a linha
    resultado = resultado.split("").reverse().join("");
     // Desloca os cara3cteres da metade em diante uma posição para a esquerda na tabela ASCII
    var meio = Math.floor(resultado.length / 2);
    for (var i = meio; i < resultado.length; i++) {
      resultado = resultado.substring(0, i) + String.fromCharCode(resultado.charCodeAt(i) - 1) + resultado.substring(i+1);
    }
     // Define o valor do elemento textarea com id 'resultado' como o resultado
    document.getElementById("resultado").value = resultado;
  }
   // Adiciona um listener para o botão 'submit' que chama a função criptografar quando clicado
  document.getElementById("submit").addEventListener("click", criptografar);
 