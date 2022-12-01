/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const converBtn=document.getElementById("conver-btn");
const inputValue=document.getElementById("input-el")
const lengthEl=document.getElementById("length-el");

const volumeEl=document.getElementById("volume-el");

const massEl=document.getElementById("mass-el");
// 
lengthEl.textContent="";
volumeEl.textContent="";
massEl.textContent="";


converBtn.addEventListener("click",()=>{
    const value=parseInt(inputValue.value);
    console.log(value)
    if(value){
        render(value)
    }
})



function convertion(value,rateOfConvert){
    const valueMultiply = value * rateOfConvert;
    const valueDivide = value / rateOfConvert;
    
    return {value:valueMultiply,value2:valueDivide}
    
}



function render(input){
    const meterFeet=convertion(input,3.281);
    console.log(meterFeet)
    // operation length
    lengthEl.textContent=`${input} meters = ${meterFeet.value.toFixed(2)} feet | ${input} feet = ${meterFeet.value2.toFixed(2)} meters`
    // operation volume
    const volume=convertion(input,0.264);
    volumeEl.textContent=`${input} liters = ${volume.value.toFixed(2)} gallons | ${input} gallons = ${volume.value2.toFixed(2)} liters`
    
    // operation mass
    const mass=convertion(input,2.204);
    massEl.textContent=`${input} kilos = ${mass.value.toFixed(2)} pounds | ${input} pounds = ${mass.value2.toFixed(2)} kilos`
}
