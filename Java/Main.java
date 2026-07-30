public class Main {
    public static void main(String[] args){

        

        System.out.println("Hello, Word!");


        /*VARIAVEIS*/

        int idade = 20;
        String nome = "Luiz";
        double altura = 1.7564; 
        boolean ligado = true;
        boolean desligado = false;
        char inicial = 'L';

        byte idade_byte = 20;
        short idade_short = 20000;
        long idade_long = 20000000;


        System.out.println(nome);
        System.out.println(idade);
        System.out.println(altura);
        System.out.println(ligado);
        System.out.println(desligado);
        System.out.println(inicial);
        System.out.println(idade_byte);
        System.out.println(idade_short);
        System.out.println(idade_long);
        
        idade = 21;

        System.out.println(idade);


        System.out.printf("Meu nome é %s e tenho %d anos.%n", nome, idade);


        /*ESPECIFICADORES*
        
        %d - int
        %f - double
        %s - String
        %c - char
        %b - boolean

        */

       System.out.printf("%.2f%n", altura);
    }
}