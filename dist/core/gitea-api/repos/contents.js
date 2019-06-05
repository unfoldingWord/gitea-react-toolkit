"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureFile = exports.removeFile = exports.updateContent = exports.readContent = exports.createContent = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1'; // POST /api/v1/repos/{owner}/{repo}/contents/{filepath}

var createContent =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var owner, repo, filepath, payload, config, url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref.owner, repo = _ref.repo, filepath = _ref.filepath, payload = _ref.payload, config = _ref.config;
            url = _path.default.join(apiPath, 'repos', owner, repo, 'contents', filepath);
            _context.next = 4;
            return (0, _.post)({
              url: url,
              payload: payload,
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

  return function createContent(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // GET /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}


exports.createContent = createContent;

var readContent =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var owner, repo, filepath, config, url, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref3.owner, repo = _ref3.repo, filepath = _ref3.filepath, config = _ref3.config;
            url = _path.default.join(apiPath, 'repos', owner, repo, 'contents', filepath);
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

  return function readContent(_x2) {
    return _ref4.apply(this, arguments);
  };
}(); // PUT /api/v1/repos/{owner}/{repo}/contents/{filepath}


exports.readContent = readContent;

var updateContent =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref5) {
    var owner, repo, filepath, payload, config, url, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = _ref5.owner, repo = _ref5.repo, filepath = _ref5.filepath, payload = _ref5.payload, config = _ref5.config;
            url = _path.default.join(apiPath, 'repos', owner, repo, 'contents', filepath);
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _.put)({
              url: url,
              payload: payload,
              config: config
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

  return function updateContent(_x3) {
    return _ref6.apply(this, arguments);
  };
}(); // DELETE /api/v1/repos/{owner}/{repo}/contents/{filepath}?ref={branch}


exports.updateContent = updateContent;

var removeFile =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref7) {
    var owner, repo, filepath, payload, config, url, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref7.owner, repo = _ref7.repo, filepath = _ref7.filepath, payload = _ref7.payload, config = _ref7.config;
            url = _path.default.join(apiPath, 'repos', owner, repo, 'contents', filepath);
            _context4.prev = 2;
            _context4.next = 5;
            return (0, _.del)({
              url: url,
              payload: payload,
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

  return function removeFile(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

exports.removeFile = removeFile;

var ensureFile =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_ref9) {
    var owner, repo, filepath, payload, config, file, _ref11, content;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            owner = _ref9.owner, repo = _ref9.repo, filepath = _ref9.filepath, payload = _ref9.payload, config = _ref9.config;
            _context5.next = 3;
            return readContent({
              owner: owner,
              repo: repo,
              filepath: filepath,
              config: config
            });

          case 3:
            file = _context5.sent;

            if (file) {
              _context5.next = 10;
              break;
            }

            _context5.next = 7;
            return createContent({
              owner: owner,
              repo: repo,
              filepath: filepath,
              payload: payload,
              config: config
            });

          case 7:
            _ref11 = _context5.sent;
            content = _ref11.content;
            file = content;

          case 10:
            return _context5.abrupt("return", file);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function ensureFile(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

exports.ensureFile = ensureFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9jb250ZW50cy5qcyJdLCJuYW1lcyI6WyJhcGlQYXRoIiwiY3JlYXRlQ29udGVudCIsIm93bmVyIiwicmVwbyIsImZpbGVwYXRoIiwicGF5bG9hZCIsImNvbmZpZyIsInVybCIsIlBhdGgiLCJqb2luIiwicmVzcG9uc2UiLCJyZWFkQ29udGVudCIsIm5vQ2FjaGUiLCJ1cGRhdGVDb250ZW50IiwicmVtb3ZlRmlsZSIsImVuc3VyZUZpbGUiLCJmaWxlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxRQUFoQixDLENBRUE7O0FBQ08sSUFBTUMsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLFlBQUFBLEtBQVIsUUFBUUEsS0FBUixFQUFlQyxJQUFmLFFBQWVBLElBQWYsRUFBcUJDLFFBQXJCLFFBQXFCQSxRQUFyQixFQUErQkMsT0FBL0IsUUFBK0JBLE9BQS9CLEVBQXdDQyxNQUF4QyxRQUF3Q0EsTUFBeEM7QUFDckJDLFlBQUFBLEdBRHFCLEdBQ2ZDLGNBQUtDLElBQUwsQ0FBVVQsT0FBVixFQUFtQixPQUFuQixFQUE0QkUsS0FBNUIsRUFBbUNDLElBQW5DLEVBQXlDLFVBQXpDLEVBQXFEQyxRQUFyRCxDQURlO0FBQUE7QUFBQSxtQkFFSixZQUFLO0FBQUNHLGNBQUFBLEdBQUcsRUFBSEEsR0FBRDtBQUFNRixjQUFBQSxPQUFPLEVBQVBBLE9BQU47QUFBZUMsY0FBQUEsTUFBTSxFQUFOQTtBQUFmLGFBQUwsQ0FGSTs7QUFBQTtBQUVyQkksWUFBQUEsUUFGcUI7QUFBQSw2Q0FHcEJBLFFBSG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJULGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIsQyxD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QUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWSSxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCOzs7O0FBU0EsSUFBTUMsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRYixZQUFBQSxLQUFSLFNBQVFBLEtBQVIsRUFBZUMsSUFBZixTQUFlQSxJQUFmLEVBQXFCQyxRQUFyQixTQUFxQkEsUUFBckIsRUFBK0JDLE9BQS9CLFNBQStCQSxPQUEvQixFQUF3Q0MsTUFBeEMsU0FBd0NBLE1BQXhDO0FBQUE7QUFBQSxtQkFDUEssV0FBVyxDQUFDO0FBQUNULGNBQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRQyxjQUFBQSxJQUFJLEVBQUpBLElBQVI7QUFBY0MsY0FBQUEsUUFBUSxFQUFSQSxRQUFkO0FBQXdCRSxjQUFBQSxNQUFNLEVBQU5BO0FBQXhCLGFBQUQsQ0FESjs7QUFBQTtBQUNwQlUsWUFBQUEsSUFEb0I7O0FBQUEsZ0JBRW5CQSxJQUZtQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdFZixhQUFhLENBQUM7QUFBQ0MsY0FBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVFDLGNBQUFBLElBQUksRUFBSkEsSUFBUjtBQUFjQyxjQUFBQSxRQUFRLEVBQVJBLFFBQWQ7QUFBd0JDLGNBQUFBLE9BQU8sRUFBUEEsT0FBeEI7QUFBaUNDLGNBQUFBLE1BQU0sRUFBTkE7QUFBakMsYUFBRCxDQUhmOztBQUFBO0FBQUE7QUFHZlcsWUFBQUEsT0FIZSxVQUdmQSxPQUhlO0FBSXRCRCxZQUFBQSxJQUFJLEdBQUdDLE9BQVA7O0FBSnNCO0FBQUEsOENBTWpCRCxJQU5pQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWRCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IGdldCwgcG9zdCwgcHV0LCBkZWwgfSBmcm9tICcuLi8nO1xuXG5jb25zdCBhcGlQYXRoID0gJ2FwaS92MSc7XG5cbi8vIFBPU1QgL2FwaS92MS9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97ZmlsZXBhdGh9XG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGVudCA9IGFzeW5jICh7b3duZXIsIHJlcG8sIGZpbGVwYXRoLCBwYXlsb2FkLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwbywgJ2NvbnRlbnRzJywgZmlsZXBhdGgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3Qoe3VybCwgcGF5bG9hZCwgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbi8vIEdFVCAvYXBpL3YxL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3tmaWxlcGF0aH0/cmVmPXticmFuY2h9XG5leHBvcnQgY29uc3QgcmVhZENvbnRlbnQgPSBhc3luYyAoe293bmVyLCByZXBvLCBmaWxlcGF0aCwgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8sICdjb250ZW50cycsIGZpbGVwYXRoKTtcbiAgbGV0IHJlc3BvbnNlO1xuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZ2V0KHt1cmwsIGNvbmZpZywgbm9DYWNoZTogdHJ1ZX0pO1xuICB9IGNhdGNoIChlcnJvcikgeyByZXNwb25zZSA9IG51bGwgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vLyBQVVQgL2FwaS92MS9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97ZmlsZXBhdGh9XG5leHBvcnQgY29uc3QgdXBkYXRlQ29udGVudCA9IGFzeW5jICh7b3duZXIsIHJlcG8sIGZpbGVwYXRoLCBwYXlsb2FkLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwbywgJ2NvbnRlbnRzJywgZmlsZXBhdGgpO1xuICBsZXQgcmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBwdXQoe3VybCwgcGF5bG9hZCwgY29uZmlnfSk7XG4gIH0gY2F0Y2goZXJyb3IpIHsgcmVzcG9uc2UgPSBudWxsIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuLy8gREVMRVRFIC9hcGkvdjEvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve2ZpbGVwYXRofT9yZWY9e2JyYW5jaH1cbmV4cG9ydCBjb25zdCByZW1vdmVGaWxlID0gYXN5bmMgKHtvd25lciwgcmVwbywgZmlsZXBhdGgsIHBheWxvYWQsIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsIG93bmVyLCByZXBvLCAnY29udGVudHMnLCBmaWxlcGF0aCk7XG4gIGxldCByZXNwb25zZTtcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IGF3YWl0IGRlbCh7dXJsLCBwYXlsb2FkLCBjb25maWd9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmVzcG9uc2UgPSBudWxsIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUZpbGUgPSBhc3luYyAoe293bmVyLCByZXBvLCBmaWxlcGF0aCwgcGF5bG9hZCwgY29uZmlnfSkgPT4ge1xuICBsZXQgZmlsZSA9IGF3YWl0IHJlYWRDb250ZW50KHtvd25lciwgcmVwbywgZmlsZXBhdGgsIGNvbmZpZ30pO1xuICBpZiAoIWZpbGUpIHtcbiAgICBjb25zdCB7Y29udGVudH0gPSBhd2FpdCBjcmVhdGVDb250ZW50KHtvd25lciwgcmVwbywgZmlsZXBhdGgsIHBheWxvYWQsIGNvbmZpZ30pO1xuICAgIGZpbGUgPSBjb250ZW50O1xuICB9XG4gIHJldHVybiBmaWxlO1xufTtcbiJdfQ==