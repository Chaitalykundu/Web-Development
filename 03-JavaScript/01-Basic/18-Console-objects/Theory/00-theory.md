# Overview

- [Overview](#overview)
- [Description](#description)
- [Syntax](#syntax)
- [Console Object Methods](#console-object-methods)

&nbsp;

&nbsp;

&nbsp;

# Description

The `console object` provides access to the browser's debugging console.

It is a property of the window object.

The console object is accessed with `window.console` or just `console`

&nbsp;

# Syntax

```js
window.console.error("You made a mistake");

// or

console.error("You made a mistake");
```

&nbsp;

&nbsp;

# Console Object Methods

| Method           | Description                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| assert()         | Writes an error message to the console if a assertion is false                                                                                       |
| clear()          | Clears the console                                                                                                                                   |
| count()          | Logs the number of times that this particular call to count() has been called                                                                        |
| error()          | Outputs an error message to the console                                                                                                              |
| group()          | Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called        |
| groupCollapsed() | Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it |
| groupEnd()       | Exits the current inline group in the console                                                                                                        |
| info()           | Outputs an informational message to the console                                                                                                      |
| log()            | Outputs a message to the console                                                                                                                     |
| table()          | Displays tabular data as a table                                                                                                                     |
| time()           | Starts a timer (can track how long an operation takes)                                                                                               |
| timeEnd()        | Stops a timer that was previously started by console.time()                                                                                          |
| trace()          | Outputs a stack trace to the console                                                                                                                 |
| warn()           | Outputs a warning message to the console                                                                                                             |

&nbsp;
&nbsp;
