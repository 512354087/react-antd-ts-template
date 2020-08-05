module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 0,
        "jsx-a11y/anchor-is-valid": ["off", {
            "components": ["Link"],
            "specialLink": ["hrefLeft", "hrefRight"],
            "aspects": ["invalidHref", "preferButton"]
        }]
    }

}
