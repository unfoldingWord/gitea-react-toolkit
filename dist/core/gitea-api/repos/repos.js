"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRepo = exports.updateRepo = exports.readRepo = exports.createRepo = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1'; // POST /api/v1/user/repos

var createRepo =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var repo, settings, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            repo = _ref.repo, settings = _ref.settings, config = _ref.config;
            url = _path.default.join(apiPath, 'user', 'repos');
            payload = _objectSpread({
              name: repo,
              auto_init: true
            }, settings);
            _context.next = 5;
            return (0, _.post)({
              url: url,
              payload: payload,
              config: config
            });

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createRepo(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // GET /api/v1/repos/{owner}/{repo}


exports.createRepo = createRepo;

var readRepo =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref3.owner, repo = _ref3.repo, config = _ref3.config;
            url = _path.default.join(apiPath, 'repos', owner, repo);
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _.get)({
              url: url,
              config: config,
              noCache: true
            });

          case 5:
            response = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            response = null;

          case 11:
            return _context2.abrupt("return", response);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function readRepo(_x2) {
    return _ref4.apply(this, arguments);
  };
}(); // PATCH /api/v1/repos/{owner}/{repo}


exports.readRepo = readRepo;

var updateRepo =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref5) {
    var owner, repo, settings, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = _ref5.owner, repo = _ref5.repo, settings = _ref5.settings, config = _ref5.config;
            url = _path.default.join(apiPath, 'repos', owner, repo);
            payload = _objectSpread({}, settings);
            _context3.prev = 3;
            _context3.next = 6;
            return (0, _.patch)({
              url: url,
              payload: payload,
              config: config
            });

          case 6:
            response = _context3.sent;
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](3);
            response = null;

          case 12:
            return _context3.abrupt("return", response);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 9]]);
  }));

  return function updateRepo(_x3) {
    return _ref6.apply(this, arguments);
  };
}(); // DELETE /api/v1/repos/{owner}/{repo}


exports.updateRepo = updateRepo;

var deleteRepo =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref7) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref7.owner, repo = _ref7.repo, config = _ref7.config;
            url = _path.default.join(apiPath, 'repos', owner, repo);
            _context4.prev = 2;
            _context4.next = 5;
            return (0, _.del)({
              url: url,
              config: config
            });

          case 5:
            response = _context4.sent;
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            response = null;

          case 11:
            return _context4.abrupt("return", response);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8]]);
  }));

  return function deleteRepo(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteRepo = deleteRepo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9yZXBvcy5qcyJdLCJuYW1lcyI6WyJhcGlQYXRoIiwiY3JlYXRlUmVwbyIsInJlcG8iLCJzZXR0aW5ncyIsImNvbmZpZyIsInVybCIsIlBhdGgiLCJqb2luIiwicGF5bG9hZCIsIm5hbWUiLCJhdXRvX2luaXQiLCJyZXNwb25zZSIsInJlYWRSZXBvIiwib3duZXIiLCJub0NhY2hlIiwidXBkYXRlUmVwbyIsImRlbGV0ZVJlcG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFFBQWhCLEMsQ0FFQTs7QUFDTyxJQUFNQyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsWUFBQUEsSUFBUixRQUFRQSxJQUFSLEVBQWNDLFFBQWQsUUFBY0EsUUFBZCxFQUF3QkMsTUFBeEIsUUFBd0JBLE1BQXhCO0FBQ2xCQyxZQUFBQSxHQURrQixHQUNaQyxjQUFLQyxJQUFMLENBQVVQLE9BQVYsRUFBbUIsTUFBbkIsRUFBMkIsT0FBM0IsQ0FEWTtBQUVsQlEsWUFBQUEsT0FGa0I7QUFHdEJDLGNBQUFBLElBQUksRUFBRVAsSUFIZ0I7QUFJdEJRLGNBQUFBLFNBQVMsRUFBRTtBQUpXLGVBU25CUCxRQVRtQjtBQUFBO0FBQUEsbUJBV0QsWUFBSztBQUFDRSxjQUFBQSxHQUFHLEVBQUhBLEdBQUQ7QUFBTUcsY0FBQUEsT0FBTyxFQUFQQSxPQUFOO0FBQWVKLGNBQUFBLE1BQU0sRUFBTkE7QUFBZixhQUFMLENBWEM7O0FBQUE7QUFXbEJPLFlBQUFBLFFBWGtCO0FBQUEsNkNBWWpCQSxRQVppQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWVixVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCLEMsQ0FlUDs7Ozs7QUFDTyxJQUFNVyxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsWUFBQUEsS0FBUixTQUFRQSxLQUFSLEVBQWVYLElBQWYsU0FBZUEsSUFBZixFQUFxQkUsTUFBckIsU0FBcUJBLE1BQXJCO0FBQ2hCQyxZQUFBQSxHQURnQixHQUNWQyxjQUFLQyxJQUFMLENBQVVQLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEJhLEtBQTVCLEVBQW1DWCxJQUFuQyxDQURVO0FBQUE7QUFBQTtBQUFBLG1CQUlILFdBQUk7QUFBQ0csY0FBQUEsR0FBRyxFQUFIQSxHQUFEO0FBQU1ELGNBQUFBLE1BQU0sRUFBTkEsTUFBTjtBQUFjVSxjQUFBQSxPQUFPLEVBQUU7QUFBdkIsYUFBSixDQUpHOztBQUFBO0FBSXBCSCxZQUFBQSxRQUpvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0pBLFlBQUFBLFFBQVEsR0FBRyxJQUFYOztBQUxJO0FBQUEsOENBTWZBLFFBTmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUkMsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkLEMsQ0FTUDs7Ozs7QUFDTyxJQUFNRyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUYsWUFBQUEsS0FBUixTQUFRQSxLQUFSLEVBQWVYLElBQWYsU0FBZUEsSUFBZixFQUFxQkMsUUFBckIsU0FBcUJBLFFBQXJCLEVBQStCQyxNQUEvQixTQUErQkEsTUFBL0I7QUFDbEJDLFlBQUFBLEdBRGtCLEdBQ1pDLGNBQUtDLElBQUwsQ0FBVVAsT0FBVixFQUFtQixPQUFuQixFQUE0QmEsS0FBNUIsRUFBbUNYLElBQW5DLENBRFk7QUFFbEJNLFlBQUFBLE9BRmtCLHFCQWlCbkJMLFFBakJtQjtBQUFBO0FBQUE7QUFBQSxtQkFxQkwsYUFBTTtBQUFDRSxjQUFBQSxHQUFHLEVBQUhBLEdBQUQ7QUFBTUcsY0FBQUEsT0FBTyxFQUFQQSxPQUFOO0FBQWVKLGNBQUFBLE1BQU0sRUFBTkE7QUFBZixhQUFOLENBckJLOztBQUFBO0FBcUJ0Qk8sWUFBQUEsUUFyQnNCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQlBBLFlBQUFBLFFBQVEsR0FBRyxJQUFYOztBQXRCTztBQUFBLDhDQXVCakJBLFFBdkJpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWSSxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCLEMsQ0EwQlA7Ozs7O0FBQ08sSUFBTUMsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFILFlBQUFBLEtBQVIsU0FBUUEsS0FBUixFQUFlWCxJQUFmLFNBQWVBLElBQWYsRUFBcUJFLE1BQXJCLFNBQXFCQSxNQUFyQjtBQUNsQkMsWUFBQUEsR0FEa0IsR0FDWkMsY0FBS0MsSUFBTCxDQUFVUCxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCYSxLQUE1QixFQUFtQ1gsSUFBbkMsQ0FEWTtBQUFBO0FBQUE7QUFBQSxtQkFJTCxXQUFJO0FBQUNHLGNBQUFBLEdBQUcsRUFBSEEsR0FBRDtBQUFNRCxjQUFBQSxNQUFNLEVBQU5BO0FBQU4sYUFBSixDQUpLOztBQUFBO0FBSXRCTyxZQUFBQSxRQUpzQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS05BLFlBQUFBLFFBQVEsR0FBRyxJQUFYOztBQUxNO0FBQUEsOENBTWpCQSxRQU5pQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWSyxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IGdldCwgcG9zdCwgcGF0Y2gsIGRlbCB9IGZyb20gJy4uLyc7XG5cbmNvbnN0IGFwaVBhdGggPSAnYXBpL3YxJztcblxuLy8gUE9TVCAvYXBpL3YxL3VzZXIvcmVwb3NcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXBvID0gYXN5bmMgKHtyZXBvLCBzZXR0aW5ncywgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3VzZXInLCAncmVwb3MnKTtcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBuYW1lOiByZXBvLFxuICAgIGF1dG9faW5pdDogdHJ1ZSxcbiAgICAvLyBkZXNjcmlwdGlvbjogYCR7cmVwb30gY3JlYXRlZCB2aWEgQVBJLmAsXG4gICAgLy8gcHJpdmF0ZTogdHJ1ZSxcbiAgICAvLyByZWFkbWU6IGAjICR7cmVwb30gUkVBRE1FYCxcbiAgICAvLyBsaWNlbnNlOiBgbGljZW5zZSB0ZXh0IGhlcmVgLFxuICAgIC4uLnNldHRpbmdzXG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0KHt1cmwsIHBheWxvYWQsIGNvbmZpZ30pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vLyBHRVQgL2FwaS92MS9yZXBvcy97b3duZXJ9L3tyZXBvfVxuZXhwb3J0IGNvbnN0IHJlYWRSZXBvID0gYXN5bmMgKHtvd25lciwgcmVwbywgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8pO1xuICBsZXQgcmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBnZXQoe3VybCwgY29uZmlnLCBub0NhY2hlOiB0cnVlfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJlc3BvbnNlID0gbnVsbCB9XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbi8vIFBBVENIIC9hcGkvdjEvcmVwb3Mve293bmVyfS97cmVwb31cbmV4cG9ydCBjb25zdCB1cGRhdGVSZXBvID0gYXN5bmMgKHtvd25lciwgcmVwbywgc2V0dGluZ3MsIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsIG93bmVyLCByZXBvKTtcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgLy8gYWxsb3dfbWVyZ2VfY29tbWl0czogdHJ1ZSxcbiAgLy8gYWxsb3dfcmViYXNlOiB0cnVlLFxuICAvLyBhbGxvd19yZWJhc2VfZXhwbGljaXQ6IHRydWUsXG4gIC8vIGFsbG93X3NxdWFzaF9tZXJnZTogdHJ1ZSxcbiAgLy8gYXJjaGl2ZWQ6IHRydWUsXG4gIC8vIGRlZmF1bHRfYnJhbmNoOiBcInN0cmluZ1wiLFxuICAvLyBkZXNjcmlwdGlvbjogXCJzdHJpbmdcIixcbiAgLy8gZW5hYmxlX2lzc3VlczogdHJ1ZSxcbiAgLy8gZW5hYmxlX3B1bGxfcmVxdWVzdHM6IHRydWUsXG4gIC8vIGVuYWJsZV93aWtpOiB0cnVlLFxuICAvLyBpZ25vcmVfd2hpdGVzcGFjZTogdHJ1ZSxcbiAgLy8gbmFtZTogXCJzdHJpbmdcIixcbiAgLy8gcHJpdmF0ZTogdHJ1ZSxcbiAgLy8gd2Vic2l0ZTogXCJzdHJpbmdcIixcbiAgICAuLi5zZXR0aW5ncyxcbiAgfVxuICBsZXQgcmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBwYXRjaCh7dXJsLCBwYXlsb2FkLCBjb25maWd9KTtcbiAgfSBjYXRjaChlcnJvcikgeyByZXNwb25zZSA9IG51bGwgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vLyBERUxFVEUgL2FwaS92MS9yZXBvcy97b3duZXJ9L3tyZXBvfVxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlcG8gPSBhc3luYyAoe293bmVyLCByZXBvLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwbyk7XG4gIGxldCByZXNwb25zZTtcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IGF3YWl0IGRlbCh7dXJsLCBjb25maWd9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmVzcG9uc2UgPSBudWxsIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==