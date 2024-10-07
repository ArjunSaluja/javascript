class Bankaccount{
    balance=0;
    deposit(amount){
        this.balance+=amount;
        console.log(`deposited ${amount},new balance is ${this.balance}`);
    }

withdraw(amount){
    if(amount>this.balance){
        console.log(`insuficient funds`);
    }
    else{
        this.balance-=amount;
        console.log(`withdraw ${amount}, new balance is ${this.balance}`)}
    }
   
}
const account =new Bankaccount();
account.deposit(100);
console.log(account.balance);