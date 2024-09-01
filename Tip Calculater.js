let giveBillAmount = document.getElementById("billAmount");
let givePercentege = document.getElementById("percentageTip");
let giveAmount = document.getElementById("tipAmount");
let giveTotal = document.getElementById("totalAmount");
let errorMessageElememt = document.getElementById("errorMessage");
let errorMessage = "please enter a vaild Input";

function calculateTip() {
    let isValueBill = giveBillAmount.value;
    let isValuePrecentage = givePercentege.value;


    if (isValueBill === "") {
        errorMessageElememt.textContent = errorMessage;
    } else if (isValuePrecentage === "") {
        errorMessageElememt.textContent = errorMessage;
    } else {
        errorMessageElememt.textContent = "";
        let isBill = parseInt(isValueBill);
        let isIntegerPercentage = parseInt(isValuePrecentage);
        let totalbillAmount = (isIntegerPercentage / 100) * isBill;
        let totalPay = isBill + totalbillAmount;
        giveAmount.value = totalbillAmount;
        giveTotal.value = totalPay;


    }
}