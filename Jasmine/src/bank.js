var bankAccountHolder = require('./bankAccountclass.js');

class Bank{
	constructor(balance, interestRate, bankCharges, bankAccNum)
	{
		this.bankAcc = new bankAccountHolder(balance,interestRate,bankCharges);
		this.bankAccNum = bankAccNum;
	}

	withdraw(bankAccNum,amount)
	{
		bankAccNum.bankAcc.withdraw(amount);
	}
	deposit(bankAccNum,amount)
	{
		bankAccNum.bankAcc.deposit(amount);
	}
	transfer(fromBankAccNum,toBankAccNum,amount)
	{
		fromBankAccNum.bankAcc.withdraw(amount);
		toBankAccNum.bankAcc.deposit(amount);
	}
}

var n = new Bank(1000,12,50,55555);
var b = new Bank(2000,12,50,44444);
n.transfer(n.bankAccNum,b.bankAccNum,10);
console.log(b);
console.log(n);
