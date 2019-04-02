
/**
 * Module dependencies.
 */

import config from '../src';
import fs from 'fs';
import stylelint from 'stylelint';

/**
 * `stylelint-config-seegno` tests.
 */

describe('stylelint-config-seegno', () => {
  it('correct', () => {
    return stylelint
      .lint({
        code: fs.readFileSync('./test/fixtures/correct.js', 'utf-8'), // eslint-disable-line no-sync
        config
      })
      .then(result => {
        expect(result.errored).toBe(false);
      });
  });

  it('incorrect', () => {
    return stylelint
      .lint({
        code: fs.readFileSync('./test/fixtures/incorrect.js', 'utf-8'), // eslint-disable-line no-sync
        config
      })
      .then(({ errored, output }) => {
        const warnings = JSON.parse(output)[0].warnings;

        expect(errored).toBe(true);
        expect(warnings).toMatchObject([
          {
            rule: 'declaration-block-semicolon-newline-after'
          }, {
            rule: 'declaration-block-semicolon-space-before'
          }, {
            rule: 'declaration-colon-space-after'
          }, {
            rule: 'function-comma-space-before'
          }, {
            rule: 'indentation'
          }, {
            rule: 'length-zero-no-unit'
          }, {
            rule: 'number-leading-zero'
          }, {
            rule: 'number-no-trailing-zeros'
          }, {
            rule: 'order/properties-order'
          }, {
            rule: 'property-case'
          }, {
            rule: 'rule-empty-line-before'
          }, {
            rule: 'unit-case'
          }, {
            rule: 'value-keyword-case'
          }, {
            rule: 'at-rule-no-unknown'
          }, {
            rule: 'block-no-empty'
          }, {
            rule: 'color-no-invalid-hex'
          }, {
            rule: 'declaration-block-no-duplicate-properties'
          }, {
            rule: 'font-family-no-duplicate-names'
          }, {
            rule: 'font-family-no-missing-generic-family-keyword'
          }, {
            rule: 'function-calc-no-unspaced-operator'
          }, {
            rule: 'function-linear-gradient-no-nonstandard-direction'
          }, {
            rule: 'media-feature-name-no-unknown'
          }, {
            rule: 'no-descending-specificity'
          }, {
            rule: 'no-extra-semicolons'
          }, {
            rule: 'property-no-unknown'
          }, {
            rule: 'selector-pseudo-class-no-unknown'
          }, {
            rule: 'selector-pseudo-element-no-unknown'
          }, {
            rule: 'selector-type-no-unknown'
          }, {
            rule: 'string-no-newline'
          }, {
            rule: 'unit-no-unknown'
          }, {
            rule: 'value-no-vendor-prefix'
          }, {
            rule: 'property-no-vendor-prefix'
          }
        ]);
      });
  });
});
