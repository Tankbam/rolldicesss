const button1 = document.querySelector(".dice1");
const button2 = document.querySelector(".dice2");
const button3 = document.querySelector(".dice3");

button1.addEventListener("click", function(){roll(button1)});
button2.addEventListener("click",function(){roll(button2)});

let total=0;
let first=0;
let second=0;

function roll(a)
{
    const value = Math.floor(Math.random()*6+1);
    a.textContent=value;
    if(a==button1)
    {
    first=value;
    total= first+second;
    }
    else
    {
    second=value;
    total=first+second;
    }
    button3.textContent="Total"+total;
}
