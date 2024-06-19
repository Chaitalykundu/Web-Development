# Overview

- Variables in Postman
- Set the "baseUrl" variable
- Where are my variables
- Initial Value
- Current Value

&nbsp;

&nbsp;

&nbsp;

# Variables in Postman

Postman allows you to save values as variables to reuse them and easily hide sensitive information like API Keys.

We will use a variable to replace our base URL so that we don't have to type that repeatedly. Once a variable is defined, you can access its value using double curly brace syntax like this: {{variableName}}

&nbsp;

&nbsp;

# Set the "baseUrl" variable

In Postman, you can quickly create a variable by selecting text.

1. Go to the **"get books"** request in your collection.

2. With your cursor, select the entire base URL of the API `https://library-api.postmanlabs.com`. Do not include the `slash /` after `.com`.

3. Double tap on URL. Click **"Set as variable"** to save the base URL to a variable.

&nbsp;

<img src="../assets/Variables-in-postman/set-as-variable.png">

&nbsp;

4. Click **"Set as a new variable"**.

<img src="../assets/Variables-in-postman/select-option.png">

&nbsp;

5. Name your new variable **"baseUrl"** and select **"Collection"** as the scope, then click Set variable.

&nbsp;

Now that the variable is set, you can access the value anywhere in your collection by typing {{baseUrl}}

Hover over **{{baseUrl}}**. You will see its current value is set to `https://library-api.postmanlabs.com`

Please **save and send the request**; it will work exactly like before! You should get a status 200 OK response with a list of books.

&nbsp;

&nbsp;

# Where are my variables

You can find Collection variables in your collection.

Click on your collection, then the **Variables** tab. Here you can view and edit your variables

&nbsp;

<img src="../assets/Variables-in-postman/collection-of-variables.png">

&nbsp;

&nbsp;

# Initial Value

The value initially set when someone forks or imports your collection. Note that if you share your collection with others, they will see this value, so don't put any secrets here!

# Current Value

Postman always resolves the variable to this value. This is local to your Postman account, and not public. It is good to keep secrets like API Keys ONLY in this column and not include them in the Initial Value column.

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
