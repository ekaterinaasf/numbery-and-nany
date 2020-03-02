# Numbery & NaNy

> Create a website that sorts user-provided strings into two categories, _NaNy_ and _Numbery_. It should look like a prettier version of this:

> ![screenshot](./screenshot.png)

> Further specifications:
>
> - If a user inputs the same value twice, you should not save it in your app. Your lists should never have repeated values
> - After a user has removed a value from your state, they should be able to add it again.

> Be sure to organize your code and structure your development strategy! You can study the [example projects](https://github.com/HackYourFutureBelgium/state/tree/master/example-projects) from this module's repo for an idea of how to do this.

> And don't forget to rewrite this README to describe your project :) Check out these articles to learn more about writing a good README: [makeareadme.com](https://www.makeareadme.com/), [bulldogjob](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project), [meakaakka](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

## DOM

| tag name    | attributes                             | role                                                                           |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------ |
| `<section>` | `id="user-interface" class="centered"` | the section that contains all user interface elements                          |
| `<input>`   | `id="input" type="text" value=""`      | the value for user to input                                                    |
| `<button>`  | `id='save'`                            | button to save current state and verify if the input value _NaNy_ or _Numbery_ |
| `<button>`  | `id='remove'`                          | button to remove value from the list                                           |
| `<div>`     | `class='left'`, `class='right'`        | block with 2 output column values                                              |
| `<ul>`      | `id='numbery'`                         | list to show _Numbery_ values                                                  |
| `<ul>`      | `id='nany'`                            | list to show _Nany_ values                                                     |
| `<button>`  | `id="reset"`                           | button to reset the current value                                              |

## Styling

| class name  | description                    | role                                        |
| ----------- | ------------------------------ | ------------------------------------------- |
| `.centered` | sets position for all elements | make block of buttons more user-friendly    |
| `input`     | sets input value style         | make input value more visible               |
| `div`       | sets output list style         | make output displayed in block              |
| `.right`    | sets right column output style | make right column output value more visible |
| `.left`     | sets left column output style  | make left column output value more visible  |

## Listeners

| type      | attached to    | callback        |
| --------- | -------------- | --------------- |
| `'click'` | `id='save''`   | `saveHandler`   |
| `'click'` | `id='remove''` | `removeHandler` |
| `'click'` | `id='reset'`   | `resetHandler`  |

## Handlers

| syntax            | parameters | return value                                    | behavior                                                                                                                                                   |
| ----------------- | ---------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `saveHandler()`   | no         | Boolean: should the browser continue as normal? | reads user input save current state and verify if this input value is _NaNy_ or _Numbery_, then provide the result to the user and alerts the browser 'OK' |
| `removeHandler()` | no         | Boolean: should the browser continue as normal? | reads user input and verify it input value is already used, then provide the result to the user, logs old state and alerts the browser 'OK'                |
| `resetHandler()`  | no         | Boolean: should the browser continue as normal? | reset the user input and current saved numbers to the default state, then provide the result to the user, logs old state and alerts the browser 'OK'       |
