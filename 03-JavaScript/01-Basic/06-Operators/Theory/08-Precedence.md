# Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

Multiplication (\*) and division (/) have higher precedence than addition (+) and subtraction (-).

&nbsp;

&nbsp;

## Operator Precedence Values

Expressions in parentheses are computed before the rest of the expression
Function are executed before the result is used in the rest of the expression

&nbsp;

| Val | Operator | Description           | Example                 |
| --- | -------- | --------------------- | ----------------------- |
| 18  | ( )      | Expression Grouping   | (100 + 50) \* 3         |
| 17  | .        | Member Of             | person.name             |
| 17  | []       | Member Of             | person["name"]          |
| 17  | ?.       | Optional Chaining     | x ?. y                  |
| 17  | ()       | Function Call         | myFunction()            |
| 17  | new      | New with Arguments    | new Date("June 5,2022") |
| 16  | new      | New without Arguments | new Date()              |

&nbsp;

# Increment Operators

Postfix increments are executed before prefix increments

| Val | Operator | Description       | Example |
| --- | -------- | ----------------- | ------- |
| 15  | ++       | Postfix Increment | i++     |
| 15  | --       | Postfix Decrement | i--     |
| 14  | ++       | Prefix Increment  | ++i     |
| 14  | --       | Prefix Decrement  | --i     |

&nbsp;

# NOT Operators

| Val | Operator | Description | Example |
| --- | -------- | ----------- | ------- |
| 14  | !        | Logical NOT | !(x==y) |
| 14  | ~        | Bitwise NOT | ~x      |

&nbsp;

# Unary Operators

| Val | Operator | Description     | Example            |
| --- | -------- | --------------- | ------------------ |
| 14  | +        | Unary Plus      | +x                 |
| 14  | -        | Unary Minus     | -x                 |
| 14  | typeof   | Data Type       | typeof x           |
| 14  | void     | Evaluate Void   | void(0)            |
| 14  | delete   | Property Delete | delete myCar.color |

&nbsp;

# Arithmetic Operators

Exponentiations are executed before multiplications
Multiplications and divisions are executed before additions and subtractions

| Val | Operator | Description        | Example        |
| --- | -------- | ------------------ | -------------- |
| 13  | \*\*     | Exponentiation     | 10 \*\* 2      |
| 12  | \*       | Multiplication     | 10 \* 5        |
| 12  | /        | Division           | 10 / 5         |
| 12  | %        | Division Remainder | 10 % 5         |
| 11  | +        | Addition           | 10 + 5         |
| 11  | -        | Subtraction        | 10 - 5         |
| 11  | +        | Concatenation      | "John" + "Doe" |

&nbsp;

# Shift Operators

| Val | Operator | Description            | Example |
| --- | -------- | ---------------------- | ------- |
| 10  | <<       | Shift Left             | x << 2  |
| 10  | >>       | Shift Right (signed)   | x >> 2  |
| 10  | >>>      | Shift Right (unsigned) | x >>> 2 |

&nbsp;

# Relational Operators

| Val | Operator   | Description        | Example            |
| --- | ---------- | ------------------ | ------------------ |
| 9   | in         | Property in Object | "PI" in Math       |
| 9   | instanceof | Instance of Object | x instanceof Array |

&nbsp;

# Comparison Operators

| Val | Operator | Description           | Example    |
| --- | -------- | --------------------- | ---------- |
| 9   | <        | Less than             | x < y      |
| 9   | <=       | Less than or equal    | x <= y     |
| 9   | >        | Greater than          | x > y      |
| 9   | >=       | Greater than or equal | x >= Array |
| 8   | ==       | Equal                 | x == y     |
| 8   | ===      | Strict equal          | x === y    |
| 8   | !=       | Unequal               | x != y     |
| 8   | !==      | Strict unequal        | x !== y    |

&nbsp;

# Bitwise Operators

| Val | Operator | Description | Example |
| --- | -------- | ----------- | ------- |
| 7   | &        | Bitwise AND | x & y   |
| 6   | ^        | Bitwise XOR | x ^ y   |
| 5   | \|       | Bitwise OR  | x \| y  |

&nbsp;

# Logical Operators

| Val | Operator | Description        | Example  |
| --- | -------- | ------------------ | -------- |
| 4   | &&       | Logical AND        | x && y   |
| 3   | \|\|     | Logical OR         | x \|\| y |
| 3   | ??       | Nullish Coalescing | x ?? y   |

&nbsp;

# Conditional (ternary) Operator

| Val | Operator | Description | Example        |
| --- | -------- | ----------- | -------------- |
| 2   | ? :      | Condition   | ? "yes" : "no" |

&nbsp;

# Assignment Operators

Assignments are executed after other operations

| Val | Operator | Description               | Example   |
| --- | -------- | ------------------------- | --------- |
| 2   | =        | Simple Assignment         | x = y     |
| 2   | :        | Colon Assignment          | x: 5      |
| 2   | +=       | Addition Assignment       | x += y    |
| 2   | -=       | Subtraction Assignment    | x -= y    |
| 2   | \*=      | Multiplication Assignment | x \*= y   |
| 2   | \*\*=    | Exponentiation Assignment | x \*\*= y |
| 2   | /=       | Division Assignment       | x /= y    |
| 2   | %=       | Remainder Assignment      | x %= y    |
| 2   | <<=      | Left Shift Assignment     | x <<= y   |
| 2   | >>=      | Right Shift Assignment    | x >>= y   |
| 2   | >>>=     | Unsigned Right Shift      | x >>>= y  |
| 2   | &=       | Bitwise AND Assignment    | x &= y    |
| 2   | \|=      | Bitwise OR Assignment     | x \|= y   |
| 2   | ^=       | Bitwise XOR Assignment    | x ^= y    |
| 2   | &&=      | Logical AND Assignment    | x &= y    |
| 2   | \|\|=    | Logical OR Assignment     | x \|\|= y |
| 2   | =>       | Arrow                     | x => y    |
| 2   | yield    | Pause / Resume            | yield x   |
| 2   | yield\*  | Delegate                  | yield\* x |
| 2   | ...      | Spread                    | ... x     |
| 1   | ,        | Comma                     | x , y     |
