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
- a draw mode;
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

## Draw modes

The form now includes a draw mode selector:

- `Aléatoire`: 6 winning numbers are generated randomly
- `Fixe (1, 2, 3, 4, 5, 6)`: the winning grid is always `1, 2, 3, 4, 5, 6`

If the user enters exactly `1, 2, 3, 4, 5, 6` in fixed mode, they win.

## Force win

The [index.js](/home/mon_pc/project/github/module%20thp/index.js) file still contains:

```js
const FORCE_WIN = false;
```

If you set it to `true`, the winning numbers become identical to the player's numbers, regardless of the selected draw mode.
