var bankholder = class BankAccount{
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

module.exports = bankholder;
