package comm.example.abstrct;

public class TesterAbstract {

	public static void main(String args[]) {
//		Flyer flyer = new Bird();
//		flyer.takeOff();
//		flyer = new SuperMan();
//		flyer.takeOff();
		
		/*Using Model , Line 
	   * Model model1 = new Line(0,20);
		*Model model2 = new Line(0,10);
		*System.out.println("model1 is Greater than Model2 : " + model1.isGreater(model1,model2));
		*System.out.println("model1 is lesser than model2 : " + model1.isLess(model1, model2));
		*System.out.println("model1 is equal to model2 : " + model1.isEqual(model1, model2));
		*/
		
		//Using this method - Model1 , Line1
		
		Model1 model1 = new Line1(0,20);
		Model1 model2 = new Line1(0,10);
		System.out.println("model1 > Model2 : " + model1.isGreater(model2));
		System.out.println("model1 < model2 : " + model1.isLess(model2));
		System.out.println("model1 = model2 : " + model1.isEqual(model2));
	}
}
