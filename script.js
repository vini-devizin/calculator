function insert(num) { // inseri o numero na telinha da calculadora
    let n = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = n + num;
  }
  
  function clean() { // limpa toda a telinha da calculadora
    document.querySelector('.result').innerHTML = "";
  }
  
  function back() { // apaga o ultimo numero digitado da telinha da calculdora
    let resultado = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = resultado.substring(0, resultado.length - 1);
  }
  
  function calculate() { // efetua o calculo digitado
    let resultado = document.querySelector('.result').innerHTML;
    if (resultado) { // verifica se a telinha esta vazia
      document.querySelector('.result').innerHTML = eval(resultado); // o metodo eval() efetua calculos em formato de string
    }
  }