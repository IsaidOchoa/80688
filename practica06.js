var usuario = false
var password = false
var formulario = document.getElementById("formulario")
formulario.addEventListener("submit", e =>{
    e.preventDefault()
    console.log("Haz presionado 'Iniciar Sesion'")
    if (usuario && password){
      console.log("Enviando")  
      formulario.submit()
    }
        
})

var x = document.getElementById("x")
x.addEventListener("focusout",() => {
    if(x.value.length ==0){
        document.getElementById("mensaje1").innerHTML = "El campo esta vacio prro >:("
    }
    else{
        document.getElementById("mensaje1").innerHTML = ""
        usuario = true
    }
})

const enviar = document.getElementById("xx")

var y = document.getElementById("y")
y.addEventListener("keypress", e => {
    console.log(e.key + " " + y.value.length)
    if (y.value.length == 4)
        enviar.focus()
        password = true
})

function limpiar(){
    x.value = ""
    y.value = ""
}