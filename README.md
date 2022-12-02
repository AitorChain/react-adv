# Initial Eslint / Prettier configuration

## Start Eslint

`npm init @eslint/config`

 - Check syntax and find problems
 - JS Modules
 - React
 - Yes
 - Popular guide
 - Airbnb
 - JSON
 - Yarn

`yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript`

## Install Prettier

    yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks -D

- Create file  `.prettierrc`


## Add scripts to package.json

    "lint":  "eslint 'src/**/*.{js,jsx,ts,tsx,json}'",
    "lint:fix":  "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
    "format":  "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc",

## .eslintrc.json

    {
      "env": {
        "browser": true,
        "es2021": true,
        "jest": true
      },
      "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
      ],
      "overrides": [],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
      },
      "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
      "rules": {
        "react/react-in-jsx-scope": 0,
        "camelcase": 2,
        "no-duplicate-imports": 2,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "key-spacing": [
          "error",
          {
            "multiLine": {
              "beforeColon": false,
              "afterColon": true
            },
            "align": {
              "beforeColon": true,
              "afterColon": true,
              "on": "colon"
            }
          }
        ]
      },
      "settings": {
        "import/resolver": {
          "typescript": {}
        }
      }
    }
    
## .prettierrc

    {
      "singleQuote": true,
      "useTabs": true,
      "tabWidth": 1,
      "jsxSingleQuote": true,
      "singleAttributePerLine": true,
      "bracketSpacing": true,
      "trailingComma": "es5"
    }
