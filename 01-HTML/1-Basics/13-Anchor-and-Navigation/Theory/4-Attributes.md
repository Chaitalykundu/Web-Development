# Overview

- Anchor tag attribute
- Syntax
- href Attribute
- Example
- Detailed Anchor tag attributes

&nbsp;

&nbsp;

&nbsp;

# Anchor tag attribute

HTML `Attributes` can provide additional information about the HTML elements on your page and control their behavior

&nbsp;

&nbsp;

# Syntax

```html
<a attribute_name="value">Content</a>
```

&nbsp;

&nbsp;

# href Attribute

The most important attribute of the `<a>` element is the **_href_** attribute, which indicates the **link's destination**. In other words, the **_href_** attribute is used to **address the document to link to**.

An anchor can point to any resource on the Web: an HTML page, an image, a sound file, a movie, etc. These all are known as **external links**.

&nbsp;

# Example

```html
<a href="https://www.google.com">Visit Google</a>
```

&nbsp;

&nbsp;

# Detailed Anchor tag attributes

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Attribute</th>
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>href</td>
                <td>URL</td>
                <td>Specifies the URL as destination webpage or different section of webpage</td>
            </tr>
            <tr>
                <td>media</td>
                <td>media_query</td>
                <td>It specifies the media, for which linked source is applied</td>
            </tr>
            <tr>
                <td>hreflang</td>
                <td>language_code</td>
                <td>Specifies the text language of linked source</td>
            </tr>
            <tr>
                <td rowspan="7">referrerpolicy</td>
                <td>no-referrer</td>
                <td rowspan="7">Specifies which referrer information to send with the link</td>
            </tr>
            <tr>
                <td>no-referrer-when-downgrade </td>
            </tr>
            <tr>
                <td>origin</td>
            </tr>
            <tr>
                <td>origin-when-cross-origin</td>
            </tr>
            <tr>
                <td>same-origin</td>
            </tr>
            <tr>
                <td>strict-origin-when-cross-origin</td>
            </tr>
            <tr>
                <td>unsafe-url</td>
            </tr>
            <tr>
                <td rowspan="13">rel</td>
                <td>alternate</td>
                <td rowspan="13">Specifies the relationship between the current document and the linked document</td>
            </tr>
            <tr>
                <td>author</td>
            </tr>
            <tr>
                <td>bookmark</td>
            </tr>
            <tr>
                <td>external</td>
            </tr>
            <tr>
                <td>help</td>
            </tr>
            <tr>
                <td>license</td>
            </tr>
            <tr>
                <td>next</td>
            </tr>
            <tr>
                <td>nofollow</td>
            </tr>
            <tr>
                <td>noreferrer</td>
            </tr>
            <tr>
                <td>noopener</td>
            </tr>
            <tr>
                <td>prev</td>
            </tr>
            <tr>
                <td>search</td>
            </tr>
            <tr>
                <td>tag </td>
            </tr>
            <tr>
                <td rowspan="4">target</td>
                <td>_blank</td>
                <td>_top Specifies where to open the linked document</td>
            </tr>
            <tr>
                <td>_parent</td>
                <td>Opens the linked document in parent frame</td>
            </tr>
            <tr>
                <td>_self</td>
                <td>Opens the linked document in same frame as it was clicked</td>
            </tr>
            <tr>
                <td>_top</td>
                <td>Opens the linked document in the full body of window</td>
            </tr>
            <tr>
                <td>type</td>
                <td>media_type</td>
                <td>Specifies the media type of the linked document</td>
            </tr>
        </tbody>
    </table>
</body>
</html>

&nbsp;
&nbsp;
