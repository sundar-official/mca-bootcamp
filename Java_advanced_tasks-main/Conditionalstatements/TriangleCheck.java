import java.util.Scanner;

class TriangleCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
  System.out.println("ENTER VALUES :");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if (a + b > c && a + c > b && b + c > a)
            System.out.println("Triangle is possible");
        else
            System.out.println("Not possible");
    }
}
