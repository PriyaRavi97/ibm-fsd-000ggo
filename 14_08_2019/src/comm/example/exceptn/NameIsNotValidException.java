//PriyaRavi97

package comm.example.exceptn;

public class NameIsNotValidException extends Throwable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3608976262774890186L;
	private String message;

	public NameIsNotValidException() {
		super();
	}

	public NameIsNotValidException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
