let nota1 = document.getElementById("nota1")

let nota2 = document.getElementById("nota2")

let btnSoma = document.getElementById("soma")

btnSoma.addEventListener("click", function(){
  let resultado = Number(nota1.value) + Number(nota2.value)
  alert(resultado)
})
