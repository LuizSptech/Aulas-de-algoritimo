let lista = [10,20,30]

function mostrar(){
    resultado.innerHTML = `${lista}`
}


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


function contemElemento(lista, element) {
    let list = lista.length;
    let element = new Array(list);
    let contem = false;
    for (let i = 0; i < list; i++) {
        if (lista[i] == element) {
            contem = true;
            break;
        }
        return tem;
    }
}
function buscarPrimeiraPosicao(lista, element) {
    let list = lista.length;
    let element = new Array(list);
    let contem = false;
    for (let i = 0; i < list; i++) {
        if (lista[i] == element) {
            contem = true;
            break;
        }
        return i;
    }
}
function buscarUltimaPosica(lista, element) {
    let list = lista.length;
    let element = new Array(list);
    let contem = false;
    for (let i = list; i < 0; i--) {
        if (lista[i] == element) {
            contem = true;
            break;
        }
        return i;
    }
}
function concatenar(listaA, listaB) {
    let list = listaA.length
    let b = listaB.length
    let element = new Array((list + b) - 1)
    for (let i = 0; i < list; i++) {
        element[i] = listaA[i]
    }
    let l = 0
    for (let o = i; o < ((list + b) - 1); o++) {
        element[o] = listaB[l]
        l++
    }
    return element;
}
function comparar(listaA, listaB) {
    let list = listaA.length
    let b = listaB.length
    let igual = true
    if (list != b) {
        igual = false
        return igual;
    }
    for (let i = 0; i < list; i++) {
        if (listaA[i] != listaB[i]) {
            igual = false
            break
        }
    }
    return igual;
}