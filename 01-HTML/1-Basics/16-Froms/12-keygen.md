- The HTML `<keygen>` tag is used to process Web forms with certificate management systems.

- The element generates a secure key and submits the public key.

&nbsp;

&nbsp;

# Syntax

```html
<form action="/form/submit" method="get">
      <keygen name="rsaPublicKey" keytype="RSA">
        User’s name:
        <input type="text" name="usr_name">
        <input type="submit">
</form>
```

&nbsp;

&nbsp;

# Tag-specific attributes:

| Attribute | Value         | Description                                                                                                                                                                                                                           |
| --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autofocus | autofocus     | Specifies that when the page loads the `<keygen>` element automatically gets focus.                                                                                                                                                   |
| challenge | challenge     | Specifies the challenge string to be packaged with the public key in the PublicKeyAndChallenge for use in verification of the form submission. If no challenge string is provided, then it is encoded as an IA5STRING of length zero. |
| disabled  | disabled      | Specifies that `<keygen>` element should be disabled.                                                                                                                                                                                 |
| form      | form_id       | Specifies one or more forms.                                                                                                                                                                                                          |
| keytype   | rsa , dsa, ec | Specifies the secret algorithm which is for the key.                                                                                                                                                                                  |
| name      | autofocus     | Specifies a name.                                                                                                                                                                                                                     |

&nbsp;

&nbsp;
