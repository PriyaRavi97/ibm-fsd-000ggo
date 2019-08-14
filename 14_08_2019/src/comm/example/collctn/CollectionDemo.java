//PriyaRavi97

package comm.example.collctn;

import java.util.HashSet;
import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.Iterator;
import java.util.Set;

public class CollectionDemo {
	
	static Scanner sc = new Scanner(System.in);

	private String str[];
	private Set<String> set; // generic
	
	public CollectionDemo() throws InputMismatchException
	{
		System.out.println("Number of Elements in the Array : ");
		str = new String[sc.nextInt()];
		for(int i=0 ; i<str.length ; i++) 
		{
			System.out.println("Name : ");
			str[i]=sc.next().toString().toUpperCase(); // converts the string to upper case string
		}
		set = new HashSet<String>();
		for(String s:str) 
		{
			if(!set.add(s))
			{
				System.out.println("Duplicate element found not added in set");
			}
		}
		
	}
	
	public void displayCollection()
	{
		
		/*for(String ss:set)
		{
			System.out.println(ss.toString());
		}*/
		
		
		Iterator<String> i = set.iterator();
		while(i.hasNext()) {
			System.out.println(i.next().toString());
		}
	}
	
	
	
	
}
