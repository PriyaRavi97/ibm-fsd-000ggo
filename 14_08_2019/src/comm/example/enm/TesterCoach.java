//PriyaRavi97

package comm.example.enm;

import static java.lang.System.in;
import static java.lang.System.out;
import static java.lang.System.err;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TesterCoach {

	private static Scanner sc = new Scanner(in); // not to add as System.in
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String name = null; 
		
		try {
			out.println("coach  name : ");
			name = sc.next();
			TennisCoach myCoach = new TennisCoach();
			myCoach.createCoach(name, Level.HIGH);
			out.println(myCoach.getCoachDetails().toString());
			
		}
		catch(InputMismatchException e) {
			e.printStackTrace();
			err.println(e.toString());
		}
		
	}

}
