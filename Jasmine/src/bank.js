var BankAccount = require('./bankAccount.js');

class Bank{
	constructor()
	{
		this.accounts = [];
		//This is a Bank constructor, a bank simply needs to handle bankAccounts.
		//The array declared above handles multiple accounts pushed to it by an accountManager() method.
	}

	accountManager(balance,interestRate,bankFee,accNumber)
	{
		this.bankAccount = new BankAccount(balance,interestRate,bankFee);
		this.accNumber = accNumber;
		this.accounts.push({accountNumber:this.accNumber,bankAccount: this.bankAccount});
	}


	withdraw(bankAccountNumber,amount)
	{
		var i = 0;

		while (i < this.accounts.length)
		{
			if (bankAccountNumber === this.accounts[i].accountNumber)
				this.accounts[i].bankAccount.withdraw(amount);
			/*else if(bankAccountNumber != this.accounts[i].accountNumber)
			{
			throw new Error("Sorry you have entered the wrong bank account number. Please try again.");
			}*/
			i++;
		}
	}

	deposit(bankAccountNumber,amount)
	{
		var i = 0;

		while (i < this.accounts.length)
		{
			if (bankAccountNumber === this.accounts[i].accountNumber)
				this.accounts[i].bankAccount.deposit(amount);
			/*else if (bankAccountNumber != this.accounts[i].accountNumber)
			{
			throw new Error("Sorry you have enetered the wrong bank account number. Please try again.");
			}*/
			i++;
		}
	}

	transfer(fromBankAccNum,toBankAccNum,amount)
	{
		this.withdraw(fromBankAccNum,amount);
		this.deposit(toBankAccNum,amount);
	}

}

var acc = new Bank();
acc.accountManager(5000,12,50,654321);
acc.accountManager(10000,12,50,123456);
acc.transfer(123456,654321,500);

console.log(acc.accounts[0].bankAccount.balance);
console.log(acc.accounts[1].bankAccount.balance);



