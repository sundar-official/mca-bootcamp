import java.util.Scanner;

class DateValidation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
System.out.println("ENTER A DATE :");
        String date = sc.next();
        String[] parts = date.split("/");

        int d = Integer.parseInt(parts[0]);
        int m = Integer.parseInt(parts[1]);
        int y = Integer.parseInt(parts[2]);

        boolean leap = (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);
        boolean valid = true;

        if (m < 1 || m > 12)
            valid = false;
        else if (d < 1)
            valid = false;
        else if (m == 2) {
            if (leap && d > 29) valid = false;
            if (!leap && d > 28) valid = false;
        }
        else if (m == 4 || m == 6 || m == 9 || m == 11) {
            if (d > 30) valid = false;
        }
        else {
            if (d > 31) valid = false;
        }

        if (valid)
            System.out.println("Valid Date");
        else
            System.out.println("Invalid Date");
    }
}
