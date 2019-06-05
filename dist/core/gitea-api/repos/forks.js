"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFork = exports.readForks = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1'; // GET /repos/{owner}/{repo}/forks

var readForks =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref.owner, repo = _ref.repo, config = _ref.config;
            url = _path.default.join(apiPath, 'repos', owner, repo, 'forks');
            _context.next = 4;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readForks(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // POST /repos/{owner}/{repo}/forks


exports.readForks = readForks;

var createFork =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var owner, repo, organization, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref3.owner, repo = _ref3.repo, organization = _ref3.organization, config = _ref3.config;
            url = _path.default.join(apiPath, 'repos', owner, repo, 'forks');
            payload = organization ? {
              organization: organization
            } : {};
            _context2.next = 5;
            return (0, _.post)({
              url: url,
              payload: payload,
              config: config
            });

          case 5:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createFork(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createFork = createFork;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9mb3Jrcy5qcyJdLCJuYW1lcyI6WyJhcGlQYXRoIiwicmVhZEZvcmtzIiwib3duZXIiLCJyZXBvIiwiY29uZmlnIiwidXJsIiwiUGF0aCIsImpvaW4iLCJyZXNwb25zZSIsImNyZWF0ZUZvcmsiLCJvcmdhbml6YXRpb24iLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFFBQWhCLEMsQ0FFQTs7QUFDTyxJQUFNQyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsWUFBQUEsS0FBUixRQUFRQSxLQUFSLEVBQWVDLElBQWYsUUFBZUEsSUFBZixFQUFxQkMsTUFBckIsUUFBcUJBLE1BQXJCO0FBQ2pCQyxZQUFBQSxHQURpQixHQUNYQyxjQUFLQyxJQUFMLENBQVVQLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEJFLEtBQTVCLEVBQW1DQyxJQUFuQyxFQUF5QyxPQUF6QyxDQURXO0FBQUE7QUFBQSxtQkFFQSxXQUFJO0FBQUNFLGNBQUFBLEdBQUcsRUFBSEEsR0FBRDtBQUFNRCxjQUFBQSxNQUFNLEVBQU5BO0FBQU4sYUFBSixDQUZBOztBQUFBO0FBRWpCSSxZQUFBQSxRQUZpQjtBQUFBLDZDQUdoQkEsUUFIZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFAsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmLEMsQ0FNUDs7Ozs7QUFDTyxJQUFNUSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUVAsWUFBQUEsS0FBUixTQUFRQSxLQUFSLEVBQWVDLElBQWYsU0FBZUEsSUFBZixFQUFxQk8sWUFBckIsU0FBcUJBLFlBQXJCLEVBQW1DTixNQUFuQyxTQUFtQ0EsTUFBbkM7QUFDbEJDLFlBQUFBLEdBRGtCLEdBQ1pDLGNBQUtDLElBQUwsQ0FBVVAsT0FBVixFQUFtQixPQUFuQixFQUE0QkUsS0FBNUIsRUFBbUNDLElBQW5DLEVBQXlDLE9BQXpDLENBRFk7QUFFbEJRLFlBQUFBLE9BRmtCLEdBRVBELFlBQUQsR0FBaUI7QUFBQ0EsY0FBQUEsWUFBWSxFQUFaQTtBQUFELGFBQWpCLEdBQWtDLEVBRjFCO0FBQUE7QUFBQSxtQkFHRCxZQUFLO0FBQUNMLGNBQUFBLEdBQUcsRUFBSEEsR0FBRDtBQUFNTSxjQUFBQSxPQUFPLEVBQVBBLE9BQU47QUFBZVAsY0FBQUEsTUFBTSxFQUFOQTtBQUFmLGFBQUwsQ0FIQzs7QUFBQTtBQUdsQkksWUFBQUEsUUFIa0I7QUFBQSw4Q0FJakJBLFFBSmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZDLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSAnLi4vJztcblxuY29uc3QgYXBpUGF0aCA9ICdhcGkvdjEnO1xuXG4vLyBHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXG5leHBvcnQgY29uc3QgcmVhZEZvcmtzID0gYXN5bmMgKHtvd25lciwgcmVwbywgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8sICdmb3JrcycpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldCh7dXJsLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuLy8gUE9TVCAvcmVwb3Mve293bmVyfS97cmVwb30vZm9ya3NcbmV4cG9ydCBjb25zdCBjcmVhdGVGb3JrID0gYXN5bmMgKHtvd25lciwgcmVwbywgb3JnYW5pemF0aW9uLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwbywgJ2ZvcmtzJyk7XG4gIGNvbnN0IHBheWxvYWQgPSAob3JnYW5pemF0aW9uKSA/IHtvcmdhbml6YXRpb259IDoge307XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdCh7dXJsLCBwYXlsb2FkLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==