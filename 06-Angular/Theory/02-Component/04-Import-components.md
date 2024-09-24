# Overview

- [Introduction](#introduction)
- [Standalone components](#standalone-components)
  - [Example](#example)
  - [Features of Standalone components](#features-of-standalone-components)

&nbsp;

&nbsp;

&nbsp;

# Introduction

Angular supports two ways of making a component available to other components:

1. as a standalone component or
2. in an NgModule.

&nbsp;

&nbsp;

# Standalone components

Standalone components are a feature in Angular that allows developers to create components that are self-contained, reusable, and can be shared across multiple projects.

A standalone component is a component that sets **`standalone: true`** in its component metadata. Standalone components directly import other components, directives, and pipes used in their templates:

Standalone components can directly import other components, directives, and pipes used in their templates.

The Angular team recommends using standalone components for all new development.

&nbsp;

&nbsp;

## Example

```ts
@Component({
  standalone: true,
  selector: "profile-photo",
})
export class ProfilePhoto {}

@Component({
  standalone: true,
  imports: [ProfilePhoto],
  template: `<profile-photo />`,
})
export class UserProfile {}
```

&nbsp;

&nbsp;

## Features of Standalone components

**Self-contained** : Standalone components have their own dependencies, styles, and functionality.

**Reusable** : Standalone components can be used across different parts of an application or across different projects.

**Simplified development** : Standalone components simplify component development and reuse, making it easier to build and maintain large-scale applications.

**Reduced need for NgModules** : Standalone components allow developers to build and use components without the need for NgModules.

**Improved modularity** : Standalone components improve modularity, code organization, and maintainability.

**Easier lazy loading** : Standalone components make lazy loading much easier.

&nbsp;
