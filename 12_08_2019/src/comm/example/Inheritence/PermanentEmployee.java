package comm.example.Inheritence;

public class PermanentEmployee extends Employee{
	
	private int ratePerHour;

	public PermanentEmployee() {
		super();
	}

	public PermanentEmployee(int ratePerHour) {
		super(1,"Priya","Ravi");
		this.ratePerHour = ratePerHour;
	}

	@Override
	protected String getDetails() {
		// TODO Auto-generated method stub
		return super.getDetails() + "Rate Per Hour : " + ratePerHour;
	}

}
