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
      var username, password, remember, authentication, user, token;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = _ref2.username, password = _ref2.password, remember = _ref2.remember;
              _context.prev = 1;
              _context.next = 4;
              return (0, _core.authenticate)({
                username: username,
                password: password,
                config: config
              });

            case 4:
              authentication = _context.sent;
              authentication.remember = remember;

              if (authentication) {
                user = authentication.user, token = authentication.token;

                if (user && token) {
                  setError();
                  onAuthentication(authentication);
                } else {
                  if (!user) setError(usernameError);else if (!token) setError(passwordError);
                }
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              setError(genericError);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_LoginForm.LoginForm, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL0F1dGhlbnRpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IiwiY2xhc3NlcyIsIm1lc3NhZ2VzIiwiYWN0aW9uVGV4dCIsImdlbmVyaWNFcnJvciIsInVzZXJuYW1lRXJyb3IiLCJwYXNzd29yZEVycm9yIiwib25BdXRoZW50aWNhdGlvbiIsImNvbmZpZyIsImVycm9yIiwic2V0RXJyb3IiLCJvblN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZW1lbWJlciIsImF1dGhlbnRpY2F0aW9uIiwidXNlciIsInRva2VuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzaGFwZSIsInN0cmluZyIsInNlcnZlciIsInRva2VuaWQiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJBdXRoZW50aWNhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSx1QkFBVCxPQVVHO0FBQUEsTUFUREMsT0FTQyxRQVREQSxPQVNDO0FBQUEsMkJBUkRDLFFBUUM7QUFBQSxNQVBDQyxVQU9ELGlCQVBDQSxVQU9EO0FBQUEsTUFOQ0MsWUFNRCxpQkFOQ0EsWUFNRDtBQUFBLE1BTENDLGFBS0QsaUJBTENBLGFBS0Q7QUFBQSxNQUpDQyxhQUlELGlCQUpDQSxhQUlEO0FBQUEsTUFGREMsZ0JBRUMsUUFGREEsZ0JBRUM7QUFBQSxNQUREQyxNQUNDLFFBRERBLE1BQ0M7O0FBQUEsa0JBQ3lCLHNCQUR6QjtBQUFBO0FBQUEsTUFDTUMsS0FETjtBQUFBLE1BQ2FDLFFBRGI7O0FBR0QsTUFBTUMsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XG5cbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gJy4vTG9naW5Gb3JtJztcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIG1lc3NhZ2VzOiB7XG4gICAgYWN0aW9uVGV4dCxcbiAgICBnZW5lcmljRXJyb3IsXG4gICAgdXNlcm5hbWVFcnJvcixcbiAgICBwYXNzd29yZEVycm9yLFxuICB9LFxuICBvbkF1dGhlbnRpY2F0aW9uLFxuICBjb25maWcsXG59KSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh7dXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlcn0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXV0aGVudGljYXRpb24gPSBhd2FpdCBhdXRoZW50aWNhdGUoe3VzZXJuYW1lLCBwYXNzd29yZCwgY29uZmlnfSk7XG4gICAgICBhdXRoZW50aWNhdGlvbi5yZW1lbWJlciA9IHJlbWVtYmVyO1xuICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHt1c2VyLCB0b2tlbn0gPSBhdXRoZW50aWNhdGlvbjtcbiAgICAgICAgaWYgKHVzZXIgJiYgdG9rZW4pIHtcbiAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgIG9uQXV0aGVudGljYXRpb24oYXV0aGVudGljYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghdXNlcikgc2V0RXJyb3IodXNlcm5hbWVFcnJvcik7XG4gICAgICAgICAgZWxzZSBpZiAoIXRva2VuKSBzZXRFcnJvcihwYXNzd29yZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0RXJyb3IoZ2VuZXJpY0Vycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2dpbkZvcm1cbiAgICAgIGFjdGlvblRleHQ9e2FjdGlvblRleHR9XG4gICAgICBlcnJvclRleHQ9e2Vycm9yfVxuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgIC8+XG4gIClcbn1cblxuQXV0aGVudGljYXRpb25Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBDYWxsYmFjayBmdW5jdGlvbiB0byBwcm9wb2dhdGUgdGhlIHVzZXIvdG9rZW4gdXNlZCBmb3IgQVBJIEF1dGhlbnRpY2F0aW9uLiAqL1xuICBvbkF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBhbmQgZXJyb3JzLiBNdXN0IG92ZXJyaWRlIGFsbCBvciBub25lLiAqL1xuICBtZXNzYWdlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ2VuZXJpY0Vycm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXNlcm5hbWVFcnJvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBhc3N3b3JkRXJyb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIC8qKiBDb25maWd1cmF0aW9uIGZvciBhdXRoZW50aWNhdGlvbiB0byB3b3JrLCBzZXJ2ZXIgYW5kIHRva2VuaWQgYXJlIHJlcXVpcmVkLiAqL1xuICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLyoqIFRoZSBHaXRlYSBzZXJ2ZXIgdG8gdXNlIHdoZW4gYXV0aGVudGljYXRpbmcuICovXG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLyoqIFRoZSBpZCBvZiB0aGUgdG9rZW4gdG8gY3JlYXRlL3JldHJpZXZlIHRoYXQgaXMgdXNlZCBmb3IgdGhlIGFwcC4gKi9cbiAgICB0b2tlbmlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5BdXRoZW50aWNhdGlvbkNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgYWN0aW9uVGV4dDogXCJMb2dpblwiLFxuICAgIGdlbmVyaWNFcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICB1c2VybmFtZUVycm9yOiBcIlVzZXJuYW1lIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgIHBhc3N3b3JkRXJyb3I6IFwiUGFzc3dvcmQgaXMgaW52YWxpZC5cIixcbiAgfVxufTtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb24gPSB3aXRoU3R5bGVzKHN0eWxlcykoQXV0aGVudGljYXRpb25Db21wb25lbnQpO1xuIl19