using UnityEngine;

public class Desafio6 : MonoBehaviour
{

    public int numerox = 10;
    public int numeroy = 10;
    public int numeroz = 10;
    
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        Debug.Log(MaiorQueMil(numerox, numeroy, numeroz));
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    bool MaiorQueMil(int x, int y, int z)
    {
        int soma = (x + y) * z;
        if(soma >= 1000)
        {
            return true; 
        }
        return false;
        
    }
}

/*Escreva uma função chamada MaiorQueMil(), ​com output do tipo bool, e que receba 3 ints x, y e z como parâmetros. A segunda int deve ser somada à primeira, e a terceira deve multiplicar o total da soma anterior:

total = (X + Y) * Z

 Se o valor total desse calculo for maior do que 1000, a função retorna true; caso contrário, retorna false.


Coloque a função para ser chamada a partir de Start() com um Debug.Log(). Quando o jogo começar, você deve ver no log True ou False.*/