"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var tooltipRoot = document.getElementById('overlay-trigger-root');

var PortalWrapper =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PortalWrapper, _React$Component);

  function PortalWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.el = document.createElement('div');
    return _this;
  }

  var _proto = PortalWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    tooltipRoot.appendChild(this.el);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    tooltipRoot.removeChild(this.el);
  };

  _proto.render = function render() {
    return _reactDom.default.createPortal(this.props.children, this.el);
  };

  return PortalWrapper;
}(_react.default.Component);

PortalWrapper.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
};
var _default = PortalWrapper;
exports.default = _default;
module.exports = exports["default"];