let val = document.getElementsByTagName('button');
var tar;

for(let i=0; i<val.length ; i++){
    if(val[i].id !== 'clear' && val[i].id !== 'equalto'){
    val[i].addEventListener('click',result);
    }
}

function result(event){
     tar = event.target.value;
    document.getElementById('output').value += tar;
}

let equal = document.getElementById('equalto');
equal.addEventListener('click',solve);

function solve(){
  let output1 = document.getElementById('output').value;
  let result1 = eval(output1);
  document.getElementById('output').value = result1;
}

let clear = document.getElementById('clear');
clear.addEventListener('click',clear1);

function clear1(){
    let out = document.getElementById('output');
    out.value = '';
}