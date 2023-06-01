# Text Direction

The `direction` and `unicode-bidi` properties can be used to change the text direction of an element.

&nbsp;

# Note

The `direction` and `unicode-bidi` properties are the only properties which are not affected by the `all` shorthand property

&nbsp;

Text Direction properties are :

- direction
- unicode-bidi

&nbsp;

&nbsp;

## Example

```css
p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

&nbsp;

&nbsp;

# Text direction Properties

| Property     | Description                                                                                                                                         | Default value |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| direction    | Specifies the text direction/writing direction                                                                                                      | ltr           |
| unicode-bidi | Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document | normal        |
