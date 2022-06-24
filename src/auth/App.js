import React, {useState, useEffect} from 'react';
import fire from './fire'
//import Hero from "./Hero"
// import './App.css';
import './Login.css';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const history = useNavigate();
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = (e) =>{
    e.preventDefault()
    clearErrors();
    fire 
      .auth()
      .signInWithEmailAndPassword(email,password).then((msg)=>console.log("msg",msg)).catch((err) => {
        // eslint-disable-next-line default-case
        alert(err.code)
        switch(err.code){
         
          case "auth/invalid-email": 
          case "auth/user-disabled":           
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

const handleSignUp = (e) =>{
  e.preventDefault()
  // clearErrors();
  fire
  .auth()
  .createUserWithEmailAndPassword(email,password)
    .catch((err) => {
      // if (err.code == "auth/email-already-in-use") {
      //     alert("The email address is already in use");
      // } else if (err.code == "auth/invalid-email") {
      //     alert("The email address is not valid.");
      // } else if (err.code == "auth/operation-not-allowed") {
      //     alert("Operation not allowed.");
      // } else if (err.code == "auth/weak-password") {
      //     alert("The password is too weak.");
      // }
      // eslint-disable-next-line default-case
      alert(err.code)
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
          //  (such as timeout, interrupted connection or unreachable host) has occurred. (auth/network-request-failed).
      }
  });
}

const handleLogout = () =>{
    fire.auth().signOut();
}

const authListener = () =>{
  fire.auth().onAuthStateChanged(user => {
    if(user){
      clearInputs();
      setUser(user);
    } else {
      setUser("");
    }
  })
}

useEffect(() => {
  authListener();
}, []);

// <Hero handleLogout={handleLogout} />

  return (
    <div className="App">
    {user ? (
      history(
       { pathname:"/",
        state:{
          user: user
       }})
     ): (

      <Login 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
       />
    )}   
      
    </div>
  );
}

export default App;
