- We can use any of the following code to centerize the contents

  ```css
  width: 30%;
  margin: auto;
  max-width: 350px;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  ```

  Or

  ```css
  width: 30%;
  margin: auto;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ```

- If we use the above code to `card` class instead of `container`, then all the elements will be inline

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Form

## What I did

```css
input,
.notify-me-btn {
  display: block;
  width: 90%;
}
```

## What I learn

```css
form {
  display: flex;
  flex-direction: column;
}
```

No need to do anything in input
