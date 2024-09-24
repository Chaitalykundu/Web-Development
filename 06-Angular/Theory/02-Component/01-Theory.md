# Overview

- [Components](#components)
- [Why Components](#why-components)
- [Create component](#create-component)
- [Folder Structure](#folder-structure)
- [The Updated Files](#the-updated-files)
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

Angular CLI simplifies the process of creating components and other angular features.

&nbsp;

&nbsp;

# Why Components

Components allow to break down application into small, reusable pieces, which can be used across our app to create a dynamic and scalable user interface.

&nbsp;

&nbsp;

# Create Component

We can create component using any of the followings command

> `ng generate component component_name`

> `ng g c component_name`

&nbsp;

&nbsp;

# Folder Structure

When we generate a new component using angular CLI, it creates 4 files.

- **<u>component_name.component.html</u>**: The HTML template file **UI** is defined.

- **<u>component_name.component.css</u>**: The Css file where **styles** for the component is defined.

- **<u>component_name.component.ts</u>**: The typescript file where the component class is defined. It contains teh **logic** and properties for the component

- **<u>component_name.spec.ts</u>**: The test file for writing unit **tests** related to this component.

&nbsp;

&nbsp;

# The Updated Files

When we generate a new component using angular CLI, it updates `app.module.ts` file automatically.

It automatically declare the new component in the root module `app.module.ts`.

It adds **import** statement for the component and includes it in the **declaration array**

&nbsp;

&nbsp;

# Defining a Component

Every component has the following core properties:

- A <u>**@Component decorator**</u> that contains some configuration
- An <u>**HTML template**</u> that controls what renders into the DOM
- A <u>**CSS selector**</u> that defines how the component is used in HTML
- A <u>**TypeScript class**</u> with behaviors such as managing state, handling user input, or fetching data from a server.

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
