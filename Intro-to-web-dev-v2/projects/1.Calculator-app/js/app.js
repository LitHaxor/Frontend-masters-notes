let runningNumber= 0;
let buffer ="0";
let previousText;
const screen = document.querySelector('.screen');

document.querySelector('.pannel')
        .addEventListener("click", (event)=>{
            buttonClick(event.target.innerText);
        });

const buttonClick =  (value) =>{
    if(isNaN(parseInt(value)))
        handleSymbol(value);
     else 
        handleNumber(value);
    
    reFresh();
}

const handleNumber= (value)=>{
    if(buffer === "0")
        buffer = value;
    
    else 
        buffer += value;
    
}

const reFresh = () =>{
    screen.innerText = buffer;
}

