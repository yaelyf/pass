import './App.css';
import { useState } from 'react';
import Message from './Message';


function App() {
  const [password, setPassword] = useState("")
  const [disable, setDisable] = useState(true)

  function handlePassword(e){
    setPassword(String(e.target.value))
  }

  return (
    <div className="App">
      <p>
        <input type="password" value = {password} onChange = {handlePassword}></input>
        <button disabled = {disable}>Submit!</button>
        <Message password = {password} checkPassword = {handlePassword} setPassword = {setPassword} setDisable = {setDisable}/> 
      </p>
    </div>
  );
}

export default App;
