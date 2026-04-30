let lista = [10,20,30]

function atualizarTela(){
    document.getElementById("resultado").innerHTML = JSON.stringify(lista)
}

atualizarTela()


function addFinal(lista, adicionar) {
    let a = lista.length;
    let listaNew = new Array(a + 1);

    for(let i = 0; i < a; i++){
        listaNew[i] = lista[i];
    }

    listaNew[a] = adicionar;
    return listaNew;
}

function removerFinal(lista) {
    let a = lista.length;
    let listaNew = new Array(a - 1);

    for(let i = 0; i < a - 1; i++){
        listaNew[i] = lista[i];
    }

    return listaNew;
}

function removerInicio(lista) {
    let a = lista.length;
    let listaNew = new Array(a - 1);

    for(let i = 1; i < a; i++){
        listaNew[i - 1] = lista[i];
    }

    return listaNew;
}

function addInicio(lista, adicionar){
    let a = lista.length;
    let listaNew = new Array(a + 1);

    listaNew[0] = adicionar;

    for(let i = 0; i < a; i++){
        listaNew[i + 1] = lista[i];
    }

    return listaNew;
}


function clicarAddFinal(){
    let valor = Number(document.getElementById("ipt_valor").value)
    lista = addFinal(lista, valor)
    atualizarTela()
}

function clicarRemoverFinal(){
    lista = removerFinal(lista)
    atualizarTela()
}

function clicarRemoverInicio(){
    lista = removerInicio(lista)
    atualizarTela()
}

function clicarAddInicio(){
    let valor = Number(document.getElementById("ipt_valor").value)
    lista = addInicio(lista, valor)
    atualizarTela()
}