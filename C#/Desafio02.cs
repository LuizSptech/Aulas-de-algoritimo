
public class IFELSE : MonoBehaviour
{
    public int numero1 = 4;
    public int numero2 = 6;
    public int numero3 = 8;
    int numeroBig = 10;

    string texto = "O maior numero é: ";
    
    
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        if ( numero1 >= numeroBig)
        {
            Debug.Log(texto + numero1);
        } if ( numero2 >= numeroBig)
        {
            Debug.Log(texto + numero2);
        } if (numero3 >= numeroBig)
        {
            Debug.Log(texto + numero3);
        }else
        {
            Debug.Log("nenhum numero e maior que " + numeroBig);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}