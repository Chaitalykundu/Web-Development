# Overview

- Similarities between slice() and substring() methods
- Differences between slice() and substring() and substr() methods

&nbsp;

&nbsp;

# Similarities between slice() and substring() methods

- If start == stop, both return an empty string

- If the stop is omitted, both extracts characters till the end of the string

- If any argument is greater than the string’s length, the string’s length will be used in that case.

&nbsp;

&nbsp;

# Differences between slice() and substring() and substr() methods

| Topic                                 | slice()                                                                 | substring()                                                                       | substr()                                                                                                                            | Remark                             |
| ------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Syntax                                | string.slice(start,end)                                                 | string.substring(start,end)                                                       | string.substr(start,length)                                                                                                         | slice()==substring()               |
| What it does                          | It extracts a part of the string                                        | It extracts substring of a string and returns the extracted parts in a new string | It extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters | slice()==substring()               |
| Using Negative Numbers as an Argument | It selects characters starting from the end of the string               | It considers the whole string                                                     | It selects characters starting from the end of the string                                                                           | slice()==substr()                  |
| If start > end                        | This function will return an empty string. (“”)                         | The function swaps both arguments and perform as usual                            | since the Second Argument is NOT a position, but length value, it will perform as usual, with no problems                           | slice() != substring() != substr() |
| if the Second Argument is Omitted     | selects all characters from the start-position to the end of the string | selects all characters from the start-position to the end of the string           | selects all characters from the start-position to the end of the string                                                             | slice() == substring() == substr() |
|                                       |                                                                         |                                                                                   |                                                                                                                                     |                                    |
