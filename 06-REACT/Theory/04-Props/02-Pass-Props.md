# Passing props to a component

We can pass props to a component in 2 ways

* Pass props to the child component
* Read props inside the child component

&nbsp;

## 1. Pass props to the child component

First, pass some props to `ChildComponent`. For example, let’s pass one props: text (a text)

```js
import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  return (
    <div>

    <h1>Props</h1>
      Hello, I am Parent Component

      {/* Rendering child component and passing props 'text' */}
      <ChildComponent text='called from parent component'/>
    </div>
  )
}
```

&nbsp;

Now you can read these props inside the `ChildComponent` component.

```js
function ChildComponent(props) {
    return (
      <div>
        <p>I'm the 1st child! I am {props.text}</p> 
      </div>
    )
}

export default ChildComponent;
```

### Another Example

First, pass some props to `ChildComponent2`. For example, let’s pass two props: person (an object), and size (a number):

```js
import React from 'react'
import ChildComponent2 from './ChildComponent2'

export default function ParentComponent() {
  return (
    <div>

    <h1>Props</h1>
      Hello, I am Parent Component


 {/* Rendering 2nd child component and passing props 'person' and 'size' */}
    <ChildComponent2 person={{ name: 'Lin Lanying', id: '1bX5QH6' }}
      size={100} />
    </div>
  )
}

```

&nbsp;

Now you can read these props inside the `ChildComponent2` component.

```js
function ChildComponent(props) {
    return (
      <div>
        <p>I'm the 2nd child! I am {props.person.name} with id {props.person.id} and size {props.size}</p> 
      </div>
    )
}

export default ChildComponent;
```

&nbsp;

&nbsp;

# 2. Read props inside the child component 

```js
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

```

&nbsp;

&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;

# Pitfall

* Don’t miss the pair of { and } curlies inside of ( and ) when declaring props:

  ```js
  function Avatar({ person, size }) {
    // ...
  }
  ```

  This syntax is called ***`“destructuring”`*** and is equivalent to reading properties from a function parameter:

  ```js
  function Avatar(props) {
    let person = props.person;
    let size = props.size;
    // ...
  }
  ```

&nbsp;

&nbsp;
