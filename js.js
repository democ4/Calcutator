function add (a,b){
    return Number(a)+Number(b);
}
function subtract(a,b){
    return a-b;
}
function times (a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate (oper,a,b){
if (oper=="+") return add(a,b);
if (oper== "-") return subtract(a,b);
if (oper== "*") return times(a,b);
if (oper== "/") return divide(a,b);

}


let currentState= "=";
let temp = "";
let operclear = 0;

function equal(e){
    if(operclear == 1)return 0;
        let currentValue=output.textContent ;
        if(currentState !="=" &&temp!=""){
            output.textContent =operate (currentState,temp,currentValue);
            
            }
       
        temp=output.textContent;

        if(e.type =="click"){
            currentState = this.textContent;
            if (this.textContent !="=")operclear = 1;
        }

        if(e.type == "keydown"){
            if(e.key!= "Enter") {
                    currentState =e.key;
                    operclear = 1;
                }
            else{
                currentState ="=";
                }
        }


}

const operater = document.querySelectorAll(".operater");
operater.forEach(element =>{ 
    element.addEventListener("click",equal)
})

const output= document.querySelector(".output");

const clear = document.querySelector(".clear");
clear.addEventListener("click",clearoutput);
function clearoutput(){
    output.textContent = "";
      currentState= "=";    
}
const back = document.querySelector(".back");
back.addEventListener("click",backoutput);
function backoutput(){
    output.textContent=output.textContent.slice(0,-1);
}


function addoutput(e){
if(operclear ==1  ){output.textContent ="" ;operclear = 0;   }
if(e.type =="click")output.textContent +=this.textContent;
if(e.type == "keydown")output.textContent +=e.key;

}

const number = document.querySelectorAll(".number");

number.forEach(element=>{
     element.addEventListener("click",addoutput ,true);
     
}
);

function adddotoutput(){
    if( output.textContent.indexOf(".") == -1  ){
       
        if(operclear ==1  ){output.textContent ="" ;operclear = 0;   } 
        if(output.textContent=="" )output.textContent +="0";   
        output.textContent +=".";

    }
}
const dot = document.querySelector(".dot");
dot.addEventListener("click",adddotoutput)


window.addEventListener("keydown",function(e){
for(let i = 0 ;i<10;i++){
            if(e.code.includes("NumpadDivide")){equal(e);break;}
            if(e.code.includes("NumpadMultiply")){equal(e);break;}
            if(e.code.includes("NumpadSubtract")){equal(e);break;}
            if(e.code.includes("NumpadAdd")){equal(e);break;}
            if(e.code.includes("NumpadEnter")){equal(e);break;}
            if(e.code.includes("NumpadDecimal")){adddotoutput(e);break;}
            if(e.code.includes("Numpad"+i) ){
                addoutput(e);
            }
        }
        
});


// //e.code   >>  Numpad1 .... keya  
// NumpadDivide js.js:104:13
// NumpadMultiply js.js:104:13
// NumpadSubtract js.js:104:13
// NumpadAdd js.js:104:13
// NumpadEnter