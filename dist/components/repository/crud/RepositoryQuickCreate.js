"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepositoryQuickCreate = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RepositoryQuickCreateComponent(_ref) {
  var classes = _ref.classes,
      authentication = _ref.authentication,
      _ref$authentication = _ref.authentication,
      _ref$authentication$u = _ref$authentication.user,
      username = _ref$authentication$u.username,
      avatar_url = _ref$authentication$u.avatar_url,
      config = _ref$authentication.config,
      onRepository = _ref.onRepository;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      repo = _useState2[0],
      setRepo = _useState2[1];

  var updateRepository = function updateRepository(_repo) {
    if (_repo) {
      _repo = (0, _helpers.extendRepository)({
        repository: _repo,
        authentication: authentication,
        updateRepository: updateRepository,
        config: config
      });
    }

    onRepository(_repo);
  };

  var handleCreate =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var repository;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _helpers.createRepository)({
                repo: repo,
                config: config
              });

            case 2:
              repository = _context.sent;
              updateRepository(repository);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCreate() {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_core.ListItem, {
    alignItems: "flex-start",
    ContainerComponent: "div",
    className: classes.root
  }, _react.default.createElement(_core.ListItemAvatar, {
    className: classes.listItemAvatar
  }, _react.default.createElement(_core.Avatar, {
    alt: username,
    src: avatar_url,
    className: classes.avatar
  })), _react.default.createElement("form", {
    className: classes.form
  }, _react.default.createElement("div", {
    className: classes.input
  }, _react.default.createElement(_core.TextField, {
    id: "owner",
    label: "Owner",
    type: "text",
    disabled: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: username
  })), _react.default.createElement("div", {
    className: classes.input
  }, _react.default.createElement(_core.TextField, {
    id: "repo",
    label: "Repository",
    type: "text",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: "",
    autoFocus: true,
    autoComplete: undefined,
    onChange: function onChange(event) {
      setRepo(event.target.value);
    }
  }))), _react.default.createElement(_core.ListItemSecondaryAction, null, _react.default.createElement(_core.IconButton, {
    "aria-label": "Add Repo",
    onClick: handleCreate
  }, _react.default.createElement(_icons.AddCircle, null))));
}

RepositoryQuickCreateComponent.propTypes = {
  classes: _propTypes.default.object.isRequired,

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** A passed authentication object from login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.shape({
      /** The Gitea server to use when authenticating. */
      server: _propTypes.default.string.isRequired,

      /** The id of the token to create/retrieve that is used for the app. */
      tokenid: _propTypes.default.string.isRequired
    }).isRequired
  })
};

var styles = function styles(theme) {
  return {
    listItemAvatar: {
      marginRight: '16px',
      marginTop: '20px'
    },
    avatar: {
      borderRadius: '20%'
    },
    root: {
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%'
    },
    form: {
      width: '100%'
    },
    input: {
      width: '40%',
      display: 'inline-block',
      marginRight: '1em'
    }
  };
};

var RepositoryQuickCreate = (0, _styles.withStyles)(styles)(RepositoryQuickCreateComponent);
exports.RepositoryQuickCreate = RepositoryQuickCreate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvY3J1ZC9SZXBvc2l0b3J5UXVpY2tDcmVhdGUuanMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeVF1aWNrQ3JlYXRlQ29tcG9uZW50IiwiY2xhc3NlcyIsImF1dGhlbnRpY2F0aW9uIiwidXNlciIsInVzZXJuYW1lIiwiYXZhdGFyX3VybCIsImNvbmZpZyIsIm9uUmVwb3NpdG9yeSIsInJlcG8iLCJzZXRSZXBvIiwidXBkYXRlUmVwb3NpdG9yeSIsIl9yZXBvIiwicmVwb3NpdG9yeSIsImhhbmRsZUNyZWF0ZSIsInJvb3QiLCJsaXN0SXRlbUF2YXRhciIsImF2YXRhciIsImZvcm0iLCJpbnB1dCIsInVuZGVmaW5lZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwidG9rZW4iLCJzZXJ2ZXIiLCJzdHJpbmciLCJ0b2tlbmlkIiwic3R5bGVzIiwidGhlbWUiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImRpc3BsYXkiLCJSZXBvc2l0b3J5UXVpY2tDcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsOEJBQVQsT0FXRztBQUFBLE1BVkRDLE9BVUMsUUFWREEsT0FVQztBQUFBLE1BVERDLGNBU0MsUUFUREEsY0FTQztBQUFBLGlDQVJEQSxjQVFDO0FBQUEsa0RBUENDLElBT0Q7QUFBQSxNQU5HQyxRQU1ILHlCQU5HQSxRQU1IO0FBQUEsTUFMR0MsVUFLSCx5QkFMR0EsVUFLSDtBQUFBLE1BSENDLE1BR0QsdUJBSENBLE1BR0Q7QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7O0FBQUEsa0JBQ3VCLHNCQUR2QjtB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QUFBQSxPQUFPLEVBQUUsY0FGSjtBQUdMTCxNQUFBQSxXQUFXLEVBQUU7QUFIUjtBQWhCa0IsR0FBWjtBQUFBLENBQWY7O0FBdUJPLElBQU1NLHFCQUFxQixHQUFHLHdCQUFXUixNQUFYLEVBQW1CakMsOEJBQW5CLENBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1BdmF0YXIsXG4gIExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uLFxuICBJY29uQnV0dG9uLFxuICBUZXh0RmllbGRcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkQ2lyY2xlLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbXBvcnQgeyBjcmVhdGVSZXBvc2l0b3J5LCBleHRlbmRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmZ1bmN0aW9uIFJlcG9zaXRvcnlRdWlja0NyZWF0ZUNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIGF1dGhlbnRpY2F0aW9uLFxuICBhdXRoZW50aWNhdGlvbjoge1xuICAgIHVzZXI6IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgYXZhdGFyX3VybCxcbiAgICB9LFxuICAgIGNvbmZpZyxcbiAgfSxcbiAgb25SZXBvc2l0b3J5LFxufSkge1xuICBjb25zdCBbcmVwbywgc2V0UmVwb10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHVwZGF0ZVJlcG9zaXRvcnkgPSAoX3JlcG8pID0+IHtcbiAgICBpZiAoX3JlcG8pIHtcbiAgICAgIF9yZXBvID0gZXh0ZW5kUmVwb3NpdG9yeSh7XG4gICAgICAgIHJlcG9zaXRvcnk6IF9yZXBvLCBhdXRoZW50aWNhdGlvbiwgdXBkYXRlUmVwb3NpdG9yeSwgY29uZmlnXG4gICAgICB9KTtcbiAgICB9XG4gICAgb25SZXBvc2l0b3J5KF9yZXBvKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gYXdhaXQgY3JlYXRlUmVwb3NpdG9yeSh7cmVwbywgY29uZmlnfSk7XG4gICAgdXBkYXRlUmVwb3NpdG9yeShyZXBvc2l0b3J5KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpc3RJdGVtXG4gICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICBDb250YWluZXJDb21wb25lbnQ9XCJkaXZcIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgPlxuICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbUF2YXRhcn0+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBhbHQ9e3VzZXJuYW1lfVxuICAgICAgICAgIHNyYz17YXZhdGFyX3VybH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfVxuICAgICAgICAvPlxuICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPSdvd25lcicgbGFiZWw9J093bmVyJyB0eXBlPSd0ZXh0JyBkaXNhYmxlZFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgbWFyZ2luPVwibm9ybWFsXCIgZnVsbFdpZHRoXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9J3JlcG8nIGxhYmVsPSdSZXBvc2l0b3J5JyB0eXBlPSd0ZXh0JyByZXF1aXJlZFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgbWFyZ2luPVwibm9ybWFsXCIgZnVsbFdpZHRoXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIiBhdXRvRm9jdXMgYXV0b0NvbXBsZXRlPXt1bmRlZmluZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7c2V0UmVwbyhldmVudC50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIFJlcG9cIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBZGRDaXJjbGUgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICA8L0xpc3RJdGVtPlxuICApO1xufVxuXG5SZXBvc2l0b3J5UXVpY2tDcmVhdGVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVwb3NpdG9yeSBpcyBzZWxlY3RlZC4gKi9cbiAgb25SZXBvc2l0b3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogQSBwYXNzZWQgYXV0aGVudGljYXRpb24gb2JqZWN0IGZyb20gbG9naW4uICovXG4gIGF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0b2tlbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIC8qKiBUaGUgR2l0ZWEgc2VydmVyIHRvIHVzZSB3aGVuIGF1dGhlbnRpY2F0aW5nLiAqL1xuICAgICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAvKiogVGhlIGlkIG9mIHRoZSB0b2tlbiB0byBjcmVhdGUvcmV0cmlldmUgdGhhdCBpcyB1c2VkIGZvciB0aGUgYXBwLiAqL1xuICAgICAgdG9rZW5pZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH0pLFxufTtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBsaXN0SXRlbUF2YXRhcjoge1xuICAgIG1hcmdpblJpZ2h0OiAnMTZweCcsXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIGJvcmRlclJhZGl1czogJzIwJScsXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICBtYXJnaW5MZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBpbnB1dDoge1xuICAgIHdpZHRoOiAnNDAlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5SaWdodDogJzFlbScsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgUmVwb3NpdG9yeVF1aWNrQ3JlYXRlID0gd2l0aFN0eWxlcyhzdHlsZXMpKFJlcG9zaXRvcnlRdWlja0NyZWF0ZUNvbXBvbmVudCk7XG4iXX0=