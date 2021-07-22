import React from 'react';
import ReactDOM from 'react-dom';

const SearchInput = () => {

   return   <input 
   type={"text"} 
   placeholder={"example you will do"}
   />   

}

const TodoList = () => {
  const data = ["Learn React", "Build awesome App"]

  const data2 = <li>Drink Coffe</li>

  return  (  
  <div> 
      <ul>
        <li>{data[0]} </li> 
        <li>{data[1]}</li>
       {data2}
      </ul>
  </div>
  )
}
const AppHeader = () => {
  return (
<h1>My Todo App</h1>
    
  )
}
const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchInput />
      <TodoList />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);