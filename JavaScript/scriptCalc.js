const spanEl = document.getElementById('displayValue');
const math = document.getElementById('displayMath');

let firstValue = '';
let execute = true;
let executeNeg = true;
let executeOperation = true;
let result = 0;
let array = [];
let arrayPlus = [];
let arraySub = [];
let arrayMul = [];
let arrayDiv = [];

$('#clear').click(function() { // CLEARS EVERYTHING
    firstValue = '';
    math.innerHTML = 0;
    spanEl.innerHTML = 0;
    result = 0;
    execute = true;
    executeOperation = true;
    executeNeg = true;
    array = [];
    arrayPlus = [];
    arraySub = [];
    arrayMul = [];
    arrayDiv = [];
});

$('#posToNeg').click(function() {
    if (firstValue.indexOf('+') !== -1 && executeNeg == true) {
        let addIndex0 = firstValue.indexOf('+');
        let valueOneAdd0 = firstValue.substring(0, addIndex0);
        let valueTwoAdd0 = firstValue.substring(addIndex0 + 1, firstValue.length);
        firstValue = `${valueOneAdd0}-${valueTwoAdd0}`;
        spanEl.innerHTML = firstValue;
        arrayPlus.pop();
        arraySub.push('-');
        executeNeg = false;
    } else if (firstValue.indexOf('*') !== -1 && executeNeg == true) {
        let noSpaceMul = '';
        let mulIndex0 = firstValue.indexOf('*');
        let valueOneMul0 = firstValue.substring(0, mulIndex0);
        let valueTwoMul0 = firstValue.substring(mulIndex0 + 1, firstValue.length);

        for (let p = 0; p < valueTwoMul0.length; p++) {
            if (valueTwoMul0[p] !== ' ') {
                noSpaceMul += valueTwoMul0[p];
            }
        }

        firstValue = `${valueOneMul0}* -${noSpaceMul}`;
        spanEl.innerHTML = firstValue;
        arraySub.push('-');
        executeNeg = false;
    } else if (firstValue.indexOf('/') !== -1 && executeNeg == true) {
        let noSpaceDiv = '';
        let divIndex0 = firstValue.indexOf('/');
        let valueOneDiv0 = firstValue.substring(0, divIndex0);
        let valueTwoDiv0 = firstValue.substring(divIndex0 + 1, firstValue.length);

        for (let p = 0; p < valueTwoDiv0.length; p++) {
            if (valueTwoDiv0[p] !== ' ') {
                noSpaceDiv += valueTwoDiv0[p];
            }
        }

        firstValue = `${valueOneDiv0}/ -${noSpaceDiv}`;
        spanEl.innerHTML = firstValue;
        arraySub.push('-');
        executeNeg = false;
    } else if (firstValue.length >= 1 && firstValue.indexOf('-') === -1 && firstValue.indexOf('*') === -1 && firstValue.indexOf('/') === -1 && firstValue.indexOf('+') === -1) {
        firstValue = `-${firstValue}`;
        arraySub.push('-');
        spanEl.innerHTML = firstValue;
        executeNeg = false;
    } else if (firstValue.indexOf('-') !== -1 && executeNeg == true) {
        let subIndex0 = firstValue.indexOf('-');
        let valueOneSub0 = firstValue.substring(0, subIndex0);
        let valueTwoSub0 = firstValue.substring(subIndex0 + 1, firstValue.length);

        if (valueOneSub0 == '') {
            let subIndex0Next = firstValue.indexOf('-', 2);
            valueOneSub0 = firstValue.substring(0, subIndex0Next);
            valueTwoSub0 = firstValue.substring(subIndex0Next + 1, firstValue.length);
            firstValue = `${valueOneSub0}+${valueTwoSub0}`;

            if (firstValue.indexOf('+') == 0) {
                firstValue = firstValue.substring(1, firstValue.length);
            }
            arraySub.pop();
            arrayPlus.push('+');
            spanEl.innerHTML = firstValue;
            executeNeg = false;
        } else {
        firstValue = `${valueOneSub0}+${valueTwoSub0}`;
        spanEl.innerHTML = firstValue;
        arraySub.pop();
        arrayPlus.push('+');
        executeNeg = false;
        }
    } 
});

$('#backspace').click(function() {
    if (firstValue.length > 0) {
    if (firstValue.substring(firstValue.length - 3, firstValue.length) === ' + ') {
        array.pop();
        arrayPlus.pop();
    } else if (firstValue.substring(firstValue.length - 3, firstValue.length) === ' / ') {
        array.pop();
        arrayDiv.pop();
    } else if (firstValue.substring(firstValue.length - 3, firstValue.length) === ' * ') {
        array.pop();
        arrayMul.pop();
    } else if (firstValue.substring(firstValue.length - 3, firstValue.length) === ' - ') {
        array.pop();
        arraySub.pop();
    }

    if (firstValue.substring(firstValue.length - 3, firstValue.length) === ' + ' || firstValue.substring(firstValue.length - 3, firstValue.length) === ' / ' || firstValue.substring(firstValue.length - 3, firstValue.length) === ' - ' || firstValue.substring(firstValue.length - 3, firstValue.length) === ' * ') {
        let strWithNoOp = firstValue.substring(0, firstValue.length - 2);
        let otherPart = firstValue.substring(firstValue.length - 3, firstValue.length);
    
        if (otherPart.indexOf('+') > -1 || otherPart.indexOf('-') > -1) {
        executeNeg = true;
        }

        firstValue = strWithNoOp; 
        spanEl.innerHTML = firstValue; 
        executeOperation = true; 
    }
    
    if (firstValue.substring(firstValue.length - 3, firstValue.length) !== ' + ' || firstValue.substring(firstValue.length - 3, firstValue.length) !== ' / ' || firstValue.substring(firstValue.length - 3, firstValue.length) !== ' - ' || firstValue.substring(firstValue.length - 3, firstValue.length) !== ' * ') {
        let newStr = firstValue.substring(0, firstValue.length - 1);
        let otherPart = firstValue.substring(firstValue.length - 1, firstValue);
        if (otherPart == '.') {
            execute = true;
        }
        firstValue = newStr;
        spanEl.innerHTML = newStr;
        executeOperation = true;
        }
    }
});

$('#zero').click(function() {
    if (firstValue.length > 0) {
    firstValue += '0';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
    }
});

$('#one').click(function() {
    firstValue += '1';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#two').click(function() {
    firstValue += '2'; // Have inputted numbers stay on the display
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#three').click(function() {
    firstValue += '3';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#four').click(function() {
    firstValue += '4';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#five').click(function() {
    firstValue += '5';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#six').click(function() {
    firstValue += '6';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#seven').click(function() {
    firstValue += '7';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#eight').click(function() {
    firstValue += '8';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#nine').click(function() {
    firstValue += '9';
    spanEl.innerHTML = firstValue;
    executeOperation = true;
});

$('#decimal').click(function() {
    if (execute === true) {
    firstValue += '.';
    spanEl.innerHTML = firstValue;
    execute = false;
    executeOperation = true;
}
});

$('#equals').click(function() {
    if (firstValue.indexOf('+') > -1 || firstValue.indexOf('*') > -1 || firstValue.indexOf('-') > -1 || firstValue.indexOf('/') > -1) {
    if (firstValue.indexOf('+') > -1) {
        let addIndex1 = firstValue.indexOf('+');
        let valueOneAdd1 = firstValue.substring(0, addIndex1);
        let valueTwoAdd1 = firstValue.substring(addIndex1 + 1, firstValue.length);
        if (valueTwoAdd1 !== ' ') {
            let addResult1 = parseFloat(valueOneAdd1) + parseFloat(valueTwoAdd1);
            spanEl.innerHTML = addResult1;
            firstValue = addResult1.toString();
            math.innerHTML = `${valueOneAdd1} + ${valueTwoAdd1}`;
            execute = true;
        }
    } else if (firstValue.indexOf('*') > -1) {
        let multiplyIndex1 = firstValue.indexOf('*');
        let valueOneMultiply1 = firstValue.substring(0, multiplyIndex1);
        let valueTwoMultiply1 = firstValue.substring(multiplyIndex1 + 1, firstValue.length);
        if (valueTwoMultiply1 !== ' ') {
            let multiplyResult1 = parseFloat(valueOneMultiply1) * parseFloat(valueTwoMultiply1);
            spanEl.innerHTML = multiplyResult1;
            firstValue = multiplyResult1.toString();
            math.innerHTML = `${valueOneMultiply1} * ${valueTwoMultiply1}`;
            execute = true;
        }
    } else if (firstValue.indexOf('/') > -1) {
        let divIndex1 = firstValue.indexOf('/');
        let valueOneDiv1 = firstValue.substring(0, divIndex1);
        let valueTwoDiv1 = firstValue.substring(divIndex1 + 1, firstValue.length);
        if (valueTwoDiv1 !== ' ') {
            let divResult1 = parseFloat(valueOneDiv1) / parseFloat(valueTwoDiv1);
            spanEl.innerHTML = divResult1;
            firstValue = divResult1.toString();

            math.innerHTML = `${valueOneDiv1} / ${valueTwoDiv1}`;
            execute = true;
        }
    } else if (firstValue.indexOf('-') > -1) {
        let noSpaceSub = '';
        let subIndex1 = firstValue.indexOf('-');
        let indexSubOfNext1 = firstValue.indexOf('-', 2);
        let valueOneSub1 = firstValue.substring(0, subIndex1);
        let valueTwoSub1 = firstValue.substring(subIndex1 + 1, firstValue.length);
        if (arraySub.length == 2) {
            valueOneSub1 = firstValue.substring(0, indexSubOfNext1).trim();
            valueTwoSub1 = firstValue.substring(indexSubOfNext1 + 1, firstValue.length);
            for (let h = 0; h < valueTwoSub1.length; h++) {
                if (valueTwoSub1[h] !== ' ') {
                    noSpaceSub += valueTwoSub1[h];
                }
            }
        } else if (arraySub.length >= 3) {
            let subIndexTwo = firstValue.indexOf('-', 2);
            valueOneSub1 = firstValue.substring(0, subIndexTwo);
            valueTwoSub1 = firstValue.substring(subIndexTwo, firstValue.length - 1);
            valueTwoSub1 = valueTwoSub1.trim();
            valueOneSub1.trim();
        }
        if (valueTwoSub1.indexOf(' ') > -1) {
            let newStr = '';
            for (let i = 0; i < valueOneSub1.length; i++) {
                if (valueOneSub1[i] !== ' ') {
                    newStr += valueTwoSub1[i];
                }
            }
            firstValue = newStr;
        } else if (valueTwoSub1 == '' || valueTwoSub1 == '-') {
            let subIndexTwo = firstValue.indexOf('-', 2);
            valueTwoSub1 = firstValue.substring(subIndexTwo + 1, firstValue.length);
        } 
        
        if (valueTwoSub1 === '') {
            let subResult2 = parseFloat(valueOneSub1);
            subResult2 = subResult2.toString();
            result += subResult2;
            spanEl.innerHTML = subResult2;
            firstValue = subResult2;
        } else if (valueTwoSub1 !== ' ') {
            valueOneSub1 = valueOneSub1.trim();
            valueTwoSub1 = valueTwoSub1.trim();
            let subResult1 = parseFloat(valueOneSub1) - parseFloat(valueTwoSub1);
            spanEl.innerHTML = subResult1;
            firstValue = subResult1.toString();
            arraySub.pop();
            math.innerHTML = `${valueOneSub1} - ${valueTwoSub1}`;
            execute = true;
        }
    }
    } 
});

$('#add').click(function() {
    if (executeOperation == true) {
        let subAddIndex = firstValue.indexOf('-');
        let subAddIndexNext = firstValue.indexOf('-', 2);
        let indexDiv = firstValue.indexOf('/');
        let indexAdd = firstValue.indexOf('+');
        let mulAdd = firstValue.indexOf('*');

    if (arrayDiv.length >= 1) {
        let firstValueDivi = firstValue.substring(0, indexDiv - 1);
        let secondValueDivi = firstValue.substring(indexDiv + 2, firstValue.length);
        arrayDiv.pop();
        if (firstValueDivi == '') {
            firstValueDivi = firstValue.substring(0, indexAdd - 1);
            secondValueDivi = firstValue.substring(indexAdd + 2, firstValue.length);
        } else { 
            diviResult = parseFloat(firstValueDivi) / parseFloat(secondValueDivi);
            firstValue = diviResult.toString();
            spanEl.innerHTML = firstValue;
            math.innerHTML = `${firstValueDivi} / ${secondValueDivi}`;
        }
    }

    if (arrayMul.length >= 1) {
        let firstValueMultiply = firstValue.substring(0, mulAdd - 1);
        let secondValueMultiply = firstValue.substring(mulAdd + 2, firstValue.length);
        firstValueMultiply = firstValueMultiply.trim();
        arrayMul.pop();
        if (firstValueMultiply == '') {
            firstValueMultiply = firstValue.substring(0, mulAdd);
            secondValueMultiply = firstValue.substring(mulAdd + 1, firstValue.length);
        }

        if (firstValueMultiply == '') {
            console.log(1);
        } else { 
            let multiplyResult = parseFloat(firstValueMultiply) * parseFloat(secondValueMultiply);
            arraySub.pop();
            firstValue = multiplyResult.toString();
            spanEl.innerHTML = firstValue;
            math.innerHTML = `${firstValueMultiply} * ${secondValueMultiply}`;
        }
    } 

    if (arraySub.length >= 1) {
        if (firstValue.indexOf('-') == 0) {
            let firstValueSubbed = firstValue.substring(0, subAddIndexNext - 1);
            let secondValueSubbed = firstValue.substring(subAddIndexNext + 2, firstValue.length);
            if (secondValueSubbed == '') {
            } else if (firstValueSubbed == '') {
                firstValueSubbed = firstValue.substring(0, indexAdd);
                secondValueSubbed = firstValue.substring(indexAdd + 1, firstValue.length);
                firstValueSubbed = firstValueSubbed.trim();
                if (secondValueSubbed == ' ') {
                    console.log(1);
                } else if (firstValueSubbed == '') {
                    firstValueSubbed = secondValueSubbed;
                } else {
                    let subbedResult = parseFloat(firstValueSubbed) + parseFloat(secondValueSubbed);
                    firstValue = subbedResult.toString();
                    spanEl.innerHTML = firstValue;
                    math.innerHTML = `${firstValueSubbed} + ${secondValueSubbed}`;
                }
            } else {
                let subbedResult = parseFloat(firstValueSubbed) - parseFloat(secondValueSubbed);
                firstValue = subbedResult.toString();
                spanEl.innerHTML = firstValue;
                math.innerHTML = `${firstValueSubbed} - ${secondValueSubbed}`;
            }
        } else {       
        let firstValueSubbed = firstValue.substring(0, subAddIndex - 1);
        let secondValueSubbed = firstValue.substring(subAddIndex + 2, firstValue.length);
            if (firstValueSubbed == '' && secondValueSubbed == '') {
                console.log(1);
            } else if (firstValueSubbed == '') {
            firstValueSubbed = firstValue.substring(0, indexAdd - 1);
            secondValueSubbed = firstValue.substring(indexAdd + 2, firstValue.length);
            let subbedResult = parseFloat(firstValueSubbed) + parseFloat(secondValueSubbed);
            firstValue = subbedResult.toString();
            spanEl.innerHTML = firstValue;
            arraySub.pop();
            math.innerHTML = `${firstValueSubbed} + ${secondValueSubbed}`;
        } else {
        let subbedResult = parseFloat(firstValueSubbed) - parseFloat(secondValueSubbed);
        firstValue = subbedResult.toString();
        spanEl.innerHTML = firstValue;
        arraySub.pop();
        math.innerHTML = `${firstValueSubbed} - ${secondValueSubbed}`;
        }
        }
    } 
    executeNeg = true;
    execute = true;

    if (firstValue.length >= 1 && firstValue.substring(firstValue.length - 3, firstValue.length) !== " + ") {
    firstValue += " + ";

    for (let i = 0; i < firstValue.length; i++) {
        if (firstValue[i] === '+') {
            array.push('+');
            arrayPlus.push('+');
            executeOperation = false;
        }
    }

    if (array.length >= 2 || arraySub >= 1 || arrayDiv >= 1 || arrayMul >= 1 || arrayPlus >= 1) {
        let addIndex = firstValue.indexOf('+');
        let valueOneAdd = firstValue.substring(0, addIndex);
        let valueTwoAdd = firstValue.substring(addIndex + 1, firstValue.length);
        valueOneAdd = valueOneAdd.trim();
        if (valueTwoAdd == ' ') {
            valueTwoAdd = firstValue.substring(addIndex, firstValue.length);
            if (valueTwoAdd == '+') {
                valueOneAdd = valueOneAdd.trim();
                valueTwoAdd = firstValue.substring(subAddIndexNext + 2, firstValue.length);
            }
        } else if (valueOneAdd == '') {
            valueTwoAdd = firstValue.substring(addIndex + 1, firstValue.length - 3);
        } else {
        addResult = parseFloat(valueOneAdd) + parseFloat(valueTwoAdd);
        math.innerHTML = firstValue.substring(0, firstValue.length - 3);
        firstValue = addResult + ` + `;
        executeOperation = true;
        }
    } 
    spanEl.innerHTML = firstValue;
}
    }       
});

$('#multiply').click(function() {
    if (executeOperation == true) {
        let newStrMul = '';
        let subMulIndex = firstValue.indexOf('-');
        let indexDiv = firstValue.indexOf('/');
        let addedIndex = firstValue.indexOf('+');
        let multiplyIndex2 = firstValue.indexOf('*');
        let subMulIndexNext = firstValue.indexOf('-', 2);

    if (arrayDiv.length >= 1) {
        let firstValueDivi = firstValue.substring(0, indexDiv - 1);
        let secondValueDivi = firstValue.substring(indexDiv + 2, firstValue.length);
        arrayDiv.pop();
        if (firstValueDivi == '') {
            firstValueDivi = firstValue.substring(0, multiplyIndex2 - 1);
            secondValueDivi = firstValue.substring(multiplyIndex2 + 2, firstValue.length);
        } else {
            diviResult = parseFloat(firstValueDivi) / parseFloat(secondValueDivi);
            firstValue = diviResult.toString();
            spanEl.innerHTML = firstValue;
            math.innerHTML = `${firstValueDivi} / ${secondValueDivi}`;
        }
    }

    if (arrayPlus.length >= 1) {
        let firstValueAdded = firstValue.substring(0, addedIndex - 1);
        let secondValueAdded = firstValue.substring(addedIndex + 2, firstValue.length);
        if (firstValueAdded == '') {
            firstValueAdded = firstValue.substring(0, subMulIndex - 1);
            secondValueAdded = firstValue.substring(subMulIndex + 2, firstValue.length);
        } else {
        let addedResult = parseFloat(firstValueAdded) + parseFloat(secondValueAdded);
        firstValue = addedResult.toString();
        spanEl.innerHTML = firstValue;
        arrayPlus.pop();
        arraySub = [];
        math.innerHTML = `${firstValueAdded} + ${secondValueAdded}`;
        }
    } 
    if (firstValue.indexOf('-') === 0) {
        arraySub.pop();
    }
  
    if (arraySub.length >= 1) {
        let firstValueSubbed = firstValue.substring(0, subMulIndex);
        let secondValueSubbed = firstValue.substring(subMulIndex + 2, firstValue.length);
        firstValueSubbed = firstValueSubbed.trim();
        secondValueSubbed = secondValueSubbed.trim();
        if (firstValueSubbed == '') {
            firstValueSubbed = firstValue.substring(0, subMulIndexNext - 1);
            secondValueSubbed = firstValue.substring(subMulIndexNext + 2, firstValue.length);
            if (firstValueSubbed.indexOf('*') >= -1) {
                firstValueSubbed = firstValue.substring(0, subMulIndexNext - 1);
                secondValueSubbed = firstValue.substring(subMulIndexNext + 2, firstValue.length);
                if (firstValueSubbed.indexOf('-') == 0) {
                    firstValueSubbed = firstValue.substring(0, subMulIndexNext - 1);
                secondValueSubbed = firstValue.substring(subMulIndexNext + 2, firstValue.length);
                } else if (firstValueSubbed == '-') {
                    secondValueSubbed = secondValueSubbed.trim();
                    firstValueSubbed = firstValue.substring(0, subMulIndexNext - 1);
                } else if (firstValueSubbed = '') {
                    firstValueSubbed = firstValue.substring(0, subMulIndexNext - 1);
                }
                if (secondValueSubbed == '') {
                    console.log(1);
                }

                if (secondValueSubbed.indexOf(' ') !== -1) {
                    let newStr = '';
                    for (let i = 0; i < secondValueSubbed.length; i++) {
                        if (secondValueSubbed[i] !== ' ') {
                            newStr += secondValueSubbed[i];
                        }
                    }
                        secondValueSubbed = newStr;
                    
                } 
            } else if (secondValueSubbed.indexOf('-') == 0) {
                secondValueSubbed = secondValueSubbed.substring(subMulIndex + 4, firstValue.length);
            }
            if (firstValueSubbed == '') {
                firstValueSubbed = firstValue.substring(0, subMulIndexNext - 1);
                secondValueSubbed = firstValue.substring(subMulIndex, firstValue.length);
            } else if (firstValue.indexOf('*') === -1) {
                if (secondValueSubbed == '') {
                    console.log(1);
                } else {
            let subbedResult = parseFloat(firstValueSubbed) - parseFloat(secondValueSubbed);
            firstValue = subbedResult.toString();
            spanEl.innerHTML = firstValue;
            arraySub.pop();
            arrayPlus = [];
            math.innerHTML = `${firstValueSubbed} - ${secondValueSubbed}`;
                }
            }
        } else if (secondValueSubbed == '') {
            firstValueSubbed = firstValue.substring(0, subMulIndex - 3);
            secondValueSubbed = firstValue.substring(subMulIndex, firstValue.length);
        } else {
        let subbedResult = parseFloat(firstValueSubbed) - parseFloat(secondValueSubbed);
        firstValue = subbedResult.toString();
        spanEl.innerHTML = firstValue;
        arraySub.pop();
        math.innerHTML = `${firstValueSubbed} - ${secondValueSubbed}`;
        }
    } 
    execute = true;
    executeNeg = true;
    if (firstValue.length >= 1 && firstValue.substring(firstValue.length - 3, firstValue.length) !== " * ") {
    firstValue += " * ";

    for (let i = 0; i < firstValue.length; i++) {
        if (firstValue[i] === '*') {
            array.push('*');
            arrayMul.push('*');
            executeOperation = false;
        } 
    }

    if (array.length >= 2) {
        if (firstValue.indexOf('-') > -1) {
            for (let o = 0; o < firstValue.length; o++) {
                if (firstValue[o] !== ' ') {
                    newStrMul += firstValue[o];
                }
            }   

            
            if (firstValue.indexOf('-', 2) > -1) {
                let valueOneMultiply4 = newStrMul.substring(0, multiplyIndex2 - 2);
                let valueTwoMultiply4 = newStrMul.substring(multiplyIndex2 - 1, newStrMul.length - 1);
                valueOneMultiply4.trim();
                if (valueTwoMultiply4.indexOf("*") == 0) {
                    valueOneMultiply4 = newStrMul.substring(0, multiplyIndex2 - 1);
                    valueTwoMultiply4 = newStrMul.substring(multiplyIndex2, newStrMul.length - 1);
                } else if (valueOneMultiply4 == '-') {
                    valueOneMultiply4 = newStrMul.substring(0, multiplyIndex2 - 1);
                    valueTwoMultiply4 = newStrMul.substring(multiplyIndex2 + 3, newStrMul.length - 1);
                    valueTwoMultiply4 = valueTwoMultiply4.trim();
                    if (valueTwoMultiply4 == '*') {
                        valueTwoMultiply4 = newStrMul.substring(multiplyIndex2, newStrMul.length);
                    }
                } else if (valueOneMultiply4 == '') {
                    let nextMulIndex = firstValue.indexOf('*', multiplyIndex2 + 1);
                    valueOneMultiply4 = firstValue.substring(0, multiplyIndex2 - 1);
                    valueTwoMultiply4 = firstValue.substring(multiplyIndex2 + 2, nextMulIndex - 1);
                }
                let multiplyResult4 = parseFloat(valueOneMultiply4) * parseFloat(valueTwoMultiply4);
                result += multiplyResult4;
                spanEl.innerHTML = multiplyResult4;
                math.innerHTML = firstValue.substring(0, firstValue.length - 3);
                firstValue = multiplyResult4 + ` * `;
            } else if (firstValue.indexOf('-') === 0) {
                let valueOneMultiply3 = newStrMul.substring(0, multiplyIndex2 - 1);
                let valueTwoMultiply3 = newStrMul.substring(multiplyIndex2, newStrMul.length - 1);
                valueOneMultiply3.trim();
                if (valueOneMultiply3 == '') {
                    console.log(1);
                } else if (valueTwoMultiply3 == '*') {
                    valueTwoMultiply3 = '';
                } else {
                let multiplyResult3 = parseFloat(valueOneMultiply3) * parseFloat(valueTwoMultiply3);
                result += multiplyResult3;
                spanEl.innerHTML = multiplyResult3;
                math.innerHTML = firstValue.substring(0, firstValue.length - 3);
                firstValue = multiplyResult3 + ` * `;
                }
            } else {
                let valueOneMultiply2 = newStrMul.substring(0, multiplyIndex2 - 2);
                let valueTwoMultiply2 = newStrMul.substring(multiplyIndex2 - 1, newStrMul.length - 1);
                valueOneMultiply2.trim();
                let multiplyResult2 = parseFloat(valueOneMultiply2) * parseFloat(valueTwoMultiply2);
                result += multiplyResult2;
                spanEl.innerHTML = multiplyResult2;
                math.innerHTML = firstValue.substring(0, firstValue.length - 3);
                firstValue = multiplyResult2 + ` * `;
            }    
        } else { 
            let multiplyIndex = firstValue.indexOf('*');
            let valueOneMultiply = firstValue.substring(0, multiplyIndex);
            let valueTwoMultiply = firstValue.substring(multiplyIndex + 1, firstValue.length);
            if (valueTwoMultiply == ' ') {
                console.log(1);
            } else {
            let multiplyResult = parseFloat(valueOneMultiply) * parseFloat(valueTwoMultiply);
            result += multiplyResult;
            math.innerHTML = firstValue.substring(0, firstValue.length - 3);
            firstValue = multiplyResult + ` * `;  
            }
        }   
    } 
    spanEl.innerHTML = firstValue;
    }    
}
});

$('#divide').click(function() {
    if (executeOperation == true) {
        let modDiv = [];
        let divIndex = firstValue.indexOf('/');
        let subIn = firstValue.indexOf('-');
        let mulIn = firstValue.indexOf('*');
        let addedIndex = firstValue.indexOf('+');
        let subInNext = firstValue.indexOf('-', 2);
        let newStrDiv = '';
        let valueOneDiv;
        let valueTwoDiv;

        if (arrayMul.length >= 1) {
            let firstValueMultiply = firstValue.substring(0, mulIn - 1);
            let secondValueMultiply = firstValue.substring(mulIn + 2, firstValue.length);
            arrayMul.pop();
            if (firstValueMultiply == '') {
                firstValueMultiply = firstValue.substring(0, mulIn - 3);
                secondValueMultiply = firstValue.substring(mulIn, firstValue.length);
            } else {
            let multiplyResult = parseFloat(firstValueMultiply) * parseFloat(secondValueMultiply);
            firstValue = multiplyResult.toString();
            spanEl.innerHTML = firstValue;
            math.innerHTML = `${firstValueMultiply} * ${secondValueMultiply}`;
            }
        }
    
        if (arrayPlus.length >= 1) {
            let firstValueAdded = firstValue.substring(0, addedIndex - 1);
            let secondValueAdded = firstValue.substring(addedIndex + 2, firstValue.length);
            if (firstValueAdded == '') {
                firstValueAdded = firstValue.substring(0, subIn - 1);
                secondValueAdded = firstValue.substring(subIn + 2, firstValue.length);
            } else {
            let addedResult = parseFloat(firstValueAdded) + parseFloat(secondValueAdded);
            firstValue = addedResult.toString();
            spanEl.innerHTML = firstValue;
            arrayPlus.pop();
            arraySub = [];
            math.innerHTML = `${firstValueAdded} + ${secondValueAdded}`;
            }
        } 

        if (firstValue.indexOf('-') == 0) {
            arraySub.pop();
        }

        if (arraySub.length >= 1) {
            let firstValueSubbed = firstValue.substring(0, subIn - 1);
            let secondValueSubbed = firstValue.substring(subIn + 2, firstValue.length);
            if (firstValueSubbed == '') {
                firstValueSubbed = firstValue.substring(0, divIndex - 1);
                secondValueSubbed = firstValue.substring(divIndex + 2, firstValue.length);
                if (firstValueSubbed == '') {
                    firstValueSubbed = firstValue.substring(0, subInNext - 1);
                    firstValueSubbed = firstValueSubbed.trim();
                    secondValueSubbed = firstValue.substring(subInNext + 2, firstValue.length);
                }
            } else if (secondValueSubbed == '') {
                firstValueSubbed = firstValue.substring(0, subInNext - 1);
                secondValueSubbed = firstValue.substring(subInNext + 2, firstValue.length);
                if (secondValueSubbed == '') {
                    firstValueSubbed = firstValue.substring(0, divIndex - 1);
                    secondValueSubbed = firstValue.substring(divIndex + 2, firstValue.length);
                    firstValueSubbed = firstValueSubbed.trim();
                } 
            } else if (firstValueSubbed == '') {
                firstValueSubbed = firstValue.substring(0, subInNext);
                secondValueSubbed = firstValue.substring(subInNext + 2, firstValue.length);
                firstValueSubbed = firstValueSubbed.trim();
                let subbedResult = parseFloat(firstValueSubbed) - parseFloat(secondValueSubbed);
                firstValue = subbedResult.toString();
                spanEl.innerHTML = firstValue;
                arraySub.pop();
                arrayPlus = [];
                math.innerHTML = `${firstValueSubbed} - ${secondValueSubbed}`;
            } else if (firstValueSubbed.indexOf('/') !== -1) {
                firstValueSubbed = firstValue.substring(0, divIndex - 1);
                secondValueSubbed = firstValue.substring(divIndex + 2, firstValue.length);
            } else {
            let subbedResult = parseFloat(firstValueSubbed) - parseFloat(secondValueSubbed);
            firstValue = subbedResult.toString();
            spanEl.innerHTML = firstValue;
            arraySub.pop();
            math.innerHTML = `${firstValueSubbed} - ${secondValueSubbed}`;
            }
        }
    execute = true;
    executeNeg = true;
    executeOperation = false;

    if (firstValue.length >= 1 && firstValue.substring(firstValue.length - 3, firstValue.length) !== " / ") {
    firstValue += " / ";

    for (let i = 0; i < firstValue.length; i++) {
        if (firstValue[i] === '/') {
            array.push('/');
            arrayDiv.push('/');
            modDiv.push('/');
        }
    }

    if (array.length >= 2) {
        if (firstValue.indexOf('-') > -1) {
            for (let o = 0; o < firstValue.length; o++) {
                if (firstValue[o] !== ' ') {
                    newStrDiv += firstValue[o];
                }
            }   

            if (firstValue.indexOf('-', 2) > -1) {
                let valueOneDiv4 = newStrDiv.substring(0, divIndex - 2);
                let valueTwoDiv4 = newStrDiv.substring(divIndex - 1, newStrDiv.length - 1);
                if (valueTwoDiv4.indexOf('/') == 0) {
                    valueOneDiv4 = newStrDiv.substring(0, divIndex - 1);
                    valueTwoDiv4 = newStrDiv.substring(divIndex, newStrDiv.length - 1);
                } else if (valueOneDiv4 == '') {
                    valueOneDiv4 = firstValue.substring(0, divIndex - 1);
                    valueTwoDiv4 = firstValue.substring(divIndex + 2, firstValue.length);
                if (valueOneDiv4 == '') {
                    valueOneDiv4 = firstValue.substring(0, subInNext - 1);
                    valueTwoDiv4 = firstValue.substring(subInNext + 2, firstValue.length);
                }
                }
                valueOneDiv4.trim();
                let divResult4 = parseFloat(valueOneDiv4) / parseFloat(valueTwoDiv4);
                result += divResult4;
                spanEl.innerHTML = divResult4;
                math.innerHTML = firstValue.substring(0, firstValue.length - 3);
                firstValue = divResult4 + ` / `;
            } else if (firstValue.indexOf('-') === 0) {
                let divIndex = firstValue.indexOf('/');
                let valueOneDiv3 = firstValue.substring(0, divIndex);
                let valueTwoDiv3 = firstValue.substring(divIndex, firstValue.length);
                valueTwoDiv3 = valueTwoDiv3.trim();
                if (valueTwoDiv3) {
                    valueTwoDiv3 = firstValue.substring(divIndex + 2, firstValue.length);
                }         
                if (valueTwoDiv3 == '') {
                    console.log(1);
                } else {
                valueOneDiv3.trim();
                let divResult3 = parseFloat(valueOneDiv3) / parseFloat(valueTwoDiv3);
                result += divResult3;
                spanEl.innerHTML = divResult3;
                math.innerHTML = firstValue.substring(0, firstValue.length - 3);
                firstValue = divResult3 + ` / `;
                }
            } else {
                let valueOneDiv2 = newStrDiv.substring(0, divIndex - 2);
                let valueTwoDiv2 = newStrDiv.substring(divIndex - 1, newStrDiv.length - 1);
                valueOneDiv2.trim();
                let divResult2 = parseFloat(valueOneDiv2) / parseFloat(valueTwoDiv2);
                result += divResult2;
                spanEl.innerHTML = divResult2;
                math.innerHTML = firstValue.substring(0, firstValue.length - 3);
                if (firstValue.length <= 12) {
                firstValue = divResult2 + ` / `; 
                } else {
                    firstValue = divResult2;
                }
            } 
        } else {
            let divIndex = firstValue.indexOf('/');
            valueOneDiv = firstValue.substring(0, divIndex);
            valueTwoDiv = firstValue.substring(divIndex + 1, firstValue.length);

            if (valueTwoDiv == ' ') {
                valueOneDiv = valueOneDiv.trim();
            } else {
                let divResult = parseFloat(valueOneDiv) / parseFloat(valueTwoDiv);
                divResult = divResult.toString();
                spanEl.innerHTML = divResult;
                math.innerHTML = firstValue.substring(0, firstValue.length - 3);
                firstValue = divResult;
                if (modDiv.length % 2 == 0) {
                    firstValue = divResult + ` / `;
            }
        }
        }
    }
    spanEl.innerHTML = firstValue;
}
    }    
});

$('#subtract').click(function() {
    if (executeOperation == true) {
        let addedIndex = firstValue.indexOf('+');
        let multIndex = firstValue.indexOf('*');
        let indexDiv = firstValue.indexOf('/');
        let nextIndex = firstValue.indexOf('-', 2);
        let subIndex = firstValue.indexOf('-');
        executeNeg = true;
        execute = true;
        executeOperation = false;

    if (arrayDiv.length >= 1) {
        let firstValueDivi = firstValue.substring(0, indexDiv - 1);
        let secondValueDivi = firstValue.substring(indexDiv + 2, firstValue.length);
        arrayDiv.pop();
        if (firstValueDivi == '') {
            firstValueDivi = firstValue.substring(0, nextIndex - 1);
            secondValueDivi = firstValue.substring(nextIndex + 2, firstValue.length);
        } else {
        diviResult = parseFloat(firstValueDivi) / parseFloat(secondValueDivi);
        firstValue = diviResult.toString();
        spanEl.innerHTML = firstValue;
        math.innerHTML = `${firstValueDivi} / ${secondValueDivi}`;
        }
    }

    if (arrayMul.length >= 1) {
        let firstValueMultiply = firstValue.substring(0, multIndex - 1);
        let secondValueMultiply = firstValue.substring(multIndex + 2, firstValue.length);
        arrayMul.pop();
        if (firstValueMultiply == '') {
            firstValueMultiply = firstValue.substring(0, subIndex - 1);
            secondValueMultiply = firstValue.substring(subIndex + 2, firstValue.length);
        } else {
        let multiplyResult = parseFloat(firstValueMultiply) * parseFloat(secondValueMultiply);
        firstValue = multiplyResult.toString();
        spanEl.innerHTML = firstValue;
        math.innerHTML = `${firstValueMultiply} * ${secondValueMultiply}`;
        }
    }

    if (arrayPlus.length >= 1) {
        let firstValueAdded = firstValue.substring(0, addedIndex - 1);
        let secondValueAdded = firstValue.substring(addedIndex + 2, firstValue.length);
        if (secondValueAdded == '') {
            console.log(1);
        } else if (firstValueAdded == '') {
            firstValueAdded = firstValue.substring(0, subIndex - 1);
            secondValueAdded = firstValue.substring(subIndex + 2, firstValue.length);
        } else {
        let addedResult = parseFloat(firstValueAdded) + parseFloat(secondValueAdded);
        firstValue = addedResult.toString();
        spanEl.innerHTML = firstValue;
        arrayPlus.pop();
        arraySub = [];
        math.innerHTML = `${firstValueAdded} + ${secondValueAdded}`; 
        }
    }

    if (firstValue.length >= 1 && firstValue.substring(firstValue.length - 3, firstValue.length) !== " - ") {
    firstValue += " - ";

    for (let i = 0; i < firstValue.length; i++) {
        if (firstValue[i] === '-') {
            array.push('-');
            arraySub.push('-');
        }
    }

    if (array.length >= 2) {
        let valueOneSub = firstValue.substring(0, subIndex);
        let valueTwoSub = firstValue.substring(subIndex - 1, firstValue.length - 3);
        if (arraySub.length >= 3) {
            valueOneSub = firstValue.substring(0, nextIndex);
            valueTwoSub = firstValue.substring(nextIndex + 1, firstValue.length);
        } else if (valueOneSub === '') {
            valueOneSub = firstValue.substring(0, nextIndex - 1);
            valueTwoSub = ' ';
        } 
  
        if (valueTwoSub === ' ') {
            spanEl.innerHTML = valueOneSub;
        } else { 
            valueOneSub = valueOneSub.trim();
            valueTwoSub = valueTwoSub.trim();
            if (valueTwoSub.indexOf('-') == 0) {
                valueTwoSub = valueTwoSub.substring(subIndex, valueTwoSub.length);
                if (valueTwoSub.indexOf('-', 2)) {
                    valueTwoSub = '';
                }
            } 
            if (valueTwoSub == '') {
                console.log(1);
            } else {
            let subResult = parseFloat(valueOneSub) - parseFloat(valueTwoSub);
            spanEl.innerHTML = subResult;
            math.innerHTML = firstValue.substring(0, firstValue.length - 3);
            firstValue = subResult + ` - `;
            }
        }
    } 
    spanEl.innerHTML = firstValue;
}
    }    
});
