namespace Mathematicaltables
{
    public class Tables
    {
        public static void Multiplication()
        {
            int i, j, num;
            Console.WriteLine("Enter a number");
            num=Convert.ToInt32(Console.ReadLine());
            for(i=1; i<num; i++)
            {
                for(j=1; j<=20; j++)
                {
                    Console.WriteLine("{0}*{1}={2}",i,j,(i*j));
                }
            }
        }

    }
}