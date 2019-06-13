"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRepo = exports.updateRepo = exports.readRepo = exports.createRepo = exports.ensureRepo = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1';

var ensureRepo =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var owner, repo, settings, config, repository;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref.owner, repo = _ref.repo, settings = _ref.settings, config = _ref.config;
            _context.next = 3;
            return readRepo({
              owner: owner,
              repo: repo,
              config: config
            });

          case 3:
            repository = _context.sent;

            if (repository) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return createRepo({
              repo: repo,
              settings: settings,
              config: config
            });

          case 7:
            repository = _context.sent;

          case 8:
            return _context.abrupt("return", repository);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ensureRepo(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // POST /api/v1/user/repos


exports.ensureRepo = ensureRepo;

var createRepo =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var repo, settings, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            repo = _ref3.repo, settings = _ref3.settings, config = _ref3.config;
            url = _path.default.join(apiPath, 'user', 'repos');
            payload = _objectSpread({
              name: repo,
              auto_init: true
            }, settings);
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

  return function createRepo(_x2) {
    return _ref4.apply(this, arguments);
  };
}(); // GET /api/v1/repos/{owner}/{repo}


exports.createRepo = createRepo;

var readRepo =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref5) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = _ref5.owner, repo = _ref5.repo, config = _ref5.config;
            url = _path.default.join(apiPath, 'repos', owner, repo);
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _.get)({
              url: url,
              config: config,
              noCache: true
            });

          case 5:
            response = _context3.sent;
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](2);
            response = null;

          case 11:
            return _context3.abrupt("return", response);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 8]]);
  }));

  return function readRepo(_x3) {
    return _ref6.apply(this, arguments);
  };
}(); // PATCH /api/v1/repos/{owner}/{repo}


exports.readRepo = readRepo;

var updateRepo =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref7) {
    var owner, repo, settings, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref7.owner, repo = _ref7.repo, settings = _ref7.settings, config = _ref7.config;
            url = _path.default.join(apiPath, 'repos', owner, repo);
            payload = _objectSpread({}, settings);
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _.patch)({
              url: url,
              payload: payload,
              config: config
            });

          case 6:
            response = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](3);
            response = null;

          case 12:
            return _context4.abrupt("return", response);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 9]]);
  }));

  return function updateRepo(_x4) {
    return _ref8.apply(this, arguments);
  };
}(); // DELETE /api/v1/repos/{owner}/{repo}


exports.updateRepo = updateRepo;

var deleteRepo =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_ref9) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            owner = _ref9.owner, repo = _ref9.repo, config = _ref9.config;
            url = _path.default.join(apiPath, 'repos', owner, repo);
            _context5.prev = 2;
            _context5.next = 5;
            return (0, _.del)({
              url: url,
              config: config
            });

          case 5:
            response = _context5.sent;
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](2);
            response = null;

          case 11:
            return _context5.abrupt("return", response);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 8]]);
  }));

  return function deleteRepo(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

exports.deleteRepo = deleteRepo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9yZXBvcy5qcyJdLCJuYW1lcyI6WyJhcGlQYXRoIiwiZW5zdXJlUmVwbyIsIm93bmVyIiwicmVwbyIsInNldHRpbmdzIiwiY29uZmlnIiwicmVhZFJlcG8iLCJyZXBvc2l0b3J5IiwiY3JlYXRlUmVwbyIsInVybCIsIlBhdGgiLCJqb2luIiwicGF5bG9hZCIsIm5hbWUiLCJhdXRvX2luaXQiLCJyZXNwb25zZSIsIm5vQ2FjaGUiLCJ1cGRhdGVSZXBvIiwiZGVsZXRlUmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsUUFBaEI7O0FBRU8sSUFBTUMsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLFlBQUFBLEtBQVIsUUFBUUEsS0FBUixFQUFlQyxJQUFmLFFBQWVBLElBQWYsRUFBcUJDLFFBQXJCLFFBQXFCQSxRQUFyQixFQUErQkMsTUFBL0IsUUFBK0JBLE1BQS9CO0FBQUE7QUFBQSxtQkFDREMsUUFBUSxDQUFDO0FBQUNKLGNBQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRQyxjQUFBQSxJQUFJLEVBQUpBLElBQVI7QUFBY0UsY0FBQUEsTUFBTSxFQUFOQTtBQUFkLGFBQUQsQ0FEUDs7QUFBQTtBQUNwQkUsWUFBQUEsVUFEb0I7O0FBQUEsZ0JBRW5CQSxVQUZtQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUVZQyxVQUFVLENBQUM7QUFBQ0wsY0FBQUEsSUFBSSxFQUFKQSxJQUFEO0FBQU9DLGNBQUFBLFFBQVEsRUFBUkEsUUFBUDtBQUFpQkMsY0FBQUEsTUFBTSxFQUFOQTtBQUFqQixhQUFELENBRnRCOztBQUFBO0FBRVBFLFlBQUFBLFVBRk87O0FBQUE7QUFBQSw2Q0FHakJBLFVBSGlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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TyxJQUFNQyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUWhCLFlBQUFBLEtBQVIsU0FBUUEsS0FBUixFQUFlQyxJQUFmLFNBQWVBLElBQWYsRUFBcUJFLE1BQXJCLFNBQXFCQSxNQUFyQjtBQUNsQkksWUFBQUEsR0FEa0IsR0FDWkMsY0FBS0MsSUFBTCxDQUFVWCxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCRSxLQUE1QixFQUFtQ0MsSUFBbkMsQ0FEWTtBQUFBO0FBQUE7QUFBQSxtQkFJTCxXQUFJO0FBQUNNLGNBQUFBLEdBQUcsRUFBSEEsR0FBRDtBQUFNSixjQUFBQSxNQUFNLEVBQU5BO0FBQU4sYUFBSixDQUpLOztBQUFBO0FBSXRCVSxZQUFBQSxRQUpzQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS05BLFlBQUFBLFFBQVEsR0FBRyxJQUFYOztBQUxNO0FBQUEsOENBTWpCQSxRQU5pQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWRyxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IGdldCwgcG9zdCwgcGF0Y2gsIGRlbCB9IGZyb20gJy4uLyc7XG5cbmNvbnN0IGFwaVBhdGggPSAnYXBpL3YxJztcblxuZXhwb3J0IGNvbnN0IGVuc3VyZVJlcG8gPSBhc3luYyAoe293bmVyLCByZXBvLCBzZXR0aW5ncywgY29uZmlnfSkgPT4ge1xuICBsZXQgcmVwb3NpdG9yeSA9IGF3YWl0IHJlYWRSZXBvKHtvd25lciwgcmVwbywgY29uZmlnfSk7XG4gIGlmICghcmVwb3NpdG9yeSkgcmVwb3NpdG9yeSA9IGF3YWl0IGNyZWF0ZVJlcG8oe3JlcG8sIHNldHRpbmdzLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlcG9zaXRvcnk7XG59O1xuXG4vLyBQT1NUIC9hcGkvdjEvdXNlci9yZXBvc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcG8gPSBhc3luYyAoe3JlcG8sIHNldHRpbmdzLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAndXNlcicsICdyZXBvcycpO1xuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIG5hbWU6IHJlcG8sXG4gICAgYXV0b19pbml0OiB0cnVlLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBgJHtyZXBvfSBjcmVhdGVkIHZpYSBBUEkuYCxcbiAgICAvLyBwcml2YXRlOiB0cnVlLFxuICAgIC8vIHJlYWRtZTogYCMgJHtyZXBvfSBSRUFETUVgLFxuICAgIC8vIGxpY2Vuc2U6IGBsaWNlbnNlIHRleHQgaGVyZWAsXG4gICAgLi4uc2V0dGluZ3NcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3Qoe3VybCwgcGF5bG9hZCwgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbi8vIEdFVCAvYXBpL3YxL3JlcG9zL3tvd25lcn0ve3JlcG99XG5leHBvcnQgY29uc3QgcmVhZFJlcG8gPSBhc3luYyAoe293bmVyLCByZXBvLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwbyk7XG4gIGxldCByZXNwb25zZTtcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IGF3YWl0IGdldCh7dXJsLCBjb25maWcsIG5vQ2FjaGU6IHRydWV9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmVzcG9uc2UgPSBudWxsIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuLy8gUEFUQ0ggL2FwaS92MS9yZXBvcy97b3duZXJ9L3tyZXBvfVxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlcG8gPSBhc3luYyAoe293bmVyLCByZXBvLCBzZXR0aW5ncywgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8pO1xuICBjb25zdCBwYXlsb2FkID0ge1xuICAvLyBhbGxvd19tZXJnZV9jb21taXRzOiB0cnVlLFxuICAvLyBhbGxvd19yZWJhc2U6IHRydWUsXG4gIC8vIGFsbG93X3JlYmFzZV9leHBsaWNpdDogdHJ1ZSxcbiAgLy8gYWxsb3dfc3F1YXNoX21lcmdlOiB0cnVlLFxuICAvLyBhcmNoaXZlZDogdHJ1ZSxcbiAgLy8gZGVmYXVsdF9icmFuY2g6IFwic3RyaW5nXCIsXG4gIC8vIGRlc2NyaXB0aW9uOiBcInN0cmluZ1wiLFxuICAvLyBlbmFibGVfaXNzdWVzOiB0cnVlLFxuICAvLyBlbmFibGVfcHVsbF9yZXF1ZXN0czogdHJ1ZSxcbiAgLy8gZW5hYmxlX3dpa2k6IHRydWUsXG4gIC8vIGlnbm9yZV93aGl0ZXNwYWNlOiB0cnVlLFxuICAvLyBuYW1lOiBcInN0cmluZ1wiLFxuICAvLyBwcml2YXRlOiB0cnVlLFxuICAvLyB3ZWJzaXRlOiBcInN0cmluZ1wiLFxuICAgIC4uLnNldHRpbmdzLFxuICB9XG4gIGxldCByZXNwb25zZTtcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IGF3YWl0IHBhdGNoKHt1cmwsIHBheWxvYWQsIGNvbmZpZ30pO1xuICB9IGNhdGNoKGVycm9yKSB7IHJlc3BvbnNlID0gbnVsbCB9XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbi8vIERFTEVURSAvYXBpL3YxL3JlcG9zL3tvd25lcn0ve3JlcG99XG5leHBvcnQgY29uc3QgZGVsZXRlUmVwbyA9IGFzeW5jICh7b3duZXIsIHJlcG8sIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsIG93bmVyLCByZXBvKTtcbiAgbGV0IHJlc3BvbnNlO1xuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZGVsKHt1cmwsIGNvbmZpZ30pO1xuICB9IGNhdGNoIChlcnJvcikgeyByZXNwb25zZSA9IG51bGwgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuIl19