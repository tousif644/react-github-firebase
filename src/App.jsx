import "./App.css";
import app from "./firebase.init";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  const provider = new GithubAuthProvider();

  // Handle Sign in
  const handleGithubSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <div className="App">
    <button onClick={handleGithubSignIn}>Github Sign in</button>
    <h2>Your Github Name is : {user.displayName}</h2>
    <p>I know your email address : {user.email} </p>
    <img src={user.photoURL} alt="" style={{borderRadius:"5px"}}/>
  </div>
}

export default App;
