describe("Bank Account",function(){
	let account = new BankAccount(1000,12,50);
	account.finishMonth();
	it("should alter the bank balance at the end of the month",function(){
	let account = new BankAccount(1000,12,50);
	account.finishMonth();
	expect(account.balance).toEqual(960);
	});
	it("should alter balance when a deposit is made by adding to it",function(){
	let account = new BankAccount(1000,12,50);
	account.deposit(40);
	expect(account.balance).toEqual(1040);
	});
	it("should alter balance when a withdrawal is made by subtracting from it",function(){
	let account = new BankAccount(1000,12,50);
	account.withdraw(160);
	expect(account.balance).toEqual(840);
	});
});
