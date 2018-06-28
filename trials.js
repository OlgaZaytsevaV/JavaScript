// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home','510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('businesss', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function accountInfo(name, number, businessName) {
    console.log(`Account Holder Name ${name}`);
    console.log(`Account Holder Number ${number}`);
    console.log(`Business Name ${businessName}`);
}



// Add function to print all addresses, including a header

function showAddress(address_lst) {
    console.log("Addresses");
    for (let address of address_lst) {
        console.log(address);
    }
}


// Add function to print phone types and numbers
function showPhoneNums(phoneMap) {
    console.log("Phone Numbers");
    for (let item of phoneMap){
        console.log(item[0]+" : "+item[1]);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:


// Create an empty map of transactions
const transactionMap = new Map();

// Add function to add transactions
function addTransaction(transMap, date, amount) {
    transMap.set(date, amount);
}

// Use the function to add transactions

addTransaction(transactionMap, "May-2", -500);
addTransaction(transactionMap, "May-13", +1200);
addTransaction(transactionMap, "May-15", -100);
addTransaction(transactionMap, "May-21", -359);
addTransaction(transactionMap, "May-29", +2200);



// Add function to show balance status
function showBalanceStatus(balanceMap, balance){

   

    for (let val of balanceMap.values()) {
        balance = balance+val;
    }
    if (balance < 0) {
        console.log('YOU ARE OVERDRAWN');
    } else if (balance < 20 && balance > 0) {
        console.log("Warning: You are close to zero balance");
    } else {
        console.log('Thank you for your business!');
    }
        return balance;
    }



// Add function to show transactions

function showTransactions(balanceMap, beginning) {

    console.log(`Starting balance: ${beginning}`);
    let balance = beginning;
    
    for (let item of balanceMap.entries()) {
        balance = balance + item[1]
        console.log(`Transaction date: ${item[0]}`);
        console.log(`Amount changed: ${item[1]}`);
       
        if (item[1] > 0) {    
            console.log("Transaction type: deposit");
        } else {
            console.log("Transaction type: withdrawal")
        } 
    }

        if (showBalanceStatus(balanceMap, beginning) < 0) {
            balance = balance - 25;}
       
            console.log(`Balance: ${balance}`);
        
}
    }


 

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




