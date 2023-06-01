- HTML colors are specified with predefined **_color names_**, or with **_RGB, HEX, HSL, RGBA, or HSLA values_**.

&nbsp;

&nbsp;

# Color Names

- In HTML, a color can be specified by using a color name

- Example : Tomato, Orange, DodgerBlue, MediumSeaGreen, Gray, SlateBlue, Violet, LightGray

&nbsp;

## Background Color

```html
<h1 style="background-color:DodgerBlue;">Hello World</h1>
```

<h1 style="background-color:DodgerBlue;">Hello World</h1>

&nbsp;

## Text Color

```html
<h1 style="color:Tomato;">Hello World</h1>
```

<h1 style="color:Tomato;">Hello World</h1>

&nbsp;

## Border Color

```html
<h1 style="border:2px solid Tomato;">Hello World</h1>
```

<h1 style="border:2px solid Tomato;">Hello World</h1>

&nbsp;

&nbsp;

# Color Values

- In HTML, colors can also be specified using **_RGB values, HEX values, HSL values, RGBA values,_** and **_HSLA values_**.

&nbsp;

&nbsp;

# RGB values

- An RGB color value represents RED, GREEN, and BLUE light sources.

* rgb(red, green, blue)

* Each parameter (red, green, and blue) defines the intensity of the color with a value between `0 and 255`.

* This means that there are 256 x 256 x 256 = 16777216 possible colors!

```html
<h1 style="background-color:rgb(255, 99, 71);">Hello World</h1>
```

<h1 style="background-color:rgb(255, 99, 71);">Hello World</h1>

&nbsp;

# RGBA values

- RGBA color values are an extension of RGB color values with an Alpha channel - which specifies the opacity for a color.

* rgba(red, green, blue, alpha)

* The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)

```html
<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
```

<h1 style="background-color:rgba(255, 99, 71, 0.5);">Hello World</h1>

&nbsp;

# HEX values

- A hexadecimal color is specified with: `#RRGGBB`, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.

* rr (red), gg (green) and bb (blue) are hexadecimal values between `00 and ff`

```html
<h1 style="background-color:#ff6347;">Hello World</h1>
```

<h1 style="background-color:#ff6347;">Hello World</h1>

&nbsp;

# HSL values

- HSL stands for hue, saturation, and lightness.

* hsl(hue, saturation, lightness)

  - **Hue** is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

  - **Saturation** is a percentage value. 0% means a shade of gray, and 100% is the full color.

  - **Lightness** is also a percentage value. 0% is black, and 100% is white.

```html
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>
```

<h1 style="background-color:hsl(9, 100%, 64%);">Hello World</h1>

# Saturation

- Saturation can be described as the intensity of a color.

* 100% is pure color, no shades of gray.
* 50% is 50% gray, but you can still see the color.
* 0% is completely gray; you can no longer see the color.

# Lightness

- The lightness of a color can be described as how much light you want to give the color.

* 0% means no light (black)
* 50% means 50% light (neither dark nor light),
* 100% means full lightness (white).

&nbsp;

# HSLA values

- HSLA color values are an extension of HSL color values, with an Alpha channel - which specifies the opacity for a color.

- hsla(hue, saturation, lightness, alpha)

- The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)

```html
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">Hello World</h1>
