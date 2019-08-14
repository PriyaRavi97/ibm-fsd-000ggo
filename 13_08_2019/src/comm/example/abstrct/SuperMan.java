package comm.example.abstrct;

public class SuperMan extends Flyer{

	@Override
	public void takeOff() {
		// TODO Auto-generated method stub
		System.out.println("SuperMan Takeoff");
		
	}

	@Override
	public void fly() {
		// TODO Auto-generated method stub
		System.out.println("SuperMan Fly");
	}

	@Override
	public void land() {
		// TODO Auto-generated method stub
		System.out.println("SuperMan Land");
	}	
}
