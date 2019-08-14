package comm.example.abstrct;

public class Line extends Model{
	
	private int startPoint;
	private int endPoint;
	
	public Line() {
		super();
	}
	
	public Line(int startPoint, int endPoint) {
		super();
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
	public boolean isGreater(Object obj1, Object obj2) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isLess(Object obj1, Object obj2) {
		Line l1 = (Line)obj1;
		Line l2 = (Line)obj2;
		
		return l1.calculateLength() > l2.calculateLength();
	}

	@Override
	public boolean isEqual(Object obj1, Object obj2) {
		// TODO Auto-generated method stub
		return false;
	}
	
	

}
