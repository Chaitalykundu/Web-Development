import React from 'react'

function ChildComponent(props) {
    return (
      <div>
        <p>I'm the 2nd child! I am {props.person.name} with id {props.person.id} and size {props.size}</p> 
      </div>
    )
}


export default ChildComponent;