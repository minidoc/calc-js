/* 
Logic for the calculator program 
 - Approach is very sequential.
 - Objective is to get the reader familiar with basic JS. 
 - No OOP concepts applied.

 Issues : (If you are starting from this version, please try to address the below issues.)
  - Decimal not handled. 
  - Style issues when large numbers appear on screen.
  - NaN not handled.
*/

var gMaxNumberLength = 10 ;
var gAccumulator = 0;
var gOperand = 0;
var gOperator = '';
var gExpression = '' ;
var gOperandEntryMode = false ;

// show the value in the display area.
function displayResult(paramValue)
{
   divResult.innerHTML = paramValue;   
}

function handleNumberClick(number){
     if(!gOperandEntryMode){
        gOperand = number ;
     }else{
        // find the operand value from user key - TODO
        // handle decimal point here..
        gOperand = (gOperand*10) + parseInt(number) ;        
     }
     gOperandEntryMode = true ;        
     displayResult(gOperand)
     gExpression += number ;
     
}


function togglePlusMinus(){
    gOperand = gOperand * -1 ;
    displayResult(gOperand);
}

function handleOperatorClick(operator){
    setExpressionString(operator);
    performOperation();     
    gOperator = operator ;  
    gOperandEntryMode = false; 
    displayResult(gAccumulator);    

}

function setExpressionString(operator){
    if(gOperandEntryMode){
        gExpression += operator ;       
    }else{
        if(gAccumulator!=0 && gOperator!=operator ){
           gExpression =  gExpression.substring(0,gExpression.length-1) +  operator;
        }else { 
           if(gExpression.length == 0)
                gExpression =  gOperand + operator;
           else 
                gExpression += operator ;
        }        
    }        
}
    
function handleEqualClick(){
    performOperation();
    resetValues(gAccumulator);  
}

function performOperation(){
    switch (gOperator) {
        case '+': gAccumulator += parseInt(gOperand);
                  break;
        case '-': gAccumulator -= gOperand;
                  break;
        case '/': gAccumulator /= gOperand;
                  break;                    
        case 'x': gAccumulator *= gOperand;
                  break;
        default : gAccumulator = parseInt(gOperand); gOperand = 0; 
                  break;          
    }    
}

// show the value in the display area.
function resetValues(operandValue)
{
    gOperand = operandValue;
    gOperator = '';
    gExpression = '' ;
    gAccumulator = 0;
    gOperandEntryMode = false;
    displayResult(gOperand);  
}