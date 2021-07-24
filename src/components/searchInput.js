import React from 'react'

const SearchInput = () => {

    const searchText = "type here to search..."
    const style = {
      backgroundColor: "red",
      Color: "white"
    }
  
     return   <input 
     type={"text"} 
     placeholder={searchText}
     className={"some"}
     style={style}
     />   
  
  }
  

  export default SearchInput