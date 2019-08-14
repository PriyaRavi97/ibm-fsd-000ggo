package comm.example.Inheritence;

import comm.example.Inheritence.*;
public class Employee extends TestInheritence {
	
	private int empID;
	private String empFirstName;
	private String empLastName;
	
	public Employee() {
		super();
	}

	public Employee(int empID, String empFirstName, String empLastName) {
		this.empID = empID;
		this.empFirstName = empFirstName;
		this.empLastName = empLastName;
	}
	
	protected String getDetails() {
		return "EmpID : " + empID + " ; Employee FirstName : " + empFirstName + " ; Employee LastName : " + empLastName ; 
	}

}
