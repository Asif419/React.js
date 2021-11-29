//creating component
import React from 'react'

//creating component
function Greeting() {
  
}
//---------
//index.js is a entry point

//to run a component from index.js
//this is stateless functional component

import React from 'react'
import ReactDom from 'react-dom'


//creating component
function Greeting() {
  return <h4>Hello, this is my first component</h4>
}

ReactDom.render(<Greeting></Greeting>, document.getElementById('root'));
                
//install in vs code extention: es7 react/redux
// write rafce and press tab to create component and import React automatically
                
                
// return single element
// div/section/article or fragment 
// use camelCase for html attribute
// className insted of class
// close every element
// formatting

