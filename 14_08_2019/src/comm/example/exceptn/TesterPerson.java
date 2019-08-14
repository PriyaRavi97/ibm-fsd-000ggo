//PriyaRavi97
package comm.example.exceptn;

import java.util.Scanner;

public class TesterPerson {

	private static Scanner sc = new Scanner(System.in);
//	private static Exception e;
	
	public static void main(String[] args) throws Exception, NameIsNotValidException{
		// TODO Auto-generated method stub
		
		String firstName;
		String lastName;
		Person person[] = new Person[3];
		
//			person.createNewPerson("Shanmuga", "Priya");
//			System.out.println("Name is valid : " + person.getFirstName() + " " + person.getLastName());
//			person.createNewPerson("Priya", "ravi");
		try {
			for(int i=1 ; i <= 2 ; i++) 
			{
				System.out.println(i);
				System.out.println("FirstName : ");
				firstName = sc.next();
				System.out.println("LastName : ");
				lastName = sc.next();
				person[i]=new Person(firstName, lastName);
				if(i>1) {
					try {
						if(person[i-1].equals(person[i])) {
							System.err.println("Exception");
							throw new Exception();
						}
							person[i].createNewPerson(firstName, lastName);
							System.out.println("New Object Created");
					}
					catch(Exception e) {
						System.err.println("Objects are equal");
					}
				}
			}
		}
		catch(NameIsNotValidException ninve) {
			System.out.println("Name not valid");
			//person[i].createNewPerson(firstName, lastName);
			//.createNewPerson(firstName, lastName);
		}

	}

}
