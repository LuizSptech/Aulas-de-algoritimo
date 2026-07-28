using UnityEngine;

public class Desafio04 : MonoBehaviour
{
     
     public int lado1 = 10;
     public int lado2 = 10;
     public int lado3 = 10;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        if( lado1 == lado2 && lado1 == lado3)
        {
            Debug.Log("Equilátero");
        };
        if ((lado1 == lado2 || lado1 == lado3 || lado2 == lado3) && (lado1 != lado2 || lado1 != lado3 || lado2 != lado3) )
        {
            Debug.Log("Isósceles");
        };
        if( lado1 != lado2 && lado1 != lado3)
        {
            Debug.Log("Escaleno");
        }
        
       
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}

/*
Crie um script que diga se um triangulo é equilátero, isósceles ou escaleno.


Equilátero: Possui todos os 3 lados de mesmo tamanho.

Isósceles: Possui 2 lados de tamanhos iguais e um diferente.

Escaleno: Todos os lados tem tamanhos diferentes.


Para começar, crie 3 variáveis do tipo int que vão receber os tamanhos dos lados dos triângulos.


Baseado nessas variáveis, ao rodar o script, você deve receber uma mensagem como essa no log: "Seu triângulo é isósceles".*/