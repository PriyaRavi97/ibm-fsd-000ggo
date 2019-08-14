//PriyaRavi97
package comm.example.exceptn;

import java.io.Serializable;

public class Person implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2275686198846217690L;
	private String firstName;
	private String lastName;
	
	public Person() {
		super();
	}
	
	public Person(String firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		Person obj1 = (Person)obj;
		if((this.firstName.contentEquals(obj1.firstName)) && (this.lastName.contentEquals(obj1.lastName))) {
			System.out.println("true");
			return true;
		}
		else {
			return false;
		}
	}
	
	
	public Person createNewPerson(String firstName, String lastName ) throws NameIsNotValidException{
		this.firstName = firstName;
		this.lastName = lastName;
		
		char ch1 = firstName.charAt(0);
		char ch2 = lastName.charAt(0);
		
		if((!Character.isUpperCase(ch1))  || (!Character.isUpperCase(ch2))) {
			throw new NameIsNotValidException("Name is Not valid");
		}
		return new Person(firstName,lastName);
	}

		

}
