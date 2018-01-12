const TAX_RATE = .1025
const PHONE_PRICE = 100.00
const ACCESSORY_PRICE = 9.99
const SPENDING_THRESHOLD = 99.00
// const SPENDING_THRESHOLD = prompt("what's your purchase limit?")

var bank_balance = 1200.32
var amount = 0

//calculate phone purchase amount
function calculatePriceWithTax(amount){
  amount = amount + (amount * TAX_RATE);
  return amount.toFixed(2);
}

//buy the phone aka take money from bank account
function buysies(amount){
  bank_balance = bank_balance - amount
  return bank_balance.toFixed(2);
}

//keep buying until bank balance is 0
//if threshold is higher than purchase amount buy the accessory
 while(bank_balance > amount){
  amount = calculatePriceWithTax(PHONE_PRICE);
  
  if (SPENDING_THRESHOLD > amount) {
    amount = calculatePriceWithTax(amount + ACCESSORY_PRICE)
  }
  
  console.log(`The total after tax is ${amount} your balance is ${bank_balance}`)
  
  buysies(amount);
  console.log(`your balance after purchase is ${bank_balance}`)
}
