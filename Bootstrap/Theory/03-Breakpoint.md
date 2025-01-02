# Overview

- [Overview](#overview)
- [Breakpoint](#breakpoint)
- [Example](#example)
- [Core concepts](#core-concepts)

&nbsp;

&nbsp;

&nbsp;

# Breakpoint

Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap

&nbsp;

&nbsp;

Bootstrap works on 6 screens.

| Breakpoint        | Class infix | Dimensions |
| ----------------- | ----------- | ---------- |
| Extra small       | None        | <576px     |
| Small             | sm          | ≥576px     |
| Medium            | md          | ≥768px     |
| Large             | lg          | ≥992px     |
| Extra large       | xl          | ≥1200px    |
| Extra extra large | xxl         | ≥1400px    |
|                   |             |            |

&nbsp;

- Mobile - Extra small
- Tablet - sm, md
- Laptop - lg, xl, xxl

&nbsp;

&nbsp;

# Example

```html
<h1 class="text-sm-end text-lg-center">Welcome to Bootstrap</h1>
```

Here, if the screen breakpoint is small (sm) or bigger but less than large(lg), the heading will aligned at the end most corner (right).

And if the screen breakpoint is large (lg) or bigger, the heading will aligned center.

&nbsp;

&nbsp;

# Core concepts

- Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.

- Use media queries to architect your CSS by breakpoint.

- Mobile first, responsive design is the goal.
