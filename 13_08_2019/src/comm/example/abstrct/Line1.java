package comm.example.abstrct;

public class Line1 extends Model1{
	
	private int startPoint;
	private int endPoint;
	
	public Line1() {
	}
	
	public Line1(int startPoint, int endPoint) {
		this.startPoint = startPoint;
		this.endPoint = endPoint;
	}
		
		public int getStartPoint() {
			return startPoint;
		}

		public void setStartPoint(int startPoint) {
			this.startPoint = startPoint;
		}

		public int getEndPoint() {
			return endPoint;
		}

		public void setEndPoint(int endPoint) {
			this.endPoint = endPoint;
		}
		
		public int calculateLength() {
			return getEndPoint() - getStartPoint();
		}
		
	
	@Override
	public boolean isGreater(Object obj) {
		// TODO Auto-generated method stub
		Line1 l1 = (Line1)obj;
		return this.calculateLength() > l1.calculateLength();
	}

	@Override
	public boolean isLess(Object obj) {
		Line1 l2 = (Line1)obj;
		return this.calculateLength() < l2.calculateLength();
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		Line1 l1 = (Line1)obj;
		return super.equals(l1);
	}

	@Override
	public boolean isEqual(Object obj) {
		// TODO Auto-generated method stub
		Line1 l1= (Line1)obj;
		return this.equals(l1);
	}
	
	

}
