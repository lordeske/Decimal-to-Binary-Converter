const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");


const decimalToBinary = (input) => {

   if (input === 0 || input ===1)   /// base case
   {
    return String(input);
   }
   
   else   /// rec
   {
    
    return decimalToBinary(Math.floor(input / 2))+(input % 2) ;
   }


}


const checkUserInput = () => {

    

    if (!numberInput.value || isNaN(parseInt(numberInput.value))) // if value empty TURE, if value not number ture
    {
       
        alert("Please provide a decimal number");
        return; /// break function

    }

    result.textContent = decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";





}


convertBtn.addEventListener("click" , checkUserInput);

numberInput.addEventListener("keydown" , (e) => {

   if (e.key == "Enter")
   {

    checkUserInput();

   }


})