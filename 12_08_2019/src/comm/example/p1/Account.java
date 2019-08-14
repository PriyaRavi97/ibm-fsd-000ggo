package comm.example.p1;

public class Account {
	
	private static int count=100;
	
	public Account() {
		super();
		count++;
		System.out.println("No of Account : " + count);
	}

}
