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
      actionText = _ref.actionText,
      errorText = _ref.errorText,
      onSubmit = _ref.onSubmit;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

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
    className: classes.avatar
  }, _react.default.createElement(_icons.LockOutlined, null)), _react.default.createElement(_core.Typography, {
    component: "h1",
    variant: "h5"
  }, actionText), _react.default.createElement(_core.Typography, {
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
    onChange: updateFormData
  }), _react.default.createElement(_core.TextField, {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    onChange: updateFormData
  }), _react.default.createElement(_core.FormControlLabel, {
    label: "Remember me",
    control: _react.default.createElement(_core.Checkbox, {
      color: "primary",
      value: "remember",
      id: 'remember-' + Math.random(),
      onChange: updateFormData
    })
  }), _react.default.createElement(_core.Button, {
    type: "button",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: function onClick() {
      onSubmit(formData);
    }
  }, actionText)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL0xvZ2luRm9ybS5qcyJdLCJuYW1lcyI6WyJMb2dpbkZvcm1Db21wb25lbnQiLCJjbGFzc2VzIiwiYWN0aW9uVGV4dCIsImVycm9yVGV4dCIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVwZGF0ZUZvcm1EYXRhIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIl9mb3JtRGF0YSIsInJvb3QiLCJhdmF0YXIiLCJjb2xvciIsImZvcm0iLCJNYXRoIiwicmFuZG9tIiwic3VibWl0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJ0aGVtZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJzcGFjaW5nIiwidW5pdCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwibWFyZ2luVG9wIiwiTG9naW5Gb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFNBQVNBLGtCQUFULE9BS0c7QUFBQSxNQUpEQyxPQUlDLFFBSkRBLE9BSUM7QUFBQSxNQUhEQyxVQUdDLFFBSERBLFVBR0M7QUFBQSxNQUZEQyxTQUVDLFFBRkRBLFNBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7O0FBQUEsa0JBQytCLHFCQUFTLEVBQVQsQ0FEL0I7QUFBQTtBQUFBLE1BQ01DLFFBRE47QUFBQSxNQUNnQkMsV0FEaEI7O0FBR0QsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQSx3QkFDS0EsS0FBSyxDQUFDQyxN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IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7XG4gIEF2YXRhcixcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbExhYmVsLFxuICBDaGVja2JveCxcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBMb2NrT3V0bGluZWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmZ1bmN0aW9uIExvZ2luRm9ybUNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIGFjdGlvblRleHQsXG4gIGVycm9yVGV4dCxcbiAgb25TdWJtaXQsXG59KSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IHVwZGF0ZUZvcm1EYXRhID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qge3R5cGUsIG5hbWUsIHZhbHVlLCBjaGVja2VkfSA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgX2Zvcm1EYXRhID0gey4uLmZvcm1EYXRhfTtcbiAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94JykgX2Zvcm1EYXRhW3ZhbHVlXSA9IGNoZWNrZWQ7XG4gICAgZWxzZSBfZm9ybURhdGFbbmFtZV0gPSB2YWx1ZTtcbiAgICBzZXRGb3JtRGF0YShfZm9ybURhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICA8TG9ja091dGxpbmVkIC8+XG4gICAgICA8L0F2YXRhcj5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgIHthY3Rpb25UZXh0fVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAge2Vycm9yVGV4dH1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbiAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwiVXNlcm5hbWVcIiByZXF1aXJlZFxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG1hcmdpbj1cIm5vcm1hbFwiIGZ1bGxXaWR0aFxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVGb3JtRGF0YX1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3N3b3JkXCIgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlRm9ybURhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgbGFiZWw9XCJSZW1lbWJlciBtZVwiXG4gICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICA8Q2hlY2tib3ggY29sb3I9XCJwcmltYXJ5XCIgdmFsdWU9XCJyZW1lbWJlclwiXG4gICAgICAgICAgICAgIGlkPXsncmVtZW1iZXItJyArIE1hdGgucmFuZG9tKCl9IG9uQ2hhbmdlPXt1cGRhdGVGb3JtRGF0YX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGZ1bGxXaWR0aCB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2FjdGlvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Mb2dpbkZvcm1Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBDYWxsYmFjayBmdW5jdGlvbiB0byBwcm9wb2dhdGUgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBlbnRlcmVkLiAqL1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqIFRoZSB0ZXh0IHRvIGRlc2NyaWJlIHRoZSBhY3Rpb24gb2YgbG9nZ2luZyBpbi4gKi9cbiAgYWN0aW9uVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFRoZSB0ZXh0IHRvIGRlc2NyaWJlIHRoZSBlcnJvciB3aGVuIEF1dGhlbnRpY2F0aW9uIGZhaWxzLiAqL1xuICBlcnJvclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Mb2dpbkZvcm1Db21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICBhY3Rpb25UZXh0OiAnTG9naW4nLFxufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgTG9naW5Gb3JtID0gd2l0aFN0eWxlcyhzdHlsZXMpKExvZ2luRm9ybUNvbXBvbmVudCk7XG4iXX0=