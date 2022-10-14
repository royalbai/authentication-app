import './App.css';
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


function App() {

  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  

  return (
    <div className="main">
      <div className="App">
        <input type={"email"} placeholder="Please enter e-mail" />
        <input type={"password"} placeholder="Please enter password" />

        <button onClick={signUp}>Create Account</button>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default App;
