/*Muita linha pra fazer pouca coisa*/

import java.util.Scanner;

public class entrada {
    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu nome: ");
        String nome = scanner.nextLine();

        System.out.print("Digite sua idade: ");
        int idade = scanner.nextInt();




        System.out.printf("Seu nome %s e sua idade e %d", nome, idade);

        scanner.close();


        

        
    }
}