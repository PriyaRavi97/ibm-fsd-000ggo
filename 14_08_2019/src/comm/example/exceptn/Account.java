//PriyaRavi97
package comm.example.exceptn;

import java.io.Serializable;

public class Account implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2822356425739679167L;
	private String accountNumber;
	private int amount;
	public Account() {
		super();
	}
	public Account(String accountNumber, int amount) {
		super();
		this.accountNumber = accountNumber;
		this.amount = amount;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
	
	
	
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}
	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}
	public Account createNewAccount(String accountNumber, int amount) throws AccountNotValidException {
		this.accountNumber = accountNumber;
		this.amount = amount;
		if(amount<10000)
		{
			throw new AccountNotValidException("Amount is lesser than 10,000");
		}
		
		return new Account(accountNumber,amount);
		
	}

}
