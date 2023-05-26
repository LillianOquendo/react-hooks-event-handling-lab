import React from "react";


// Code Keypad Component Here

function Keypad (){
    function handleChange() {
        console.log("Entering password...");
    }

    return (
        <div>
            <input 
                type="password"
                onChange={handleChange} 
                placeholder='Input here...'
            />
           
        </div>
    )
}

export default Keypad;