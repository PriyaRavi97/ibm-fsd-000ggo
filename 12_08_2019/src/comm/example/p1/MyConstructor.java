package comm.example.p1;

public class MyConstructor {
	
	private int x;
	private int y;
	private int z;
	
	//chaining constructors
	
	public MyConstructor() {
		this(10);
	}
	
	public MyConstructor(int x) {
		this(x,20);
	}
	
	public MyConstructor(int x, int y) {
		this(x,y,30);
	}
	
	
	/*public MyDate(int x) {
		this.x = x;
	}
	
	public MyDate(int x, int y) {
		this.x = x;
		this.y = y;
	}*/
	
	public MyConstructor(int x, int y, int z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public String getXYZ() {
		return "X= " + x +" Y= " + y + " Z= "+z;
	}

}
