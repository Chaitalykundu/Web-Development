<https://legacy.reactjs.org/docs/components-and-props.html>

consider this `Comment` component:

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

Props : author, text, date

### Split code for `author` component

```js
function Author(props) {
  return (
    <div className="UserInfo">
      <img
        className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}
```

&nbsp;

### Split code for `text` component

```js
function Text(props) {
  return <div className="Comment-text">{props.text}</div>;
}
```

&nbsp;

### Split code for `date` component

```js
function Date(props) {
  return <div className="Comment-date">{formatDate(props.date)}</div>;
}
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
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
