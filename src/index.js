import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/appHeader';
import SearchInput from './components/searchInput';
import TodoList from './components/todo';
import img from "https://avatars.githubusercontent.com/u/69717101?v=4"


const App = () => { 
  const isLoggedIn = false;
  const loginBox = <span>Login Box</span>
  const welcomeBox = <span>Welcome </span>


  return (
    <div>
      {isLoggedIn ? welcomeBox : loginBox}
   <AppHeader />
      <SearchInput />
      <TodoList />
      <img src={img} alt="img"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);