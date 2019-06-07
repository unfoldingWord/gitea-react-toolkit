"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LoginFormComponent(_ref) {
  var classes = _ref.classes,
      authentication = _ref.authentication,
      actionText = _ref.actionText,
      errorText = _ref.errorText,
      onSubmit = _ref.onSubmit;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var user;
  if (authentication) user = authentication.user;

  var updateFormData = function updateFormData(event) {
    var _event$target = event.target,
        type = _event$target.type,
        name = _event$target.name,
        value = _event$target.value,
        checked = _event$target.checked;

    var _formData = _objectSpread({}, formData);

    if (type === 'checkbox') _formData[value] = checked;else _formData[name] = value;
    setFormData(_formData);
  };

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_core.Avatar, {
    className: classes.avatar,
    src: user && user.avatar_url ? user.avatar_url : null
  }, _react.default.createElement(_icons.LockOutlined, null)), _react.default.createElement(_core.Typography, {
    component: "h1",
    variant: "h5"
  }, user ? user.full_name : actionText), _react.default.createElement(_core.Typography, {
    component: "p",
    style: {
      color: 'red'
    }
  }, errorText), _react.default.createElement("form", {
    className: classes.form
  }, _react.default.createElement(_core.TextField, {
    name: "username",
    type: "text",
    label: "Username",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    disabled: !!user,
    defaultValue: user ? user.username : '',
    onChange: updateFormData
  }), _react.default.createElement(_core.TextField, {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    disabled: !!user,
    defaultValue: user ? user.username : '',
    onChange: updateFormData
  }), _react.default.createElement(_core.FormControlLabel, {
    label: "Remember me",
    control: _react.default.createElement(_core.Checkbox, {
      color: "primary",
      value: "remember",
      disabled: !!user,
      id: 'remember-' + Math.random(),
      onChange: updateFormData
    })
  }), _react.default.createElement(_core.Button, {
    type: "button",
    fullWidth: true,
    variant: "contained",
    color: user ? "secondary" : "primary",
    className: classes.submit,
    onClick: function onClick() {
      onSubmit(formData);
    }
  }, user ? 'Logout' : actionText)));
}

LoginFormComponent.propTypes = {
  classes: _propTypes.default.object.isRequired,

  /** Callback function to propogate the username and password entered. */
  onSubmit: _propTypes.default.func.isRequired,

  /** The text to describe the action of logging in. */
  actionText: _propTypes.default.string,

  /** The text to describe the error when Authentication fails. */
  errorText: _propTypes.default.string
};
LoginFormComponent.defaultProps = {
  actionText: 'Login'
};

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.primary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  };
};

var LoginForm = (0, _withStyles.default)(styles)(LoginFormComponent);
exports.LoginForm = LoginForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL0xvZ2luRm9ybS5qcyJdLCJuYW1lcyI6WyJMb2dpbkZvcm1Db21wb25lbnQiLCJjbGFzc2VzIiwiYXV0aGVudGljYXRpb24iLCJhY3Rpb25UZXh0IiwiZXJyb3JUZXh0Iiwib25TdWJtaXQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlciIsInVwZGF0ZUZvcm1EYXRhIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIl9mb3JtRGF0YSIsInJvb3QiLCJhdmF0YXIiLCJhdmF0YXJfdXJsIiwiZnVsbF9uYW1lIiwiY29sb3IiLCJmb3JtIiwidXNlcm5hbWUiLCJNYXRoIiwicmFuZG9tIiwic3VibWl0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJ0aGVtZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJzcGFjaW5nIiwidW5pdCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwibWFyZ2luVG9wIiwiTG9naW5Gb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFNBQVNBLGtCQUFULE9BTUc7QUFBQSxNQUxEQyxPQUtDLFFBTERBLE9BS0M7QUFBQSxNQUpEQyxjQUlDLFFBSkRBLGNBSUM7QUFBQSxNQUhEQyxVQUdDLFFBSERBLFVBR0M7QUFBQSxNQUZEQyxTQUVDLFFBRkRBLFNBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7O0FBQUEsa0JBQytCLHFCQUFTLEVBQVQsQ0FEL0I7QUFBQTtBQUFBLE1BQ01DLFFBRE47QUFBQSxN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QUFLLENBQUNLLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUF0RCxnQkFBNkROLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQWxGO0FBSkgsS0FEaUI7QUFPdkJ2QixJQUFBQSxNQUFNLEVBQUU7QUFDTndCLE1BQUFBLE1BQU0sRUFBRVAsS0FBSyxDQUFDSyxPQUFOLENBQWNDLElBRGhCO0FBRU5FLE1BQUFBLGVBQWUsRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRmpDLEtBUGU7QUFXdkJ4QixJQUFBQSxJQUFJLEVBQUU7QUFDSnlCLE1BQUFBLEtBQUssRUFBRSxNQURIO0FBQ1c7QUFDZkMsTUFBQUEsU0FBUyxFQUFFYixLQUFLLENBQUNLLE9BQU4sQ0FBY0M7QUFGckIsS0FYaUI7QUFldkJmLElBQUFBLE1BQU0sRUFBRTtBQUNOc0IsTUFBQUEsU0FBUyxFQUFFYixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQjtBQUQxQjtBQWZlLEdBQUw7QUFBQSxDQUFwQjs7QUFvQk8sSUFBTVEsU0FBUyxHQUFHLHlCQUFXZixNQUFYLEVBQW1CbEMsa0JBQW5CLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7XG4gIEF2YXRhcixcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbExhYmVsLFxuICBDaGVja2JveCxcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBMb2NrT3V0bGluZWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmZ1bmN0aW9uIExvZ2luRm9ybUNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIGF1dGhlbnRpY2F0aW9uLFxuICBhY3Rpb25UZXh0LFxuICBlcnJvclRleHQsXG4gIG9uU3VibWl0LFxufSkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICBsZXQgdXNlcjtcbiAgaWYgKGF1dGhlbnRpY2F0aW9uKSB1c2VyID0gYXV0aGVudGljYXRpb24udXNlcjtcblxuICBjb25zdCB1cGRhdGVGb3JtRGF0YSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHt0eXBlLCBuYW1lLCB2YWx1ZSwgY2hlY2tlZH0gPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IF9mb3JtRGF0YSA9IHsuLi5mb3JtRGF0YX07XG4gICAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIF9mb3JtRGF0YVt2YWx1ZV0gPSBjaGVja2VkO1xuICAgIGVsc2UgX2Zvcm1EYXRhW25hbWVdID0gdmFsdWU7XG4gICAgc2V0Rm9ybURhdGEoX2Zvcm1EYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBzcmM9e3VzZXIgJiYgdXNlci5hdmF0YXJfdXJsID8gdXNlci5hdmF0YXJfdXJsIDogbnVsbH0+XG4gICAgICAgIDxMb2NrT3V0bGluZWQgLz5cbiAgICAgIDwvQXZhdGFyPlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgeyh1c2VyKSA/IHVzZXIuZnVsbF9uYW1lIDogYWN0aW9uVGV4dH1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgIHtlcnJvclRleHR9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgIDxUZXh0RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBsYWJlbD1cIlVzZXJuYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICBkaXNhYmxlZD17ISF1c2VyfSBkZWZhdWx0VmFsdWU9e3VzZXIgPyB1c2VyLnVzZXJuYW1lOiAnJ31cbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlRm9ybURhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0RmllbGQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzd29yZFwiIHJlcXVpcmVkXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgbWFyZ2luPVwibm9ybWFsXCIgZnVsbFdpZHRoXG4gICAgICAgICAgZGlzYWJsZWQ9eyEhdXNlcn0gZGVmYXVsdFZhbHVlPXt1c2VyID8gdXNlci51c2VybmFtZTogJyd9XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUZvcm1EYXRhfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgIGxhYmVsPVwiUmVtZW1iZXIgbWVcIlxuICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgPENoZWNrYm94IGNvbG9yPVwicHJpbWFyeVwiIHZhbHVlPVwicmVtZW1iZXJcIiBkaXNhYmxlZD17ISF1c2VyfVxuICAgICAgICAgICAgICBpZD17J3JlbWVtYmVyLScgKyBNYXRoLnJhbmRvbSgpfSBvbkNoYW5nZT17dXBkYXRlRm9ybURhdGF9IC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBmdWxsV2lkdGggdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9eyh1c2VyKSA/IFwic2Vjb25kYXJ5XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeyh1c2VyKSA/ICdMb2dvdXQnIDogYWN0aW9uVGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkxvZ2luRm9ybUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHByb3BvZ2F0ZSB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGVudGVyZWQuICovXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogVGhlIHRleHQgdG8gZGVzY3JpYmUgdGhlIGFjdGlvbiBvZiBsb2dnaW5nIGluLiAqL1xuICBhY3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogVGhlIHRleHQgdG8gZGVzY3JpYmUgdGhlIGVycm9yIHdoZW4gQXV0aGVudGljYXRpb24gZmFpbHMuICovXG4gIGVycm9yVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkxvZ2luRm9ybUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGlvblRleHQ6ICdMb2dpbicsXG59XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy51bml0ICogMn1weCAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDN9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4YCxcbiAgfSxcbiAgYXZhdGFyOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAzLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBMb2dpbkZvcm0gPSB3aXRoU3R5bGVzKHN0eWxlcykoTG9naW5Gb3JtQ29tcG9uZW50KTtcbiJdfQ==