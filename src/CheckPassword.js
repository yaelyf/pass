import { useState, useEffect } from "react";

function CheckPassword(props){
    const {password, disable} = props
    const [message, setMessage] = useState('Week')

    useEffect(()=>{
        if(password.length <=2){
            setMessage("Week")
            disable(true)
        }
        else if(password.length >2 && password.length <= 6){
            setMessage("Medium")
            disable(false)
        }
        else {
            setMessage("Strong")
            disable(false)
        }
    }, [password, disable])

    return (
        <p>{message} password</p>
    );
}

export default CheckPassword;