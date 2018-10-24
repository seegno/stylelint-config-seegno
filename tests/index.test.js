
/**
 * Module dependencies.
 */

const config = require('../');
const fs = require('fs');
const stylelint = require('stylelint');

/**
 * Test for valid css.
 */

describe('flags no warnings with valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: fs.readFileSync('./tests/css-valid.css', 'utf-8'), // eslint-disable-line no-sync
      config
    });
  });

  it('did not error', () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });
});

/**
 * Test for invalid css.
 */

describe('flags warnings with invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: fs.readFileSync('./tests/css-invalid.css', 'utf-8'), // eslint-disable-line no-sync
      config
    });
  });

  it('did error', () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });
});
