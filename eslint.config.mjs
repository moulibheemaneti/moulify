// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from "eslint-plugin-storybook";

// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
    typescript: true,
  },
  dirs: {
    src: [
      './playground',
    ],
  },
})
  .append(
    {
      ignores: ['assets/**', 'src/assets/generated/**'],
    },
    // File-specific overrides for stores and composables
    {
      rules: {
        'max-lines-per-function': [
          'error',
          {
            max: 500,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
      },
    },
    // File-specific overrides for pages
    {
      rules: {
        'max-lines': [
          'error',
          {
            max: 600,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
      },
    },
    // Generic JavaScript/ESLint rules
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
        '**/*.vue',
        // '**/*.json',
        '**/*.mjs',
      ],
      rules: {
        // Variable declarations and scoping
        'one-var': ['error', 'never'],
        'no-var': 'error',
        'prefer-const': 'error',
        'no-redeclare': 'error',

        // Import/Export rules
        'no-duplicate-imports': 'error',

        // Error prevention rules
        'no-undef': 'error',
        'no-unreachable': 'error',
        'no-duplicate-case': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-sparse-arrays': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',

        // Best practices
        'curly': 'error',
        'default-case': 'error',
        'dot-notation': 'error',
        'no-alert': 'warn',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-global-assign': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-void': 'error',
        'no-with': 'error',
        'yoda': 'error',

        // Function style and control flow
        'prefer-arrow-callback': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'no-else-return': 'error',
        'func-style': [
          'error',
          'expression',
          {
            allowArrowFunctions: true,
          },
        ],

        // Complexity and size limits
        'max-statements': ['error', 50],
        'max-params': ['error', 5],
        'max-lines-per-function': [
          'error',
          {
            max: 75,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
      },
    },
    // TypeScript-specific rules
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // TypeScript core rules
        '@typescript-eslint/no-unused-vars': ['error', {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        }],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': false,
            'ts-nocheck': false,
            'ts-check': false,
          },
        ],
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      },
    },
    // Vue-specific rules
    {
      files: ['**/*.vue'],
      rules: {
        // Vue component structure and naming
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': [
          'error',
          {
            disallowVueBuiltInComponents: false,
            disallowVue3BuiltInComponents: false,
          },
        ],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],

        // Vue template formatting
        'vue/html-indent': 'off',
        'vue/html-closing-bracket-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'never',
          },
        ],
        'vue/multiline-html-element-content-newline': [
          'error',
          {
            ignoreWhenEmpty: true,
            allowEmptyLines: true,
          },
        ],
        'vue/first-attribute-linebreak': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/max-len': [
          'error',
          {
            code: 180,
            template: 180,
            comments: 180,
            ignorePattern: '',
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreRegExpLiterals: false,
            ignoreHTMLAttributeValues: true,
            ignoreHTMLTextContents: true,
          },
        ],

        // Vue best practices
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': 'error',
        'vue/require-v-for-key': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/require-prop-types': 'error',
        'vue/require-default-prop': 'error',
      },
    },
  )
