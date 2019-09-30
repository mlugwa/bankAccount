class BankAccount{
	constructor(savings, interestRate, bankCharges)
	{
		this.balance = savings;
		this.interestRate = interestRate;
		this.bankCharges = bankCharges;
	}
	finishMonth()
	{
		this.balance = ((((this.balance * (this.interestRate/100))/12) + this.balance) - this.bankCharges);
	}
	deposit(depositedAmount)
	{
		this.balance += depositedAmount;
	}
	withdraw(withdrawal)
	{
		this.balance -= withdrawal;
	}

}

// Testing if balance is altered at month end or everytime a withdrawal/deposit is made from/into the account.

var account = new BankAccount(1000, 12, 50);	//Balance should be 1000 at this point
console.log(account.balance);	// First check of balance. Is it 1000?
account.finishMonth();	// finishMonth should alter balance. Balance is to be 960 at this point.
console.log(account.balance);	// Second check of balance. Is it 960?
account.deposit(50);	// a deposit should alter balance increasing its value. Balance is to be 1010 at this point.
console.log(account.balance); // Third check of balance. Is it 1010?
account.withdraw(10);	// a withdrawal should alter balance reducing its value. Balance is to be 1000 at this point.
console.log(account.balance);	// Fourth check of balance. Is it back to 1000?
