import React from "react";
import LoginForm from "./Login";
// import Register from "./Register";

var isLoggedIn = true;
var currentHour = new Date().getHours();
console.log(currentHour);

var userIsregistered = false;


function App() {
  return (
    <div className="container">
    {/* {isLoggedIn ? <h1>Hello</h1> :<LoginForm />} */}
    {/* {currentHour >12 && <Register/>} */}
    {/* {userIsregistered ? <LoginForm /> : <Register />} */}
    <LoginForm reGistered={userIsregistered} />
    </div>
  );
}

export default App;
