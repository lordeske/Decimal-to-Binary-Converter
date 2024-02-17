const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");


const decimalToBinary = (input) => {

   const inputs = [];
   const quotients = [];  
   const remainders = [];

   
   while (input > 0)
   {
    const quotient = Math.floor(input / 2);
    const remainder  = input % 2 ;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    input = quotient;
       
   }


   console.log("Inputs: ", inputs ); 
   console.log("Quotients : ", quotients ); 
   console.log("Remainders: ", remainders ); 

   result.innerText = remainders.reverse().join('');
   


}


const checkUserInput = () => {

    

    if (!numberInput.value || isNaN(parseInt(numberInput.value))) // if value empty TURE, if value not number ture
    {
       
        alert("Please provide a decimal number");
        return; /// break function

    }

    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";





}


convertBtn.addEventListener("click" , checkUserInput);

numberInput.addEventListener("keydown" , (e) => {

   if (e.key == "Enter")
   {

    checkUserInput();

   }


})