function batalhar(){
    
    
    let batalhas = Number(ipt_batalhas.value);
    let marinheiros = Number(ipt_Marinheiros.value);
    let carnes = Number(ipt_Carne.value);

    let derrotados = 0;
    let energia = 100;

    for (let i = 0; i < batalhas; i++) {
        energia -= 10;

        for (let j = 0; j < marinheiros; j++) {

            if (energia < 5 && carnes > 0) {
                carnes--;
                energia += 100;
            }

            if (energia >= 5) {
                energia -= 5;
                derrotados++;
            }
        }
    }

    let totalInimigos = batalhas * marinheiros;
    let resultado = (derrotados == totalInimigos) 
        ? "Luffy saiu vitorioso!" 
        : "Luffy saiu derrotado!";

    div_mensagem.innerHTML = `
        Resultado: ${resultado} <br>
        Carnes restantes: ${carnes} <br>
        Marinheiros derrotados: ${derrotados} <br>
        Energia final: ${energia}
    `;
}