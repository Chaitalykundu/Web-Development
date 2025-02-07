# Overview

- [Overview](#overview)
- [Difference between var, let and const](#difference-between-var-let-and-const)

&nbsp;

&nbsp;

&nbsp;

# Difference between var, let and const

| Topic                                  | var                                                                            | let                                                                                  | const                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Scope of variable                      | global                                                                         | block                                                                                | block                                                                                          |
| Can be updated                         | yes                                                                            | yes                                                                                  | no                                                                                             |
| Can be redeclared                      | yes                                                                            | no                                                                                   | no                                                                                             |
| declared without initialization        | It can be declared without initialization.                                     | It can be declared without initialization.                                           | It can not be declared without initialization.                                                 |
| Can be accessed without initialization | It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’ | It cannot be accessed without initialization, as it cannot be declared without initialization. |
| Hoisting                               | hoisting done, with initializing as ‘default’ value                            | Hoisting is done, but not initialized                                                | Hoisting is done, but not initialized                                                          |
|                                        |                                                                                |                                                                                      |
