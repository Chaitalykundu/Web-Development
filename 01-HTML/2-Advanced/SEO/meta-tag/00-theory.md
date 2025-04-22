# Overview

- Definition and Usage
- Attributes
- Global Attributes
- Examples
- Setting the Viewport

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `<meta>` tag defines metadata about an HTML document. **Metadata is data (information) about data**.

&nbsp;

`<meta>` tags always go inside the `<head>` element, and are typically used to specify **character set, page description, keywords, author of the document,** and **viewport settings**.

&nbsp;

Metadata will not be displayed on the page, but is machine parsable.

&nbsp;

Metadata is used by **browsers** (how to display content or reload page), **search engines** (keywords), and other web services.

&nbsp;

There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the `<meta>` tag.

&nbsp;

&nbsp;

&nbsp;

# Attributes

| Attribute  | Value                                                                | Description                                                                |
| ---------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| charset    | character_set                                                        | Specifies the character encoding for the HTML document                     |
| content    | text                                                                 | Specifies the value associated with the http-equiv or name attribute       |
| http-equiv | content-security-policy, content-type, default-style, refresh        | Provides an HTTP header for the information/value of the content attribute |
| name       | application-name, author, description, generator, keywords, viewport | Specifies a name for the metadata                                          |
|            |                                                                      |                                                                            |

&nbsp;

&nbsp;

# Values

| Value                    | Syntax                                                                                    | Description                                                                                                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description              | `<meta name="description" content="A description of the page">`                           | Use this tag to provide a short description of the page.                                                                                                                                                   |
| robots and googlebot     | `<meta name="robots" content="..., ...">` or `<meta name="googlebot" content="..., ...">` | These meta tags control the behavior of search engine crawling and indexing. The <meta name="robots" ... tag applies to all search engines, while the <meta name="googlebot ... tag is specific to Google. |
| nositelinkssearchbox     | `<meta name="google" content="nositelinkssearchbox">`                                     | When users search for your site, Google Search results sometimes display a search box specific to your site, along with other direct links to your site.                                                   |
| notranslate              | `<meta name="googlebot" content="notranslate">`                                           | This meta tag tells Google that you don't want us to provide a translation for this page.                                                                                                                  |
| nopagereadaloud          | `<meta name="google" content="nopagereadaloud">`                                          | Prevents various Google text-to-speech services from reading aloud web pages using text-to-speech (TTS).                                                                                                   |
| google-site-verification | `<meta name="google-site-verification" content="...">`                                    |                                                                                                                                                                                                            |
|                          |                                                                                           |                                                                                                                                                                                                            |

&nbsp;

&nbsp;

# Global Attributes

The `<meta>` tag supports the Global Attributes in HTML.

&nbsp;

&nbsp;

# Examples

### Define **keywords** for search engines

```html
<meta name="keywords" content="HTML, CSS, JavaScript" />
```

&nbsp;

### Define a **description** of your web page

```html
<meta name="description" content="Free Web tutorials for HTML and CSS" />
```

&nbsp;

### Define the **author** of a page

```html
<meta name="author" content="John Doe" />
```

&nbsp;

### **Refresh document** every 30 seconds

```html
<meta http-equiv="refresh" content="30" />
```

&nbsp;

### Setting the **viewport** to make your website look good on all devices

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

&nbsp;

&nbsp;

# Setting the Viewport

The viewport is the **user's visible area** of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.

You should include the following `<meta>` element in all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

&nbsp;

This gives the browser instructions on how to control the page's dimensions and scaling.

The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

&nbsp;
&nbsp;
