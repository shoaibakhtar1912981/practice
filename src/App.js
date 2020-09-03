import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person';
z
const app = props =>  {
   useState()
{
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <button onCli ck={this.switchNameHandler}>switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies:playing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <p>This is really workingms</p>
        </div>
    );
  }
}
event.target.value
export default app;

state = {
  person: [
    {name:"Max",age:50},
    {name:"Manu",age:56},
    {name:"shoaib",age:15}

  ]
}

switchNameHandler = () => {
  // console.log('it was clicked')
  this.setState({
    person: [
      {name:"Maxmillian",age:50},
      {name:"Manu",age:56},
      {name:"shoaibakhtar",age:15}

    ]
  })
}