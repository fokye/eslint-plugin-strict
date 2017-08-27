# ESLint-plugin-Strict

Strict linting rules for ESLint.

## Installation

We recommend installing `eslint` and `@phryg1an/eslint-plugin-strict` locally within your project:

```sh
# Install eslint if it is not already installed.
$ yarn add --dev eslint

# Install this plugin.
$ yarn add --dev @phryg1an/eslint-plugin-strict
```

## Configuration

Within your ESLint configuration file (e.g: **.eslintrc.json**), add an entry to the "plugins" section:

```json
{
  "plugins": [
    "@phryg1an/eslint-plugin-strict"
  ]
}
```

### Shareable Configurations

#### Recommended

The `recommended` configuration enforces a significant subset of the core non-stylistic rules listed at [ESLint: Rules](https://eslint.org/docs/rules/), covering the "Possible Errors", "Best Practices", "Variables", and "ECMAScript 6" sections. It is highly recommended to use this *in conjunction with* the `eslint:recommended` configuration provided natively by ESLint, as this configuration *does not include* those rules.

To use this configuration, add an entry to your ESLint configuration's `extends` section:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@phryg1an/eslint-plugin-strict/recommended"
  ]
}
```

#### Style

The `style` configuration enforces a set of stylistic conventions using the core rules described at [ESLint: Rules: Stylistic Issues](https://eslint.org/docs/rules/#stylistic-issues). These are not included in the `recommended` configuration above because some of the choices are highly subjective. We recommend using this configuration for new projects, or projects where **a convention** is desired rather than **a particular convention**, although any of the default rules provided in this configuration may be overridden in your project's `rules` section.

To use this configuration, add an entry to your ESLint configuration's `extends` section:

```json
{
  "extends": [
    "plugin:@phryg1an/eslint-plugin-strict/style"
  ]
}
```

#### Possible Errors

The `possible-errors` configuration enforces a significant subset of the core rules described at [ESLint: Rules: Possible Errors](https://eslint.org/docs/rules/#possible-errors).

To use this configuration, add an entry to your ESLint configuration's `extends` section:

```json
{
  "extends": [
    "plugin:@phryg1an/eslint-plugin-strict/possible-errors"
  ]
}
```

#### Best Practices

The `best-practices` configuration enforces a significant subset of the core rules described at [ESLint: Rules: Best Practices](https://eslint.org/docs/rules/#best-practices).

To use this configuration, add an entry to your ESLint configuration's `extends` section:

```json
{
  "extends": [
    "plugin:@phryg1an/eslint-plugin-strict/best-practices"
  ]
}
```

#### ECMAScript 6

The `es6` configuration enforces a significant subset of the core rules described at [ESLint: Rules: ECMAScript 6](https://eslint.org/docs/rules/#ecmascript-6).

To use this configuration, add an entry to your ESLint configuration's `extends` section:

```json
{
  "extends": [
    "plugin:@phryg1an/eslint-plugin-strict/es6"
  ]
}
```

#### Variables

The `variables` configuration enforces a significant subset of the core rules described at [ESLint: Rules: Variables](https://eslint.org/docs/rules/#variables).

To use this configuration, add an entry to your ESLint configuration's `extends` section:

```json
{
  "extends": [
    "plugin:@phryg1an/eslint-plugin-strict/variables"
  ]
}
```

# License

ESLint-plugin-Strict is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
