# Overview

- [Components](#components)
- [Create component](#create-component)
- [Defining a Component](#defining-a-component)
- [Configuration](#configuration)

&nbsp;

&nbsp;

&nbsp;

# Components

Components are the foundational building blocks for any Angular application.

Each component has **three** parts:

- TypeScript class
- HTML template
- CSS styles

&nbsp;

Components provide structure for organizing your project into easy-to-understand parts with clear responsibilities so that your code is maintainable and scalable.

&nbsp;

&nbsp;

# Create Component

We can create component using any of the followings command

> `ng generate component component_name`

> `ng g c component_name`

&nbsp;

&nbsp;

# Defining a Component

Every component has the following core properties:

- A **@Component decorator** that contains some configuration
- An **HTML template** that controls what renders into the DOM
- A **CSS selector** that defines how the component is used in HTML
- A **TypeScript class** with behaviors such as managing state, handling user input, or fetching data from a server.

&nbsp;

&nbsp;

Angular creates an instance of the component for every matching HTML element it encounters. The DOM element that matches a component's selector is referred to as that component's host element. The contents of a component's template are rendered inside its host element.

The DOM rendered by a component, corresponding to that component's template, is called that component's view.

&nbsp;

&nbsp;

### Configuration

Configuration means an arrangement of parts or elements in a particular form, figure, or combination.

&nbsp;

&nbsp;
