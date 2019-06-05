"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repoTreeUrl = exports.fetchTree = exports.getTree = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1';

var getTree =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var url, config, response, listing;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, config = _ref.config;
            _context.next = 3;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 3:
            response = _context.sent;
            listing = response.tree;
            return _context.abrupt("return", listing);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTree(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // http://git.door43.org/api/v1/repos/unfoldingword/en_ugl/git/trees/master


exports.getTree = getTree;

var fetchTree =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var owner, repository, _ref3$sha, sha, config, url, data, tree;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref3.owner, repository = _ref3.repository, _ref3$sha = _ref3.sha, sha = _ref3$sha === void 0 ? 'master' : _ref3$sha, config = _ref3.config;
            _context2.prev = 1;
            url = _path.default.join(apiPath, 'repos', owner, repository, 'git', 'trees', sha);
            _context2.next = 5;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 5:
            data = _context2.sent;
            tree = JSON.parse(data);
            return _context2.abrupt("return", tree);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", null);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function fetchTree(_x2) {
    return _ref4.apply(this, arguments);
  };
}(); // /api/v1/repos/unfoldingWord/en_ta/git/trees/master


exports.fetchTree = fetchTree;

var repoTreeUrl = function repoTreeUrl(_ref5) {
  var full_name = _ref5.full_name,
      branch = _ref5.branch,
      default_branch = _ref5.default_branch;

  var url = _path.default.join(apiPath, 'repos', full_name, 'git', 'trees', branch || default_branch);

  return url;
};

exports.repoTreeUrl = repoTreeUrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9naXQvdHJlZXMuanMiXSwibmFtZXMiOlsiYXBpUGF0aCIsImdldFRyZWUiLCJ1cmwiLCJjb25maWciLCJyZXNwb25zZSIsImxpc3RpbmciLCJ0cmVlIiwiZmV0Y2hUcmVlIiwib3duZXIiLCJyZXBvc2l0b3J5Iiwic2hhIiwiUGF0aCIsImpvaW4iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVwb1RyZWVVcmwiLCJmdWxsX25hbWUiLCJicmFuY2giLCJkZWZhdWx0X2JyYW5jaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxRQUFoQjs7QUFFTyxJQUFNQyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsWUFBQUEsR0FBUixRQUFRQSxHQUFSLEVBQWFDLE1BQWIsUUFBYUEsTUFBYjtBQUFBO0FBQUEsbUJBQ0UsV0FBSTtBQUFDRCxjQUFBQSxHQUFHLEVBQUhBLEdBQUQ7QUFBTUMsY0FBQUEsTUFBTSxFQUFOQTtBQUFOLGFBQUosQ0FERjs7QUFBQTtBQUNmQyxZQUFBQSxRQURlO0FBRWZDLFlBQUFBLE9BRmUsR0FFTEQsUUFBUSxDQUFDRSxJQUZKO0FBQUEsNkNBR2RELE9BSGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEosT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiLEMsQ0FNUDs7Ozs7QUFDTyxJQUFNTSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLFlBQUFBLEtBQVIsU0FBUUEsS0FBUixFQUFlQyxVQUFmLFNBQWVBLFVBQWYsb0JBQTJCQyxHQUEzQixFQUEyQkEsR0FBM0IsMEJBQStCLFFBQS9CLGNBQXlDUCxNQUF6QyxTQUF5Q0EsTUFBekM7QUFBQTtBQUVmRCxZQUFBQSxHQUZlLEdBRVRTLGNBQUtDLElBQUwsQ0FBVVosT0FBVixFQUFtQixPQUFuQixFQUE0QlEsS0FBNUIsRUFBbUNDLFVBQW5DLEVBQStDLEtBQS9DLEVBQXNELE9BQXRELEVBQStEQyxHQUEvRCxDQUZTO0FBQUE7QUFBQSxtQkFHRixXQUFJO0FBQUNSLGNBQUFBLEdBQUcsRUFBSEEsR0FBRDtBQUFNQyxjQUFBQSxNQUFNLEVBQU5BO0FBQU4sYUFBSixDQUhFOztBQUFBO0FBR2ZVLFlBQUFBLElBSGU7QUFJZlAsWUFBQUEsSUFKZSxHQUlSUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsSUFBWCxDQUpRO0FBQUEsOENBS2RQLElBTGM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBT2QsSUFQYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUQyxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWYsQyxDQVdQOzs7OztBQUNPLElBQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBQXlDO0FBQUEsTUFBdkNDLFNBQXVDLFNBQXZDQSxTQUF1QztBQUFBLE1BQTVCQyxNQUE0QixTQUE1QkEsTUFBNEI7QUFBQSxNQUFwQkMsY0FBb0IsU0FBcEJBLGNBQW9COztBQUNsRSxNQUFNakIsR0FBRyxHQUFHUyxjQUFLQyxJQUFMLENBQVVaLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEJpQixTQUE1QixFQUF1QyxLQUF2QyxFQUE4QyxPQUE5QyxFQUF1REMsTUFBTSxJQUFJQyxjQUFqRSxDQUFaOztBQUNBLFNBQU9qQixHQUFQO0FBQ0QsQ0FITSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi8nO1xuXG5jb25zdCBhcGlQYXRoID0gJ2FwaS92MSc7XG5cbmV4cG9ydCBjb25zdCBnZXRUcmVlID0gYXN5bmMgKHt1cmwsIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoe3VybCwgY29uZmlnfSk7XG4gIGNvbnN0IGxpc3RpbmcgPSByZXNwb25zZS50cmVlO1xuICByZXR1cm4gbGlzdGluZztcbn07XG5cbi8vIGh0dHA6Ly9naXQuZG9vcjQzLm9yZy9hcGkvdjEvcmVwb3MvdW5mb2xkaW5nd29yZC9lbl91Z2wvZ2l0L3RyZWVzL21hc3RlclxuZXhwb3J0IGNvbnN0IGZldGNoVHJlZSA9IGFzeW5jICh7b3duZXIsIHJlcG9zaXRvcnksIHNoYT0nbWFzdGVyJywgY29uZmlnfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwb3NpdG9yeSwgJ2dpdCcsICd0cmVlcycsIHNoYSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldCh7dXJsLCBjb25maWd9KTtcbiAgICBjb25zdCB0cmVlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICByZXR1cm4gdHJlZTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vLyAvYXBpL3YxL3JlcG9zL3VuZm9sZGluZ1dvcmQvZW5fdGEvZ2l0L3RyZWVzL21hc3RlclxuZXhwb3J0IGNvbnN0IHJlcG9UcmVlVXJsID0gKHtmdWxsX25hbWUsIGJyYW5jaCwgZGVmYXVsdF9icmFuY2h9KSA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBmdWxsX25hbWUsICdnaXQnLCAndHJlZXMnLCBicmFuY2ggfHwgZGVmYXVsdF9icmFuY2gpO1xuICByZXR1cm4gdXJsO1xufTtcbiJdfQ==