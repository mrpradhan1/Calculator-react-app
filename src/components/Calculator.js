import React, { useState } from "react";

const Calculator=()=>{
    const[error,setError]=useState(false);
    const[errorMsg,setErrorMsg]=useState("");
    const[show,setShow]=useState(false);
    const[result,setResult]=useState(0.00);
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    
    function handleClick(e){
        e.preventDefault();
        if(!num1 || num1 === ""){
            setError(true);
            setErrorMsg("Num1 Can Not Be Empty");
        }else if(isNaN(num1)){
            setError(true);
            setErrorMsg("Num1 is not an Integer");
        }else if(!num2 || num2 === ""){
            setError(true);
            setErrorMsg("Num2 Can Not Be Empty");
        }else if(isNaN(num2)){
            setError(true);
            setErrorMsg("Num2 is not an Integer");
        }else if(e.target.classList.contains('divid') && +num2===0){
            setError(true);
            setErrorMsg("Num2 cann't be zero");
        }else{
            setError(false);
            setErrorMsg("");
            if(e.target.classList.contains('plus'))
                setResult(parseFloat(num1)+parseFloat(num2));
            else if(e.target.classList.contains('minus'))
                setResult(parseFloat(num1)-parseFloat(num2));
            else if(e.target.classList.contains('multiply'))
                setResult(parseFloat(num1)*parseFloat(num2));
            else if(e.target.classList.contains('divid'))
                setResult(parseFloat(num1)/parseFloat(num2));
        }
        setShow(true);
    }



    return(
        <div className="cal">
            <h1>Calculator</h1>
            <input type="text" name="num1" placeholder="Num1" value={num1} onChange={(e)=> setNum1(e.target.value)} />
            <input type="text" name="num2" placeholder="Num2" value={num2} onChange={(e)=> setNum2(e.target.value)} />
            <div className="buttons">
                <button className="btn plus" onClick={(e)=>handleClick(e)}>+</button>
                <button className="btn minus" onClick={(e)=>handleClick(e)}>-</button>
                <button className="btn multiply" onClick={(e)=>handleClick(e)}>*</button>
                <button className="btn divid" onClick={(e)=>handleClick(e)}>/</button>
            </div>
            {
                show && <div className="Message">
                    <h2 className={`status ${error ? 'error' : ''}`}>{`${error ? 'Error!!!' : 'Success!!!'}`}</h2>
                    <p className="result">{error ? errorMsg : `Result= ${result}`}</p>
                    </div>
            }
        </div>
    )
}
export default Calculator;