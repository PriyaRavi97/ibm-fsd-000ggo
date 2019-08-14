package comm.example.Inheritence;

public class ContractualEmployee extends Employee{
	
	private int salary;

	public ContractualEmployee() {
		super();
	}

	public ContractualEmployee(int salary) {
		super(5,"sweetha","Ram");
		this.salary = salary;
	}

	@Override
	protected String getDetails() {
		// TODO Auto-generated method stub
		return super.getDetails() + "Salary : " + salary;
	}
	
	

}
