let lista = [10,20,30];

let entrada1 = Number(ipt_Valor.value)
let entrada2 = Number(ipt_indice.value)
let entrada3 = Number(ipt_quantidade.value)

function show(){
    saida.innerHTML = `${lista}`
}



function contemElemento(lista, element) {
    let list = lista.length;
    element = new Array(list);
    let contem = false;
    for (let i = 0; i < list; i++) {
        if (lista[i] == element) {
            contem = true;
            break;
        }
        return contem;
    }
}
function buscarPrimeiraPosicao(lista, element) {
    let list = lista.length;
    element = new Array(list);
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
    element = new Array(list);
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