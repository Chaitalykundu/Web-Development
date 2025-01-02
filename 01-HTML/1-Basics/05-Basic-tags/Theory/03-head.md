# Overview

- [Overview](#overview)
- [head tag](#head-tag)
- [Purpose of the `<head>` Tag](#purpose-of-the-head-tag)
- [Tags Inside `<head>`](#tags-inside-head)
- [Conclusion](#conclusion)

&nbsp;

&nbsp;

&nbsp;

# head tag

The `<head>` tag contains metadata and other informations which are not directly displayed to to webpage.

It provides essential details to the browser and search engines, influencing how the page is rendered and indexed.

&nbsp;

&nbsp;

# Purpose of the `<head>` Tag

1. **_<u>Metadata Storage</u>_** : The `<head>` tag is used to include metadata about the document, such as its title, description, character encoding, and author. Metadata does not appear on the webpage but is critical for proper functionality and search engine optimization (SEO).

2. **_<u>Page Title</u>_**: The `<title>` tag inside the `<head>` defines the title of the document that appears in the browser tab and is used by search engines for indexing.

3. **_<u>Linking External Resources</u>_**: The `<head>` can include links to external resources such as:

   - CSS stylesheets (`<link>`).
   - JavaScript files (`<script>`).
   - Fonts or icons.

4. **_<u>Defining Character Encoding</u>_**: The `<meta charset="UTF-8">` tag in the `<head>` specifies the character encoding, ensuring the correct display of text, especially for special characters.

5. **_<u>SEO and Social Sharing</u>_**: `<meta>` tags provide additional information for search engines and social media platforms, such as:

   - Keywords and description for SEO (`<meta name="description">`).
   - Open Graph tags for better sharing on social media.

6. **_<u>Browser Behavior Control</u>_**: The `<head>` can include instructions to control how the browser behaves, like:

   - Preventing the page from caching.
   - Setting viewport settings for mobile responsiveness (`<meta name="viewport">`).

7. **_<u>Customizing Appearance</u>_**: Add a favicon using `<link rel="icon">`, which is displayed in the browser tab next to the page title

&nbsp;

&nbsp;

# Tags Inside `<head>`

| Tag        | Purpose                                                |
| ---------- | ------------------------------------------------------ |
| `<title>`  | Sets the page title in the browser tab.                |
| `<meta>`   | Adds metadata like description, keywords, or charset.  |
| `<link>`   | Links external resources like stylesheets or favicons. |
| `<style>`  | Embeds internal CSS styles.                            |
| `<script>` | Links external or internal JavaScript files.           |
|            |                                                        |

&nbsp;

&nbsp;

# Conclusion

The `<head>` tag is essential for configuring how the webpage behaves, how it appears in the browser, and how it is perceived by search engines and social media platforms. It ensures that your page is functional, responsive, and properly optimized.
