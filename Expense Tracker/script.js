
//Sumbit operation
const submit = document.getElementById("submit");
const lst = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
var tot;
var amount;
var bal
var withTot
const numUSD = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency: 'USD',
});


//keep track of history will go here later
//ADD TOTAL
const addOp = function(e) {
    e.preventDefault();
    amount = parseFloat(document.getElementById("amount").value);
    bal = parseFloat(document.getElementById("balance").innerHTML.replace("$", ''));
    tot = bal+amount;      
      
};
//MANIPULATE WITHDRAWAL
const withdraw = function(e){
    e.preventDefault();


}
//UPDATE VALUES ON HTMTL
const updateVals = function(e){
    e.preventDefault();
    document.getElementById("balance").innerHTML = numUSD.format(bal);
    document.getElementById("withdraw").innerHTML = numUSD.format(withTot);
}
//INITAL
const Init = function(e){
    e.preventDefault();
    addOp(e);
    if (amount > 0){
        withTot = parseFloat(document.getElementById("withdraw").value);
        withTot += amount;
        
    }
}
    //alert("Sumbit clicked")
submit.addEventListener("click", Init);
