const { createElement } = require('react');

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) => createElement('a', {
        ...rest,
        href: to,
      }),
    ),
  Slice: jest.fn()
    .mockImplementation(
      ({
        alias,
        ...rest
      }) => createElement('div', {
        ...rest,
        'data-test-slice-alias': alias,
      }),
    ),
  useStaticQuery: jest.fn(),
};
