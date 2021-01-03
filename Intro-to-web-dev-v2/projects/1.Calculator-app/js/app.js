let runningNumber= 0;
let buffer ="0";
let previousText =null;
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



const handleSymbol = (value) =>{
    switch(value){  
        case 'C':
            buffer = "0";
            runningNumber = 0;
            break;
        case '=':
            if(previousText === null)
                return;
            flushOperation(parseInt(buffer));
            previousText = null;
            buffer = "" + runningNumber;
            runningNumber =0;
            break;
        case "←":
            if(buffer.length === 1)
                buffer= "0";
            else 
                buffer = buffer.substring(0, buffer.length-1);
            break;
        default:
            handleMath(value);
            break;

    }
}

const reFresh = () =>{
    screen.innerText = buffer;
}

const handleMath= (value) =>{
    const intbuffer = parseInt(buffer);
    if(runningNumber === 0)
    {
        runningNumber = intbuffer;
    }
    else 
        flushOperation(intbuffer);
    
    previousText = value;
    buffer = "0";
}


const flushOperation =  (intbuffer) => {
    console.log("here");
    if(previousText === "+")
        runningNumber += intbuffer;
    else if(previousText === "-")
        runningNumber -= intbuffer;
    else if(previousText === "×")
        runningNumber *= intbuffer;
    else 
        runningNumber /= intbuffer;
}