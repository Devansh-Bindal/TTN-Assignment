import React from 'react';
const Child = (props) => {
   return (
    <button onClick={ () => { props.updateX({ x: props.x*2 }) } } > Click Me </button>
  )
}


export default Child;
