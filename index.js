class Book{
    title;
    author;
    isbn;
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    checkOut(){
        console.log(this.title ,"checkout is done" );
    }
    returnBook(){
        console.log(this.title, "Book is returned");
    }
    updateTitle(newTitle){
        this.title=newTitle;
    }
}
var book1 =new Book('Geetanjali','R.Tagore', '200');
book1.checkOut();
book1.returnBook();
book1.updateTitle('Geetanjali');
console.log(book1);

//  QUESTION 2
class Ecommerce{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(amount){
        this.price=amount*0.1;
    }
    getPriceAfterDiscount(){
        console.log(this.price,'price is set after discount');
    }
}
var Clickart = new Ecommerce('clickart','1000','costomer-to-customer');
Clickart.applyDiscount(1000);
Clickart.getPriceAfterDiscount();
console.log(Clickart);

// QUESTION 3
class BankAccount{
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName,accountNumber,balance){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(ammount){
        this.balace=this.balance + ammount;
        console.log('deposit is done');
    }
    withdraw(ammount){
        console.log(this.accountNumber,'withdraw is done');
    }
    getBalance(){
        console.log("Available balance is",this.balance);
    }
}
var sbi = new BankAccount('Anuradha','11221134','100000');
sbi.deposit(500);
sbi.withdraw(500);
sbi.getBalance();
console.log(sbi);

// QUESTION 4
class Vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
    }
    drive(miles){
        console.log('car mileage is',this.mileage);
        this.mileage=miles+this.mileage;
    }
    getMileage(){
        console.log('The mileage of',this.licensePlate,'is','100');
    }
}
var car = new Vehicle ('super fast','APDB7036' ,'100');
car.drive(50);
car.getMileage();
console.log(car);

// QUESTION 5
class Bsection{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
        this.grade=newGrade;
    }
    getGrade(){
        console.log(this.name,'current garde is', this.grade);
    }
}
var Student = new Bsection('anuradha','A');
Student.setGrade('b');
Student.getGrade();
console.log(Student);
