module.exports = {
  "configs": {
    "possible-errors": {
      "rules": {
        "for-direction": [
          "error"
        ],
        "getter-return": [
          "error"
        ],
        "no-await-in-loop": [
          "error"
        ],
        "no-extra-parens": [
          "error",
          "all"
        ],
        "no-prototype-builtins": [
          "error"
        ],
        "no-template-curly-in-string": [
          "error"
        ],
        "valid-jsdoc": [
          "error"
        ]
      }
    },
    "best-practices": {
      "rules": {
        "accessor-pairs": [
          "error"
        ],
        "array-callback-return": [
          "error"
        ],
        "block-scoped-var": [
          "error"
        ],
        "class-methods-use-this": [
          "error"
        ],
        "complexity": [
          "error",
          5
        ],
        "consistent-return": [
          "error"
        ],
        "curly": [
          "error",
          "all"
        ],
        "default-case": [
          "error"
        ],
        "dot-notation": [
          "error"
        ],
        "eqeqeq": [
          "error",
          "always"
        ],
        "no-alert": [
          "error"
        ],
        "no-caller": [
          "error"
        ],
        "no-div-regex": [
          "error"
        ],
        "no-else-return": [
          "error"
        ],
        "no-empty-function": [
          "error"
        ],
        "no-eq-null": [
          "error"
        ],
        "no-eval": [
          "error"
        ],
        "no-extra-bind": [
          "error"
        ],
        "no-extend-native": [
          "error"
        ],
        "no-labels": [
          "error"
        ],
        "no-floating-decimal": [
          "error"
        ],
        "no-implicit-coercion": [
          "error"
        ],
        "no-implicit-globals": [
          "error"
        ],
        "no-implied-eval": [
          "error"
        ],
        "no-iterator": [
          "error"
        ],
        "no-lone-blocks": [
          "error"
        ],
        "no-loop-func": [
          "error"
        ],
        "no-multi-spaces": [
          "error"
        ],
        "no-multi-str": [
          "error"
        ],
        "no-new": [
          "error"
        ],
        "no-new-func": [
          "error"
        ],
        "no-new-wrappers": [
          "error"
        ],
        "no-octal-escape": [
          "error"
        ],
        "no-param-reassign": [
          "error"
        ],
        "no-proto": [
          "error"
        ],
        "no-return-assign": [
          "error"
        ],
        "no-return-await": [
          "error"
        ],
        "no-script-url": [
          "error"
        ],
        "no-self-compare": [
          "error"
        ],
        "no-magic-numbers": [
          "error",
          {
            "ignore": [
              0,
              1
            ]
          }
        ],
        "no-sequences": [
          "error"
        ],
        "no-throw-literal": [
          "error"
        ],
        "no-unmodified-loop-condition": [
          "error"
        ],
        "no-unused-expressions": [
          "off"
        ],
        "no-useless-call": [
          "error"
        ],
        "no-useless-concat": [
          "error"
        ],
        "no-useless-return": [
          "error"
        ],
        "no-void": [
          "error"
        ],
        "no-warning-comments": [
          "warn"
        ],
        "no-with": [
          "error"
        ],
        "prefer-promise-reject-errors": [
          "error"
        ],
        "radix": [
          "error"
        ],
        "require-await": [
          "error"
        ],
        "vars-on-top": [
          "error"
        ],
        "wrap-iife": [
          "error",
          "any"
        ],
        "yoda": [
          "error",
          "never",
          {
            "exceptRange": true
          }
        ]
      }
    },
    "style": {
      "rules": {
        "array-bracket-spacing": [
          "error"
        ],
        "block-spacing": [
          "error"
        ],
        "brace-style": [
          "error"
        ],
        "camelcase": [
          "error"
        ],
        "capitalized-comments": [
          "error"
        ],
        "comma-dangle": [
          "error"
        ],
        "comma-spacing": [
          "error"
        ],
        "comma-style": [
          "error"
        ],
        "computed-property-spacing": [
          "error"
        ],
        "eol-last": [
          "error"
        ],
        "func-call-spacing": [
          "error"
        ],
        "func-name-matching": [
          "error"
        ],
        "func-names": [
          "error",
          "as-needed"
        ],
        "func-style": [
          "error",
          "expression"
        ],
        "id-blacklist": [
          "error",
          "data",
          "e",
          "el",
          "evt"
        ],
        "indent": [
          "error",
          2,
          {
            "SwitchCase": 1
          }
        ],
        "jsx-quotes": [
          "error"
        ],
        "key-spacing": [
          "error"
        ],
        "keyword-spacing": [
          "error"
        ],
        "line-comment-position": [
          "error"
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "lines-around-comment": [
          "error"
        ],
        "max-depth": [
          "error"
        ],
        "max-lines": [
          "error"
        ],
        "max-nested-callbacks": [
          "error"
        ],
        "max-params": [
          "error"
        ],
        "max-statements": [
          "error"
        ],
        "max-statements-per-line": [
          "error"
        ],
        "new-cap": [
          "error"
        ],
        "new-parens": [
          "error"
        ],
        "no-array-constructor": [
          "error"
        ],
        "no-continue": [
          "error"
        ],
        "no-inline-comments": [
          "error"
        ],
        "no-lonely-if": [
          "error"
        ],
        "no-multi-assign": [
          "error"
        ],
        "no-multiple-empty-lines": [
          "error"
        ],
        "no-negated-condition": [
          "error"
        ],
        "no-nested-ternary": [
          "error"
        ],
        "no-new-object": [
          "error"
        ],
        "no-plusplus": [
          "error",
          {
            "allowForLoopAfterthoughts": true
          }
        ],
        "no-tabs": [
          "error"
        ],
        "no-trailing-spaces": [
          "error"
        ],
        "no-underscore-dangle": [
          "error"
        ],
        "no-unneeded-ternary": [
          "error"
        ],
        "no-whitespace-before-property": [
          "error"
        ],
        "object-curly-spacing": [
          "error",
          "always"
        ],
        "one-var-declaration-per-line": [
          "error"
        ],
        "operator-assignment": [
          "error"
        ],
        "operator-linebreak": [
          "error",
          "none"
        ],
        "padded-blocks": [
          "error",
          "never"
        ],
        "quote-props": [
          "error",
          "as-needed"
        ],
        "quotes": [
          "error",
          "single"
        ],
        "semi": [
          "error",
          "always"
        ],
        "semi-spacing": [
          "error"
        ],
        "semi-style": [
          "error"
        ],
        "sort-keys": [
          "error"
        ],
        "space-before-blocks": [
          "error"
        ],
        "space-before-function-paren": [
          "error",
          {
            "anonymous": "never",
            "asyncArrow": "always",
            "named": "never"
          }
        ],
        "space-in-parens": [
          "error"
        ],
        "space-infix-ops": [
          "error"
        ],
        "space-unary-ops": [
          "error",
          {
            "nonwords": false,
            "words": true
          }
        ],
        "spaced-comment": [
          "error"
        ],
        "switch-colon-spacing": [
          "error"
        ],
        "template-tag-spacing": [
          "error"
        ],
        "wrap-regex": [
          "error"
        ]
      }
    },
    "es6": {
      "rules": {
        "arrow-body-style": [
          "error"
        ],
        "arrow-parens": [
          "error"
        ],
        "arrow-spacing": [
          "error"
        ],
        "generator-star-spacing": [
          "error"
        ],
        "no-confusing-arrow": [
          "error"
        ],
        "no-duplicate-imports": [
          "error"
        ],
        "no-useless-computed-key": [
          "error"
        ],
        "no-useless-constructor": [
          "error"
        ],
        "no-useless-rename": [
          "error"
        ],
        "no-var": [
          "error"
        ],
        "object-shorthand": [
          "error",
          "always"
        ],
        "prefer-arrow-callback": [
          "error"
        ],
        "prefer-const": [
          "error"
        ],
        "prefer-destructuring": [
          "error",
          {
            "array": true,
            "object": true
          },
          {
            "enforceForRenamedProperties": true
          }
        ],
        "prefer-numeric-literals": [
          "error"
        ],
        "prefer-rest-params": [
          "error"
        ],
        "prefer-spread": [
          "error"
        ],
        "prefer-template": [
          "error"
        ],
        "rest-spread-spacing": [
          "error",
          "never"
        ],
        "sort-imports": [
          "error"
        ],
        "symbol-description": [
          "error"
        ],
        "template-curly-spacing": [
          "error"
        ],
        "yield-star-spacing": [
          "error"
        ]
      }
    },
    "variables": {
      "rules": {
        "init-declarations": [
          "error",
          "always"
        ],
        "no-shadow-restricted-names": [
          "error"
        ],
        "no-undef-init": [
          "error"
        ],
        "no-use-before-define": [
          "error"
        ]
      }
    }
  }
};
