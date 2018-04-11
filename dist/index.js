'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MyComponent = require('./MyComponent');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'My Minimal React Webpack Babel Setup!!!';

var root = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'div',
        null,
        title
    ),
    _react2.default.createElement(_MyComponent2.default, null)
);

_reactDom2.default.render(root, document.getElementById('app'));