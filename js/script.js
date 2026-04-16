//Essa função recebe os dados do formulario em um objeto JavaScript
async function cadastrarContato(objetoContato){
    console.log(objetoContato)


    //chamar a api com  fetch
    const resposta = await fetch('http://localhost:3000/contatos', {
        method: 'POST',
        //Converte o objeto JavaCript para JSON, sendo string para o json asceitar
        body: JSON.stringify(objetoContato) ,
        Headers:{//informa para a api que o body está sendo enviado no formato json
            "Content-Type": "application/json; charset-UFT-8"
        }
    })
    return await resposta
}




async function buscarEndereco(cep){

    //é fazer o que estavamos fazendo no navegador só que aqui
    // let nome = "Murilo"
    // let sobrenome = "Crevelaro"
    // console.log(`O nome completo é: ${nome} ${sobrenome}`)

    // quando o cep não vier preenchido
    if(cep.trim().length < 8){
        alert("O CEP tem que ter 8 digitos");
        // // faz com que nenhuma função abaixo dela funcione
        // return false;
    }
        //buscar o CEP lá na ViaCEP
        try{
            aguardandoCampo()

            //Faz esperar um tempo para parecer que o pegar CEP demorou 2 segundos
            setTimeout(async() => {
                        // o await é para esperar a linha de funcionar e ai ela vai, só funciona com o async
                let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                let dados = await retorno.json()
                console.log(dados)// objeto dados
                
                document.getElementById("logradouro").value = dados.logradouro
                document.getElementById("regiao").value = dados.regiao
                document.getElementById("complemento").value = dados.complemento
                document.getElementById("bairro").value = dados.bairro
                document.getElementById("cidade").value = dados.localidade
                                                        //O "uf" faz vir somente a sigla do estado
                document.getElementById("estado").value = dados.uf
            },2000)
        } catch (error){
            console.log(error)
        }
}

function aguardandoCampo(){
    document.getElementById("logradouro").value = "Aguarde ..."
    document.getElementById("regiao").value = "Aguarde ..."
    document.getElementById("complemento").value = "Aguarde ..."
    document.getElementById("bairro").value = "Aguarde ..."
    document.getElementById("cidade").value = "Aguarde ..."
    document.getElementById("estado").value = "Aguarde ..."
}

function validarFormulario(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let ddd = document.getElementById("ddd").value;
    let numero = document.getElementById("numero").value;
    let cep = document.getElementById("cep").value;
    let logradouro = document.getElementById("logradouro").value;
    let regiao = document.getElementById("regiao").value;
    // let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let anotação = document.getElementById("anotação").value;
    let quantidadeErros = 0;

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatorio");
    }else{
        reiniciaBorda("nome")
    }

    if(sobrenome.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
    }else{
        reiniciaBorda("sobrenome")
    }

    if(email.trim().length == 0){
        formError("email");
        quantidadeErros++;
    }else{
        reiniciaBorda("email")
    }
    if(pais.trim().length == 0){
        formError("pais");
        quantidadeErros++;
    }else{
        reiniciaBorda("pais")
    }
    if(ddd.trim().length == 0){
        formError("ddd");
        quantidadeErros++;
    }else{
        reiniciaBorda("ddd")
    }
    if(numero.trim().length == 0){
        formError("numero");
        quantidadeErros++;
    }else{
        reiniciaBorda("numero")
    }
    if(cep.trim().length == 0){
        formError("cep");
        quantidadeErros++;
    }else{
        reiniciaBorda("cep")
    }
    if(logradouro.trim().length == 0){
        formError("logradouro");
        quantidadeErros++;
    }else{
        reiniciaBorda("logradouro")
    }
    if(regiao.trim().length == 0){
        formError("regiao");
        quantidadeErros++;
    }else{
        reiniciaBorda("regiao")
    }
    // if(complemento.trim().length == 0){
    //     formError("complemento");
    //     quantidadeErros++;
    // }else{
    //     reiniciaBorda("complemento")
    // }
    if(bairro.trim().length == 0){
        formError("bairro");
        quantidadeErros++;
    }else{
        reiniciaBorda("bairro")
    }
    if(cidade.trim().length == 0){
        formError("cidade");
        quantidadeErros++;
    }else{
        reiniciaBorda("cidade")
    }
    if(estado.trim().length == 0){
        formError("estado");
        quantidadeErros++;
    }else{
        reiniciaBorda("estado")
    }
    if(anotação.trim().length == 0){
        formError("anotação");
        quantidadeErros++;
    }else{
        reiniciaBorda("anotaçãos")
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulario");
        //reinicia a contagem
        quantidadeErros = 0;
    }else {

        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            pais: pais,
            ddd: ddd,
            numero: numero,
            cep: cep,
            logradouro: logradouro,
            regiao: regiao,
            // complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            anotação: anotação
        }

        alert("Formulario enviado com sucesso")
        let cadastrar = cadastrarContato(objetoContato)
        // reiniciaTodasAsBordas();
    }
}

function formError(idCampo){
    //                                              Aqui ele fala o que vai mudar(no caso a borda vai ficar vermelha)
    document.getElementById(idCampo).style.border="2px solid red";
}

function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "2px solid transparent";
}

function reiniciaTodasAsBarras(){
    const campos = document.querySelectorAll("input, textarea");

    campos.forEach(campo => {
        campo.style.input = "none";
    });
}

//Exemplo de como limpar todas as bordas de uma vez
// function reiniciaTodasAsBordas(){
//     const campos = document.querySelectorAll("input, textarea");

//     campos.forEach(campo => {
//         campo.style.border = "2px solid transparent";
//     });
// }