"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepositoryForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _ = require("../../");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RepositoryFormComponent(_ref) {
  var classes = _ref.classes,
      authentication = _ref.authentication,
      repository = _ref.repository,
      onRepository = _ref.onRepository;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      errorText = _useState4[0],
      setErrorText = _useState4[1];

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

  var mode, config;
  var authenticated = authentication && authentication.user;

  if (authenticated) {
    var admin = repository && repository.permissions.admin;
    config = authentication.config;
    if (!repository) mode = 'create';else if (admin) mode = 'edit';
  } else if (repository) mode = 'view';else mode = 'error';

  var disabled = mode === 'view';

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(settings) {
      var repo, _errorText;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(mode === 'create')) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return (0, _helpers.createRepository)({
                settings: settings,
                config: config
              });

            case 3:
              repo = _context.sent;
              if (repo) onRepository(repo);
              if (!repo) _errorText = 'Error creating repository.';
              _context.next = 13;
              break;

            case 8:
              if (!(mode === 'edit')) {
                _context.next = 13;
                break;
              }

              _context.next = 11;
              return repository.update(settings);

            case 11:
              repo = _context.sent;
              if (!repo) _errorText = 'Error editing repository.';

            case 13:
              if (_errorText) setErrorText(_errorText);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var actionText;
  if (mode === 'create') actionText = "Create Repository";else if (mode === 'edit') actionText = "Edit Repository";else if (mode === 'view') actionText = "View Repository";else if (mode === 'error') {
    actionText = "View/Edit/Create Repository";
    if (!errorText) setErrorText("Please login and/or provide a repository");
  }
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_core.Avatar, {
    className: classes.avatar
  }, _react.default.createElement(_icons.FolderShared, null)), _react.default.createElement(_core.Typography, {
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
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    onChange: updateFormData,
    helperText: "Name must be alpha-numeric and not include spaces.",
    disabled: disabled,
    defaultValue: repository ? repository.name : ''
  }), _react.default.createElement(_core.TextField, {
    name: "description",
    label: "Description",
    type: "text",
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    onChange: updateFormData,
    disabled: disabled,
    defaultValue: repository ? repository.description : ''
  }), _react.default.createElement(_.FormCheckbox, {
    name: "private",
    label: "Private",
    onChange: updateFormData,
    disabled: disabled,
    checked: repository ? repository.private : false
  }), _react.default.createElement(_core.Button, {
    type: "button",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: disabled,
    onClick: function onClick() {
      handleSubmit(formData);
    }
  }, actionText)));
}

RepositoryFormComponent.propTypes = {
  classes: _propTypes.default.object.isRequired
};
RepositoryFormComponent.defaultProps = {
  actionText: 'Repository Settings'
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

var RepositoryForm = (0, _withStyles.default)(styles)(RepositoryFormComponent);
exports.RepositoryForm = RepositoryForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvY3J1ZC9SZXBvc2l0b3J5Rm9ybS5qcyJdLCJuYW1lcyI6WyJSZXBvc2l0b3J5Rm9ybUNvbXBvbmVudCIsImNsYXNzZXMiLCJhdXRoZW50aWNhdGlvbiIsInJlcG9zaXRvcnkiLCJvblJlcG9zaXRvcnkiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JUZXh0Iiwic2V0RXJyb3JUZXh0IiwidXBkYXRlRm9ybURhdGEiLCJldmVudCIsInRhcmdldCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiX2Zvcm1EYXRhIiwibW9kZSIsImNvbmZpZyIsImF1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwiYWRtaW4iLCJwZXJtaXNzaW9ucyIsImRpc2FibGVkIiwiaGFuZGxlU3VibWl0Iiwic2V0dGluZ3MiLCJyZXBvIiwiX2Vycm9yVGV4dCIsInVwZGF0ZSIsImFjdGlvblRleHQiLCJyb290IiwiYXZhdGFyIiwiY29sb3IiLCJmb3JtIiwiZGVzY3JpcHRpb24iLCJwcml2YXRlIiwic3VibWl0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsInN0eWxlcyIsInRoZW1lIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsInNwYWNpbmciLCJ1bml0IiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJSZXBvc2l0b3J5Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUlBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsdUJBQVQsT0FLRztBQUFBLE1BSkRDLE9BSUMsUUFKREEsT0FJQztBQUFBLE1BSERDLGNBR0MsUUFIREEs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QUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDdkJiLElBQUFBLElBQUksRUFBRTtBQUNKYyxNQUFBQSxPQUFPLEVBQUUsTUFETDtBQUVKQyxNQUFBQSxhQUFhLEVBQUUsUUFGWDtBQUdKQyxNQUFBQSxVQUFVLEVBQUUsUUFIUjtBQUlKQyxNQUFBQSxPQUFPLFlBQUtKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQUFkLEdBQXFCLENBQTFCLGdCQUFpQ04sS0FBSyxDQUFDSyxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FBdEQsZ0JBQTZETixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsSUFBZCxHQUFxQixDQUFsRjtBQUpILEtBRGlCO0FBT3ZCbEIsSUFBQUEsTUFBTSxFQUFFO0FBQ05tQixNQUFBQSxNQUFNLEVBQUVQLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQURoQjtBQUVORSxNQUFBQSxlQUFlLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQUZqQyxLQVBlO0FBV3ZCckIsSUFBQUEsSUFBSSxFQUFFO0FBQ0pzQixNQUFBQSxLQUFLLEVBQUUsTUFESDtBQUNXO0FBQ2ZDLE1BQUFBLFNBQVMsRUFBRWIsS0FBSyxDQUFDSyxPQUFOLENBQWNDO0FBRnJCLEtBWGlCO0FBZXZCYixJQUFBQSxNQUFNLEVBQUU7QUFDTm9CLE1BQUFBLFNBQVMsRUFBRWIsS0FBSyxDQUFDSyxPQUFOLENBQWNDLElBQWQsR0FBcUI7QUFEMUI7QUFmZSxHQUFMO0FBQUEsQ0FBcEI7O0FBb0JPLElBQU1RLGNBQWMsR0FBRyx5QkFBV2YsTUFBWCxFQUFtQjFDLHVCQUFuQixDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBGb2xkZXJTaGFyZWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IEZvcm1DaGVja2JveCB9IGZyb20gJy4uLy4uLyc7XG5pbXBvcnQgeyBjcmVhdGVSZXBvc2l0b3J5LCB1cGRhdGVSZXBvc2l0b3J5U2V0dGluZ3MgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZnVuY3Rpb24gUmVwb3NpdG9yeUZvcm1Db21wb25lbnQoe1xuICBjbGFzc2VzLFxuICBhdXRoZW50aWNhdGlvbixcbiAgcmVwb3NpdG9yeSxcbiAgb25SZXBvc2l0b3J5LFxufSkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2Vycm9yVGV4dCwgc2V0RXJyb3JUZXh0XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgdXBkYXRlRm9ybURhdGEgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7dHlwZSwgbmFtZSwgdmFsdWUsIGNoZWNrZWR9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBfZm9ybURhdGEgPSB7Li4uZm9ybURhdGF9O1xuICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSBfZm9ybURhdGFbdmFsdWVdID0gY2hlY2tlZDtcbiAgICBlbHNlIF9mb3JtRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIHNldEZvcm1EYXRhKF9mb3JtRGF0YSk7XG4gIH07XG5cbiAgbGV0IG1vZGUsIGNvbmZpZztcbiAgY29uc3QgYXV0aGVudGljYXRlZCA9IChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi51c2VyKTtcbiAgaWYgKGF1dGhlbnRpY2F0ZWQpIHtcbiAgICBjb25zdCBhZG1pbiA9IHJlcG9zaXRvcnkgJiYgcmVwb3NpdG9yeS5wZXJtaXNzaW9ucy5hZG1pbjtcbiAgICBjb25maWcgPSBhdXRoZW50aWNhdGlvbi5jb25maWc7XG4gICAgaWYgKCFyZXBvc2l0b3J5KSBtb2RlID0gJ2NyZWF0ZSc7XG4gICAgZWxzZSBpZiAoYWRtaW4pIG1vZGUgPSAnZWRpdCc7XG4gIH0gZWxzZSBpZiAocmVwb3NpdG9yeSkgbW9kZSA9ICd2aWV3JztcbiAgZWxzZSBtb2RlID0gJ2Vycm9yJztcbiAgY29uc3QgZGlzYWJsZWQgPSAobW9kZSA9PT0gJ3ZpZXcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoc2V0dGluZ3MpID0+IHtcbiAgICBsZXQgcmVwbywgX2Vycm9yVGV4dDtcbiAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgIHJlcG8gPSBhd2FpdCBjcmVhdGVSZXBvc2l0b3J5KHtzZXR0aW5ncywgY29uZmlnfSk7XG4gICAgICBpZiAocmVwbykgb25SZXBvc2l0b3J5KHJlcG8pO1xuICAgICAgaWYgKCFyZXBvKSBfZXJyb3JUZXh0ID0gJ0Vycm9yIGNyZWF0aW5nIHJlcG9zaXRvcnkuJztcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdlZGl0Jykge1xuICAgICAgcmVwbyA9IGF3YWl0IHJlcG9zaXRvcnkudXBkYXRlKHNldHRpbmdzKTtcbiAgICAgIGlmICghcmVwbykgX2Vycm9yVGV4dCA9ICdFcnJvciBlZGl0aW5nIHJlcG9zaXRvcnkuJztcbiAgICB9XG4gICAgaWYgKF9lcnJvclRleHQpIHNldEVycm9yVGV4dChfZXJyb3JUZXh0KTtcbiAgfTtcblxuICBsZXQgYWN0aW9uVGV4dDtcbiAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSBhY3Rpb25UZXh0ID0gXCJDcmVhdGUgUmVwb3NpdG9yeVwiO1xuICBlbHNlIGlmIChtb2RlID09PSAnZWRpdCcpIGFjdGlvblRleHQgPSBcIkVkaXQgUmVwb3NpdG9yeVwiO1xuICBlbHNlIGlmIChtb2RlID09PSAndmlldycpIGFjdGlvblRleHQgPSBcIlZpZXcgUmVwb3NpdG9yeVwiXG4gIGVsc2UgaWYgKG1vZGUgPT09ICdlcnJvcicpIHtcbiAgICBhY3Rpb25UZXh0ID0gXCJWaWV3L0VkaXQvQ3JlYXRlIFJlcG9zaXRvcnlcIjtcbiAgICBpZiAoIWVycm9yVGV4dCkgc2V0RXJyb3JUZXh0KFwiUGxlYXNlIGxvZ2luIGFuZC9vciBwcm92aWRlIGEgcmVwb3NpdG9yeVwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICA8Rm9sZGVyU2hhcmVkIC8+XG4gICAgICA8L0F2YXRhcj5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgIHthY3Rpb25UZXh0fVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAge2Vycm9yVGV4dH1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbiAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlRm9ybURhdGF9XG4gICAgICAgICAgaGVscGVyVGV4dD1cIk5hbWUgbXVzdCBiZSBhbHBoYS1udW1lcmljIGFuZCBub3QgaW5jbHVkZSBzcGFjZXMuXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXBvc2l0b3J5ID8gcmVwb3NpdG9yeS5uYW1lIDogJyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0RmllbGQgbmFtZT1cImRlc2NyaXB0aW9uXCIgbGFiZWw9XCJEZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlRm9ybURhdGF9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVwb3NpdG9yeSA/IHJlcG9zaXRvcnkuZGVzY3JpcHRpb24gOiAnJ31cbiAgICAgICAgLz5cbiAgICAgICAgPEZvcm1DaGVja2JveFxuICAgICAgICAgIG5hbWU9XCJwcml2YXRlXCIgbGFiZWw9XCJQcml2YXRlXCJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlRm9ybURhdGF9IGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBjaGVja2VkPXtyZXBvc2l0b3J5ID8gcmVwb3NpdG9yeS5wcml2YXRlIDogZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGZ1bGxXaWR0aCB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fSBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdWJtaXQoZm9ybURhdGEpOyB9fVxuICAgICAgICA+XG4gICAgICAgICAge2FjdGlvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5SZXBvc2l0b3J5Rm9ybUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cblJlcG9zaXRvcnlGb3JtQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aW9uVGV4dDogJ1JlcG9zaXRvcnkgU2V0dGluZ3MnLFxufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDJ9cHggJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiAzfXB4ICR7dGhlbWUuc3BhY2luZy51bml0ICogM31weGAsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZy51bml0LFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUmVwb3NpdG9yeUZvcm0gPSB3aXRoU3R5bGVzKHN0eWxlcykoUmVwb3NpdG9yeUZvcm1Db21wb25lbnQpO1xuIl19