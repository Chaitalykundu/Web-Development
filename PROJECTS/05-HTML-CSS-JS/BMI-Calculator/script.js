function calculateBMI(){
    let resWeight = document.getElementById('weight').value;
 	let resHeight = document.getElementById('height').value;  
    
    resHeight = resHeight / 100;
    
    let bmi = resWeight / (resHeight * resHeight);
    let res = document.getElementById('result');
    
    bmi = bmi.toFixed(2); 
    res.textContent = bmi;
    
}