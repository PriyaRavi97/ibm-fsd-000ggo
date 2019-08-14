//PriyaRavi97

package comm.example.enm;

public class TennisCoach implements Coach{
	
	private String name;
	private Level level;
	
	public TennisCoach() {
		super();
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Level getLevel() {
		return level;
	}

	public void setLevel(Level level) {
		this.level = level;
	}

	@Override
	public String getDailyWorkout() {
		// TODO Auto-generated method stub
		return "Practice Tennis today";
	}
	
	public void createCoach(String name , Level level) {
		this.name = name;
		this.level = level;
	}
	
	public String getCoachDetails() {
		StringBuilder sb = new StringBuilder();
		sb.append("Todays workout plan\n" + getDailyWorkout()+"\n");
		sb.append("Name of the Coach:"+getName()+"\n");
		sb.append("level of the coach is : "+level +"\n");
		sb.append("coach's level rank is : "+ level.getLevelCode()+"\n");
		return sb.toString();
	}	

}
