import React, { useEffect, useState } from 'react'

const Loanform = () => {
    const [state, setState] = useState({
        purchasePrice: 0,
        downPayment: 0,
        repaymentTime: 0,
        interestRate: 9
    });
    const [loanAmt, setLoanAmt] = useState(0);
    // const handleInputChange = event => {
    //     const { name, value } = event.target
    function handleInputChange(evt) {
        const { name, value } = evt.target
        setState({
            ...state,
            [name]: value
        });
    }
    const handleSubmit = event => {
         event.preventDefault();
        setLoanAmt(state.purchasePrice - state.downPayment);
       
    }

    // useEffect(() => {
    //     alert(loanAmt);
    // //     const { name, value } = event.target
    // }, [loanAmt])

    
    return (
        <>
            <div>Loanform</div>
            <form
                onSubmit= {handleSubmit}
            >
                <label>purchasePrice</label>
                <input type="number" name="purchasePrice" value={state.purchasePrice} onChange={handleInputChange} />
                <label>downPayment</label>
                <input type="number" name="downPayment" value={state.downPayment} onChange={handleInputChange} />
                <button>Calculate</button>
                {loanAmt}
            </form>
        </>
    )
}




export default Loanform;

