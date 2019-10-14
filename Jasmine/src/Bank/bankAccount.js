class BankAccount{
	constructor(balance,interestRate,bankCharge)
	{
		this.balance = balance;
		this.interestRate = interestRate;
		this.bankCharge = bankCharge;
	}

	finishMonth()
	{
		this.balance = ((((this.balance * (this.interestRate/100))/12) + this.balance) - this.bankCharges);
	}

	withdraw(amount)
	{
		this.balance -= amount;
	}

	deposit(amount)
	{
		this.balance += amount;
	}
}

module.exports = BankAccount;
