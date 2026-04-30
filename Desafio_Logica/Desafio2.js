function contemElemento(lista, element) {
    let list = lista.length;
    let novalista = new Array(list);
    let tem = false;
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
    let novalista = new Array(list);
    let tem = false;
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
    let novalista = new Array(list);
    let tem = false;
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
    let novalista = new Array((list + b) - 1)
    for (let i = 0; i < list; i++) {
        novalista[i] = listaA[i]
    }
    let l = 0
    for (let o = i; o < ((list + b) - 1); o++) {
        novalista[o] = listaB[l]
        l++
    }
    return novalista;
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