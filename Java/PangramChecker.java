public class PangramChecker {

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input.toLowerCase());

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String s) {

        boolean[] alphabetPresent = new boolean[26];

        for (int i = 0; i < s.length(); i++) {
            char currentChar = s.charAt(i);


            if ('a' <= currentChar && currentChar <= 'z') {

                alphabetPresent[currentChar - 'a'] = true;
            }
        }

                for (boolean isPresent : alphabetPresent) {
            if (!isPresent) {
                return false; 
            }
        }

        return true;
    }
}