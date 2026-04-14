function validarFormulario(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("nome").value;
    let email = document.getElementById("nome").value;
    let pais = document.getElementById("nome").value;
    let ddd = document.getElementById("nome").value;
    let numero = document.getElementById("nome").value;
    let cep = document.getElementById("nome").value;
    let Rua = document.getElementById("nome").value;
    let numero__casa = document.getElementById("nome").value;
    let bloco = document.getElementById("nome").value;
    let bairro = document.getElementById("nome").value;
    let cidade = document.getElementById("nome").value;
    let estado = document.getElementById("nome").value;
    let anotação = document.getElementById("nome").value;
    let quantidadeErros = 0;

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatorio");
    }else{
        reiciaBorda("nome")
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulario");
        quantidadeErros = 0;
    }else {
        alert("Formulario enviado com sucesso")
        reiniciaTodasAsBordas("nome");
    }
}

function formError(idCampo){
    //                                              Aqui ele fala o que vai mudar(no caso a borda vai ficar vermelha)
    document.getElementById(idCampo).style.border="2px solid red";
}

// function reiciaBorda(idCampo){
//     document.getElementById(idCampo).style.border = "2px solid transparent";
// }

function reiniciaTodasAsBordas(){
    const campos = ["nome", "email", "telefone", "cep"]; // adiciona todos

    campos.forEach(id => {
        document.getElementById(id).style.border = "2px solid transparent";
    });
}