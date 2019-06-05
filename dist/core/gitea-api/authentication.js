"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeAuthentication = exports.authenticate = void 0;

var _base = _interopRequireDefault(require("base-64"));

var _utf = _interopRequireDefault(require("utf8"));

var _users = require("./users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authenticate =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$username, username, _ref$password, password, config, authentication, tokens, tokenMatches;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$username = _ref.username, username = _ref$username === void 0 ? '' : _ref$username, _ref$password = _ref.password, password = _ref$password === void 0 ? '' : _ref$password, config = _ref.config;
            authentication = {
              config: config
            };

            if (!username) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return (0, _users.getUser)({
              username: username,
              config: config
            });

          case 5:
            authentication.user = _context.sent;

          case 6:
            if (!(username && password)) {
              _context.next = 19;
              break;
            }

            _context.next = 9;
            return (0, _users.getTokens)({
              username: username,
              password: password,
              config: config
            });

          case 9:
            tokens = _context.sent;

            if (!tokens) {
              _context.next = 19;
              break;
            }

            tokenMatches = tokens.filter(function (_token) {
              return _token.name === config.tokenid;
            });

            if (!(tokenMatches.length > 0)) {
              _context.next = 16;
              break;
            }

            authentication.token = tokenMatches[0];
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return (0, _users.createToken)({
              username: username,
              password: password,
              config: config
            });

          case 18:
            authentication.token = _context.sent;

          case 19:
            return _context.abrupt("return", authentication);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function authenticate(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.authenticate = authenticate;

var encodeAuthentication = function encodeAuthentication(_ref3) {
  var username = _ref3.username,
      password = _ref3.password,
      token = _ref3.token;
  var authentication;

  if (token) {
    var sha1 = _typeof(token) === 'object' ? token.sha1 : token;
    authentication = "token ".concat(sha1);
  } else if (username && password) {
    var encoded = _base.default.encode(_utf.default.encode("".concat(username, ":").concat(password)));

    authentication = 'Basic ' + encoded;
  }

  return authentication;
};

exports.encodeAuthentication = encodeAuthentication;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9hdXRoZW50aWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJhdXRoZW50aWNhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uZmlnIiwiYXV0aGVudGljYXRpb24iLCJ1c2VyIiwidG9rZW5zIiwidG9rZW5NYXRjaGVzIiwiZmlsdGVyIiwiX3Rva2VuIiwibmFtZSIsInRva2VuaWQiLCJsZW5ndGgiLCJ0b2tlbiIsImVuY29kZUF1dGhlbnRpY2F0aW9uIiwic2hhMSIsImVuY29kZWQiLCJiYXNlNjQiLCJlbmNvZGUiLCJ1dGY4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQVFDLFFBQVIsRUFBUUEsUUFBUiw4QkFBaUIsRUFBakIsdUNBQXFCQyxRQUFyQixFQUFxQkEsUUFBckIsOEJBQThCLEVBQTlCLGtCQUFrQ0MsTUFBbEMsUUFBa0NBLE1BQWxDO0FBQ3RCQyxZQUFBQSxjQURzQixHQUNMO0FBQUNELGNBQUFBLE1BQU0sRUFBTkE7QUFBRCxhQURLOztBQUFBLGlCQUV0QkYsUUFGc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFFZ0Isb0JBQVE7QUFBQ0EsY0FBQUEsUUFBUSxFQUFSQSxRQUFEO0FBQVdFLGNBQUFBLE1BQU0sRUFBTkE7QUFBWCxhQUFSLENBRmhCOztBQUFBO0FBRVpDLFlBQUFBLGNBQWMsQ0FBQ0MsSUFGSDs7QUFBQTtBQUFBLGtCQUd0QkosUUFBUSxJQUFJQyxRQUhVO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUgsc0JBQVU7QUFBQ0QsY0FBQUEsUUFBUSxFQUFSQSxRQUFEO0FBQVdDLGNBQUFBLFFBQVEsRUFBUkEsUUFBWDtBQUFxQkMsY0FBQUEsTUFBTSxFQUFOQTtBQUFyQixhQUFWLENBSkc7O0FBQUE7QUFJbEJHLFlBQUFBLE1BSmtCOztBQUFBLGlCQUtwQkEsTUFMb0I7QUFBQTtBQUFBO0FBQUE7O0FBTWhCQyxZQUFBQSxZQU5nQixHQU1ERCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFBQyxNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQlAsTUFBTSxDQUFDUSxPQUEzQjtBQUFBLGFBQXBCLENBTkM7O0FBQUEsa0JBT2xCSixZQUFZLENBQUNLLE1BQWIsR0FBc0IsQ0FQSjtBQUFBO0FBQUE7QUFBQTs7QUFPT1IsWUFBQUEsY0FBYyxDQUFDUyxLQUFmLEdBQXVCTixZQUFZLENBQUMsQ0FBRCxDQUFuQztBQVBQO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQVFZLHdCQUFZO0FBQUNOLGNBQUFBLFFBQVEsRUFBUkEsUUFBRDtBQUFXQyxjQUFBQSxRQUFRLEVBQVJBLFFBQVg7QUFBcUJDLGNBQUFBLE1BQU0sRUFBTkE7QUFBckIsYUFBWixDQVJaOztBQUFBO0FBUWpCQyxZQUFBQSxjQUFjLENBQUNTLEtBUkU7O0FBQUE7QUFBQSw2Q0FXbkJULGNBWG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpKLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7Ozs7QUFjQSxJQUFNYyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLFFBQWlDO0FBQUEsTUFBL0JiLFFBQStCLFNBQS9CQSxRQUErQjtBQUFBLE1BQXJCQyxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxNQUFYVyxLQUFXLFNBQVhBLEtBQVc7QUFDbkUsTUFBSVQsY0FBSjs7QUFDQSxNQUFJUyxLQUFKLEVBQVc7QUFDVCxRQUFJRSxJQUFJLEdBQUcsUUFBT0YsS0FBUCxNQUFpQixRQUFqQixHQUE0QkEsS0FBSyxDQUFDRSxJQUFsQyxHQUF5Q0YsS0FBcEQ7QUFDQVQsSUFBQUEsY0FBYyxtQkFBWVcsSUFBWixDQUFkO0FBQ0QsR0FIRCxNQUdPLElBQUlkLFFBQVEsSUFBSUMsUUFBaEIsRUFBMEI7QUFDL0IsUUFBTWMsT0FBTyxHQUFHQyxjQUFPQyxNQUFQLENBQWNDLGFBQUtELE1BQUwsV0FBZWpCLFFBQWYsY0FBMkJDLFFBQTNCLEVBQWQsQ0FBaEI7O0FBQ0FFLElBQUFBLGNBQWMsR0FBRyxXQUFXWSxPQUE1QjtBQUNEOztBQUNELFNBQU9aLGNBQVA7QUFDRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlLTY0JztcbmltcG9ydCB1dGY4IGZyb20gJ3V0ZjgnO1xuXG5pbXBvcnQgeyBnZXRVc2VyLCBnZXRUb2tlbnMsIGNyZWF0ZVRva2VuIH0gZnJvbSAnLi91c2Vycyc7XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoe3VzZXJuYW1lPScnLCBwYXNzd29yZD0nJywgY29uZmlnfSkgPT4ge1xuICBsZXQgYXV0aGVudGljYXRpb24gPSB7Y29uZmlnfTtcbiAgaWYgKHVzZXJuYW1lKSBhdXRoZW50aWNhdGlvbi51c2VyID0gYXdhaXQgZ2V0VXNlcih7dXNlcm5hbWUsIGNvbmZpZ30pO1xuICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBhd2FpdCBnZXRUb2tlbnMoe3VzZXJuYW1lLCBwYXNzd29yZCwgY29uZmlnfSk7XG4gICAgaWYgKHRva2Vucykge1xuICAgICAgY29uc3QgdG9rZW5NYXRjaGVzID0gdG9rZW5zLmZpbHRlcihfdG9rZW4gPT4gX3Rva2VuLm5hbWUgPT09IGNvbmZpZy50b2tlbmlkKTtcbiAgICAgIGlmICh0b2tlbk1hdGNoZXMubGVuZ3RoID4gMCkgYXV0aGVudGljYXRpb24udG9rZW4gPSB0b2tlbk1hdGNoZXNbMF07XG4gICAgICBlbHNlIGF1dGhlbnRpY2F0aW9uLnRva2VuID0gYXdhaXQgY3JlYXRlVG9rZW4oe3VzZXJuYW1lLCBwYXNzd29yZCwgY29uZmlnfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhdXRoZW50aWNhdGlvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmNvZGVBdXRoZW50aWNhdGlvbiA9ICh7dXNlcm5hbWUsIHBhc3N3b3JkLCB0b2tlbn0pID0+IHtcbiAgbGV0IGF1dGhlbnRpY2F0aW9uO1xuICBpZiAodG9rZW4pIHtcbiAgICBsZXQgc2hhMSA9IHR5cGVvZiB0b2tlbiA9PT0gJ29iamVjdCcgPyB0b2tlbi5zaGExIDogdG9rZW47XG4gICAgYXV0aGVudGljYXRpb24gPSBgdG9rZW4gJHtzaGExfWA7XG4gIH0gZWxzZSBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICBjb25zdCBlbmNvZGVkID0gYmFzZTY0LmVuY29kZSh1dGY4LmVuY29kZShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gKSk7XG4gICAgYXV0aGVudGljYXRpb24gPSAnQmFzaWMgJyArIGVuY29kZWQ7XG4gIH1cbiAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uO1xufTtcbiJdfQ==