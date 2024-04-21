# 1. What are the Difference Between String `indexOf()` and String `search()`

```md
The `indexOf()` method cannot search against a regular expression.

The `search()` cannot take a start position argument.
```

&nbsp;

&nbsp;

# 2.Why do we use functions?

```md
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.
```

&nbsp;

&nbsp;

# 3. What are the ways to empty an array?

1. Assigning to it in a new empty array :

   ```js
   let a = [1, 2, 3];
   console.log(b); // [1,2,3]

   let b = [];
   b = a;
   console.log(b); // []
   ```

   when the value `a` is assigned to an empty array `b`, the array `a` will also be empty. This is the fastest way to empty an aray.

2. Using splice :

   ```js
   a.splice(0, a.length());
   ```

   The `splice()` method removed all the elements of the array and returned the removed element as an array

3. Setting the length to zero :
   ```js
   a.length = 0;
   ```
4. Using pop() method :

   ```js
   while (a.length > 0) {
     a.pop();
   }
   ```

   This is relatively straightforward, but may not be the most performant solution among the other methods.

&nbsp;

&nbsp;

# 4. What is the difference between console.log, alert() and document.write()

`console.log` is mainly used to debug the code.

Syntax : `console.log("Hello world")`

&nbsp;

`alert()` method displays an alert box over the current window with specified message.

Syntax : `alert("Hello World")`

&nbsp;

`document.write()` is used when you want to print the content to the HTML document.

Syntax : `document.write("Hello world)`

&nbsp;

&nbsp;

# 5. What is Node?

Node is a CPP programming language where we can add js functionalities.

&nbsp;

&nbsp;

# 6. Is JS a Client-Side or Server-Side Language?

Client-side

&nbsp;

&nbsp;

# 7. Why do we avoid to use var?


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
