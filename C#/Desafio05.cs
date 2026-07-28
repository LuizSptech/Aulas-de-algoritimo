using UnityEngine;

public class Desafio05 : MonoBehaviour
{

    public string nome_PAR = "caio";
    public int x = 2;
    public string nome_IMPAR = "breno";
    public int y = 5;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        int conta = x + y;
        Debug.Log("Soma total é " + conta);
        if( conta % 2 == 0)
        {
            Debug.Log("numero par " + nome_PAR + " e o ganhador");
        }else {Debug.Log("numero impar " + nome_IMPAR + " e o ganhador");
        }
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}

/*

X é um número par, portanto Jogador_1 venceu!

​​Onde X é a soma dos dois números escolhidos pelos jogadores, e Jogador_1 é o nome do jogador vencedor.


Para o nome dos jogadores, crie duas string: 

public string jogador_1;

public string jogador_2;


Para os valores escolhidos por cada jogador, crie duas int:

public int mao_jogador_1;

public int mao_jogador_2


Para saber se o jogador 1 escolheu par e o jogador 2 escolheu impar, ou vice-versa, existem pelo menos uns três jeitos de fazer isso. Pode ser usando um par de strings, uma única bool, você decide; fica aí como desafio criar esse sistema. Lembre-se apenas de fazer esse sistema ser acessível do inspector, ou seja, ter variáveis public.


!ATENÇÃO! - Operador Módulo

Existe um operador matemático muito usado para saber se um número é par ou impar. Na minha experiência, esse é o único caso que eu uso esse operador, mas vale a pena ter conhecimento da existência dele:

% é o operador módulo, e usar ele dá como resultado o resto da divisão entre dois números.

Exemplo 1: 10 % 3 →​ 1, porque o número 3 cabe 3 vezes (3 * 3 = 9) em 10 com resto é 1 (10 - 9 = 1).

Exemplo 2: 27 % 4 → 3, porque 4 cabe 6 vezes (4 * 6 = 24) em 27 com resto 3 (27 - 24 = 3).

Usando essa lógica, é possível saber se x % 2 tem resto igual a 0 (par) ou igual a 1 (impar).*/