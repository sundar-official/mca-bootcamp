import java.util.Scanner;

class OddEvenUpToN {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENTER A NUMBER :");
        int n = sc.nextInt();

        System.out.print("Odd: ");
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0)
                System.out.print(i + " ");
        }

        System.out.print(", Even: ");
        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0)
                System.out.print(i + " ");
        }
    }
}
