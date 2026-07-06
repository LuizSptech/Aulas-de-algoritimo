const cartas = [
      { valor: 'A', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '2', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '3', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '4', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '5', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '6', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '7', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '8', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '9', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: '10', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: 'J', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: 'Q', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },
      { valor: 'K', naipe: 'copas', cor: 'vermelho', simbolo: '♥️' },

      { valor: 'A', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '2', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '3', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '4', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '5', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '6', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '7', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '8', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '9', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: '10', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: 'J', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: 'Q', naipe: 'espadas', cor: 'preto', simbolo: '♠️' },
      { valor: 'K', naipe: 'espadas', cor: 'preto', simbolo: '♠️' }
    ];

let embaralhadas = [{}]
let valores = [""]

for(let i = 0; i < cartas.length; i++){
    embaralhadas.push(cartas[i])
}
console.log(embaralhadas[20])