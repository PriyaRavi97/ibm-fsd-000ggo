//PriyaRavi97

package comm.example.enm;

public enum Level {
	
	HIGH(3),
	MEDIUM(2),
	LOW(1);
	
	private final int levelCode;
	
	private Level(int levelCode)
	{
		this.levelCode = levelCode;
	}
	public int getLevelCode() {
		return levelCode;
	}
}
