package comm.example.date;

import comm.example.date.Account;

public class TestAccount {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Account acc1 = new Account("priya",5000);
		acc1.setName("priya");
		acc1.setAmount(5000);
		
		Account acc2 = new Account("priya",5000);
		acc2.setName("priya1");
		acc2.setAmount(4000);
		
		if(acc1.equals(acc2)) {
			System.out.println("Both Object holds same value");
		System.out.println("Name : " + acc1.getName() + " Balance" + acc1.getAmount());
		}
		else {
			System.out.println("Both Objects are different");
			System.out.println("Name : " + acc1.getName() + " Balance" + acc1.getAmount());
			System.out.println("Name : " + acc2.getName() + " Balance" + acc2.getAmount());
		}
	}

}
