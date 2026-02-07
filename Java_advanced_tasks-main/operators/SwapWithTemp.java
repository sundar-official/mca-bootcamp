import java.util.Scanner;

class SwapWithTemp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
 System.out.println("ENTER A NUMBERS :");
        int a = sc.nextInt();
        int b = sc.nextInt();

        int temp = a;
        a = b;
        b = temp;

        System.out.println("a = " + a + ", b = " + b);
    }
}
