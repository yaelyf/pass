import './App.css';
import { useState } from 'react';
import CheckPassword from './CheckPassword';


function App() {
  const [password, setPassword] = useState("")
  const [disableSubmit, setDisableSubmit] = useState(true)

  function handlePassword(event){
    setPassword(String(event.target.value))
  }

  return (
    <div className="App">
        <h1>Enter new password:</h1>
        <input type = "password" value = {password} onChange = {handlePassword}></input>
        <button disabled = {disableSubmit}>Submit!</button>
        <CheckPassword password = {password} prevent = {setDisableSubmit}></CheckPassword>
    </div>
  );
}

export default App;
