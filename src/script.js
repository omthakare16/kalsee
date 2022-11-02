const disp =document.getElementById("disp")
const btns = document.querySelectorAll("button")
const clear = document.getElementById("clr")
const del = document.getElementById("<=")
let s="";

console.log(Array.from(btns));
Array.from(btns).forEach((button)=>{
    if(button.id=="<="){
        button.addEventListener('click',(e)=>{
    
            s=s.slice(0,-1)
            // console.log(s);
            disp.innerHTML=s
            
        })
    }
    else if(button.id=="ans"){
        button.addEventListener('click',(e)=>{
           for (let index = 0; index < s.length; index++) {
            if(s[index]=='+'){
                let k=s.slice(0,index)
                let l= s.slice(index+1,s.length)
                k= parseFloat(k);
                l= parseFloat(l);
                // console.log(add(k,l));
                s=add(k,l)
                disp.innerHTML=s
            }
            else if(s[index]=='-'){
                let k=s.slice(0,index)
                let l= s.slice(index+1,s.length)
                k= parseFloat(k);
                l= parseFloat(l);
                // console.log(add(k,l));
                s=subtract(k,l)
                disp.innerHTML=s
            }
            else if(s[index]=='x'){
                let k=s.slice(0,index)
                let l= s.slice(index+1,s.length)
                k= parseFloat(k);
                l= parseFloat(l);
                // console.log(add(k,l));
                s=multiply(k,l)
                disp.innerHTML= s
            }
            else if(s[index]=='/'){
                let k=s.slice(0,index)
                let l= s.slice(index+1,s.length)
                k= parseFloat(k);
                l= parseFloat(l);
                // console.log(add(k,l));
                s=divide(k,l).toFixed(2);
                disp.innerHTML= s
            }
            
           } 
        })
    }
    else{
        button.addEventListener('click',(e)=>{
        // console.log(e.target.innerHTML);
        s=s+e.target.innerHTML
        disp.innerHTML=s
    })
    }
    
})
clear.addEventListener('click',(e)=>{
    disp.innerHTML=0
    s="";
})



// -------------------------------- functi0ns   ---------------------
const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let element = 0;
  for (let index = 0; index < arr.length; index++) {
    element = arr[index] + element;


  }
  return element;
};
const divide = function(a,b){
    return a/b;
}
const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let element = 1
  for (let index = a; index > 0; index--) {
    element = index * element;

  }
  return element;
};



