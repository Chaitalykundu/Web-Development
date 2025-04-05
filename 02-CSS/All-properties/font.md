The `font` property is a shorthand property for:

- font-style
- font-variant
- font-weight
- font-size
- line-height
- font-family

The `font-size` and `font-family` values are required. If one of the other values is missing, their default value are used.

&nbsp;

# Note

The `line-height` property sets the space between lines.

&nbsp;

The font property may be specified as either **_a single keyword_**, which will select a system font, or as **_a shorthand_** for various font-related properties.

&nbsp;

## If font is specified as a system keyword,

it must be one of: `caption`, `icon`, `menu`, `message-box`, `small-caption`, `status-bar`.

&nbsp;

## If font is specified as a shorthand for several font-related properties, then:

- it must include values for:

  - `<font-size>`
  - `<font-family>`

- it may optionally include values for:

  - `<font-style>`
  - `<font-variant>`
  - `<font-weight>`
  - `<font-stretch>`
  - `<line-height>`

&nbsp;

- `font-style`, `font-variant` and `font-weight` must precede font-size
- `font-variant` may only specify the values defined in CSS 2.1, that is normal and small-caps
- `font-stretch` may only be a single keyword value.
- `line-height` must immediately follow `font-size`, preceded by "/", like this: "16px/3"
- `font-family` must be the last value specified.

&nbsp;

&nbsp;

# Syntax

```css
font: font-style font-variant font-weight font-size/line-height
  font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;
```

&nbsp;

&nbsp;

# Example

Set some font properties with the shorthand declaration:

```css
p.a {
  font:
    15px Arial,
    sans-serif;
}

p.b {
  font:
    italic small-caps bold 12px/30px Georgia,
    serif;
}
```

&nbsp;

&nbsp;

|                    |                                                                  |
| ------------------ | ---------------------------------------------------------------- |
| Inherited:         | yes                                                              |
| Animation type:    | yes                                                              |
| Version:           | CSS1                                                             |
| JavaScript syntax: | object.style.font="italic small-caps bold 12px arial,sans-serif" |
|                    |                                                                  |

&nbsp;

&nbsp;

# Property Values

| Properties    | description                                                                        | Default value          |
| ------------- | ---------------------------------------------------------------------------------- | ---------------------- |
| font-style    | Specifies the font style                                                           | normal                 |
| font-variant  | Specifies the font variant                                                         | normal                 |
| font-weight   | Specifies the font weight.                                                         | normal                 |
| font-size     | Specifies the font size                                                            | normal                 |
| line-height   | Specifies the line-height.                                                         | normal                 |
| font-family   | Specifies the font family.                                                         | depends on the browser |
| caption       | Uses the font that are used by captioned controls (like buttons, drop-downs, etc.) |
| icon          | Uses the font that are used by icon labels                                         |
| menu          | Uses the fonts that are used by dropdown menus                                     |
| message-box   | Uses the fonts that are used by dialog boxes                                       |
| small-caption | A smaller version of the caption font                                              |
| status-bar    | Uses the fonts that are used by the status bar                                     |
| initial       | Sets this property to its default value.                                           |
| inherit       | Inherits this property from its parent element                                     |
|               |                                                                                    |

&nbsp;

&nbsp;

# System font values

## caption

The system font used for captioned controls (e.g., buttons, drop-downs, etc.).

&nbsp;

## icon

The system font used to label icons.

&nbsp;

## menu

The system font used in menus (e.g., dropdown menus and menu lists).

&nbsp;

## message-box

The system font used in dialog boxes.

&nbsp;

## small-caption

The system font used for labeling small controls.

&nbsp;

## status-bar

The system font used in window status bars.

&nbsp;

&nbsp;

# Prefixed system font keywords

Browsers often implement several more, prefixed, keywords: Gecko implements `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list`, and `-moz-field`
