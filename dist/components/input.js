"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Input = _ref => {
  let {
    name,
    value,
    type,
    id,
    disabled,
    required
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("input", {
    name: name,
    value: value,
    type: type,
    id: id,
    disabled: disabled,
    required: required
  });
};

var _default = Input;
exports.default = _default;