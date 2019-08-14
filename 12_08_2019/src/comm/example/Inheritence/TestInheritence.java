package comm.example.Inheritence;

import comm.example.Inheritence.Employee;

public class TestInheritence{

	public static void main(String[] args) {
		Employee p = new PermanentEmployee(15000);
		System.out.println(p.getDetails());
		
		Employee c = new ContractualEmployee(1000);
		System.out.println(c.getDetails());
	}
}
