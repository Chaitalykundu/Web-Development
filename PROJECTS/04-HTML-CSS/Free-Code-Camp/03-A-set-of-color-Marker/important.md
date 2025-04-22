# meta

- `utf-8` is a universal character set that includes almost every character from all human languages.

- meta elements are self-closing, and do not need a closing tag.

- You can have multiple self-closing meta elements on a web page. Each meta element adds information about the page that cannot be expressed by other HTML elements.

- `width=device-width, initial-scale=1.0` helps to look the page same on all devices.

- There are two main color models: the additive **_RGB_** (red, green, blue) model used in electronic devices, and the subtractive **_CMYK_** (cyan, magenta, yellow, black) model used in print.

- Secondary colors are the colors you get when you combine primary colors

- A color wheel is a circle where similar colors, or hues, are near each other, and different ones are further apart. For example, pure red is between the hues rose and orange.

- Two colors that are opposite from each other on the color wheel are called complementary colors. If two complementary colors are combined, they produce gray. But when they are placed side-by-side, these colors produce strong visual contrast and appear brighter.

- A gradient is when one color transitions into another. The CSS linear-gradient function lets you control the direction of the transition along a line, and which colors are used.

- the linear-gradient function actually creates an image element, and is usually paired with the background property which can accept an image as a value.

- gradientDirection is the direction of the line used for the transition. color1 and color2 are color arguments, which are the colors that will be used in the transition itself.

- Color-stops allow you to fine-tune where colors are placed along the gradient line. They are a length unit like px or percentages that follow a color in the linear-gradient function. For example, in this red-black gradient, the transition from red to black takes place at the 90% point along the gradient line, so red takes up most of the available space:

  ```css
  linear-gradient(90deg, red 90%, black);
  ```

- If no gradientDirection argument is provided to the linear-gradient function, it arranges colors from top to bottom, or along a 180 degree line, by default.

-

&nbsp;

# Secondary color

- magenta : rgb(255, 0, 255);

- tertiary color orange: rgb(255, 127, 0);
- tertiary color spring green:rgb(0, 255, 127);
- tertiary color violet: rgb(127, 0, 255);
- chartreuse green (green + yellow): rgb(127, 255, 0);
- azure (blue + cyan): rgb(0, 127, 255);
- and rose (red + magenta): rgb(255, 0, 127);
