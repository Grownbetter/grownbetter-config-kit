/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    /**
     * @description Callback 보다 Async/Await 선호
     * @link https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md
     */
    'promise/prefer-await-to-callbacks': 'error',
    /**
     * @description Promise 보다 Async/Await 선호
     * @link https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md
     */
    'promise/prefer-await-to-then': 'off',
    /**
     * @description 허용되지 않은 장소에서의 Promise 사용
     * @link https://typescript-eslint.io/rules/no-misused-promises/
     */
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    /**
     * @description 생성된 Promise에 대한 처리 여부
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md
     */
    '@typescript-eslint/no-floating-promises': 'off',
  },
};
