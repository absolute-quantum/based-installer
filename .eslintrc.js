module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    root: true,

    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module' // Allows for the use of imports
    },
    extends: ['eslint:recommended'],
    rules: {
        semi: [0, 'never'],
        'prefer-arrow/prefer-arrow-functions': [
            0,
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false
            }
        ],
        'prefer-arrow-callback': [0, { allowNamedFunctions: true }],
        'func-style': [0, 'expression', { allowArrowFunctions: true }],
        'no-tabs': 0,
        'no-var': 0,
        'array-bracket-spacing': [0, 'never'],
        quotes: [0, 'single'],
        'comma-dangle': 0,
        'prefer-promise-reject-errors': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
