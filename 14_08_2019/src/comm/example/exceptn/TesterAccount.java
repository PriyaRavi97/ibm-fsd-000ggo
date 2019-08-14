//PriyaRavi97
package comm.example.exceptn;

import java.util.Scanner;

public class TesterAccount {

	private static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String accountNumber = null;
		int amount=0;
		Account account = new Account();
		try {
			System.out.println("Account Number : ");
			accountNumber = sc.next();
			System.out.println("Amount : ");
			amount = sc.nextInt();
			
			account.createNewAccount(accountNumber, amount);
		//	account.createNewAccount("SB1029", 15000);
		}
		catch(AccountNotValidException e) {
			System.err.println(e.getMessage());
		}
		catch(NumberFormatException nfe) {
			System.err.println("amount must be numeric");
		}
	}

}
