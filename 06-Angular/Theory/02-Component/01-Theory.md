# Overview

- [Components](#components)
- [Create component](#create-component)
- [Defining a Component](#defining-a-component)
- [Configuration](#configuration)
- [Standalone components](#standalone-components)

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

# Create component

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

### Configuration

Configuration means an arrangement of parts or elements in a particular form, figure, or combination.

&nbsp;

&nbsp;

# Standalone components

Standalone components are a feature in Angular that allows developers to create components that are self-contained, reusable, and can be shared across multiple projects.

To mark a component as standalone, set `standalone: true` in its component metadata.

Standalone components can directly import other components, directives, and pipes used in their templates.

&nbsp;

**Self-contained** : Standalone components have their own dependencies, styles, and functionality.

**Reusable** : Standalone components can be used across different parts of an application or across different projects.

**Simplified development** : Standalone components simplify component development and reuse, making it easier to build and maintain large-scale applications.

**Reduced need for NgModules** : Standalone components allow developers to build and use components without the need for NgModules.

**Improved modularity** : Standalone components improve modularity, code organization, and maintainability.

**Easier lazy loading** : Standalone components make lazy loading much easier.

&nbsp;

&nbsp;

&nbsp;
