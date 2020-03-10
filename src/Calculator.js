import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num1, setNum1] = useState('');
    const [initialVal, setInitialVal] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('0');

    // Clearing the state
    const clear = () => {
        setResult('');
        setNum1('');
        setOperator('');
        setInitialVal('');
    }

    // Getting the number that is being clicked
    function clickedNum(e) {
        if (e.target.value !== "0" || initialVal !== '') {
            setResult(e.target.value);
            setInitialVal(initialVal + e.target.value);
        }
    }

    // Get the clicked operator
    const clickedOp = (e) => {
        if (initialVal) {
            setNum1(initialVal);
            setOperator(e.target.value)
            setInitialVal('');
        } 
    }

    //Getting the +/-
    const plusMinus = () => {
        if (initialVal) {
            setInitialVal(initialVal * -1);
        }
    }

    //Getting the dot for decimal
    const dot = () => {
        if (!initialVal) {
            setInitialVal('0.')
        } else if (initialVal.indexOf('.') === -1) {
            setInitialVal(initialVal + '.')
        }
    }

    //Get the calculated value
    const calculation = () => {
        let ans = '';
        if (operator === '+') {
            ans = Number(num1) + Number(initialVal);
        }
        else if (operator === '-') {
            ans = Number(num1) - Number(initialVal);
        }
        else if (operator === '/') {
            ans = Number(num1) / Number(initialVal);
        }
        else if (operator === '*') {
            ans = Number(num1) * Number(initialVal);
        }
        else if (operator === '%') {
            ans = Number(num1) % Number(initialVal);
        }
        console.log(num1, operator, initialVal, ans)

        setResult(ans.toString())
        setInitialVal("");
        setOperator('');
        setNum1('');
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                {/* <p>Value: </p> */}
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={plusMinus} value="plusMinus">+/-</button>
                    <button className="calc-button calc-button-top" onClick={e => clickedOp(e)} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={e => clickedOp(e)} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="7">7</button>
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="8">8</button>
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={e => clickedOp(e)} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="4">4</button>
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="5">5</button>
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={e => clickedOp(e)} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="1">1</button>
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="2">2</button>
                    <button className="calc-button" onClick={(e) => clickedNum(e)} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={e => clickedOp(e)} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => clickedNum(e)} value="0">0</button>
                    <button className="calc-button" onClick={dot} value=".">.</button>
                    <button className="calc-button calc-button-op" onClick={calculation} value="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator