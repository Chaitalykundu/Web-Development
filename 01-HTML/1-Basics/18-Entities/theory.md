Reserved characters in HTML must be replaced with character entities.

&nbsp;

&nbsp;

# HTML Entities

Some characters are reserved in HTML.

If you use the less than `(<)` or greater than `(>)` signs in your text, the browser might mix them with tags.

&nbsp;

Character entities are used to display reserved characters in HTML.

&nbsp;

A character entity looks like this:

```md
&entity_name;

OR

&#entity_number;
```

&nbsp;
To display a less than sign (<) we must write: &lt; or &#60;

&nbsp;

# Advantage of using an entity name

An entity name is easy to remember.

&nbsp;

# Disadvantage of using an entity name

Browsers may not support all entity names, but the support for entity numbers is good.

&nbsp;

&nbsp;

# Non-breaking Space

A commonly used entity in HTML is the non-breaking space: `&nbsp;`

&nbsp;

A non-breaking space is a space that will not break into a new line.

&nbsp;

Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive.

&nbsp;

Examples:

```md
§ 10
10 km/h
10 PM
```

&nbsp;

Another common use of the non-breaking space is to prevent browsers from truncating spaces in HTML pages.

&nbsp;

If you write 10 spaces in your text, the browser will remove 9 of them. To add real spaces to your text, you can use the `&nbsp;` character entity.

&nbsp;

&nbsp;

# Some Useful HTML Character Entities

| Result | Description                        | Entity Name | Entity Number |
| ------ | ---------------------------------- | ----------- | ------------- |
|        | non-breaking space                 | `&nbsp;`    | `&#160;`      |
| <      | less than                          | `&lt;`      | `&#60;`       |
| >      | greater than                       | `&gt;`      | `&#62;`       |
| &      | ampersand                          | `&amp;`     | `&#38;`       |
| "      | double quotation mark              | `&quot;`    | `&#34;`       |
| '      | single quotation mark (apostrophe) | `&apos;`    | `&#39;`       |
| ¢      | cent                               | `&cent;`    | `&#162;`      |
| £      | pound                              | `&pound;`   | `&#163;`      |
| ¥      | yen                                | `&yen;`     | `&#165;`      |
| €      | euro                               | `&euro;`    | `&#8364;`     |
| ©     | copyright                          | `&copy;`    | `&#169;`      |
| ®     | registered trademark               | `&reg;`     | `&#174;`      |

&nbsp;

&nbsp;

# Combining Diacritical Marks

A diacritical mark is a "glyph" added to a letter.

Some diacritical marks, like `grave ( ̀)` and `acute ( ́)` are called accents.

Diacritical marks can appear both above and below a letter, inside a letter, and between two letters.

Diacritical marks can be used in combination with alphanumeric characters to produce a character that is not present in the character set (encoding) used in the page.

&nbsp;

Here are some examples:

| Mark | Character | Construct | Result |
| ---- | --------- | --------- | ------ |
| ̀     | a         | `a&#768`  | à      |
| ́     | a         | `a&#769`  | á      |
| ̂     | a         | `a&#770`  | â      |
| ̃     | a         | `a&#771`  | ã      |
| ̀     | O         | `O&#768`  | Ò      |
| ́     | O         | `O&#769`  | Ó      |
| ̂     | O         | `O&#770`  | Ô      |
| ̃     | O         | `O&#771`  | Õ      |

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
