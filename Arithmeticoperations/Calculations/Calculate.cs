namespace Calculations
{
    public class Calculate
    {
        public static void Addition()
        {
            int i, j;
            Console.WriteLine("Enter two numbers");
            i=Convert.ToInt32(Console.ReadLine());
            j=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("sum" +(i+j));
        }
        public static void Subtraction()
        {
            int a,b;
            a=Convert.ToInt32(Console.ReadLine());
            b=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("sub" +(a-b));
        }
        public static void Division()
        {
            int a, b;
            a = Convert.ToInt32(Console.ReadLine());
            b = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("div" + (a / b));
        }
        public static void ModuloDivision()
        {
            int a, b;
            a = Convert.ToInt32(Console.ReadLine());
            b = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("mod" + (a % b));
        }
    }
}