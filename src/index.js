import React from 'react';
import ReactDOM from 'react-dom';

const SearchInput = () => {

   return   <input 
   type={"text"} 
   placeholder={"example you will do"}
   />   

}

const TodoList = () => {
  return  (  
  <div> 
      <ul>
        <li>React O'rganish {console.log("Hello")} </li> 
        <li>Build aweosme App</li>
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