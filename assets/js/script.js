
/* 

Case Sentitive = reconhecer minusculo e maiusculo
por tag : getElemetiByTagName()
por Id: getElementById() 
por Nome : getElementByName()
por Classe : getElementByClassName()
por seletor : querySelector()

*/ 
let nome = window.document.getElementById ('nome')
let email = document.querySelector ('#email')
let assunto = document.querySelector ('#assunto')
let nomeOk= false
let emailOk= false
let assuntoOk= false
let mapa = document.querySelector('#mapa')

nome.style.width ='100%'
email.style.width='100%'

function validaNome() {
let txt = document.querySelector ('#txtNome')
    if (nome.value.length < 3 ){
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    }
     else {
    txt.innerHTML = 'Nome Valido'
    txt.style.color = 'green'
    nomeOk = true
}
}
function validaEmail (){
let txtEmail = document.querySelector('txtEmail')

if  (email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1 ) {
    txtEmail.innerHTML = 'Email Invalido'
    txtEmail.style.color = 'red'
}

else {
    txtEmail.innerHTML = 'Email Invalido'
    txtEmail.style.color = 'green'
    emailOk =true
}}
function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if  (assunto.value.length >= 100)  {
        txtAssunto.innerHTML = 'Digite no max 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = "block"
    } else {
            txtAssunto.style.display = 'none'
            assuntoOk = true
    }
}
function enviar(){
if(nomeOk == true || emailOk == true || assuntoOk == true){
    alert ('Formulario Enviado')
}
else {
    alert ('Preencher corretamente')
}

}
function mapaZoom(){
mapa.style.width = '800px'
mapa.style.height - '600px'

}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height - '250px'
}