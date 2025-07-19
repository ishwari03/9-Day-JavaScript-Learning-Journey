function getInputValues(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    return [num1,num2];
}

function add() {
    const [num1,num2]= getInputValues();
    const sum = num1 + num2;
    document.getElementById("result").textContent = "Result: " + sum;
}
// Step 4: Attach the function to the Add button
document.getElementById("addBtn").addEventListener("click",add);

function sub(){
    const [num1,num2]= getInputValues();
    const diff = num1 -num2;
    document.getElementById("result").textContent = "Result: " + diff;
}
document.getElementById("subBtn").addEventListener("click",sub);

function mult(){
    const [num1,num2]= getInputValues();
     const mul = num1 * num2;
    document.getElementById("result").textContent = "Result: " + mul;
}
document.getElementById("multBtn").addEventListener("click",mult);

function div(){
    const [num1,num2]= getInputValues();
    if(num2 === 0){
        document.getElementById("result").textContent = "Error: Cannot divide by 0";
    }else{
    const division = num1 / num2;
    document.getElementById("result").textContent = "Result: " + division;
    }
}
document.getElementById("divBtn").addEventListener("click",div);