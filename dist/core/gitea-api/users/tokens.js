"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = exports.getTokens = void 0;

var _path = _interopRequireDefault(require("path"));

var _core = require("../core");

var _authentication = require("../authentication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1';

var getTokens =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var username, password, config, tokens, url, authentication;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, password = _ref.password, config = _ref.config;
            url = _path.default.join(apiPath, 'users', username, 'tokens');
            authentication = (0, _authentication.encodeAuthentication)({
              username: username,
              password: password
            });
            config.headers = {
              'Content-Type': 'application/json',
              'Authorization': authentication
            };
            _context.prev = 4;
            _context.next = 7;
            return (0, _core.get)({
              url: url,
              config: config
            });

          case 7:
            tokens = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            tokens = null;

          case 13:
            return _context.abrupt("return", tokens);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function getTokens(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTokens = getTokens;

var createToken =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, password, _ref3$config, config, token, url, authentication, payload;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, password = _ref3.password, _ref3$config = _ref3.config, config = _ref3$config === void 0 ? {} : _ref3$config;
            url = _path.default.join(apiPath, 'users', username, 'tokens');
            authentication = (0, _authentication.encodeAuthentication)({
              username: username,
              password: password
            });
            config.headers = {
              'Content-Type': 'application/json',
              'Authorization': authentication
            };
            payload = {
              "name": config.tokenid
            };
            _context2.prev = 5;
            _context2.next = 8;
            return (0, _core.post)({
              url: url,
              payload: payload,
              config: config
            });

          case 8:
            token = _context2.sent;
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](5);
            token = [];

          case 14:
            return _context2.abrupt("return", token);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 11]]);
  }));

  return function createToken(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createToken = createToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy90b2tlbnMuanMiXSwibmFtZXMiOlsiYXBpUGF0aCIsImdldFRva2VucyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maWciLCJ1cmwiLCJQYXRoIiwiam9pbiIsImF1dGhlbnRpY2F0aW9uIiwiaGVhZGVycyIsInRva2VucyIsImNyZWF0ZVRva2VuIiwicGF5bG9hZCIsInRva2VuaWQiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxRQUFoQjs7QUFFTyxJQUFNQyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsWUFBQUEsUUFBUixRQUFRQSxRQUFSLEVBQWtCQyxRQUFsQixRQUFrQkEsUUFBbEIsRUFBNEJDLE1BQTVCLFFBQTRCQSxNQUE1QjtBQUVqQkMsWUFBQUEsR0FGaUIsR0FFWEMsY0FBS0MsSUFBTCxDQUFVUCxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCRSxRQUE1QixFQUFzQyxRQUF0QyxDQUZXO0FBR2pCTSxZQUFBQSxjQUhpQixHQUdBLDBDQUFxQjtBQUFDTixjQUFBQSxRQUFRLEVBQVJBLFFBQUQ7QUFBV0MsY0FBQUEsUUFBUSxFQUFSQTtBQUFYLGFBQXJCLENBSEE7QUFJdkJDLFlBQUFBLE1BQU0sQ0FBQ0ssT0FBUCxHQUFpQjtBQUNiLDhCQUFnQixrQkFESDtBQUViLCtCQUFpQkQ7QUFGSixhQUFqQjtBQUp1QjtBQUFBO0FBQUEsbUJBU04sZUFBSTtBQUFDSCxjQUFBQSxHQUFHLEVBQUhBLEdBQUQ7QUFBTUQsY0FBQUEsTUFBTSxFQUFOQTtBQUFOLGFBQUosQ0FUTTs7QUFBQTtBQVNyQk0sWUFBQUEsTUFUcUI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVViQSxZQUFBQSxNQUFNLEdBQUcsSUFBVDs7QUFWYTtBQUFBLDZDQVdoQkEsTUFYZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFQsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmOzs7O0FBY0EsSUFBTVUsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRVCxZQUFBQSxRQUFSLFNBQVFBLFFBQVIsRUFBa0JDLFFBQWxCLFNBQWtCQSxRQUFsQix1QkFBNEJDLE1BQTVCLEVBQTRCQSxNQUE1Qiw2QkFBbUMsRUFBbkM7QUFFbkJDLFlBQUFBLEdBRm1CLEdBRWJDLGNBQUtDLElBQUwsQ0FBVVAsT0FBVixFQUFtQixPQUFuQixFQUE0QkUsUUFBNUIsRUFBc0MsUUFBdEMsQ0FGYTtBQUduQk0sWUFBQUEsY0FIbUIsR0FHRiwwQ0FBcUI7QUFBQ04sY0FBQUEsUUFBUSxFQUFSQSxRQUFEO0FBQVdDLGNBQUFBLFFBQVEsRUFBUkE7QUFBWCxhQUFyQixDQUhFO0FBSXpCQyxZQUFBQSxNQUFNLENBQUNLLE9BQVAsR0FBaUI7QUFDZiw4QkFBZ0Isa0JBREQ7QUFFZiwrQkFBaUJEO0FBRkYsYUFBakI7QUFJTUksWUFBQUEsT0FSbUIsR0FRVDtBQUFDLHNCQUFRUixNQUFNLENBQUNTO0FBQWhCLGFBUlM7QUFBQTtBQUFBO0FBQUEsbUJBVVQsZ0JBQUs7QUFBQ1IsY0FBQUEsR0FBRyxFQUFIQSxHQUFEO0FBQU1PLGNBQUFBLE9BQU8sRUFBUEEsT0FBTjtBQUFlUixjQUFBQSxNQUFNLEVBQU5BO0FBQWYsYUFBTCxDQVZTOztBQUFBO0FBVXZCVSxZQUFBQSxLQVZ1QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV2ZBLFlBQUFBLEtBQUssR0FBRyxFQUFSOztBQVhlO0FBQUEsOENBWWxCQSxLQVprQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYSCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgZW5jb2RlQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbic7XG5cbmNvbnN0IGFwaVBhdGggPSAnYXBpL3YxJztcblxuZXhwb3J0IGNvbnN0IGdldFRva2VucyA9IGFzeW5jICh7dXNlcm5hbWUsIHBhc3N3b3JkLCBjb25maWd9KSA9PiB7XG4gIGxldCB0b2tlbnM7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAndXNlcnMnLCB1c2VybmFtZSwgJ3Rva2VucycpO1xuICBjb25zdCBhdXRoZW50aWNhdGlvbiA9IGVuY29kZUF1dGhlbnRpY2F0aW9uKHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcbiAgY29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBhdXRoZW50aWNhdGlvbixcbiAgfTtcbiAgdHJ5IHtcbiAgICB0b2tlbnMgPSBhd2FpdCBnZXQoe3VybCwgY29uZmlnfSk7XG4gIH0gY2F0Y2ggeyB0b2tlbnMgPSBudWxsOyB9XG4gIHJldHVybiB0b2tlbnM7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9rZW4gPSBhc3luYyAoe3VzZXJuYW1lLCBwYXNzd29yZCwgY29uZmlnPXt9fSkgPT4ge1xuICBsZXQgdG9rZW47XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAndXNlcnMnLCB1c2VybmFtZSwgJ3Rva2VucycpO1xuICBjb25zdCBhdXRoZW50aWNhdGlvbiA9IGVuY29kZUF1dGhlbnRpY2F0aW9uKHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcbiAgY29uZmlnLmhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQXV0aG9yaXphdGlvbic6IGF1dGhlbnRpY2F0aW9uLFxuICB9O1xuICBjb25zdCBwYXlsb2FkID0ge1wibmFtZVwiOiBjb25maWcudG9rZW5pZH07XG4gIHRyeSB7XG4gICAgdG9rZW4gPSBhd2FpdCBwb3N0KHt1cmwsIHBheWxvYWQsIGNvbmZpZ30pO1xuICB9IGNhdGNoIHsgdG9rZW4gPSBbXTsgfVxuICByZXR1cm4gdG9rZW47XG59O1xuIl19