import "./style.css"
import React from 'react';
import ReactDOM from 'react-dom';

/*function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>YO! {formatName(user)}!</h1>;
  }
}

const user = {
  firstName: 'Pussy',
  lastName: 'Cat'
};
const element = (
  <div>
    <h3>
     Hello, {getGreeting(user)}!
    </h3>
  </div>
  );



ReactDom.render(
  element,
  document.getElementById('root')  
);*/

/*function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);*/

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App(){
  return (
    <div>
      <Welcome name="Sarah"/>
      <Welcome name="Sarah"/>
      <Welcome name="Sarah"/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

