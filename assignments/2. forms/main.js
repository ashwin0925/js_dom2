const input1 = document.querySelector('.firstBox');
const input2 = document.querySelector('.secondBox');
const input3 = document.querySelector('.thirdBox');
const submit = document.querySelector('.btn')

//results

const result = document.querySelector('.result')
const result2 = document.querySelector('.result2')
const result3 = document.querySelector('.result3')
const success = document.querySelector('.success');
success.style.display = "none";

//display 

const display = document.querySelector('.display');

function submitfun(event){
  if(input1.value == ''){
    result.textContent  = "field can't be empty!!";
  } else if(input2.value == ''){
    result2.textContent = "field can't be empty!!"
  } else if(input3.value == ''){
    result3.textContent = "field can't be empty!!"
  } else{
    display.style.display = 'none';
    success.style.display = "block";
    success.textContent = `Registration succesful!! welcome ${input1.value} your email is ${input2.value } and your password is ${input3.value} `
  }
}
submit.addEventListener('click',submitfun)
