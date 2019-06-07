"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authentication = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _LoginForm = require("./LoginForm");

var _core = require("../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AuthenticationComponent(_ref) {
  var classes = _ref.classes,
      _ref$messages = _ref.messages,
      actionText = _ref$messages.actionText,
      genericError = _ref$messages.genericError,
      usernameError = _ref$messages.usernameError,
      passwordError = _ref$messages.passwordError,
      authentication = _ref.authentication,
      onAuthentication = _ref.onAuthentication,
      config = _ref.config;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref2) {
      var username, password, remember, _authentication, user, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = _ref2.username, password = _ref2.password, remember = _ref2.remember;

              if (!(authentication && onAuthentication)) {
                _context.next = 5;
                break;
              }

              onAuthentication();
              _context.next = 16;
              break;

            case 5:
              _context.prev = 5;
              _context.next = 8;
              return (0, _core.authenticate)({
                username: username,
                password: password,
                config: config
              });

            case 8:
              _authentication = _context.sent;
              _authentication.remember = remember;

              if (_authentication) {
                user = _authentication.user, token = _authentication.token;

                if (user && token) {
                  setError();
                  onAuthentication(_authentication);
                } else {
                  if (!user) setError(usernameError);else if (!token) setError(passwordError);
                }
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              setError(genericError);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 13]]);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_LoginForm.LoginForm, {
    authentication: authentication,
    actionText: actionText,
    errorText: error,
    onSubmit: onSubmit
  });
}

AuthenticationComponent.propTypes = {
  /** @ignore */
  classes: _propTypes.default.object.isRequired,

  /** Callback function to propogate the user/token used for API Authentication. */
  onAuthentication: _propTypes.default.func.isRequired,

  /** Override the default text and errors. Must override all or none. */
  messages: _propTypes.default.shape({
    actionText: _propTypes.default.string.isRequired,
    genericError: _propTypes.default.string.isRequired,
    usernameError: _propTypes.default.string.isRequired,
    passwordError: _propTypes.default.string.isRequired
  }),

  /** Configuration for authentication to work, server and tokenid are required. */
  config: _propTypes.default.shape({
    /** The Gitea server to use when authenticating. */
    server: _propTypes.default.string.isRequired,

    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: _propTypes.default.string.isRequired
  }).isRequired
};
AuthenticationComponent.defaultProps = {
  messages: {
    actionText: "Login",
    genericError: "Something went wrong, please try again.",
    usernameError: "Username does not exist.",
    passwordError: "Password is invalid."
  }
};

var styles = function styles(theme) {
  return {
    root: {}
  };
};

var Authentication = (0, _withStyles.default)(styles)(AuthenticationComponent);
exports.Authentication = Authentication;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL0F1dGhlbnRpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IiwiY2xhc3NlcyIsIm1lc3NhZ2VzIiwiYWN0aW9uVGV4dCIsImdlbmVyaWNFcnJvciIsInVzZXJuYW1lRXJyb3IiLCJwYXNzd29yZEVycm9yIiwiYXV0aGVudGljYXRpb24iLCJvbkF1dGhlbnRpY2F0aW9uIiwiY29uZmlnIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uU3VibWl0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlbWVtYmVyIiwidXNlciIsInRva2VuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzaGFwZSIsInN0cmluZyIsInNlcnZlciIsInRva2VuaWQiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJBdXRoZW50aWNhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSx1QkFBVCxPQVdHO0FBQUEsTUFWREMsT0FVQyxRQVZEQSxPQVVDO0FBQUEsMkJBVERDLFFBU0M7QUFBQSxNQVJDQyxVQVFELGlCQVJDQSxVQVFEO0FBQUEsTUFQQ0MsWUFPRCxpQkFQQ0EsWUFPRDtBQUFBLE1BTkNDLGFBTUQsaUJBTkNBLGFBTUQ7QUFBQSxNQUxDQyxhQUtELGlCQUxDQSxhQUtEO0FBQUEsTUFIREMsY0FHQyxRQUhEQSxjQUdDO0FBQUEsTUFGREMsZ0JBRUMsUUFGREEsZ0JBRUM7QUFBQSxNQUREQyxNQUNDLFFBRERBLE1BQ0M7O0FBQUEsa0JBQ3lCLHNCQUR6QjtBQUFBO0FBQUEsTUFDTUMsS0FETjtBQUFBLE1BQ2FDLFFBRGI7O0FBR0QsTUFBTUMsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUc7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LElBQUFBLElBQUksRUFBRTtBQURtQixHQUFaO0FBQUEsQ0FBZjs7QUFJTyxJQUFNQyxjQUFjLEdBQUcseUJBQVdILE1BQVgsRUFBbUI1Qix1QkFBbkIsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuL0xvZ2luRm9ybSc7XG5pbXBvcnQgeyBhdXRoZW50aWNhdGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZnVuY3Rpb24gQXV0aGVudGljYXRpb25Db21wb25lbnQoe1xuICBjbGFzc2VzLFxuICBtZXNzYWdlczoge1xuICAgIGFjdGlvblRleHQsXG4gICAgZ2VuZXJpY0Vycm9yLFxuICAgIHVzZXJuYW1lRXJyb3IsXG4gICAgcGFzc3dvcmRFcnJvcixcbiAgfSxcbiAgYXV0aGVudGljYXRpb24sXG4gIG9uQXV0aGVudGljYXRpb24sXG4gIGNvbmZpZyxcbn0pIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHt1c2VybmFtZSwgcGFzc3dvcmQsIHJlbWVtYmVyfSkgPT4ge1xuICAgIGlmIChhdXRoZW50aWNhdGlvbiAmJiBvbkF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICBvbkF1dGhlbnRpY2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uID0gYXdhaXQgYXV0aGVudGljYXRlKHt1c2VybmFtZSwgcGFzc3dvcmQsIGNvbmZpZ30pO1xuICAgICAgICBhdXRoZW50aWNhdGlvbi5yZW1lbWJlciA9IHJlbWVtYmVyO1xuICAgICAgICBpZiAoYXV0aGVudGljYXRpb24pIHtcbiAgICAgICAgICBjb25zdCB7dXNlciwgdG9rZW59ID0gYXV0aGVudGljYXRpb247XG4gICAgICAgICAgaWYgKHVzZXIgJiYgdG9rZW4pIHtcbiAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICBvbkF1dGhlbnRpY2F0aW9uKGF1dGhlbnRpY2F0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1c2VyKSBzZXRFcnJvcih1c2VybmFtZUVycm9yKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0b2tlbikgc2V0RXJyb3IocGFzc3dvcmRFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgc2V0RXJyb3IoZ2VuZXJpY0Vycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2dpbkZvcm1cbiAgICAgIGF1dGhlbnRpY2F0aW9uPXthdXRoZW50aWNhdGlvbn1cbiAgICAgIGFjdGlvblRleHQ9e2FjdGlvblRleHR9XG4gICAgICBlcnJvclRleHQ9e2Vycm9yfVxuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgIC8+XG4gIClcbn1cblxuQXV0aGVudGljYXRpb25Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBDYWxsYmFjayBmdW5jdGlvbiB0byBwcm9wb2dhdGUgdGhlIHVzZXIvdG9rZW4gdXNlZCBmb3IgQVBJIEF1dGhlbnRpY2F0aW9uLiAqL1xuICBvbkF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBhbmQgZXJyb3JzLiBNdXN0IG92ZXJyaWRlIGFsbCBvciBub25lLiAqL1xuICBtZXNzYWdlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ2VuZXJpY0Vycm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXNlcm5hbWVFcnJvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBhc3N3b3JkRXJyb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIC8qKiBDb25maWd1cmF0aW9uIGZvciBhdXRoZW50aWNhdGlvbiB0byB3b3JrLCBzZXJ2ZXIgYW5kIHRva2VuaWQgYXJlIHJlcXVpcmVkLiAqL1xuICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLyoqIFRoZSBHaXRlYSBzZXJ2ZXIgdG8gdXNlIHdoZW4gYXV0aGVudGljYXRpbmcuICovXG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLyoqIFRoZSBpZCBvZiB0aGUgdG9rZW4gdG8gY3JlYXRlL3JldHJpZXZlIHRoYXQgaXMgdXNlZCBmb3IgdGhlIGFwcC4gKi9cbiAgICB0b2tlbmlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5BdXRoZW50aWNhdGlvbkNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgYWN0aW9uVGV4dDogXCJMb2dpblwiLFxuICAgIGdlbmVyaWNFcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICB1c2VybmFtZUVycm9yOiBcIlVzZXJuYW1lIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgIHBhc3N3b3JkRXJyb3I6IFwiUGFzc3dvcmQgaXMgaW52YWxpZC5cIixcbiAgfVxufTtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb24gPSB3aXRoU3R5bGVzKHN0eWxlcykoQXV0aGVudGljYXRpb25Db21wb25lbnQpO1xuIl19