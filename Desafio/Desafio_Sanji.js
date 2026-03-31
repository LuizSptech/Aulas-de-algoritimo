let lista = []

function Cadastro(){
    let insert = cadastro.value
    lista.push(insert)
    div_mensagem.innerHTML = `${lista}`
}

function certifique(){
    let Quantidade = lista.length

    if(Quantidade < 3){
        div_mensagem_2.innerHTML = `Desse jeito, o Luffy devora até o navio`
    } else if (Quantidade <= 7){
        div_mensagem_2.innerHTML = `O comilão do Luffy não vai deixar sobrar nenhuma comida`
    } else if (Quantidade <= 10){
        div_mensagem_2.innerHTML = `Assim, talvez sobre um pouco para a tripulação`
    } else {
        div_mensagem_2.innerHTML = `Vai ter comida pra todo mundo 😎`
    }
}

function Pesquisar(){
    let entrada = ipt_pesquisa.value
    let quantidade = 0

    div_mensagem_3.innerHTML = ""

    if(lista.includes(entrada)){
        for(let i = 0; i < lista.length; i++){
            if(lista[i] == entrada){
                quantidade++
            }
        }
        div_mensagem_3.innerHTML = `Tem ${entrada} e há ${quantidade}`
    } else {
        div_mensagem_3.innerHTML = `Falta ${entrada} no estoque`
    }
}

function exibir(){
    let itens = []
    let quantidades = []

    div_mensagem_4.innerHTML = ""

    for (let i = 0; i < lista.length; i++) {
        let contador = 0

        if (!itens.includes(lista[i])) {
            itens.push(lista[i])

            for (let j = 0; j < lista.length; j++) {
                if (lista[i] == lista[j]) {
                    contador++
                }
            }

            quantidades.push(contador)
        }
    }

    for (let i = 0; i < itens.length; i++) {
        if (quantidades[i] == 1) {
            div_mensagem_4.innerHTML += `${itens[i]} (${quantidades[i]} unidade)<br>`
        } else {
            div_mensagem_4.innerHTML += `${itens[i]} (${quantidades[i]} unidades)<br>`
        }
    }
}

function alterarNome(){
    let nomeAtual = ipt_nome_atual.value
    let nomeNovo = ipt_nome_novo.value
    let encontrou = false

    for(let i = 0; i < lista.length; i++){
        if(lista[i] == nomeAtual){
            lista[i] = nomeNovo
            encontrou = true
        }
    }

    if(encontrou){
        div_mensagem_5.innerHTML = `A comida '${nomeAtual}' foi alterada para '${nomeNovo}'`
    } else {
        div_mensagem_5.innerHTML = `A comida '${nomeAtual}' não foi encontrada no estoque`
    }
}


function removerComida(){
    let nomeRemover = ipt_remover.value
    let encontrou = false

    for(let i = lista.length - 1; i >= 0; i--){
        if(lista[i] == nomeRemover){
            lista.splice(i, 1)
            encontrou = true
        }
    }

    if(encontrou){
        div_mensagem_6.innerHTML = `A comida '${nomeRemover}' foi removida do estoque`
    } else {
        div_mensagem_6.innerHTML = `A comida '${nomeRemover}' não está no estoque`
    }
}




