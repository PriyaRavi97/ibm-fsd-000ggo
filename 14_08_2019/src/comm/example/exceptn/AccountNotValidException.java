//PriyaRavi97
package comm.example.exceptn;

public class AccountNotValidException extends Throwable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3991044553540599283L;
	private String message;

	public AccountNotValidException() {
		super();
	}

	public AccountNotValidException(String message) {
		super();
		this.setMessage(message);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
