# Loto

Small vanilla JavaScript project used to validate:

- a player's personal information;
- the validity of a lotto grid;
- whether the grid is a winning one.

The project only uses:

- `index.html`
- `style.css`
- `index.js`

## Purpose

The user fills in a form with:

- a first name;
- a last name;
- an email address;
- 6 lotto numbers.

When the submit button is clicked, the form submission is intercepted with `event.preventDefault()`. The input data is then validated before comparing the player's grid with the winning numbers.

## Project structure

- [index.html](/home/mon_pc/project/github/module%20thp/index.html): page structure and form
- [style.css](/home/mon_pc/project/github/module%20thp/style.css): visual styling
- [index.js](/home/mon_pc/project/github/module%20thp/index.js): business logic and validations

## Run the project

No installation is required.

1. Open `index.html` in a browser.
2. Fill in the form.
3. Click `Valider`.

## Validation rules

### Player information

The application can display the following messages:

- `Veuillez fournir un prénom`
- `Veuillez fournir un nom`
- `Veuillez fournir un email`
- `Votre email n'est pas valide`

### Email

An email is considered valid if:

- it contains more than 8 characters;
- it contains fewer than 30 characters;
- it contains an `@`;
- it contains a dot after the `@`;
- it ends with 2 or 3 letters after the last dot.

### Lotto grid

The grid must contain exactly 6 valid numbers.

If not, the following message is displayed:

- `Veuillez fournir 6 nombres valides`

## Possible results

If the grid loses:

```txt
Désolé, vous avez perdu, les nombres gagnants sont: x1, x2, x3, x4, x5, x6
```

If the grid wins:

```txt
Félicitations, vous avez gagné 1 million!!!!!
```

## Test mode

The [index.js](/home/mon_pc/project/github/module%20thp/index.js) file currently contains these constants:

```js
const FORCE_WIN = false;
const USE_FIXED_WINNING_NUMBERS = true;
const FIXED_WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
```

### Case 1: test a win with fixed numbers

Right now, `USE_FIXED_WINNING_NUMBERS` is set to `true`.

The fixed winning grid is:

```txt
1, 2, 3, 4, 5, 6
```

If the user enters exactly these 6 numbers, they win.

### Case 2: force a win regardless of the grid

Set:

```js
const FORCE_WIN = true;
```

In that case, the winning numbers become identical to the player's numbers.

### Case 3: go back to random drawing

Set:

```js
const USE_FIXED_WINNING_NUMBERS = false;
const FORCE_WIN = false;
```

In that case, the 6 winning numbers are generated randomly.

## Current limitation

The project works, but the default behavior is currently test-oriented because `USE_FIXED_WINNING_NUMBERS` is set to `true`.

If you want strict compliance with the original exercise statement, you should set:

```js
const USE_FIXED_WINNING_NUMBERS = false;
```
