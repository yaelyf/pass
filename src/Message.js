import { useState } from "react";
import { useEffect } from "react";

function Message(props){
    const [password, checkPassword, setDisable] = props
    const [message, setMessage] = useState()

    useEffect(()=>{
        if(password.length > 6){
            setMessage("strong")
            setDisable(false)
        }
        else if(password.length > 2){
            setMessage("medium")
            setDisable(false)
        }
        else if(password.length > 0){
            setMessage("weak")
            setDisable(true)
        }
        else setMessage("empty")

    }, [checkPassword, password, setDisable])
    

    return(
        <div>
            <h1>Password is {message}</h1>
        </div>
    )
}

export default Message;