# Steps to destructure objects in React

## Step 1

To group your properties within a set of curly braces.

```js
{
  img, name, description, price;
}
```

or

```js
function Product = ({ img, name, desc, price}) =>{}
```

Then you can either store it into a variable called props within the body of the function or pass it directly as the function’s parameter.

```js
function Navbar(navbar) {
    const { img, name, desc, price} = props ;
    return ()
}
```

&nbsp;

## Step 2

To receive the properties where you need them by stating the names of the properties without attaching the prefix ‘props’.

```js
return (
  <div>
    <img src={img} alt="products" />

    <h4>{name}</h4>
    <p>{description}</p>
    <h4>{price}</h4>
  </div>
);
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
