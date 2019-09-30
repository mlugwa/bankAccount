class BankAccount{
	constructor(savings)
	{
		this.balance = savings;
		this.interestRate = 0.12;
		this.bankCharges = 50;
	}
	finishMonth()
	{
		this.balance = ((((this.balance * this.interestRate)/12) + this.balance) - this.bankCharges);
		return (this.balance);
	}
	deposit(depositedAmount)
	{
		this.balance = this.balance + depositedAmount;
		return (this.balance);
	}
	withdraw(withdrawal)
	{
		return (this.balance -= withdrawal);
	}

}

var account = new BankAccount(1000);
console.log(account.finishMonth());
console.log(account.deposit(40));
console.log(account.deposit(40));
console.log(account.balance);	// Should update everytime a withdrawal or deposit is made
console.log(account.withdraw(20));
