/*
Acesso:
 tag -> getElementByTagNome()
 Id -> getElementByID()
 nome -> getElementByName()
 classe -> getElementByClassName()
 seletor -> querySelector() -> melhor por boas práticas
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector ("#email")
let assunto = document.querySelector("#assunto")
let nomeOk= false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width="100%"
email.style.width ="100%"

function validaNome()
{
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3)
    {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color= "red"
    }
    else
    {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color= "green"
        nomeOk= true
    }
}

function validaEmail()
{
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@")== -1 || email.value.indexOf(".")== -1 )
    {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    }
    else
    {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk= true
    }
}

function validaAssunto()
{
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >100)
    {
        txtAssunto.innerHTML = "Limite de 100 caracteres Excedido"
        txtAssunto.style.color = "red"
    }
    else
    {
        txtAssunto.innerHTML = "Texto Válido"
        txtAssunto.style.color = "green"
        assuntoOk = true
    }
}

function enviar()
{
    if(nomeOk==true && emailOk==true && assuntoOk==true)
    {
        alert= "Formulário enviado com Sucesso!"
    }
    else
    {
        alert="Preencha o formulário corretamente"
    }
}

function mapaZoom()
{
    mapa.style.width= "800px"
    mapa.style.high= "400px"
}

function mapaNormal()
{
    mapa.style.width= "400px"
    mapa.style.high= "250px"
}
