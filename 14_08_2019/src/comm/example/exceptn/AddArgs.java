//PriyaRavi97

package comm.example.exceptn;

public class AddArgs {
	
	public static void main(String args[]) {
		int sum = 0;
		
		for(String a : args) {
			try 
			{
				//Array Index out of bound Exception
				//System.out.println(args[10]);
				
				sum += Integer.parseInt(a);
				
				try {
					
				}
				catch(Exception e) {
					
				}
				finally {
					
				}
			}
			catch(NumberFormatException nfe) 
			{
				System.err.println(nfe.toString());
				System.err.println("Number Format Exception Occured");
			//	nfe.printStackTrace();
			//	System.err.println(nfe.getCause().toString());
			//	System.err.println(nfe.getMessage());
				System.exit(0);
			}
			catch(ArrayIndexOutOfBoundsException arobe){
				System.err.println("Array Index out of Bound");
			}
			catch(Exception e) {
				System.err.println("exception occured");
			}
			finally {
				System.out.println("In finally block");
			}
		}
		System.out.println("sum : "+sum);
	}
}
