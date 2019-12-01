

// Increment
(function() {
var count = 1;
const increment = document.querySelector(".inc");

function incCB(event){

    const counter = document.querySelector(".counter");
    counter.innerText = count++;
}

increment.addEventListener("click",incCB);

// Decrement

const decrement = document.querySelector('.dec');

function decCB(event){
    const counter = document.querySelector('.counter');
    counter.innerText = count--;
}

decrement.addEventListener('click',decCB);

// Reset

const reset = document.querySelector('.res');

function resCB(event){
    const counter = document.querySelector(".counter")
    counter.innerText = count = 0;
}

reset.addEventListener('click',resCB);
})();