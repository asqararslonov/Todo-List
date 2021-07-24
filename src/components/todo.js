import React from 'react'

const TodoList = () => {
    const data = ["Learn React", "Build awesome App"]
  
  
    const data2 = <li>Drink Coffe</li>
  
    return  (  
    <div> 
        <ul>
  
          <label htmlFor=""> Some </label>
  
          <li>{data[0]} </li> 
          <li>{data[1]}</li>
         {data2}
        </ul>
    </div>
    )
  }
  export default TodoList