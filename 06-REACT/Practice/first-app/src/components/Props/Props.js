import React from 'react'
import ChildComponent from './ChildComponent'
import ChildComponent2 from './ChildComponent2'

export default function ParentComponent() {
  return (
    <div>

    <h1>Props</h1>
      Hello, I am Parent Component

 {/* Rendering child component and passing props 'text' */}      
 <ChildComponent text='I am the first child component'/>

 {/* Rendering second child component and passing props 'person' (an object) and 'size' (a number) */}
 <ChildComponent2 person={{ name: 'Lin Lanying', id: '1bX5QH6' }}
      size={100} />
    </div>
  )
}
