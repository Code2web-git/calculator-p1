
let dbtn = document.querySelector("#dbtn");
let lbtn = document.getElementById("lbtn");
let calBody = document.querySelector(".calculator-body");
let display = document.querySelector("#display");
let btns = document.querySelectorAll(".buttons button");

// ডার্ক মোড
dbtn.addEventListener('click', () => {
    calBody.style.backgroundColor = "var(--bg-color)";
    calBody.style.border = "none";
    
    display.style.backgroundColor = "black";
    display.style.border = "1px solid white";
    display.style.color = "white";

    btns.forEach(btn => {
        btn.style.backgroundColor = "var(--text-color)";
        btn.style.color = "var(--bg-color)";
    });
});

// লাইট মোড
lbtn.addEventListener('click', () => {
    calBody.style.backgroundColor = "var(--text-color)";
    calBody.style.border = "3px solid black";

    display.style.backgroundColor = "white";
    display.style.border = "1px solid black";
    display.style.color = "black";

    btns.forEach(btn => {
        btn.style.backgroundColor = "var(--bg-color)";
        btn.style.color = "var(--text-color)";
    });
});
btns.forEach(btn =>{
  btn.addEventListener('click' , (e)=>{
    let button = e.currentTarget;
    let x = button.textContent.trim();
    if(x ==='C'){
        display.value ='0';
        return;
    }
    if(button.querySelector('.fa-divide')){
        display.value += '/'
    }
    else if(button.querySelector('.fa-x')){
        display.value += '*'
    }
    else if(x === "="){
        display.value = (eval(display.value)).toFixed(3);
    }
    else{
        if(display.value === '0'){
            display.value = '';
        }
        display.value += x
    }
  })
})